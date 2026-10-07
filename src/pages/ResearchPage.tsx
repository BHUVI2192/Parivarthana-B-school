import React from 'react';
import { Lightbulb, BookOpen } from 'lucide-react';

const ResearchPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0EA] font-sans">
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-[#0D225C] via-[#143282] to-[#0D225C] rounded-3xl shadow-xl p-8 sm:p-10 mb-10 text-white relative overflow-hidden border border-[#CCB156]/30">
            <div className="absolute top-0 right-0 w-96 h-full bg-[#CCB156]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#CCB156]/20 border border-[#CCB156]/40 px-4 py-1.5 rounded-full text-xs font-bold text-[#CCB156]">
                <Lightbulb className="h-4 w-4" />
                <span>Academics & Innovation</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Research & Publications
              </h1>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
                Information pending institutional verification.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-16 text-center shadow-lg border border-gray-100">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#0D225C] mb-4">Content Being Updated</h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Our research initiatives and faculty publications will be published here upon verification by the administration.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResearchPage;
