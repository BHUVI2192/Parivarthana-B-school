import React, { useState, useEffect, useMemo } from 'react';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  RefreshCw, 
  AlertCircle, 
  Users, 
  Shield, 
  UserCheck, 
  Key, 
  Eye, 
  EyeOff, 
  Search, 
  Filter, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles, 
  Mail, 
  Calendar, 
  Clock, 
  LayoutGrid, 
  List, 
  X,
  UserPlus,
  ShieldCheck,
  Award
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getApiUrl } from '../../utils/assets';

interface User {
  id: number;
  username: string;
  full_name: string;
  email: string;
  role: 'admin' | 'admission_staff' | 'staff';
  is_active: boolean;
  last_login?: string | null;
  created_at: string;
}

const UserManagement: React.FC = () => {
  const { getAuthHeaders, user: currentUser } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [passwordUser, setPasswordUser] = useState<User | null>(null);
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [copiedPassword, setCopiedPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Filters & Search
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<'all' | 'admin' | 'admission_staff' | 'staff'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    full_name: '',
    email: '',
    role: 'staff' as 'admin' | 'admission_staff' | 'staff',
    is_active: true,
  });

  const rolesConfig = [
    {
      value: 'admin' as const,
      label: 'System Administrator',
      shortLabel: 'Admin',
      icon: Shield,
      color: 'bg-purple-600',
      badgeBg: 'bg-purple-100 text-purple-900 border-purple-200',
      gradient: 'from-purple-600 to-indigo-700',
      description: 'Full administrative access: users, faculty, news, gallery, admissions, and database operations.',
      permissions: ['Manage Users', 'Edit Faculty', 'Post News', 'Manage Gallery', 'View Admissions', 'System Settings']
    },
    {
      value: 'admission_staff' as const,
      label: 'Admissions Coordinator',
      shortLabel: 'Admissions Officer',
      icon: UserCheck,
      color: 'bg-blue-600',
      badgeBg: 'bg-blue-100 text-blue-900 border-blue-200',
      gradient: 'from-blue-600 to-cyan-600',
      description: 'Admissions portal management: view candidate enquiries, update status, and log applicant notes.',
      permissions: ['View Admissions Enquiries', 'Update Application Status', 'Candidate Notes', 'Export Enquiries']
    },
    {
      value: 'staff' as const,
      label: 'Content & Media Coordinator',
      shortLabel: 'Staff Coordinator',
      icon: Sparkles,
      color: 'bg-amber-600',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
      gradient: 'from-amber-500 to-orange-600',
      description: 'Departmental coordinator: manage campus gallery photos, student achievers, and general announcements.',
      permissions: ['Upload Gallery Photos', 'Add Student Achievers', 'Manage Event Media', 'View Announcements']
    },
  ];

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(getApiUrl('api/users/manage.php'), { 
        credentials: 'include',
        headers: getAuthHeaders()
      });
      const result = await response.json();
      if (result.success && Array.isArray(result.data)) {
        setUsers(result.data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Generate strong random password
  const generatePassword = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%&*';
    let pass = '';
    for (let i = 0; i < 12; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setFormData(prev => ({ ...prev, password: pass }));
    setNewPassword(pass);
    setShowPassword(true);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPassword(true);
    setTimeout(() => setCopiedPassword(false), 2000);
  };

  // Password strength calculation
  const getPasswordStrength = (pass: string) => {
    if (!pass) return { score: 0, text: 'Empty', color: 'bg-gray-200' };
    let score = 0;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    if (score <= 1) return { score: 1, text: 'Weak', color: 'bg-red-500', width: '25%' };
    if (score === 2 || score === 3) return { score: 2, text: 'Good', color: 'bg-amber-500', width: '65%' };
    return { score: 3, text: 'Strong', color: 'bg-green-500', width: '100%' };
  };

  // Filtered Users
  const filteredUsers = useMemo(() => {
    return users.filter(u => {
      const matchesSearch = 
        u.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRole = roleFilter === 'all' || u.role === roleFilter;
      const matchesStatus = statusFilter === 'all' || 
        (statusFilter === 'active' && u.is_active) || 
        (statusFilter === 'inactive' && !u.is_active);

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, searchTerm, roleFilter, statusFilter]);

  // Role Counts
  const roleCounts = useMemo(() => {
    return {
      total: users.length,
      admin: users.filter(u => u.role === 'admin').length,
      admission: users.filter(u => u.role === 'admission_staff').length,
      staff: users.filter(u => u.role === 'staff').length,
      active: users.filter(u => u.is_active).length,
    };
  }, [users]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const url = editingUser
        ? getApiUrl(`api/users/manage.php?id=${editingUser.id}`)
        : getApiUrl('api/users/manage.php');
      const method = editingUser ? 'PUT' : 'POST';

      const body = editingUser
        ? { ...formData, id: editingUser.id }
        : formData;

      const response = await fetch(url, {
        method,
        headers: getAuthHeaders(),
        credentials: 'include',
        body: JSON.stringify(body),
      });

      const result = await response.json();

      if (result.success) {
        setShowModal(false);
        setEditingUser(null);
        resetForm();
        setSuccessMessage(editingUser ? 'User updated successfully!' : 'New user account created successfully!');
        setTimeout(() => setSuccessMessage(''), 3500);
        fetchUsers();
      } else {
        setError(result.message || 'Failed to save user account.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    }
  };

  const handlePasswordResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordUser || !newPassword) return;

    try {
      const response = await fetch(getApiUrl(`api/users/manage.php?id=${passwordUser.id}`), {
        method: 'PUT',
        headers: getAuthHeaders(),
        credentials: 'include',
        body: JSON.stringify({ password: newPassword }),
      });

      const result = await response.json();
      if (result.success) {
        setShowPasswordModal(false);
        setPasswordUser(null);
        setNewPassword('');
        setSuccessMessage(`Password for @${passwordUser.username} updated successfully!`);
        setTimeout(() => setSuccessMessage(''), 3500);
      } else {
        setError(result.message || 'Failed to update password.');
      }
    } catch (err) {
      setError('Network error while resetting password.');
    }
  };

  const handleDelete = async (id: number, username: string) => {
    if (currentUser?.id === id) {
      alert('You cannot delete your own logged-in account!');
      return;
    }

    if (!confirm(`Are you sure you want to delete the user account "@${username}"? This action cannot be undone.`)) return;

    try {
      const response = await fetch(getApiUrl(`api/users/manage.php?id=${id}`), {
        method: 'DELETE',
        credentials: 'include',
        headers: getAuthHeaders()
      });

      const result = await response.json();
      if (result.success) {
        setSuccessMessage(`Account @${username} removed successfully.`);
        setTimeout(() => setSuccessMessage(''), 3000);
        fetchUsers();
      } else {
        alert(result.message || 'Could not delete user.');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const toggleActive = async (userToToggle: User) => {
    try {
      const response = await fetch(getApiUrl(`api/users/manage.php?id=${userToToggle.id}`), {
        method: 'PUT',
        headers: getAuthHeaders(),
        credentials: 'include',
        body: JSON.stringify({ is_active: !userToToggle.is_active }),
      });

      const result = await response.json();
      if (result.success) {
        fetchUsers();
      }
    } catch (error) {
      console.error('Error toggling active status:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      username: '',
      password: '',
      full_name: '',
      email: '',
      role: 'staff',
      is_active: true,
    });
    setError('');
    setShowPassword(false);
  };

  const openEditModal = (userToEdit: User) => {
    setEditingUser(userToEdit);
    setFormData({
      username: userToEdit.username,
      password: '',
      full_name: userToEdit.full_name,
      email: userToEdit.email,
      role: userToEdit.role,
      is_active: userToEdit.is_active,
    });
    setShowPassword(false);
    setShowModal(true);
  };

  const openPasswordModal = (userTarget: User) => {
    setPasswordUser(userTarget);
    setNewPassword('');
    setShowPassword(true);
    setShowPasswordModal(true);
  };

  const getRoleConfig = (role: string) => {
    return rolesConfig.find(r => r.value === role) || rolesConfig[2];
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .substring(0, 2)
      .toUpperCase() || 'U';
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in font-sans">
      {/* Toast Notification */}
      {successMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0D225C] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-[#CCB156]/40 flex items-center space-x-3 animate-fade-in">
          <CheckCircle2 className="h-5 w-5 text-[#CCB156] flex-shrink-0" />
          <span className="text-sm font-semibold">{successMessage}</span>
        </div>
      )}

      {/* Header Banner & Analytics */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-[#CCB156]/10 to-transparent pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#0D225C]/5 px-3 py-1 rounded-full text-xs font-bold text-[#0D225C] mb-2">
              <ShieldCheck className="h-3.5 w-3.5 text-[#CCB156]" />
              <span>Role-Based Access Control (RBAC)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D225C] tracking-tight">
              User & Coordinator Accounts
            </h2>
            <p className="text-gray-500 text-sm mt-1 max-w-xl">
              Create, configure, and manage administrative credentials and department coordinator permissions for the PBS Portal.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={fetchUsers}
              disabled={isLoading}
              className="p-3 bg-gray-50 hover:bg-gray-100 text-[#0D225C] rounded-2xl border border-gray-200 transition-all hover:rotate-180 duration-500"
              title="Refresh User List"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>

            <button
              onClick={() => { resetForm(); setShowModal(true); }}
              className="flex items-center space-x-2.5 bg-gradient-to-r from-[#0D225C] to-[#143282] hover:from-[#143282] hover:to-[#0D225C] text-white px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <UserPlus className="h-4 w-4 text-[#CCB156]" />
              <span>Create New Account</span>
            </button>
          </div>
        </div>

        {/* Quick Analytics Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 mt-6 pt-6 border-t border-gray-100">
          <div className="bg-gray-50/80 p-4 rounded-2xl border border-gray-100 flex items-center space-x-3.5">
            <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
              <Users className="h-5 w-5 text-[#CCB156]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500">Total Users</p>
              <p className="text-xl font-extrabold text-[#0D225C]">{roleCounts.total}</p>
            </div>
          </div>

          <div className="bg-purple-50/60 p-4 rounded-2xl border border-purple-100 flex items-center space-x-3.5">
            <div className="h-10 w-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-purple-700">Administrators</p>
              <p className="text-xl font-extrabold text-purple-950">{roleCounts.admin}</p>
            </div>
          </div>

          <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 flex items-center space-x-3.5">
            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
              <UserCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-blue-700">Admissions Officers</p>
              <p className="text-xl font-extrabold text-blue-950">{roleCounts.admission}</p>
            </div>
          </div>

          <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 flex items-center space-x-3.5">
            <div className="h-10 w-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-sm">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-amber-700">Content Staff</p>
              <p className="text-xl font-extrabold text-amber-950">{roleCounts.staff}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, username, email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-[#0D225C] focus:ring-2 focus:ring-[#CCB156] focus:bg-white outline-none transition-all"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <div className="flex items-center space-x-1 bg-gray-50 p-1 rounded-xl border border-gray-200 text-xs">
            {(['all', 'admin', 'admission_staff', 'staff'] as const).map(role => (
              <button
                key={role}
                onClick={() => setRoleFilter(role)}
                className={`px-2.5 py-1 rounded-lg font-semibold capitalize transition-all ${
                  roleFilter === role
                    ? 'bg-[#0D225C] text-white shadow-sm'
                    : 'text-gray-600 hover:text-[#0D225C]'
                }`}
              >
                {role === 'all' ? 'All Roles' : role === 'admission_staff' ? 'Admissions' : role}
              </button>
            ))}
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 outline-none focus:ring-2 focus:ring-[#CCB156]"
          >
            <option value="all">All Status</option>
            <option value="active">Active Only</option>
            <option value="inactive">Inactive Only</option>
          </select>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow text-[#0D225C]' : 'text-gray-400 hover:text-gray-700'}`}
              title="Grid View"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg transition-colors ${viewMode === 'table' ? 'bg-white shadow text-[#0D225C]' : 'text-gray-400 hover:text-gray-700'}`}
              title="Table View"
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Users List / Grid */}
      {isLoading ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#0D225C] mx-auto mb-3" />
          <p className="text-xs font-semibold text-gray-500">Loading user accounts...</p>
        </div>
      ) : filteredUsers.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm">
          <Users className="h-16 w-16 mx-auto mb-3 text-gray-300" />
          <h3 className="text-base font-bold text-[#0D225C]">No Accounts Found</h3>
          <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
            {searchTerm ? `No users matched "${searchTerm}". Try resetting your filter.` : 'No accounts have been created yet.'}
          </p>
        </div>
      ) : viewMode === 'grid' ? (
        /* GRID CARDS VIEW */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredUsers.map((userItem) => {
            const roleCfg = getRoleConfig(userItem.role);
            const RoleIcon = roleCfg.icon;
            const isSelf = currentUser?.id === userItem.id;

            return (
              <div
                key={userItem.id}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#CCB156]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Top Bar with Role & Status */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${roleCfg.badgeBg}`}>
                      <RoleIcon className="h-3.5 w-3.5 mr-1.5" />
                      {roleCfg.shortLabel}
                    </span>

                    {/* Toggle Switch */}
                    <button
                      onClick={() => toggleActive(userItem)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        userItem.is_active ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                      title={userItem.is_active ? 'Click to deactivate' : 'Click to activate'}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                          userItem.is_active ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  {/* User Profile Info */}
                  <div className="flex items-center space-x-3.5 mb-4">
                    <div className={`h-12 w-12 rounded-2xl bg-gradient-to-tr ${roleCfg.gradient} text-white font-extrabold flex items-center justify-center text-base shadow-md group-hover:scale-105 transition-transform flex-shrink-0`}>
                      {getInitials(userItem.full_name)}
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-extrabold text-sm sm:text-base text-[#0D225C] truncate flex items-center">
                        {userItem.full_name}
                        {isSelf && (
                          <span className="ml-2 text-[10px] bg-[#CCB156]/20 text-[#0D225C] px-2 py-0.5 rounded-full font-bold">
                            You
                          </span>
                        )}
                      </h4>
                      <p className="text-xs text-gray-500 font-mono mt-0.5">@{userItem.username}</p>
                    </div>
                  </div>

                  {/* Meta details */}
                  <div className="space-y-1.5 py-3 border-y border-gray-50 text-xs text-gray-600">
                    <div className="flex items-center space-x-2 truncate">
                      <Mail className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                      <span className="truncate">{userItem.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[11px] text-gray-500">
                      <Calendar className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                      <span>Joined {new Date(userItem.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="mt-4 pt-2 flex items-center justify-between gap-2">
                  <button
                    onClick={() => openPasswordModal(userItem)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-semibold border border-gray-200 transition-colors"
                  >
                    <Key className="h-3.5 w-3.5 text-[#CCB156]" />
                    <span>Reset Pass</span>
                  </button>

                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => openEditModal(userItem)}
                      className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                      title="Edit Account Details"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    {!isSelf && (
                      <button
                        onClick={() => handleDelete(userItem.id, userItem.username)}
                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                        title="Delete User"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* TABLE LIST VIEW */
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/80 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  <th className="px-6 py-4">User Account</th>
                  <th className="px-6 py-4">Role & Access</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Created Date</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                {filteredUsers.map((userItem) => {
                  const roleCfg = getRoleConfig(userItem.role);
                  const RoleIcon = roleCfg.icon;
                  const isSelf = currentUser?.id === userItem.id;

                  return (
                    <tr key={userItem.id} className="hover:bg-gray-50/60 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className={`h-9 w-9 rounded-xl bg-gradient-to-tr ${roleCfg.gradient} text-white font-bold flex items-center justify-center text-xs flex-shrink-0 shadow-sm`}>
                            {getInitials(userItem.full_name)}
                          </div>
                          <div>
                            <p className="font-bold text-[#0D225C] text-sm">
                              {userItem.full_name}
                              {isSelf && (
                                <span className="ml-2 text-[10px] bg-[#CCB156]/20 text-[#0D225C] px-2 py-0.5 rounded-full font-bold">
                                  You
                                </span>
                              )}
                            </p>
                            <p className="text-gray-500 font-mono text-[11px]">@{userItem.username} • {userItem.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border ${roleCfg.badgeBg}`}>
                          <RoleIcon className="h-3 w-3 mr-1" />
                          {roleCfg.shortLabel}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => toggleActive(userItem)}
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold ${
                            userItem.is_active
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full mr-1.5 ${userItem.is_active ? 'bg-green-600' : 'bg-gray-400'}`} />
                          {userItem.is_active ? 'Active' : 'Inactive'}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-gray-500">
                        {new Date(userItem.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right space-x-1">
                        <button
                          onClick={() => openPasswordModal(userItem)}
                          className="p-1.5 text-gray-500 hover:text-[#0D225C] hover:bg-gray-100 rounded-lg transition-colors inline-block"
                          title="Reset Password"
                        >
                          <Key className="h-4 w-4 text-[#CCB156]" />
                        </button>
                        <button
                          onClick={() => openEditModal(userItem)}
                          className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors inline-block"
                          title="Edit User"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        {!isSelf && (
                          <button
                            onClick={() => handleDelete(userItem.id, userItem.username)}
                            className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors inline-block"
                            title="Delete User"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CREATE / EDIT USER MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 animate-scale-in">
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-[#0D225C] to-[#122e7a] text-white rounded-t-3xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-2xl bg-[#CCB156] text-[#0D225C] flex items-center justify-center font-bold shadow-md">
                  <UserPlus className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">
                    {editingUser ? `Edit Account: @${editingUser.username}` : 'Create New User / Coordinator Account'}
                  </h3>
                  <p className="text-xs text-[#CCB156]">Configure role credentials and access control</p>
                </div>
              </div>
              <button
                onClick={() => { setShowModal(false); setEditingUser(null); resetForm(); }}
                className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-center space-x-3 text-xs text-red-800 animate-fade-in">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Step 1: Select Role Visual Cards */}
              <div>
                <label className="block text-xs font-bold text-[#0D225C] uppercase tracking-wider mb-2.5">
                  1. Select Account Role & Permissions *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {rolesConfig.map(roleItem => {
                    const isSelected = formData.role === roleItem.value;
                    const Icon = roleItem.icon;
                    return (
                      <div
                        key={roleItem.value}
                        onClick={() => setFormData({ ...formData, role: roleItem.value })}
                        className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#0D225C] bg-[#0D225C]/5 shadow-sm ring-2 ring-[#CCB156]/30'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className={`h-8 w-8 rounded-xl ${roleItem.color} text-white flex items-center justify-center`}>
                              <Icon className="h-4 w-4" />
                            </div>
                            <input
                              type="radio"
                              name="role"
                              checked={isSelected}
                              onChange={() => setFormData({ ...formData, role: roleItem.value })}
                              className="h-4 w-4 text-[#0D225C] focus:ring-[#CCB156]"
                            />
                          </div>
                          <p className="font-bold text-xs text-[#0D225C] leading-tight">{roleItem.label}</p>
                          <p className="text-[11px] text-gray-500 mt-1 leading-snug">{roleItem.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Account Details */}
              <div>
                <label className="block text-xs font-bold text-[#0D225C] uppercase tracking-wider mb-2.5">
                  2. Account Profile Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Dr. Rajesh Kumar"
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#CCB156] focus:border-transparent outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Username (Login ID) *</label>
                    <input
                      type="text"
                      placeholder="e.g. rajesh_kumar"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '') })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#CCB156] focus:border-transparent outline-none disabled:bg-gray-100"
                      required
                      disabled={!!editingUser}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Official Email Address *</label>
                    <input
                      type="email"
                      placeholder="e.g. coordinator@pbs.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#CCB156] focus:border-transparent outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Security & Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold text-[#0D225C] uppercase tracking-wider">
                    3. Security Credentials {editingUser && '(Leave blank to retain existing password)'}
                  </label>
                  <button
                    type="button"
                    onClick={generatePassword}
                    className="text-[11px] font-bold text-[#0D225C] hover:text-[#CCB156] bg-gray-100 hover:bg-gray-200 px-2.5 py-1 rounded-lg transition-colors flex items-center space-x-1"
                  >
                    <Sparkles className="h-3 w-3 text-[#CCB156]" />
                    <span>Generate Strong Password</span>
                  </button>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={editingUser ? '•••••••••••• (Unchanged)' : 'Enter strong password (minimum 6 characters)'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-4 pr-24 py-2.5 border border-gray-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#CCB156] focus:border-transparent outline-none"
                    required={!editingUser}
                  />
                  <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center space-x-1">
                    {formData.password && (
                      <button
                        type="button"
                        onClick={() => copyToClipboard(formData.password)}
                        className="p-1.5 text-gray-400 hover:text-[#0D225C]"
                        title="Copy Password"
                      >
                        {copiedPassword ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="p-1.5 text-gray-400 hover:text-[#0D225C]"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {formData.password && (
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between text-[10px] font-semibold text-gray-500">
                      <span>Password Strength</span>
                      <span>{getPasswordStrength(formData.password).text}</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getPasswordStrength(formData.password).color} transition-all duration-300`}
                        style={{ width: getPasswordStrength(formData.password).width }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Status Switch */}
              <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                <div>
                  <span className="text-xs font-bold text-[#0D225C] block">Account Active Status</span>
                  <span className="text-[11px] text-gray-500">Allow this user to sign in to the PBS Portal immediately.</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.is_active}
                    onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0D225C]" />
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => { setShowModal(false); setEditingUser(null); resetForm(); }}
                  className="px-5 py-2.5 text-xs font-bold text-gray-600 hover:text-gray-900 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#0D225C] hover:bg-[#143282] text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all"
                >
                  {editingUser ? 'Save Changes' : 'Create Account'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* QUICK RESET PASSWORD MODAL */}
      {showPasswordModal && passwordUser && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 animate-scale-in">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center space-x-2.5">
                <div className="h-9 w-9 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center font-bold">
                  <Key className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0D225C]">Reset Password</h3>
                  <p className="text-xs text-gray-500">For @{passwordUser.username} ({passwordUser.full_name})</p>
                </div>
              </div>
              <button
                onClick={() => { setShowPasswordModal(false); setPasswordUser(null); setNewPassword(''); }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handlePasswordResetSubmit} className="mt-5 space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-semibold text-gray-700">New Password *</label>
                  <button
                    type="button"
                    onClick={generatePassword}
                    className="text-[10px] font-bold text-[#0D225C] hover:text-[#CCB156]"
                  >
                    🎲 Generate
                  </button>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter new strong password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full pl-4 pr-20 py-2.5 border border-gray-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#CCB156] outline-none"
                    required
                  />
                  <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center space-x-1">
                    {newPassword && (
                      <button
                        type="button"
                        onClick={() => copyToClipboard(newPassword)}
                        className="p-1 text-gray-400 hover:text-[#0D225C]"
                      >
                        {copiedPassword ? <Check className="h-3.5 w-3.5 text-green-600" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="p-1 text-gray-400 hover:text-[#0D225C]"
                    >
                      {showPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => { setShowPasswordModal(false); setPasswordUser(null); setNewPassword(''); }}
                  className="px-4 py-2 text-xs font-semibold text-gray-500 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#0D225C] hover:bg-[#143282] text-white rounded-xl text-xs font-bold shadow-md"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
