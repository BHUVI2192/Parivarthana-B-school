import React from 'react';
import { Users, Award, BookOpen, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface AboutSectionProps {
  onNavigate: (page: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const stats = [
    { icon: Users, value: '300+', label: 'Students' },
    { icon: BookOpen, value: '7', label: 'Programs' },
    { icon: Award, value: '100+', label: 'Placements' },
    { icon: Users, value: '15+', label: 'Experienced Faculty Members' }
  ];

  return (
    <section className="py-20 bg-[#F0F0EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D225C] mb-6">
              About our Institution
            </h2>
            <p className="text-xl text-[#747488] mb-6 leading-relaxed">
              Welcome to Parivarthana Business School, Mysore, established in 2023-24 and governed by Om Shreenikethana Trust (R), Srirangapatna. We are a premier institution offering diverse academic programs in Management, Commerce, Computer Applications, and Law.
            </p>
            <p className="text-lg text-[#747488] mb-8 leading-relaxed">
              Our offerings include Under-Graduate Programs such as BCA, BBA, and B.Com, Post-Graduate Programs like MBA and MCA. At Parivarthana Business School, we are dedicated to fostering holistic development, academic excellence, and industry readiness to shape the professionals of tomorrow.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#CCB156] rounded-lg mb-3">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#0D225C] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#747488]">{stat.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('AboutPBS')}
              className="inline-flex items-center space-x-2 bg-[#0D225C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0D225C]/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#CCB156] rounded-2xl transform rotate-6"></div>
            <img
              src={getAssetUrl('about_institute.jpg')}
              alt="Campus view"
              className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-[#0D225C]">92%</div>
              <div className="text-sm text-[#747488]">Placement of our students</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;