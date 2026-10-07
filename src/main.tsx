import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { getAssetUrl } from './utils/assets';

// Dynamically ensure Parivarthana Business School Favicon is mounted properly across all nested routes
(function initFavicon() {
  try {
    const faviconUrl = getAssetUrl('parivarthana-logo.png');
    const icoUrl = getAssetUrl('favicon-96x96.png');
    
    // Update or create standard icon links
    const iconRelTypes = ['icon', 'shortcut icon', 'apple-touch-icon'];
    iconRelTypes.forEach(rel => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = rel === 'apple-touch-icon' ? getAssetUrl('web-app-manifest-512x512.png') : faviconUrl;
      if (rel === 'icon') {
        link.type = 'image/png';
      }
    });
  } catch (e) {
    console.warn('Favicon initialization error:', e);
  }
})();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
