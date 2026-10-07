export type DisclosureCategory = 
  | 'Institutional Profile'
  | 'Administration'
  | 'Academics & Syllabus'
  | 'Financials & Audits'
  | 'Statutory Policies'
  | 'MoUs & Linkages'
  | 'Infrastructure';

export interface UGCDocument {
  id: string;
  title: string;
  category: DisclosureCategory;
  year: string;
  documentType: string;
  description: string;
  fileUrl: string;
  publishDate: string;
}

export const ugcDocuments: UGCDocument[] = [
  {
    id: 'alumni-sop',
    title: 'Alumni Association SOP',
    category: 'Statutory Policies',
    year: '2024-25',
    documentType: 'Standard Operating Procedure',
    description: 'Guidelines and SOP for the PBS Alumni Association.',
    fileUrl: '/files/ugc/Alumni_Association_SOP.pdf',
    publishDate: '2024-09-28'
  },
  {
    id: 'bba-syllabus',
    title: 'B.B.A. Syllabus',
    category: 'Academics & Syllabus',
    year: '2025-26',
    documentType: 'Curriculum',
    description: 'Detailed syllabus and curriculum for the BBA program (University of Mysore).',
    fileUrl: '/files/ugc/BBA_Syllabus.pdf',
    publishDate: '2024-09-28'
  },
  {
    id: 'bcom-syllabus',
    title: 'B.Com. Syllabus',
    category: 'Academics & Syllabus',
    year: '2026-27',
    documentType: 'Curriculum',
    description: 'Detailed syllabus and curriculum for the B.Com program (University of Mysore).',
    fileUrl: '/files/ugc/BCom_Syllabus.pdf',
    publishDate: '2024-09-28'
  },
  {
    id: 'mba-syllabus',
    title: 'M.B.A. Syllabus',
    category: 'Academics & Syllabus',
    year: '2024-25',
    documentType: 'Curriculum',
    description: 'Detailed syllabus and curriculum for the MBA program (University of Mysore).',
    fileUrl: '/files/ugc/MBA_Syllabus.pdf',
    publishDate: '2024-09-28'
  },
  {
    id: 'mca-syllabus',
    title: 'M.C.A. Syllabus',
    category: 'Academics & Syllabus',
    year: '2024-25',
    documentType: 'Curriculum',
    description: 'Detailed syllabus and curriculum for the MCA program (University of Mysore).',
    fileUrl: '/files/ugc/MCA_Syllabus.pdf',
    publishDate: '2024-09-28'
  },
  {
    id: 'human-rights-sop',
    title: 'Human Rights Cell SOP',
    category: 'Statutory Policies',
    year: '2024-25',
    documentType: 'SOP & Committee List',
    description: 'Standard Operating Procedure and committee details for the Human Rights Cell.',
    fileUrl: '/files/ugc/Human_Rights_Committee_SOP.pdf',
    publishDate: '2024-09-28'
  },
  {
    id: 'sc-st-cell-sop',
    title: 'SC/ST Cell SOP',
    category: 'Statutory Policies',
    year: '2024-25',
    documentType: 'SOP & Committee List',
    description: 'Standard Operating Procedure and committee details for the SC/ST Cell.',
    fileUrl: '/files/ugc/SC_ST_Cell_SOP.pdf',
    publishDate: '2024-09-28'
  },
  {
    id: 'library-details',
    title: 'Library Details',
    category: 'Infrastructure',
    year: '2026',
    documentType: 'Infrastructure Stats',
    description: 'Quantitative details regarding library books, journals, and resources.',
    fileUrl: '/files/ugc/Library_Details_2026.pdf',
    publishDate: '2024-09-28'
  },
  {
    id: 'equal-opportunity-sop',
    title: 'Equal Opportunity Cell (EOC) SOP',
    category: 'Statutory Policies',
    year: '2026',
    documentType: 'SOP & Committee List',
    description: 'Guidelines to ensure equality, inclusiveness, and fairness among all students and staff.',
    fileUrl: '/files/ugc/Equal_Opportunity_Cell_SOP.pdf',
    publishDate: '2024-09-28'
  },
  {
    id: 'mou-gm-gems',
    title: 'MoU - GM Gems and Minerals',
    category: 'MoUs & Linkages',
    year: '2025-26',
    documentType: 'Memorandum of Understanding',
    description: 'Industry linkage for internships and training.',
    fileUrl: '/files/ugc/MoU_GM_Gems.pdf',
    publishDate: '2024-09-28'
  },
  {
    id: 'mou-eminence',
    title: 'MoU - Eminence Academy',
    category: 'MoUs & Linkages',
    year: '2025-26',
    documentType: 'Memorandum of Understanding',
    description: 'Linkage for student skill development and soft skills training.',
    fileUrl: '/files/ugc/MoU_Eminence_Academy.pdf',
    publishDate: '2024-09-28'
  },
  {
    id: 'mou-youth-seva',
    title: 'MoU - Youth for Seva',
    category: 'MoUs & Linkages',
    year: '2025-26',
    documentType: 'Memorandum of Understanding',
    description: 'Collaboration for community-oriented services and volunteering.',
    fileUrl: '/files/ugc/MoU_Youth_For_Seva.pdf',
    publishDate: '2024-09-28'
  },
  {
    id: 'mou-manipal',
    title: 'Proposal/MoU - Manipal Hospitals',
    category: 'MoUs & Linkages',
    year: '2025-26',
    documentType: 'Memorandum of Understanding',
    description: 'Healthcare partner proposal and linkage.',
    fileUrl: '/files/ugc/MoU_Manipal_Hospitals.pdf',
    publishDate: '2024-09-28'
  },
  {
    id: 'mou-arc-india',
    title: 'MoU - Academic Research Conferences (ARC) India',
    category: 'MoUs & Linkages',
    year: '2025-26',
    documentType: 'Memorandum of Understanding',
    description: 'Collaboration for academic research and conferences.',
    fileUrl: '/files/ugc/MoU_ARC_India.pdf',
    publishDate: '2024-09-28'
  },
  {
    id: 'mou-waste-management',
    title: 'MoU - Waste Management',
    category: 'MoUs & Linkages',
    year: '2025-26',
    documentType: 'Memorandum of Understanding',
    description: 'Agreement for dry waste management and green initiatives.',
    fileUrl: '/files/ugc/MoU_Waste_Management.pdf',
    publishDate: '2024-09-28'
  }
];
