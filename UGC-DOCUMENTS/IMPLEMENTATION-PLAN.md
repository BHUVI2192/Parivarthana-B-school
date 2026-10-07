# IMPLEMENTATION PLAN & ARCHITECTURE
## Parivarthana Business School - UGC Public Self-Disclosure Guidelines 2024

This document outlines the architectural changes required to bring the PBS codebase into compliance with UGC guidelines without destroying the existing UI/UX.

---

### A. Routes

The existing application uses a custom client-side mapping in `App.tsx` (`URL_TO_PAGE_MAP`). We will extend this architecture naturally:

*   **Core Disclosure Hub:** `/about/ugc-disclosure` -> mapped to a new `UGCDisclosurePage` component. (This will replace or significantly expand the existing `MandatoryDisclosurePage`).
*   **Alumni:** `/student-corner/alumni` -> mapped to `AlumniPage`.
*   **IQAC:** `/about/iqac` -> mapped to `IQACPage`.
*   **Research:** `/academics/research` -> mapped to `ResearchPage`.

### B. Components

We will build the following reusable React components:

1.  **`UGCCategoryCard`**: A card component to visually segment disclosures (e.g., "Administration", "Academics", "Financials").
2.  **`DocumentList`**: A reusable list component for rendering rows of PDFs with `Download` and `View` actions.
3.  **`YearFilter`**: A dropdown component to toggle between academic/financial years for archive purposes.
4.  **`SearchModal`**: An overlay component triggered from the Header, managing a global search input and displaying categorized results.
5.  **`SyllabusDownloadButton`**: A small, reusable component injected into the existing `BBAPage`, `BCAPage`, etc.

### C. Data Structure

We will define a strict TypeScript interface for all UGC documents, stored in a static configuration file (e.g., `src/data/ugcDocuments.ts`).

```typescript
export type DisclosureCategory = 
  | 'Institutional Profile'
  | 'Administration'
  | 'Academics & Syllabus'
  | 'Financials & Audits'
  | 'Statutory Policies'
  | 'MoUs & Linkages';

export interface UGCDocument {
  id: string;
  title: string;
  category: DisclosureCategory;
  year: string;           // e.g., '2024-25', '2025-26'
  description: string;
  fileUrl: string;        // Path relative to public/ or assets
  publishDate: string;    // ISO date string
  isArchive?: boolean;
}
```

### D. Search Implementation

*   **Architecture:** We will implement a client-side search overlay. Since the site is primarily static and lacks a complex CMS backend, we will not implement PDF full-text extraction for the search engine.
*   **Scope:** The search will query a static index containing:
    1. Page titles and routes.
    2. `UGCDocument` metadata (titles, categories, descriptions).
*   **Execution:** A search icon will be added to `Header.tsx`. Clicking it opens a `SearchModal`. As the user types, a simple `.filter()` or `fuse.js` query will match against the static index and return clickable links directly to the page or PDF.

### E. Archives Implementation

Year-wise disclosures will be managed purely via the `year` property in the `UGCDocument` data structure. 
*   When a new academic year starts, old documents are NOT overwritten. Instead, new documents are added with the new `year` tag.
*   The `UGCDisclosurePage` will feature a `YearFilter` dropdown. Selecting an older year filters the `DocumentList` to only show documents from that period, fulfilling the UGC archive requirement cleanly.

### F. Navigation

The "UGC Public Self-Disclosure" link will be placed prominently in two locations to satisfy the "easily accessible" requirement:
1.  **Header:** Under the "About Us" dropdown, replacing or supplementing the current "Essential Documents" link.
2.  **Footer:** A dedicated high-visibility link under the "Quick Links" column.

### G. Mobile Implementation

*   The `SearchModal` will expand to `100vw` and `100vh` on mobile for ease of typing.
*   PDF previews using `<object>` often fail or render poorly on mobile browsers (Safari/Chrome for iOS/Android). We will implement CSS media queries or `window.innerWidth` checks to hide the inline PDF preview on mobile devices, relying solely on highly visible `Download PDF` and `Open in New Tab` fallback buttons.

### H. Accessibility (A11y)

To meet UGC public access requirements:
1.  **Semantic HTML:** Ensure `SearchModal` uses `<dialog>` or proper `role="dialog"` attributes.
2.  **Keyboard Navigation:** The `SearchModal` must trap focus. All PDF buttons must be accessible via `Tab`.
3.  **ARIA Labels:** Add descriptive `aria-label` attributes to all document download links (e.g., `aria-label="Download BBA Syllabus 2024-25 PDF"`).
4.  **No Authentication:** Ensure the `ProtectedRoute` wrapper in `App.tsx` is strictly bypassed for all UGC disclosure routes.

---

## FINAL IMPLEMENTATION ORDER

DO NOT DEVIATE from this execution order.

### PHASE 1: Core UGC disclosure architecture
*   **FILES TO MODIFY:** `src/App.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`
*   **FILES TO CREATE:** `src/data/ugcDocuments.ts`, `src/pages/UGCDisclosurePage.tsx`
*   **RISKS:** Breaking existing navigation flow.
*   **DEPENDENCIES:** None.
*   **CLIENT INPUT REQUIRED:** None.

### PHASE 2: Document registry + PDF integration
*   **FILES TO MODIFY:** `src/pages/BBAPage.tsx` (and other program pages).
*   **FILES TO CREATE:** `src/components/UGCCategoryCard.tsx`, `src/components/DocumentList.tsx`, `src/components/YearFilter.tsx`
*   **RISKS:** PDF loading errors if paths are incorrect.
*   **DEPENDENCIES:** Phase 1, moving PDFs to `public/files/`.
*   **CLIENT INPUT REQUIRED:** None.

### PHASE 3: Search + filtering
*   **FILES TO MODIFY:** `src/components/Header.tsx`
*   **FILES TO CREATE:** `src/components/SearchModal.tsx`, `src/utils/searchIndex.ts`
*   **RISKS:** Mobile z-index conflicts with the existing hamburger menu.
*   **DEPENDENCIES:** Phase 1 & 2.
*   **CLIENT INPUT REQUIRED:** None.

### PHASE 4: Missing statutory/institutional pages
*   **FILES TO MODIFY:** `src/pages/StatutoryCellsPage.tsx`, `src/pages/FacilitiesPage.tsx`
*   **FILES TO CREATE:** `src/pages/IQACPage.tsx`, `src/pages/ResearchPage.tsx`
*   **RISKS:** Layout breakage on large tables.
*   **DEPENDENCIES:** None.
*   **CLIENT INPUT REQUIRED:** Names for Human Rights, ST Cell, and IQAC committee members.

### PHASE 5: Alumni
*   **FILES TO MODIFY:** `src/App.tsx`
*   **FILES TO CREATE:** `src/pages/AlumniPage.tsx`
*   **RISKS:** Low risk.
*   **DEPENDENCIES:** Phase 1.
*   **CLIENT INPUT REQUIRED:** Link to alumni registration portal (if any).

### PHASE 6: Accessibility + responsive improvements
*   **FILES TO MODIFY:** Global check across new components.
*   **FILES TO CREATE:** None.
*   **RISKS:** Modifying Tailwind classes might inadvertently break existing desktop layouts.
*   **DEPENDENCIES:** Phases 1-5.
*   **CLIENT INPUT REQUIRED:** None.

### PHASE 7: Content verification
*   **FILES TO MODIFY:** `src/components/AboutSection.tsx`, `src/components/Footer.tsx`
*   **FILES TO CREATE:** None.
*   **RISKS:** Delay in launch if client does not respond.
*   **DEPENDENCIES:** Client providing answers to `CLIENT-VERIFICATION.md`.
*   **CLIENT INPUT REQUIRED:** Verification of Establishment Year, Law Program, and quantitative metrics.

### PHASE 8: Testing
*   Verify all PDF downloads.
*   Verify Search Modal on mobile.
*   Run Lighthouse accessibility audit.

### PHASE 9: Production build
*   Execute `npm run build`.
*   Deploy `dist/` folder via cPanel as outlined in `ROUTES.md`.
