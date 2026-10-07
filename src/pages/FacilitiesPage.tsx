import React, { useEffect } from 'react';
import { BookOpen, Trophy, Bus, Home, Users, Clock, FileText, Shield } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const FacilitiesPage: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  const libraryCommittee = [
    { sl: 1, name: 'Dr. Raghunandan G.', designation: 'Principal' },
    { sl: 2, name: 'Mr. Madesha', designation: 'Librarian & Coordinator' },
    { sl: 3, name: 'Mr. Shamanth Kumar B U', designation: 'Assistant Professor & HoD' },
    { sl: 4, name: 'Ms. Chaithra M. D.', designation: 'Assistant Professor' },
  ];

  const libraryCollection = [
    { type: 'Books', numbers: '8423' },
    { type: 'Print Journals', numbers: '10' },
    { type: 'Compact Discs', numbers: '150' },
    { type: 'Magazines', numbers: '3' },
    { type: 'Newspapers', numbers: '10' },
    { type: 'Online Journal (MBA)', numbers: '145' },
    { type: 'Online Journal (MCA)', numbers: '125' },
  ];

  return (
    <div className="min-h-screen bg-[#F0F0EA]">
      {/* Hero Section */}
      <section className="bg-[#0D225C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Facilities</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Discover our state-of-the-art facilities designed to enhance your academic experience and personal development
          </p>
        </div>
      </section>

      {/* Library & Information Centre Section */}
      <section id="library" className="py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-[#0D225C] p-4 rounded-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D225C]">
              Library & Information Centre
            </h2>
          </div>

          {/* Overview */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Overview</h3>
            <p className="text-[#747488] leading-relaxed mb-4">
              The library at Parivarthana Business School plays a vital role in supporting the curriculum needs of students and faculty through its comprehensive collections and services. Our library operates on an open access system, allowing users to browse and select materials freely.
            </p>
            <p className="text-[#747488] leading-relaxed">
              We offer a wide range of services including book loans, periodicals, and digital resources to facilitate teaching, learning, and research activities.
            </p>
          </div>

          {/* Library Committee */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Library Committee</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0D225C] text-white">
                    <th className="px-6 py-3 text-left">Sl. No.</th>
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-left">Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {libraryCommittee.map((member) => (
                    <tr key={member.sl} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 text-[#747488]">{member.sl}</td>
                      <td className="px-6 py-4 text-[#747488]">{member.name}</td>
                      <td className="px-6 py-4 text-[#747488]">{member.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="h-6 w-6 text-[#CCB156]" />
              <h3 className="text-2xl font-bold text-[#0D225C]">Working Hours</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#F0F0EA] p-4 rounded-lg">
                <p className="font-semibold text-[#0D225C] mb-2">Monday - Friday</p>
                <p className="text-[#747488]">9:30 AM - 5:15 PM</p>
              </div>
              <div className="bg-[#F0F0EA] p-4 rounded-lg">
                <p className="font-semibold text-[#0D225C] mb-2">Saturday</p>
                <p className="text-[#747488]">9:30 AM - 1:30 PM</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Library Services</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-[#0D225C] mb-3">Lending Service</h4>
                <p className="text-[#747488] leading-relaxed">
                  Books are issued for 10 days for students and for one semester for faculty members. Books can be reissued if they are not in demand by other users. This flexible system ensures maximum access to resources while maintaining availability for all users.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#0D225C] mb-3">Reference Service</h4>
                <p className="text-[#747488] leading-relaxed">
                  Reference materials are available for in-library use only. These specialized resources include encyclopedias, dictionaries, handbooks, and other essential reference works that support academic research and learning.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#0D225C] mb-3">Periodicals Service</h4>
                <p className="text-[#747488] leading-relaxed">
                  The library subscribes to a variety of print journals, magazines, and newspapers to support teaching and research activities. These periodicals cover a wide range of subjects relevant to our academic programs.
                </p>
              </div>
            </div>
          </div>

          {/* Journal Subscription Process */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Journal Subscription Process</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: 1, title: 'Recommendations', desc: 'Faculty submit journal requests' },
                { step: 2, title: 'Review', desc: 'Library committee reviews' },
                { step: 3, title: 'Approval', desc: 'Management approves' },
                { step: 4, title: 'Payment', desc: 'Finance processes subscription' },
                { step: 5, title: 'Access', desc: 'Journals made available' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="bg-[#CCB156] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-[#0D225C] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#747488]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Loss of Books Policy */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-[#CCB156]" />
              <h3 className="text-2xl font-bold text-[#0D225C]">Loss of Books Policy</h3>
            </div>
            <p className="text-[#747488] leading-relaxed mb-4">
              In case of loss or damage to library books, users are required to:
            </p>
            <ul className="space-y-2 text-[#747488]">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#CCB156] rounded-full mt-2 flex-shrink-0"></div>
                <span>Replace the lost or damaged book with a new copy of the same edition.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#CCB156] rounded-full mt-2 flex-shrink-0"></div>
                <span>Pay three times the cost of the book plus Rs. 50 as processing fee.</span>
              </li>
            </ul>
          </div>

          {/* Rules & Regulations */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Rules & Regulations</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'No personal belongings are allowed inside the library',
                'Mobile phones must be kept on silent mode',
                'Maintain silence in the library premises',
                'No food or drinks permitted',
                'Handle books and materials with care',
                'Return books on or before the due date',
                'Do not mark or damage library materials',
                'Follow the librarian\'s instructions at all times',
              ].map((rule, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#CCB156] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#747488]">{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Library Collection */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Library Collection</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0D225C] text-white">
                    <th className="px-6 py-3 text-left">Type of Document</th>
                    <th className="px-6 py-3 text-left">Numbers</th>
                  </tr>
                </thead>
                <tbody>
                  {libraryCollection.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 text-[#747488]">{item.type}</td>
                      <td className="px-6 py-4 text-[#747488] font-semibold">{item.numbers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Faculty Services */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Services for Faculty</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Reference Service',
                'OPAC (Online Public Access Catalogue)',
                'Internet Access',
                'Reprographic Service',
                'Orientation Programs',
                'Research Support',
              ].map((service, index) => (
                <div key={index} className="bg-[#F0F0EA] p-4 rounded-lg">
                  <p className="text-[#0D225C] font-semibold">{service}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Librarian Profile */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Librarian</h3>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img
                  src={getAssetUrl('Madesha.jpg')}
                  alt="Mr. Madesha"
                  className="w-48 h-48 rounded-lg object-cover shadow-md"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-[#0D225C] mb-4">Mr. Madesha</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-[#747488] mb-1">Designation</p>
                    <p className="text-[#0D225C] font-semibold">Librarian</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#747488] mb-1">Qualification</p>
                    <p className="text-[#0D225C] font-semibold">M.Lib.I.Sc.</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#747488] mb-1">Experience</p>
                    <p className="text-[#0D225C] font-semibold">7 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section id="sports" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-[#CCB156] p-4 rounded-lg">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D225C]">Sports</h2>
          </div>

          {/* Overview */}
          <div className="bg-[#F0F0EA] rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Promoting Physical & Mental Well-being</h3>
            <p className="text-[#747488] leading-relaxed mb-6">
              Sports play a crucial role in maintaining physical and mental health among students. At Parivarthana Business School, we believe in the holistic development of our students, which includes encouraging active participation in sports and physical activities.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-[#0D225C] mb-4">Indoor Facilities</h4>
                <div className="space-y-3">
                  {['Chess', 'Carrom', 'Table Tennis'].map((sport, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                      <div className="w-2 h-2 bg-[#CCB156] rounded-full"></div>
                      <span className="text-[#747488] font-medium">{sport}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#0D225C] mb-4">Outdoor Facilities</h4>
                <div className="space-y-3">
                  {['Cricket', 'Football', 'Athletics'].map((sport, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                      <div className="w-2 h-2 bg-[#CCB156] rounded-full"></div>
                      <span className="text-[#747488] font-medium">{sport}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Events */}
          <div className="bg-[#F0F0EA] rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Sports Events & Achievements</h3>

            <div className="space-y-8">
              {/* Intra-College Events */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="md:col-span-2 p-6">
                    <h4 className="text-xl font-semibold text-[#0D225C] mb-4">Intra-College Events</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-[#0D225C] mb-2">30-Yard Cricket Tournament</h5>
                        <p className="text-[#747488]">
                          Held annually on August 29<sup>th</sup> (National Sports Day), this tournament brings together students from all programs to compete in an exciting cricket format.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#0D225C] mb-2">Annual Sports Day</h5>
                        <p className="text-[#747488]">
                          A grand event where all students participate in various athletic competitions, team sports, and fun activities, promoting sportsmanship and college spirit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <img
                      src={getAssetUrl('sportsPBS.jpg')}
                      alt="Sports Events"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Inter-Collegiate Events */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="hidden md:block md:order-2">
                    <img
                      src={getAssetUrl('ExpertTalk2.jpg')}
                      alt="Inter-Collegiate Events"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6 md:order-1">
                    <h4 className="text-xl font-semibold text-[#0D225C] mb-4">Inter-Collegiate Events</h4>
                    <div>
                      <h5 className="font-semibold text-[#0D225C] mb-2">Mysore City Table Tennis Tournament</h5>
                      <p className="text-[#747488]">
                        Our students regularly participate in the prestigious Mysore City Table Tennis Tournament, competing against teams from colleges across the city.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* University Level Achievements */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="md:col-span-2 p-6">
                    <h4 className="text-xl font-semibold text-[#0D225C] mb-4">University Level Achievements</h4>
                    <div className="bg-[#CCB156]/10 border-l-4 border-[#CCB156] p-4 rounded">
                      <p className="text-[#0D225C] font-semibold mb-2">Gold Medal Winner</p>
                      <p className="text-[#747488]">
                        <span className="font-semibold">Varshith L.</span> (MBA 1st Year) won a gold medal in weightlifting at the university level competition, bringing pride to our institution.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <img
                      src={getAssetUrl('Achievement.jpg')}
                      alt="University Achievements"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section id="transportation" className="py-20 bg-[#F0F0EA] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-green-600 p-4 rounded-lg">
              <Bus className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D225C]">Transportation</h2>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Safe & Reliable Transport Services</h3>

            <div className="space-y-6">
              <p className="text-[#747488] leading-relaxed text-lg">
                The Om Shreenikethana Trust (OSNT) provides comprehensive transportation services for students and staff, ensuring safe and convenient travel to and from the campus.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#F0F0EA] p-6 rounded-lg">
                  <h4 className="font-semibold text-[#0D225C] mb-3">Coverage Area</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-[#747488]">Mysore City</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-[#747488]">Srirangapattana</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-[#747488]">Surrounding Areas</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F0F0EA] p-6 rounded-lg">
                  <h4 className="font-semibold text-[#0D225C] mb-3">Fleet Information</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-[#747488]">10 Campus Vehicles</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-[#747488]">2 Dedicated Bus </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
                <h4 className="font-semibold text-[#0D225C] mb-3">Safety Features</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-[#747488]">CCTV Cameras installed in all vehicles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-[#747488]">GPS tracking for real-time monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel Section */}
      <section id="hostel" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-blue-600 p-4 rounded-lg">
              <Home className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D225C]">Hostel</h2>
          </div>

          <div className="bg-[#F0F0EA] rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Home Away From Home</h3>

            <div className="space-y-6">
              <p className="text-[#747488] leading-relaxed text-lg">
                Our hostel facilities provide a safe, comfortable, and conducive environment for students to focus on their academic and personal growth. With dedicated residential wardens and 24/7 security, we ensure the well-being of all residents.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Girls' Hostel */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-[#0D225C] mb-4">Girls' Hostel</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-[#747488]">
                          <span className="font-semibold">Inaugurated:</span> 2015
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-[#747488]">
                          <span className="font-semibold">Capacity:</span> ~50 students
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-[#747488]">Dedicated female residential warden</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Boys' Hostel */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-[#0D225C] mb-4">Boys' Hostel</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-[#747488]">
                          <span className="font-semibold">Inaugurated:</span> 2025
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-[#747488]">
                          <span className="font-semibold">Capacity:</span> ~50 students
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-[#747488]">Dedicated male residential warden</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Facilities */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-[#0D225C] mb-4">Hostel Features</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Administrative Office',
                    '24/7 Security Personnel',
                    'Residential Wardens',
                    'Common Areas',
                    'Study Rooms',
                    'Recreation Facilities',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-[#747488]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;
