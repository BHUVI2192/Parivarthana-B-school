import React from 'react';
import { MessageCircle, Award, Users, BookOpen, Target, Heart, Mail, Phone, MapPin } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const PrincipalMessagePage: React.FC = () => {
  const principalInfo = {
    name: 'Dr. Raghunandan G',
    position: 'Principal, Parivarthana Business School',
    image: '/PBSPrincipal.jpg&fit=crop',
    qualifications: 'Ph.D. in Marketing',
    experience: '17+ years in Higher Education & Academic Leadership',
    specialization: 'Marketing, Business Education, Academic Administration',
    email: 'principal@parivarthanabschool.in',
    phone: '+91 99450 57222',
    message: `Dear Students, Faculty, and Well-wishers,

It gives me immense pleasure to welcome you to Parivarthana Business School, an institution that stands as a beacon of excellence in business education. As the Principal, I am honored to lead this dynamic community of learners, educators, and innovators who are committed to shaping the future of business and management.

With over 17 years of experience in higher education and a deep passion for Marketing and business education, I have witnessed firsthand the transformative power of quality education. At Parivarthana Business School, we believe that education is not just about imparting knowledge; it is about nurturing critical thinking, fostering innovation, and developing ethical leaders who can make a positive impact on society.

Our institution is built on the foundation of academic excellence, innovative pedagogy, and industry relevance. We are committed to providing our students with a comprehensive learning experience that combines theoretical knowledge with practical applications. Our curriculum is designed to meet the evolving needs of the business world, ensuring that our graduates are well-equipped to face the challenges of today's dynamic business environment.

As a prolific researcher with numerous publications in national and international journals, I understand the importance of staying at the forefront of emerging trends and innovations. This commitment to continuous learning and research excellence permeates throughout our institution, creating an environment where both students and faculty are encouraged to explore, discover, and innovate.

Our faculty members are not just teachers but mentors who guide students in their academic and professional journeys. We believe in nurturing not only academic excellence but also character development, leadership skills, and social responsibility.

I invite you to be part of our vibrant academic community where learning knows no bounds, where innovation thrives, and where every individual is empowered to achieve their full potential. Together, let us embark on a journey of discovery, growth, and transformation.

With warm regards and best wishes for your success.`
  };

  const achievements = [
    {
      icon: Award,
      title: 'Research Excellence',
      description: '12+ research articles in reputed national and international journals',
      year: 'Ongoing'
    },
    {
      icon: BookOpen,
      title: 'Conference Presentations',
      description: 'Presented papers at various national and international conferences',
      year: 'Ongoing'
    },
    {
      icon: Users,
      title: 'Academic Leadership',
      description: '17+ years of distinguished teaching and administrative experience',
      year: 'Career'
    },
    {
      icon: Target,
      title: 'Marketing Expertise',
      description: 'Thought leader in Marketing with extensive research contributions',
      year: 'Specialization'
    }
  ];

  const visionPoints = [
    {
      icon: Target,
      title: 'Academic Excellence',
      description: 'Commitment to maintaining highest standards in business education'
    },
    {
      icon: Users,
      title: 'Student Mentorship',
      description: 'Guiding students in their academic and research pursuits with dedication'
    },
    {
      icon: BookOpen,
      title: 'Research & Innovation',
      description: 'Promoting research culture and staying at forefront of Marketing trends'
    },
    {
      icon: Heart,
      title: 'Holistic Development',
      description: 'Fostering character development, leadership skills, and social responsibility'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F0F0EA]">
      {/* Hero Section */}
      <section className="relative bg-[#0D225C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#CCB156] rounded-full mb-6">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Principal's Message</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              A message of inspiration, vision, and commitment to educational excellence
            </p>
          </div>
        </div>
      </section>

      {/* Principal's Profile & Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Principal's Profile */}
            <div className="lg:col-span-1">
              <div className="bg-[#F0F0EA] rounded-xl p-8 sticky top-8">
                <div className="text-center mb-6">
                  <img
                    src={getAssetUrl('PBSPrincipal.jpg')}
                    alt={principalInfo.name}
                    className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-[#CCB156]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = getAssetUrl('RaghunandanG.jpg');
                    }}
                  />
                  <h3 className="text-2xl font-bold text-[#0D225C] mb-2">{principalInfo.name}</h3>
                  <p className="text-[#CCB156] font-semibold mb-4">{principalInfo.position}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-[#0D225C] mb-2">Qualifications</h4>
                    <p className="text-[#747488] text-sm">{principalInfo.qualifications}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0D225C] mb-2">Experience</h4>
                    <p className="text-[#747488] text-sm">{principalInfo.experience}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0D225C] mb-2">Specialization</h4>
                    <p className="text-[#747488] text-sm">{principalInfo.specialization}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-gray-200">
                  <a
                    href={`mailto:${principalInfo.email}`}
                    className="flex items-center space-x-3 text-gray-700 hover:text-[#0D225C] group transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#CCB156]/15 flex items-center justify-center group-hover:bg-[#CCB156] transition-colors">
                      <Mail className="h-4 w-4 text-[#0D225C] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-medium hover:underline">{principalInfo.email}</span>
                  </a>
                  <a
                    href={`tel:${principalInfo.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center space-x-3 text-gray-700 hover:text-[#0D225C] group transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#CCB156]/15 flex items-center justify-center group-hover:bg-[#CCB156] transition-colors">
                      <Phone className="h-4 w-4 text-[#0D225C] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-medium hover:underline">{principalInfo.phone}</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-8 h-8 rounded-lg bg-[#CCB156]/15 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-[#0D225C]" />
                    </div>
                    <span className="text-sm">PBS Campus, Mysore</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Principal's Message */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-[#0D225C] mb-8">Message from the Principal</h2>
                <div className="prose prose-lg max-w-none">
                  {principalInfo.message.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-[#747488] leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-[#F0F0EA] rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-[#CCB156] rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0D225C]">Dr. Raghunandan G</h4>
                      <p className="text-[#747488] text-sm">Principal, Parivarthana Business School</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Vision */}
      <section className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Principal's Focus Areas</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Our commitment to technical education and practical skill development for employment readiness
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#CCB156] rounded-lg mb-4">
                  <point.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#0D225C] mb-3">{point.title}</h4>
                <p className="text-[#747488] leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Recognition & Achievements</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Celebrating excellence in educational leadership and academic contribution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-[#F0F0EA] rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0D225C] rounded-lg mb-4">
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-[#CCB156] font-bold text-sm mb-2">{achievement.year}</div>
                <h4 className="text-lg font-bold text-[#0D225C] mb-3">{achievement.title}</h4>
                <p className="text-[#747488] text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrincipalMessagePage;