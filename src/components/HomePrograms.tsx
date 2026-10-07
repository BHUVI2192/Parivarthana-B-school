import React from "react";
import {
  GraduationCap,
  BookOpen,
  Code,
  TrendingUp,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";

interface HomeProgramsProps {
  onNavigate: (page: string) => void;
}

const HomePrograms: React.FC<HomeProgramsProps> = ({ onNavigate }) => {
  const ugPrograms = [
    {
      title: "Business Administration (BBA)",
      code: "BBA",
      degree: "Undergraduate • 3 Years",
      icon: TrendingUp,
      description:
        "Affiliated to University of Mysore, our BBA program prepares students for strategic management, corporate leadership, marketing dynamics, and entrepreneurial ventures.",
      color: "from-[#0D225C] to-[#173a9e]",
      accentColor: "text-[#0D225C]",
      features: [
        "Strategic Planning & Leadership",
        "Business Analytics & Finance",
        "Digital Marketing Dynamics",
        "Startup & Entrepreneurship Lab",
      ],
      page: "BBA",
    }, 
    {
      title: "Commerce (B.Com)",
      code: "B.Com",
      degree: "Undergraduate • 3 Years",
      icon: BookOpen,
      description:
        "Comprehensive commerce curriculum offering in-depth mastery of financial accounting, corporate taxation, banking systems, auditing, and corporate laws.",
      color: "from-[#917930] to-[#CCB156]",
      accentColor: "text-[#917930]",
      features: [
        "Financial & Corporate Accounting",
        "Taxation & Auditing Standards",
        "Banking & Insurance Systems",
        "Managerial Economics",
      ],
      page: "BCom",
    },
    {
      title: "Computer Applications (BCA)",
      code: "BCA",
      degree: "Undergraduate • 3 Years",
      icon: Code,
      description:
        "Industry-aligned IT education equipping students with software development, modern web technologies, database architecture, and algorithms.",
      color: "from-emerald-700 to-teal-600",
      accentColor: "text-emerald-700",
      features: [
        "Full-Stack Web Development",
        "Database Architecture & SQL",
        "Object-Oriented Programming",
        "Data Structures & Cloud Basics",
      ],
      page: "BCA",
    },
  ];

  const pgPrograms = [
    {
      title: "Master of Business Administration (MBA)",
      code: "MBA",
      degree: "Postgraduate • 2 Years",
      icon: Users,
      description:
        "AICTE approved flagship management program with specializations in Finance, Marketing, Human Resources, and Business Analytics with extensive industry immersion.",
      color: "from-blue-700 to-indigo-800",
      accentColor: "text-blue-700",
      features: [
        "Executive Leadership & Strategy",
        "Global Corporate Case Studies",
        "Financial Modeling & FinTech",
        "Corporate Internship Projects",
      ],
      page: "MBA",
    },
    {
      title: "Master of Computer Applications (MCA)",
      code: "MCA",
      degree: "Postgraduate • 2 Years",
      icon: Code,
      description:
        "Advanced computing program designed for high-tier software engineering, Artificial Intelligence, Machine Learning, Cloud Architecture, and Enterprise System Design.",
      color: "from-purple-700 to-violet-800",
      accentColor: "text-purple-700",
      features: [
        "Artificial Intelligence & Machine Learning",
        "Distributed & Cloud Systems",
        "Enterprise Architecture & DevOps",
        "Advanced Algorithm Engineering",
      ],
      page: "MCA",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#0D225C]/5 px-4 py-1.5 rounded-full text-xs font-bold text-[#0D225C] border border-[#0D225C]/10">
            <Sparkles className="h-3.5 w-3.5 text-[#CCB156]" />
            <span>Academic Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D225C] tracking-tight">
            Distinguished Academic Programs
          </h2>
          <p className="text-base sm:text-lg text-[#747488] leading-relaxed">
            Explore industry-aligned UG and PG programs designed in collaboration with corporate leaders and affiliated with University of Mysore.
          </p>
        </div>

        {/* UG Programs Header & Grid */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 pb-4 border-b border-gray-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#CCB156]">Foundational Pathways</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0D225C]">Undergraduate Programs</h3>
            </div>
            <button
              onClick={() => onNavigate("UnderGraduateAdmission")}
              className="text-xs sm:text-sm font-bold text-[#0D225C] hover:text-[#CCB156] flex items-center space-x-1.5 transition-colors group cursor-pointer"
            >
              <span>Apply for UG Admission</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ugPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Header Gradient */}
                    <div className={`bg-gradient-to-r ${program.color} p-6 sm:p-7 text-white relative overflow-hidden`}>
                      <div className="absolute right-0 top-0 bottom-0 w-32 bg-white/5 transform skew-x-12 pointer-events-none" />
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="h-12 w-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                          {program.code}
                        </span>
                      </div>
                      <h4 className="text-xl font-extrabold mt-4 leading-tight">{program.title}</h4>
                      <p className="text-xs text-white/80 mt-1">{program.degree}</p>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7 space-y-6">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {program.description}
                      </p>

                      <div className="space-y-2.5 pt-2">
                        <h5 className="text-xs font-bold text-[#0D225C] uppercase tracking-wider">
                          Key Curriculum Highlights:
                        </h5>
                        {program.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center space-x-2.5 text-xs text-gray-700">
                            <CheckCircle2 className="h-4 w-4 text-[#CCB156] flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="p-6 sm:p-7 pt-0">
                    <button
                      onClick={() => onNavigate(program.page)}
                      className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-2xl font-extrabold text-xs sm:text-sm bg-gray-50 hover:bg-[#0D225C] text-[#0D225C] hover:text-white border border-gray-200 hover:border-[#0D225C] transition-all duration-300 shadow-sm group-hover:shadow cursor-pointer"
                    >
                      <span>Explore {program.code} Curriculum</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PG Programs Header & Grid */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 pb-4 border-b border-gray-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#CCB156]">Advanced Leadership</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0D225C]">Postgraduate Programs</h3>
            </div>
            <button
              onClick={() => onNavigate("PostGraduateAdmission")}
              className="text-xs sm:text-sm font-bold text-[#0D225C] hover:text-[#CCB156] flex items-center space-x-1.5 transition-colors group cursor-pointer"
            >
              <span>Apply for PG Admission</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pgPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Header Gradient */}
                    <div className={`bg-gradient-to-r ${program.color} p-7 text-white relative overflow-hidden`}>
                      <div className="absolute right-0 top-0 bottom-0 w-40 bg-white/5 transform skew-x-12 pointer-events-none" />
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="h-14 w-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform">
                          <Icon className="h-7 w-7" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                          AICTE Approved • {program.code}
                        </span>
                      </div>
                      <h4 className="text-2xl font-extrabold mt-4 leading-tight">{program.title}</h4>
                      <p className="text-xs text-white/80 mt-1">{program.degree}</p>
                    </div>

                    {/* Card Content */}
                    <div className="p-7 space-y-6">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {program.description}
                      </p>

                      <div className="space-y-2.5 pt-2">
                        <h5 className="text-xs font-bold text-[#0D225C] uppercase tracking-wider">
                          Specializations & Advanced Domains:
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {program.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center space-x-2 text-xs text-gray-700">
                              <CheckCircle2 className="h-4 w-4 text-[#CCB156] flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="p-7 pt-0">
                    <button
                      onClick={() => onNavigate(program.page)}
                      className="w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-2xl font-extrabold text-sm bg-gradient-to-r from-[#0D225C] to-[#173a9e] text-white hover:from-[#173a9e] hover:to-[#0D225C] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                    >
                      <span>Explore {program.code} Details & Syllabi</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Department of Languages */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 pb-4 border-b border-gray-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#CCB156]">Humanities & Linguistics</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0D225C]">Department of Languages</h3>
            </div>
            <button
              onClick={() => onNavigate("DepartmentOfLanguages")}
              className="text-xs sm:text-sm font-bold text-[#0D225C] hover:text-[#CCB156] flex items-center space-x-1.5 transition-colors group cursor-pointer"
            >
              <span>Explore Language Department</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 sm:p-10 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center space-x-2 bg-[#CCB156]/20 px-3.5 py-1 rounded-full text-xs font-bold text-[#0D225C]">
                  <Sparkles className="h-3.5 w-3.5 text-[#CCB156]" />
                  <span>Kannada & English Linguistic Studies</span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-[#0D225C] leading-tight">
                  Linguistic Foundations & Business Communication
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  The Department of Languages delivers comprehensive curriculum in English communication, technical writing, Samskrithika Kannada, and Vyavaharika Kannada affiliated with University of Mysore.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-[#CCB156] flex-shrink-0" />
                    <span>Business Communication & Soft Skills</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-[#CCB156] flex-shrink-0" />
                    <span>Samskrithika & Vyavaharika Kannada</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-[#CCB156] flex-shrink-0" />
                    <span>Audio-Visual Language & Phonetics Lab</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-[#CCB156] flex-shrink-0" />
                    <span>Literary Forums & Rajyotsava Celebrations</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center space-y-4 bg-gray-50/80 p-6 rounded-2xl border border-gray-100">
                <div className="text-center pb-2">
                  <h5 className="font-bold text-[#0D225C] text-base">Department Faculty</h5>
                  <p className="text-xs text-gray-500 mt-0.5">1. Mr. Nikhil Chowdayya • 2. Ms. Shruthi N T</p>
                </div>
                <button
                  onClick={() => onNavigate("DepartmentOfLanguages")}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm bg-[#0D225C] hover:bg-[#143282] text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>View Language Faculty & Syllabus</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePrograms;
