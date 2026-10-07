import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutTrustPage from './pages/AboutTrustPage';
import AboutPBSPage from './pages/AboutPBSPage';
import BoardOfTrusteesPage from './pages/BoardOfTrusteesPage';
import GoverningCouncilPage from './pages/GoverningCouncilPage';
import PrincipalMessagePage from './pages/PrincipalMessagePage';
import OrganogramPage from './pages/OrganogramPage';

import BBAPage from './pages/BBAPage';
import BComPage from './pages/BComPage';
import BCAPage from './pages/BCAPage';
import MBAPage from './pages/MBAPage';
import MCAPage from './pages/MCAPage';
import DepartmentOfLanguagesPage from './pages/DepartmentOfLanguagesPage';
import TAPCellPage from './pages/TAPCellPage';
import UnderGraduateAdmissionPage from './pages/UnderGraduateAdmissionPage';
import PostGraduateAdmissionPage from './pages/PostGraduateAdmissionPage';
import FeePaymentPage from './pages/FeePaymentPage';
import ContactPage from './pages/ContactPage';
import FacilitiesPage from './pages/FacilitiesPage';
import StatutoryCellsPage from './pages/StatutoryCellsPage';
import CommunityServicesPage from './pages/CommunityServicesPage';
import ExaminationPage from './pages/ExaminationPage';
import StudentAchieversPage from './pages/StudentAchieversPage';
import GalleryPage from './pages/GalleryPage';
import MandatoryDisclosurePage from './pages/MandatoryDisclosurePage';
import UGCDisclosurePage from './pages/UGCDisclosurePage';
import AlumniPage from './pages/AlumniPage';
import IQACPage from './pages/IQACPage';
import ResearchPage from './pages/ResearchPage';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import DashboardLayout from './components/admin/DashboardLayout';
import NewsManagement from './components/admin/NewsManagement';
import FacultyManagement from './components/admin/FacultyManagement';
import GalleryManagement from './components/admin/GalleryManagement';
import AchieversManagement from './components/admin/AchieversManagement';
import AdmissionsManagement from './components/admin/AdmissionsManagement';
import UserManagement from './components/admin/UserManagement';

// Page URL Mapping
const PAGE_URL_MAP: Record<string, string> = {
  'AboutTrust': '/about/trust',
  'AboutPBS': '/about/pbs',
  'BoardofTustees&Message': '/about/board-of-trustees',
  'GoverningCouncilMembers': '/about/governing-council',
  'PrincipalsMessage': '/about/principals-message',
  'Organogram': '/about/organogram',
  'MandatoryDisclosure': '/about/mandatory-disclosure',
  'UnderGraduatePrograms': '/academics/undergraduate-programs',
  'PostGraduatePrograms': '/academics/postgraduate-programs',
  'BBA': '/programs/bba',
  'BCA': '/programs/bca',
  'BCom': '/programs/bcom',
  'MBA': '/programs/mba',
  'MCA': '/programs/mca',
  'DepartmentOfLanguages': '/academics/department-of-languages',
  'DepartmentofLanguage': '/academics/department-of-languages',
  'UnderGraduateAdmission': '/admissions/undergraduate',
  'PostGraduateAdmission': '/admissions/postgraduate',
  'FeePayment': '/fee-payment',
  'contact': '/contact',
  'Facilities': '/facilities',
  'facilities': '/facilities',
  'StatutoryCells': '/statutory-cells',
  'CommunityServices': '/community-services',
  'AboutTAP': '/tap/about',
  'TrainingandPlacementCell(TAP)': '/tap/about',
  'Examination': '/examination',
  'StudentAchievers': '/student-achievers',
  'Gallery': '/gallery',
  'UGCDisclosure': '/about/ugc-disclosure',
  'Alumni': '/student-corner/alumni',
  'IQAC': '/about/iqac',
  'Research': '/academics/research'
};

const URL_TO_PAGE_MAP: Record<string, string> = {
  'about/trust': 'AboutTrust',
  'about/pbs': 'AboutPBS',
  'about/board-of-trustees': 'BoardofTustees&Message',
  'about/governing-council': 'GoverningCouncilMembers',
  'about/principals-message': 'PrincipalsMessage',
  'about/organogram': 'Organogram',
  'about/mandatory-disclosure': 'MandatoryDisclosure',
  'academics/undergraduate-programs': 'UnderGraduatePrograms',
  'academics/postgraduate-programs': 'PostGraduatePrograms',
  'academics/department-of-languages': 'DepartmentOfLanguages',
  'programs/bba': 'BBA',
  'programs/bca': 'BCA',
  'programs/bcom': 'BCom',
  'programs/mba': 'MBA',
  'programs/mca': 'MCA',
  'admissions/undergraduate': 'UnderGraduateAdmission',
  'admissions/postgraduate': 'PostGraduateAdmission',
  'fee-payment': 'FeePayment',
  'contact': 'contact',
  'facilities': 'Facilities',
  'statutory-cells': 'StatutoryCells',
  'community-services': 'CommunityServices',
  'tap/about': 'AboutTAP',
  'examination': 'Examination',
  'student-achievers': 'StudentAchievers',
  'gallery': 'Gallery',
  'about/ugc-disclosure': 'UGCDisclosure',
  'student-corner/alumni': 'Alumni',
  'about/iqac': 'IQAC',
  'academics/research': 'Research'
};

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode; requiredRoles?: string[] }> = ({ 
  children, 
  requiredRoles 
}) => {
  const { isAuthenticated, user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F0F0EA] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#0D225C]"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  if (requiredRoles && !requiredRoles.includes(user?.role || '')) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <>{children}</>;
};

// Admin Routes Component
const AdminRoutes: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="login" element={<LoginPage onLoginSuccess={() => navigate('/admin/dashboard')} />} />
      <Route 
        path="dashboard" 
        element={
          <ProtectedRoute>
            <AdminDashboardPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="users" 
        element={
          <ProtectedRoute requiredRoles={['admin']}>
            <DashboardLayout activeModule="users">
              <UserManagement />
            </DashboardLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="news" 
        element={
          <ProtectedRoute requiredRoles={['admin']}>
            <DashboardLayout activeModule="news">
              <NewsManagement />
            </DashboardLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="faculty" 
        element={
          <ProtectedRoute requiredRoles={['admin']}>
            <DashboardLayout activeModule="faculty">
              <FacultyManagement />
            </DashboardLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="gallery" 
        element={
          <ProtectedRoute requiredRoles={['admin', 'staff']}>
            <DashboardLayout activeModule="gallery">
              <GalleryManagement />
            </DashboardLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="achievers" 
        element={
          <ProtectedRoute requiredRoles={['admin', 'staff']}>
            <DashboardLayout activeModule="achievers">
              <AchieversManagement />
            </DashboardLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="admissions" 
        element={
          <ProtectedRoute requiredRoles={['admin', 'admission_staff']}>
            <DashboardLayout activeModule="admissions">
              <AdmissionsManagement />
            </DashboardLayout>
          </ProtectedRoute>
        } 
      />
      <Route index element={<Navigate to="dashboard" replace />} />
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
};

// Main Website Component with URL-based routing
const MainWebsite: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Sync URL with page state
  useEffect(() => {
    const rawPath = location.pathname;
    const path = rawPath.startsWith('/') ? rawPath.substring(1) : rawPath;
    
    // Check if it's admin path
    if (path.toLowerCase().startsWith('admin')) {
      return;
    }

    // Handle root path (home page)
    if (!path || path === '') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const matchedPage = URL_TO_PAGE_MAP[path];
    if (matchedPage) {
      setCurrentPage(matchedPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  const handleNavigate = (page: string) => {
    if (page.includes('#')) {
      const [basePage, hash] = page.split('#');
      setCurrentPage(basePage);
      const urlPath = PAGE_URL_MAP[basePage] || '/';
      navigate(`${urlPath}#${hash}`);
      
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return;
    }
    
    // Handle admin login
    if (page === 'admin-login' || page === 'admin') {
      navigate('/admin/login');
      return;
    }
    
    // Handle home page
    if (page === 'home') {
      navigate('/');
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const urlPath = PAGE_URL_MAP[page];
    if (urlPath) {
      navigate(urlPath);
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F0F0EA] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#0D225C]"></div>
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'AboutTrust':
        return <AboutTrustPage />;
      case 'AboutPBS':
        return <AboutPBSPage />;
      case 'BoardofTustees&Message':
        return <BoardOfTrusteesPage />;
      case 'GoverningCouncilMembers':
        return <GoverningCouncilPage />;
      case 'PrincipalsMessage':
        return <PrincipalMessagePage />;
      case 'Organogram':
        return <OrganogramPage />;
      case 'UnderGraduatePrograms':
      case 'PostGraduatePrograms':
        return <HomePage onNavigate={handleNavigate} />;
      case 'BBA':
        return <BBAPage />;
      case 'BCom':
        return <BComPage />;
      case 'BCA':
        return <BCAPage />;
      case 'MBA':
        return <MBAPage />;
      case 'MCA':
        return <MCAPage />;
      case 'DepartmentOfLanguages':
      case 'DepartmentofLanguage':
        return <DepartmentOfLanguagesPage onNavigate={handleNavigate} />;
      case 'UnderGraduateAdmission':
        return <UnderGraduateAdmissionPage />;
      case 'PostGraduateAdmission':
        return <PostGraduateAdmissionPage />;
      case 'FeePayment':
        return <FeePaymentPage />;
      case 'contact':
        return <ContactPage />;
      case 'Facilities':
      case 'facilities':
        return <FacilitiesPage />;
      case 'StatutoryCells':
        return <StatutoryCellsPage />;
      case 'CommunityServices':
        return <CommunityServicesPage />;
      case 'TrainingandPlacementCell(TAP)':
      case 'AboutTAP':
      case 'InviteToRecruiter':
      case 'FacilitiesForCampusHiring':
      case 'PlacementRegulations':
      case 'PlacementReport':
        return <TAPCellPage />;
      case 'Examination':
        return <ExaminationPage />;
      case 'StudentAchievers':
        return <StudentAchieversPage />;
      case 'Gallery':
        return <GalleryPage />;
      case 'MandatoryDisclosure':
        return <MandatoryDisclosurePage />;
      case 'UGCDisclosure':
        return <UGCDisclosurePage />;
      case 'Alumni':
        return <AlumniPage />;
      case 'IQAC':
        return <IQACPage />;
      case 'Research':
        return <ResearchPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F0EA]">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

// Error Boundary Component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F0F0EA] flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-600 mb-4">{this.state.error?.message}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-[#0D225C] text-white rounded hover:bg-opacity-90"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main App Component
function App() {
  const isBSchool = typeof window !== 'undefined' && window.location.pathname.toLowerCase().startsWith('/bschool');
  const configuredBase = (import.meta.env.BASE_URL || '/BSchool').replace(/\/$/, '');
  const base = isBSchool ? (configuredBase || '/BSchool') : '';
  
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router basename={base}>
          <Routes>
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/Admin/*" element={<AdminRoutes />} />
            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/Admin" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/*" element={<MainWebsite />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
