import React, { useEffect } from 'react';
import { Briefcase, Users, Award, TrendingUp, Building, Target, Phone, Mail, MapPin, FileText, Download, ExternalLink, CheckCircle, Calendar, Clock, Star, GraduationCap, BookOpen, MessageCircle, Send } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const TAPCellPage: React.FC = () => {
  useEffect(() => {
    // Handle smooth scrolling to sections based on URL hash
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const keyHighlights = [
    {
      icon: Users,
      title: 'Daily Soft Skills Training',
      description: 'Continuous training sessions throughout the entire post-graduate program focusing on communication, leadership, teamwork, and personal development.'
    },
    {
      icon: Award,
      title: 'Certification Courses',
      description: 'Value-added certification programs in collaboration with reputed training partners to enhance technical competencies and domain knowledge.'
    },
    {
      icon: Building,
      title: 'Industry Visits',
      description: 'Regular industry visits providing firsthand exposure to real-world business operations and corporate environments.'
    },
    {
      icon: Target,
      title: 'Skill Development Activities',
      description: 'Mock interviews, group discussions, aptitude training, resume-building workshops, and panel interactions to build confidence.'
    }
  ];

  const placementStats = [
    { value: '92%', label: 'Placement Rate (MBA)' },
    { value: '30+', label: 'Partner Companies' },
    { value: '₹5 LPA', label: 'Highest Package' },
    { value: '₹3.5 LPA', label: 'Average Package' }
  ];

  const placementData = [
    { branch: 'MBA', totalStudents: 120, totalOffers: 120, individualOffers: 100, highestCTC: '5', lowestCTC: '3', averageCTC: '3.5' },
    { branch: 'MCA', totalStudents: 40, totalOffers: 10, individualOffers: 10, highestCTC: '5', lowestCTC: '3', averageCTC: '3.5' }
  ];

  const companyPlacements = [
    { company: 'Niva Bupa Health Insurance', package: '4.5', mba: 2, mca: 0 },
    { company: 'M11 Energies Pvt Limited', package: '3.5', mba: 9, mca: 0 },
    { company: 'Nyeras Group', package: '3.5', mba: 39, mca: 0 },
    { company: 'Expert Consulting', package: '3', mba: 49, mca: 0 },
    { company: 'Indian Capital Finance', package: '3', mba: 5, mca: 2 },
    { company: 'Samruddhi Groups', package: '3', mba: 2, mca: 0 },
    { company: 'HUDL', package: '3', mba: 0, mca: 5 },
    { company: 'TECHNO TASK', package: '3.5', mba: 0, mca: 1 },
    { company: 'CODE YOUNG', package: '4.8', mba: 0, mca: 1 },
    { company: 'BURGER PAINTS', package: '4', mba: 1, mca: 0 },
    { company: 'STORE KING', package: '5', mba: 2, mca: 0 },
    { company: 'K12 TECHNO SERVICES', package: '5', mba: 10, mca: 1 },
    { company: 'K12 TECHNO SERVICES', package: '3.6', mba: 1, mca: 1 },
    { company: 'B AND WINGS', package: '3', mba: 0, mca: 1 }
  ];

  const placementProcess = [
    {
      step: 1,
      title: 'Pre-Placement Talk',
      description: 'Company presentation about organization, job roles, and selection process',
      duration: '30-45 minutes'
    },
    {
      step: 2,
      title: 'Written Test/Online Assessment',
      description: 'Technical, aptitude, and logical reasoning assessment',
      duration: '60-90 minutes'
    },
    {
      step: 3,
      title: 'Group Discussion',
      description: 'Assessment of communication skills and team work abilities',
      duration: '20-30 minutes'
    },
    {
      step: 4,
      title: 'Technical Interview',
      description: 'In-depth technical knowledge and problem-solving evaluation',
      duration: '30-45 minutes'
    },
    {
      step: 5,
      title: 'HR Interview',
      description: 'Final round focusing on personality, cultural fit, and career goals',
      duration: '15-30 minutes'
    }
  ];

  const facilities = [
    {
      title: 'Interview Rooms',
      description: 'Well-equipped interview rooms with modern audio-visual facilities',
      features: ['Air-conditioned rooms', 'Video conferencing setup', 'Comfortable seating', 'Professional ambiance']
    },
    {
      title: 'Auditorium',
      description: 'Spacious auditorium for pre-placement talks and group activities',
      features: ['Seating capacity: 200+', 'Modern AV equipment', 'Projector and screens', 'Sound system']
    },
    {
      title: 'Computer Lab',
      description: 'Dedicated computer lab for online assessments and technical tests',
      features: ['High-speed internet', 'Latest software', '50+ workstations', 'Technical support']
    },
    {
      title: 'Waiting Areas',
      description: 'Comfortable waiting areas for candidates during the selection process',
      features: ['Comfortable seating', 'Refreshment facilities', 'Information displays', 'Quiet environment']
    }
  ];

  const regulations = [
    {
      category: 'Student Eligibility',
      rules: [
        'Only students who have cleared all academic dues and disciplinary issues are eligible for placement',
        'Students must register with the TAP Cell to participate in placement activities',
        'Information provided in resume must be accurate; any discrepancy will lead to disqualification',
        'Students must follow formal dress code during recruitment processes',
        'Attendance is mandatory in all training programs and interview rounds'
      ]
    },
    {
      category: 'Recruitment Process',
      rules: [
        'Recruiters must fill out the Placement Registration Form prior to the visit',
        'Job Description, CTC, selection criteria, and process details must be provided in advance',
        'Students must apply only if they meet the eligibility criteria specified by the company',
        'No withdrawal is allowed once a student applies for a company unless valid reason is submitted',
        'TAP will coordinate the entire selection process including tests, group discussions, and interviews'
      ]
    },
    {
      category: 'Offer Management',
      rules: [
        'A student will be allowed to receive only one job offer through campus placements',
        'Once selected, student will be automatically withdrawn from further placement activities',
        'Internship offers handled separately, but PPO students considered placed',
        'Selected students must accept offer within deadline; delayed response may result in cancellation',
        'All placement-related communication shared via official email or notice boards'
      ]
    }
  ];

  const disqualificationReasons = [
    'Misrepresentation of facts in the resume or interview',
    'Indiscipline or inappropriate behaviour during recruitment events',
    'Absence without prior permission during scheduled recruitment activities',
    'Rejecting an offer after accepting it'
  ];

  const placementOfficer = {
    name: 'Zubair Ahmed',
    designation: 'Life Skills Trainer and Placement Officer',
    qualification: 'MBA',
    eligibility: 'Certified Soft Skills Trainer and Internationally Certified NLP trainer from ABNLP',
    specialization: 'MBA and MCA',
    experience: '9 years',
    pgSpecialization: 'Soft Skills',
    email: 'placements@parivarthanabschool.in',
    phone: '+91 97389 51352',
    image: '/ZubairAhmed.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  };

  return (
    <div className="min-h-screen bg-[#F0F0EA]">
      {/* Hero Section */}
      <section className="relative bg-[#0D225C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Training & Placement Cell</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Bridging the gap between education and employment through comprehensive career support
            </p>
          </div>
        </div>
      </section>

      {/* About TAP Cell */}
      <section id="about-tap" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0D225C] mb-6">About the Training and Placement Cell (TAP)</h2>
              <p className="text-lg text-[#747488] mb-6 leading-relaxed">
                At Parivarthana Business School, the Training and Placement Cell (TAP) plays a pivotal role in 
                shaping the career paths of students by preparing them for a dynamic and competitive professional world. 
                The TAP Cell is committed in enhancing the employability of students through continuous training, 
                industry exposure, and placement opportunities.
              </p>
              <p className="text-lg text-[#747488] mb-6 leading-relaxed">
                Our dedicated team works tirelessly to ensure that every student receives the best possible career 
                guidance and placement opportunities. We maintain strong relationships with leading companies across 
                various sectors, providing our students with diverse career opportunities.
              </p>
              <p className="text-lg text-[#747488] leading-relaxed">
                The TAP Cell also focuses on entrepreneurship development, encouraging students to explore 
                self-employment opportunities and startup ventures.
              </p>
            </div>
            <div className="relative">
              <img
                src={getAssetUrl('Placement1.jpg')}
                alt="TAP Cell activities"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-[#0D225C]">30+</div>
                <div className="text-sm text-[#747488]">Partner Companies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Key Highlights</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Comprehensive training and development programs to ensure student success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyHighlights.map((highlight, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#CCB156] rounded-lg mb-4">
                  <highlight.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#0D225C] mb-3">{highlight.title}</h4>
                <p className="text-[#747488] leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6 text-center">Placement Support with 30+ Companies</h3>
            <p className="text-lg text-[#747488] text-center leading-relaxed">
              The TAP Cell has established strong relationships with over 30 leading companies across diverse sectors. 
              Each year, numerous recruiters visit our campus, offering both internship and final placement opportunities. 
              Our alumni are successfully placed in reputed organizations, reflecting the quality and effectiveness of our placement ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="py-20 bg-[#0D225C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Placement Statistics</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself - consistent placement success year after year
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold text-[#CCB156] mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invite to Recruiters */}
      <section id="invite-to-recruiter" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Placement Officer's Message to Recruiters</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Partner with us to recruit talented and skilled graduates
            </p>
          </div>

          <div className="bg-[#F0F0EA] rounded-xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-3 gap-8 items-center mb-8">
              <div className="text-center">
                <img
                  src={placementOfficer.image}
                  alt={placementOfficer.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#CCB156]"
                />
                <h3 className="text-xl font-bold text-[#0D225C] mb-2">{placementOfficer.name}</h3>
                <p className="text-[#CCB156] font-semibold">{placementOfficer.designation}</p>
              </div>
              
              <div className="lg:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-[#747488] leading-relaxed mb-6">
                    "At Parivarthana Business School, we believe in empowering students with the right blend of academic knowledge, 
                    practical exposure, and essential soft skills to meet industry expectations. Our dedicated Training and Placement 
                    Cell (TAP) plays a crucial role in grooming students to become competent and confident professionals.
                  </p>
                  <p className="text-[#747488] leading-relaxed mb-6">
                    We invite esteemed organizations and industry leaders to partner with us in our campus recruitment drives. 
                    Our students undergo daily soft skills training, industry-relevant certification programs, and regular industry 
                    visits, making them well-prepared for the corporate world.
                  </p>
                  <p className="text-[#747488] leading-relaxed">
                    With a growing network of 30+ reputed recruiters and a strong focus on holistic development, we are confident 
                    that our students can contribute meaningfully to your organization. We welcome you to visit our campus and 
                    explore the talent pool at Parivarthana Business School. Join us in building future-ready professionals."
                  </p>
                </div>
              </div>
            </div>

            {/* Recruitment Registration Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-6 text-center">Recruitment Registration Form</h3>

              <div className="w-full flex justify-center">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeEY8zpZYyF5J60NF1h5UVGT5JhUXGZkxNB89eGZ-rWJ6xMHg/viewform?embedded=true"
                  width="100%"
                  height="2498"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="max-w-4xl"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities for Campus Hiring */}
      <section id="facilities-for-campus-hiring" className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Facilities for Campus Hiring</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              State-of-the-art infrastructure to support seamless campus recruitment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-[#0D225C] mb-4">{facility.title}</h3>
                <p className="text-[#747488] mb-4 leading-relaxed">{facility.description}</p>
                <div className="space-y-2">
                  {facility.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#CCB156]" />
                      <span className="text-[#747488] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Regulations */}
      <section id="placement-regulations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Placement Regulations</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Guidelines and regulations governing the placement process
            </p>
          </div>

          <div className="bg-[#F0F0EA] rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Objective</h3>
            <p className="text-lg text-[#747488] leading-relaxed">
              The objective of the Training and Placement Cell (TAP) is to facilitate meaningful career opportunities 
              for students and build strong industry-academia partnerships. These placement regulations aim to maintain 
              transparency, discipline, and efficiency in the recruitment process.
            </p>
          </div>

          <div className="space-y-8">
            {regulations.map((regulation, index) => (
              <div key={index} className="bg-[#F0F0EA] rounded-xl p-8">
                <h3 className="text-2xl font-bold text-[#0D225C] mb-6">{regulation.category}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {regulation.rules.map((rule, ruleIndex) => (
                    <div key={ruleIndex} className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#CCB156] flex-shrink-0 mt-0.5" />
                      <span className="text-[#747488] text-sm leading-relaxed">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Disqualification */}
          <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-red-800 mb-6">Disqualification</h3>
            <p className="text-red-700 mb-4">A student may be disqualified from placement activities for the following reasons:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {disqualificationReasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-red-700 text-sm leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Placement Reports */}
      <section id="placement-report" className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Placement Report 2024-25</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Comprehensive placement statistics and achievements for the academic year 2024-25
            </p>
          </div>

          {/* Overall Statistics */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6 text-center">Overall Placement Statistics</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0D225C] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Branch</th>
                    <th className="px-6 py-4 text-center font-semibold">Total Students</th>
                    <th className="px-6 py-4 text-center font-semibold">Total Offers</th>
                    <th className="px-6 py-4 text-center font-semibold">Individual Offers</th>
                    <th className="px-6 py-4 text-center font-semibold">Highest CTC (LPA)</th>
                    <th className="px-6 py-4 text-center font-semibold">Lowest CTC (LPA)</th>
                    <th className="px-6 py-4 text-center font-semibold">Average CTC (LPA)</th>
                  </tr>
                </thead>
                <tbody>
                  {placementData.map((data, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-[#F0F0EA] transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#0D225C]">{data.branch}</td>
                      <td className="px-6 py-4 text-center text-[#747488]">{data.totalStudents}</td>
                      <td className="px-6 py-4 text-center text-[#747488]">{data.totalOffers}</td>
                      <td className="px-6 py-4 text-center text-[#747488]">{data.individualOffers}</td>
                      <td className="px-6 py-4 text-center text-[#CCB156] font-bold">₹{data.highestCTC}</td>
                      <td className="px-6 py-4 text-center text-[#747488]">₹{data.lowestCTC}</td>
                      <td className="px-6 py-4 text-center text-[#CCB156] font-bold">₹{data.averageCTC}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Course Wise Placement Statistics */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6 text-center">Course Wise Placement Statistics 2024-25</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#CCB156] text-[#0D225C]">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Placed Company</th>
                    <th className="px-6 py-4 text-center font-semibold">Package Offered (LPA)</th>
                    <th className="px-6 py-4 text-center font-semibold">MBA</th>
                    <th className="px-6 py-4 text-center font-semibold">MCA</th>
                  </tr>
                </thead>
                <tbody>
                  {companyPlacements.map((placement, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-[#F0F0EA] transition-colors">
                      <td className="px-6 py-4 font-medium text-[#0D225C]">{placement.company}</td>
                      <td className="px-6 py-4 text-center text-[#CCB156] font-bold">₹{placement.package}</td>
                      <td className="px-6 py-4 text-center text-[#747488]">{placement.mba || '-'}</td>
                      <td className="px-6 py-4 text-center text-[#747488]">{placement.mca || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Placement Process</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Our structured placement process ensures fair and transparent selection
            </p>
          </div>

          <div className="space-y-8">
            {placementProcess.map((step, index) => (
              <div key={index} className="bg-[#F0F0EA] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#CCB156] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-[#0D225C]">{step.title}</h3>
                      <div className="flex items-center space-x-2 text-[#747488]">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-[#747488] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact TAP Cell */}
      <section id="contact-us" className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Contact TAP Cell</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Get in touch with our placement team for career guidance and opportunities
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img
                  src={placementOfficer.image}
                  alt={placementOfficer.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#CCB156]"
                />
                <h3 className="text-xl font-bold text-[#0D225C] mb-2">{placementOfficer.name}</h3>
                <p className="text-[#CCB156] font-semibold mb-4">{placementOfficer.designation}</p>
              </div>
              
              <div className="lg:col-span-2">
                <h4 className="text-xl font-bold text-[#0D225C] mb-4">Professional Highlights</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-[#0D225C] text-sm">Qualification: </span>
                      <span className="text-[#747488] text-sm">{placementOfficer.qualification}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#0D225C] text-sm">Experience: </span>
                      <span className="text-[#747488] text-sm">{placementOfficer.experience}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-[#0D225C] text-sm">Specialization: </span>
                      <span className="text-[#747488] text-sm">{placementOfficer.specialization}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#0D225C] text-sm">PG Specialization: </span>
                      <span className="text-[#747488] text-sm">{placementOfficer.pgSpecialization}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#F0F0EA] p-4 rounded-lg">
                  <h5 className="font-semibold text-[#0D225C] mb-2">Certification:</h5>
                  <p className="text-[#747488] text-sm">{placementOfficer.eligibility}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div className="text-center bg-[#F0F0EA] rounded-xl p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0D225C] rounded-full mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D225C] mb-4">Phone</h3>
                <p className="text-[#747488] text-lg font-semibold">{placementOfficer.phone}</p>
              </div>

              <div className="text-center bg-[#F0F0EA] rounded-xl p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#CCB156] rounded-full mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D225C] mb-4">Email</h3>
                <p className="text-[#747488] text-lg font-semibold">{placementOfficer.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TAPCellPage;