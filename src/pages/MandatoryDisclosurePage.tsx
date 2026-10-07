import React, { useState } from 'react';
import { FileText, Download, ExternalLink, BookOpen, ShieldCheck, CheckCircle2, Eye } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface PDFDocument {
  id: string;
  title: string;
  description: string;
  file: string;
}

const MandatoryDisclosurePage: React.FC = () => {
  const [pdfErrors, setPdfErrors] = useState<Record<string, boolean>>({});

  const pdfDocuments: PDFDocument[] = [
    {
      id: 'mandatory',
      title: 'Mandatory Disclosure',
      description: 'Complete mandatory disclosure document as per AICTE and UGC statutory regulations',
      file: 'files/Mandatory_Disclosure.pdf'
    },
    {
      id: 'essential',
      title: 'Essential Documents',
      description: 'Essential institutional documents, statutory approvals, and compliance certificates',
      file: 'files/Essential_documents.pdf'
    }
  ];

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
            <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#CCB156]/20 border border-[#CCB156]/40 px-4 py-1.5 rounded-full text-xs font-bold text-[#CCB156]">
                <ShieldCheck className="h-4 w-4" />
                <span>Statutory Compliance & AICTE Transparency</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Mandatory Disclosure & Essential Documents
              </h1>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
                As per regulatory standards of AICTE, Government of Karnataka, and University of Mysore, all essential institutional documents and disclosures are published below for public scrutiny.
              </p>
            </div>
          </div>

          {/* PDF Documents */}
          <div className="space-y-10">
            {pdfDocuments.map((pdf) => {
              const fullPdfUrl = getAssetUrl(pdf.file);

              return (
                <div key={pdf.id} className="bg-white rounded-3xl shadow-lg border border-gray-200/80 overflow-hidden">
                  {/* Document Card Header */}
                  <div className="bg-gradient-to-r from-[#0D225C] to-[#16368C] px-6 sm:px-8 py-5 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center space-x-3.5">
                      <div className="h-12 w-12 rounded-2xl bg-[#CCB156]/20 border border-[#CCB156]/40 flex items-center justify-center text-[#CCB156] flex-shrink-0">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold tracking-tight">{pdf.title}</h2>
                        <p className="text-xs sm:text-sm text-gray-300 mt-0.5">{pdf.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5">
                      <button
                        onClick={() => handleOpenInNewTab(pdf.file)}
                        className="flex items-center space-x-1.5 px-4 py-2 bg-[#CCB156] hover:bg-[#bfa54d] text-[#0D225C] rounded-xl transition-all text-xs sm:text-sm font-bold shadow-md hover:shadow-lg cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Fullscreen</span>
                      </button>
                      <button
                        onClick={() => handleDownload(pdf.file, `${pdf.title.replace(/\s+/g, '_')}.pdf`)}
                        className="flex items-center space-x-1.5 px-4 py-2 bg-white/15 hover:bg-white/25 text-white border border-white/20 rounded-xl transition-all text-xs sm:text-sm font-bold cursor-pointer"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                      </button>
                    </div>
                  </div>

                  {/* Document Preview / Embed */}
                  <div className="p-4 sm:p-6 bg-gray-50/50">
                    {!pdfErrors[pdf.id] ? (
                      <div className="w-full h-[650px] sm:h-[750px] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-inner relative">
                        <object
                          data={`${fullPdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                          type="application/pdf"
                          className="w-full h-full"
                        >
                          <iframe
                            src={`${fullPdfUrl}#toolbar=1`}
                            className="w-full h-full border-0"
                            title={pdf.title}
                            onError={() => setPdfErrors(prev => ({ ...prev, [pdf.id]: true }))}
                          />
                        </object>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                        <FileText className="w-16 h-16 text-gray-400 mb-4" />
                        <h3 className="text-lg font-bold text-[#0D225C] mb-2">Unable to display PDF preview inline</h3>
                        <p className="text-gray-500 text-xs sm:text-sm mb-6 max-w-md">
                          Click below to open or download the complete official document directly.
                        </p>
                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleOpenInNewTab(pdf.file)}
                            className="flex items-center px-5 py-2.5 bg-[#0D225C] text-white rounded-xl font-bold text-xs sm:text-sm hover:bg-[#143282]"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Open in New Tab
                          </button>
                          <button
                            onClick={() => handleDownload(pdf.file, `${pdf.title.replace(/\s+/g, '_')}.pdf`)}
                            className="flex items-center px-5 py-2.5 bg-[#CCB156] text-[#0D225C] rounded-xl font-bold text-xs sm:text-sm hover:bg-[#bfa54d]"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MandatoryDisclosurePage;
