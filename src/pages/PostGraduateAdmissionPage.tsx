import React from 'react';
import { FileText, Users, Award, CheckCircle, ExternalLink, GraduationCap, BookOpen } from 'lucide-react';

const PostGraduateAdmissionPage: React.FC = () => {

  const mcaMbaAdmission = {
    governmentQuota: {
      title: 'For admission under Government Quota',
      description: 'Candidates should appear in the PGCET conducted by Karnataka Examinations Authority',
      link: 'https://cetonline.karnataka.gov.in/kea/'
    },
    managementQuota: {
      title: 'For admission under Management Quota',
      description: 'Candidates should appear in either in the PGCET conducted by KEA or the KMAT conducted by KPPGCA, or both.',
      links: [
        { label: 'KEA PGCET', url: 'https://cetonline.karnataka.gov.in/kea/' },
        { label: 'KMAT India', url: 'https://kmatindia.com/' }
      ]
    }
  };

  const mbaEligibility = [
    {
      quota: 'Government Quota',
      requirements: [
        'Minimum 50 percent marks in any Bachelor\'s Degree (45% For SC/ST)',
        'Passing / Clearing in PGCET conducted by Karnataka Examination Authority'
      ]
    },
    {
      quota: 'Management Quota',
      requirements: [
        'Minimum 50 percent marks in any Bachelor\'s Degree (45% For SC/ST)',
        'Passing / Clearing KMAT (Conducted by Karnataka Private Post Graduate Colleges Association) / PGCET (conducted by Karnataka Examination Authority) / CMAT (Conducted by AICTE) / CAT / MAT'
      ]
    }
  ];

  const mcaEligibility = [
    'Passed BCA/ Bachelor Degree in Computer Science Engineering or equivalent Degree',
    'Passed B.Sc./ B.Com./ B.A. with Mathematics at 10+2 Level or at Graduation Level (with additional bridge Courses as per the norms of the concerned University)',
    'Admission to MCA course shall be open for candidates who have passed the Bachelor degree examinations with not less than 50% of the marks in the aggregate of all the years of the Degree examinations',
    'However, in the case of candidates from Karnataka belonging to SC/ST and Category-I, the aggregate percentage of marks in the qualifying examinations shall not be less than 45%',
    'For admission to MCA, the candidate shall have passed Bachelor Degree with not less than 50% of marks with Mathematics / Statistics / Computer Science / Computer Programming / Computer Application / Business Mathematics / Business Statistics as one of the optional or electives at degree level',
    'In respect of candidates who have studied and passed one of the subjects specified in the first provision in the Pre-university course with 50% of marks in that subject shall also be considered for admission',
    'However, in the case of candidates belonging to SC/ST and Category-I, 45% of marks in that subject shall also be considered for admission'
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Post-Graduate Admissions</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Advance your career with our specialized post-graduate programs
            </p>
          </div>
        </div>
      </section>

      {/* Entrance Examinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">Entrance Examinations for Admission</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Information about required entrance examinations for different post-graduate programs
            </p>
          </div>

          {/* MCA & MBA Programs */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-8 text-center">For admission to MCA & MBA Programmes</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Government Quota */}
              <div className="bg-[#F0F0EA] p-6 rounded-xl">
                <h4 className="text-xl font-bold text-[#0D225C] mb-4">{mcaMbaAdmission.governmentQuota.title}</h4>
                <p className="text-[#747488] mb-4 leading-relaxed">{mcaMbaAdmission.governmentQuota.description}</p>
                <a
                  href={mcaMbaAdmission.governmentQuota.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#0D225C] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0D225C]/90 transition-all duration-300"
                >
                  <span>KEA Portal</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Management Quota */}
              <div className="bg-[#F0F0EA] p-6 rounded-xl">
                <h4 className="text-xl font-bold text-[#0D225C] mb-4">{mcaMbaAdmission.managementQuota.title}</h4>
                <p className="text-[#747488] mb-4 leading-relaxed">{mcaMbaAdmission.managementQuota.description}</p>
                <div className="space-y-2">
                  {mcaMbaAdmission.managementQuota.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-[#CCB156] text-[#0D225C] px-4 py-2 rounded-lg font-semibold hover:bg-[#CCB156]/90 transition-all duration-300 mr-2"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MBA Eligibility */}
      <section className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">MBA (Master of Business Administration)</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Eligibility criteria for MBA program admission
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-8">Eligibility Criteria</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {mbaEligibility.map((quota, index) => (
                <div key={index} className="bg-[#F0F0EA] p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-[#0D225C] mb-4">{quota.quota}</h4>
                  <div className="space-y-3">
                    {quota.requirements.map((requirement, reqIndex) => (
                      <div key={reqIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#CCB156] flex-shrink-0 mt-0.5" />
                        <span className="text-[#747488] text-sm leading-relaxed">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MCA Eligibility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D225C] mb-4">MCA (Master of Computer Applications)</h2>
            <p className="text-xl text-[#747488] max-w-3xl mx-auto">
              Eligibility criteria for MCA program admission
            </p>
          </div>

          <div className="bg-[#F0F0EA] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-8">Eligibility Criteria</h3>
            <p className="text-lg text-[#747488] mb-6 leading-relaxed">
              Candidates possessing a degree of University of Mysore, or of any other University, equivalent 
              there to and complying with the eligibility criteria:
            </p>
            
            <div className="space-y-4">
              {mcaEligibility.map((criterion, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-lg">
                  <CheckCircle className="h-5 w-5 text-[#CCB156] flex-shrink-0 mt-0.5" />
                  <span className="text-[#747488] leading-relaxed">{criterion}</span>
                </div>
              ))}
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

export default PostGraduateAdmissionPage;