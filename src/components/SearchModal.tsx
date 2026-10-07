import React, { useState, useEffect, useRef } from 'react';
import { Search, X, FileText, ChevronRight, File } from 'lucide-react';
import { ugcDocuments } from '../data/ugcDocuments';
import { useNavigate } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Basic client-side index for static pages
  const staticPages = [
    { title: 'Home', path: 'home', category: 'Page' },
    { title: 'About PBS', path: 'AboutPBS', category: 'Page' },
    { title: 'UGC Public Self-Disclosure', path: 'UGCDisclosure', category: 'Page' },
    { title: 'Statutory Cells', path: 'StatutoryCells', category: 'Page' },
    { title: 'Alumni Association', path: 'Alumni', category: 'Page' },
    { title: 'IQAC', path: 'IQAC', category: 'Page' },
    { title: 'Research & Publications', path: 'Research', category: 'Page' },
    { title: 'Facilities', path: 'Facilities', category: 'Page' },
    { title: 'Admissions', path: 'UnderGraduateAdmission', category: 'Page' },
    { title: 'Contact Us', path: 'contact', category: 'Page' },
  ];

  const filteredDocs = ugcDocuments.filter(doc => 
    doc.title.toLowerCase().includes(query.toLowerCase()) || 
    doc.category.toLowerCase().includes(query.toLowerCase()) ||
    doc.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPages = staticPages.filter(page => 
    page.title.toLowerCase().includes(query.toLowerCase())
  );

  const handlePageClick = (path: string) => {
    onNavigate(path);
    onClose();
  };

  const handleDocClick = () => {
    onNavigate('UGCDisclosure');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4 sm:px-0"
      onClick={onClose}
      role="dialog"
      aria-label="Search site"
      aria-modal="true"
    >
      <div 
        className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-100 flex items-center">
          <Search className="w-6 h-6 text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            className="flex-grow text-lg sm:text-xl font-medium outline-none text-[#0D225C] placeholder-gray-300"
            placeholder="Search policies, syllabus, documents..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Escape') onClose();
            }}
          />
          <button 
            onClick={onClose}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto flex-grow p-4 bg-gray-50/50">
          {query.trim() === '' ? (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-200 mx-auto mb-4" />
              <p className="text-gray-400 font-medium">Type to search for UGC disclosures and pages...</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPages.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">Pages</h3>
                  <div className="space-y-2">
                    {filteredPages.map(page => (
                      <button
                        key={page.path}
                        onClick={() => handlePageClick(page.path)}
                        className="w-full flex items-center p-3 rounded-xl hover:bg-[#0D225C]/5 transition-colors group text-left"
                      >
                        <File className="w-5 h-5 text-[#CCB156] mr-3" />
                        <span className="flex-grow font-bold text-[#0D225C] group-hover:text-[#143282]">{page.title}</span>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#0D225C]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredDocs.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">UGC Documents</h3>
                  <div className="space-y-2">
                    {filteredDocs.map(doc => (
                      <button
                        key={doc.id}
                        onClick={handleDocClick}
                        className="w-full flex items-center p-3 rounded-xl hover:bg-[#0D225C]/5 transition-colors group text-left"
                      >
                        <FileText className="w-5 h-5 text-[#0D225C] opacity-70 mr-3" />
                        <div className="flex-grow">
                          <h4 className="font-bold text-[#0D225C] leading-tight group-hover:text-[#143282]">{doc.title}</h4>
                          <p className="text-xs text-gray-500 mt-1">{doc.category} • {doc.year}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#0D225C]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredPages.length === 0 && filteredDocs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 font-medium">No results found for "{query}"</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
