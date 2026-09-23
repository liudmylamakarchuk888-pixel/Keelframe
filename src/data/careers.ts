// Content for the Careers page.
//
// DEMO CONTENT: the culture copy, benefits and open roles below are written so the page
// looks complete for client demos. Replace them with the real positions (or a
// "no open roles right now" note) before the site goes live.

export const careersLede =
  'Keelframe is a powerful senior team that scopes in writing, demos every week and stays after launch. We hire slowly, pay properly, and do not run timesheets.';

export const culture = [
  'Every engagement here is led by the person who scoped it, so you own a product end to end: the discovery call, the written scope, the pilot in week one, the weekly demos and what happens after launch. No hand-offs to a delivery team, no account managers between you and the client.',
  'We are remote-first with a desk in London for anyone who wants one. Work happens in the open, in writing and mostly asynchronously — a short written update every week is how we run projects, and how we run the studio.',
];

export const benefits = [
  { n: '01', title: 'Remote-first', text: 'Work from anywhere in the UK or EU. The London desk is there if you want it, never required.' },
  { n: '02', title: 'Senior only', text: 'Everyone here has shipped production software for years. You will not be managing juniors, or managed like one.' },
  { n: '03', title: 'No timesheets', text: 'We sell outcomes, not hours. Nobody tracks your time and nobody expects late nights.' },
  { n: '04', title: '28 days holiday', text: 'Plus UK bank holidays, and the studio closes between Christmas and New Year on top.' },
  { n: '05', title: '£2,000 learning budget', text: 'Courses, conferences, books and hardware, every year, with no approval form.' },
  { n: '06', title: 'Private health cover', text: 'Private medical insurance and a wellbeing allowance from your first day.' },
];

export interface Role {
  title: string;
  type: string;
  location: string;
  summary: string;
}

export const roles: Role[] = [
  {
    title: 'Senior Flutter Engineer',
    type: 'Full-time',
    location: 'Remote · UK / EU',
    summary: 'Lead mobile builds from scope to store listing. Flutter in production for three-plus years, comfortable owning a backend integration and talking to clients directly.',
  },
  {
    title: 'Senior Full-stack Engineer (TypeScript)',
    type: 'Full-time',
    location: 'Remote · UK / EU',
    summary: 'Next.js, Node and PostgreSQL across web platforms, marketplaces and AI features. You have run a production system and been on call for it.',
  },
  {
    title: 'Product Designer',
    type: 'Contract · 3–6 months',
    location: 'London · hybrid',
    summary: 'Research, prototyping and a design system developers can build from, on two client products at a time. Figma-fluent and comfortable presenting to founders.',
  },
];
