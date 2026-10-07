import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  RefreshCw, 
  AlertCircle, 
  Upload, 
  X, 
  Check, 
  GripVertical, 
  ChevronUp, 
  ChevronDown, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  GraduationCap,
  Move,
  Crop
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getAssetUrl, getApiUrl } from '../../utils/assets';
import { DEFAULT_FACULTY_BY_PROGRAM } from '../../hooks/useFaculty';
import CircularCropModal from './CircularCropModal';

export interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  qualifications: string;
  experience_years: string;
  photo_url: string;
  program: 'BBA' | 'BCA' | 'BCom' | 'MBA' | 'MCA' | 'Languages';
  is_active: boolean;
  display_order: number;
}

const DEPARTMENTS = [
  { id: 'BBA', name: 'Department of Business Administration (BBA)', short: 'BBA' },
  { id: 'BCA', name: 'Department of Computer Applications (BCA)', short: 'BCA' },
  { id: 'BCom', name: 'Department of Commerce (BCom)', short: 'BCom' },
  { id: 'MBA', name: 'Department of Management Studies (MBA)', short: 'MBA' },
  { id: 'MCA', name: 'Department of Computer Applications - PG (MCA)', short: 'MCA' },
  { id: 'Languages', name: 'Department of Languages (Kannada / English)', short: 'Languages' },
] as const;

// Build initial flat list from DEFAULT_FACULTY_BY_PROGRAM
const INITIAL_FLAT_FACULTY: FacultyMember[] = Object.values(DEFAULT_FACULTY_BY_PROGRAM)
  .flat()
  .map(f => ({
    id: f.id,
    name: f.name,
    designation: f.designation,
    qualifications: f.qualifications || '',
    experience_years: f.experience_years || '',
    photo_url: f.photo_url || '',
    program: f.program as any,
    is_active: f.is_active !== false,
    display_order: f.display_order || 1,
  }));

const FacultyManagement: React.FC = () => {
  const { getAuthHeaders } = useAuth();
  const [faculty, setFaculty] = useState<FacultyMember[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingMember, setEditingMember] = useState<FacultyMember | null>(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [activeTab, setActiveTab] = useState<string>('all');
  const [isSavingOrder, setIsSavingOrder] = useState(false);

  // Circular Crop Tool State
  const [imageToCrop, setImageToCrop] = useState<string | null>(null);

  // Drag and Drop state
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    qualifications: '',
    experience_years: '',
    program: 'BBA' as 'BBA' | 'BCA' | 'BCom' | 'MBA' | 'MCA' | 'Languages',
    photo_url: '',
    is_active: true,
  });

  const [photoFile, setPhotoFile] = useState<File | null>(null);

  // Helper to load from storage or initial data
  const getStoredFaculty = (): FacultyMember[] => {
    try {
      const stored = localStorage.getItem('pbs_faculty_data');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading stored faculty:', e);
    }
    return INITIAL_FLAT_FACULTY;
  };

  const saveStoredFaculty = (list: FacultyMember[]) => {
    try {
      localStorage.setItem('pbs_faculty_data', JSON.stringify(list));
    } catch (e) {
      console.error('Error saving faculty to storage:', e);
    }
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  const fetchFaculty = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(getApiUrl('api/faculty/manage.php?admin=1'), { 
        credentials: 'include',
        headers: getAuthHeaders()
      });
      if (response.ok) {
        const result = await response.json();
        if (result.success && Array.isArray(result.data) && result.data.length > 0) {
          const normalized = result.data.map((item: any) => ({
            ...item,
            display_order: item.display_order < 1 ? 1 : Number(item.display_order)
          }));
          setFaculty(normalized);
          saveStoredFaculty(normalized);
          setIsLoading(false);
          return;
        }
      }
      // Fallback
      const fallbackData = getStoredFaculty();
      setFaculty(fallbackData);
    } catch (err) {
      console.warn('Backend API not reachable, using local storage fallback for faculty');
      const fallbackData = getStoredFaculty();
      setFaculty(fallbackData);
    } finally {
      setIsLoading(false);
    }
  };

  // Open modal to add faculty for a specific department
  const openAddModal = (targetProgram: 'BBA' | 'BCA' | 'BCom' | 'MBA' | 'MCA' | 'Languages' = 'BBA') => {
    setEditingMember(null);
    setFormData({
      name: '',
      designation: '',
      qualifications: '',
      experience_years: '',
      program: targetProgram,
      photo_url: '',
      is_active: true,
    });
    setPhotoFile(null);
    setError('');
    setShowModal(true);
  };

  const openEditModal = (member: FacultyMember) => {
    setEditingMember(member);
    setFormData({
      name: member.name,
      designation: member.designation,
      qualifications: member.qualifications || '',
      experience_years: member.experience_years || '',
      program: member.program,
      photo_url: member.photo_url || '',
      is_active: member.is_active,
    });
    setPhotoFile(null);
    setError('');
    setShowModal(true);
  };

  // Handle Photo Select and trigger the Circular Crop Modal automatically
  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        setImageToCrop(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  // Persist reordered list to backend API & localStorage
  const persistReorderedList = async (newList: FacultyMember[], departmentId: string) => {
    setIsSavingOrder(true);
    
    // Calculate new sequential display_orders (1, 2, 3...)
    const deptItems = newList.filter(f => f.program === departmentId);
    const updatedDeptItems = deptItems.map((item, idx) => ({
      ...item,
      display_order: idx + 1
    }));

    // Merge into master list
    const masterUpdatedList = newList.map(f => {
      if (f.program === departmentId) {
        const found = updatedDeptItems.find(d => d.id === f.id);
        return found || f;
      }
      return f;
    });

    setFaculty(masterUpdatedList);
    saveStoredFaculty(masterUpdatedList);

    try {
      await fetch(getApiUrl('api/faculty/manage.php'), {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders(),
        },
        body: JSON.stringify({
          action: 'reorder',
          items: updatedDeptItems.map(item => ({
            id: item.id,
            display_order: item.display_order
          }))
        }),
      });

      setSuccessMessage('Faculty display order updated successfully!');
      setTimeout(() => setSuccessMessage(''), 2500);
    } catch (e) {
      console.warn('Could not sync reorder to backend, saved locally');
    } finally {
      setIsSavingOrder(false);
    }
  };

  // Move faculty item Up
  const moveItemUp = (member: FacultyMember, deptMembers: FacultyMember[]) => {
    const currentIndex = deptMembers.findIndex(f => f.id === member.id);
    if (currentIndex <= 0) return;

    const newDeptMembers = [...deptMembers];
    const temp = newDeptMembers[currentIndex - 1];
    newDeptMembers[currentIndex - 1] = newDeptMembers[currentIndex];
    newDeptMembers[currentIndex] = temp;

    // Create full list with new order
    const otherFaculty = faculty.filter(f => f.program !== member.program);
    const fullList = [...otherFaculty, ...newDeptMembers];
    persistReorderedList(fullList, member.program);
  };

  // Move faculty item Down
  const moveItemDown = (member: FacultyMember, deptMembers: FacultyMember[]) => {
    const currentIndex = deptMembers.findIndex(f => f.id === member.id);
    if (currentIndex < 0 || currentIndex >= deptMembers.length - 1) return;

    const newDeptMembers = [...deptMembers];
    const temp = newDeptMembers[currentIndex + 1];
    newDeptMembers[currentIndex + 1] = newDeptMembers[currentIndex];
    newDeptMembers[currentIndex] = temp;

    // Create full list with new order
    const otherFaculty = faculty.filter(f => f.program !== member.program);
    const fullList = [...otherFaculty, ...newDeptMembers];
    persistReorderedList(fullList, member.program);
  };

  // Drag & Drop Event Handlers
  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedItemIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (dragOverIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number, deptMembers: FacultyMember[], deptId: string) => {
    e.preventDefault();
    if (draggedItemIndex === null || draggedItemIndex === dropIndex) {
      setDraggedItemIndex(null);
      setDragOverIndex(null);
      return;
    }

    const newDeptMembers = [...deptMembers];
    const draggedItem = newDeptMembers[draggedItemIndex];
    newDeptMembers.splice(draggedItemIndex, 1);
    newDeptMembers.splice(dropIndex, 0, draggedItem);

    setDraggedItemIndex(null);
    setDragOverIndex(null);

    const otherFaculty = faculty.filter(f => f.program !== deptId);
    const fullList = [...otherFaculty, ...newDeptMembers];
    persistReorderedList(fullList, deptId);
  };

  const handleDragEnd = () => {
    setDraggedItemIndex(null);
    setDragOverIndex(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Compute display order automatically
    const deptMembers = faculty.filter(f => f.program === formData.program);
    const nextOrder = editingMember ? editingMember.display_order : deptMembers.length + 1;

    const payload: FacultyMember = {
      id: editingMember ? editingMember.id : Date.now(),
      name: formData.name.trim(),
      designation: formData.designation.trim(),
      qualifications: formData.qualifications.trim(),
      experience_years: formData.experience_years.trim(),
      program: formData.program,
      photo_url: formData.photo_url.trim(),
      display_order: nextOrder,
      is_active: formData.is_active,
    };

    let savedItem: FacultyMember = { ...payload };

    try {
      try {
        const url = editingMember
          ? getApiUrl(`api/faculty/manage.php?id=${editingMember.id}`)
          : getApiUrl('api/faculty/manage.php');

        const response = await fetch(url, {
          method: editingMember ? 'PUT' : 'POST',
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
              photo_url: result.data.photo_url || payload.photo_url,
            };
          }
        }
      } catch (apiErr) {
        console.warn('API error during faculty save, saving locally:', apiErr);
      }

      let updatedList: FacultyMember[];
      if (editingMember) {
        updatedList = faculty.map(f => f.id === editingMember.id ? savedItem : f);
      } else {
        updatedList = [...faculty, savedItem];
      }

      setFaculty(updatedList);
      saveStoredFaculty(updatedList);

      setShowModal(false);
      setEditingMember(null);
      setSuccessMessage(editingMember ? 'Faculty member updated successfully!' : 'Faculty member added successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      setError('An unexpected error occurred while saving.');
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this faculty member?')) return;

    try {
      try {
        await fetch(getApiUrl(`api/faculty/manage.php?id=${id}`), {
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

      const updated = faculty.filter(f => f.id !== id);
      setFaculty(updated);
      saveStoredFaculty(updated);
      setSuccessMessage('Faculty member deleted successfully.');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('Error deleting faculty:', err);
    }
  };

  const toggleActive = async (member: FacultyMember) => {
    const updatedMember = { ...member, is_active: !member.is_active };
    try {
      try {
        await fetch(getApiUrl(`api/faculty/manage.php?id=${member.id}`), {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            ...getAuthHeaders(),
          },
          credentials: 'include',
          body: JSON.stringify({ is_active: updatedMember.is_active }),
        });
      } catch (e) {
        console.warn('API update error, toggling status locally');
      }

      const updated = faculty.map(f => f.id === member.id ? updatedMember : f);
      setFaculty(updated);
      saveStoredFaculty(updated);
    } catch (err) {
      console.error('Error toggling active status:', err);
    }
  };

  // Filter faculty by department
  const getDepartmentFaculty = (prog: string) => {
    return faculty
      .filter(f => f.program === prog)
      .sort((a, b) => (a.display_order || 1) - (b.display_order || 1));
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

      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-[#CCB156]/10 to-transparent pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#0D225C]/5 px-3.5 py-1 rounded-full text-xs font-bold text-[#0D225C] mb-2">
              <Move className="h-3.5 w-3.5 text-[#CCB156]" />
              <span>Drag & Drop Faculty Hierarchy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D225C] tracking-tight">
              Faculty Directory & Circular Crop
            </h2>
            <p className="text-gray-500 text-sm mt-1 max-w-xl">
              Upload and fit faculty portraits into circular frames. Drag and drop cards to re-arrange their order across departments.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={fetchFaculty}
              disabled={isLoading}
              className="p-3 bg-gray-50 hover:bg-gray-100 text-[#0D225C] rounded-2xl border border-gray-200 transition-all hover:rotate-180 duration-500"
              title="Refresh Faculty"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>

            <button
              onClick={() => openAddModal(activeTab === 'all' ? 'BBA' : activeTab as any)}
              className="flex items-center space-x-2.5 bg-gradient-to-r from-[#0D225C] to-[#143282] hover:from-[#143282] hover:to-[#0D225C] text-white px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Plus className="h-4 w-4 text-[#CCB156]" />
              <span>Add Faculty Member</span>
            </button>
          </div>
        </div>

        {/* Department Tabs Bar */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 mt-6 pt-6 border-t border-gray-100">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-[#0D225C] text-white shadow-md'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-[#0D225C]'
            }`}
          >
            All Departments ({faculty.length})
          </button>
          {DEPARTMENTS.map((dept) => {
            const count = faculty.filter(f => f.program === dept.id).length;
            return (
              <button
                key={dept.id}
                onClick={() => setActiveTab(dept.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeTab === dept.id
                    ? 'bg-[#0D225C] text-white shadow-md'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-[#0D225C]'
                }`}
              >
                {dept.short} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      {isLoading ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#0D225C] mx-auto mb-3" />
          <p className="text-xs font-semibold text-gray-500">Loading faculty members...</p>
        </div>
      ) : (
        <div className="space-y-8">
          {DEPARTMENTS.filter(d => activeTab === 'all' || activeTab === d.id).map((dept) => {
            const deptMembers = getDepartmentFaculty(dept.id);

            return (
              <div key={dept.id} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                {/* Department Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0D225C]">
                      {dept.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {deptMembers.length} Faculty Members • Circular portrait frame view
                    </p>
                  </div>

                  <button
                    onClick={() => openAddModal(dept.id as any)}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-gray-50 hover:bg-gray-100 text-[#0D225C] rounded-xl text-xs font-bold border border-gray-200 transition-colors"
                  >
                    <Plus className="h-3.5 w-3.5 text-[#CCB156]" />
                    <span>Add to {dept.short}</span>
                  </button>
                </div>

                {/* Faculty Drag-and-Drop List */}
                {deptMembers.length === 0 ? (
                  <div className="text-center py-10 bg-gray-50/60 rounded-2xl border-2 border-dashed border-gray-200">
                    <GraduationCap className="h-10 w-10 text-gray-300 mx-auto mb-2" />
                    <p className="text-xs font-semibold text-gray-500">No faculty members added to this department yet.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {deptMembers.map((member, index) => {
                      const isDragging = draggedItemIndex === index;
                      const isOver = dragOverIndex === index;

                      return (
                        <div
                          key={member.id}
                          draggable
                          onDragStart={(e) => handleDragStart(e, index)}
                          onDragOver={(e) => handleDragOver(e, index)}
                          onDrop={(e) => handleDrop(e, index, deptMembers, dept.id)}
                          onDragEnd={handleDragEnd}
                          className={`bg-white rounded-2xl p-4 border transition-all duration-200 flex items-center justify-between gap-4 group ${
                            isDragging 
                              ? 'opacity-40 border-dashed border-[#0D225C] bg-blue-50/50 scale-[0.99]' 
                              : isOver 
                              ? 'border-2 border-[#CCB156] bg-amber-50/40 shadow-md' 
                              : 'border-gray-200/80 hover:border-[#0D225C]/40 hover:shadow-md'
                          }`}
                        >
                          {/* Drag Handle & Position Badge */}
                          <div className="flex items-center space-x-3 flex-shrink-0">
                            <div 
                              className="cursor-grab active:cursor-grabbing p-1.5 text-gray-400 hover:text-[#0D225C] hover:bg-gray-100 rounded-lg transition-colors"
                              title="Drag to reorder"
                            >
                              <GripVertical className="h-5 w-5" />
                            </div>

                            <div className="h-7 w-7 rounded-xl bg-[#0D225C]/5 text-[#0D225C] font-extrabold text-xs flex items-center justify-center border border-[#0D225C]/10">
                              #{index + 1}
                            </div>
                          </div>

                          {/* Faculty Photo in Pure Circle Frame */}
                          <div className="flex items-center space-x-4 flex-grow min-w-0">
                            <div className="h-14 w-14 rounded-full overflow-hidden bg-gray-100 border-3 border-[#CCB156] flex-shrink-0 shadow-sm">
                              <img
                                src={getAssetUrl(member.photo_url) || 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'}
                                alt={member.name}
                                className="w-full h-full object-cover object-top"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop';
                                }}
                              />
                            </div>

                            <div className="min-w-0 overflow-hidden">
                              <div className="flex items-center space-x-2">
                                <h4 className="font-extrabold text-sm sm:text-base text-[#0D225C] truncate">
                                  {member.name}
                                </h4>
                                {index === 0 && (
                                  <span className="text-[10px] font-bold bg-[#CCB156]/20 text-[#0D225C] px-2 py-0.5 rounded-full border border-[#CCB156]/30">
                                    Primary / HOD
                                  </span>
                                )}
                              </div>
                              <p className="text-xs font-semibold text-[#CCB156] truncate">{member.designation}</p>
                              <p className="text-[11px] text-gray-500 truncate mt-0.5">
                                {member.qualifications && `${member.qualifications}`}
                                {member.experience_years && ` • ${member.experience_years} Exp`}
                              </p>
                            </div>
                          </div>

                          {/* Quick Up/Down Buttons & Action Controls */}
                          <div className="flex items-center space-x-2 flex-shrink-0">
                            {/* Up / Down Controls */}
                            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl p-0.5">
                              <button
                                onClick={() => moveItemUp(member, deptMembers)}
                                disabled={index === 0}
                                className="p-1 text-gray-500 hover:text-[#0D225C] disabled:opacity-30 disabled:hover:text-gray-500 transition-colors"
                                title="Move Up"
                              >
                                <ChevronUp className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => moveItemDown(member, deptMembers)}
                                disabled={index === deptMembers.length - 1}
                                className="p-1 text-gray-500 hover:text-[#0D225C] disabled:opacity-30 disabled:hover:text-gray-500 transition-colors"
                                title="Move Down"
                              >
                                <ChevronDown className="h-4 w-4" />
                              </button>
                            </div>

                            {/* Active Switch */}
                            <button
                              onClick={() => toggleActive(member)}
                              className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition-colors ${
                                member.is_active 
                                  ? 'bg-green-50 text-green-700 border border-green-200' 
                                  : 'bg-gray-100 text-gray-500'
                              }`}
                            >
                              {member.is_active ? 'Active' : 'Hidden'}
                            </button>

                            {/* Edit & Delete */}
                            <button
                              onClick={() => openEditModal(member)}
                              className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                              title="Edit Details"
                            >
                              <Edit2 className="h-4 w-4" />
                            </button>

                            <button
                              onClick={() => handleDelete(member.id)}
                              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                              title="Delete Faculty"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* CREATE / EDIT FACULTY MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 animate-scale-in">
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-[#0D225C] to-[#122e7a] text-white rounded-t-3xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">
                  {editingMember ? `Edit Faculty: ${editingMember.name}` : 'Add New Faculty Member'}
                </h3>
                <p className="text-xs text-[#CCB156]">
                  {editingMember ? 'Update faculty credentials and photo' : 'Portrait is fitted into a circle frame automatically'}
                </p>
              </div>
              <button
                onClick={() => { setShowModal(false); setEditingMember(null); }}
                className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-center space-x-3 text-xs text-red-800 animate-fade-in">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Department Selector */}
              <div>
                <label className="block text-xs font-bold text-[#0D225C] uppercase tracking-wider mb-1.5">
                  Academic Department *
                </label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value as any })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm font-semibold text-[#0D225C] focus:ring-2 focus:ring-[#CCB156] outline-none"
                  required
                >
                  {DEPARTMENTS.map(dept => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Faculty Name & Designation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Dr. Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#CCB156] outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Designation / Role *</label>
                  <input
                    type="text"
                    placeholder="e.g. Assistant Professor & HOD"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#CCB156] outline-none"
                    required
                  />
                </div>
              </div>

              {/* Qualifications & Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Qualifications</label>
                  <input
                    type="text"
                    placeholder="e.g. M.Com., MBA, (Ph.D.)"
                    value={formData.qualifications}
                    onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#CCB156] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Experience</label>
                  <input
                    type="text"
                    placeholder="e.g. 10+ Years"
                    value={formData.experience_years}
                    onChange={(e) => setFormData({ ...formData, experience_years: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#CCB156] outline-none"
                  />
                </div>
              </div>

              {/* Circular Photo Upload & Manual Fit Cropper */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-[#0D225C] uppercase tracking-wider">
                    Faculty Portrait (Circle Fit Only)
                  </label>
                  {formData.photo_url && (
                    <button
                      type="button"
                      onClick={() => setImageToCrop(getAssetUrl(formData.photo_url))}
                      className="text-xs font-bold text-[#0D225C] hover:text-[#CCB156] flex items-center space-x-1 cursor-pointer"
                    >
                      <Crop className="h-3.5 w-3.5 text-[#CCB156]" />
                      <span>Adjust & Re-crop Circle</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50/80 rounded-2xl border border-gray-200">
                  {/* Pure Circle Preview */}
                  <div className="relative w-20 h-20 rounded-full bg-gray-100 border-4 border-[#CCB156] overflow-hidden flex-shrink-0 shadow-md">
                    {formData.photo_url ? (
                      <img
                        src={getAssetUrl(formData.photo_url)}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <Upload className="h-6 w-6" />
                      </div>
                    )}
                  </div>

                  <div className="flex-grow space-y-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoSelect}
                      className="block w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#0D225C] file:text-white hover:file:bg-[#143282] cursor-pointer"
                    />
                    <p className="text-[11px] text-gray-500">
                      Selecting an image opens the interactive <strong>Circular Crop & Fit</strong> tool.
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Switch */}
              <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                <div>
                  <span className="text-xs font-bold text-[#0D225C] block">Active & Published</span>
                  <span className="text-[11px] text-gray-500">Show this faculty member on the public college website.</span>
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
                  onClick={() => { setShowModal(false); setEditingMember(null); }}
                  className="px-5 py-2.5 text-xs font-bold text-gray-600 hover:text-gray-900 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#0D225C] hover:bg-[#143282] text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all"
                >
                  {editingMember ? 'Save Changes' : 'Add Faculty'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CIRCULAR CROP & MANUAL FIT MODAL */}
      {imageToCrop && (
        <CircularCropModal
          imageSrc={imageToCrop}
          onCropComplete={(croppedDataUrl) => {
            setFormData(prev => ({ ...prev, photo_url: croppedDataUrl }));
            setImageToCrop(null);
          }}
          onCancel={() => setImageToCrop(null)}
        />
      )}
    </div>
  );
};

export default FacultyManagement;
