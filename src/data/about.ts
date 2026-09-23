// Content for the About page.

export const aboutHero = {
  eyebrow: 'About Keelframe',
  title: 'A powerful senior team that ships.',
  lede:
    'Keelframe is a London product engineering studio built by founders, for founders. We design and build AI features, web platforms, mobile apps, 3D experiences, Shopify stores, marketplaces and betting platforms — scoped in writing, delivered on a date, and owned by you from the first commit.',
};

export const numbers = [
  { v: '50+', k: 'Products shipped' },
  { v: '2018', k: 'Founded' },
  { v: '100%', k: 'Code owned by clients' },
  { v: 'London', k: 'HQ · remote worldwide' },
];

export const story = [
  'Most agencies are built to sell hours. The pitch is done by senior people, the work is done by whoever is free, and the scope is discovered as the invoices arrive. We started Keelframe because we had been on the other side of that table and did not want to run a studio that way.',
  '**A ship is a keel and its frames — everything else is bolted on.** That is how we think about software. Get the structure right early, in writing, with the people who will actually build it, and the tenth feature ships as smoothly as the first. Skip it and every release gets slower until someone proposes a rewrite.',
  'So the studio runs on a few fixed habits: a written scope before anything starts, a working pilot in week one, a demo every week, and code that lives in your repositories and your cloud accounts from day one. Fifty-plus products later, that is still the whole method.',
];

export const principles = [
  { n: '01', title: 'Scope in writing, first', text: 'What we will build, when, what it costs and what is out — agreed before anything starts, and the document is the price.' },
  { n: '02', title: 'Senior people only', text: 'The engineers and designers on the discovery call are the ones who do the work. No bait-and-switch to a junior team after signing.' },
  { n: '03', title: 'Working software every week', text: 'A build you can click and a short written update every week, from week one. Progress you can forward to your board.' },
  { n: '04', title: 'You own everything', text: 'Repositories, cloud accounts, app-store listings and design files are yours from day one. Leave whenever you like and take it all with you.' },
  { n: '05', title: 'We push back', text: 'If a feature does not prove the core idea, we say so. A smaller product that launches beats a bigger one that never does.' },
  { n: '06', title: 'We stay after launch', text: 'Launch is the start of the useful part. Monitoring, support and a long-term partnership for the teams that want one.' },
];

export const whoWeWorkWith = [
  {
    title: 'Founders with something to prove',
    text: 'Pre-seed to Series A teams that need a first version live in weeks — and built so it survives the round that follows.',
    tags: ['MVP', 'Mobile', 'Web'],
  },
  {
    title: 'Products adding AI properly',
    text: 'Scale-ups that want language models, retrieval or automation inside an existing product, with evaluation and cost control from the start.',
    tags: ['AI', 'RAG', 'Agents'],
  },
  {
    title: 'Brands that sell at volume',
    text: 'E-commerce teams moving to Shopify, rebuilding a store that has become forty apps and a slow checkout, or putting a 3D configurator in front of a complex catalogue.',
    tags: ['Shopify Plus', 'Headless', '3D configurators'],
  },
  {
    title: 'Operators in regulated markets',
    text: 'Fintech, health tech, Web3 and betting products where compliance is a design constraint, not a checkbox at the end.',
    tags: ['FCA', 'ORCHA', 'KYC / AML'],
  },
];

export interface Member {
  name: string;
  role: string;
  bio: string;
  initials: string;
  photo?: string;       // file name in /public/img, optional
  placeholder?: boolean; // set to true to show the dashed "add real details" style
}

// DEMO CONTENT: the team below is filled in so the page looks complete for client demos.
// Kaito Takahashi and Li Wei come from the project write-ups in /reference; the other four
// names and bios are invented — replace them with the real team before the site goes live.
export const team: Member[] = [
  { name: 'James Whitlock', role: 'Founder & Engineering', bio: 'Fifteen years building products for fintech and health tech, previously engineering lead at two venture-backed startups. Writes every scope document and still ships code.', initials: 'JW' },
  { name: 'Sofia Lindqvist', role: 'Head of Design', bio: 'Product designer behind Gather, Ove and Clementine. Research first, then a design system developers can actually build from.', initials: 'SL' },
  { name: 'Kaito Takahashi', role: 'Lead Engineer, Frontend & 3D', bio: 'React, TypeScript and Three.js. Built the real-time 3D configurator for Beretta, including the WebGL pipeline and the 35% cut in load time.', initials: 'KT' },
  { name: 'Li Wei', role: 'Lead Engineer, Shopify', bio: 'Shopify Plus specialist. Custom themes, headless storefronts and the integrations behind high-volume stores such as Bay Smokes.', initials: 'LW' },
  { name: 'Marcus Adeyemi', role: 'Lead Engineer, Mobile', bio: 'Flutter and React Native. Ten years shipping to both stores; led the builds for Loom, Ove and Chance.ai.', initials: 'MA' },
  { name: 'Elena Petrova', role: 'Lead Engineer, AI', bio: 'Machine learning and LLM systems. Evaluation sets, retrieval pipelines and the monitoring that keeps a model honest after launch.', initials: 'EP' },
];
