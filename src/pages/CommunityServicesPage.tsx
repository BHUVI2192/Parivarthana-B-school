import React from 'react';
import { Heart, Users, Shield, Calendar, Book, Award } from 'lucide-react';

const CommunityServicesPage: React.FC = () => {
  const isrCommittee = [
    { member: 'Ms. Shambhavi Bhonsle', designation: 'Coordinator' },
    { member: 'Ms. Laxith Mouna M. A.', designation: 'Member' },
    { member: 'Mr. Chaithranya K.', designation: 'Member' },
  ];

  const yrcCommittee = [
    { member: 'Mr. Imran Khan S.', designation: 'Coordinator' },
    { member: 'Mr. Pavan L. R.', designation: 'Member' },
    { member: 'Mr. Nikhil Chowdayya', designation: 'Member' },
  ];

  const isrObjectives = [
    'Address social issues like poverty, education, healthcare, and community development',
    'Enhance relationships with stakeholders (employees, customers, and community)',
    'Create long-term value, mitigate risks, and foster a positive reputation',
  ];

  const isrFunctions = [
    {
      title: 'Philanthropy',
      description: 'Donate to charitable causes and community development projects',
    },
    {
      title: 'Environmental Sustainability',
      description: 'Adopt eco-friendly practices',
    },
    {
      title: 'Ethical Business Practices',
      description: 'Maintain transparency and high ethical standards',
    },
    {
      title: 'Employee Well-being',
      description: 'Ensure fair labor practices and a healthy work environment',
    },
    {
      title: 'Community Engagement',
      description: 'Support local community initiatives',
    },
    {
      title: 'Education and Skill Development',
      description: 'Promote educational programs',
    },
    {
      title: 'Educational and Cultural Contributions',
      description: 'Support cultural awareness and intellectual development',
    },
    {
      title: 'Natural Habitat Preservation',
      description: 'Protect biodiversity and implement sustainable landscaping',
    },
    {
      title: 'Research and Development',
      description: 'Address local challenges through collaborative research',
    },
  ];

  const isrSOP = [
    'Designate an ISR lead or team',
    'Identify and engage stakeholders',
    'Develop a clear ISR strategy with measurable objectives',
    'Execute and monitor ISR activities',
    'Communicate efforts internally and externally',
    'Foster a culture of learning and adapt strategies based on feedback',
  ];

  const yrcAims = [
    'Conduct workshops on first aid and emergency rescue',
    'Organize blood donation camps',
    'Raise awareness about AIDS, diabetes, COPD, and other health issues',
  ];

  const importantDays = [
    { date: 'January 12', event: 'National Youth Day' },
    { date: 'April 7', event: 'World Health Day' },
    { date: 'May 8', event: 'World Red Cross Day' },
    { date: 'June 5', event: 'World Environment Day' },
    { date: 'August 12', event: 'Geneva Convention Day' },
    { date: 'October 1', event: 'Voluntary Blood Donor\'s Day' },
    { date: 'October 30', event: 'Death Anniversary of Jean Henry Dunant' },
    { date: 'December 1', event: 'World AIDS Day' },
    { date: 'December 5', event: 'International Volunteers Day' },
  ];

  const yrcSOP = [
    'Plan activities for the academic year',
    'Obtain formal permission to execute activities',
    'Notify students and encourage participation',
    'Ensure activities are executed as planned',
    'Collect feedback to improve future programs',
  ];

  return (
    <div className="min-h-screen bg-[#F0F0EA]">
      {/* Hero Section */}
      <section className="bg-[#0D225C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Community Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Committed to social responsibility and humanitarian service through ISR and Youth Red Cross initiatives
          </p>
        </div>
      </section>

      {/* ISR Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="h-8 w-8 text-[#CCB156]" />
              <h2 className="text-3xl font-bold text-[#0D225C]">Institutional Social Responsibility (ISR)</h2>
            </div>

            {/* Introduction */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Introduction</h3>
              <p className="text-[#747488] leading-relaxed mb-3">
                Institutional Social Responsibility (ISR) represents our commitment to ethical, socially responsible, and sustainable practices that extend beyond profit generation. ISR encompasses initiatives such as ethical business practices, environmental sustainability, philanthropy, community development, and meaningful social engagement.
              </p>
              <p className="text-[#747488] leading-relaxed">
                At Parivarthana B-School, we believe in balancing financial success with ethical and sustainable practices, ensuring that our actions contribute positively to society and the environment.
              </p>
            </div>

            {/* Purpose */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Purpose</h3>
              <p className="text-[#747488] leading-relaxed mb-3">
                ISR integrates ethical, social, and environmental considerations into our institution's operations. Our goal is to make a positive societal impact, enhance stakeholder relationships, and contribute meaningfully to environmental sustainability.
              </p>
              <p className="text-[#747488] leading-relaxed">
                Through ISR, we strengthen our institution's reputation and attract stakeholders who value responsible and sustainable practices, creating a lasting positive impact on our community.
              </p>
            </div>

            {/* Objectives */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Objectives of ISR</h3>
              <ul className="space-y-3">
                {isrObjectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-[#CCB156] text-xl mt-1">•</span>
                    <span className="text-[#747488] leading-relaxed">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Committee Composition */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Composition of ISR Committee</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#0D225C] text-white">
                      <th className="px-6 py-3 text-left">Members</th>
                      <th className="px-6 py-3 text-left">Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isrCommittee.map((member, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="px-6 py-4 text-[#747488]">{member.member}</td>
                        <td className="px-6 py-4 text-[#747488]">{member.designation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Functions and Responsibilities */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Functions and Responsibilities</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {isrFunctions.map((func, index) => (
                  <div key={index} className="bg-[#F0F0EA] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#0D225C] mb-2">{func.title}</h4>
                    <p className="text-[#747488] text-sm">{func.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Code of Conduct */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Code of Conduct</h3>
              <p className="text-[#747488] leading-relaxed">
                Our institution is committed in maintaining the highest standards of integrity, transparency, and ethical conduct in all ISR activities. We prioritize meaningful stakeholder engagement, environmental responsibility, and strategic philanthropy. We ensure that all initiatives align with our core values and contribute positively to society while fostering a culture of accountability and continuous improvement.
              </p>
            </div>

            {/* Standard Operating Procedure */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Standard Operating Procedure (SOP)</h3>
              <div className="space-y-3">
                {isrSOP.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-[#CCB156] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <span className="text-[#747488] leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* YRC Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-8 w-8 text-[#DC143C]" />
              <h2 className="text-3xl font-bold text-[#0D225C]">Youth Red Cross (YRC)</h2>
            </div>

            {/* Introduction */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Introduction</h3>
              <p className="text-[#747488] leading-relaxed mb-3">
                The Indian Red Cross Society is a premier humanitarian organization dedicated to alleviating human suffering and promoting health and welfare. Youth Red Cross (YRC) plays a vital role in grooming young minds for humanitarian efforts and community service.
              </p>
              <p className="text-[#747488] leading-relaxed">
                At Parivarthana B-School, all students are proud YRC volunteers, actively participating in humanitarian initiatives and community development programs.
              </p>
            </div>

            {/* Purpose */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Purpose</h3>
              <p className="text-[#747488] leading-relaxed">
                The purpose of YRC is to involve youth in humanitarian efforts, promoting compassion, non-violence, and community service. We emphasize leadership development, social responsibility, and inclusivity, empowering students to become agents of positive change in society.
              </p>
            </div>

            {/* Aims */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Aims of Youth Red Cross</h3>
              <ul className="space-y-3">
                {yrcAims.map((aim, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-[#DC143C] text-xl mt-1">•</span>
                    <span className="text-[#747488] leading-relaxed">{aim}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* YRC at Parivarthana */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Youth Red Cross at Parivarthana B-School</h3>
              <p className="text-[#747488] leading-relaxed mb-3">
                The YRC wing at Parivarthana B-School was established in 2024-25 as per the University of Mysore's order. Since its inception, we have organized numerous activities including invited talks, comprehensive training programs, and interactive workshops to enhance civic sense and social responsibility among students.
              </p>
              <p className="text-[#747488] leading-relaxed">
                Our YRC volunteers actively participate in blood donation camps, health awareness campaigns, and community development initiatives, making a tangible difference in the lives of those we serve.
              </p>
            </div>

            {/* Committee Composition */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Composition of YRC Committee</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#0D225C] text-white">
                      <th className="px-6 py-3 text-left">Members</th>
                      <th className="px-6 py-3 text-left">Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yrcCommittee.map((member, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="px-6 py-4 text-[#747488]">{member.member}</td>
                        <td className="px-6 py-4 text-[#747488]">{member.designation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Membership Criteria */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Membership Criteria</h3>
              <p className="text-[#747488] leading-relaxed">
                YRC membership is open to all students enrolled at Parivarthana B-School. Members must be between the ages of 17 and 35 years. All students are encouraged to participate in YRC activities and contribute to humanitarian causes. Membership is voluntary and requires a commitment to upholding Red Cross principles and values.
              </p>
            </div>

            {/* Leadership Structure */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Leadership Structure</h3>
              <p className="text-[#747488] leading-relaxed">
                The YRC at Parivarthana B-School operates under a structured leadership framework comprising a Coordinator and Members who oversee various activities. The leadership team is responsible for planning, coordinating, and executing YRC programs, ensuring alignment with Red Cross principles and institutional objectives. Student leaders are selected based on their commitment, leadership potential, and dedication to humanitarian service.
              </p>
            </div>

            {/* Activity Planning */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Activity Planning</h3>
              <p className="text-[#747488] leading-relaxed">
                All YRC activities are planned in accordance with Red Cross principles and the institution's academic calendar. Activities include health awareness campaigns, blood donation drives, first aid training, disaster preparedness workshops, and community service initiatives. Each activity is designed to provide practical learning experiences while making a meaningful impact on the community.
              </p>
            </div>

            {/* Training Programs */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Training Programs</h3>
              <p className="text-[#747488] leading-relaxed">
                YRC members receive comprehensive training covering first aid, emergency rescue techniques, humanitarian principles, disaster management, and leadership development. Training programs are conducted by certified trainers and Red Cross officials, ensuring that members are well-equipped to handle emergencies and contribute effectively to humanitarian efforts.
              </p>
            </div>

            {/* Safety Protocols */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Safety Protocols</h3>
              <p className="text-[#747488] leading-relaxed">
                Safety is our top priority in all YRC activities. We maintain strict safety protocols including mandatory first aid training for all volunteers, thorough risk assessments before activities, emergency response plans, and adequate supervision during events. All activities are conducted under the guidance of trained faculty members and Red Cross officials.
              </p>
            </div>

            {/* Reporting and Documentation */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Reporting and Documentation</h3>
              <p className="text-[#747488] leading-relaxed">
                Comprehensive documentation and reporting procedures are maintained for all YRC activities. This includes activity reports, attendance records, impact assessments, photographs, and feedback forms. Regular reports are submitted to the University of Mysore and the Indian Red Cross Society to ensure transparency and accountability.
              </p>
            </div>

            {/* Fundraising and Finances */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Fundraising and Finances</h3>
              <p className="text-[#747488] leading-relaxed">
                YRC activities are supported through institutional funding and ethical fundraising initiatives. All financial transactions are transparent and properly documented. Budgets are prepared for each activity, and funds are utilized exclusively for YRC programs and humanitarian initiatives. Financial reports are maintained and audited regularly to ensure proper management.
              </p>
            </div>

            {/* Collaboration and Partnerships */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Collaboration and Partnerships</h3>
              <p className="text-[#747488] leading-relaxed">
                We actively collaborate with the Indian Red Cross Society, healthcare institutions, NGOs, and other educational institutions to enhance our YRC programs. These partnerships provide valuable resources, expertise, and opportunities for our students to participate in larger humanitarian initiatives and gain practical experience in community service.
              </p>
            </div>

            {/* Evaluation and Continuous Improvement */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Evaluation and Continuous Improvement</h3>
              <p className="text-[#747488] leading-relaxed">
                Regular evaluation mechanisms are in place to assess the effectiveness of YRC programs. We collect feedback from participants, analyze activity outcomes, and implement improvements based on lessons learned. Annual reviews help us refine our strategies and ensure that our programs continue to meet the evolving needs of our community.
              </p>
            </div>

            {/* Observation of Important Days */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Observation of Important Days</h3>
              <p className="text-[#747488] leading-relaxed mb-4">
                YRC at Parivarthana B-School observes the following important days with special programs and activities:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {importantDays.map((day, index) => (
                  <div key={index} className="bg-[#F0F0EA] p-4 rounded-lg flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-[#DC143C] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#0D225C]">{day.date}</p>
                      <p className="text-[#747488] text-sm">{day.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code of Conduct */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Code of Conduct</h3>
              <p className="text-[#747488] leading-relaxed">
                All YRC members are expected to uphold humanitarian values and demonstrate respect, integrity, and professionalism in all activities. Members must maintain confidentiality, show compassion towards all individuals regardless of background, work collaboratively as a team, and represent the institution and Red Cross Society with dignity. Any violation of the code of conduct will be addressed through appropriate disciplinary measures.
              </p>
            </div>

            {/* Standard Operating Procedure */}
            <div>
              <h3 className="text-2xl font-bold text-[#0D225C] mb-4">Standard Operating Procedure (SOP)</h3>
              <div className="space-y-3">
                {yrcSOP.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-[#DC143C] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <span className="text-[#747488] leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityServicesPage;
