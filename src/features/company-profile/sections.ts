// ---------------------------------------------------------------
// The thirteen numbered sections.
//
// One list drives the contents page, every running head and every footer
// page number, so the three can never disagree. `page` is where the section
// starts; `spread` is how many pages it runs to.
// ---------------------------------------------------------------

export interface ProfileSection {
  /** Section number, "01" .. "13". */
  n: string;
  title: string;
  /** One line under the title on the contents page. */
  description: string;
  /** First printed page of the section. */
  page: string;
  /** Pages the section spans. Defaults to 1. */
  spread?: number;
}

export const SECTIONS: ProfileSection[] = [
  { n: '01', title: 'Message from the CEO', description: "Who we are, in our founder's words", page: '03' },
  { n: '02', title: 'About Us', description: 'Company overview, vision, mission and values', page: '04' },
  { n: '03', title: 'Our Journey', description: 'Milestones and key numbers', page: '05' },
  { n: '04', title: 'Services', description: 'All eleven services we deliver', page: '06', spread: 2 },
  { n: '05', title: 'AI Development', description: 'Every layer of the model stack, not just the API', page: '08', spread: 2 },
  { n: '06', title: 'Industries & Technology', description: 'Sectors we serve and the stack we use', page: '10' },
  { n: '07', title: 'How We Work', description: 'Delivery process and engagement models', page: '11' },
  { n: '08', title: 'Case Studies', description: 'Four projects in depth, with measurable results', page: '12', spread: 2 },
  { n: '09', title: 'Selected Portfolio', description: 'Eighteen products we designed and built', page: '14', spread: 2 },
  { n: '10', title: 'Clients & Partners', description: 'Who we work with and what they say', page: '16' },
  { n: '11', title: 'Leadership Team', description: 'The people accountable for your project', page: '17' },
  { n: '12', title: 'Quality & Why Choose Us', description: 'Certifications, security practices, differentiators', page: '18' },
  { n: '13', title: 'Contact Us', description: 'Offices and how to reach us', page: '19' },
];

/** Looks a section up by number — `section('04')` for the services pages. */
export const section = (n: string): ProfileSection => {
  const found = SECTIONS.find((s) => s.n === n);
  if (!found) throw new Error(`Unknown profile section "${n}"`);
  return found;
};

/** Running head text for a section: "04  SERVICES". */
export const runningHead = (n: string) => {
  const s = section(n);
  return `${s.n}  ${s.title}`;
};

/** Total pages: the cover, the contents page, then every section's spread. */
export const TOTAL_PAGES = 2 + SECTIONS.reduce((sum, s) => sum + (s.spread ?? 1), 0);
