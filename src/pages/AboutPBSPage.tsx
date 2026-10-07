import React from 'react';
import { GraduationCap, Users, Award, BookOpen, Target, Eye, TrendingUp, Code, Scale } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const AboutPBSPage: React.FC = () => {
  const programs = [
    {
      category: 'Under-Graduate Programs',
      icon: GraduationCap,
      color: 'bg-[#0D225C]',
      courses: [
        { name: 'Bachelor of Business Administration (BBA)', duration: '3 Years' },
        { name: 'Bachelor of Computer Applications (BCA)', duration: '3 Years' },
        { name: 'Bachelor of Commerce (B.Com)', duration: '3 Years' }
      ]
    },
    {
      category: 'Post-Graduate Programs',
      icon: Award,
      color: 'bg-[#CCB156]',
      courses: [
        { name: 'Master of Business Administration (MBA)', duration: '2 Years' },
        { name: 'Master of Computer Applications (MCA)', duration: '2 Years' }
      ]
    },
  ];

  const features = [
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Experienced faculty members with industry expertise and academic excellence'
    },
    {
      icon: BookOpen,
      title: 'Modern Curriculum',
      description: 'Industry-relevant curriculum designed to meet contemporary business needs'
    },
    {
      icon: TrendingUp,
      title: 'Career Focus',
      description: 'Strong emphasis on employability and career development'
    },
    {
      icon: Award,
      title: 'Quality Education',
      description: 'Commitment to academic excellence and holistic student development'
    }
  ];

  const stats = [
    { value: '2023', label: 'Established' },
    { value: '7', label: 'Programs Offered' },
    { value: '92%', label: 'Placement Support' },
    { value: '50+', label: 'Industry Partners' }
  ];

  return (
    <div className="min-h-screen bg-[#F0F0EA]">
      {/* Hero Section */}
      <section className="relative bg-[#0D225C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Parivarthana Business School</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Experience the Empowerment - Shaping Tomorrow's Leaders Today
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0D225C] mb-6">Welcome to PBS</h2>
              <p className="text-lg text-[#747488] mb-6 leading-relaxed">
                Parivarthana Business School (PBS) has emerged with flying colors a high reputation 
                as the best private College in Mysuru, Karnataka with the objective of providing 
                quality management education based on a firm foundation of Indian values and ethics. 
                Its name has almost become a well-recognized brand name for quality education in 
                under-graduate, post-graduate programs in Commerce, Management and Computer Science 
                not only in Mysuru but also in Karnataka and India.
              </p>
              <p className="text-lg text-[#747488] mb-6 leading-relaxed">
                Parivarthana Business School is a multi-disciplinary institution offering varied 
                programs in emerging areas that bear a direct relationship to economic growth and 
                development of the society. Most of the programs constitute a balanced blend of the 
                conventional and career-oriented programs, although in recent years, the tilt is 
                towards the introduction of more career-oriented programs.
              </p>
              <p className="text-lg text-[#747488] leading-relaxed">
                The curriculum has been designed in such a manner that focuses and gives thrust to 
                national development. Various courses for skills development and value orientation 
                are also offered by the PBS. We have integrated Computer Skills into our curriculum, recognizing that in today’s world they are essential and highly sought-after for almost every career path. At Parivarthana Business School, we attempt to 
                present a flavor of diversity and quality to education, as well as the services 
                and the facilities you will enjoy here are of world accepted standards.
              </p>
            </div>
            <div className="relative">
              <img
                src={getAssetUrl('building.jpg')}
                alt="PBS Campus"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-[#0D225C]">Best</div>
                <div className="text-sm text-[#747488]">Private College</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#CCB156] to-[#B39941] rounded-full mb-6">
                <Eye className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#0D225C] mb-6">Our Vision</h3>
              <div className="h-1 w-20 bg-[#CCB156] mb-6"></div>
              <p className="text-lg text-[#747488] leading-relaxed">
                Fostering human accomplishment via need and value-based education to satisfy
                local and global demands.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0D225C] to-[#1a3a7a] rounded-full mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#0D225C] mb-6">Our Mission</h3>
              <div className="h-1 w-20 bg-[#CCB156] mb-6"></div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#CCB156] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#747488] leading-relaxed">
                    Offering a comprehensive education with a specific focus on employability.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#CCB156] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#747488] leading-relaxed">
                    Fostering a leadership mind-set in all spheres of life. Empowering students
                    to support the advancement of society and nation-wide progress.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#CCB156] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#747488] leading-relaxed">
                    Instilling the quality in students to take up self-employment.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#CCB156] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#747488] leading-relaxed">
                    Encouraging and enabling the academicians to work continuously on innovative
                    and research projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Why Choose PBS?</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Discover what makes Parivarthana Business School the ideal choice for your academic journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-[#F0F0EA] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#CCB156] rounded-lg mb-4">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#0D225C] mb-3">{feature.title}</h4>
                <p className="text-[#747488] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Academic Programs</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Comprehensive programs designed to meet diverse career aspirations and industry demands
            </p>
          </div>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className={`${program.color} p-6 text-white`}>
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <program.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold">{program.category}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {program.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="bg-[#F0F0EA] p-4 rounded-lg">
                        <h4 className="font-semibold text-[#0D225C] mb-2">{course.name}</h4>
                        <p className="text-[#747488] text-sm">Duration: {course.duration}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-[#0D225C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">PBS at a Glance</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key highlights that showcase our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold text-[#CCB156] mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Affiliations & Approvals</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Recognized and approved by leading educational authorities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-[#F0F0EA] rounded-xl p-8">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                 <img src={getAssetUrl('uom_logo.svg')} alt="Affiliated to UNIVERSITY OF MYSORE" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[#0D225C] mb-2">University of Mysore</h3>
              <p className="text-[#747488]">Affiliated for all under-graduate and post-graduate programs</p>
            </div>
            
            <div className="text-center bg-[#F0F0EA] rounded-xl p-8">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img src={getAssetUrl('the-karnataka-government-kannada-seeklogo.png')} alt="Approved by GOVERNMENT OF KARNATAKA" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[#0D225C] mb-2">Government of Karnataka</h3>
              <p className="text-[#747488]">Approved by the State Government</p>
            </div>
            
            <div className="text-center bg-[#F0F0EA] rounded-xl p-8">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img src={getAssetUrl('aicte_logo.png')} alt="PROGRAMS ARE APPROVED BY AICTE" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[#0D225C] mb-2">AICTE</h3>
              <p className="text-[#747488]">Programs approved by All India Council for Technical Education</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
    </div>
  );
};

export default AboutPBSPage;