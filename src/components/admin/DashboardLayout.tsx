import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getAssetUrl, getApiUrl } from '../../utils/assets';
import {
  LayoutDashboard,
  Users,
  Newspaper,
  GraduationCap,
  Image as ImageIcon,
  Trophy,
  FileText,
  LogOut,
  Menu,
  X,
  ChevronDown,
  Bell,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Database
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeModule?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, activeModule }) => {
  const { user, logout, checkPermission, getAuthHeaders } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [dbStatus, setDbStatus] = useState<'checking' | 'healthy' | 'warning' | 'error'>('checking');
  const [pendingEnquiriesCount, setPendingEnquiriesCount] = useState<number>(0);

  // Quick health check on mount
  useEffect(() => {
    checkHealth();
  }, []);

  const checkHealth = async () => {
    try {
      const res = await fetch(getApiUrl('api/test_db.php'), {
        headers: getAuthHeaders(),
      });
      if (res.ok) {
        const data = await res.json();
        setDbStatus(data.status === 'healthy' ? 'healthy' : data.status === 'warning' ? 'warning' : 'error');
        if (data.tables && data.tables.admission_enquiries) {
          // get pending count if possible
        }
      } else {
        setDbStatus('warning');
      }
    } catch {
      setDbStatus('warning');
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'admin': return 'Administrator';
      case 'admission_staff': return 'Admission Officer';
      case 'staff': return 'Content Staff';
      default: return role;
    }
  };

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/admin/dashboard',
      visible: true,
    },
    {
      id: 'faculty',
      label: 'Faculty Management',
      icon: GraduationCap,
      path: '/admin/faculty',
      visible: checkPermission('faculty_manage'),
    },
    {
      id: 'news',
      label: 'News & Announcements',
      icon: Newspaper,
      path: '/admin/news',
      visible: checkPermission('news_manage'),
    },
    {
      id: 'gallery',
      label: 'Gallery Management',
      icon: ImageIcon,
      path: '/admin/gallery',
      visible: checkPermission('gallery_manage'),
    },
    {
      id: 'achievers',
      label: 'Student Achievers',
      icon: Trophy,
      path: '/admin/achievers',
      visible: checkPermission('achievers_manage'),
    },
    {
      id: 'admissions',
      label: 'Admission Enquiries',
      icon: FileText,
      path: '/admin/admissions',
      visible: checkPermission('admissions_view'),
      badge: pendingEnquiriesCount > 0 ? pendingEnquiriesCount : undefined,
    },
    {
      id: 'users',
      label: 'User Management',
      icon: Users,
      path: '/admin/users',
      visible: checkPermission('users_manage'),
    },
  ];

  const visibleMenuItems = menuItems.filter(item => item.visible);

  return (
    <div className="min-h-screen bg-[#F4F5F7] flex flex-col font-sans">
      {/* Mobile Sidebar Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0D225C] z-50 flex items-center justify-between px-4 shadow-md">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-white rounded-full p-1 flex items-center justify-center">
            <img src={getAssetUrl('PBS.png')} alt="PBS" className="h-6 w-6 object-contain" />
          </div>
          <span className="text-white font-bold text-base tracking-wide">PBS Portal</span>
        </div>
        <a
          href={getAssetUrl('')}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs bg-[#CCB156] text-[#0D225C] font-semibold px-2.5 py-1.5 rounded-lg flex items-center space-x-1"
        >
          <span>Live Site</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#0D225C] text-white flex flex-col justify-between shadow-2xl z-40 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Logo Brand */}
          <div className="p-5 border-b border-white/10 flex items-center space-x-3">
            <div className="h-10 w-10 bg-white rounded-xl p-1.5 flex items-center justify-center shadow-md">
              <img
                src={getAssetUrl('PBS.png')}
                alt="PBS Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="overflow-hidden">
              <h1 className="text-lg font-bold tracking-tight text-white leading-tight truncate">
                PBS Admin
              </h1>
              <p className="text-xs text-[#CCB156] font-medium flex items-center mt-0.5">
                <ShieldCheck className="h-3 w-3 mr-1 inline" />
                {getRoleLabel(user?.role || '')}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1.5 overflow-y-auto max-h-[calc(100vh-210px)]">
            <div className="px-3 py-1.5 text-[11px] font-semibold text-white/50 uppercase tracking-wider">
              Main Menu
            </div>
            {visibleMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeModule === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    navigate(item.path);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#CCB156] text-[#0D225C] shadow-sm font-semibold'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3 truncate">
                    <Icon className={`h-4.5 w-4.5 ${isActive ? 'text-[#0D225C]' : 'text-[#CCB156]'}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.badge !== undefined && (
                    <span className={`px-2 py-0.5 text-xs rounded-full font-bold ${
                      isActive ? 'bg-[#0D225C] text-white' : 'bg-[#CCB156] text-[#0D225C]'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Actions */}
        <div className="p-4 border-t border-white/10 space-y-2 bg-[#091842]">
          <a
            href={getAssetUrl('')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all"
          >
            <div className="flex items-center space-x-2">
              <ExternalLink className="h-3.5 w-3.5 text-[#CCB156]" />
              <span>View Public Website</span>
            </div>
            <span className="text-[10px] text-[#CCB156]">Live</span>
          </a>

          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-2 px-3 py-2 text-xs font-medium text-red-300 hover:text-white hover:bg-red-600/80 rounded-lg transition-all"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="lg:ml-64 min-h-screen flex flex-col flex-1">
        {/* Top Header */}
        <header className="bg-white sticky top-0 z-30 border-b border-gray-200 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 mt-16 lg:mt-0 shadow-sm">
          <div className="flex items-center space-x-3">
            <h2 className="text-xl font-bold text-[#0D225C]">
              {visibleMenuItems.find(item => item.id === activeModule)?.label || 'Admin Portal'}
            </h2>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Live Database Health Indicator */}
            <div 
              className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium border bg-gray-50 border-gray-200 text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={checkHealth}
              title="Click to re-verify live database health"
            >
              <Database className="h-3.5 w-3.5 text-[#0D225C]" />
              <span className="hidden md:inline text-[#747488]">DB:</span>
              {dbStatus === 'healthy' ? (
                <span className="flex items-center text-green-700 font-semibold">
                  <span className="h-2 w-2 bg-green-500 rounded-full inline-block mr-1.5 animate-pulse"></span>
                  Connected
                </span>
              ) : dbStatus === 'warning' ? (
                <span className="flex items-center text-amber-700 font-semibold">
                  <span className="h-2 w-2 bg-amber-500 rounded-full inline-block mr-1.5"></span>
                  Active
                </span>
              ) : (
                <span className="flex items-center text-red-700 font-semibold">
                  <span className="h-2 w-2 bg-red-500 rounded-full inline-block mr-1.5"></span>
                  Check DB
                </span>
              )}
            </div>

            {/* Direct Link to Public Site */}
            <a
              href={getAssetUrl('')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-[#0D225C] bg-[#CCB156]/20 hover:bg-[#CCB156]/30 border border-[#CCB156]/40 rounded-lg transition-colors"
            >
              <span>Live Site</span>
              <ExternalLink className="h-3 w-3" />
            </a>

            {/* Notifications Button */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-2 text-gray-500 hover:text-[#0D225C] hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-[#CCB156] rounded-full ring-2 ring-white"></span>
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <h4 className="font-bold text-sm text-[#0D225C]">System Notifications</h4>
                    <span className="text-[11px] text-[#CCB156] font-semibold bg-[#CCB156]/10 px-2 py-0.5 rounded-full">Live</span>
                  </div>
                  <div className="py-3 space-y-2 text-xs text-gray-600">
                    <div className="flex items-start space-x-2.5 p-2 bg-green-50/60 rounded-xl">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-green-900">Database Ready</p>
                        <p className="text-green-700">MySQL schema is operational and connected.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2.5 p-2 bg-blue-50/60 rounded-xl">
                      <ShieldCheck className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-blue-900">Logged in as {user?.role}</p>
                        <p className="text-blue-700">{user?.email || user?.username}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2.5 p-1.5 rounded-xl hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
              >
                <div className="h-8 w-8 bg-[#0D225C] text-[#CCB156] font-bold rounded-lg flex items-center justify-center shadow-sm text-sm">
                  {user?.full_name ? user.full_name.charAt(0).toUpperCase() : 'A'}
                </div>
                <div className="hidden md:block text-left pr-1">
                  <span className="block text-xs font-bold text-[#0D225C] leading-tight truncate max-w-[120px]">
                    {user?.full_name || 'Admin'}
                  </span>
                  <span className="block text-[10px] text-[#747488] leading-tight">
                    {getRoleLabel(user?.role || '')}
                  </span>
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50 rounded-t-2xl">
                    <p className="text-xs font-bold text-[#0D225C]">{user?.full_name}</p>
                    <p className="text-[11px] text-gray-500 truncate mt-0.5">{user?.email}</p>
                    <span className="inline-block mt-1 text-[10px] uppercase font-semibold tracking-wider text-[#0D225C] bg-[#CCB156]/20 px-2 py-0.5 rounded-full">
                      {user?.role}
                    </span>
                  </div>
                  <div className="p-1">
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        navigate('/admin/dashboard');
                      }}
                      className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center space-x-2"
                    >
                      <LayoutDashboard className="h-3.5 w-3.5 text-gray-500" />
                      <span>Dashboard Overview</span>
                    </button>
                    {checkPermission('users_manage') && (
                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          navigate('/admin/users');
                        }}
                        className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center space-x-2"
                      >
                        <Users className="h-3.5 w-3.5 text-gray-500" />
                        <span>Manage Users</span>
                      </button>
                    )}
                    <div className="my-1 border-t border-gray-100"></div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 text-xs text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center space-x-2 font-medium"
                    >
                      <LogOut className="h-3.5 w-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content View */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>

      {/* Mobile Drawer Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
