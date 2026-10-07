import React from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  Sparkles, 
  Globe, 
  Languages, 
  GraduationCap, 
  MessageSquare, 
  Feather, 
  CheckCircle2, 
  ArrowRight,
  BookText,
  Compass
} from 'lucide-react';
import { useFaculty } from '../hooks/useFaculty';
import { getAssetUrl } from '../utils/assets';

interface DepartmentOfLanguagesPageProps {
  onNavigate?: (page: string) => void;
}

const DepartmentOfLanguagesPage: React.FC<DepartmentOfLanguagesPageProps> = ({ onNavigate }) => {
  const { faculty, loading } = useFaculty('Languages');

  const languageStreams = [
    {
      title: 'Department of English',
      tag: 'Global Communication & Business English',
      icon: Globe,
      color: 'from-[#0D225C] to-[#16368C]',
      description:
        'Focuses on professional corporate communication, grammatical precision, technical report writing, public speaking, phonetics, and advanced presentation skills to equip students for global corporate environments.',
      features: [
        'Business Communication & Technical Writing',
        'Phonetics, Accent Neutralization & Soft Skills',
        'Critical Literature Analysis & Vocabulary',
        'Interview Preparation & Group Discussions',
      ],
    },
    {
      title: 'Department of Kannada',
      tag: 'Regional Heritage & Literature Studies',
      icon: Feather,
      color: 'from-[#917930] to-[#CCB156]',
      description:
        'Dedicated to preserving and promoting the rich cultural and literary heritage of Karnataka through both Samskrithika Kannada (for native speakers) and Vyavaharika Kannada (functional Kannada for non-native students).',
      features: [
        'Classical & Contemporary Kannada Literature',
        'Vyavaharika Kannada (Functional & Conversational)',
        'Samskrithika Kannada (Cultural Heritage)',
        'Cultural Events & Kannada Rajyotsava Leadership',
      ],
    },
  ];

  const objectives = [
    {
      icon: MessageSquare,
      title: 'Fluency & Articulation',
      description: 'Nurturing confident orators, articulate speakers, and impactful corporate communicators.',
    },
    {
      icon: BookText,
      title: 'Literary & Critical Acumen',
      description: 'Encouraging analytical reasoning, comprehension depth, and creative expression through literature.',
    },
    {
      icon: Globe,
      title: 'Cross-Cultural Competence',
      description: 'Bridging linguistic barriers to enable effortless collaboration across multicultural workplaces.',
    },
    {
      icon: Sparkles,
      title: 'Holistic Personality Development',
      description: 'Integrating interpersonal soft skills, business etiquette, and emotional intelligence into curriculum.',
    },
  ];

  const activities = [
    {
      title: 'Kannada Rajyotsava Celebrations',
      desc: 'Annual gala celebrating Karnataka heritage, folk arts, literary exhibitions, and cultural performances.',
      icon: '🎉',
    },
    {
      title: 'Literary & Debate Forum',
      desc: 'Regular elocution, essay writing, and parliamentary debate competitions to sharpen critical discourse.',
      icon: '🎙️',
    },
    {
      title: 'Language & Phonetics Lab',
      desc: 'Audio-visual interactive sessions dedicated to pronunciation, listening comprehension, and interview readiness.',
      icon: '🎧',
    },
    {
      title: 'Poetry & Creative Writing Circles',
      desc: 'Creative workshops encouraging students to author original poems, short stories, and editorial columns.',
      icon: '✍️',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F0F0EA] font-sans">
      {/* Hero Section */}
      <section className="relative bg-[#0D225C] text-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-[#CCB156]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-[#CCB156]/20 border border-[#CCB156]/40 px-4 py-1.5 rounded-full text-xs font-bold text-[#CCB156]">
              <Languages className="h-4 w-4" />
              <span>Academic Division • Humanities & Linguistic Studies</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Department of Languages
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-light">
              Cultivating linguistic mastery, business communication acumen, and cultural excellence across Kannada and English studies.
            </p>
          </div>
        </div>
      </section>

      {/* About Department Section */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-[#747488]">
              <div className="flex items-center space-x-2 text-[#0D225C] font-bold text-xs uppercase tracking-wider">
                <Compass className="h-4 w-4 text-[#CCB156]" />
                <span>Foundational Pillar of Higher Education</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D225C] leading-tight">
                Empowering Voices, Elevating Expression
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                The <strong className="text-[#0D225C]">Department of Languages</strong> at Parivarthana Business School plays an indispensable role in shaping well-rounded, articulate, and culturally grounded professionals. Language is not merely a medium of communication—it is the cornerstone of leadership, critical analysis, and intellectual refinement.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Our faculty delivers tailored language curricula affiliated with the <strong className="text-[#0D225C]">University of Mysore</strong> for students across B.Com, BBA, BCA, MBA, and MCA programs. We emphasize functional language proficiency, corporate presentation skills, and the vibrant literary traditions of both Kannada and English.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 group">
                <img
                  src={getAssetUrl('cultural.jpg')}
                  alt="Department of Languages"
                  className="w-full h-84 object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D225C]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold text-[#0D225C]">Bilingual Excellence</div>
                    <div className="text-xs text-[#747488]">Kannada & English Curriculum</div>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-[#CCB156]/20 flex items-center justify-center text-[#0D225C] font-bold">
                    <Sparkles className="h-5 w-5 text-[#CCB156]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Streams (English & Kannada) */}
      <section className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#CCB156] uppercase tracking-wider block">
              Curriculum Dimensions
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D225C]">
              Language Disciplines
            </h2>
            <p className="text-[#747488] text-base sm:text-lg">
              Tailored academic pathways bridging cultural appreciation and corporate-level communication fluency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {languageStreams.map((stream, idx) => {
              const Icon = stream.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col justify-between group"
                >
                  <div>
                    <div className={`bg-gradient-to-r ${stream.color} p-8 text-white relative overflow-hidden`}>
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="h-14 w-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform">
                          <Icon className="h-7 w-7" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                          University of Mysore
                        </span>
                      </div>
                      <h3 className="text-2xl font-extrabold mt-5 leading-tight">{stream.title}</h3>
                      <p className="text-xs text-white/80 mt-1">{stream.tag}</p>
                    </div>

                    <div className="p-8 space-y-6">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {stream.description}
                      </p>

                      <div className="space-y-3 pt-2">
                        <h4 className="text-xs font-bold text-[#0D225C] uppercase tracking-wider">
                          Key Pedagogical Highlights:
                        </h4>
                        {stream.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center space-x-2.5 text-xs sm:text-sm text-gray-700">
                            <CheckCircle2 className="h-4 w-4 text-[#CCB156] flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold text-[#CCB156] uppercase tracking-wider block">
              Academic Mentors
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D225C]">
              Department Faculty
            </h2>
            <p className="text-[#747488] text-base sm:text-lg max-w-2xl mx-auto">
              Meet our distinguished faculty members dedicated to language pedagogy, literature, and student mentorship
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#0D225C]"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {faculty.map((member) => (
                <div
                  key={member.id}
                  className="bg-[#F0F0EA] rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/80 group"
                >
                  <div className="relative w-28 h-28 mx-auto mb-6">
                    <img
                      src={getAssetUrl(member.photo_url) || 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-4 border-[#CCB156] shadow-md group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop';
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0D225C] mb-1 group-hover:text-[#CCB156] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-bold text-[#CCB156] mb-4">{member.designation}</p>
                  
                  <div className="bg-white rounded-2xl p-4 space-y-2 text-left text-xs sm:text-sm border border-gray-200/60 shadow-sm">
                    {member.qualifications && (
                      <div className="flex items-start justify-between">
                        <span className="font-bold text-[#0D225C]">Qualifications:</span>
                        <span className="text-gray-600 font-semibold">{member.qualifications}</span>
                      </div>
                    )}
                    {member.experience_years && (
                      <div className="flex items-start justify-between pt-1 border-t border-gray-100">
                        <span className="font-bold text-[#0D225C]">Experience:</span>
                        <span className="text-gray-600 font-semibold">{member.experience_years}</span>
                      </div>
                    )}
                    <div className="flex items-start justify-between pt-1 border-t border-gray-100">
                      <span className="font-bold text-[#0D225C]">Department:</span>
                      <span className="text-gray-600 font-semibold">Languages</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Objectives & Core Mandate */}
      <section className="py-20 bg-[#F0F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold text-[#CCB156] uppercase tracking-wider block">
              Pedagogical Pillars
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D225C]">
              Department Objectives
            </h2>
            <p className="text-lg text-[#747488] max-w-3xl mx-auto font-light">
              Structured goals guiding curriculum delivery and communicative competence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, index) => {
              const Icon = obj.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#CCB156] hover:-translate-y-1.5"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0D225C] text-[#CCB156] rounded-2xl mb-5 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0D225C] mb-2">
                    {obj.title}
                  </h4>
                  <p className="text-[#747488] text-xs sm:text-sm leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Department Activities & Co-Curriculars */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold text-[#CCB156] uppercase tracking-wider block">
              Vibrant Campus Life
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D225C]">
              Language & Literary Activities
            </h2>
            <p className="text-lg text-[#747488] max-w-3xl mx-auto font-light">
              Engaging co-curricular platforms celebrating linguistic creativity and cultural heritage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((act, index) => (
              <div
                key={index}
                className="bg-[#F0F0EA] rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{act.icon}</div>
                <h4 className="text-lg font-bold text-[#0D225C] mb-2">{act.title}</h4>
                <p className="text-xs sm:text-sm text-[#747488] leading-relaxed">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DepartmentOfLanguagesPage;
