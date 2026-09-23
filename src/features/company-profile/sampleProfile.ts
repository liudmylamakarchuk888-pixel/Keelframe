// ---------------------------------------------------------------
// Keelframe's company profile — the version that goes to clients.
//
// Facts come from the site's own data files wherever they already exist
// (site.ts, about.ts, services.ts, projects.ts, content.ts, trust.ts), so
// the PDF and the website cannot drift apart. Copy written for the profile
// alone lives here.
//
// Every field is filled: the document has no placeholders and no "photo
// goes here" boxes. Where the studio has no asset — headshots, client
// logos, certification marks — the layout uses a designed alternative
// (initials, wordmarks, drawn badges) rather than an empty frame.
//
// DEMO CONTENT is called out inline, the same way the rest of the site
// flags it. The headline figures (250+ projects, 120+ specialists, 15
// countries) and the team breakdown are supplied numbers, not derived from
// this repo — confirm them before the profile goes out. See the README.
// ---------------------------------------------------------------

import { site } from '../../data/site';
import { principles, story, team } from '../../data/about';
import { engagementModels, processSteps, testimonials } from '../../data/content';
import { services } from '../../data/services';
import { projects } from '../../data/projects';
import { accreditations, clients } from '../../data/trust';
import { asset, projectImage } from './assets';
import type { CompanyProfile, ProfilePortfolioItem } from './types';

/** Strips the **bold** markers the About page uses in its story paragraphs. */
const plain = (text: string) => text.replace(/\*\*/g, '');

/** Looks a service up by id, so the profile always quotes the live copy. */
const service = (id: string) => services.find((s) => s.id === id)!;

/** First three "point" titles of a service, used as the card bullets. */
const bullets = (id: string) => service(id).points.slice(0, 3).map((p) => p.title);

const project = (id: string) => projects.find((p) => p.id === id)!;

/** Years trading, from the founding year in site.ts. */
const yearsTrading = site.year - site.founded;

/**
 * Turns a portfolio entry into a grid tile. `stat` on the website is a
 * middot-separated run of facts; the tile keeps the first three so it fits
 * two lines.
 */
const tile = (id: string, result?: string): ProfilePortfolioItem => {
  const p = project(id);
  return {
    name: p.name,
    category: p.cat,
    year: p.year,
    platform: p.platform,
    result: result ?? p.stat.split(' · ').slice(0, 3).join(' · '),
    imageUrl: projectImage(p.img),
  };
};

export const sampleProfile: CompanyProfile = {
  company: {
    name: site.name,
    legalName: site.legal.name,
    tagline: 'Custom software and AI for founders and growing businesses.',
    lead: 'AI features, web platforms, mobile apps, Shopify stores and marketplaces — scoped in writing, shipped on a date.',
    year: String(site.year),
    // DEMO: the domain is assumed from the contact address (hello@keelframe.org).
    website: 'keelframe.org',
    email: site.email,
    phone: site.phone,
    hours: 'Mon–Fri, 9:00–18:00 UK time',
    linkedin: 'linkedin.com/company/keelframe',
    hq: 'London, United Kingdom',
    registrationNo: site.legal.companyNumber,
    foundedYear: String(site.founded),
    // DEMO: supplied headcount, not derived from this repo.
    teamSize: '120+ engineers & specialists',
    bookingUrl: site.bookingUrl || 'keelframe.org/#/contact',
    kicker: 'Product engineering studio',
    serviceTags: ['AI Development', 'Web Platforms', 'Mobile Apps', 'Shopify', 'Betting Platforms'],
    offices: [
      { city: site.location, type: 'Headquarters', address: site.address },
      {
        city: 'Remote',
        type: 'Delivery team',
        address: ['Engineers across the UK and EU', 'Overlapping your working day'],
      },
    ],
  },

  // DEMO: supplied figures. The site's own trust strip quotes 50+ products
  // shipped and 18 portfolio projects; these are the wider delivery numbers.
  glance: [
    { value: `${yearsTrading}+`, label: 'Years in business' },
    { value: '250+', label: 'Projects delivered' },
    { value: '120+', label: 'Engineers & specialists' },
    { value: '15', label: 'Countries served' },
  ],

  ceo: {
    // DEMO: the team in about.ts is written for client demos — replace the
    // founder's name and title when the real ones are confirmed.
    name: team[0].name,
    title: `Founder & Engineering, ${site.name}`,
    quote:
      'A ship is a keel and its frames — everything else is bolted on. That is how we think about software.',
    paragraphs: [
      plain(story[0]),
      'Get the structure right early, in writing, with the people who will actually build it, and the tenth feature ships as smoothly as the first. Skip it and every release gets slower until someone proposes a rewrite.',
      'So the studio runs on a few fixed habits: a written scope before anything starts, a working pilot in week one, a demo every week, and code that lives in your repositories and your cloud accounts from day one.',
      'Two hundred and fifty projects later, that is still the whole method. This profile sets out what we build, how we work and who you would be working with. I look forward to the conversation.',
    ],
    highlights: [
      { value: '250+', label: 'Projects delivered since 2018' },
      { value: '15', label: 'Countries served' },
      { value: '100%', label: 'Code owned by clients' },
    ],
  },

  promises: [
    { title: principles[0].title, text: 'What we build, when, what it costs and what is out — agreed before anything starts.' },
    { title: principles[1].title, text: 'The engineers on the discovery call are the ones who do the work. No bait-and-switch.' },
    { title: principles[3].title, text: 'Repositories, cloud accounts and design files are yours from day one.' },
  ],

  about: {
    lead: 'We design and build AI features, web platforms, mobile apps, 3D experiences, Shopify stores, marketplaces and betting platforms — scoped in writing, delivered on a date, and owned by you from the first commit.',
    coreServices: 'AI, web, mobile, Shopify, marketplaces, betting',
    otherOffices: 'Remote · UK, EU and Asia',
    vision:
      'To be the studio founders come back to — known for software that is still standing when the tenth feature lands.',
    mission:
      'To scope honestly, ship working software every week, and hand over a product our clients fully own, from the repositories to the cloud accounts.',
    values: [
      { title: 'Ownership', text: 'You own the repositories, the cloud accounts and the design files from day one.' },
      { title: 'Craft', text: 'Structure decided early so the fortieth feature ships as fast as the fourth.' },
      { title: 'Transparency', text: 'A written scope, a weekly demo and a short written update. That is the method.' },
      { title: 'Candour', text: 'If a feature does not prove the core idea, we say so before it is built.' },
    ],
    // Supplied by the studio for this profile.
    wideImageUrl: asset('office-wide.jpg'),
  },

  // DEMO: the founding year is real; the 2021 and 2023 entries are inferred
  // from the portfolio. Confirm the dates before this goes out.
  milestones: [
    { year: String(site.founded), title: 'Keelframe founded', text: 'A London studio built on one habit: the scope is written down before anything starts.' },
    { year: '2021', title: 'Shopify Plus practice', text: 'High-volume storefronts for DTC brands, including Bay Smokes and Sparkle In Pink.' },
    { year: '2023', title: 'AI and 3D practices open', text: 'LLM features, retrieval pipelines and the real-time WebGL configurator built for Beretta.' },
    { year: '2024', title: 'Health and wellness at scale', text: 'Clementine, Lost and Found Crew and My Best Mood ship to the App Store and Google Play.' },
    { year: '2025', title: 'FinTech, Web3 and marketplaces', text: 'Gather reaches both stores FCA-compliant; Loom, Sinq and Mosaic go live the same year.' },
    { year: String(site.year), title: 'Today', text: '120+ engineers and specialists, 250+ projects delivered, and every client still owning their code.' },
  ],

  keyNumbers: [
    { value: '250+', label: 'Projects delivered' },
    { value: '120+', label: 'Engineers & specialists' },
    { value: '15', label: 'Countries served' },
    { value: `${services.length}`, label: 'Services under one contract' },
    { value: '100%', label: 'Code owned by clients' },
    { value: '95%', label: 'Clients who come back' },
  ],

  // All eleven services from the website, in the order the site lists them.
  services: [
    {
      icon: 'ai-chip',
      title: service('ai-development').title,
      description: 'Language models, retrieval and automation built for the messy inputs real users type.',
      bullets: bullets('ai-development'),
    },
    {
      icon: 'code',
      title: service('web-development').title,
      description: 'Full-stack platforms with the architecture decided up front, so scale does not slow you down.',
      bullets: bullets('web-development'),
    },
    {
      icon: 'server',
      title: service('mobile-apps').title,
      description: 'iOS and Android from one codebase, with the smoothness people expect from native.',
      bullets: bullets('mobile-apps'),
    },
    {
      icon: 'cloud',
      title: service('mvp-development').title,
      description: 'A live product in four to six weeks, scoped to prove one idea and built to keep.',
      bullets: bullets('mvp-development'),
    },
    {
      icon: 'pen',
      title: service('ux-ui-design').title,
      description: 'Research-led product design that makes your developers faster, not slower.',
      bullets: bullets('ux-ui-design'),
    },
    {
      icon: 'shield',
      title: service('custom-platforms').title,
      description: 'Bespoke systems for operations that off-the-shelf software was never designed for.',
      bullets: bullets('custom-platforms'),
    },
    {
      icon: 'cloud',
      title: 'Shopify Development',
      description: 'Shopify and Shopify Plus storefronts for brands that sell at volume.',
      bullets: bullets('shopify-development'),
    },
    {
      icon: 'shield',
      title: 'Betting Platforms',
      description: 'Casino, sportsbook and prediction products built for regulated markets.',
      bullets: bullets('betting-platforms'),
    },
    {
      icon: 'pen',
      title: '3D & Interactive',
      description: 'Real-time configurators and product visualisers that run in a browser, on a phone.',
      bullets: bullets('3d-experiences'),
    },
    {
      icon: 'code',
      title: 'Web3 & Blockchain',
      description: 'Wallets, tokens and on-chain ownership inside products people actually use.',
      bullets: bullets('web3-blockchain'),
    },
    {
      icon: 'server',
      title: 'Marketplace Platforms',
      description: 'Two-sided marketplaces with the trust, payments and moderation machinery built in.',
      bullets: bullets('marketplace-platforms'),
    },
  ],

  ai: {
    lead: 'We have shipped AI since before it was a line item — aging-clock models for Rejuve.AI, an AI-assisted loan reviewer for a regional bank, adaptive storytelling for children. We work at whichever layer the problem needs, and we say which one that is before anything is built.',
    capabilities: [
      {
        icon: 'ai-chip',
        title: 'LLM features & copilots',
        text: 'Assistants, drafting and summarisation grounded in your data, with routing across models on accuracy, cost and latency.',
      },
      {
        icon: 'code',
        title: 'RAG & retrieval',
        text: 'Hybrid search, chunking strategies and rerankers so every answer cites a document you control, not the model’s memory.',
      },
      {
        icon: 'server',
        title: 'Agents & automation',
        text: 'Multi-step agents with explicit tools, budgets and approvals, for tasks where a wrong action has consequences.',
      },
      {
        icon: 'cloud',
        title: 'Classical ML',
        text: 'Forecasting, classification, ranking and recommendation — the many problems where a language model is the wrong tool.',
      },
      {
        icon: 'pen',
        title: 'Vision & multimodal',
        text: 'Document extraction, image understanding and speech, combined with text where the workflow needs both.',
      },
      {
        icon: 'shield',
        title: 'MLOps & governance',
        text: 'Versioned datasets, reproducible training runs, drift alerts and audit trails your compliance team can read.',
      },
    ],
    layers: [
      {
        tag: 'L1',
        title: 'Orchestration & prompting',
        text: 'Where most teams stop. Task decomposition, structured outputs, model routing, caching and prompt budgets that keep latency and the monthly bill predictable.',
        items: ['Structured output', 'Model routing', 'Semantic cache', 'Budget caps'],
      },
      {
        tag: 'L2',
        title: 'Retrieval & memory',
        text: 'Your corpus made searchable: chunking tuned to the document type, embeddings chosen by benchmark, hybrid keyword and vector search, and a reranker on top.',
        items: ['pgvector', 'Hybrid BM25', 'Rerankers', 'Chunk tuning'],
      },
      {
        tag: 'L3',
        title: 'Adaptation & fine-tuning',
        text: 'When prompting stops paying, we adapt the weights: supervised fine-tuning on your labelled data, parameter-efficient methods, and preference tuning where tone and judgement matter.',
        items: ['LoRA / QLoRA', 'SFT', 'DPO', 'Instruction tuning'],
      },
      {
        tag: 'L4',
        title: 'Model training & compression',
        text: 'Continued pre-training on domain corpora, distilling a large model into a small one you can afford to run, and quantising it to fit the hardware you actually have.',
        items: ['Continued pre-training', 'Distillation', 'Quantisation', 'Custom tokenizer'],
      },
      {
        tag: 'L5',
        title: 'Serving & infrastructure',
        text: 'Inference that holds under load: batched serving, GPU autoscaling, streaming responses, and the option to run entirely inside your own network.',
        items: ['vLLM', 'Triton', 'GPU autoscaling', 'Streaming'],
      },
      {
        tag: 'L6',
        title: 'Evaluation, safety & monitoring',
        text: 'Domain evaluation sets, adversarial testing, guardrails on input and output, and accuracy tracking after launch so you know when a model quietly stops helping.',
        items: ['Eval harness', 'Red-teaming', 'Guardrails', 'Drift alerts'],
      },
    ],
    deployment: [
      {
        title: 'Hosted APIs',
        text: 'Claude, GPT and open-weight models through their providers, routed per task and swapped when a better one arrives.',
      },
      {
        title: 'Your own cloud',
        text: 'Open-weight models served inside your VPC, so prompts and documents never leave your account or your region.',
      },
      {
        title: 'On-premise',
        text: 'Quantised models on your own GPUs for air-gapped environments, health data and anything that cannot go to a third party.',
      },
    ],
    evaluation: [
      'An evaluation set built from your domain, not a public benchmark',
      'Adversarial and edge-case inputs before launch, not after',
      'Accuracy, cost and latency tracked per release',
      'Drift alerts and a rollback path when quality slips',
    ],
    stats: [
      { value: '6', label: 'Layers of the stack we work at' },
      { value: '2019', label: 'Shipping ML in production since' },
      { value: '100%', label: 'AI features shipped with an eval set' },
      { value: '3', label: 'Deployment models, including on-premise' },
    ],
  },

  cta: {
    title: 'Not sure where to start?',
    text: 'Begin with a free discovery call and a scope you can read in ten minutes.',
    button: 'Book a discovery call',
  },

  industries: [
    { title: 'E-commerce & retail', text: 'Shopify Plus storefronts, headless builds, migrations' },
    { title: 'iGaming & betting', text: 'Casino, sportsbook and prediction platforms' },
    { title: 'Gaming & marketplaces', text: 'Two-sided marketplaces with escrow and payouts' },
    { title: 'Web3 & blockchain', text: 'Wallets, token rewards and on-chain ownership' },
    { title: 'Health tech', text: 'Patient-facing apps, wearables and health data' },
    { title: 'Fintech', text: 'FCA-compliant investing, payments and ledgers' },
    { title: 'Property & construction', text: 'Operations platforms, analytics and approvals' },
    { title: 'SaaS & B2B software', text: 'Bespoke platforms for businesses that outgrew tools' },
  ],

  techStack: [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Three.js', 'React Three Fiber'] },
    { category: 'Mobile', items: ['Flutter', 'React Native', 'Firebase', 'HealthKit'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'Laravel', 'GraphQL'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Cloudflare', 'Docker', 'Kubernetes'] },
    { category: 'Commerce', items: ['Shopify Plus', 'Liquid', 'Hydrogen', 'Stripe', 'Klaviyo'] },
    { category: 'Data & AI', items: ['PostgreSQL', 'PyTorch', 'LangChain', 'pgvector', 'vLLM'] },
  ],

  process: [
    {
      title: processSteps[0].title,
      text: 'Thirty minutes to understand the idea, the goal and what success looks like. Free, and not a sales pitch.',
      deliverables: 'A shared view of the goal',
    },
    {
      title: processSteps[1].title,
      text: 'A plan you can read in ten minutes: what we will build, how long it takes, what it costs, and what is out.',
      deliverables: 'Scope document, timeline, fixed price',
    },
    {
      title: 'Design & prototype',
      text: 'Research, user flows and a clickable prototype tested with real people before development starts.',
      deliverables: 'UX flows, UI designs, design system',
    },
    {
      title: processSteps[2].title,
      text: 'We build one small, real piece first. You see working software before committing to the full scope.',
      deliverables: 'A working build in week one',
    },
    {
      title: processSteps[3].title,
      text: 'A working build and a short written update every week, ready to forward to your board or investors.',
      deliverables: 'Weekly demo, written update',
    },
    {
      title: 'We stay after launch',
      text: 'Post-launch support, monitoring, and a long-term partnership for the teams that want one.',
      deliverables: 'Monitoring, support, ongoing roadmap',
    },
  ],

  engagementModels: [
    { title: engagementModels[0].title, text: 'The written scope is the price. Dates and payment milestones agreed before work starts; changes handled with a one-page note.', bestFor: engagementModels[0].best },
    { title: engagementModels[1].title, text: 'A reserved block of senior time each month for improvements, new features, monitoring and support. No long lock-in.', bestFor: engagementModels[1].best },
    { title: engagementModels[2].title, text: 'A named engineer-and-designer team embedded with yours, in your repositories and tools, for three months or more.', bestFor: engagementModels[2].best },
  ],

  caseStudies: [
    {
      industry: '3D configurator',
      region: 'Web · global',
      duration: 'Live',
      title: 'A real-time 3D firearm configurator',
      challenge:
        'Beretta’s catalogue runs to thousands of part combinations customers could only explore in a showroom. Every one had to render in real time, on a phone, with pricing and validity in sync.',
      solution:
        'A Three.js and WebGL configurator with 360° rotation, part-level hotspots and streamed compressed assets, wired to region-specific catalogues and MyBeretta accounts.',
      results: [
        { value: '−35%', label: 'Load and time-to-interactive' },
        { value: '360°', label: 'Live part-level configuration' },
        { value: '1000s', label: 'Of valid combinations' },
      ],
      tech: project('beretta').stack.slice(0, 4).join(' · '),
      imageUrl: projectImage(project('beretta').img),
      domain: project('beretta').domain,
    },
    {
      industry: 'HealthTech · AI',
      region: 'Global',
      duration: 'Live',
      title: 'Aging-clock models in a consumer app',
      challenge:
        'Rejuve needed a daily-use app that turns surveys, lab panels and wearable data into a biological-age estimate, feeds an IRB-reviewed research database and rewards contributors — without putting health records on a public chain.',
      solution:
        'Three aging-clock models plus a conversational coach grounded in each person’s own data, with iOS and Android apps, wearable integrations and token rewards held off-chain.',
      results: [
        { value: '3', label: 'Aging-clock models in production' },
        { value: '2', label: 'App stores, live today' },
        { value: 'DeSci', label: 'Research network contributed to' },
      ],
      tech: project('rejuve').stack.slice(0, 4).join(' · '),
      imageUrl: projectImage(project('rejuve').img),
      domain: project('rejuve').domain,
    },
    {
      industry: 'FinTech · Investing',
      region: 'UK · FCA',
      duration: '6 months',
      title: 'An FCA-authorised investment app',
      challenge:
        'Traditional investment platforms feel complex and intimidating. First-time investors wanted clarity and guidance, inside a product that had to satisfy FCA requirements from day one.',
      solution:
        'iOS and Android apps with multi-currency portfolios, curated expert-managed strategies, a learning feed and a community network — built to FCA compliance standards.',
      results: [
        { value: '6 mo', label: 'From first call to both app stores' },
        { value: '8 wks', label: 'To a seed round after launch' },
        { value: 'FCA', label: 'Compliant from day one' },
      ],
      tech: project('gather').stack.slice(0, 4).join(' · '),
      imageUrl: projectImage(project('gather').img),
    },
    {
      industry: 'Shopify · Retail',
      region: 'US',
      duration: 'Live',
      title: 'A hemp storefront serving a million customers',
      challenge:
        'A national online dispensary selling at volume in a regulated category, needing mainstream DTC conversion while handling state-by-state shipping rules, lab-test messaging and campaign traffic spikes.',
      solution:
        'A custom Shopify theme with a deliberately small app footprint, a loyalty programme, Klaviyo flows and live chat, served from Cloudflare’s edge with HTTP/3 and a strict CSP.',
      results: [
        { value: '1M+', label: 'Customers served' },
        { value: 'Edge', label: 'Every page cached at Cloudflare' },
        { value: '50 st.', label: 'Shipping rules handled at checkout' },
      ],
      tech: project('baysmokes').stack.slice(0, 4).join(' · '),
      imageUrl: projectImage(project('baysmokes').img),
      domain: project('baysmokes').domain,
    },
  ],

  // All eighteen projects on the website, apps and platforms first.
  portfolio: [
    tile('gather'),
    tile('loom'),
    tile('ove'),
    tile('clementine'),
    tile('chance'),
    tile('mybestmood'),
    tile('lostandfound'),
    tile('sinq'),
    tile('petify'),
    tile('rejuve'),
    tile('beretta'),
    tile('mosaic'),
    tile('baysmokes'),
    tile('sparkleinpink'),
    tile('needed'),
    tile('mephisto'),
    tile('unclaimedbaggage'),
    tile('pennyswap'),
  ],

  clients: {
    // We hold no licence to redraw a client's logo, so the profile names
    // them in type — the same treatment as the website's trust strip.
    logos: [
      { name: clients[0], note: '3D configurator' },
      { name: clients[1], note: 'HealthTech · AI' },
      { name: clients[2], note: 'FinTech' },
      { name: clients[3], note: 'Shopify' },
      { name: clients[4], note: 'Marketplace' },
      { name: clients[5], note: 'Shopify' },
      { name: clients[6], note: 'Shopify' },
      { name: clients[7], note: 'Retail & resale' },
    ],
    partners: [
      { name: accreditations[0].label, note: 'Partner programme' },
      { name: accreditations[1].label, note: 'Partner network' },
      { name: accreditations[2].label, note: 'UK certified' },
      { name: 'ICO registered', note: site.legal.ico },
    ],
    testimonials: [
      {
        quote:
          'The team has been instrumental in driving both the design and development of Gather, pairing a proactive workflow with real technical depth.',
        name: testimonials[0].name,
        title: 'Chief Product Officer',
        company: 'Gather',
      },
      {
        // DEMO: written for client demos, attributed to an invented person
        // at a portfolio client — see content.ts.
        quote:
          'We went from a Figma file to a live App Store listing in twenty-one weeks. The written scope meant no surprises on price, and the weekly demos meant our investors saw progress first.',
        name: testimonials[1].name,
        title: 'Founder',
        company: 'Loom',
      },
      {
        // DEMO: as above.
        quote:
          'Variations that used to take three days to reconcile across spreadsheets now take an afternoon. When we changed the approval flow halfway through, the launch date did not move.',
        name: testimonials[2].name,
        title: 'Managing Director',
        company: 'Sinq',
      },
    ],
  },

  team: {
    // DEMO: four of the six names are invented — see the note in about.ts.
    members: team.map((m) => ({ name: m.name, role: m.role, bio: m.bio })),
    staffing: [
      {
        title: 'A named team',
        text: 'Named engineers and a named lead, written into the scope document — not a resource pool you are allocated from.',
      },
      {
        title: 'Senior-led, and we grow our own',
        text: 'A senior engineer leads every project. Juniors and mid-weights work alongside them and are mentored into the role — that is where our seniors come from.',
      },
      {
        title: 'The same team throughout',
        text: 'The people who scope your project are the ones who build it, and the ones who support it after launch.',
      },
    ],
    // DEMO: supplied breakdown of the 120+ headcount.
    stats: [
      { value: '72', label: 'Software engineers' },
      { value: '16', label: 'QA & test engineers' },
      { value: '14', label: 'UI/UX designers' },
      { value: '18', label: 'Project & product managers' },
    ],
  },

  quality: {
    // DEMO: the partnerships and accreditations come from trust.ts, where
    // they are flagged as assumed. Confirm each one before this goes out.
    certifications: [
      { name: accreditations[0].label, subtitle: 'Shopify Partner Program', abbr: 'SP' },
      { name: accreditations[1].label, subtitle: 'AWS Partner Network', mark: 'cloud' },
      { name: accreditations[2].label, subtitle: 'UK Cyber Essentials', mark: 'shield' },
      { name: 'ICO registered', subtitle: `Registration ${site.legal.ico}`, mark: 'lock' },
    ],
    practices: [
      'A written scope before anything starts',
      'A working pilot deliverable in week one',
      'Weekly demos and a short written update',
      'Code review and automated tests on every change',
    ],
    security: [
      'Repositories and cloud accounts are yours',
      'OWASP basics built into every web build',
      'KYC, AML and geo-fencing where the market needs it',
      `UK ICO registered (${site.legal.ico}), GDPR aligned`,
    ],
    whyUs: [
      { title: principles[0].title, text: 'What we build, when, what it costs and what is out — agreed before anything starts.' },
      { title: 'Senior engineers lead', text: 'Every project is led by someone who has shipped it before, with a team they have trained.' },
      { title: principles[2].title, text: 'A build you can click and a short written update every week, from week one.' },
      { title: principles[3].title, text: 'Repositories, cloud accounts and app-store listings are yours from day one.' },
      { title: principles[4].title, text: 'If a feature does not prove the core idea, we say so before it is built.' },
      { title: principles[5].title, text: 'Monitoring, support and a long-term partnership for the teams that want one.' },
    ],
  },

  contact: {
    headline: 'Let’s scope it in writing.',
    lead: `Tell us what you are building. The discovery call is free, and we reply ${site.responseTime}.`,
    button: 'Book a discovery call',
  },
};
