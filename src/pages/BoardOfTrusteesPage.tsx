import React from 'react';
import { Crown, Users, Award, MessageCircle, Mail, Phone } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const BoardOfTrusteesPage: React.FC = () => {
  const trustees = [
    {
      name: 'Dr. Puttegowda M.',
      position: 'Founder Trustee & Chairman',
      image: 'puttegowda.jpg',
      bio: 'Founder Trustee & Chairman of Oom Shreenikethana Trust, Srirangapatna. A visionary leader dedicated to quality education and transformative learning experiences.',
      qualifications: 'Former Judge, Political Leader',
      experience: 'Founder & Educational Visionary'
    },
    {
      name: 'Shri. B. V. Kumar',
      position: 'Convenor Trustee and Treasurer',
      image: 'BVKumar.jpg',
      bio: 'Convenor Trustee and Treasurer of Oom Shreenikethana Trust, Srirangapatna. Committed to creating a learning ecosystem that encourages critical thinking and innovation.',
      qualifications: 'Financial Management Expert',
      experience: 'Educational Leadership & Finance'
    },
    {
      name: 'Dr. K.B. Dhananjaya',
      position: 'Treasurer and Trustee, Oom Shreenikethana Trust, Srirangapatna',
      image: 'Dhananjay.jpg',
      bio: 'Treasurer committed to academic excellence and student success. Believes in empowering individuals through quality education and character development.',
      qualifications: 'Ph.D.',
      experience: 'Academic Excellence & Administration'
    },
    {
      name: 'Mr. Manjuram P.',
      position: 'Managing Director',
      image: 'Manjuram.jpg',
      bio: 'Managing Director of Parivarthana Business School, Mysuru. Committed to providing top-tier business education and nurturing ethical leaders for positive change.',
      qualifications: 'Business Leadership Expert',
      experience: 'Educational Management & Leadership'
    }
  ];

  const managementMessages = [
    {
      name: 'Dr. Puttegowda M.',
      position: 'Founder Trustee & Chairman, Oom Shreenikethana Trust, Srirangapatna',
      image: 'puttegowda.jpg',
      message: `Parivarthana Business School stands as a beacon of quality education, unwavering commitment, and transformative learning experiences. Our Institution is not just a place of academic pursuit; it's a nurturing ground for future leaders, innovators, and changemakers. We are devoted to fostering an environment where students can harness their potential, push boundaries, and cultivate skills that will serve them well in their careers and beyond. Our approach to education goes beyond textbooks and classrooms. We believe in holistic growth, empowering our students to be adaptable, ethical, and empathetic individuals.`
    },
    {
      name: 'Shri. B. V. Kumar',
      position: 'Convenor Trustee and Treasurer, Oom Shreenikethana Trust, Srirangapatna',
      image: 'BVKumar.jpg',
      message: `Parivarthana Business School is more than an institution; it's a community of individuals with shared goals and aspirations. Together, we contribute to the growth of our students, the advancement of knowledge, and the betterment of society. As a leader in education, we are committed to imparting knowledge that aligns with the evolving demands of the business world. We strive to create a learning ecosystem that encourages critical thinking, collaboration, and innovation. We are dedicated to equipping our students with not just theoretical insights, but also the practical skills needed to thrive in today's dynamic landscape.`
    },
    {
      name: 'Dr. K.B. Dhananjaya',
      position: 'Treasurer and Trustee, Oom Shreenikethana Trust, Srirangapatna',
      image: 'Dhananjay.jpg',
      message: `The primary goal of education should be empowering individuals to be successful in life. Secondary goals include establishing values, social skills, and work ethic. A good education system produces good citizens who are well-educated, well-mannered and disciplined. A good education system helps in the development of a country. It helps in the advancement of technology and science. It helps in the development of the economy of the country. We are committed to academic excellence sets the tone for student success. This commitment involves providing high-quality education, engaging curriculum through outreach activities.`
    },
    {
      name: 'Mr. Manjuram P.',
      position: 'Managing Director',
      image: 'Manjuram.jpg',
      message: `At Parivarthana Business School, we recognize the pivotal role education plays in shaping individuals and societies. Our commitment to providing a top-tier business education is unwavering. We aim to be a catalyst in propelling our students towards excellence, equipping them with the tools to thrive in a dynamic and ever-evolving business landscape. Our approach is holistic, emphasizing not only academic rigor but also personal growth and character development. We believe in nurturing not just professionals, but ethical leaders who will drive positive change in their organizations and communities.`
    }
  ];

  const chairmanMessage = {
    name: 'Dr. Puttegowda M.',
    position: 'Founder Trustee & Chairman, Oom Shreenikethana Trust, Srirangapatna',
    image: '/puttegowda.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    message: `Dear Students, Faculty, and Well-wishers,

It gives me immense pleasure to welcome you to the Om Shrinekethana Trust family. As the Chairman of the Board of Trustees, I am proud to share our journey of transforming lives through quality education and holistic development.

Our trust was founded on the fundamental belief that education is the most powerful tool for social transformation. Over the years, we have remained committed to this vision, establishing institutions that not only impart knowledge but also build character, foster innovation, and nurture responsible citizenship.

Parivarthana Business School stands as a testament to our commitment to excellence. The name 'Parivarthana' itself means transformation, and that is exactly what we aim to achieve - transforming young minds into capable professionals and compassionate human beings.

Our approach to education goes beyond traditional classroom learning. We believe in creating an environment that encourages critical thinking, creativity, and collaboration. Our faculty members are not just teachers but mentors who guide students on their journey of self-discovery and professional growth.

As we move forward, we remain dedicated to our core values of integrity, excellence, and service to society. We will continue to innovate, adapt, and evolve to meet the changing needs of our students and the industry.

I invite you to be part of this transformative journey. Together, let us build a future where education empowers every individual to reach their full potential and contribute meaningfully to society.

With warm regards and best wishes for your success.`
  };

  return (
    <div className="min-h-screen bg-[#F0F0EA]">
      {/* Hero Section */}
      <section className="relative bg-[#0D225C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Board of Trustees</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionary leaders guiding our institution towards excellence
            </p>
          </div>
        </div>
      </section>

      {/* Management Messages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#CCB156] rounded-full mb-6">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Messages from the Management</h2>
          </div>

          <div className="space-y-12">
            {managementMessages.map((message, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-6 mb-6">
                  <img
                    src={getAssetUrl(message.image)}
                    alt={message.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-[#CCB156] flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-[#0D225C] mb-2">{message.name}</h3>
                    <p className="text-[#CCB156] font-semibold">{message.position}</p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-[#747488] leading-relaxed">{message.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Governance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Governance Structure</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Our transparent and effective governance ensures accountability and strategic direction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-[#F0F0EA] rounded-xl p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0D225C] rounded-lg mb-4">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#0D225C] mb-2">Strategic Leadership</h4>
              <p className="text-[#747488] text-sm">Providing vision and strategic direction for institutional growth</p>
            </div>
            
            <div className="text-center bg-[#F0F0EA] rounded-xl p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#CCB156] rounded-lg mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#0D225C] mb-2">Collaborative Decision</h4>
              <p className="text-[#747488] text-sm">Ensuring collective wisdom in all major decisions</p>
            </div>
            
            <div className="text-center bg-[#F0F0EA] rounded-xl p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#0D225C] mb-2">Quality Assurance</h4>
              <p className="text-[#747488] text-sm">Maintaining highest standards in education and administration</p>
            </div>
            
            <div className="text-center bg-[#F0F0EA] rounded-xl p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#0D225C] mb-2">Stakeholder Engagement</h4>
              <p className="text-[#747488] text-sm">Active communication with all stakeholders</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoardOfTrusteesPage;