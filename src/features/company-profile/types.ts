// ---------------------------------------------------------------
// The company profile data model.
//
// Every field is optional, and anything left empty renders as a bracketed
// placeholder in the accent colour ("[Company Name]") so a half-filled
// profile still lays out. The profile this repo ships is fully filled in —
// see sampleProfile.ts — and is meant to go to clients as it stands.
//
// The "max" note on each field is the length the layout was designed for.
// Past it the text still renders, but a page may run out of room — and
// every page is fixed height, so overflow is clipped rather than reflowed.
// ---------------------------------------------------------------

export interface ProfileCompany {
  /** max 28 chars — appears in the running head and on the cover. */
  name?: string;
  /** max 40 chars */
  legalName?: string;
  /** max 60 chars — the 40pt cover headline, 3 lines at most. */
  tagline?: string;
  /** max 130 chars — cover sub-headline, 2 lines. */
  lead?: string;
  /** max 4 chars */
  year?: string;
  /** Square-ish logo. Drawn at 14mm on the cover. */
  logoUrl?: string;
  /** max 34 chars */
  website?: string;
  /** max 34 chars */
  email?: string;
  /** max 22 chars */
  phone?: string;
  /** max 30 chars */
  hours?: string;
  /** max 40 chars */
  linkedin?: string;
  /** max 26 chars — "City, Country". */
  hq?: string;
  /** max 22 chars */
  registrationNo?: string;
  /** max 4 chars */
  foundedYear?: string;
  /** max 32 chars — e.g. "120+ full-time professionals". */
  teamSize?: string;
  /** Up to 3 are shown on the contact page. */
  offices?: ProfileOffice[];
  /** max 44 chars — the URL on the contact page CTA. */
  bookingUrl?: string;
  /** max 5 items, max 22 chars each — the cover service pills. */
  serviceTags?: string[];
  /** max 34 chars — the line under the company name on the cover. */
  kicker?: string;
}

export interface ProfileOffice {
  /** max 20 chars */
  city?: string;
  /** max 20 chars — "Headquarters", "Development centre". */
  type?: string;
  /** max 2 lines, max 34 chars each. */
  address?: string[];
}

/** Exactly 4 are shown in the contents-page "At a glance" box. */
export interface ProfileStat {
  /** max 7 chars — never wraps, so keep it short. */
  value?: string;
  /** max 26 chars */
  label?: string;
}

export interface ProfileCeo {
  /** max 26 chars */
  name?: string;
  /** max 52 chars */
  title?: string;
/** Optional transparent PNG of a signature; otherwise the name is set in type. */
  signatureUrl?: string;
  /** max 150 chars — the 20pt pull quote. */
  quote?: string;
  /** 4, max 260 chars each. */
  paragraphs?: string[];
  /** 3 short proof points shown beside the letter. */
  highlights?: ProfileStat[];
}

export interface ProfilePromise {
  /** max 26 chars */
  title?: string;
  /** max 80 chars */
  text?: string;
}

export interface ProfileValue {
  /** max 16 chars — one line in a 40mm column. */
  title?: string;
  /** max 70 chars */
  text?: string;
}

export interface ProfileAbout {
  /** max 145 chars */
  vision?: string;
  /** max 175 chars */
  mission?: string;
  /** Exactly 4. */
  values?: ProfileValue[];
  /** Wide photo, about 16:5. Drawn 174 × 52mm. */
  wideImageUrl?: string;
  /** max 260 chars — the lead paragraph under the About heading. */
  lead?: string;
  /** max 46 chars — the "Core services" row of the overview table. */
  coreServices?: string;
  /** max 34 chars — the "Other offices" row. */
  otherOffices?: string;
}

/** 5 to 7 rows. More than 7 will not fit the timeline. */
export interface ProfileMilestone {
  /** max 6 chars */
  year?: string;
  /** max 34 chars */
  title?: string;
  /** max 95 chars — one line. */
  text?: string;
}

export type ServiceIcon = 'code' | 'cloud' | 'ai-chip' | 'shield' | 'server' | 'pen';

/** Eleven, laid out 2 × 3 on page one and 2 × 3 (last cell the CTA) on page two. */
export interface ProfileService {
  icon?: ServiceIcon;
  /** max 32 chars */
  title?: string;
  /** max 95 chars — 2 lines. */
  description?: string;
  /** Exactly 3, max 38 chars each. */
  bullets?: string[];
}

/** One capability on the AI overview page. */
export interface ProfileAiCapability {
  icon?: ServiceIcon;
  /** max 28 chars */
  title?: string;
  /** max 105 chars */
  text?: string;
}

/** One rung of the model stack, deepest last. */
export interface ProfileAiLayer {
  /** "L1" .. "L6" */
  tag?: string;
  /** max 34 chars */
  title?: string;
  /** max 130 chars */
  text?: string;
  /** Up to 4 short technique names. */
  items?: string[];
}

export interface ProfileAi {
  /** max 230 chars — the lead on the AI overview page. */
  lead?: string;
  /** 6 capabilities. */
  capabilities?: ProfileAiCapability[];
  /** 6 layers of the stack. */
  layers?: ProfileAiLayer[];
  /** 3 deployment options — cloud API, private VPC, on-premise. */
  deployment?: ProfilePromise[];
  /** 4 bullets on how models are evaluated and kept honest. */
  evaluation?: string[];
  /** 4 stat tiles for the AI pages. */
  stats?: ProfileStat[];
}

export interface ProfileCta {
  /** max 30 chars */
  title?: string;
  /** max 80 chars */
  text?: string;
  /** max 22 chars */
  button?: string;
}

/** Exactly 8, laid out 4 × 2. */
export interface ProfileIndustry {
  /** max 22 chars */
  title?: string;
  /** max 52 chars — 3 lines in a 40mm column. */
  text?: string;
}

/** 6 rows. Chips must fit one line in the 138mm column. */
export interface ProfileTechGroup {
  /** max 14 chars */
  category?: string;
  /** max 6 items, max 14 chars each. */
  items?: string[];
}

/** Exactly 6 steps. */
export interface ProfileProcessStep {
  /** max 22 chars */
  title?: string;
  /** max 110 chars — 2 lines. */
  text?: string;
  /** max 44 chars — 2 lines in the 58mm right column. */
  deliverables?: string;
}

/** Exactly 3. */
export interface ProfileEngagementModel {
  /** max 20 chars */
  title?: string;
  /** max 110 chars */
  text?: string;
  /** max 44 chars */
  bestFor?: string;
}

/** Exactly 2. */
export interface ProfileCaseStudy {
  /** max 22 chars */
  industry?: string;
  /** max 16 chars */
  region?: string;
  /** max 14 chars */
  duration?: string;
  /** max 62 chars — 1 line at 13.5pt. */
  title?: string;
  /** max 190 chars */
  challenge?: string;
  /** max 190 chars */
  solution?: string;
  /** Exactly 3. */
  results?: ProfileStat[];
  /** max 60 chars — "Next.js · Node.js · Kubernetes". */
  tech?: string;
  /** Screenshot, JPEG or PNG, drawn at the head of the card. */
  imageUrl?: string;
  /** max 26 chars — the live domain, printed under the image. */
  domain?: string;
}

/** One tile in the Selected Portfolio grid. 18 of them, 9 to a page. */
export interface ProfilePortfolioItem {
  /** max 22 chars */
  name?: string;
  /** max 30 chars — "FinTech · Investing". */
  category?: string;
  /** max 12 chars — "2025" or "Live". */
  year?: string;
  /** max 20 chars — "iOS & Android". */
  platform?: string;
  /** max 78 chars — the headline result, 2 lines. */
  result?: string;
  /** JPEG or PNG. react-pdf cannot read the .webp files the site uses. */
  imageUrl?: string;
}

export interface ProfileTestimonial {
  /** max 190 chars */
  quote?: string;
  /** max 26 chars */
  name?: string;
  /** max 22 chars */
  title?: string;
  /** max 22 chars */
  company?: string;
  /** Square avatar, drawn as an 11mm circle. */
  avatarUrl?: string;
}

/** A client or partner named in type, since we do not redraw their logo. */
export interface ProfileWordmark {
  /** max 20 chars */
  name?: string;
  /** max 22 chars — the sector, or what the partnership covers. */
  note?: string;
}

export interface ProfileClients {
  /** 8 client wordmarks. */
  logos?: ProfileWordmark[];
  /** 3 testimonials. */
  testimonials?: ProfileTestimonial[];
  /** 4 partner wordmarks. */
  partners?: ProfileWordmark[];
}

/** Exactly 6, laid out 3 × 2. */
export interface ProfileTeamMember {
  /** max 24 chars */
  name?: string;
  /** max 30 chars */
  role?: string;
  /** max 95 chars — 3 lines in a 54.5mm column. */
  bio?: string;
  /** Portrait, 1:1. Without one the initials are set in the brand face. */
  photoUrl?: string;
}

export interface ProfileTeam {
  members?: ProfileTeamMember[];
  /** Exactly 4. */
  stats?: ProfileStat[];
  /** 3 notes on how a project team is put together. */
  staffing?: ProfilePromise[];
}

/** Exactly 4. */
export interface ProfileCertification {
  /** max 18 chars */
  name?: string;
  /** max 26 chars */
  subtitle?: string;
  /** Two or three letters set inside the badge ring — "ISO", "AWS". */
  abbr?: string;
  /** A drawn glyph instead of letters. */
  mark?: 'check' | 'shield' | 'cloud' | 'lock';
}

/** Exactly 6, laid out 2 columns × 3 rows. */
export interface ProfileWhyUs {
  /** max 26 chars */
  title?: string;
  /** max 90 chars — 2 lines. */
  text?: string;
}

export interface ProfileQuality {
  certifications?: ProfileCertification[];
  /** Exactly 4 bullets, max 46 chars each. */
  practices?: string[];
  /** Exactly 4 bullets, max 46 chars each. */
  security?: string[];
  whyUs?: ProfileWhyUs[];
}

export interface ProfileContact {
  /** max 60 chars — the 38pt back-cover headline, 2 lines. */
  headline?: string;
  /** max 150 chars */
  lead?: string;
  /** max 22 chars */
  button?: string;
}

/** Everything the 13-page document needs. */
export interface CompanyProfile {
  company?: ProfileCompany;
  /** Exactly 4 — the contents-page "At a glance" box. */
  glance?: ProfileStat[];
  ceo?: ProfileCeo;
  /** Exactly 3. */
  promises?: ProfilePromise[];
  about?: ProfileAbout;
  milestones?: ProfileMilestone[];
  /** Exactly 6, laid out 3 × 2. */
  keyNumbers?: ProfileStat[];
  services?: ProfileService[];
  ai?: ProfileAi;
  cta?: ProfileCta;
  industries?: ProfileIndustry[];
  techStack?: ProfileTechGroup[];
  process?: ProfileProcessStep[];
  engagementModels?: ProfileEngagementModel[];
  caseStudies?: ProfileCaseStudy[];
  /** 18 tiles across the two Selected Portfolio pages. */
  portfolio?: ProfilePortfolioItem[];
  /** max 95 chars — the note under the case studies. */
  caseStudiesNote?: string;
  clients?: ProfileClients;
  team?: ProfileTeam;
  quality?: ProfileQuality;
  contact?: ProfileContact;
  /** PNG data URL of the website QR code, built with `qrcode` before render. */
  qrDataUrl?: string;
}
