import React from 'react';
import { MapPin, Phone, Mail, Clock, Users, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['9740119888', '9740129888'],
      color: 'bg-[#0D225C]'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@parivarthanabschool.in'],
      color: 'bg-[#CCB156]'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['436/B, Hebbal, Mysuru, Karnataka 570016'],
      color: 'bg-green-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
      color: 'bg-blue-600'
    }
  ];

  const departments = [
    {
      name: 'Admissions Office',
      email: 'info@parivarthanabschool.in',
      phone: '+91 9740119888',
      description: 'For admission inquiries and application support'
    },
    {
      name: 'Administration Office',
      email: 'administrator@parivarthanabschool.in',
      phone: '+91 9740129888',
      description: 'For academic queries and course information'
    },
    {
      name: 'Training & Placement Cell',
      email: 'placements@parivarthanabschool.in',
      phone: '+91 97389 51352',
      description: 'For placement and career guidance'
    },
    {
      name: 'Principal\'s Office',
      email: 'principal@parivarthanabschool.in',
      phone: '+91 99450 57222',
      description: 'Office of the Principal'
    },
    {
      name: 'Conference Enquiries',
      email: 'conference@parivarthanabschool.in',
      phone: '+91 9740119888',
      description: 'For hosting a conference in Campus'
    },
    {
      name: 'General Information',
      email: 'info@parivarthanabschool.in',
      phone: '+91 9740119888',
      description: 'For general inquiries and information'
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with us for any inquiries or support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Get In Touch</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              We're here to help you with any questions or concerns you may have
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center bg-[#F0F0EA] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`inline-flex items-center justify-center w-14 h-14 ${info.color} rounded-lg mb-4`}>
                  <info.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#0D225C] mb-3">{info.title}</h4>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-[#747488] leading-relaxed">
                      {info.title === 'Phone Numbers' ? (
                        <a href={`tel:${detail}`} className="hover:text-[#0D225C] transition-colors">
                          {detail}
                        </a>
                      ) : info.title === 'Email Address' ? (
                        <a href={`mailto:${detail}`} className="hover:text-[#0D225C] transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Department Contacts</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Contact specific departments for specialized assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#CCB156] p-3 rounded-lg flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#0D225C] mb-2">{dept.name}</h4>
                    <p className="text-[#747488] mb-4">{dept.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-[#CCB156]" />
                        <a href={`mailto:${dept.email}`} className="text-[#747488] hover:text-[#0D225C] transition-colors">
                          {dept.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-[#CCB156]" />
                        <a href={`tel:${dept.phone}`} className="text-[#747488] hover:text-[#0D225C] transition-colors">
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Find Us</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Visit our campus located in the heart of Mysuru
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Campus Location</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-[#CCB156] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#0D225C] mb-1">Address</h4>
                    <p className="text-[#747488]">436/B, Hebbal, Mysuru, Karnataka 570016</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-[#CCB156] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#0D225C] mb-1">Phone</h4>
                    <p className="text-[#747488]">
                      <a href="tel:9740119888" className="hover:text-[#0D225C] transition-colors">9740119888</a> / 
                      <a href="tel:9740129888" className="hover:text-[#0D225C] transition-colors ml-1">9740129888</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-[#CCB156] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#0D225C] mb-1">Email</h4>
                    <p className="text-[#747488]">
                      <a href="mailto:info@parivarthanabschool.in" className="hover:text-[#0D225C] transition-colors">
                        info@parivarthanabschool.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#F0F0EA] rounded-lg">
                <h4 className="font-semibold text-[#0D225C] mb-3">Directions</h4>
                <p className="text-[#747488] text-sm leading-relaxed">
                  Our campus is conveniently located in Hebbal, Mysuru. The campus is easily accessible 
                  by public transport and has ample parking facilities for visitors.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#F0F0EA] p-4 rounded-xl shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.4783338490743!2d76.62574497483037!3d12.350858787910362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7bc82859704d%3A0x1f3aa5f08a0e70f0!2sParivarthana%20Business%20school!5e0!3m2!1sen!2sin!4v1760807491548!5m2!1sen!2sin" 
                  width="100%" 
                  height="400" 
                  style={{border:0, borderRadius: '8px'}} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Parivarthana Business School Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#0D225C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to learn more about our programs and admission process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9740119888"
              className="bg-[#CCB156] text-[#0D225C] px-8 py-4 rounded-lg font-semibold hover:bg-[#CCB156]/90 transition-all duration-300 hover:scale-105"
            >
              Call Now
            </a>
            <a
              href="mailto:info@parivarthanabschool.in"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;