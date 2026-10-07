import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  ExternalLink, 
  RefreshCw, 
  Settings, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Maximize2, 
  Copy, 
  Check, 
  Eye,
  Layers,
  ArrowUpRight
} from 'lucide-react';

const TARGET_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1ICgo6DngR2TObfPSkLJdxfAaxsRPT_VUKbKDph05lPU/edit?gid=0#gid=0';
const TARGET_EMBED_URL = 'https://docs.google.com/spreadsheets/d/1ICgo6DngR2TObfPSkLJdxfAaxsRPT_VUKbKDph05lPU/htmlembed?widget=true&headers=false';

const AdmissionsManagement: React.FC = () => {
  const [sheetUrl, setSheetUrl] = useState(() => {
    return localStorage.getItem('pbs_admissions_sheet_url') || TARGET_SHEET_URL;
  });

  const [embedMode, setEmbedMode] = useState<'htmlembed' | 'pubhtml' | 'minimal'>('htmlembed');

  const getEmbedUrl = () => {
    if (embedMode === 'pubhtml') {
      return 'https://docs.google.com/spreadsheets/d/1ICgo6DngR2TObfPSkLJdxfAaxsRPT_VUKbKDph05lPU/pubhtml?widget=true&headers=false';
    }
    if (embedMode === 'minimal') {
      return 'https://docs.google.com/spreadsheets/d/1ICgo6DngR2TObfPSkLJdxfAaxsRPT_VUKbKDph05lPU/edit?embedded=true&rm=minimal';
    }
    return TARGET_EMBED_URL;
  };

  const [copiedLink, setCopiedLink] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const copySheetUrl = () => {
    navigator.clipboard.writeText(sheetUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className={`space-y-6 animate-fade-in font-sans ${isFullscreen ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto' : ''}`}>
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-800 border border-emerald-200/60 px-3.5 py-1 rounded-full text-xs font-bold mb-2">
              <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-600" />
              <span>Official Google Sheet Admission Sync</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D225C] tracking-tight">
              Admissions & Enquiry Database
            </h2>
            <p className="text-gray-500 text-sm mt-1 max-w-xl">
              All website admission inquiries are recorded directly in this official Google Sheet in real-time.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setRefreshKey(prev => prev + 1)}
              className="p-3 bg-gray-50 hover:bg-gray-100 text-[#0D225C] rounded-2xl border border-gray-200 transition-all hover:rotate-180 duration-500"
              title="Refresh Embedded Sheet"
            >
              <RefreshCw className="h-4 w-4" />
            </button>

            <a
              href={sheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-teal-700 hover:to-emerald-600 text-white px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Open in Google Sheets</span>
            </a>
          </div>
        </div>

        {/* Quick Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
          <div className="bg-gray-50/70 p-4 rounded-2xl border border-gray-100 flex items-center space-x-3.5">
            <div className="h-10 w-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500">Connected Sheet</p>
              <p className="text-sm font-extrabold text-[#0D225C] truncate max-w-[200px]">PBS Admission Enquiries</p>
            </div>
          </div>

          <div className="bg-gray-50/70 p-4 rounded-2xl border border-gray-100 flex items-center space-x-3.5">
            <div className="h-10 w-10 rounded-xl bg-[#0D225C] text-white flex items-center justify-center font-bold">
              <Sparkles className="h-5 w-5 text-[#CCB156]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500">Live Recording</p>
              <p className="text-sm font-extrabold text-[#0D225C]">Instant Webhook Active</p>
            </div>
          </div>

          <div className="bg-gray-50/70 p-4 rounded-2xl border border-gray-100 flex items-center space-x-3.5">
            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500">Data Security</p>
              <p className="text-sm font-extrabold text-[#0D225C]">Google Cloud Encrypted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Google Sheet Container */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
        {/* Frame Top Toolbar */}
        <div className="p-4 bg-gray-50 border-b border-gray-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="font-extrabold text-[#0D225C]">Live Admissions Sheet View</span>
            </div>

            {/* View Mode Switcher */}
            <div className="hidden sm:flex items-center bg-gray-200/70 rounded-xl p-0.5">
              <button
                onClick={() => setEmbedMode('htmlembed')}
                className={`px-3 py-1 rounded-lg font-bold transition-colors ${embedMode === 'htmlembed' ? 'bg-white text-[#0D225C] shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
              >
                HTML Embed
              </button>
              <button
                onClick={() => setEmbedMode('minimal')}
                className={`px-3 py-1 rounded-lg font-bold transition-colors ${embedMode === 'minimal' ? 'bg-white text-[#0D225C] shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Interactive
              </button>
              <button
                onClick={() => setEmbedMode('pubhtml')}
                className={`px-3 py-1 rounded-lg font-bold transition-colors ${embedMode === 'pubhtml' ? 'bg-white text-[#0D225C] shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Public View
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={copySheetUrl}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl text-gray-700 font-semibold transition-colors"
            >
              {copiedLink ? <Check className="h-3.5 w-3.5 text-green-600" /> : <Copy className="h-3.5 w-3.5 text-gray-500" />}
              <span>{copiedLink ? 'Copied!' : 'Copy Sheet Link'}</span>
            </button>

            <a
              href={sheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-3 py-1.5 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl text-[#0D225C] font-bold transition-colors"
              title="Open in new window"
            >
              <span>Full Tab</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-emerald-600" />
            </a>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl text-gray-700 font-semibold transition-colors"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen View'}
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Embedded Iframe */}
        <div className="w-full h-[750px] bg-gray-100 relative">
          <iframe
            key={`${embedMode}-${refreshKey}`}
            src={getEmbedUrl()}
            title="PBS Admission Enquiries Google Sheet"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default AdmissionsManagement;
