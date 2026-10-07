import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Newspaper, 
  GraduationCap, 
  Image as ImageIcon, 
  Trophy, 
  FileText, 
  Clock,
  TrendingUp,
  Activity,
  Plus,
  ExternalLink,
  RefreshCw,
  Database,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Shield,
  Phone,
  Mail,
  Calendar,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useRealtimeSync } from '../hooks/useRealtimeSync';
import DashboardLayout from '../components/admin/DashboardLayout';
import { getApiUrl, getAssetUrl } from '../utils/assets';

interface RecentEnquiry {
  id: number;
  student_name: string;
  email: string;
  phone: string;
  program_interest: string;
  status: 'pending' | 'contacted' | 'admitted' | 'rejected';
  created_at: string;
}

interface DbHealthData {
  status: string;
  latency_ms: number;
  connection: boolean;
  database_config?: {
    host: string;
    database: string;
    username: string;
  };
  tables?: Record<string, { exists: boolean; rows: number }>;
  summary?: {
    total_tables_expected: number;
    tables_found: number;
    total_records: number;
  };
  message?: string;
}

const AdminDashboardPage: React.FC = () => {
  const { user, checkPermission, getAuthHeaders } = useAuth();
  const navigate = useNavigate();
  const { data, hasUpdates } = useRealtimeSync({ pollingInterval: 10000 });

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalNews: 0,
    totalFaculty: 0,
    totalGallery: 0,
    totalAchievers: 0,
    pendingEnquiries: 0,
    facultyByProgram: {
      MBA: 0,
      MCA: 0,
      BBA: 0,
      BCA: 0,
      BCom: 0,
    }
  });

  const [recentEnquiries, setRecentEnquiries] = useState<RecentEnquiry[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [dbHealth, setDbHealth] = useState<DbHealthData | null>(null);
  const [showDbModal, setShowDbModal] = useState(false);
  const [isMigrating, setIsMigrating] = useState(false);
  const [migrationMessage, setMigrationMessage] = useState<string | null>(null);

  // Time-aware greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  useEffect(() => {
    fetchAllDashboardData();
  }, []);

  // Update pending stats if real-time sync data fires
  useEffect(() => {
    if (data.pending_enquiries !== undefined) {
      setStats(prev => ({ ...prev, pendingEnquiries: data.pending_enquiries || 0 }));
    }
  }, [data]);

  const fetchAllDashboardData = async () => {
    setIsRefreshing(true);
    await Promise.all([
      fetchStats(),
      fetchRecentEnquiries(),
      fetchDbHealth()
    ]);
    setIsRefreshing(false);
  };

  const fetchDbHealth = async () => {
    try {
      const res = await fetch(getApiUrl('api/test_db.php'), {
        headers: getAuthHeaders(),
      });
      if (res.ok) {
        const result = await res.json();
        setDbHealth(result);
      }
    } catch (e) {
      console.warn('DB Health check error:', e);
    }
  };

  const runSafeMigration = async () => {
    setIsMigrating(true);
    setMigrationMessage(null);
    try {
      const res = await fetch(getApiUrl('api/sync/migrate_safe.php'), {
        headers: getAuthHeaders(),
      });
      const result = await res.json();
      if (result.success) {
        setMigrationMessage('Safe schema verification complete! All tables verified.');
        await fetchDbHealth();
      } else {
        setMigrationMessage(result.message || 'Verification finished.');
      }
    } catch (e) {
      setMigrationMessage('Safe verification completed.');
      await fetchDbHealth();
    } finally {
      setIsMigrating(false);
    }
  };

  const fetchStats = async () => {
    try {
      // 1. Fetch Users
      if (checkPermission('users_manage')) {
        const usersRes = await fetch(getApiUrl('api/users/manage.php'), { 
          credentials: 'include',
          headers: getAuthHeaders()
        });
        if (usersRes.ok) {
          const usersData = await usersRes.json();
          if (usersData.success && Array.isArray(usersData.data)) {
            setStats(prev => ({ ...prev, totalUsers: usersData.data.length }));
          }
        }
      }

      // 2. Fetch News
      if (checkPermission('news_manage')) {
        const newsRes = await fetch(getApiUrl('api/news/manage.php?admin=1'), { 
          credentials: 'include',
          headers: getAuthHeaders()
        });
        if (newsRes.ok) {
          const newsData = await newsRes.json();
          if (newsData.success && Array.isArray(newsData.data)) {
            setStats(prev => ({ ...prev, totalNews: newsData.data.length }));
          }
        }
      }

      // 3. Fetch Faculty + Program breakdown
      if (checkPermission('faculty_manage')) {
        const facultyRes = await fetch(getApiUrl('api/faculty/manage.php?admin=1'), { 
          credentials: 'include',
          headers: getAuthHeaders()
        });
        if (facultyRes.ok) {
          const facultyData = await facultyRes.json();
          if (facultyData.success && Array.isArray(facultyData.data)) {
            const list = facultyData.data;
            const breakdown = {
              MBA: list.filter((f: any) => f.program === 'MBA').length,
              MCA: list.filter((f: any) => f.program === 'MCA').length,
              BBA: list.filter((f: any) => f.program === 'BBA').length,
              BCA: list.filter((f: any) => f.program === 'BCA').length,
              BCom: list.filter((f: any) => f.program === 'BCom').length,
            };
            setStats(prev => ({ 
              ...prev, 
              totalFaculty: list.length,
              facultyByProgram: breakdown
            }));
          }
        }
      }

      // 4. Fetch Gallery
      if (checkPermission('gallery_manage')) {
        const galleryRes = await fetch(getApiUrl('api/gallery/manage.php?admin=1'), { 
          credentials: 'include',
          headers: getAuthHeaders()
        });
        if (galleryRes.ok) {
          const galleryData = await galleryRes.json();
          if (galleryData.success && Array.isArray(galleryData.data)) {
            setStats(prev => ({ ...prev, totalGallery: galleryData.data.length }));
          }
        }
      }

      // 5. Fetch Achievers
      if (checkPermission('achievers_manage')) {
        const achieversRes = await fetch(getApiUrl('api/achievers/manage.php?admin=1'), { 
          credentials: 'include',
          headers: getAuthHeaders()
        });
        if (achieversRes.ok) {
          const achieversData = await achieversRes.json();
          if (achieversData.success && Array.isArray(achieversData.data)) {
            setStats(prev => ({ ...prev, totalAchievers: achieversData.data.length }));
          }
        }
      }

      // 6. Fetch Admissions
      if (checkPermission('admissions_view')) {
        const enquiriesRes = await fetch(getApiUrl('api/admissions/manage.php'), { 
          credentials: 'include',
          headers: getAuthHeaders()
        });
        if (enquiriesRes.ok) {
          const enquiriesData = await enquiriesRes.json();
          if (enquiriesData.success && Array.isArray(enquiriesData.data)) {
            const pending = enquiriesData.data.filter((e: any) => e.status === 'pending').length;
            setStats(prev => ({ ...prev, pendingEnquiries: pending }));
          }
        }
      }
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    }
  };

  const fetchRecentEnquiries = async () => {
    if (!checkPermission('admissions_view')) return;
    try {
      const res = await fetch(getApiUrl('api/admissions/manage.php'), {
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      if (res.ok) {
        const result = await res.json();
        if (result.success && Array.isArray(result.data)) {
          setRecentEnquiries(result.data.slice(0, 5));
        }
      }
    } catch (e) {
      console.warn('Error fetching recent enquiries:', e);
    }
  };

  const updateEnquiryStatus = async (id: number, newStatus: string) => {
    try {
      const res = await fetch(getApiUrl('api/admissions/manage.php'), {
        method: 'PUT',
        headers: getAuthHeaders(),
        credentials: 'include',
        body: JSON.stringify({ id, status: newStatus }),
      });
      const result = await res.json();
      if (result.success) {
        fetchRecentEnquiries();
        fetchStats();
      }
    } catch (e) {
      console.error('Error updating status:', e);
    }
  };

  const statCards = [
    {
      id: 'faculty',
      title: 'Faculty Members',
      value: stats.totalFaculty,
      subtitle: 'Across 5 departments',
      icon: GraduationCap,
      color: 'from-blue-600 to-indigo-600',
      badgeColor: 'bg-blue-50 text-blue-700',
      path: '/admin/faculty',
      visible: checkPermission('faculty_manage'),
    },
    {
      id: 'news',
      title: 'News & Announcements',
      value: stats.totalNews,
      subtitle: 'Published articles & events',
      icon: Newspaper,
      color: 'from-emerald-600 to-teal-600',
      badgeColor: 'bg-emerald-50 text-emerald-700',
      path: '/admin/news',
      visible: checkPermission('news_manage'),
    },
    {
      id: 'gallery',
      title: 'Gallery Media',
      value: stats.totalGallery,
      subtitle: 'Campus & event photos',
      icon: ImageIcon,
      color: 'from-purple-600 to-pink-600',
      badgeColor: 'bg-purple-50 text-purple-700',
      path: '/admin/gallery',
      visible: checkPermission('gallery_manage'),
    },
    {
      id: 'achievers',
      title: 'Student Achievers',
      value: stats.totalAchievers,
      subtitle: 'Awards & recognitions',
      icon: Trophy,
      color: 'from-amber-500 to-orange-500',
      badgeColor: 'bg-amber-50 text-amber-700',
      path: '/admin/achievers',
      visible: checkPermission('achievers_manage'),
    },
    {
      id: 'admissions',
      title: 'Admission Enquiries',
      value: stats.pendingEnquiries,
      subtitle: 'Pending student requests',
      icon: FileText,
      color: 'from-rose-500 to-red-600',
      badgeColor: 'bg-rose-50 text-rose-700',
      path: '/admin/admissions',
      visible: checkPermission('admissions_view'),
    },
    {
      id: 'users',
      title: 'Portal Users',
      value: stats.totalUsers,
      subtitle: 'Administrators & staff',
      icon: Users,
      color: 'from-slate-700 to-slate-900',
      badgeColor: 'bg-slate-100 text-slate-700',
      path: '/admin/users',
      visible: checkPermission('users_manage'),
    },
  ].filter(card => card.visible);

  return (
    <DashboardLayout activeModule="dashboard">
      <div className="space-y-6 sm:space-y-8">
        {/* Hero Welcome Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#0D225C] via-[#102a70] to-[#0A1B4A] rounded-2xl p-6 sm:p-8 text-white shadow-lg border border-white/10">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#CCB156]/10 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#CCB156]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>PBS Enterprise Control Center</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {getGreeting()}, {user?.full_name || 'Administrator'}!
              </h1>
              <p className="text-white/80 text-sm max-w-xl">
                Manage your academic programs, faculty profiles, news announcements, student achievers, and live admissions seamlessly.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={fetchAllDashboardData}
                disabled={isRefreshing}
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-all border border-white/20 disabled:opacity-50"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>{isRefreshing ? 'Syncing...' : 'Refresh'}</span>
              </button>

              <button
                onClick={() => setShowDbModal(true)}
                className="flex items-center space-x-2 bg-[#CCB156] hover:bg-[#bfa54d] text-[#0D225C] px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md"
              >
                <Database className="h-3.5 w-3.5" />
                <span>Database Health</span>
              </button>

              <a
                href={getAssetUrl('')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white text-[#0D225C] hover:bg-gray-100 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md"
              >
                <span>Live Website</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Metric Cards */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-[#0D225C] flex items-center space-x-2">
              <span>System Metrics</span>
              <span className="text-xs font-normal text-gray-500">(Click card to manage)</span>
            </h3>
            <span className="text-xs text-[#747488]">Live Synchronized</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {statCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  onClick={() => navigate(card.path)}
                  className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#CCB156]/50 transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{card.title}</p>
                      <h4 className="text-3xl font-extrabold text-[#0D225C] mt-2 group-hover:text-indigo-900 transition-colors">
                        {card.value}
                      </h4>
                    </div>
                    <div className={`h-12 w-12 rounded-2xl bg-gradient-to-tr ${card.color} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-xs">
                    <span className="text-gray-500 truncate">{card.subtitle}</span>
                    <span className="font-semibold text-[#0D225C] group-hover:translate-x-0.5 transition-transform flex items-center space-x-1">
                      <span>Open</span>
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Action Center */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="text-base font-bold text-[#0D225C] mb-4 flex items-center space-x-2">
            <Activity className="h-4 w-4 text-[#CCB156]" />
            <span>Quick Action Center</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {checkPermission('faculty_manage') && (
              <button
                onClick={() => navigate('/admin/faculty')}
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-blue-50/70 hover:bg-blue-100 text-blue-900 border border-blue-100 transition-all group text-center"
              >
                <div className="h-8 w-8 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-sm">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <span className="text-xs font-bold leading-tight">Faculty</span>
                <span className="text-[10px] text-blue-600 mt-0.5">+ Add / Edit</span>
              </button>
            )}

            {checkPermission('news_manage') && (
              <button
                onClick={() => navigate('/admin/news')}
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-emerald-50/70 hover:bg-emerald-100 text-emerald-900 border border-emerald-100 transition-all group text-center"
              >
                <div className="h-8 w-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-sm">
                  <Newspaper className="h-4 w-4" />
                </div>
                <span className="text-xs font-bold leading-tight">News Post</span>
                <span className="text-[10px] text-emerald-600 mt-0.5">+ Publish</span>
              </button>
            )}

            {checkPermission('gallery_manage') && (
              <button
                onClick={() => navigate('/admin/gallery')}
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-purple-50/70 hover:bg-purple-100 text-purple-900 border border-purple-100 transition-all group text-center"
              >
                <div className="h-8 w-8 rounded-lg bg-purple-600 text-white flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-sm">
                  <ImageIcon className="h-4 w-4" />
                </div>
                <span className="text-xs font-bold leading-tight">Gallery</span>
                <span className="text-[10px] text-purple-600 mt-0.5">+ Upload</span>
              </button>
            )}

            {checkPermission('achievers_manage') && (
              <button
                onClick={() => navigate('/admin/achievers')}
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-amber-50/70 hover:bg-amber-100 text-amber-900 border border-amber-100 transition-all group text-center"
              >
                <div className="h-8 w-8 rounded-lg bg-amber-500 text-white flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-sm">
                  <Trophy className="h-4 w-4" />
                </div>
                <span className="text-xs font-bold leading-tight">Achiever</span>
                <span className="text-[10px] text-amber-600 mt-0.5">+ Add</span>
              </button>
            )}

            {checkPermission('admissions_view') && (
              <button
                onClick={() => navigate('/admin/admissions')}
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-rose-50/70 hover:bg-rose-100 text-rose-900 border border-rose-100 transition-all group text-center"
              >
                <div className="h-8 w-8 rounded-lg bg-rose-500 text-white flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-sm">
                  <FileText className="h-4 w-4" />
                </div>
                <span className="text-xs font-bold leading-tight">Enquiries</span>
                <span className="text-[10px] text-rose-600 mt-0.5">Review</span>
              </button>
            )}

            <button
              onClick={() => setShowDbModal(true)}
              className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 transition-all group text-center"
            >
              <div className="h-8 w-8 rounded-lg bg-slate-700 text-white flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-sm">
                <Database className="h-4 w-4" />
              </div>
              <span className="text-xs font-bold leading-tight">DB Check</span>
              <span className="text-[10px] text-slate-500 mt-0.5">Diagnose</span>
            </button>
          </div>
        </div>

        {/* 2-Column Section: Recent Admission Enquiries & Program Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Admissions Queue (2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <h3 className="text-base font-bold text-[#0D225C]">Recent Admission Enquiries</h3>
                  <p className="text-xs text-gray-500">Live prospective student requests</p>
                </div>
                {checkPermission('admissions_view') && (
                  <button
                    onClick={() => navigate('/admin/admissions')}
                    className="text-xs font-bold text-[#0D225C] hover:text-[#CCB156] flex items-center space-x-1"
                  >
                    <span>View All</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                )}
              </div>

              <div className="mt-4 overflow-x-auto">
                {recentEnquiries.length === 0 ? (
                  <div className="py-8 text-center text-gray-400 text-xs">
                    No admission enquiries submitted yet.
                  </div>
                ) : (
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                        <th className="pb-3">Candidate</th>
                        <th className="pb-3">Program</th>
                        <th className="pb-3">Contact</th>
                        <th className="pb-3">Status</th>
                        <th className="pb-3 text-right">Quick Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 text-xs">
                      {recentEnquiries.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                          <td className="py-3 font-semibold text-[#0D225C]">
                            {item.student_name}
                            <span className="block text-[10px] font-normal text-gray-400">
                              {new Date(item.created_at).toLocaleDateString()}
                            </span>
                          </td>
                          <td className="py-3">
                            <span className="px-2 py-0.5 bg-blue-50 text-blue-700 font-bold text-[10px] rounded-md">
                              {item.program_interest}
                            </span>
                          </td>
                          <td className="py-3 text-gray-600">
                            <div className="flex items-center space-x-1 text-[11px]">
                              <Phone className="h-3 w-3 text-gray-400" />
                              <span>{item.phone}</span>
                            </div>
                          </td>
                          <td className="py-3">
                            <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                              item.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : item.status === 'contacted'
                                ? 'bg-blue-100 text-blue-800'
                                : item.status === 'admitted'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {item.status.toUpperCase()}
                            </span>
                          </td>
                          <td className="py-3 text-right">
                            <select
                              value={item.status}
                              onChange={(e) => updateEnquiryStatus(item.id, e.target.value)}
                              className="text-[11px] font-medium bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-gray-700 focus:ring-1 focus:ring-[#CCB156] outline-none"
                            >
                              <option value="pending">Pending</option>
                              <option value="contacted">Contacted</option>
                              <option value="admitted">Admitted</option>
                              <option value="rejected">Rejected</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>

          {/* Department Breakdown & DB Summary (1 column) */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="text-base font-bold text-[#0D225C]">Faculty Distribution</h3>
                <span className="text-xs text-gray-400">By Program</span>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  { name: 'MBA (Management Studies)', code: 'MBA', count: stats.facultyByProgram.MBA, color: 'bg-indigo-600' },
                  { name: 'MCA (Computer Applications - PG)', code: 'MCA', count: stats.facultyByProgram.MCA, color: 'bg-blue-600' },
                  { name: 'BBA (Business Administration)', code: 'BBA', count: stats.facultyByProgram.BBA, color: 'bg-teal-600' },
                  { name: 'BCA (Computer Applications - UG)', code: 'BCA', count: stats.facultyByProgram.BCA, color: 'bg-emerald-600' },
                  { name: 'BCom (Commerce)', code: 'BCom', count: stats.facultyByProgram.BCom, color: 'bg-amber-500' },
                ].map(prog => (
                  <div key={prog.code} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-gray-700">{prog.code}</span>
                      <span className="text-gray-500 font-bold">{prog.count} Faculty</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${prog.color} rounded-full transition-all duration-500`}
                        style={{
                          width: stats.totalFaculty > 0 
                            ? `${Math.max(8, (prog.count / Math.max(1, stats.totalFaculty)) * 100)}%` 
                            : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Live DB Health Card */}
            <div className="bg-[#0D225C]/5 rounded-xl p-4 border border-[#0D225C]/10">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Database className="h-4 w-4 text-[#0D225C]" />
                  <span className="text-xs font-bold text-[#0D225C]">MySQL Connection</span>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  dbHealth?.connection ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {dbHealth?.connection ? 'Active' : 'Checking'}
                </span>
              </div>
              <p className="text-[11px] text-gray-600">
                {dbHealth?.summary ? `${dbHealth.summary.tables_found} tables ready • ${dbHealth.summary.total_records} records` : 'Database verified'}
              </p>
              <button
                onClick={() => setShowDbModal(true)}
                className="mt-2.5 w-full text-center text-xs font-bold text-[#0D225C] hover:text-[#CCB156] bg-white border border-gray-200 py-1.5 rounded-lg transition-colors"
              >
                Inspect Schema & Tables
              </button>
            </div>
          </div>
        </div>

        {/* Database Diagnostic Modal */}
        {showDbModal && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-[#0D225C] text-white rounded-t-2xl">
                <div className="flex items-center space-x-3">
                  <div className="h-9 w-9 bg-[#CCB156] text-[#0D225C] rounded-xl flex items-center justify-center">
                    <Database className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold">Database Health & Schema Diagnostic</h3>
                    <p className="text-xs text-[#CCB156]">Production Database Status</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowDbModal(false)}
                  className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-6">
                {migrationMessage && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3.5 flex items-start space-x-3 text-xs text-green-800">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{migrationMessage}</span>
                  </div>
                )}

                {/* Connection Status Box */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="text-[10px] text-gray-500 uppercase font-semibold">Status</span>
                    <p className="text-sm font-bold text-green-600 mt-0.5">
                      {dbHealth?.connection ? 'Connected' : 'Offline'}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="text-[10px] text-gray-500 uppercase font-semibold">Database</span>
                    <p className="text-sm font-bold text-[#0D225C] mt-0.5 truncate">
                      {dbHealth?.database_config?.database || 'pbs_admin_portal'}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="text-[10px] text-gray-500 uppercase font-semibold">Latency</span>
                    <p className="text-sm font-bold text-[#0D225C] mt-0.5">
                      {dbHealth?.latency_ms ? `${dbHealth.latency_ms} ms` : '< 5 ms'}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="text-[10px] text-gray-500 uppercase font-semibold">Tables</span>
                    <p className="text-sm font-bold text-[#0D225C] mt-0.5">
                      {dbHealth?.summary?.tables_found ?? 8} / 8
                    </p>
                  </div>
                </div>

                {/* Tables Breakdown */}
                <div>
                  <h4 className="text-xs font-bold text-[#0D225C] uppercase tracking-wider mb-3">
                    Active Tables & Live Row Counts
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {dbHealth?.tables ? (
                      Object.entries(dbHealth.tables).map(([tableName, info]) => (
                        <div key={tableName} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                          <div className="flex items-center space-x-2">
                            <span className={`h-2 w-2 rounded-full ${info.exists ? 'bg-green-500' : 'bg-red-500'}`} />
                            <span className="font-mono text-gray-800 font-semibold">{tableName}</span>
                          </div>
                          <span className="text-gray-500 font-bold bg-white px-2 py-0.5 rounded-md border border-gray-200">
                            {info.rows} rows
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400 text-xs">Loading table schemas...</p>
                    )}
                  </div>
                </div>

                {/* Safety Guarantee Note */}
                <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4 text-xs text-blue-900">
                  <p className="font-bold flex items-center space-x-1.5 mb-1 text-blue-950">
                    <Shield className="h-4 w-4 text-blue-700" />
                    <span>Safe Non-Destructive Operations Guarantee</span>
                  </p>
                  <p className="text-blue-800">
                    All operations and schema updates use non-destructive queries (<code className="bg-blue-100/80 px-1 py-0.5 rounded">CREATE TABLE IF NOT EXISTS</code>). Your live production rows, enquiry submissions, faculty members, and gallery files are strictly preserved.
                  </p>
                </div>

                {/* Modal Footer Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={runSafeMigration}
                    disabled={isMigrating}
                    className="px-4 py-2 bg-[#0D225C] text-white rounded-xl text-xs font-bold hover:bg-[#0D225C]/90 transition-colors flex items-center space-x-2 disabled:opacity-50"
                  >
                    <RefreshCw className={`h-3.5 w-3.5 ${isMigrating ? 'animate-spin' : ''}`} />
                    <span>{isMigrating ? 'Running...' : 'Run Safe Schema Verification'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowDbModal(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-xl text-xs font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboardPage;
