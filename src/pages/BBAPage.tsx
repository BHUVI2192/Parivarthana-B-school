import React from 'react';
import { GraduationCap, Users, Award, BookOpen, Target, TrendingUp } from 'lucide-react';
import { useFaculty } from '../hooks/useFaculty';
import { getAssetUrl } from '../utils/assets';
import { SyllabusDownloadButton } from '../components/SyllabusDownloadButton';

const BBAPage: React.FC = () => {
  const { faculty, loading } = useFaculty('BBA');
  const { faculty: languageFaculty } = useFaculty('Languages');

  const features = [
    {
      icon: TrendingUp,
      title: 'Industry-Oriented Curriculum',
      description: 'Curriculum designed to meet current industry demands and business practices'
    },
    {
      icon: Users,
      title: 'Experienced Faculty',
      description: 'Learn from faculty with extensive industry and academic experience'
    },
    {
      icon: Award,
      title: 'Practical Learning',
      description: 'Hands-on experience through case studies, projects, and internships'
    },
    {
      icon: BookOpen,
      title: 'Research Opportunities',
      description: 'Engage in business research and analytical projects'
    }
  ];


  return (
    <div className="min-h-screen bg-[#F0F0EA]">
      {/* Hero Section */}
      <section className="relative bg-[#0D225C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#CCB156] rounded-full mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Bachelor of Business Administration</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Building tomorrow's business leaders through comprehensive management education
            </p>
          </div>
        </div>
      </section>

      {/* Short Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl text-[#747488] max-w-4xl mx-auto leading-relaxed">
              The BBA program at Parivarthana Business School is designed to develop future business leaders 
              with strong analytical, communication, and leadership skills essential for success in today's 
              dynamic business environment.
            </p>
          </div>
        </div>
      </section>

      {/* About Program */}
      <section className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0D225C] mb-6">About the Program</h2>
              <p className="text-lg text-[#747488] mb-6 leading-relaxed">
                The Bachelor of Business Administration (BBA) is a comprehensive 3-year under-graduate program 
                affiliated with the University of Mysore. The program provides students with a solid foundation 
                in business principles, management practices, and entrepreneurial skills.
              </p>
              <p className="text-lg text-[#747488] mb-6 leading-relaxed">
                Our curriculum integrates theoretical knowledge with practical applications through case studies, 
                industry projects, internships, and guest lectures from industry experts. Students develop 
                critical thinking, problem-solving, and decision-making abilities essential for business success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-[#CCB156] mb-2">3 Years</div>
                  <div className="text-sm text-[#747488]">Program Duration</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-[#CCB156] mb-2">60 Seats</div>
                  <div className="text-sm text-[#747488]">Annual Intake</div>
                </div>
              </div>
              <SyllabusDownloadButton programId="BBA" />
            </div>
            <div className="relative">
              <img
                src={getAssetUrl('BBA.jpeg')}
                alt="BBA Program"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Department */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">About the Department</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              The Department of Business Administration at PBS is committed to excellence in management education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Department Overview</h3>
              <p className="text-lg text-[#747488] mb-6 leading-relaxed">
                Established with the vision of creating competent business professionals, the Department of 
                Business Administration focuses on holistic development of students through innovative teaching 
                methodologies, industry exposure, and research-oriented learning.
              </p>
              <p className="text-lg text-[#747488] leading-relaxed">
                The department maintains strong industry connections, ensuring that our curriculum remains 
                relevant and our students are well-prepared for the challenges of the modern business world.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Department Strengths</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#CCB156] rounded-full mt-2"></div>
                  <span className="text-[#747488]">Experienced and qualified faculty members</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#CCB156] rounded-full mt-2"></div>
                  <span className="text-[#747488]">Strong industry partnerships and collaborations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#CCB156] rounded-full mt-2"></div>
                  <span className="text-[#747488]">Modern infrastructure and learning facilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#CCB156] rounded-full mt-2"></div>
                  <span className="text-[#747488]">Focus on practical and experiential learning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#CCB156] rounded-full mt-2"></div>
                  <span className="text-[#747488]">Excellent placement record and career support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Salient Features */}
      <section className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Salient Features</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Distinctive features that make our BBA program stand out
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#CCB156] rounded-lg mb-4">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#0D225C] mb-3">{feature.title}</h4>
                <p className="text-[#747488] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6 text-center">Additional Program Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">📚</div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Comprehensive Curriculum</h4>
                <p className="text-sm text-[#747488]">Covers all aspects of business management</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🏢</div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Industry Exposure</h4>
                <p className="text-sm text-[#747488]">Regular industry visits and internships</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">💼</div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Placement Support</h4>
                <p className="text-sm text-[#747488]">Dedicated placement assistance</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Skill Development</h4>
                <p className="text-sm text-[#747488]">Focus on soft skills and personality development</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🌐</div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Global Perspective</h4>
                <p className="text-sm text-[#747488]">International business exposure</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🏆</div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Excellence Awards</h4>
                <p className="text-sm text-[#747488]">Recognition for outstanding performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Our Faculty</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Learn from experienced faculty members who bring both academic excellence and industry expertise
            </p>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#0D225C]"></div>
            </div>
          ) : faculty.length === 0 ? (
            <div className="text-center py-12 text-[#747488]">
              <p>No faculty information available at the moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {faculty.map((member) => (
                <div key={member.id} className="text-center bg-[#F0F0EA] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={getAssetUrl(member.photo_url) || 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-[#CCB156]"
                  />
                  <h4 className="text-xl font-bold text-[#0D225C] mb-2">{member.name}</h4>
                  <p className="text-[#CCB156] font-semibold mb-3">{member.designation}</p>
                  {(member.qualifications || member.experience) && (
                    <div className="text-left space-y-2">
                      {member.qualifications && (
                        <div>
                          <span className="font-semibold text-[#0D225C] text-sm">Qualifications: </span>
                          <span className="text-[#747488] text-sm">{member.qualifications}</span>
                        </div>
                      )}
                      {member.experience_years && (
                        <div>
                          <span className="font-semibold text-[#0D225C] text-sm">Experience: </span>
                          <span className="text-[#747488] text-sm">{member.experience_years}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Department of Languages */}
          {languageFaculty && languageFaculty.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-200">
              <div className="text-center mb-10">
                <span className="text-xs font-bold text-[#CCB156] uppercase tracking-wider block mb-1">
                  Allied Humanities
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0D225C]">Department of Languages</h3>
                <p className="text-sm text-[#747488] mt-1">Distinguished faculty for Kannada, English, and Language Studies</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {languageFaculty.map((member) => (
                  <div key={member.id} className="text-center bg-[#F0F0EA] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={getAssetUrl(member.photo_url) || 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-[#CCB156]"
                    />
                    <h4 className="text-xl font-bold text-[#0D225C] mb-2">{member.name}</h4>
                    <p className="text-[#CCB156] font-semibold mb-3">{member.designation}</p>
                    {(member.qualifications || member.experience_years) && (
                      <div className="text-left space-y-2">
                        {member.qualifications && (
                          <div>
                            <span className="font-semibold text-[#0D225C] text-sm">Qualifications: </span>
                            <span className="text-[#747488] text-sm">{member.qualifications}</span>
                          </div>
                        )}
                        {member.experience_years && (
                          <div>
                            <span className="font-semibold text-[#0D225C] text-sm">Experience: </span>
                            <span className="text-[#747488] text-sm">{member.experience_years}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#0D225C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
        href="https://pbs-bba.blogspot.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#CCB156] text-[#0D225C] px-8 py-4 rounded-lg font-semibold hover:bg-[#CCB156]/90 transition-all duration-300 hover:scale-105 inline-block"
      >
        Access the Study Material
      </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BBAPage;