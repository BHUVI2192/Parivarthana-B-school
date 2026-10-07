import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getAssetUrl, getApiUrl } from '../utils/assets';

interface GalleryItem {
  id: number;
  title: string;
  description?: string;
  image_url: string;
  category: string;
  created_at: string;
}

const DEFAULT_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Parivarthana Business School Campus',
    description: 'Modern campus building with state-of-the-art facilities in Mysore.',
    image_url: 'building.jpg',
    category: 'Campus',
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Cultural Events & Celebrations',
    description: 'Students participating enthusiastically in festive and cultural activities.',
    image_url: 'cultural.jpg',
    category: 'Events',
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'Expert Talks & Seminars',
    description: 'Renowned industry experts and professors addressing PBS students.',
    image_url: 'ExpertTalk2.jpg',
    category: 'Events',
    created_at: new Date().toISOString(),
  },
  {
    id: 4,
    title: 'Research & Library Facilities',
    description: 'Extensive collection of books, academic journals, and modern study labs.',
    image_url: 'research.jpg',
    category: 'Facilities',
    created_at: new Date().toISOString(),
  },
  {
    id: 5,
    title: 'Annual Sports Championship',
    description: 'PBS student athletes excelling in sports and fitness competitions.',
    image_url: 'sportsPBS.jpg',
    category: 'Achievements',
    created_at: new Date().toISOString(),
  },
  {
    id: 6,
    title: 'Industrial Visits & Corporate Exposure',
    description: 'Hands-on practical learning through corporate and industrial visits.',
    image_url: 'IndustryVisit.jpg',
    category: 'Students',
    created_at: new Date().toISOString(),
  },
  {
    id: 7,
    title: 'Placement Drives & Offer Letters',
    description: 'Students successfully securing placement offers with top recruiters.',
    image_url: 'offerLetter..jpg',
    category: 'Achievements',
    created_at: new Date().toISOString(),
  },
  {
    id: 8,
    title: 'Convocation & Graduation Day',
    description: 'Celebrating the academic milestones and achievements of our graduates.',
    image_url: 'graduation.jpg',
    category: 'Students',
    created_at: new Date().toISOString(),
  },
  {
    id: 9,
    title: 'Social Service & Community Outreach',
    description: 'PBS students actively contributing to community welfare and social causes.',
    image_url: 'SocialService.jpg',
    category: 'General',
    created_at: new Date().toISOString(),
  },
];

const GalleryPage: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(DEFAULT_GALLERY_ITEMS);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const categories = ['All', 'Campus', 'Events', 'Students', 'Facilities', 'Achievements', 'General'];

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const response = await fetch(getApiUrl('api/gallery/manage.php'));
      if (response.ok) {
        const result = await response.json();
        if (result.success && Array.isArray(result.data) && result.data.length > 0) {
          setGalleryItems(result.data.filter((item: any) => item.is_active !== false));
          setLoading(false);
          return;
        }
      }
    } catch (error) {
      console.warn('Error fetching gallery from API, using fallback:', error);
    }
    
    // Fallback to localStorage
    try {
      const stored = localStorage.getItem('pbs_gallery_data');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setGalleryItems(parsed.filter((item: any) => item.is_active !== false));
          setLoading(false);
          return;
        }
      }
    } catch (e) {
      console.error('Error parsing stored gallery:', e);
    }
    
    setGalleryItems(DEFAULT_GALLERY_ITEMS);
    setLoading(false);
  };

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredItems[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredItems[prevIndex]);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 mb-12 text-white">
            <div className="flex items-center justify-center mb-4">
              <ImageIcon className="w-16 h-16 mr-4" />
              <h1 className="text-4xl font-bold">Gallery</h1>
            </div>
            <p className="text-center text-lg text-blue-100 max-w-3xl mx-auto">
              Explore moments captured from our campus life, events, infrastructure, and various activities that make our institution vibrant and dynamic.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredItems.length === 0 && (
            <div className="bg-white rounded-lg shadow-lg p-12 text-center">
              <ImageIcon className="w-20 h-20 mx-auto mb-4 text-gray-400" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No Images Yet</h3>
              <p className="text-gray-600">
                {selectedCategory === 'All'
                  ? 'Gallery images will be displayed here once added.'
                  : `No images found in the ${selectedCategory} category.`}
              </p>
            </div>
          )}

          {/* Gallery Grid */}
          {!loading && filteredItems.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => openLightbox(item, index)}
                >
                  <div className="aspect-w-16 aspect-h-12 h-64 overflow-hidden bg-gray-200">
                    <img
                      src={getAssetUrl(item.image_url)}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      {item.description && (
                        <p className="text-sm text-gray-200 line-clamp-2">{item.description}</p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs bg-white/20 px-2 py-1 rounded">{item.category}</span>
                        {item.created_at && (
                          <span className="text-xs flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {formatDate(item.created_at)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Stats Section */}
          {!loading && galleryItems.length > 0 && (
            <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Gallery Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {categories.filter(cat => cat !== 'All').map((category) => {
                  const count = galleryItems.filter(item => item.category === category).length;
                  return (
                    <div key={category} className="text-center p-4 bg-gray-50 rounded-lg">
                      <ImageIcon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      <p className="text-2xl font-bold text-gray-900">{count}</p>
                      <p className="text-xs text-gray-600">{category}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={getAssetUrl(selectedImage.image_url)}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              {selectedImage.description && (
                <p className="text-gray-300 mb-2">{selectedImage.description}</p>
              )}
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <span className="bg-white/10 px-3 py-1 rounded">{selectedImage.category}</span>
                {selectedImage.created_at && (
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(selectedImage.created_at)}
                  </span>
                )}
                <span>
                  {currentIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
