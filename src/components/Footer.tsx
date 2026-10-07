import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, GraduationCap, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'research', label: 'Research' },
    { id: 'UGCDisclosure', label: 'UGC Public Self-Disclosure' },
  ];

  const adminLinks = [
    { id: 'admin-login', label: 'Admin Login', isSpecial: true },
  ];

  const campusLinks = [
    { id: 'facilities', label: 'Facilities' },
    { id: 'contact', label: 'Library' },
    { id: 'contact', label: 'Student Life' },
    { id: 'contact', label: 'Career Services' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/pbs_mysuru?igsh=dXI3YTR6MDVyenc0', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/parivarthana-business-school/', color: 'hover:text-blue-700' },
  ];

  return (
    <footer className="bg-[#0D225C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={getAssetUrl('parivarthana-logo.png')}
                alt="Parivarthana Business School Logo"
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Parivarthana Buisness School</h3>
                <p className="text-sm text-gray-300">Experience the Empowerment</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Committed to fostering innovation, critical thinking, and leadership 
              among our students for over five decades.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#CCB156] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">
                    436/B, Hebbal, Mysuru,<br />
                    Karnataka 570016
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#CCB156]" />
                <p className="text-sm text-gray-300">9740119888 / 9740129888</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#CCB156]" />
                <p className="text-sm text-gray-300">info@parivarthanabschool.in</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-300 hover:text-[#CCB156] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Admin Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Admin</h4>
            <ul className="space-y-3">
              {adminLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-[#CCB156] hover:text-white transition-colors duration-300 text-sm font-semibold flex items-center space-x-2"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Campus Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Campus</h4>
            <ul className="space-y-3">
              {campusLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-300 hover:text-[#CCB156] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Connected</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our socials for the latest updates and news.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-300 ${social.color} transition-colors duration-300`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Parivarthana Buisness School. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-[#CCB156] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-[#CCB156] transition-colors duration-300">
                Terms of Service
              </a>
              <a
                href="https://formaculture.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#CCB156] transition-colors duration-300 font-medium"
              >
                Developed By Team Formaculture
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;