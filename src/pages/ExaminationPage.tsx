import React from 'react';

const ExaminationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center border-b-4 border-blue-600 pb-4">
              Examinations
            </h1>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Introduction to Examinations</h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Internal assessments and end-semester examinations are scheduled as per the institute and department-level academic calendars. The University Exam Schedule is also reflected in the institute's calendar to ensure seamless coordination with the affiliating University's requirements.
                </p>
                <p>
                  The institution strictly follows the evaluation procedures prescribed by the affiliating university, ensuring transparency, fairness, and academic rigor in all assessment processes.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mt-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Evaluation Weightage:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span><strong>UG Streams:</strong> 40% for internal assessments, 60% for end-semester examinations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span><strong>PG Streams:</strong> 30% for internal assessments, 70% for end-semester examinations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Objectives of Internal Assessment</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
                    <span className="text-gray-700">Evaluate student progress throughout the semester</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
                    <span className="text-gray-700">Foster a healthy competitive environment among students</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
                    <span className="text-gray-700">Identify reasons for low student performance and provide targeted support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
                    <span className="text-gray-700">Assess the effectiveness of teaching methods and pedagogical approaches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
                    <span className="text-gray-700">Motivate students to maintain consistent study habits</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Assessment of Theoretical Courses</h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Internal assessments are conducted as per the University of Mysore's guidelines, ensuring standardization and adherence to prescribed norms. Two internal assessments, along with assignments and seminars, are conducted per semester for each course.
                </p>
                <div className="bg-yellow-50 p-6 rounded-lg mt-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Role of the Examination Committee:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>Governs procedures for conducting and post-conduct activities of internal assessments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>Disseminates information about exam schedules, hall arrangements, and invigilation duties</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-4">
                  Question papers are submitted one week before examinations, and evaluated answer sheets are submitted within one week after assessments to ensure timely feedback to students.
                </p>
                <p>
                  Slow learners are identified through performance analysis and provided with special coaching and mentoring to help them improve their academic standard.
                </p>
                <p>
                  Progress reports are sent to parents regularly, followed by parent-teacher meetings to discuss student performance and implement corrective measures where necessary.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Process for Internal Assessment</h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
                    <span className="text-gray-700">The college has an examination cell responsible for conducting internal assessments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
                    <span className="text-gray-700">A department exam cell coordinator is appointed by the Principal at the start of the academic year</span>
                  </li>
                </ul>

                <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600 mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">UG Programs:</h3>
                  <p className="text-gray-700">Two internal assessments, one assignment, and one seminar are conducted per subject</p>
                </div>

                <div className="bg-white p-5 rounded-lg border-l-4 border-green-600 mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">PG Programs:</h3>
                  <p className="text-gray-700">Two internal assessments, one assignment, one seminar, Viva-Voce, Field Assignments, or Certification Courses are conducted per subject</p>
                </div>

                <ul className="space-y-3 mt-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
                    <span className="text-gray-700">The exam cell prepares and circulates the internal assessment schedule well in advance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
                    <span className="text-gray-700">The syllabus is evenly distributed, with 2 units covered per internal assessment</span>
                  </li>
                </ul>

                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 p-5 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">UG Internal Assessments:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>Maximum marks: 20</li>
                      <li>Pattern: Two 5-mark questions, two 10-mark questions</li>
                      <li>Duration: 60 minutes</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-5 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">PG-MBA Internal Assessments:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>Maximum marks: 30</li>
                      <li>Pattern: One 5-mark, one 10-mark, one 15-mark question</li>
                      <li>Duration: 60 minutes</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-5 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">PG-MCA Internal Assessments:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>Maximum marks: 30</li>
                      <li>Pattern: Five 2-mark questions, two 10-mark questions</li>
                      <li>Duration: 60 minutes</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-4 text-gray-700 font-medium">
                  Marks entry sheets (hard copy) are submitted along with answer sheets to maintain proper documentation.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Evaluation of Internal Assessment</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
                    <span className="text-gray-700">Answer papers are evaluated within five days of the examination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
                    <span className="text-gray-700">Faculty discuss correct answers with students after distributing evaluated answer scripts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
                    <span className="text-gray-700">Students with low marks are identified and provided special coaching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
                    <span className="text-gray-700">Evaluated answer papers are submitted to the exam cell for verification and record-keeping</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Perspective on Question Paper Setting</h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Question papers are designed to meet course outcomes and verify cognitive levels including remembrance, understanding, and application/analysis. The question paper structure ensures comprehensive evaluation of student learning.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mt-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Three Categories of Questions:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <p><strong>Straightforward Questions:</strong> One-third of questions are direct and answerable by all students (slow, average, and advanced learners)</p>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <p><strong>Analysis-Based Questions:</strong> One-third of questions require analytical thinking and application of concepts</p>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <p><strong>Indirect Questions:</strong> One-third are challenging questions requiring additional knowledge and critical thinking</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Internal Assessment Committee (AY 2024-25)</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  The committee is formed to oversee all aspects of internal assessments, ensuring smooth conduct and maintaining academic standards.
                </p>
                <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                  <p className="text-gray-700"><strong>Coordinator:</strong> Mr. Pavan L R, Mr. Shamantha Kumar B U, Mrs. Ramya V J, Mr.Imran khan S</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Procedures for Conducting Internal Assessments</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">1</span>
                    <span className="text-gray-700"><strong>Academic Calendar:</strong> Examinations are planned based on the academic calendar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">2</span>
                    <span className="text-gray-700"><strong>Formation of Exam Committee:</strong> Committee members are selected by the principal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">3</span>
                    <span className="text-gray-700"><strong>Planning:</strong> The committee meets with the Principal to plan examination logistics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">4</span>
                    <span className="text-gray-700"><strong>Circular:</strong> A circular is sent to staff with examination dates, subjects, and timings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">5</span>
                    <span className="text-gray-700"><strong>Question Paper Setting:</strong> Subject teachers set question papers and submit them to the Controller of Examinations (CoE) with answer keys</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">6</span>
                    <span className="text-gray-700"><strong>Requirements:</strong> Arrangements are made for printing question papers, answer scripts, and attendance sheets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">7</span>
                    <span className="text-gray-700"><strong>Room Identification:</strong> Examination halls are identified, and seating plans are prepared</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">8</span>
                    <span className="text-gray-700"><strong>Invigilator Allotment:</strong> Invigilators are selected based on student strength (1 invigilator per 30 students)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">9</span>
                    <span className="text-gray-700"><strong>Classroom Preparation:</strong> Non-teaching staff clean classroom boards and ensure exam readiness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">10</span>
                    <span className="text-gray-700"><strong>Question Paper Distribution:</strong> Invigilators carry question papers to examination halls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">11</span>
                    <span className="text-gray-700"><strong>Attendance Sheets:</strong> Attendance sheets are arranged daily for each examination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">12</span>
                    <span className="text-gray-700"><strong>Absentee Statements:</strong> Absentee data is collected and consolidated for record-keeping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">13</span>
                    <span className="text-gray-700"><strong>Answer Script Collection:</strong> Answer scripts are collected from invigilators and submitted to subject teachers for evaluation</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Remedies for Missed Internal Assessments</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">UG (All Streams)</h3>
                  <p className="text-gray-700 mb-4">
                    If a student misses an internal Assessment due to valid reasons (e.g., medical issues), the teacher can provide a re-test or assign an alternative topic as an assignment.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Breakdown of Internal Assessment Marks:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Internal Assessment 1: 10 marks</li>
                      <li>• Assignment/Case Study: 5 marks</li>
                      <li>• Internal Assessment 2: 10 marks</li>
                      <li>• Seminar/Class Activity: 5 marks</li>
                      <li>• Attendance: 10 marks</li>
                      <li className="font-bold border-t pt-2 mt-2">Total: 40 marks</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">PG (MBA/MCA)</h3>
                  <p className="text-gray-700 mb-4">
                    If a student misses an internal Assessments due to valid reasons, the teacher can provide a re-test or assign an alternative activity.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Breakdown of Internal Assessment Marks:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Internal Assessment 1: 15 marks</li>
                      <li>• Assignment/Case Study/Seminar: 5 marks</li>
                      <li>• Certification Course: 5 marks</li>
                      <li>• Attendance: 5 marks</li>
                      <li className="font-bold border-t pt-2 mt-2">Total: 30 marks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Assessment of Assignments</h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <p className="text-gray-700">
                  Assignments are assigned by subject teachers based on the syllabus, ensuring alignment with course objectives and learning outcomes.
                </p>
                <p className="text-gray-700">
                  Marks are awarded based on content quality, application of concepts, case study analysis, and report relevance to the assigned topic.
                </p>
                <p className="text-gray-700">
                  If a student fails to submit an assignment on time due to valid reasons, the teacher can extend the submission date or assign an additional assignment as an alternative.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Assessment of Seminars/Class Activities</h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <p className="text-gray-700">
                  Seminar topics are assigned by subject teachers based on the syllabus, encouraging students to explore topics in depth and develop presentation skills.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Evaluation Criteria:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>Content quality and relevance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>Presentation skills and clarity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>Confidence and communication</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>Use of Teaching-Learning Materials (TLM)</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-700 mt-4">
                  If a student misses a seminar due to valid reasons, the teacher can reschedule the seminar or assign an alternative activity such as an assignment or viva-voce.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Assessment of Certification Courses (PG)</h2>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg space-y-4">
                <p className="text-gray-700">
                  PG students must complete one certification course per semester from recognized platforms such as MOOC, SWAYAM, or NPTEL.
                </p>
                <p className="text-gray-700">
                  Students submit the certificate as proof of completion for internal assessment marks, demonstrating their commitment to continuous learning.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-gray-700">
                    <strong>Important:</strong> If a student delays course completion, they must seek written permission from the faculty, stating the reason and tentative completion duration. No alternative activity is provided for certification courses.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Assessment of Field Assignments</h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <p className="text-gray-700">
                  Faculty may conduct field assignments where students visit companies and interact with managers, employees, and industry professionals to gain practical exposure.
                </p>
                <p className="text-gray-700">
                  Students submit a handwritten report detailing their observations, learnings, and insights from the field visit.
                </p>
                <p className="text-gray-700">
                  Marks are awarded based on the report's quality, depth of analysis, practical insights, and overall presentation.
                </p>
              </div>
            </section>

            <div className="bg-blue-600 text-white p-6 rounded-lg text-center mt-12">
              <p className="text-lg font-semibold">
                For any queries regarding examinations, please contact the Examination Cell or the Controller of Examinations.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExaminationPage;
