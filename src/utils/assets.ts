/**
 * Resolves static asset paths and database uploaded file paths with the configured base URL (e.g., /BSchool/)
 * @param path Relative or absolute path (e.g., '/PBS.png', 'uploads/faculty/photo.jpg', '/uploads/gallery/pic.png')
 * @returns Fully resolved asset URL
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  
  // Normalize Windows backslashes to forward slashes
  const normalized = path.replace(/\\/g, '/').trim();
  
  // If it's already an external URL, base64 data URL, or blob, return as is
  if (
    normalized.startsWith('http://') ||
    normalized.startsWith('https://') ||
    normalized.startsWith('data:') ||
    normalized.startsWith('blob:')
  ) {
    return normalized;
  }
  
  // Clean leading slash
  let cleanPath = normalized.startsWith('/') ? normalized.substring(1) : normalized;
  if (cleanPath.toLowerCase().startsWith('bschool/')) {
    cleanPath = cleanPath.substring(8);
  }
  
  // Base path resolution
  const isBSchoolPath = typeof window !== 'undefined' && window.location.pathname.toLowerCase().startsWith('/bschool');
  const configuredBase = import.meta.env.BASE_URL || '/BSchool/';
  const basePrefix = isBSchoolPath || configuredBase.includes('BSchool') ? '/BSchool/' : '/';
  
  return `${basePrefix}${cleanPath}`;
}

/**
 * Resolves API endpoints with the configured base URL (e.g., /BSchool/api/auth/login.php)
 * @param endpoint Relative or absolute API path (e.g., 'api/auth/login.php' or '/api/news/manage.php')
 * @returns Fully resolved API URL
 */
export function getApiUrl(endpoint: string): string {
  if (!endpoint) return '';
  if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) return endpoint;
  
  const isBSchoolPath = typeof window !== 'undefined' && window.location.pathname.toLowerCase().startsWith('/bschool');
  const configuredBase = import.meta.env.BASE_URL || '/BSchool/';
  const basePrefix = isBSchoolPath || configuredBase.includes('BSchool') ? '/BSchool/' : '/';
  
  let cleanPath = endpoint.startsWith('/') ? endpoint.substring(1) : endpoint;
  if (cleanPath.toLowerCase().startsWith('bschool/')) {
    cleanPath = cleanPath.substring(8);
  }
  
  return `${basePrefix}${cleanPath}`;
}
