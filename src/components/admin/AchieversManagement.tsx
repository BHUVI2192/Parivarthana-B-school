import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, RefreshCw, AlertCircle, Trophy } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getApiUrl } from '../../utils/assets';

interface Achiever {
  id: number;
  name: string;
  achievement: string;
  category: string;
  year: string;
  image_url: string;
  description: string;
  is_active: boolean;
}

const AchieversManagement: React.FC = () => {
  const { getAuthHeaders } = useAuth();
  const [achievers, setAchievers] = useState<Achiever[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingAchiever, setEditingAchiever] = useState<Achiever | null>(null);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    achievement: '',
    category: 'Academic',
    year: new Date().getFullYear().toString(),
    image_url: '',
    description: '',
    is_active: true,
  });

  const categories = ['Academic', 'Sports', 'Cultural', 'Technical', 'Social Service', 'Leadership'];
  const years = Array.from({ length: 10 }, (_, i) => (new Date().getFullYear() - i).toString());

  useEffect(() => {
    fetchAchievers();
  }, [selectedCategory, selectedYear]);

  const fetchAchievers = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      params.append('admin', '1');
      if (selectedCategory) params.append('category', selectedCategory);
      if (selectedYear) params.append('year', selectedYear);
      
      const response = await fetch(getApiUrl(`api/achievers/manage.php?${params}`), { 
        credentials: 'include',
        headers: getAuthHeaders()
      });
      const result = await response.json();
      if (result.success) {
        setAchievers(result.data);
      }
    } catch (error) {
      console.error('Error fetching achievers:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const url = editingAchiever
        ? getApiUrl('api/achievers/manage.php')
        : getApiUrl('api/achievers/manage.php');

      const response = await fetch(url, {
        method: editingAchiever ? 'PUT' : 'POST',
        headers: getAuthHeaders(),
        credentials: 'include',
        body: JSON.stringify(editingAchiever ? { ...formData, id: editingAchiever.id } : formData),
      });

      const result = await response.json();

      if (result.success) {
        setShowModal(false);
        setEditingAchiever(null);
        resetForm();
        fetchAchievers();
      } else {
        setError(result.message || 'Failed to save achiever');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this achievement?')) return;

    try {
      const response = await fetch(getApiUrl(`api/achievers/manage.php?id=${id}`), {
        method: 'DELETE',
        credentials: 'include',
        headers: getAuthHeaders()
      });

      const result = await response.json();
      if (result.success) {
        fetchAchievers();
      }
    } catch (error) {
      console.error('Error deleting achiever:', error);
    }
  };

  const toggleActive = async (achiever: Achiever) => {
    try {
      const response = await fetch(getApiUrl('api/achievers/manage.php'), {
        method: 'PUT',
        headers: getAuthHeaders(),
        credentials: 'include',
        body: JSON.stringify({ id: achiever.id, is_active: !achiever.is_active }),
      });

      const result = await response.json();
      if (result.success) {
        fetchAchievers();
      }
    } catch (error) {
      console.error('Error toggling active status:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      achievement: '',
      category: 'Academic',
      year: new Date().getFullYear().toString(),
      image_url: '',
      description: '',
      is_active: true,
    });
    setError('');
  };

  const openEditModal = (achiever: Achiever) => {
    setEditingAchiever(achiever);
    setFormData({
      name: achiever.name,
      achievement: achiever.achievement,
      category: achiever.category,
      year: achiever.year,
      image_url: achiever.image_url || '',
      description: achiever.description || '',
      is_active: achiever.is_active,
    });
    setShowModal(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#0D225C]">Student Achievers</h2>
          <p className="text-[#747488]">Manage student achievements and awards</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CCB156] focus:border-transparent"
          >
            <option value="">All Categories</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CCB156] focus:border-transparent"
          >
            <option value="">All Years</option>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          <button
            onClick={() => { resetForm(); setShowModal(true); }}
            className="flex items-center space-x-2 bg-[#0D225C] text-white px-4 py-2 rounded-lg hover:bg-[#0D225C]/90 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Add Achievement</span>
          </button>
          <button
            onClick={fetchAchievers}
            className="flex items-center space-x-2 bg-white text-[#0D225C] px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Achievers Grid */}
      {isLoading ? (
        <div className="p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0D225C] mx-auto"></div>
        </div>
      ) : achievers.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center text-[#747488]">
          <Trophy className="h-16 w-16 mx-auto mb-4 text-gray-300" />
          <p>No achievements found. Add your first achiever!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievers.map((achiever) => (
            <div key={achiever.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                {achiever.image_url ? (
                  <img
                    src={achiever.image_url}
                    alt={achiever.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0D225C] to-[#0D225C]/80 flex items-center justify-center">
                    <Trophy className="h-16 w-16 text-[#CCB156]" />
                  </div>
                )}
                <div className="absolute top-2 right-2 flex space-x-1">
                  <button
                    onClick={() => openEditModal(achiever)}
                    className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100"
                  >
                    <Edit2 className="h-4 w-4 text-[#0D225C]" />
                  </button>
                  <button
                    onClick={() => handleDelete(achiever.id)}
                    className="p-2 bg-white rounded-full shadow-sm hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </button>
                </div>
                <span className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${
                  achiever.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {achiever.is_active ? 'Active' : 'Hidden'}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-[#CCB156] bg-[#CCB156]/10 px-2 py-1 rounded">
                    {achiever.category}
                  </span>
                  <span className="text-xs text-[#747488]">{achiever.year}</span>
                </div>
                <h3 className="font-bold text-[#0D225C] mb-1">{achiever.name}</h3>
                <p className="text-sm text-[#747488] line-clamp-2">{achiever.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-[#0D225C]">
                {editingAchiever ? 'Edit Achievement' : 'Add Achievement'}
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <span className="text-red-700 text-sm">{error}</span>
                </div>
              )}
              <div>
                <label className="block text-sm font-semibold text-[#0D225C] mb-2">Student Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CCB156] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0D225C] mb-2">Achievement *</label>
                <input
                  type="text"
                  value={formData.achievement}
                  onChange={(e) => setFormData({ ...formData, achievement: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CCB156] focus:border-transparent"
                  placeholder="e.g., First Prize in National Debate"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0D225C] mb-2">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CCB156] focus:border-transparent"
                    required
                  >
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0D225C] mb-2">Year *</label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CCB156] focus:border-transparent"
                    required
                  >
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0D225C] mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CCB156] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0D225C] mb-2">Image URL</label>
                <input
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CCB156] focus:border-transparent"
                  placeholder="https://..."
                />
              </div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                  className="h-4 w-4 text-[#0D225C] focus:ring-[#CCB156]"
                />
                <span className="text-sm text-[#0D225C]">Visible</span>
              </label>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => { setShowModal(false); setEditingAchiever(null); resetForm(); }}
                  className="px-4 py-2 text-[#747488] hover:text-[#0D225C] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#0D225C] text-white rounded-lg hover:bg-[#0D225C]/90 transition-colors"
                >
                  {editingAchiever ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AchieversManagement;
