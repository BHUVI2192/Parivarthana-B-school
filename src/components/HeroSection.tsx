import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: "Admissions Open 2026-27",
      title: "Excellence in Higher Education",
      subtitle: "Shaping Future Leaders Through Innovation and Knowledge",
      description: "Join our prestigious institution where academic excellence meets cutting-edge research and holistic development in Mysore.",
      cta: "Explore Programs",
      targetPage: "UnderGraduatePrograms",
      secondaryCta: "Apply Now",
      secondaryTarget: "UnderGraduateAdmission",
      image: "/building.jpg"
    },
    {
      badge: "Industry-Driven Curriculum",
      title: "Research & Innovation Hub",
      subtitle: "Advancing Knowledge Through Breakthrough Research",
      description: "Our state-of-the-art facilities and renowned faculty drive corporate-readiness across MBA, MCA, BBA, BCA, and B.Com programs.",
      cta: "Postgraduate Studies",
      targetPage: "PostGraduatePrograms",
      secondaryCta: "Campus Facilities",
      secondaryTarget: "facilities",
      image: "/research.jpg"
    },
    {
      badge: "100% Placement Support",
      title: "Global Learning Community",
      subtitle: "Connect, Collaborate, and Create Impact Worldwide",
      description: "Experience diverse perspectives and build lifelong corporate connections through our Training and Placement (TAP) Cell.",
      cta: "Placement Records",
      targetPage: "TrainingandPlacementCell(TAP)",
      secondaryCta: "About PBS",
      secondaryTarget: "AboutPBS",
      image: "/global.jpeg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden font-sans">
      {/* Hero Carousel Section */}
      <section className="relative min-h-[90vh] lg:h-screen flex items-center overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000"
              style={{ backgroundImage: `url(${getAssetUrl(slide.image)})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D225C]/95 via-[#0D225C]/80 to-[#0D225C]/50" />
            </div>

            {/* Slide Content */}
            <div className="relative z-20 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
                <div className="max-w-3xl space-y-6 animate-fade-in">
                  {/* Floating Badge */}
                  <div className="inline-flex items-center space-x-2 bg-[#CCB156]/20 border border-[#CCB156]/40 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#CCB156] shadow-sm animate-pulse-glow">
                    <Sparkles className="h-4 w-4" />
                    <span>{slide.badge}</span>
                  </div>

                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
                    {slide.title}
                  </h1>

                  <h2 className="text-xl sm:text-2xl text-[#CCB156] font-semibold leading-snug">
                    {slide.subtitle}
                  </h2>

                  <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl font-light">
                    {slide.description}
                  </p>

                  {/* Interactive CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button
                      onClick={() => onNavigate(slide.targetPage)}
                      className="flex items-center space-x-2.5 bg-[#CCB156] hover:bg-[#bfa54d] text-[#0D225C] px-7 py-3.5 rounded-2xl font-extrabold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group cursor-pointer"
                    >
                      <span>{slide.cta}</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => onNavigate(slide.secondaryTarget)}
                      className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                      <span>{slide.secondaryCta}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Left/Right Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/30 text-white p-3 rounded-2xl backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/30 text-white p-3 rounded-2xl backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3 bg-[#0D225C]/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-8 h-2.5 bg-[#CCB156] shadow-md' 
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Accreditations & Recognitions Banner */}
      <section className="bg-white py-8 border-b border-gray-100 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50/70 hover:bg-gray-50 border border-gray-100 hover:border-[#CCB156]/40 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-white rounded-xl p-2 flex items-center justify-center shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform">
                <img src={getAssetUrl('uom_logo.svg')} alt="University of Mysore" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#CCB156] uppercase tracking-wider block">Affiliation</span>
                <h4 className="text-sm sm:text-base font-extrabold text-[#0D225C]">University of Mysore</h4>
                <p className="text-xs text-gray-500">Affiliated Higher Education Institution</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50/70 hover:bg-gray-50 border border-gray-100 hover:border-[#CCB156]/40 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-white rounded-xl p-2 flex items-center justify-center shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform">
                <img src={getAssetUrl('the-karnataka-government-kannada-seeklogo.png')} alt="Govt of Karnataka" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#CCB156] uppercase tracking-wider block">Approval</span>
                <h4 className="text-sm sm:text-base font-extrabold text-[#0D225C]">Government of Karnataka</h4>
                <p className="text-xs text-gray-500">Approved by Department of Higher Education</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50/70 hover:bg-gray-50 border border-gray-100 hover:border-[#CCB156]/40 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-white rounded-xl p-2 flex items-center justify-center shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform">
                <img src={getAssetUrl('aicte_logo.png')} alt="AICTE Approved" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#CCB156] uppercase tracking-wider block">Accreditation</span>
                <h4 className="text-sm sm:text-base font-extrabold text-[#0D225C]">AICTE New Delhi</h4>
                <p className="text-xs text-gray-500">Programs Approved by AICTE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;