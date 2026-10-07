import React from 'react';
import { Shield, AlertTriangle, Heart, Gavel, FileText, Users, XCircle, CheckCircle } from 'lucide-react';

const StatutoryCellsPage: React.FC = () => {

  const grievanceCommittee = [
    { member: 'Mr. Pavan L. R.', designation: 'Coordinator' },
    { member: 'Mr. Chandan', designation: 'Member' },
    { member: 'Ms. Tejaswini C. K.', designation: 'Member' },
  ];

  const antiRaggingCommittee = [
    { member: 'Mr. Imran Khan S.', designation: 'Coordinator' },
    { member: 'Mr. Pavan L. R.', designation: 'Member' },
    { member: 'Ms. Ranganath', designation: 'Member' },
  ];

  const safeCommittee = [
    { member: 'Ms. Chaithanya K.', designation: 'Coordinator' },
    { member: 'Ms. Mahalaxmi', designation: 'Member' },
    { member: 'Ms. Shambhavi Bhonsle', designation: 'Member' },
  ];

  const disciplinaryCommittee = [
    { member: 'Mr. Praveen Joshi', designation: 'Coordinator' },
    { member: 'Ms. Ramya V. J.', designation: 'Member' },
    { member: 'Mr. Shamanth Kumar B U', designation: 'Member' },
    { member: 'Mr. Imran Khan S.', designation: 'Member' },
  ];

  const stCommittee = [
    { member: 'Pending Institutional Verification', designation: 'Coordinator' },
  ];

  const humanRightsCommittee = [
    { member: 'Pending Institutional Verification', designation: 'Chairperson' },
  ];

  const raggingPunishableActions = [
    'Abetment to ragging',
    'Criminal conspiracy to commit ragging',
    'Unlawful assembly and rioting while committing ragging',
    'Public nuisance created during ragging',
    'Violation of decency and morals through ragging',
    'Injury to body, causing hurt or grievous hurt',
    'Wrongful restraint and wrongful confinement',
    'Use of criminal force and assault',
    'Kidnapping and abduction',
    'Criminal intimidation',
    'Attempts to commit any of the above offences',
    'Physical or psychological harm through ragging',
    'All other offences related to ragging under the Indian Penal Code',
    'Cyberbullying and online harassment as part of ragging',
    'Discrimination based on caste, religion, gender, or background',
  ];

  const raggingPunishments = [
    'Written apology with an undertaking not to indulge in ragging',
    'Suspension from classes and academic privileges',
    'Withholding/withdrawing scholarship and other benefits',
    'Debarring from appearing in examinations and tests',
    'Withholding results and withholding degree',
    'Debarring from representing the institution in events',
    'Expulsion from the institution and consequent debarring from admission',
    'Collective punishment when the individuals are not identifiable',
  ];

  const antiRaggingResponsibilities = [
    'Uphold the Supreme Court directives and UGC regulations on curbing ragging',
    'Publicize anti-ragging policies through orientation programs, notice boards, and website',
    'Conduct periodic awareness campaigns and workshops',
    'Monitor and supervise campus activities to prevent ragging',
    'Conduct inquiries into ragging complaints and recommend appropriate action',
    'Maintain records of all complaints and actions taken',
  ];

  const harassmentPunishableActions = [
    'Abetment to sexual harassment',
    'Criminal conspiracy to commit sexual harassment',
    'Unlawful assembly and rioting while committing harassment',
    'Public nuisance created during harassment',
    'Violation of decency and morals',
    'Injury to body, causing hurt or grievous hurt',
    'Wrongful restraint and wrongful confinement',
    'Use of criminal force and assault',
    'Kidnapping and abduction',
    'Criminal intimidation',
    'Attempts to commit any of the above offences',
    'Physical or psychological harm through harassment',
    'All other offences related to harassment under the Indian Penal Code',
    'Cyberbullying and online harassment',
    'Stalking and unwelcome advances',
    'Creating a hostile environment based on gender',
  ];

  const safeResponsibilities = [
    'Uphold the Supreme Court directives and legal provisions on prevention of sexual harassment',
    'Conduct gender sensitization workshops and awareness programs',
    'Provide counseling and support services to complainants',
    'Conduct fair and impartial inquiries into complaints',
    'Ensure confidentiality and protect complainants from victimization',
    'Recommend appropriate action based on inquiry findings',
  ];

  return (
    <div className="min-h-screen bg-[#F0F0EA]">
      {/* Hero Section */}
      <section className="bg-[#0D225C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Statutory Cells</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Committed to maintaining a safe, inclusive, and dignified environment for all members of our institution
          </p>
        </div>
      </section>

      {/* Grievance Redressal Cell */}
      <section id="grievance-redressal" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-[#0D225C] p-4 rounded-lg">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D225C]">
              Grievance Redressal Cell
            </h2>
          </div>

          {/* Introduction */}
          <div className="bg-[#F0F0EA] rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Purpose & Principles</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Purpose</h4>
                <p className="text-[#747488] leading-relaxed">
                  The Grievance Redressal Cell is established to address concerns and complaints from students, faculty, and staff regarding academic issues, infrastructure, behavioral matters, administrative concerns, or other legitimate grievances.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Core Principles</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  {['Transparency', 'Fairness', 'Timely Resolution', 'Confidentiality'].map((principle, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg text-center">
                      <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <p className="text-[#0D225C] font-semibold">{principle}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Process</h4>
                <p className="text-[#747488] leading-relaxed">
                  Submit grievances via the Grievance Registration Form below. Forms can be submitted physically or placed in the designated grievance box on campus.
                </p>
              </div>
            </div>
          </div>

          {/* Grievance Registration Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Grievance Registration Form</h3>

            <div className="w-full flex justify-center">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScStNChb5l4_-6fJ4eIHzz3CLybZnjbW-AC7XAhWkwj2R0GIA/viewform?embedded=true"
                width="100%"
                height="1842"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="border-0"
                title="Grievance Registration Form"
              >
                Loading…
              </iframe>
            </div>
          </div>

          {/* Committee Composition */}
          <div className="bg-[#F0F0EA] rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Committee Composition</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0D225C] text-white">
                    <th className="px-6 py-3 text-left">Members</th>
                    <th className="px-6 py-3 text-left">Designations</th>
                  </tr>
                </thead>
                <tbody>
                  {grievanceCommittee.map((member, index) => (
                    <tr key={index} className="border-b border-gray-200 bg-white">
                      <td className="px-6 py-4 text-[#747488]">{member.member}</td>
                      <td className="px-6 py-4 text-[#747488]">{member.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Ragging Committee */}
      <section id="anti-ragging" className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-red-600 p-4 rounded-lg">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D225C]">
              Anti-Ragging Committee
            </h2>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Introduction</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Purpose</h4>
                <p className="text-[#747488] leading-relaxed">
                  To ensure a ragging-free environment in strict compliance with UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Mandate</h4>
                <p className="text-[#747488] leading-relaxed">
                  The committee is mandated to supervise, prevent, and address ragging incidents through proactive measures and stringent action against offenders.
                </p>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Objectives</h3>
            <div className="space-y-3">
              {[
                'Raise awareness about the dehumanizing effects of ragging and its consequences',
                'Monitor and prevent ragging incidents across campus',
                'Take stringent action against offenders in accordance with regulations',
                'Foster discipline and create a welcoming environment for freshers',
                'Display anti-ragging posters and committee contact details prominently on campus',
              ].map((objective, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#747488]">{objective}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Punishable Ingredients */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Punishable Ingredients of Ragging</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {raggingPunishableActions.map((action, index) => (
                <div key={index} className="flex items-start space-x-3 bg-[#F0F0EA] p-3 rounded-lg">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-[#747488] text-sm">{action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Punishments */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Punishments for Ragging</h3>
            <div className="space-y-3">
              {raggingPunishments.map((punishment, index) => (
                <div key={index} className="flex items-start space-x-3 bg-red-50 p-4 rounded-lg">
                  <div className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-[#747488]">{punishment}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Committee Responsibilities</h3>
            <div className="space-y-3">
              {antiRaggingResponsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#747488]">{responsibility}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Committee Composition */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Committee Composition</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="px-6 py-3 text-left">Member</th>
                    <th className="px-6 py-3 text-left">Designations</th>
                  </tr>
                </thead>
                <tbody>
                  {antiRaggingCommittee.map((member, index) => (
                    <tr key={index} className="border-b border-gray-200 bg-[#F0F0EA]">
                      <td className="px-6 py-4 text-[#747488]">{member.member}</td>
                      <td className="px-6 py-4 text-[#747488]">{member.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Women's S.A.F.E Cell */}
      <section id="safe-cell" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-pink-600 p-4 rounded-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D225C]">
              Women's S.A.F.E Cell
            </h2>
          </div>

          {/* Introduction */}
          <div className="bg-[#F0F0EA] rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Introduction</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Purpose</h4>
                <p className="text-[#747488] leading-relaxed">
                  The Women's S.A.F.E (Sexual harassment Awareness and Fair Environment) Cell is established to ensure a sexual harassment-free environment and to address complaints of sexual harassment in compliance with applicable laws and Supreme Court directives.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Mandate</h4>
                <p className="text-[#747488] leading-relaxed">
                  To promote gender sensitization, equality, and create a safe and respectful environment for all members of the institution.
                </p>
              </div>
            </div>
          </div>

          {/* Punishable Ingredients */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border-2 border-pink-200">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Punishable Ingredients of Sexual Harassment</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {harassmentPunishableActions.map((action, index) => (
                <div key={index} className="flex items-start space-x-3 bg-pink-50 p-3 rounded-lg">
                  <XCircle className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span className="text-[#747488] text-sm">{action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Punishments */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border-2 border-pink-200">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Punishments for Sexual Harassment</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-[#0D225C] mb-4">For Employees</h4>
                <div className="space-y-3">
                  {[
                    'Written apology with an undertaking',
                    'Warning and reprimand',
                    'Mandatory counseling and awareness programs',
                    'Termination from service',
                  ].map((punishment, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-pink-50 p-4 rounded-lg">
                      <div className="bg-pink-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-[#747488]">{punishment}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#0D225C] mb-4">For Students</h4>
                <div className="space-y-3">
                  {[
                    'Withholding privileges and academic benefits',
                    'Suspension from classes and campus activities',
                    'Expulsion from the institution',
                    'Mandatory counseling and gender sensitization programs',
                  ].map((punishment, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-pink-50 p-4 rounded-lg">
                      <div className="bg-pink-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-[#747488]">{punishment}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="bg-[#F0F0EA] rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Committee Responsibilities</h3>
            <div className="space-y-3">
              {safeResponsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#747488]">{responsibility}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Committee Composition */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-pink-200">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Committee Composition</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-pink-600 text-white">
                    <th className="px-6 py-3 text-left">Members</th>
                    <th className="px-6 py-3 text-left">Designations</th>
                  </tr>
                </thead>
                <tbody>
                  {safeCommittee.map((member, index) => (
                    <tr key={index} className="border-b border-gray-200 bg-pink-50">
                      <td className="px-6 py-4 text-[#747488]">{member.member}</td>
                      <td className="px-6 py-4 text-[#747488]">{member.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplinary Committee */}
      <section id="disciplinary" className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-[#CCB156] p-4 rounded-lg">
              <Gavel className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D225C]">
              Disciplinary Committee
            </h2>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Introduction</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Purpose</h4>
                <p className="text-[#747488] leading-relaxed">
                  The Disciplinary Committee is established to maintain discipline, uphold institutional values, and ensure a positive learning environment for all students, faculty, and staff.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#0D225C] mb-2">Scope</h4>
                <p className="text-[#747488] leading-relaxed">
                  The committee addresses misconduct including but not limited to rule violations, disruptive behavior, harassment, damage to property, and criminal behavior on campus.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Disciplinary Process</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#0D225C] mb-3">Investigation & Inquiry</h4>
                <p className="text-[#747488] leading-relaxed mb-4">
                  The committee conducts fair and impartial inquiries into reported incidents of misconduct. Evidence is gathered through:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {['Witness Statements', 'Physical Evidence', 'CCTV Verification'].map((method, index) => (
                    <div key={index} className="bg-[#F0F0EA] p-4 rounded-lg text-center">
                      <Shield className="h-6 w-6 text-[#CCB156] mx-auto mb-2" />
                      <p className="text-[#0D225C] font-semibold text-sm">{method}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#0D225C] mb-3">Disciplinary Actions</h4>
                <p className="text-[#747488] leading-relaxed mb-4">
                  Based on the severity of misconduct, the committee may recommend the following actions:
                </p>
                <div className="space-y-3">
                  {[
                    'Warning - Formal written warning for minor offenses',
                    'Counseling - Mandatory counseling and behavioral guidance',
                    'Suspension - Temporary suspension from classes and campus activities',
                    'Expulsion - Permanent removal from the institution for serious offenses',
                  ].map((action, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-[#F0F0EA] p-4 rounded-lg">
                      <div className="bg-[#CCB156] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-[#747488]">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Committee Composition */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Committee Composition</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#CCB156] text-white">
                    <th className="px-6 py-3 text-left">Members</th>
                    <th className="px-6 py-3 text-left">Designations</th>
                  </tr>
                </thead>
                <tbody>
                  {disciplinaryCommittee.map((member, index) => (
                    <tr key={index} className="border-b border-gray-200 bg-[#F0F0EA]">
                      <td className="px-6 py-4 text-[#747488]">{member.member}</td>
                      <td className="px-6 py-4 text-[#747488]">{member.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SC/ST Cell */}
      <section id="sc-st-cell" className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-[#0D225C] p-4 rounded-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D225C]">
              SC/ST Cell
            </h2>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Purpose</h3>
            <p className="text-[#747488] leading-relaxed mb-6">
              The SC/ST Cell is established to empower students belonging to the SC/ST communities, ensuring equal opportunities, and facilitating financial support (scholarships). It functions as a grievance redressal mechanism for matters of discrimination.
            </p>

            <div className="mb-6">
              <h4 className="font-semibold text-[#0D225C] mb-4">Committee Members</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-[#0D225C] text-white">
                    <tr>
                      <th className="px-6 py-3 text-left">Members</th>
                      <th className="px-6 py-3 text-left">Designations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stCommittee.map((member, index) => (
                      <tr key={index} className="border-b border-gray-200 bg-[#F0F0EA]">
                        <td className="px-6 py-4 text-[#747488]">{member.member}</td>
                        <td className="px-6 py-4 text-[#747488]">{member.designation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Human Rights Committee */}
      <section id="human-rights" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-[#0D225C] p-4 rounded-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D225C]">
              Human Rights Committee
            </h2>
          </div>

          <div className="bg-[#F0F0EA] rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#0D225C] mb-6">Overview</h3>
            <p className="text-[#747488] leading-relaxed mb-6">
              The Human Rights cell is constituted to promote and preserve human rights in the campus. The main focus of the cell is to implement human rights through effective institutional policy development, capability building, and control of human rights violations.
            </p>

            <div className="mb-6">
              <h4 className="font-semibold text-[#0D225C] mb-4">Committee Members</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-[#0D225C] text-white">
                    <tr>
                      <th className="px-6 py-3 text-left">Members</th>
                      <th className="px-6 py-3 text-left">Designations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {humanRightsCommittee.map((member, index) => (
                      <tr key={index} className="border-b border-gray-200 bg-white">
                        <td className="px-6 py-4 text-[#747488]">{member.member}</td>
                        <td className="px-6 py-4 text-[#747488]">{member.designation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Forum */}
<section id="feedback-forum" className="py-20 bg-[#F0F0EA]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center space-x-4 mb-8">
      <div className="bg-[#0D225C] p-4 rounded-lg">
        <Users className="h-8 w-8 text-white" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0D225C]">
        Feedback Forum
      </h2>
    </div>

    <div className="bg-[#F0F0EA] rounded-xl p-8 shadow-lg mb-8">
      <h3 className="text-2xl font-bold text-[#0D225C] mb-6">
        Faculty Feedback Form
      </h3>
      <div className="w-full flex justify-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScHJKYikOkCmlswwU0XDn-mh1n3aH-0lfvmk2DxhTsG6BAIAA/viewform?embedded=true"
          width="100%"
          height="1842"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="border-0"
          title="Faculty Feedback Form"
        >
          Loading…
        </iframe>
      </div>
    </div>

    <div className="bg-[#F0F0EA] rounded-xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-[#0D225C] mb-6">
        Student Feedback Form
      </h3>
      <div className="w-full flex justify-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSea_2hgw95my-RGgt4mZPs1zLoP8m6-8nTrr86rgcy5qY9gTQ/viewform?embedded=true"
          width="100%"
          height="1842"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="border-0"
          title="Student Feedback Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default StatutoryCellsPage;
