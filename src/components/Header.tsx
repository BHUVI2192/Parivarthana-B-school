import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Search } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';
import { SearchModal } from './SearchModal';

interface SubDropdownItem {
  id: string;
  label: string;
}

interface DropdownItem {
  id: string;
  label: string;
  hasSubDropdown?: boolean;
  subDropdownItems?: SubDropdownItem[];
}

interface NavigationItem {
  id: string;
  label: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const subHideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems: NavigationItem[] = [
    { id: 'home', label: 'Home' },
    {
      id: 'about',
      label: 'About Us',
      hasDropdown: true,
      dropdownItems: [
        { id: 'AboutTrust', label: 'About Trust' },
        { id: 'AboutPBS', label: 'About PBS' },
        { id: 'UGCDisclosure', label: 'UGC Public Self-Disclosure' },
        { id: 'IQAC', label: 'IQAC' },
        { id: 'BoardofTustees&Message', label: 'Board of Trustees & Message' },
        { id: 'GoverningCouncilMembers', label: 'Governing Council Members' },
        { id: 'PrincipalsMessage', label: "Principal's Message" },
        { id: 'Organogram', label: 'Organogram' },
        { id: 'MandatoryDisclosure', label: 'Essential Documents' },
      ],
    },
    {
      id: 'academics',
      label: 'Academics',
      hasDropdown: true,
      dropdownItems: [
        {
          id: 'UnderGraduatePrograms',
          label: 'UG Programs',
          hasSubDropdown: true,
          subDropdownItems: [
            { id: 'BCom', label: 'BCom'},
            { id: 'BBA', label: 'BBA' },
            { id: 'BCA', label: 'BCA' },
          ],
        },
        {
          id: 'PostGraduatePrograms',
          label: 'PG Programs',
          hasSubDropdown: true,
          subDropdownItems: [
            { id: 'MBA', label: 'MBA' },
            { id: 'MCA', label: 'MCA' },
          ],
        },
        {
          id: 'DepartmentOfLanguages',
          label: 'Department of Languages',
        },
        {
          id: 'Research',
          label: 'Research & Publications',
        },
      ],
    },
    {
      id: 'facilities',
      label: 'Facilities',
      hasDropdown: true,
      dropdownItems: [
        { id: 'facilities#library', label: 'Library & Information Centre' },
        { id: 'facilities#sports', label: 'Sports' },
        { id: 'facilities#transportation', label: 'Transportation' },
        { id: 'facilities#hostel', label: 'Hostel' },
      ],
    },
    {
      id: 'admissions',
      label: 'Admissions',
      hasDropdown: true,
      dropdownItems: [
        { id: 'UnderGraduateAdmission', label: 'Under-Graduate Programs' },
        { id: 'PostGraduateAdmission', label: 'Post-Graduate Programs' },
        { id: 'FeePayment', label: 'Fee Payment' },
      ],
    },
    {
      id: 'TrainingandPlacementCell(TAP)',
      label: 'Placement Cell',
      hasDropdown: true,
      dropdownItems: [
        { id: 'TrainingandPlacementCell(TAP)#about-tap', label: 'About TAP' },
        { id: 'TrainingandPlacementCell(TAP)#invite-to-recruiter', label: 'Invite to Recruiter' },
        { id: 'TrainingandPlacementCell(TAP)#facilities-for-campus-hiring', label: 'Facilities for Campus Hiring' },
        { id: 'TrainingandPlacementCell(TAP)#placement-regulations', label: 'Placement Regulations' },
        { id: 'TrainingandPlacementCell(TAP)#placement-report', label: 'Placement Report' },
        { id: 'TrainingandPlacementCell(TAP)#contact-us', label: 'Contact Us' },
      ],
    },
    {
      id: 'StudentCorner',
      label: 'Student Corner',
      hasDropdown: true,
      dropdownItems: [
        { id: 'Alumni', label: 'Alumni Association' },
        { id: 'StatutoryCells', label: 'Statutory Cells' },
        { id: 'CommunityServices', label: 'Community Services' },
        { id: 'Examination', label: 'Examination' },
        { id: 'StudentAchievers', label: 'Student Achievers' },
        { id: 'Gallery', label: 'Gallery' },
      ],
    },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // --- Improved Hover Logic ---
  const showDropdown = (id: string) => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setActiveDropdown(id);
  };
  const hideDropdown = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => setActiveDropdown(null), 350);
  };

  const showSub = (id: string) => {
    if (subHideTimeout.current) clearTimeout(subHideTimeout.current);
    setActiveSubDropdown(id);
  };
  const hideSub = () => {
    if (subHideTimeout.current) clearTimeout(subHideTimeout.current);
    subHideTimeout.current = setTimeout(() => setActiveSubDropdown(null), 300);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            <img src={getAssetUrl('parivarthana-logo.png')} alt="Parivarthana Business School Logo" className="h-10 w-auto" />
            <div>
              <h1 className="text-lg font-bold text-[#0D225C] leading-tight">
                Parivarthana Business School
              </h1>
              <p className="text-xs text-[#747488] leading-tight">
                Experience the Empowerment
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navigationItems.map((item: NavigationItem) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.hasDropdown && showDropdown(item.id)}
                onMouseLeave={() => item.hasDropdown && hideDropdown()}
              >
                <button
                  className={`flex items-center space-x-1 px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-[#0D225C] bg-[#CCB156]/10'
                      : 'text-[#747488] hover:text-[#0D225C] hover:bg-[#CCB156]/5'
                  }`}
                  onClick={() => {
                    if (item.hasDropdown) {
                      // Toggle dropdown visibility
                      if (activeDropdown === item.id) {
                        setActiveDropdown(null);
                      } else {
                        setActiveDropdown(item.id);
                      }
                    } else {
                      handleNavigation(item.id);
                    }
                  }}
                  onDoubleClick={() => {
                    // Allow double-click to navigate to main page even with dropdown
                    if (item.hasDropdown) {
                      handleNavigation(item.id);
                    }
                  }}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
                </button>

                {/* Dropdown */}
                {item.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-xl border border-gray-100 py-2 z-[70] transition-all duration-200 ${
                      activeDropdown === item.id
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                    }`}
                    onMouseEnter={() => showDropdown(item.id)}
                    onMouseLeave={() => hideDropdown()}
                  >
                    {item.dropdownItems?.map((dropdownItem: DropdownItem, index: number) => (
                      <div
                        key={index}
                        className="relative"
                        onMouseEnter={() =>
                          dropdownItem.hasSubDropdown && showSub(dropdownItem.id)
                        }
                        onMouseLeave={() =>
                          dropdownItem.hasSubDropdown && hideSub()
                        }
                      >
                        <button
                          className="block w-full text-left px-4 py-3 text-sm text-[#747488] hover:text-[#0D225C] hover:bg-[#CCB156]/10 flex items-center justify-between"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Only navigate if the item doesn't have a sub-dropdown
                            if (!dropdownItem.hasSubDropdown) {
                              handleNavigation(dropdownItem.id);
                              setActiveDropdown(null);
                            }
                          }}
                        >
                          {dropdownItem.label}
                          {dropdownItem.hasSubDropdown && <ChevronRight className="h-3 w-3" />}
                        </button>

                        {/* Sub Dropdown */}
                        {dropdownItem.hasSubDropdown && (
                          <div
                            className={`absolute left-full top-0 ml-2 w-48 bg-white rounded-md shadow-xl border border-gray-100 py-2 z-[80] transition-all duration-200 ${
                              activeSubDropdown === dropdownItem.id
                                ? 'opacity-100 visible translate-x-0'
                                : 'opacity-0 invisible -translate-x-1 pointer-events-none'
                            }`}
                            onMouseEnter={() => showSub(dropdownItem.id)}
                            onMouseLeave={() => hideSub()}
                          >
                            {dropdownItem.subDropdownItems?.map((sub: SubDropdownItem, i: number) => (
                              <button
                                key={i}
                                className="block w-full text-left px-4 py-3 text-sm text-[#747488] hover:text-[#0D225C] hover:bg-[#CCB156]/10"
                                onClick={() => handleNavigation(sub.id)}
                              >
                                {sub.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions (Search + Mobile Menu) */}
          <div className="flex items-center space-x-2">
            <button
              className="p-2 rounded-md text-[#747488] hover:text-[#0D225C] hover:bg-[#CCB156]/5"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              className="lg:hidden p-2 rounded-md text-[#747488] hover:text-[#0D225C] hover:bg-[#CCB156]/5 z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {navigationItems.map((item: NavigationItem) => (
              <div key={item.id}>
                <button
                  className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-[#0D225C] bg-[#CCB156]/10'
                      : 'text-[#747488] hover:text-[#0D225C] hover:bg-[#CCB156]/5'
                  }`}
                  onClick={() => {
                    if (item.hasDropdown) {
                      setActiveDropdown(activeDropdown === item.id ? null : item.id);
                    } else {
                      handleNavigation(item.id);
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </div>
                </button>

                {/* Mobile Dropdown Items */}
                {item.hasDropdown && activeDropdown === item.id && (
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-200 pl-4">
                    {item.dropdownItems?.map((dropdownItem: DropdownItem, index: number) => (
                      <div key={index}>
                        <button
                          className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors ${
                            currentPage === dropdownItem.id
                              ? 'text-[#0D225C] bg-[#CCB156]/10'
                              : 'text-[#747488] hover:text-[#0D225C] hover:bg-[#CCB156]/5'
                          }`}
                          onClick={() => {
                            if (dropdownItem.hasSubDropdown) {
                              setActiveSubDropdown(
                                activeSubDropdown === dropdownItem.id ? null : dropdownItem.id
                              );
                            } else {
                              handleNavigation(dropdownItem.id);
                            }
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <span>{dropdownItem.label}</span>
                            {dropdownItem.hasSubDropdown && (
                              <ChevronRight
                                className={`h-4 w-4 transition-transform ${
                                  activeSubDropdown === dropdownItem.id ? 'rotate-90' : ''
                                }`}
                              />
                            )}
                          </div>
                        </button>

                        {/* Mobile Sub Dropdown */}
                        {dropdownItem.hasSubDropdown && activeSubDropdown === dropdownItem.id && (
                          <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                            {dropdownItem.subDropdownItems?.map((sub: SubDropdownItem, i: number) => (
                              <button
                                key={i}
                                className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors ${
                                  currentPage === sub.id
                                    ? 'text-[#0D225C] bg-[#CCB156]/10'
                                    : 'text-[#747488] hover:text-[#0D225C] hover:bg-[#CCB156]/5'
                                }`}
                                onClick={() => handleNavigation(sub.id)}
                              >
                                {sub.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onNavigate={onNavigate} 
      />
    </header>
  );
};

export default Header;
