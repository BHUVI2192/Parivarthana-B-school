import React from 'react';
import { Users, Shield, BookOpen, Award, Target, Settings, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export interface CouncilMember {
  slNo: number;
  name: string;
  councilRole: 'Chairperson' | 'Principal' | 'Member Secretary' | 'Member';
  designation: string;
  organization: string;
  image?: string;
  expertise?: string;
}

const GoverningCouncilPage: React.FC = () => {
  const councilMembers: CouncilMember[] = [
    {
      slNo: 1,
      name: 'Dr. M. Puttegowda',
      councilRole: 'Chairperson',
      designation: 'Founder Trustee & Chairman',
      organization: 'Oom Shreenikethana Trust, Srirangapatna',
      image: 'governing_council/puttegowda.jpg',
      expertise: 'Educational Leadership, Trust Administration, Visionary Governance'
    },
    {
      slNo: 2,
      name: 'Mr. B.V. Kumar',
      councilRole: 'Member',
      designation: 'Convener Trustee and Treasurer',
      organization: 'Oom Shreenikethana Trust, Srirangapatna',
      image: 'governing_council/BVKumar.jpg',
      expertise: 'Financial Planning, Institutional Resource Management, Trust Operations'
    },
    {
      slNo: 3,
      name: 'Mr. Manjuram P.',
      councilRole: 'Member',
      designation: 'Managing Director',
      organization: 'Parivarthana Business School, Mysuru',
      image: 'governing_council/Manjuram.jpg',
      expertise: 'Corporate Strategy, Business Education, Institutional Expansion'
    },
    {
      slNo: 4,
      name: 'Prof. N.S. Ramegowda',
      councilRole: 'Member',
      designation: 'CEO',
      organization: 'Sri Adichunchanagiri Shikshana Trust',
      image: 'governing_council/NSRamegowda.jpg',
      expertise: 'Higher Education Management, Accreditation Policy, Academic Administration'
    },
    {
      slNo: 5,
      name: 'Prof. C.M. Thyagaraja',
      councilRole: 'Member',
      designation: 'Vice Chancellor',
      organization: 'Rani Chennamma University, Belagavi',
      image: 'governing_council/THYAGARAJ1.jpg',
      expertise: 'University Governance, Commerce & Management Education, Higher Ed Policy'
    },
    {
      slNo: 6,
      name: 'Prof. Dhananjaya K.B.',
      councilRole: 'Member',
      designation: 'Retd. Principal',
      organization: 'Sahayadri Arts College, Shivamogga',
      image: 'governing_council/Dhananjay.jpg',
      expertise: 'Pedagogy, College Administration, Student Welfare & Mentorship'
    },
    {
      slNo: 7,
      name: 'Dr. Venkatraja B.',
      councilRole: 'Member',
      designation: 'Chairperson',
      organization: 'SDM Research Center for Management Studies, Mysuru',
      image: 'governing_council/Venkataraja.jpg',
      expertise: 'Managerial Economics, Business Research, Academic Publishing'
    },
    {
      slNo: 8,
      name: 'Dr. D.S. Guru',
      councilRole: 'Member',
      designation: 'Senior Professor, Department of Studies in Computer Science',
      organization: 'University of Mysore, Mysuru',
      image: 'governing_council/DSGuru.jpg',
      expertise: 'Computer Science, AI & Machine Learning, Technical Curriculum Design'
    },
    {
      slNo: 9,
      name: 'Ms. Sudhasri',
      councilRole: 'Member',
      designation: 'Vice President',
      organization: 'Kaynes Technologies, Mysore',
      image: 'governing_council/sudhashri.jpg',
      expertise: 'Corporate Leadership, Electronics & Tech Industry, Industry-Academia Linkages'
    },
    {
      slNo: 10,
      name: 'Dr. Raghunandan G',
      councilRole: 'Principal',
      designation: 'Principal',
      organization: 'Parivarthana Business School, Mysuru',
      image: 'governing_council/RaghunandanG.jpg',
      expertise: 'Academic Leadership, Marketing Management, Institutional Operations'
    },
    {
      slNo: 11,
      name: 'Mr. Shamanth Kumar B.U.',
      councilRole: 'Member',
      designation: 'IQAC Coordinator & Head – MBA',
      organization: 'Parivarthana Business School, Mysuru',
      image: 'governing_council/Shamantha.jpg',
      expertise: 'IQAC Quality Assurance, Business Administration, Curriculum Planning'
    },
    {
      slNo: 12,
      name: 'Ms. Ramya V.J.',
      councilRole: 'Member',
      designation: 'Head – MCA',
      organization: 'Parivarthana Business School, Mysuru',
      image: 'governing_council/RamyaVJ.jpg',
      expertise: 'Computer Applications, Technical Curriculum, Student Mentorship'
    },
    {
      slNo: 13,
      name: 'Mr. Imran Khan S.',
      councilRole: 'Member',
      designation: 'Head – B. Com & BBA',
      organization: 'Parivarthana Business School, Mysuru',
      image: 'governing_council/ImranKhan.jpg',
      expertise: 'Commerce & Business Administration, Academic Coordination'
    },
    {
      slNo: 14,
      name: 'Mr. Suhas B Raj',
      councilRole: 'Member',
      designation: 'Head – BCA',
      organization: 'Parivarthana Business School, Mysuru',
      image: 'governing_council/suhas.jpg',
      expertise: 'Computer Applications, IT Education, Academic Guidance'
    }
  ];

  const responsibilities = [
    {
      icon: Target,
      title: 'Strategic Planning & Vision',
      description: 'Developing long-term roadmap and strategic plans for institutional excellence and holistic growth.'
    },
    {
      icon: BookOpen,
      title: 'Academic Oversight',
      description: 'Ensuring rigorous academic standards, curriculum relevance, and pedagogical excellence across all programs.'
    },
    {
      icon: Users,
      title: 'Policy Formulation',
      description: 'Creating, reviewing, and implementing progressive institutional policies and code of governance.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance & Accreditation',
      description: 'Monitoring and benchmarking quality standards across all educational and administrative operations.'
    },
    {
      icon: Award,
      title: 'Institutional Performance',
      description: 'Periodic review of institutional outcomes, student achievements, and placement track record.'
    },
    {
      icon: Settings,
      title: 'Resource Governance',
      description: 'Guiding transparent and optimal allocation of financial, human, and technological infrastructure.'
    }
  ];

  const getRoleBadgeStyle = (role: CouncilMember['councilRole']) => {
    switch (role) {
      case 'Chairperson':
        return 'bg-[#CCB156] text-[#0D225C] font-bold border border-[#CCB156] shadow-sm';
      case 'Principal':
        return 'bg-[#0D225C] text-[#CCB156] font-bold border border-[#0D225C] shadow-sm';
      case 'Member':
      default:
        return 'bg-blue-50 text-[#0D225C] font-semibold border border-blue-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F0EA] font-sans">
      {/* Hero Section */}
      <section className="relative bg-[#0D225C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#CCB156]/20 text-[#CCB156] border border-[#CCB156]/30 mb-4">
              Institutional Governance
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Governing Council</h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              The apex executive body guiding institutional governance, strategic excellence, and academic leadership
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-[#747488]">
              <div className="flex items-center space-x-2 text-[#0D225C] font-semibold text-sm uppercase tracking-wider">
                <Building2 className="h-5 w-5 text-[#CCB156]" />
                <span>Apex Decision-Making Body</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D225C] leading-tight">
                About the Governing Council
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                The Governing Council of <strong className="text-[#0D225C]">Parivarthana Business School</strong> serves as the apex decision-making body responsible for the overall governance, strategic vision, and operational excellence of the institution. Comprising visionary educational leaders, university vice-chancellors, eminent senior professors, and distinguished corporate executives, the council steers PBS towards academic distinction.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Operating under the esteemed guidance of the Board of Trustees of Oom Shreenikethana Trust, the council regularly convenes to review academic standards, policy compliance, infrastructure development, and student-centric initiatives.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                <img
                  src={getAssetUrl('building.jpg')}
                  alt="Governing Council"
                  className="w-full h-80 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D225C]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-[#0D225C]">14 Distinguished Members</div>
                    <div className="text-xs text-[#747488]">Leading Academic & Industry Experts</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#CCB156]/20 flex items-center justify-center text-[#0D225C] font-bold">
                    <CheckCircle2 className="h-6 w-6 text-[#CCB156]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Council Members Card Grid */}
      <section className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#CCB156] uppercase tracking-wider block mb-2">
              Leadership Directory
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0D225C]">Council Members</h2>
            <p className="text-[#747488] text-base md:text-lg mt-3 max-w-2xl mx-auto">
              Meet the 14 distinguished leaders, vice-chancellors, and corporate executives constituting the Governing Council of PBS
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {councilMembers.map((member) => (
              <div
                key={member.slNo}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-64 w-full bg-gradient-to-tr from-[#0D225C] to-[#1a388a] overflow-hidden">
                    {member.image ? (
                      <img
                        src={getAssetUrl(member.image)}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : null}
                    
                    {/* Fallback Initial */}
                    <div
                      className="w-full h-full bg-[#0D225C] text-[#CCB156] flex items-center justify-center text-4xl font-extrabold"
                      style={{ display: member.image ? 'none' : 'flex' }}
                    >
                      {member.name
                        .replace(/^(Dr\.|Mr\.|Ms\.|Prof\.|Mrs\.)\s*/i, '')
                        .charAt(0)}
                    </div>

                    {/* Role Badge in Photo */}
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md ${getRoleBadgeStyle(member.councilRole)}`}>
                        {member.councilRole}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2">
                    <h3 className="text-lg font-bold text-[#0D225C] leading-snug group-hover:text-[#CCB156] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#CCB156] uppercase tracking-wider leading-relaxed">
                      {member.designation}
                    </p>
                    <p className="text-xs text-[#747488] leading-relaxed pt-1">
                      {member.organization}
                    </p>
                  </div>
                </div>

                {/* Expertise Footer */}
                {member.expertise && (
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-gray-100">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Domain Expertise:
                      </span>
                      <p className="text-xs text-gray-600 font-medium leading-tight">
                        {member.expertise}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#CCB156] uppercase tracking-wider block mb-1">
              Core Mandate
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D225C] mb-4">
              Key Responsibilities
            </h2>
            <p className="text-lg text-[#747488] max-w-3xl mx-auto font-light">
              The Governing Council oversees governance, academic quality, resource management, and statutory adherence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {responsibilities.map((responsibility, index) => (
              <div
                key={index}
                className="bg-[#F0F0EA] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#CCB156] hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0D225C] text-[#CCB156] rounded-xl mb-5 shadow-sm">
                  <responsibility.icon className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-[#0D225C] mb-2.5">
                  {responsibility.title}
                </h4>
                <p className="text-[#747488] text-sm leading-relaxed">
                  {responsibility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoverningCouncilPage;