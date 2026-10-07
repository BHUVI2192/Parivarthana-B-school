<?php
/**
 * Blog Scraper Service
 * Fetches blog posts from RSS feed with caching
 */

class BlogScraper {
    
    private $rssUrl = 'https://latestnewsandeventspbs.blogspot.com/feeds/posts/default?alt=rss';
    private $cacheDir;
    private $cacheFile;
    private $cacheDuration = 600; // 10 minutes
    
    public function __construct() {
        $this->cacheDir = __DIR__ . '/../../cache';
        $this->cacheFile = $this->cacheDir . '/blog_feed.json';
        
        // Create cache directory if not exists
        if (!file_exists($this->cacheDir)) {
            mkdir($this->cacheDir, 0755, true);
        }
    }
    
    /**
     * Fetch blog posts with caching
     * @return array
     */
    public function fetchPosts() {
        // Check cache first
        if ($this->isCacheValid()) {
            return $this->getCachedPosts();
        }
        
        // Try RSS feed
        $posts = $this->fetchFromRSS();
        
        if (!empty($posts)) {
            $this->saveToCache($posts);
            return $posts;
        }
        
        // Fallback to cached data even if expired
        if (file_exists($this->cacheFile)) {
            return $this->getCachedPosts();
        }
        
        return [];
    }
    
    /**
     * Fetch from RSS feed
     * @return array
     */
    private function fetchFromRSS() {
        try {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $this->rssUrl);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
            curl_setopt($ch, CURLOPT_TIMEOUT, 30);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            
            $response = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
            
            if ($httpCode !== 200 || empty($response)) {
                error_log("RSS fetch failed: HTTP $httpCode");
                return [];
            }
            
            return $this->parseRSS($response);
            
        } catch (Exception $e) {
            error_log("RSS fetch error: " . $e->getMessage());
            return [];
        }
    }
    
    /**
     * Parse RSS XML
     * @param string $xml
     * @return array
     */
    private function parseRSS($xml) {
        $posts = [];
        
        libxml_use_internal_errors(true);
        $doc = simplexml_load_string($xml);
        
        if ($doc === false) {
            error_log("Failed to parse RSS XML");
            return [];
        }
        
        $channel = $doc->channel;
        
        if (!isset($channel->item)) {
            return [];
        }
        
        foreach ($channel->item as $item) {
            $post = [
                'title' => (string)$item->title,
                'link' => (string)$item->link,
                'description' => $this->cleanDescription((string)$item->description),
                'published_date' => date('Y-m-d', strtotime((string)$item->pubDate)),
                'category' => 'Blog'
            ];
            
            // Try to extract image from content
            $content = (string)$item->children('content', true)->encoded;
            $imageUrl = $this->extractImageUrl($content);
            if ($imageUrl) {
                $post['image_url'] = $imageUrl;
            }
            
            $posts[] = $post;
        }
        
        return $posts;
    }
    
    /**
     * Extract image URL from HTML content
     * @param string $html
     * @return string|null
     */
    private function extractImageUrl($html) {
        if (preg_match('/<img[^>]+src=["\']([^"\']+)["\']/', $html, $matches)) {
            return $matches[1];
        }
        return null;
    }
    
    /**
     * Clean description text
     * @param string $description
     * @return string
     */
    private function cleanDescription($description) {
        // Remove HTML tags
        $text = strip_tags($description);
        // Decode HTML entities
        $text = html_entity_decode($text);
        // Limit length
        if (strlen($text) > 200) {
            $text = substr($text, 0, 200) . '...';
        }
        return trim($text);
    }
    
    /**
     * Check if cache is valid
     * @return bool
     */
    private function isCacheValid() {
        if (!file_exists($this->cacheFile)) {
            return false;
        }
        
        $cacheTime = filemtime($this->cacheFile);
        return (time() - $cacheTime) < $this->cacheDuration;
    }
    
    /**
     * Get cached posts
     * @return array
     */
    private function getCachedPosts() {
        $content = file_get_contents($this->cacheFile);
        $data = json_decode($content, true);
        return $data['posts'] ?? [];
    }
    
    /**
     * Save posts to cache
     * @param array $posts
     */
    private function saveToCache($posts) {
        $data = [
            'cached_at' => date('Y-m-d H:i:s'),
            'posts' => $posts
        ];
        
        file_put_contents($this->cacheFile, json_encode($data));
    }
    
    /**
     * Force refresh cache
     * @return array
     */
    public function refreshCache() {
        // Delete cache file
        if (file_exists($this->cacheFile)) {
            unlink($this->cacheFile);
        }
        
        return $this->fetchPosts();
    }
}
