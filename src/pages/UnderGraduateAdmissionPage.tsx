import React from 'react';
import { FileText, Users, Award, CheckCircle, ExternalLink, GraduationCap } from 'lucide-react';

const UnderGraduateAdmissionPage: React.FC = () => {
  const documents = [
    'TC Original Copy and One Photo Copy',
    'Migration Certificate (if applicable)',
    'SSLC Original Marks Card and One Photo Copy',
    'II PUC Original Marks Card and One Photo Copy',
    'II PUC Attested Marks Sheet',
    'AADHAAR Photo Copy of Student & Parent/Guardian',
    'Caste & Income Certificate Photo Copy',
    'Passport size Photo - 8 Copies',
    'Bank Pass Book Photo Copy'
  ];

  const uucmsSteps = [
    'UUCMS New Candidate Registration',
    'Fill the application with the required information',
    'After completing the admission application, the student application request will be received by the office through UUCMS',
    'Once an application is received, the office will verify the students\' details and accept the application',
    'Once the application is accepted and verified by the college through UUCMS, students will receive a link in UUCMS to pay the university fees which is not included in the college fees',
    'After completing the above steps, the student will officially be admitted to the college and university'
  ];

  const scholarships = [
    {
      name: 'NSP Scholarships',
      description: 'For Minority, OBC and other than minority',
      link: 'https://scholarships.gov.in/otrapplication/#/registration-page'
    },
    {
      name: 'SSP Scholarships',
      description: 'For all students',
      link: 'https://ssp.postmatric.karnataka.gov.in/CA/'
    },
    {
      name: 'Labour Child Scholarship',
      description: 'For eligible students',
      link: 'https://klwbapps.karnataka.gov.in/student/register'
    },
    {
      name: 'Prize Money for SC/ST',
      description: 'For students who scored above 85% in previous years',
      link: 'https://swdservices.karnataka.gov.in/swprizemoney/Home.aspx?ReturnUrl=%2fswprizemoney%2f'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F0F0EA]">
      {/* Hero Section */}
      <section className="relative bg-[#0D225C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#CCB156] rounded-full mb-6">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Under-Graduate Admissions</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Your gateway to quality under-graduate education at Parivarthana Business School
            </p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">How to Apply</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Follow these simple steps to begin your admission process
            </p>
          </div>

          <div className="bg-[#F0F0EA] rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Application Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#CCB156] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <p className="text-[#747488] leading-relaxed">
                      By visiting the campus you can get to know about the courses offered and the facilities available.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#CCB156] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <p className="text-[#747488] leading-relaxed">
                      Interact with the Admission Committee and get the information about college and courses.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#CCB156] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <p className="text-[#747488] leading-relaxed">
                      Select your preferred course.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#CCB156] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <p className="text-[#747488] leading-relaxed">
                      Fill in the application with the correct details as requested and attach the required documents as mentioned below.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Campus visit"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Documents for UG Admission</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Please ensure you have all the required documents before applying
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              {documents.map((document, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-[#F0F0EA] rounded-lg">
                  <CheckCircle className="h-5 w-5 text-[#CCB156] flex-shrink-0 mt-0.5" />
                  <span className="text-[#747488]">{document}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-red-800 mb-2">Important Note:</h4>
                  <p className="text-red-700 text-sm">
                    All above mentioned documents (both hard & soft copy) must be carried by the student during the time of admission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UUCMS Portal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Admission through UUCMS Portal</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Complete your admission process through the Unified University and College Management System
            </p>
          </div>

          <div className="bg-[#F0F0EA] rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">About UUCMS</h3>
            <p className="text-lg text-[#747488] leading-relaxed mb-6">
              The Unified University and College Management System (UUCMS) is an integrated digital platform to 
              streamline and enhance the management of higher education institutions. The platform is designed to 
              provide a unified framework for the administration of universities and affiliated colleges, ensuring 
              transparency, efficiency, and absolute communication across various stakeholders.
            </p>
            <p className="text-lg text-[#747488] leading-relaxed">
              This platform offers a student centric approach to providing digital access to academic records, 
              services and improves the overall student experience.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">UUCMS Registration Process</h3>
            <p className="text-lg text-[#747488] mb-6 leading-relaxed">
              After completing the admission procedure at the college, the student will receive instructions from 
              the office to complete the admission procedure in UUCMS Portal through the link below.
            </p>
            
            <div className="bg-[#0D225C] p-4 rounded-lg mb-8">
              <a 
                href="https://uucms.karnataka.gov.in/Login/OnlineStudentRegistrationForm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-white hover:text-[#CCB156] transition-colors"
              >
                <span className="font-semibold">UUCMS Registration Portal</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <h4 className="text-xl font-bold text-[#0D225C] mb-6">Steps to Complete UUCMS Registration:</h4>
            <div className="space-y-4">
              {uucmsSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#CCB156] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-[#747488] leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Note:</h4>
                  <p className="text-blue-700 text-sm">
                    In case of any concerns and technical issues, the students may contact the concerned case worker at the PBS office.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Eligibility Criteria</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Academic requirements for under-graduate program admission
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-[#CCB156] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0D225C] mb-2">Merit-Based Admission</h4>
                  <p className="text-[#747488]">Admissions are strictly based on merit.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-[#CCB156] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0D225C] mb-2">Academic Qualification</h4>
                  <p className="text-[#747488]">
                    Any student who has passed PUC/10+2/Pre-University equivalent courses in Science, Commerce and Arts is eligible for admission.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-[#CCB156] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0D225C] mb-2">Timely Admission</h4>
                  <p className="text-[#747488]">
                    If a student does not join during the prescribed time the admission will be cancelled and the seat will be allotted to the next student.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <Award className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-yellow-800 mb-2">Note:</h4>
                  <p className="text-yellow-700 text-sm">
                    Management reserves the right to admission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Scholarships</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              We are committed to supporting students in their educational journey
            </p>
          </div>

          <div className="bg-[#F0F0EA] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6 text-center">Available Scholarships</h3>
            <p className="text-lg text-[#747488] mb-8 text-center leading-relaxed">
              The following scholarships are available for students:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {scholarships.map((scholarship, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-[#0D225C] mb-3">{scholarship.name}</h4>
                  <p className="text-[#747488] mb-4">{scholarship.description}</p>
                  <a
                    href={scholarship.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#0D225C] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0D225C]/90 transition-all duration-300 hover:scale-105"
                  >
                    <span>Apply Now</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnderGraduateAdmissionPage;