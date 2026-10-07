import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, RefreshCw, AlertCircle, Upload, Image as ImageIcon, Check, Eye, EyeOff, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getAssetUrl, getApiUrl } from '../../utils/assets';

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image_url: string;
  category: string;
  is_active: boolean;
  created_at: string;
}

const CATEGORIES = ['Campus', 'Events', 'Students', 'Facilities', 'Achievements', 'General'];

const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 1,
    title: 'Parivarthana Business School Campus',
    description: 'Modern campus building with state-of-the-art facilities in Mysore.',
    image_url: 'building.jpg',
    category: 'Campus',
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Cultural Events & Celebrations',
    description: 'Students participating enthusiastically in festive and cultural activities.',
    image_url: 'cultural.jpg',
    category: 'Events',
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'Expert Talks & Interactive Seminars',
    description: 'Renowned industry experts and professors addressing PBS students.',
    image_url: 'ExpertTalk2.jpg',
    category: 'Events',
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 4,
    title: 'Research & Library Facilities',
    description: 'Extensive collection of books, academic journals, and modern study labs.',
    image_url: 'research.jpg',
    category: 'Facilities',
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 5,
    title: 'Annual Sports Championship',
    description: 'PBS student athletes excelling in sports and fitness competitions.',
    image_url: 'sportsPBS.jpg',
    category: 'Achievements',
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 6,
    title: 'Industrial Visits & Corporate Exposure',
    description: 'Hands-on practical learning through corporate and industrial visits.',
    image_url: 'IndustryVisit.jpg',
    category: 'Students',
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 7,
    title: 'Placement Drives & Offer Letters',
    description: 'Students successfully securing placement offers with top recruiters.',
    image_url: 'offerLetter..jpg',
    category: 'Achievements',
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 8,
    title: 'Convocation & Graduation Day',
    description: 'Celebrating the academic milestones and achievements of our graduates.',
    image_url: 'graduation.jpg',
    category: 'Students',
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 9,
    title: 'Social Service & Community Outreach',
    description: 'PBS students actively contributing to community welfare and social causes.',
    image_url: 'SocialService.jpg',
    category: 'General',
    is_active: true,
    created_at: new Date().toISOString(),
  },
];

const GalleryManagement: React.FC = () => {
  const { getAuthHeaders } = useAuth();
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Campus',
    image_url: '',
    is_active: true,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const getStoredGallery = (): GalleryItem[] => {
    try {
      const stored = localStorage.getItem('pbs_gallery_data');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error('Error loading stored gallery:', e);
    }
    return INITIAL_GALLERY;
  };

  const saveStoredGallery = (list: GalleryItem[]) => {
    try {
      localStorage.setItem('pbs_gallery_data', JSON.stringify(list));
    } catch (e) {
      console.error('Error saving gallery to storage:', e);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [selectedCategory]);

  const fetchItems = async () => {
    setIsLoading(true);
    setError('');
    try {
      const url = selectedCategory && selectedCategory !== 'All'
        ? getApiUrl(`api/gallery/manage.php?admin=1&category=${selectedCategory}`)
        : getApiUrl('api/gallery/manage.php?admin=1');
      
      const response = await fetch(url, { 
        credentials: 'include',
        headers: getAuthHeaders()
      });
      if (response.ok) {
        const result = await response.json();
        if (result.success && Array.isArray(result.data)) {
          setItems(result.data);
          saveStoredGallery(result.data);
          setIsLoading(false);
          return;
        }
      }
      // Fallback
      let fallback = getStoredGallery();
      if (selectedCategory && selectedCategory !== 'All') {
        fallback = fallback.filter(i => i.category === selectedCategory);
      }
      setItems(fallback);
    } catch (err) {
      console.warn('Backend API not reachable, using local storage fallback for gallery');
      let fallback = getStoredGallery();
      if (selectedCategory && selectedCategory !== 'All') {
        fallback = fallback.filter(i => i.category === selectedCategory);
      }
      setItems(fallback);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        // Auto-fill image_url with data URL immediately
        setFormData(prev => ({ ...prev, image_url: dataUrl }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.image_url.trim()) {
      setError('Please upload an image or provide an image URL.');
      return;
    }

    const payload: GalleryItem = {
      id: editingItem ? editingItem.id : Date.now(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      category: formData.category,
      image_url: formData.image_url.trim(),
      is_active: formData.is_active,
      created_at: editingItem ? editingItem.created_at : new Date().toISOString(),
    };

    let savedItem: GalleryItem = { ...payload };

    try {
      try {
        const url = editingItem
          ? getApiUrl(`api/gallery/manage.php?id=${editingItem.id}`)
          : getApiUrl('api/gallery/manage.php');

        const response = await fetch(url, {
          method: editingItem ? 'PUT' : 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            ...getAuthHeaders(),
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          const result = await response.json();
          if (result.success && result.data) {
            savedItem = {
              ...payload,
              id: Number(result.data.id) || payload.id,
              image_url: result.data.image_url || payload.image_url,
            };
          }
        }
      } catch (apiErr) {
        console.warn('API error during gallery save, saving locally:', apiErr);
      }

      // Update storage
      const fullList = getStoredGallery();
      let updatedFullList: GalleryItem[];
      if (editingItem) {
        updatedFullList = fullList.map(item => item.id === editingItem.id ? savedItem : item);
      } else {
        updatedFullList = [savedItem, ...fullList];
      }
      saveStoredGallery(updatedFullList);

      // Update local view
      if (selectedCategory && selectedCategory !== 'All') {
        setItems(updatedFullList.filter(i => i.category === selectedCategory));
      } else {
        setItems(updatedFullList);
      }

      setShowModal(false);
      setEditingItem(null);
      resetForm();
      setSuccessMessage(editingItem ? 'Gallery item updated successfully!' : 'Gallery item added successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      setError('Failed to save gallery item. Please try again.');
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this gallery item?')) return;

    try {
      try {
        await fetch(getApiUrl(`api/gallery/manage.php?id=${id}`), {
          method: 'DELETE',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            ...getAuthHeaders(),
          }
        });
      } catch (e) {
        console.warn('API delete error, deleting locally');
      }

      const fullList = getStoredGallery().filter(item => item.id !== id);
      saveStoredGallery(fullList);
      setItems(items.filter(item => item.id !== id));
      setSuccessMessage('Gallery item deleted successfully.');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('Error deleting item:', err);
    }
  };

  const toggleActive = async (item: GalleryItem) => {
    const updated = { ...item, is_active: !item.is_active };
    try {
      try {
        await fetch(getApiUrl(`api/gallery/manage.php?id=${item.id}`), {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            ...getAuthHeaders(),
          },
          credentials: 'include',
          body: JSON.stringify({ is_active: updated.is_active }),
        });
      } catch (e) {
        console.warn('API update error, toggling locally');
      }

      const fullList = getStoredGallery().map(i => i.id === item.id ? updated : i);
      saveStoredGallery(fullList);
      setItems(items.map(i => i.id === item.id ? updated : i));
    } catch (error) {
      console.error('Error toggling active status:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      category: 'Campus',
      image_url: '',
      is_active: true,
    });
    setImageFile(null);
    setError('');
  };

  const openAddModal = () => {
    setEditingItem(null);
    resetForm();
    if (selectedCategory && selectedCategory !== 'All') {
      setFormData(prev => ({ ...prev, category: selectedCategory }));
    }
    setShowModal(true);
  };

  const openEditModal = (item: GalleryItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description || '',
      category: item.category,
      image_url: item.image_url || '',
      is_active: item.is_active,
    });
    setImageFile(null);
    setError('');
    setShowModal(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div>
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-bold text-[#0D225C]">Gallery Management</h2>
            <span className="px-3 py-1 bg-[#0D225C]/10 text-[#0D225C] text-xs font-semibold rounded-full">
              {items.length} Photos
            </span>
          </div>
          <p className="text-[#747488] text-sm mt-1">
            Upload, categorize, and manage campus photos displayed on the public gallery.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={openAddModal}
            className="flex items-center space-x-2 bg-[#0D225C] text-white px-4 py-2.5 rounded-lg hover:bg-[#0D225C]/90 transition-all font-medium text-sm shadow-sm"
          >
            <Plus className="h-4 w-4" />
            <span>Add Image</span>
          </button>
          <button
            onClick={fetchItems}
            title="Refresh Gallery"
            className="p-2.5 bg-gray-50 text-[#0D225C] rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Success Notification */}
      {successMessage && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center space-x-2 animate-fadeIn">
          <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
          <span className="text-sm font-medium">{successMessage}</span>
        </div>
      )}

      {/* Category Filter Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 border-b border-gray-200 scrollbar-thin">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
            selectedCategory === 'All'
              ? 'bg-[#0D225C] text-white shadow-sm'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          All Categories
        </button>

        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-[#0D225C] text-white shadow-sm'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      {isLoading ? (
        <div className="p-16 text-center bg-white rounded-xl shadow-sm">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#0D225C] mx-auto"></div>
          <p className="text-[#747488] text-sm mt-3">Loading gallery items...</p>
        </div>
      ) : items.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center text-[#747488] border border-gray-200">
          <ImageIcon className="h-16 w-16 mx-auto mb-4 text-gray-300" />
          <p className="font-medium text-base text-gray-700">No gallery items found.</p>
          <p className="text-xs text-gray-500 mt-1">Upload your first photo for this category!</p>
          <button
            onClick={openAddModal}
            className="mt-4 inline-flex items-center space-x-2 bg-[#0D225C] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0D225C]/90"
          >
            <Plus className="h-4 w-4" />
            <span>Add Photo</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all flex flex-col"
            >
              {/* Image Preview with Hover Actions */}
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                {item.image_url ? (
                  <img
                    src={getAssetUrl(item.image_url)}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=400&q=80';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-gray-400" />
                  </div>
                )}

                {/* Status Badge */}
                <span className={`absolute top-2 left-2 px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm ${
                  item.is_active ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-200'
                }`}>
                  {item.is_active ? 'Visible' : 'Hidden'}
                </span>

                {/* Category Badge */}
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-[11px] font-bold bg-[#0D225C]/80 text-[#CCB156] backdrop-blur-sm">
                  {item.category}
                </span>

                {/* Overlay Action Buttons on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                  <button
                    onClick={() => openEditModal(item)}
                    title="Edit Item"
                    className="p-2.5 bg-white text-[#0D225C] rounded-full hover:bg-gray-100 transition-transform hover:scale-110 shadow-lg"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    title="Delete Item"
                    className="p-2.5 bg-red-600 text-white rounded-full hover:bg-red-700 transition-transform hover:scale-110 shadow-lg"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Title & Description */}
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-[#0D225C] text-sm line-clamp-1" title={item.title}>
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-[#747488] text-xs mt-1 line-clamp-2" title={item.description}>
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                  <button
                    onClick={() => toggleActive(item)}
                    className="text-xs text-[#0D225C] font-semibold hover:underline flex items-center space-x-1"
                  >
                    {item.is_active ? <Eye className="h-3.5 w-3.5 text-green-600" /> : <EyeOff className="h-3.5 w-3.5 text-gray-500" />}
                    <span>{item.is_active ? 'Public' : 'Hidden'}</span>
                  </button>
                  <span className="text-[10px] text-gray-400">
                    {new Date(item.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between bg-[#0D225C] text-white rounded-t-2xl">
              <div>
                <h3 className="text-xl font-bold">
                  {editingItem ? 'Edit Gallery Photo' : 'Add Photo to Gallery'}
                </h3>
                <p className="text-xs text-white/80 mt-0.5">
                  {editingItem ? 'Update photo details and category' : 'Upload photo and fill title details'}
                </p>
              </div>
              <button
                onClick={() => { setShowModal(false); setEditingItem(null); }}
                className="text-white/80 hover:text-white p-1 rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3.5 flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <span className="text-red-700 text-sm">{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#0D225C] uppercase tracking-wider mb-1.5">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CCB156] focus:border-transparent text-sm"
                  placeholder="e.g., Campus Infrastructure & Garden"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0D225C] uppercase tracking-wider mb-1.5">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CCB156] focus:border-transparent text-sm bg-white"
                  required
                >
                  {CATEGORIES.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0D225C] uppercase tracking-wider mb-1.5">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={2}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CCB156] focus:border-transparent text-sm"
                  placeholder="Brief description of the photo..."
                />
              </div>

              {/* Photo Upload & Auto-fill URL */}
              <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-200 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-[#0D225C] uppercase tracking-wider">
                    Photo (Upload or URL) *
                  </label>
                  {formData.image_url && (
                    <span className="text-[11px] text-green-700 bg-green-100 font-medium px-2 py-0.5 rounded-full flex items-center space-x-1">
                      <Check className="h-3 w-3" />
                      <span>Image Ready</span>
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <label className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm text-[#0D225C] font-medium shadow-sm">
                      <Upload className="h-4 w-4 text-[#CCB156]" />
                      <span>{imageFile ? 'Change Uploaded Photo' : 'Upload from Device'}</span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageFileSelect}
                      className="hidden"
                    />
                  </label>

                  {formData.image_url && (
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, image_url: '' });
                        setImageFile(null);
                      }}
                      className="px-3 py-2 text-xs text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors font-medium"
                    >
                      Clear Image
                    </button>
                  )}
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs text-gray-500 font-medium">Image URL / Data:</span>
                    {imageFile && (
                      <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded font-medium">
                        Auto-filled from upload
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CCB156] focus:border-transparent text-xs text-gray-600 font-mono bg-white truncate"
                    placeholder="https://... or auto-filled upon upload"
                    required
                  />
                </div>

                {formData.image_url && (
                  <div className="mt-3 rounded-lg overflow-hidden border border-gray-200 bg-black/5 aspect-video flex items-center justify-center">
                    <img
                      src={getAssetUrl(formData.image_url)}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <span className="text-xs text-gray-600">
                      Preview of the photo to be added.
                    </span>
                  </div>
                )}
              </div>

              <label className="flex items-center space-x-2.5 pt-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                  className="h-4 w-4 rounded text-[#0D225C] focus:ring-[#CCB156]"
                />
                <span className="text-sm font-medium text-[#0D225C]">Visible on public Gallery page</span>
              </label>

              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => { setShowModal(false); setEditingItem(null); resetForm(); }}
                  className="px-4 py-2.5 text-sm text-[#747488] hover:text-[#0D225C] transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#0D225C] text-white rounded-lg hover:bg-[#0D225C]/90 transition-all font-medium text-sm shadow-sm"
                >
                  {editingItem ? 'Update Photo' : 'Add Photo'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryManagement;
