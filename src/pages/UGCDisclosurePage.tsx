import React, { useState, useMemo } from 'react';
import { FileText, Download, ExternalLink, ShieldCheck, Search, Filter, Calendar } from 'lucide-react';
import { ugcDocuments, DisclosureCategory } from '../data/ugcDocuments';
import { getAssetUrl } from '../utils/assets';

const UGCDisclosurePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<DisclosureCategory | 'All'>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');

  // Extract unique years from documents
  const availableYears = useMemo(() => {
    const years = new Set(ugcDocuments.map(doc => doc.year));
    return ['All', ...Array.from(years).sort().reverse()];
  }, []);

  const categories: (DisclosureCategory | 'All')[] = [
    'All',
    'Institutional Profile',
    'Administration',
    'Academics & Syllabus',
    'Financials & Audits',
    'Statutory Policies',
    'MoUs & Linkages',
    'Infrastructure'
  ];

  const filteredDocuments = useMemo(() => {
    return ugcDocuments.filter(doc => {
      const categoryMatch = selectedCategory === 'All' || doc.category === selectedCategory;
      const yearMatch = selectedYear === 'All' || doc.year === selectedYear;
      return categoryMatch && yearMatch;
    });
  }, [selectedCategory, selectedYear]);

  const handleDownload = (pdfPath: string, filename: string) => {
    const fullUrl = getAssetUrl(pdfPath);
    const link = document.createElement('a');
    link.href = fullUrl;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = (pdfPath: string) => {
    const fullUrl = getAssetUrl(pdfPath);
    window.open(fullUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0EA] font-sans">
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0D225C] via-[#143282] to-[#0D225C] rounded-3xl shadow-xl p-8 sm:p-10 mb-10 text-white relative overflow-hidden border border-[#CCB156]/30">
            <div className="absolute top-0 right-0 w-96 h-full bg-[#CCB156]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 text-center max-w-4xl mx-auto space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#CCB156]/20 border border-[#CCB156]/40 px-4 py-1.5 rounded-full text-xs font-bold text-[#CCB156]">
                <ShieldCheck className="h-4 w-4" />
                <span>UGC Public Self-Disclosure Guidelines 2024</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Public Self-Disclosure
              </h1>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
                Information published by the institution in compliance with UGC statutory regulations. 
                Explore our policies, infrastructure, academics, and institutional linkages below.
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 mb-8 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1 w-full">
              <label className="flex items-center text-sm font-bold text-[#0D225C] mb-2">
                <Filter className="w-4 h-4 mr-2" />
                Filter by Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      selectedCategory === cat 
                        ? 'bg-[#0D225C] text-white shadow-md' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-64">
              <label className="flex items-center text-sm font-bold text-[#0D225C] mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                Academic / Financial Year
              </label>
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-[#0D225C] focus:border-[#0D225C] block p-2.5 font-medium"
              >
                {availableYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Document List */}
          <div className="space-y-6">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((pdf) => (
                <div key={pdf.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-xl bg-[#0D225C]/5 border border-[#0D225C]/10 flex items-center justify-center text-[#0D225C] flex-shrink-0 mt-1">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-[#143282] bg-[#143282]/10 px-2 py-0.5 rounded-md">
                          {pdf.category}
                        </span>
                        <span className="text-[10px] font-bold text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-md">
                          {pdf.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{pdf.title}</h3>
                      <p className="text-sm text-gray-500">{pdf.description}</p>
                      <p className="text-xs text-gray-400 mt-2">Document Type: {pdf.documentType} • Published: {new Date(pdf.publishDate).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => handleOpenInNewTab(pdf.fileUrl)}
                      className="flex-1 sm:flex-none flex justify-center items-center px-4 py-2 bg-white text-[#0D225C] border border-[#0D225C]/20 rounded-xl font-bold text-sm hover:bg-[#0D225C]/5 transition-colors"
                      aria-label={`View ${pdf.title} in new tab`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </button>
                    <button
                      onClick={() => handleDownload(pdf.fileUrl, `${pdf.title.replace(/\s+/g, '_')}.pdf`)}
                      className="flex-1 sm:flex-none flex justify-center items-center px-4 py-2 bg-[#0D225C] text-white rounded-xl font-bold text-sm hover:bg-[#143282] transition-colors shadow-sm"
                      aria-label={`Download ${pdf.title} PDF`}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-3xl p-16 text-center border border-gray-200 border-dashed">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-700 mb-2">No documents found</h3>
                <p className="text-gray-500">Try adjusting your category or year filters.</p>
                <button 
                  onClick={() => { setSelectedCategory('All'); setSelectedYear('All'); }}
                  className="mt-6 px-6 py-2 bg-[#0D225C] text-white rounded-full font-bold text-sm hover:bg-[#143282]"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UGCDisclosurePage;
