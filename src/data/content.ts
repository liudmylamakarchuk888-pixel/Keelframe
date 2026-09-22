// Smaller content blocks: Explore AI cards, the service chooser table,
// the five-step process, engagement models, testimonials and the FAQ.

export interface ExploreItem {
  title: string;
  text: string;
  subject: string; // mailto subject
  icon: 'loop' | 'chat' | 'compass' | 'sparkle' | 'scatter' | 'doc' | 'route' | 'nodes';
}

export const exploreAI: ExploreItem[] = [
  { icon: 'loop', title: 'AI Automation', subject: 'AI automation', text: 'Workflow, document and support automation wired into the product, with a human step wherever a mistake would cost money.' },
  { icon: 'chat', title: 'AI Chatbots', subject: 'AI chatbot', text: 'Production chat grounded in your own content, with guardrails, escalation to a person, and answers you can audit.' },
  { icon: 'compass', title: 'AI Consulting', subject: 'AI consulting', text: 'Strategy, roadmaps and build-versus-buy decisions from engineers who ship, not analysts who forecast.' },
  { icon: 'sparkle', title: 'Generative AI', subject: 'Generative AI', text: 'Text, image and code generation features that are evaluated, costed and monitored before users ever see them.' },
  { icon: 'scatter', title: 'Machine Learning', subject: 'Machine learning', text: 'Classical models — forecasting, classification, ranking — for the many problems where a language model is the wrong tool.' },
  { icon: 'doc', title: 'RAG Development', subject: 'RAG', text: "Retrieval pipelines that ground every answer in your verified documents instead of the model's memory." },
  { icon: 'route', title: 'LLM Integration', subject: 'LLM integration', text: 'Claude, GPT and open-weight models routed per task on accuracy, cost and latency — and swapped when a better one arrives.' },
  { icon: 'nodes', title: 'AI Agents', subject: 'AI agents', text: 'Multi-step agents with explicit tools, limits and approvals, built for tasks where a wrong action has consequences.' },
];

/** Columns match the `short` labels in services.ts, in order. */
export const chooserColumns = ['AI', 'Web', 'Mobile', 'MVP', 'UX/UI', 'Custom', 'Shopify', 'Betting', '3D', 'Web3', 'Marketplace'];

export const chooserRows: { need: string; fits: string[] }[] = [
  { need: 'AI or ML inside an existing product', fits: ['AI', 'MVP', 'Custom'] },
  { need: 'A full-stack web application', fits: ['Web', 'MVP', 'Custom'] },
  { need: 'An app on iOS and Android', fits: ['Mobile', 'MVP'] },
  { need: 'An online store that converts', fits: ['UX/UI', 'Shopify'] },
  { need: 'Moving an existing store to Shopify', fits: ['Shopify'] },
  { need: 'A 3D product configurator or visualiser', fits: ['Web', 'UX/UI', '3D'] },
  { need: 'A two-sided marketplace', fits: ['Web', 'Mobile', 'MVP', 'Marketplace'] },
  { need: 'Tokens, wallets or on-chain features', fits: ['Custom', 'Web3'] },
  { need: 'A casino, sportsbook or prediction product', fits: ['Mobile', 'Custom', 'Betting'] },
  { need: 'Something live in under six weeks', fits: ['MVP', 'Shopify'] },
  { need: 'A product to demo to investors', fits: ['Web', 'Mobile', 'MVP', 'UX/UI'] },
  { need: 'A design system and component library', fits: ['UX/UI'] },
  { need: 'User research and usability testing', fits: ['UX/UI'] },
  { need: 'Replacing software that no longer fits', fits: ['Custom'] },
  { need: 'Support after launch', fits: chooserColumns },
];

export const processSteps = [
  { n: '01', when: 'Day 1', title: 'Discovery call', text: 'Thirty minutes to understand the idea, the goal and what success looks like. Free, and not a sales pitch.' },
  { n: '02', when: 'Day 2–3', title: 'Written scope', text: 'A plan you can read in ten minutes: what we will build, how long it takes, what it costs, and what is out.' },
  { n: '03', when: 'Week 1', title: 'Pilot deliverable', text: 'We build one small, real piece first. You see working software before committing to the full scope.' },
  { n: '04', when: 'Throughout', title: 'Weekly demos', text: 'A working build and a short written update every week, ready to forward to your board or investors.' },
  { n: '05', when: 'After launch', title: 'We stay', text: 'Post-launch support, monitoring, and a long-term partnership for the teams that want one.' },
];

/** Engagement models, shown under the process steps. */
export const engagementModels = [
  {
    title: 'Fixed-price scope',
    best: 'A defined product or feature set',
    text: 'The written scope is the price. Delivery dates and payment milestones are agreed before work starts, and changes are handled with a one-page change note.',
  },
  {
    title: 'Monthly retainer',
    best: 'Ongoing product work after launch',
    text: 'A reserved block of senior time each month for improvements, new features, monitoring and support. Month to month, with no long lock-in.',
  },
  {
    title: 'Dedicated team',
    best: 'A product that needs full-time attention',
    text: 'A named engineer-and-designer team embedded with yours, working in your repositories and tools, for three months or more.',
  },
  {
    title: 'Design or consulting sprint',
    best: 'Deciding what to build',
    text: 'Two to four weeks of research, prototyping or architecture work that ends in a plan you can build with us — or with anyone else.',
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  tag: string;
  placeholder?: boolean; // true = shown with a dashed border and a "replace me" label
}

export const testimonials: Testimonial[] = [
  {
    tag: 'Gather · FinTech',
    quote:
      "The team has been instrumental in driving both the design and development of Gather, pairing a proactive, highly responsive workflow with the technical depth needed to handle our platform's complexity. Their partnership continues to move the product forward in a reliable and impactful way.",
    name: 'Chris Jones',
    role: 'Chief Product Officer, Gather',
  },
  // DEMO CONTENT: the two quotes below were written for client demos and are attributed to
  // invented people at portfolio clients. Replace them with real quotes before the site goes live
  // (or set `placeholder: true` to bring back the dashed "replace me" style).
  {
    tag: 'Loom · Fashion marketplace',
    quote:
      'We went from a Figma file to a live App Store listing in twenty-one weeks. The written scope meant no surprises on price, and the weekly demos meant our investors saw progress before we ever asked them for money.',
    name: 'Priya Raman',
    role: 'Founder, Loom',
  },
  {
    tag: 'Sinq · Construction',
    quote:
      'Variations that used to take three days to reconcile across spreadsheets now take an afternoon. When we changed the approval flow halfway through, we got a one-page change note the same week — and the launch date did not move.',
    name: 'Tom Hadley',
    role: 'Managing Director, Sinq',
  },
];

export const faq = [
  {
    q: 'Can one project use several services?',
    a: 'Yes, and most do. An MVP usually needs a mobile app and a backend; a Shopify store often needs custom design and a subscription or loyalty integration; a betting platform is a custom build with a mobile front end. We scope it as one build with one team, so nothing gets duplicated or lost in a hand-off.',
  },
  {
    q: 'Is there a minimum project size?',
    a: 'Design and consulting engagements start at two weeks. Development projects start at four weeks — the shortest time in which we can ship something real and support it properly. If your project is smaller than that, we will say so on the call and point you somewhere better.',
  },
  {
    q: 'How do you price?',
    a: 'Fixed price for defined scopes — the written scope document is the price. Monthly retainers for ongoing product work. We do not bill by the hour, because that rewards slowness.',
  },
  {
    q: 'What happens when requirements change?',
    a: 'They will, and the process expects it. Small changes are absorbed within the week. Larger ones get a one-page change note with the impact on time and cost, and nothing proceeds until you have approved it.',
  },
  {
    q: 'Do you offer support after launch?',
    a: 'Yes. Every project includes thirty days of post-launch support. After that, most clients move to a monthly retainer for monitoring, improvements and new features.',
  },
  {
    q: 'How long does a typical engagement last?',
    a: 'An MVP runs four to six weeks. Web and mobile products run two to four months. Custom platforms are scoped in phases, each with its own delivery date. Retainers run month to month.',
  },
  {
    q: 'Who owns the code?',
    a: 'You do, from day one. Everything lives in your repositories and your cloud accounts, so you can leave at any time and take all of it with you.',
  },
];
