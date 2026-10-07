import React from 'react';
import { Code, Users, Award, BookOpen, Target, Cpu } from 'lucide-react';
import { useFaculty } from '../hooks/useFaculty';
import { getAssetUrl } from '../utils/assets';
import { SyllabusDownloadButton } from '../components/SyllabusDownloadButton';

const MCAPage: React.FC = () => {
  const { faculty, loading } = useFaculty('MCA');

  const features = [
    {
      icon: Code,
      title: 'Advanced Programming',
      description: 'Master advanced programming concepts and software development methodologies'
    },
    {
      icon: Users,
      title: 'Industry Experts',
      description: 'Learn from faculty with extensive IT industry and research experience'
    },
    {
      icon: Award,
      title: 'Research Focus',
      description: 'Engage in cutting-edge research projects and thesis work'
    },
    {
      icon: BookOpen,
      title: 'Emerging Technologies',
      description: 'Stay ahead with training in AI, ML, cloud computing, and data science'
    }
  ];


  return (
    <div className="min-h-screen bg-[#F0F0EA]">
      {/* Hero Section */}
      <section className="relative bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
              <Code className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Master of Computer Applications</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Advanced computing education for tomorrow's technology leaders and innovators
            </p>
          </div>
        </div>
      </section>

      {/* Short Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl text-[#747488] max-w-4xl mx-auto leading-relaxed">
              The MCA program at Parivarthana Business School equips students with advanced technical skills, 
              research capabilities, and theoretical knowledge required for leadership roles in the rapidly 
              evolving IT industry and technology sector.
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
                The Master of Computer Applications (MCA) is a comprehensive 2-year post-graduate program 
                affiliated with the University of Mysore. The program provides advanced knowledge in 
                computer science, software engineering, and emerging technologies.
              </p>
              <p className="text-lg text-[#747488] mb-6 leading-relaxed">
                Our MCA curriculum covers advanced programming, system design, database management, 
                artificial intelligence, machine learning, and research methodologies. Students develop 
                both technical expertise and research skills essential for technology leadership.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">2 Years</div>
                  <div className="text-sm text-[#747488]">Program Duration</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">60 Seats</div>
                  <div className="text-sm text-[#747488]">Annual Intake</div>
                </div>
              </div>
              <SyllabusDownloadButton programId="MCA" />
            </div>
            <div className="relative">
              <img
                src={getAssetUrl('MCA.jpg')}
                alt="MCA Program"
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
              The MCA Department at PBS is committed to excellence in advanced computing education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Department Overview</h3>
              <p className="text-lg text-[#747488] mb-6 leading-relaxed">
                The MCA Department has been established to provide advanced education in computer 
                applications and prepare students for leadership roles in the IT industry. The 
                department focuses on research, innovation, and cutting-edge technology.
              </p>
              <p className="text-lg text-[#747488] leading-relaxed">
                We emphasize research-oriented learning, industry collaborations, and exposure to 
                emerging technologies, ensuring our graduates are prepared for the future of technology.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Department Strengths</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-[#747488]">Advanced research labs and computing infrastructure</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-[#747488]">Faculty with Ph.D. and industry research experience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-[#747488]">Strong focus on research and innovation projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-[#747488]">Collaboration with leading technology companies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-[#747488]">Outstanding placement record in top IT companies</span>
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
              Distinctive features that make our MCA program cutting-edge
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-600 rounded-lg mb-4">
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
                <div className="text-3xl mb-2">🧠</div>
                <h4 className="font-semibold text-[#0D225C] mb-2">AI & Machine Learning</h4>
                <p className="text-sm text-[#747488]">Advanced training in AI and ML technologies</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">☁️</div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Cloud Computing</h4>
                <p className="text-sm text-[#747488]">Expertise in cloud platforms and services</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">📊</div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Data Science</h4>
                <p className="text-sm text-[#747488]">Advanced data analytics and visualization</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🔐</div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Cybersecurity</h4>
                <p className="text-sm text-[#747488]">Advanced security concepts and practices</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">📱</div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Mobile Computing</h4>
                <p className="text-sm text-[#747488]">Advanced mobile app development</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🔬</div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Research Projects</h4>
                <p className="text-sm text-[#747488]">Independent research and thesis work</p>
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
              Learn from distinguished faculty members with advanced degrees and research expertise
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
                  <p className="text-purple-600 font-semibold mb-3">{member.designation}</p>
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
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#0D225C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
        href="https://pbs-mca.blogspot.com/"
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

export default MCAPage;