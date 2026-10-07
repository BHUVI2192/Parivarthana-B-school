import React from 'react';
import { Users, Heart, Award, Building, Target, Eye } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const AboutTrustPage: React.FC = () => {
  const trustValues = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We believe in nurturing every individual with care and understanding.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in education and character building.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We foster a sense of belonging and collective growth.'
    },
    {
      icon: Building,
      title: 'Integrity',
      description: 'We uphold honesty and moral principles in all our endeavors.'
    }
  ];

  const milestones = [
    { year: '1995', event: 'Om Shrinekethana Trust (R) established' },
    { year: '2000', event: 'First educational initiative launched' },
    { year: '2010', event: 'Expanded to multiple educational programs' },
    { year: '2023', event: 'Parivarthana Business School established' },
    { year: '2025', event: 'Parivarthana Law School launched' }
  ];

  return (
    <div className="min-h-screen bg-[#F0F0EA]">
      {/* Hero Section */}
      <section className="relative bg-[#0D225C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Oom Shrinekethana Trust</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Dedicated to transforming lives through quality education and holistic development
            </p>
          </div>
        </div>
      </section>

      {/* Trust Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0D225C] mb-6">About Trust</h2>
              <p className="text-lg text-[#747488] mb-6 leading-relaxed">
                The inception of the Oom Shreenikethana Trust (OSNT) on December 29, 1982, marked 
                a significant milestone in the pursuit of delivering quality higher education for all. 
                This institution was established upon the bedrock of steadfast values, unwavering 
                discipline, and a resolute commitment to nurturing capable individuals for the 
                betterment of society.
              </p>
              <p className="text-lg text-[#747488] mb-6 leading-relaxed">
                Guided by the visionary leadership of Dr. M Puttegowda, The founder Chairman, OSNT, 
                this institution represents the embodiment of a self-made individual. Dr. Puttegowda's 
                early roles as a Judge and a participant in the realm of Politics laid the foundation 
                for his eventual devotion to education.
              </p>
            </div>
            <div className="relative">
              <img
                src={getAssetUrl('OSNTlogo.jpg')}
                alt="Trust building"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-[#0D225C]">42+</div>
                <div className="text-sm text-[#747488]">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center bg-white rounded-xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0D225C] rounded-full mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#0D225C] mb-4">Our Mission</h3>
              <p className="text-lg text-[#747488] leading-relaxed">
                To provide transformative educational experience that empower individuals to 
                become responsible citizens, innovative leaders, and compassionate human beings 
                who contribute positively to society and the global community.
              </p>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#CCB156] rounded-full mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#0D225C] mb-4">Our Vision</h3>
              <p className="text-lg text-[#747488] leading-relaxed">
                To be a leading educational trust recognized for excellence in holistic education, 
                innovation in teaching methodologies, and commitment to social responsibility, 
                creating a lasting positive impact on society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Our Core Values</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              The fundamental principles that guide our trust in all its endeavors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustValues.map((value, index) => (
              <div key={index} className="text-center bg-[#F0F0EA] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#CCB156] rounded-lg mb-4">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#0D225C] mb-3">{value.title}</h4>
                <p className="text-[#747488] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Our Journey</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Key milestones in our trust's commitment to educational excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#CCB156]"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-[#CCB156] mb-2">{milestone.year}</div>
                      <div className="text-[#747488]">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-[#0D225C] rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Trust Initiatives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Our Initiatives</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Educational institutions and programs under Om Shrinekethana Trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F0F0EA] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Oom Shreenikethana School & PU College</h3>
              <p className="text-[#747488] mb-4 leading-relaxed">
                Oom Shreenikethana School & PU College was founded on December 29, 1984, by the Oom Shreenikethana Trust, under the guidance of Dr. M. Puttegowda, Advocate and Retired Judge. His vision for establishing the school was to provide accessible education to the rural communities of Srirangapatna. We are one team working towards the mission of fostering an environment of equity and opportunity. We educate students to be self-directed learners, collaborative workers, complex thinkers, quality producers, and community contributors.
              </p>
            </div>

            <div className="bg-[#F0F0EA] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Parivarthana Residential School & PU College</h3>
              <p className="text-[#747488] mb-4 leading-relaxed">
                Welcome to Parivarthana Residential School & PU College, Srirangapatna. Parivarthana is the visionary creation of our honorable chairman, Dr. M. Puttegowda, an eminent advocate and educationist with a passion for shaping young minds. Established in 2015, the institution was founded to provide unique and transformative educational experiences within a residential system. Nestled amidst serene natural surroundings on the banks of the river Kaveri, Parivarthana is a place where learning truly sparks transformation. With its lush green campus and commitment to academic excellence, Parivarthana provides an inspiring environment where students can thrive academically, socially, and personally.
              </p>
            </div>

            <div className="bg-[#F0F0EA] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Parivarthana Business School</h3>
              <p className="text-[#747488] mb-4 leading-relaxed">
                Established in 2023-24, offering comprehensive programs in Management, Commerce,
                and Computer Applications with a focus on industry readiness and holistic development.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#CCB156] rounded-full"></div>
                  <span className="text-[#747488] text-sm">B.Com, BBA, BCA Programs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#CCB156] rounded-full"></div>
                  <span className="text-[#747488] text-sm">MBA, MCA Programs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#CCB156] rounded-full"></div>
                  <span className="text-[#747488] text-sm">Industry-Oriented Curriculum</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F0F0EA] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Parivarthana Law School</h3>
              <p className="text-[#747488] mb-4 leading-relaxed">
                Launching in 2025, affiliated with Karnataka State Law University (KSLU),
                committed to delivering quality legal education with practical exposure.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#CCB156] rounded-full"></div>
                  <span className="text-[#747488] text-sm">BBA LLB, LLB Programs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#CCB156] rounded-full"></div>
                  <span className="text-[#747488] text-sm">Moot Court Training</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#CCB156] rounded-full"></div>
                  <span className="text-[#747488] text-sm">Legal Aid Clinic</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTrustPage;