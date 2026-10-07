# CLIENT VERIFICATION CHECKLIST

Before launching the UGC-compliant website, PBS Administration MUST verify the following institutional facts and metrics to ensure accurate public disclosure and prevent misleading claims.

| ITEM TO VERIFY | CURRENT VALUE IN CODEBASE | SOURCE FILE(S) | CONFLICT / ISSUE | REQUIRED CLIENT CONFIRMATION |
| :--- | :--- | :--- | :--- | :--- |
| **1. Establishment Year** | "established in 2023-24" | `src/components/AboutSection.tsx` | Conflicts with the "over five decades" claim below. | Confirm the exact establishment year of Parivarthana Business School. |
| **2. Parent Trust History** | "among our students for over five decades." | `src/components/Footer.tsx` | Impossible if the school was established in 2023. | Is this referring to the parent Trust (Om Shreenikethana Trust)? If so, wording needs adjusting. |
| **3. Number of Programmes** | 5 (BBA, BCA, BCom, MBA, MCA) | `src/App.tsx`, `Header.tsx` | Accurate based on syllabus PDFs provided. | Confirm these are the ONLY 5 active programs. |
| **4. Law Programme** | "Management, Commerce, Computer Applications, and Law." | `src/components/AboutSection.tsx` | No Law program pages or syllabi exist. | Does PBS offer a Law program? If not, the word "Law" must be removed. |
| **5. Student Count** | "300+" | `src/components/AboutSection.tsx` | Could be an outdated or placeholder metric. | Confirm exact or approximate student count for public disclosure. |
| **6. Faculty Count** | "15+" | `src/components/AboutSection.tsx` | Could be an outdated or placeholder metric. | Confirm exact or approximate faculty count. |
| **7. Placement Statistics** | "100+" | `src/components/AboutSection.tsx` | Specific numeric claim. | Verify if 100+ students have been placed. |
| **8. University of Mysore** | "Affiliated to University of Mysore" | `HeroSection.tsx`, `AboutPBSPage.tsx`| Valid claim. | Confirm affiliation is currently active for 2024-25. |
| **9. AICTE Approval** | "Approved by AICTE" | `MandatoryDisclosurePage.tsx` | Valid claim. | Confirm AICTE approval is active for 2024-25. |
| **10. Govt of Karnataka** | "Recognized by Govt. of Karnataka" | `HeroSection.tsx`, `AboutPBSPage.tsx`| Valid claim. | Confirm recognition is active. |
| **11. Committee Members** | Hardcoded names in `StatutoryCellsPage.tsx` | `StatutoryCellsPage.tsx` | Names might change per academic year. | Provide the current (2024-25) list of coordinators and members for ALL cells. |
| **12. Unidentified PDFs** | Two `WhatsApp Scan`/`DocScanner` PDFs | `UGC-DOCUMENTS/` folder | OCR failed or content illegible. | Clarify the contents of `WhatsApp Scan ... 13.00.45.pdf` and `DocScanner ... 10-19 am (1).pdf`. |
| **13. MoUs Publication** | 5+ MoUs with Manipal, GM Gems, etc. | `UGC-DOCUMENTS/` folder | Identified in PDFs. | Confirm if you want ALL these MoUs uploaded to the public website. |
| **14. Financial Documents** | Missing | Entire codebase | UGC mandates Annual Reports & Audited Financials. | Provide PDF copies of Balance Sheet, Income/Expenditure, and Audit Reports. |
| **15. IQAC Information** | Missing | Entire codebase | UGC mandates IQAC disclosures. | Provide IQAC composition and meeting minutes. |
| **16. Accreditation Claims**| Missing | Entire codebase | UGC mandates NAAC/NBA/NIRF status. | Provide NAAC/NBA status or explicitly state "Not yet accredited" if applicable. |
