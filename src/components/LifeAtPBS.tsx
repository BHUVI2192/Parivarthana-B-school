import React from 'react';
import { getAssetUrl } from '../utils/assets';

const LifeAtPBS: React.FC = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Expert Talks & Seminars',
      image: 'ExpertTalk2.jpg',
      size: 'large' // spans 2 columns
    },
    {
      id: 2,
      title: 'Cultural Festivals',
      image: 'cultural.jpg',
      size: 'medium'
    },
    {
      id: 3,
      title: 'Placement Offers',
      image: 'offerLetter..jpg',
      size: 'medium'
    },
    {
      id: 4,
      title: 'Sports & Athletics',
      image: 'sportsPBS.jpg',
      size: 'tall' // spans 2 rows
    },
    {
      id: 5,
      title: 'Industrial Visits',
      image: 'IndustryVisit.jpg',
      size: 'medium'
    },
    {
      id: 6,
      title: 'Research & Library',
      image: 'research.jpg',
      size: 'medium'
    },
    {
      id: 7,
      title: 'Graduation Day',
      image: 'graduation.jpg',
      size: 'large' // spans 2 columns
    },
    {
      id: 8,
      title: 'Campus Recruitment',
      image: 'Placement2.jpg',
      size: 'medium'
    },
    {
      id: 9,
      title: 'Social Outreach',
      image: 'SocialService.jpg',
      size: 'medium'
    }
  ];

  const getGridClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-1 h-64';
      case 'tall':
        return 'md:col-span-1 md:row-span-2 h-full min-h-[300px]';
      case 'medium':
      default:
        return 'md:col-span-1 md:row-span-1 h-64';
    }
  };

  return (
    <section className="py-20 bg-[#F0F0EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-[#CCB156]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[#0D225C] font-semibold text-sm tracking-wide uppercase">Campus Vibrancy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D225C] mb-6">
            Life at PBS
          </h2>
          <p className="text-xl text-[#747488] max-w-3xl mx-auto leading-relaxed">
            Experience the vibrant campus life at Parivarthana Business School through authentic moments from our campus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-max">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${getGridClasses(item.size)}`}
            >
              <img
                src={getAssetUrl(item.image)}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <div className="w-12 h-1 bg-[#CCB156] rounded-full"></div>
              </div>
              
              {/* Hover indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-3 h-3 border-2 border-white rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAtPBS;