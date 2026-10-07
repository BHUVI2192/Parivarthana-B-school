import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, AlertCircle, ArrowLeft, Lock, User, ShieldCheck } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { getAssetUrl } from '../utils/assets';

interface LoginPageProps {
  onLoginSuccess?: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSuccess = () => {
    if (onLoginSuccess) {
      onLoginSuccess();
    } else {
      navigate('/admin/dashboard');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await login(credentials.username, credentials.password);

      if (result.success) {
        handleLoginSuccess();
      } else {
        setError(result.message || 'Invalid username or password.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please check your connection and try again.');
      console.error('Login error:', err);
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F0F0EA] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative font-sans">
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 z-10">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-gray-200 text-[#0D225C] hover:text-[#CCB156] shadow-sm hover:shadow-md transition-all text-xs sm:text-sm font-bold cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Main Website</span>
        </button>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Header Branding */}
        <div className="text-center space-y-3">
          <div className="inline-block p-3 bg-white rounded-3xl shadow-md border border-gray-200/80 mb-1">
            <img
              src={getAssetUrl('PBS.png')}
              alt="Parivarthana Business School"
              className="h-16 w-16 mx-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = getAssetUrl('logo-bschool.png');
              }}
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D225C] tracking-tight">
            Parivarthana Business School
          </h2>
          <div className="inline-flex items-center space-x-2 bg-[#CCB156]/20 px-3 py-1 rounded-full text-xs font-bold text-[#0D225C]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#CCB156]" />
            <span>Administrative Management Portal</span>
          </div>
        </div>

        {/* Login Card */}
        <div className="mt-8 bg-white py-8 px-6 shadow-xl rounded-3xl border border-gray-200/80 sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-center space-x-3 text-xs text-red-800 animate-fade-in">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="font-semibold">{error}</span>
              </div>
            )}

            {/* Username Input */}
            <div>
              <label className="block text-xs font-bold text-[#0D225C] uppercase tracking-wider mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <User className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50/50 border border-gray-300 rounded-xl text-sm text-[#0D225C] font-semibold focus:ring-2 focus:ring-[#CCB156] focus:bg-white focus:border-transparent outline-none transition-all"
                  placeholder="Enter your username"
                  required
                  autoFocus
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-xs font-bold text-[#0D225C] uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 bg-gray-50/50 border border-gray-300 rounded-xl text-sm text-[#0D225C] font-semibold focus:ring-2 focus:ring-[#CCB156] focus:bg-white focus:border-transparent outline-none transition-all"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-[#0D225C] transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#0D225C] to-[#143282] hover:from-[#143282] hover:to-[#0D225C] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Authenticating...</span>
                </>
              ) : (
                <span>Sign In to Admin Portal</span>
              )}
            </button>
          </form>

          {/* Footer Security Note */}
          <div className="mt-6 pt-5 border-t border-gray-100 text-center">
            <p className="text-[11px] text-gray-400 flex items-center justify-center space-x-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-gray-400" />
              <span>Authorized personnel only • Protected system</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
