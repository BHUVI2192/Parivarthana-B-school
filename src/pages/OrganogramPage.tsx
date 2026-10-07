import React from 'react';
import { Users, Crown, Award, BookOpen, Settings, Shield, TrendingUp } from 'lucide-react';

const OrganogramPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0F0EA]">
      {/* Hero Section */}
      <section className="relative bg-[#0D225C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Organogram</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Organizational structure and hierarchy of Parivarthana Business School
            </p>
          </div>
        </div>
      </section>

      {/* Visual Organogram */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Institutional Hierarchy</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Visual representation of our organizational structure and reporting relationships
            </p>
          </div>

          {/* Organogram Structure */}
          <div className="flex flex-col items-center space-y-8">
            
            {/* Board of Trustees */}
            <div className="flex flex-col items-center">
              <div className="bg-[#0D225C] text-white px-8 py-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Crown className="h-6 w-6" />
                  <span className="text-lg font-bold">Board of Trustees</span>
                </div>
              </div>
              {/* Connecting Line */}
              <div className="w-1 h-8 bg-[#CCB156]"></div>
            </div>

            {/* Governing Council */}
            <div className="flex flex-col items-center">
              <div className="bg-[#CCB156] text-[#0D225C] px-8 py-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6" />
                  <span className="text-lg font-bold">Governing Council</span>
                </div>
              </div>
              {/* Connecting Line */}
              <div className="w-1 h-8 bg-[#CCB156]"></div>
            </div>

            {/* Managing Director */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6" />
                  <span className="text-lg font-bold">Managing Director</span>
                </div>
              </div>
              {/* Connecting Lines to Branches */}
              <div className="w-1 h-8 bg-[#CCB156]"></div>
              <div className="w-80 h-1 bg-[#CCB156]"></div>
              <div className="flex justify-between w-80">
                <div className="w-1 h-8 bg-[#CCB156]"></div>
                <div className="w-1 h-8 bg-[#CCB156]"></div>
              </div>
            </div>

            {/* Two Main Branches */}
            <div className="grid lg:grid-cols-2 gap-16 w-full max-w-6xl">
              
              {/* Principal Branch */}
              <div className="flex flex-col items-center space-y-6">
                <div className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span className="font-bold">Principal</span>
                  </div>
                </div>
                
                {/* Connecting Line */}
                <div className="w-1 h-6 bg-[#CCB156]"></div>
                
                {/* HODs */}
                <div className="bg-[#F0F0EA] px-6 py-3 rounded-lg shadow-md">
                  <div className="text-center">
                    <div className="font-semibold text-[#0D225C] mb-2">Heads of Departments</div>
                    <div className="text-sm text-[#747488] space-y-1">
                      <div>HOD - MBA</div>
                      <div>HOD - MCA</div>
                      <div>HOD - B.Com</div>
                      <div>HOD - BBA</div>
                      <div>HOD - BCA</div>
                    </div>
                  </div>
                </div>
                
                {/* Connecting Line */}
                <div className="w-1 h-6 bg-[#CCB156]"></div>
                
                {/* Teaching Staff */}
                <div className="bg-[#F0F0EA] px-6 py-3 rounded-lg shadow-md">
                  <div className="text-center">
                    <div className="font-semibold text-[#0D225C]">Teaching Staff</div>
                  </div>
                </div>
                
                {/* Connecting Line */}
                <div className="w-1 h-6 bg-[#CCB156]"></div>
                
                {/* Academic Services */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white px-4 py-2 rounded-lg shadow-md text-center">
                    <div className="text-sm font-medium text-[#0D225C]">Admissions</div>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow-md text-center">
                    <div className="text-sm font-medium text-[#0D225C]">Examination</div>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow-md text-center">
                    <div className="text-sm font-medium text-[#0D225C]">Library</div>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow-md text-center">
                    <div className="text-sm font-medium text-[#0D225C]">PED</div>
                  </div>
                </div>
                
                {/* Connecting Line */}
                <div className="w-1 h-6 bg-[#CCB156]"></div>
                
                {/* Non-Teaching Staff */}
                <div className="bg-[#F0F0EA] px-6 py-3 rounded-lg shadow-md">
                  <div className="text-center">
                    <div className="font-semibold text-[#0D225C]">Non-Teaching Staff</div>
                  </div>
                </div>
              </div>

              {/* Accounts Branch */}
              <div className="flex flex-col items-center space-y-6">
                <div className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Settings className="h-5 w-5" />
                    <span className="font-bold">Accounts</span>
                  </div>
                </div>
                
                {/* Connecting Line */}
                <div className="w-1 h-6 bg-[#CCB156]"></div>
                
                {/* Administrative Services */}
                <div className="space-y-4">
                  <div className="bg-white px-6 py-3 rounded-lg shadow-md text-center">
                    <div className="font-medium text-[#0D225C]">HR</div>
                    <div className="text-xs text-[#747488]">Human Resources</div>
                  </div>
                  
                  <div className="bg-white px-6 py-3 rounded-lg shadow-md text-center">
                    <div className="font-medium text-[#0D225C]">IT</div>
                    <div className="text-xs text-[#747488]">Information Technology</div>
                  </div>
                  
                  <div className="bg-white px-6 py-3 rounded-lg shadow-md text-center">
                    <div className="font-medium text-[#0D225C]">Security</div>
                  </div>
                  
                  <div className="bg-white px-6 py-3 rounded-lg shadow-md text-center">
                    <div className="font-medium text-[#0D225C]">Transport</div>
                  </div>
                  
                  <div className="bg-white px-6 py-3 rounded-lg shadow-md text-center">
                    <div className="font-medium text-[#0D225C]">Hostel</div>
                  </div>
                  
                  <div className="bg-white px-6 py-3 rounded-lg shadow-md text-center">
                    <div className="font-medium text-[#0D225C]">Placement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrganogramPage;