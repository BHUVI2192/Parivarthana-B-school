import { useState, useEffect } from 'react';
import { getApiUrl } from '../utils/assets';

export interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  qualifications?: string;
  experience_years?: string;
  photo_url?: string;
  program: string;
  is_active?: boolean;
  display_order?: number;
}

export const DEFAULT_FACULTY_BY_PROGRAM: Record<string, FacultyMember[]> = {
  BCom: [
    {
      id: 47,
      name: 'Mr. Imran Khan S',
      designation: 'HOD & Assistant Professor',
      qualifications: 'M.Com., MBA',
      experience_years: '11+ Years',
      photo_url: 'faculty/ImranKhan.jpg',
      program: 'BCom',
      is_active: true,
      display_order: 1,
    },
    {
      id: 51,
      name: 'Ms. Mahalaxmi K S',
      designation: 'Assistant Professor',
      qualifications: 'M.Com., B.Ed., KSET',
      experience_years: '6+ Years',
      photo_url: 'uploads/faculty/69cfc716c8468_1775224598.jpeg',
      program: 'BCom',
      is_active: true,
      display_order: 2,
    },
    {
      id: 49,
      name: 'Ms. Amulya',
      designation: 'Assistant Professor',
      qualifications: 'M.Com., B.Ed., KSET',
      experience_years: '6+ Years',
      photo_url: 'uploads/faculty/69cfc5b805325_1775224248.jpeg',
      program: 'BCom',
      is_active: true,
      display_order: 3,
    },
    {
      id: 48,
      name: 'Ms. Laxith Mouna',
      designation: 'Assistant Professor',
      qualifications: 'MBA',
      experience_years: '2+ Years',
      photo_url: 'uploads/faculty/69cfc54301a85_1775224131.jpeg',
      program: 'BCom',
      is_active: true,
      display_order: 4,
    },
    {
      id: 50,
      name: 'Mr. Chandan M S',
      designation: 'Assistant Professor',
      qualifications: 'M.Com.',
      experience_years: '1+ Years',
      photo_url: 'uploads/faculty/69cfc61a1b26e_1775224346.jpeg',
      program: 'BCom',
      is_active: true,
      display_order: 5,
    },
  ],
  BBA: [
    {
      id: 55,
      name: 'Mr. Imran Khan S',
      designation: 'HOD & Assistant Professor',
      qualifications: 'M.Com., MBA',
      experience_years: '11+ Years',
      photo_url: 'uploads/faculty/69cfd075ba17b_1775226997.jpeg',
      program: 'BBA',
      is_active: true,
      display_order: 1,
    },
    {
      id: 57,
      name: 'Ms. Amulya',
      designation: 'Assistant Professor',
      qualifications: 'M.Com., B.Ed., KSET',
      experience_years: '6+ Years',
      photo_url: 'uploads/faculty/69cfd144231e9_1775227204.jpeg',
      program: 'BBA',
      is_active: true,
      display_order: 2,
    },
    {
      id: 59,
      name: 'Ms. Mahalaxmi K S',
      designation: 'Assistant Professor',
      qualifications: 'M.Com., B.Ed., KSET',
      experience_years: '6+ Years',
      photo_url: 'uploads/faculty/69cfd1b56a743_1775227317.jpeg',
      program: 'BBA',
      is_active: true,
      display_order: 3,
    },
    {
      id: 56,
      name: 'Ms. Laxith Mouna',
      designation: 'Assistant Professor',
      qualifications: 'MBA',
      experience_years: '2+ Years',
      photo_url: 'uploads/faculty/69cfd1026a5d6_1775227138.jpeg',
      program: 'BBA',
      is_active: true,
      display_order: 4,
    },
    {
      id: 58,
      name: 'Mr. Chandan M S',
      designation: 'Assistant Professor',
      qualifications: 'M.Com.',
      experience_years: '1+ Years',
      photo_url: 'uploads/faculty/69cfd17987750_1775227257.jpeg',
      program: 'BBA',
      is_active: true,
      display_order: 5,
    },
  ],
  BCA: [
    {
      id: 64,
      name: 'Mr. Suhas B Raj',
      designation: 'HOD & Assistant Professor',
      qualifications: 'MCA',
      experience_years: '5+ Years',
      photo_url: 'uploads/faculty/6a167a2fbdf65_1779857967.jpeg',
      program: 'BCA',
      is_active: true,
      display_order: 1,
    },
    {
      id: 41,
      name: 'Ms. Megha S',
      designation: 'Assistant Professor',
      qualifications: 'MCA',
      experience_years: '2+ Years',
      photo_url: 'uploads/faculty/69cfc1ecc64c1_1775223276.jpg',
      program: 'BCA',
      is_active: true,
      display_order: 2,
    },
    {
      id: 40,
      name: 'Ms. Chaithra M D',
      designation: 'Assistant Professor',
      qualifications: 'MCA',
      experience_years: '2+ Years',
      photo_url: 'uploads/faculty/69cfc1af1fe98_1775223215.jpeg',
      program: 'BCA',
      is_active: true,
      display_order: 3,
    },
    {
      id: 43,
      name: 'Ms. Poornashree Y',
      designation: 'Assistant Professor',
      qualifications: 'MCA',
      experience_years: '1+ Years',
      photo_url: 'uploads/faculty/69cfc26f3e7e0_1775223407.jpeg',
      program: 'BCA',
      is_active: true,
      display_order: 4,
    },
  ],
  MCA: [
    {
      id: 30,
      name: 'Ms. Ramya V J',
      designation: 'HOD & Assistant Professor',
      qualifications: 'MCA, (PhD.)',
      experience_years: '7+ Years',
      photo_url: 'uploads/faculty/69cfbdb0bd498_1775222192.png',
      program: 'MCA',
      is_active: true,
      display_order: 1,
    },
    {
      id: 72,
      name: 'Mr. Pavan L R',
      designation: 'Assistant Professor',
      qualifications: 'M.Sc. (CS)',
      experience_years: '5+ Years',
      photo_url: 'uploads/faculty/6a6a31dd7ac0c_1785344477.jpeg',
      program: 'MCA',
      is_active: true,
      display_order: 2,
    },
    {
      id: 73,
      name: 'Ms. Preethi',
      designation: 'Assistant Professor',
      qualifications: 'MCA',
      experience_years: '3+ Years',
      photo_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
      program: 'MCA',
      is_active: true,
      display_order: 3,
    },
    {
      id: 38,
      name: 'Ms. Megha S',
      designation: 'Assistant Professor',
      qualifications: 'MCA',
      experience_years: '2+ Years',
      photo_url: 'uploads/faculty/69cfbf6b73412_1775222635.jpg',
      program: 'MCA',
      is_active: true,
      display_order: 4,
    },
    {
      id: 31,
      name: 'Ms. Chaithra M D',
      designation: 'Assistant Professor',
      qualifications: 'MCA',
      experience_years: '2+ Years',
      photo_url: 'uploads/faculty/69cfbe1e8fec2_1775222302.jpeg',
      program: 'MCA',
      is_active: true,
      display_order: 5,
    },
    {
      id: 36,
      name: 'Mr. Suhas B Raj',
      designation: 'Assistant Professor',
      qualifications: 'MCA',
      experience_years: '5+ Years',
      photo_url: 'uploads/faculty/69cfbf1176035_1775222545.jpeg',
      program: 'MCA',
      is_active: true,
      display_order: 6,
    },
  ],
  MBA: [
    {
      id: 29,
      name: 'Mr. Shamanth Kumar B U',
      designation: 'HOD & Associate Professor',
      qualifications: 'MBA, (PhD.)',
      experience_years: '13+ Years',
      photo_url: 'uploads/faculty/69cfbc5d7ccec_1775221853.jpeg',
      program: 'MBA',
      is_active: true,
      display_order: 1,
    },
    {
      id: 22,
      name: 'Mr. Raghu Kumar R',
      designation: 'Professor',
      qualifications: 'B.E., M.Tech., PhD., MBA',
      experience_years: '18+ Years',
      photo_url: 'uploads/faculty/69cfb9ef02920_1775221231.jpeg',
      program: 'MBA',
      is_active: true,
      display_order: 2,
    },
    {
      id: 11,
      name: 'Mr. Praveen Joshi',
      designation: 'Assistant Professor',
      qualifications: 'MBA, (PhD)',
      experience_years: '8+ Years',
      photo_url: 'uploads/faculty/69ce05253b7d0_1775109413.jpeg',
      program: 'MBA',
      is_active: true,
      display_order: 3,
    },
    {
      id: 25,
      name: 'Ms. Tejaswinin C K',
      designation: 'Assistant Professor',
      qualifications: 'MDIT, PGDIM, PGDFM, DIM, MBA, B.Ed., MSc., KSET, (PhD.)',
      experience_years: '14+ Years',
      photo_url: 'uploads/faculty/69cfbaa9925b2_1775221417.jpeg',
      program: 'MBA',
      is_active: true,
      display_order: 4,
    },
    {
      id: 26,
      name: 'Mr. Ranganatha Y',
      designation: 'Assistant Professor',
      qualifications: 'MCom., BEd., KSET, NET, MBA',
      experience_years: '5+ Years',
      photo_url: 'uploads/faculty/69cfbb4a108a3_1775221578.jpeg',
      program: 'MBA',
      is_active: true,
      display_order: 5,
    },
    {
      id: 63,
      name: 'Ms. Shambhavi Bhounsle',
      designation: 'Assistant Professor',
      qualifications: 'M.Com., DFA, PGDBA',
      experience_years: '14+ Years',
      photo_url: 'uploads/faculty/69d35e1cdd0c1_1775459868.jpeg',
      program: 'MBA',
      is_active: true,
      display_order: 6,
    },
    {
      id: 28,
      name: 'Mr. Ravichandra K K',
      designation: 'Assistant Professor',
      qualifications: 'MBA',
      experience_years: '3+ Years',
      photo_url: 'uploads/faculty/69cfbc1247e61_1775221778.jpeg',
      program: 'MBA',
      is_active: true,
      display_order: 7,
    },
    {
      id: 16,
      name: 'Ms. Chaithanya K',
      designation: 'Assistant Professor',
      qualifications: 'MBA',
      experience_years: '2+ Years',
      photo_url: 'uploads/faculty/69ce095041998_1775110480.jpeg',
      program: 'MBA',
      is_active: true,
      display_order: 8,
    },
    {
      id: 18,
      name: 'Ms. Niharka Joshi',
      designation: 'Assistant Professor',
      qualifications: 'MBA',
      experience_years: '1+ Year',
      photo_url: 'uploads/faculty/69cfb8d929f96_1775220953.jpeg',
      program: 'MBA',
      is_active: true,
      display_order: 9,
    },
    {
      id: 20,
      name: 'Nandan G Swamy',
      designation: 'Assistant Professor',
      qualifications: 'MBA',
      experience_years: '1+ Year',
      photo_url: 'uploads/faculty/69cfb92541f46_1775221029.jpeg',
      program: 'MBA',
      is_active: true,
      display_order: 10,
    },
  ],
  Languages: [
    {
      id: 54,
      name: 'Mr. Nikhil Chowdayya',
      designation: 'Assistant Professor',
      qualifications: 'M.A., B.Ed.',
      experience_years: '2+ Years',
      photo_url: 'uploads/faculty/69cfd033bcd54_1775226931.jpeg',
      program: 'Languages',
      is_active: true,
      display_order: 1,
    },
    {
      id: 53,
      name: 'Ms. Shruthi N T',
      designation: 'Assistant Professor',
      qualifications: 'M.A., B.Ed., NET',
      experience_years: '2+ Years',
      photo_url: 'uploads/faculty/69cfc785cf1a5_1775224709.jpeg',
      program: 'Languages',
      is_active: true,
      display_order: 2,
    },
  ]
};

export const useFaculty = (program: string) => {
  const [faculty, setFaculty] = useState<FacultyMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFaculty();
  }, [program]);

  const fetchFaculty = async () => {
    setLoading(true);
    try {
      const response = await fetch(getApiUrl(`api/faculty/manage.php?program=${program}`));
      if (response.ok) {
        const result = await response.json();
        if (result.success && Array.isArray(result.data) && result.data.length > 0) {
          const sorted = result.data
            .filter((f: any) => f.is_active !== false)
            .sort((a: any, b: any) => (a.display_order || 1) - (b.display_order || 1));
          setFaculty(sorted);
          setLoading(false);
          return;
        }
      }
    } catch (e) {
      console.warn(`Error fetching faculty for ${program}, using fallback:`, e);
    }

    // Fallback to localStorage
    try {
      const stored = localStorage.getItem('pbs_faculty_data');
      if (stored) {
        const parsed: FacultyMember[] = JSON.parse(stored);
        const programFaculty = parsed
          .filter(f => f.program === program && f.is_active !== false)
          .sort((a, b) => (a.display_order || 1) - (b.display_order || 1));
        if (programFaculty.length > 0) {
          setFaculty(programFaculty);
          setLoading(false);
          return;
        }
      }
    } catch (err) {
      console.error('Error parsing stored faculty:', err);
    }

    // Fallback to default
    setFaculty(DEFAULT_FACULTY_BY_PROGRAM[program] || []);
    setLoading(false);
  };

  return { faculty, loading, refresh: fetchFaculty };
};
