import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import NewsSection from '../components/NewsSection';
import AboutSection from '../components/AboutSection';
import LifeAtPBS from '../components/LifeAtPBS';
import HomePrograms from '../components/HomePrograms';
import AdmissionEnquiryPopup from '../components/AdmissionEnquiryPopup';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds when component mounts
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <NewsSection />
      <AboutSection onNavigate={onNavigate} />
      <HomePrograms onNavigate={onNavigate} />
      <LifeAtPBS />
      
      <AdmissionEnquiryPopup 
        isOpen={showPopup} 
        onClose={handleClosePopup} 
      />
    </>
  );
};

export default HomePage;
