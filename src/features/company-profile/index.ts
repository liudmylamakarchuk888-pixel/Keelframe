// Public surface of the company profile feature.
//
// Only modules that do NOT import @react-pdf/renderer (or `qrcode`) are
// re-exported here. Anything that does — CompanyProfilePDF, ProfilePreview,
// fonts, qr — would drag the renderer and its six embedded TTFs into
// whatever bundle touches this file, so those are imported directly, and
// lazily, by the two places that need them: DownloadProfileButton (on click)
// and src/pages/CompanyProfile.tsx (on route).

export { DownloadProfileButton, companySlug } from './DownloadProfileButton';
export { sampleProfile } from './sampleProfile';
export { SECTIONS } from './sections';
export * from './types';
