import React from 'react';
import { Download, ExternalLink, BookOpen } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';
import { ugcDocuments } from '../data/ugcDocuments';

interface SyllabusDownloadButtonProps {
  programId: string;
}

export const SyllabusDownloadButton: React.FC<SyllabusDownloadButtonProps> = ({ programId }) => {
  // Find the relevant syllabus document for this program
  // For instance, BBA syllabus
  const document = ugcDocuments.find(
    (doc) => doc.documentType === 'Syllabus' && doc.title.includes(programId)
  );

  if (!document) return null;

  const handleDownload = () => {
    const fullUrl = getAssetUrl(document.fileUrl);
    const link = document.createElement('a');
    link.href = fullUrl;
    link.download = `${document.title.replace(/\s+/g, '_')}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpen = () => {
    const fullUrl = getAssetUrl(document.fileUrl);
    window.open(fullUrl, '_blank');
  };

  return (
    <div className="bg-[#0D225C]/5 border border-[#0D225C]/10 rounded-2xl p-6 mt-8 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-[#0D225C]/10 flex items-center justify-center text-[#0D225C]">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#0D225C]">Official UGC Syllabus</h3>
            <p className="text-sm text-gray-500">Academic Year {document.year}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleOpen}
            className="flex-1 sm:flex-none flex items-center justify-center px-4 py-2 bg-white text-[#0D225C] border border-[#0D225C]/20 rounded-xl font-bold hover:bg-[#0D225C]/5 transition-colors text-sm"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View
          </button>
          <button
            onClick={handleDownload}
            className="flex-1 sm:flex-none flex items-center justify-center px-4 py-2 bg-[#0D225C] text-white rounded-xl font-bold hover:bg-[#143282] transition-colors shadow-sm text-sm"
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
};
