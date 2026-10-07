import React, { useState, useEffect } from 'react';
import { Award, Trophy, Star, Medal } from 'lucide-react';
import { getApiUrl } from '../utils/assets';

interface StudentAchiever {
  id: number;
  name: string;
  achievement: string;
  category: string;
  year: string;
  image_url?: string;
  description?: string;
}

const StudentAchieversPage: React.FC = () => {
  const [achievers, setAchievers] = useState<StudentAchiever[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Academic', 'Sports', 'Cultural', 'Technical', 'Social Service', 'Leadership'];

  useEffect(() => {
    fetchAchievers();
  }, []);

  const fetchAchievers = async () => {
    try {
      const response = await fetch(getApiUrl('api/achievers/manage.php'));
      const result = await response.json();
      if (result.success) {
        setAchievers(result.data);
      }
    } catch (error) {
      console.error('Error fetching achievers:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredAchievers = selectedCategory === 'All'
    ? achievers
    : achievers.filter(achiever => achiever.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Academic':
        return <Award className="w-6 h-6" />;
      case 'Sports':
        return <Trophy className="w-6 h-6" />;
      case 'Cultural':
        return <Star className="w-6 h-6" />;
      default:
        return <Medal className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Sports':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Cultural':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Technical':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Social Service':
        return 'bg-pink-100 text-pink-800 border-pink-300';
      case 'Leadership':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 mb-12 text-white">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-16 h-16 mr-4" />
              <h1 className="text-4xl font-bold">Student Achievers</h1>
            </div>
            <p className="text-center text-lg text-blue-100 max-w-3xl mx-auto">
              Celebrating the outstanding accomplishments of our talented students who have excelled in academics, sports, cultural activities, and beyond.
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

          {/* Achievers Grid */}
          {!loading && filteredAchievers.length === 0 && (
            <div className="bg-white rounded-lg shadow-lg p-12 text-center">
              <Trophy className="w-20 h-20 mx-auto mb-4 text-gray-400" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No Achievers Yet</h3>
              <p className="text-gray-600">
                {selectedCategory === 'All'
                  ? 'Student achievements will be displayed here once added.'
                  : `No achievements found in the ${selectedCategory} category.`}
              </p>
            </div>
          )}

          {!loading && filteredAchievers.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAchievers.map((achiever) => (
                <div
                  key={achiever.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  {achiever.image_url ? (
                    <div className="h-64 overflow-hidden bg-gray-200">
                      <img
                        src={achiever.image_url}
                        alt={achiever.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      {getCategoryIcon(achiever.category)}
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(achiever.category)}`}>
                        {achiever.category}
                      </span>
                      <span className="text-sm text-gray-600 font-medium">{achiever.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{achiever.name}</h3>

                    <div className="flex items-start mb-3">
                      <Award className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 font-medium">{achiever.achievement}</p>
                    </div>

                    {achiever.description && (
                      <p className="text-gray-600 text-sm line-clamp-3">{achiever.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Stats Section */}
          {!loading && achievers.length > 0 && (
            <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Achievement Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.filter(cat => cat !== 'All').map((category) => {
                  const count = achievers.filter(a => a.category === category).length;
                  return (
                    <div key={category} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-2 ${getCategoryColor(category)}`}>
                        {getCategoryIcon(category)}
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{count}</p>
                      <p className="text-sm text-gray-600">{category}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default StudentAchieversPage;
