import { useState, useEffect, useRef, useCallback } from 'react';
import { getApiUrl } from '../utils/assets';

interface SyncData {
  news?: any[];
  faculty?: any[];
  gallery?: any[];
  achievers?: any[];
  blog_posts?: any[];
  pending_enquiries?: number;
  recent_activity?: any[];
}

interface UseRealtimeSyncOptions {
  program?: string;
  galleryCategory?: string;
  achieverCategory?: string;
  pollingInterval?: number;
  enabled?: boolean;
}

export const useRealtimeSync = (options: UseRealtimeSyncOptions = {}) => {
  const {
    program,
    galleryCategory,
    achieverCategory,
    pollingInterval = 8000, // 8 seconds default
    enabled = true,
  } = options;

  const [data, setData] = useState<SyncData>({});
  const [hasUpdates, setHasUpdates] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const lastFetchRef = useRef<string>('1970-01-01 00:00:00');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchUpdates = useCallback(async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        last_fetch: lastFetchRef.current,
      });

      if (program) params.append('program', program);
      if (galleryCategory) params.append('gallery_category', galleryCategory);
      if (achieverCategory) params.append('achiever_category', achieverCategory);

      // Get auth token from localStorage
      const storedUser = localStorage.getItem('adminUser');
      const headers: Record<string, string> = {};
      if (storedUser) {
        try {
          const parsed = JSON.parse(storedUser);
          if (parsed.token) {
            headers['Authorization'] = `Bearer ${parsed.token}`;
          }
        } catch (e) {
          console.error('Error parsing stored user:', e);
        }
      }

      const response = await fetch(getApiUrl(`api/sync/dashboard.php?${params}`), {
        credentials: 'include',
        headers,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch updates');
      }

      const result = await response.json();

      if (result.success) {
        const { has_updates, data: newData, timestamp } = result.data;

        if (has_updates && newData) {
          setData((prev) => ({ ...prev, ...newData }));
          setHasUpdates(true);
          
          // Reset hasUpdates after a short delay
          setTimeout(() => setHasUpdates(false), 1000);
        }

        lastFetchRef.current = timestamp;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      console.error('Sync error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [enabled, program, galleryCategory, achieverCategory]);

  // Start polling
  useEffect(() => {
    if (!enabled) return;

    // Initial fetch
    fetchUpdates();

    // Set up interval
    intervalRef.current = setInterval(fetchUpdates, pollingInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [fetchUpdates, pollingInterval, enabled]);

  // Manual refresh function
  const refresh = useCallback(() => {
    lastFetchRef.current = '1970-01-01 00:00:00';
    return fetchUpdates();
  }, [fetchUpdates]);

  return {
    data,
    hasUpdates,
    isLoading,
    error,
    refresh,
  };
};

export default useRealtimeSync;
