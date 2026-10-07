# DOCUMENT INVENTORY & UGC MAPPING

## 1. Document Inventory

| Original Filename | Document Title | Document Type | Issuing Authority | Date | UGC Category | Relevant Disclosure | Status | Reason |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `ALUMNI SOP SCANNED.pdf` | Alumni Association SOP | Standard Operating Procedure | Parivarthana Business School (PBS) | N/A | Policies / Committees | Alumni Association | APPROVED_FOR_PUBLICATION | Standard policy document required by UGC/NAAC. |
| `B.B.A. Syllabus (2).pdf` | B.B.A. Syllabus | Curriculum | University of Mysore | 2025-26 | Academic Data | Program Curriculum | APPROVED_FOR_PUBLICATION | Public academic syllabus. |
| `B.Com. (UG) Syllabus.pdf` | B.Com. Syllabus | Curriculum | University of Mysore | 2026-27 | Academic Data | Program Curriculum | APPROVED_FOR_PUBLICATION | Public academic syllabus. |
| `M.B.A. (PG) Syllabus 25-26.pdf` | M.B.A. Syllabus | Curriculum | University of Mysore | 2024-25 | Academic Data | Program Curriculum | APPROVED_FOR_PUBLICATION | Public academic syllabus. |
| `MCA Syllabus 2024-25.pdf` | M.C.A. Syllabus | Curriculum | University of Mysore | 2024-25 | Academic Data | Program Curriculum | APPROVED_FOR_PUBLICATION | Public academic syllabus. |
| `Human Rights committee.pdf` | Human Rights Cell SOP | SOP & Committee List | PBS | N/A | Administrative / Policies | Statutory Cells | APPROVED_FOR_PUBLICATION | Standard compliance cell document. |
| `ST cell.pdf` | SC/ST Cell SOP | SOP & Committee List | PBS | N/A | Administrative / Policies | Statutory Cells | APPROVED_FOR_PUBLICATION | Mandatory statutory cell disclosure. |
| `Library Details.pdf` | Library Details 2026 | Infrastructure Stats | PBS | 2026 | Infrastructure | Library Resources | APPROVED_FOR_PUBLICATION | Required physical infrastructure disclosure. |
| `DocScanner 28 Sept 2026 10-15 am.pdf` | Equal Opportunity Cell (EOC) | SOP & Committee List | PBS | Sept 2026 | Administrative / Policies | Statutory Cells | APPROVED_FOR_PUBLICATION | Mandatory statutory cell disclosure. |
| `DocScanner 28 Sept 2026 10-19 am (1).pdf` | Unidentified Committee/Scan | Unknown | PBS | Sept 2026 | Unknown | Unknown | NEEDS_CLIENT_VERIFICATION | Content illegible/missing OCR, need client to verify contents. |
| `WhatsApp Scan 2026-09-28 at 12.50.31.pdf` | MoU - GM Gems and Minerals | MoU | PBS & GM Gems | 2025-26 | Institutional Linkages | Industry Collaborations | APPROVED_FOR_PUBLICATION | Validates industry linkage claims. |
| `WhatsApp Scan 2026-09-28 at 12.52.21.pdf` | MoU - Eminence Academy | MoU | PBS & Eminence | 2025-26 | Institutional Linkages | Skill Development | APPROVED_FOR_PUBLICATION | Validates skill training claims. |
| `WhatsApp Scan 2026-09-28 at 12.54.45.pdf` | MoU - Youth for Seva | MoU | PBS & Youth for Seva | 2025-26 | Institutional Linkages | Community Services | APPROVED_FOR_PUBLICATION | Validates extension activities. |
| `WhatsApp Scan 2026-09-28 at 12.56.08.pdf` | Proposal/MoU - Manipal Hospitals| MoU | PBS & Manipal | Feb 2025 | Infrastructure/Linkages| Health Facilities | APPROVED_FOR_PUBLICATION | Health facility validation. |
| `WhatsApp Scan 2026-09-28 at 12.57.27.pdf` | MoU - ARC India | MoU | PBS & ARC India | 2025-26 | Institutional Linkages | Research Collaboration | APPROVED_FOR_PUBLICATION | Research and conference linkages. |
| `WhatsApp Scan 2026-09-28 at 12.58.50.pdf` | Waste Management MoU | MoU | PBS & Local Authority| 2025-26 | Green Initiatives | Environmental Policies| APPROVED_FOR_PUBLICATION | Environmental compliance. |
| `WhatsApp Scan 2026-09-28 at 13.00.45.pdf` | Unidentified Scan | Unknown | Unknown | 2025-26 | Unknown | Unknown | NEEDS_CLIENT_VERIFICATION | Content illegible/missing OCR, need client to verify contents. |

---

## 2. UGC Requirement Mapping

| UGC REQUIREMENT | RELEVANT PDF | CURRENT WEBSITE PAGE | NEW PAGE/COMPONENT REQUIRED | CLIENT INPUT REQUIRED |
| :--- | :--- | :--- | :--- | :--- |
| **Academic Programs & Curricula** | All Syllabus PDFs | Program Pages (e.g., `BBAPage.tsx`) | `DownloadSyllabusComponent` on Program pages | No |
| **Statutory Committees (EOC, ST/SC)**| `DocScanner 10-15 am.pdf`, `ST cell.pdf` | `StatutoryCellsPage.tsx` | New Sections in `StatutoryCellsPage.tsx` | Verify committee member names if not in PDFs. |
| **Other Committees (Human Rights)** | `Human Rights committee.pdf` | `StatutoryCellsPage.tsx` | New Section in `StatutoryCellsPage.tsx` | Verify committee member names. |
| **Alumni Network** | `ALUMNI SOP SCANNED.pdf` | None | New `AlumniPage.tsx` under Student Corner | Details of alumni portal or registration link. |
| **Industry Linkages / MoUs** | All `WhatsApp Scan` PDFs | `CommunityServicesPage.tsx`, `TAPCellPage.tsx` | New "MoUs & Linkages" component/section | Verify if all MoUs should be public. |
| **Library / Infrastructure** | `Library Details.pdf` | `FacilitiesPage.tsx` | Update metrics in `FacilitiesPage.tsx` | Confirm if any other facilities need updating. |
| **Search Functionality** | None | None | Global `SearchComponent` in Header | No |
| **Financial Audits / Annual Reports**| None Provided | `MandatoryDisclosurePage.tsx` | "Financial Disclosures" tab/section | Client must provide Audit/Financial PDFs. |
| **IQAC / Quality Assurance** | None Provided | None | New `IQACPage.tsx` | Client must provide IQAC policies/minutes. |
| **Research / Extension Activities** | `ARC India MoU` | None | New `ResearchPage.tsx` | Client must provide list of publications. |
