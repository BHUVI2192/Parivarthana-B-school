import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Eye, EyeOff, ExternalLink, RefreshCw, AlertCircle } from 'lucide-react';
import { useRealtimeSync } from '../../hooks/useRealtimeSync';
import { useAuth } from '../../contexts/AuthContext';
import { getApiUrl } from '../../utils/assets';

interface NewsPost {
  id: number;
  title: string;
  content: string;
  blog_url: string;
  image_url: string;
  category: string;
  is_featured: boolean;
  is_visible: boolean;
  published_date: string;
}

interface BlogPost {
  title: string;
  link: string;
  description: string;
  published_date: string;
  image_url?: string;
}

const NewsManagement: React.FC = () => {
  const { getAuthHeaders } = useAuth();
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState<NewsPost | null>(null);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    blog_url: '',
    image_url: '',
    category: 'General',
    is_featured: false,
    is_visible: true,
  });

  const { data, refresh } = useRealtimeSync({ pollingInterval: 10000 });

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (data.blog_posts) {
      setBlogPosts(data.blog_posts);
    }
    if (data.news && Array.isArray(data.news)) {
      setPosts(prev => {
        const updated = [...prev];
        data.news?.forEach((newPost: NewsPost) => {
          const index = updated.findIndex(p => p.id === newPost.id);
          if (index >= 0) {
            updated[index] = newPost;
          } else {
            updated.unshift(newPost);
          }
        });
        return updated;
      });
    }
  }, [data]);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(getApiUrl('/api/news/manage.php?admin=1'), {
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      const result = await response.json();
      if (result.success) {
        setPosts(result.data);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const url = editingPost
        ? getApiUrl(`/api/news/manage.php?id=${editingPost.id}`)
        : getApiUrl('/api/news/manage.php');
      const method = editingPost ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: getAuthHeaders(),
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setShowModal(false);
        setEditingPost(null);
        resetForm();
        fetchPosts();
      } else {
        setError(result.message || 'Failed to save post');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const response = await fetch(getApiUrl(`/api/news/manage.php?id=${id}`), {
        method: 'DELETE',
        credentials: 'include',
        headers: getAuthHeaders(),
      });

      const result = await response.json();
      if (result.success) {
        fetchPosts();
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const toggleVisibility = async (post: NewsPost) => {
    try {
      const response = await fetch(getApiUrl(`/api/news/manage.php?id=${post.id}`), {
        method: 'PUT',
        headers: getAuthHeaders(),
        credentials: 'include',
        body: JSON.stringify({ is_visible: !post.is_visible }),
      });

      const result = await response.json();
      if (result.success) {
        fetchPosts();
      }
    } catch (error) {
      console.error('Error toggling visibility:', error);
    }
  };

  const toggleFeatured = async (post: NewsPost) => {
    try {
      const response = await fetch(getApiUrl(`/api/news/manage.php?id=${post.id}`), {
        method: 'PUT',
        headers: getAuthHeaders(),
        credentials: 'include',
        body: JSON.stringify({ is_featured: !post.is_featured }),
      });

      const result = await response.json();
      if (result.success) {
        fetchPosts();
      }
    } catch (error) {
      console.error('Error toggling featured:', error);
    }
  };

  const importFromBlog = (blogPost: BlogPost) => {
    setFormData({
      title: blogPost.title,
      content: blogPost.description,
      blog_url: blogPost.link,
      image_url: blogPost.image_url || '',
      category: 'Blog',
      is_featured: false,
      is_visible: true,
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      blog_url: '',
      image_url: '',
      category: 'General',
      is_featured: false,
      is_visible: true,
    });
    setError('');
  };

  const openEditModal = (post: NewsPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      blog_url: post.blog_url || '',
      image_url: post.image_url || '',
      category: post.category,
      is_featured: post.is_featured,
      is_visible: post.is_visible,
    });
    setShowModal(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#0D225C]">News & Announcements</h2>
          <p className="text-[#747488]">Manage news posts and blog imports</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => { resetForm(); setShowModal(true); }}
            className="flex items-center space-x-2 bg-[#0D225C] text-white px-4 py-2 rounded-lg hover:bg-[#0D225C]/90 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Add Post</span>
          </button>
          <button
            onClick={refresh}
            className="flex items-center space-x-2 bg-white text-[#0D225C] px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Blog Import Section */}
      {blogPosts.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#0D225C]">Import from Blog</h3>
            <span className="text-sm text-[#747488]">{blogPosts.length} posts available</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-64 overflow-y-auto">
            {blogPosts.map((post, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-[#0D225C] line-clamp-2 mb-2">{post.title}</h4>
                <p className="text-sm text-[#747488] line-clamp-2 mb-3">{post.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#747488]">{post.published_date}</span>
                  <button
                    onClick={() => importFromBlog(post)}
                    className="text-sm text-[#CCB156] hover:text-[#0D225C] font-medium"
                  >
                    Import
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* News Posts Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0D225C] mx-auto"></div>
          </div>
        ) : posts.length === 0 ? (
          <div className="p-8 text-center text-[#747488]">
            No news posts found. Create your first post!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F0F0EA]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#0D225C] uppercase">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#0D225C] uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#0D225C] uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#0D225C] uppercase">Date</th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-[#0D225C] uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {post.is_featured && (
                          <span className="mr-2 text-[#CCB156]">★</span>
                        )}
                        <span className="font-medium text-[#0D225C]">{post.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#747488]">{post.category}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleVisibility(post)}
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          post.is_visible
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {post.is_visible ? (
                          <><Eye className="h-3 w-3 mr-1" /> Visible</>
                        ) : (
                          <><EyeOff className="h-3 w-3 mr-1" /> Hidden</>
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#747488]">
                      {new Date(post.published_date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={() => toggleFeatured(post)}
                        className={`p-1 rounded ${post.is_featured ? 'text-[#CCB156]' : 'text-gray-400 hover:text-[#CCB156]'}`}
                        title={post.is_featured ? 'Unmark featured' : 'Mark as featured'}
                      >
                        ★
                      </button>
                      {post.blog_url && (
                        <a
                          href={post.blog_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 text-gray-400 hover:text-[#0D225C]"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      <button
                        onClick={() => openEditModal(post)}
                        className="p-1 text-gray-400 hover:text-blue-600"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-1 text-gray-400 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-[#0D225C]">
                {editingPost ? 'Edit Post' : 'Create Post'}
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
                <label className="block text-sm font-semibold text-[#0D225C] mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CCB156] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0D225C] mb-2">Content</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CCB156] focus:border-transparent"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0D225C] mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CCB156] focus:border-transparent"
                  >
                    <option value="General">General</option>
                    <option value="Announcement">Announcement</option>
                    <option value="Event">Event</option>
                    <option value="Blog">Blog</option>
                  </select>
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
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0D225C] mb-2">Blog URL (optional)</label>
                <input
                  type="url"
                  value={formData.blog_url}
                  onChange={(e) => setFormData({ ...formData, blog_url: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CCB156] focus:border-transparent"
                  placeholder="https://..."
                />
              </div>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.is_featured}
                    onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                    className="h-4 w-4 text-[#0D225C] focus:ring-[#CCB156]"
                  />
                  <span className="text-sm text-[#0D225C]">Featured</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.is_visible}
                    onChange={(e) => setFormData({ ...formData, is_visible: e.target.checked })}
                    className="h-4 w-4 text-[#0D225C] focus:ring-[#CCB156]"
                  />
                  <span className="text-sm text-[#0D225C]">Visible</span>
                </label>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => { setShowModal(false); setEditingPost(null); resetForm(); }}
                  className="px-4 py-2 text-[#747488] hover:text-[#0D225C] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#0D225C] text-white rounded-lg hover:bg-[#0D225C]/90 transition-colors"
                >
                  {editingPost ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsManagement;
