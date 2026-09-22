export interface Service {
  id: string;
  num: string;
  short: string; // label used in the jump-to chips and the chooser table
  title: string;
  who: string;   // "Who it's for"
  intro: string;
  breaks: string; // "Where it usually breaks"
  points: { title: string; text: string }[];
  stack: string[];
  cta: string;
}

export const services: Service[] = [
  {
    id: 'ai-development',
    num: '01',
    short: 'AI',
    title: 'AI Development',
    who: 'Scale-ups adding language models, retrieval or automation to a product people already use — and founders whose product is the AI.',
    intro:
      'Language models, retrieval and automation built into your product — designed for the messy inputs real users type, not the clean ones in the demo.',
    breaks:
      'Most "AI features" are a prompt and an API key. They answer confidently when they are wrong, cost more every month, and nobody notices when quality drifts.',
    points: [
      { title: 'Built around the job', text: 'We start from the decision the feature has to make, then choose the model, the retrieval and the guardrails that job actually needs.' },
      { title: 'Fast and predictable to run', text: 'Model routing, caching and prompt budgets keep latency low and the monthly bill boring.' },
      { title: 'Evaluated before launch', text: 'Every feature ships with an evaluation set: edge cases, adversarial inputs and real data from your domain.' },
      { title: 'Watched after launch', text: 'Accuracy tracking, drift alerts and usage analytics, so you know when the model is helping and when it quietly is not.' },
    ],
    stack: ['Python', 'Claude & GPT APIs', 'LangChain', 'pgvector', 'Pinecone', 'FastAPI', 'AWS'],
    cta: 'Discuss an AI build',
  },
  {
    id: 'web-development',
    num: '02',
    short: 'Web',
    title: 'Web Development',
    who: 'Founders and product teams who need a full-stack web application, from a first version to a platform serving thousands of accounts.',
    intro: 'Full-stack web platforms with the architecture decided up front, so the fortieth feature ships as fast as the fourth.',
    breaks:
      'Web apps built without a plan work at launch and slow down at scale. Each new feature takes longer than the last, until someone proposes a rewrite.',
    points: [
      { title: 'Secure by construction', text: 'Authentication, permissions, input validation and the OWASP basics are part of the build, not a later ticket.' },
      { title: 'Load-tested before users arrive', text: 'We simulate the traffic you are hoping for before real customers create it.' },
      { title: 'Documented APIs', text: 'Every endpoint documented and versioned, so your frontend team and your future hires work from the same source.' },
      { title: 'Portable infrastructure', text: 'Containerised and deployable to any cloud. You are never locked to a vendor — or to us.' },
    ],
    stack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Laravel', 'PostgreSQL', 'AWS'],
    cta: 'Discuss a web build',
  },
  {
    id: 'mobile-apps',
    num: '03',
    short: 'Mobile',
    title: 'Mobile Apps',
    who: 'Consumer and B2B products that need to be on iOS and Android at the same time, with one team and one release schedule.',
    intro: 'iOS and Android from one codebase, with the smoothness people expect from native and the release cadence of a single team.',
    breaks:
      'Too many cross-platform apps feel like a website in a frame: slow first paint, stuttering transitions, and a codebase that fights every new feature.',
    points: [
      { title: 'Native feel', text: 'Flutter and React Native done properly: smooth transitions, offline-first data, and platform conventions respected on both sides.' },
      { title: 'One codebase, no feature gaps', text: 'Every screen ships to both stores at the same time, from the same code.' },
      { title: 'Tested on real devices', text: 'A physical device lab across screen sizes and OS versions — not only simulators.' },
      { title: 'A data layer that scales', text: 'State management and API design built for ten users and for a hundred thousand.' },
    ],
    stack: ['Flutter', 'React Native', 'TypeScript', 'Firebase', 'GraphQL', 'REST'],
    cta: 'Discuss a mobile build',
  },
  {
    id: 'mvp-development',
    num: '04',
    short: 'MVP',
    title: 'MVP Development',
    who: 'Pre-seed to Series A founders who need a real, live product to test with users and show to investors in weeks, not quarters.',
    intro: 'A live product in four to six weeks, scoped to prove one idea and built so the next version does not start from zero.',
    breaks:
      'MVPs that try to be perfect never launch. Scope creeps, three months become six, and the one question the market needed to answer stays open.',
    points: [
      { title: 'Ruthless scope', text: 'We push back on anything that does not test the core assumption. That is the job.' },
      { title: 'Analytics from day one', text: 'You will know who is using it, what they do, and exactly where they stop.' },
      { title: 'Built to keep', text: 'The MVP is the foundation, not a prototype you throw away after the seed round.' },
      { title: 'Investor-ready', text: 'Clean code, documented decisions, and a product that holds up in a pitch room.' },
    ],
    stack: ['Next.js', 'React', 'Node.js', 'Flutter', 'PostgreSQL', 'Stripe', 'AWS'],
    cta: 'Discuss an MVP',
  },
  {
    id: 'ux-ui-design',
    num: '05',
    short: 'UX/UI',
    title: 'UX/UI Design',
    who: 'Teams starting a new product, redesigning one that has grown messy, or handing developers a design system they can build from.',
    intro: 'Research-led product design that makes your developers faster, not slower — and your users noticeably less confused.',
    breaks:
      'Design without research is decoration: beautiful screens nobody tested, handed over with gaps that developers fill by guessing.',
    points: [
      { title: 'Research before pixels', text: 'User interviews, competitor teardowns and journey maps before the first screen is drawn.' },
      { title: 'A real design system', text: 'Components, spacing, colour tokens and type rules that stay consistent as the product grows.' },
      { title: 'Prototypes tested with real people', text: 'Clickable prototypes validated with users before development starts.' },
      { title: 'A hand-off developers thank you for', text: 'Annotated screens, interaction specs and responsive breakpoints, ready to build.' },
    ],
    stack: ['Figma', 'FigJam', 'Maze', 'Hotjar', 'Storybook'],
    cta: 'Discuss a design project',
  },
  {
    id: 'custom-platforms',
    num: '06',
    short: 'Custom',
    title: 'Custom Platforms',
    who: 'Operators whose business has outgrown spreadsheets and off-the-shelf tools — logistics, construction, finance, healthcare and the like.',
    intro: 'Bespoke systems for operations that off-the-shelf software was never designed for.',
    breaks:
      'Packaged software rarely fits a complex business. Workarounds pile up until the tool dictates how the company works, instead of the other way round.',
    points: [
      { title: 'Architecture shaped to your data', text: "Systems designed around your real workflows and data models, not a vendor's template." },
      { title: 'Integrated, not isolated', text: 'Connected to the tools your team already uses, with the messy legacy parts handled properly.' },
      { title: 'Security to your standard', text: 'Access control, audit trails and compliance designed around your actual obligations.' },
      { title: 'No artificial ceilings', text: 'When the business grows, the software grows with it. No seat limits, no usage tiers.' },
    ],
    stack: ['React', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'GraphQL', 'AWS'],
    cta: 'Discuss a custom build',
  },
  {
    id: 'shopify-development',
    num: '07',
    short: 'Shopify',
    title: 'Shopify Development',
    who: 'DTC brands selling at volume, merchants migrating from WooCommerce or Magento, and teams whose theme has become forty apps.',
    intro:
      'Shopify and Shopify Plus storefronts for brands that sell at volume — custom themes, headless builds, and the integrations that keep operations running behind the checkout.',
    breaks:
      'Most Shopify stores are a purchased theme with forty apps bolted on. Pages load slowly, the checkout leaks conversions, and every app subscription adds cost and one more thing that can break on Black Friday.',
    points: [
      { title: 'Custom themes, not app soup', text: 'Liquid and Hydrogen themes built to your brand, with the app count kept to what earns its place. Fewer scripts, faster pages, higher conversion.' },
      { title: 'Built for the sale, not just the shelf', text: 'Bundles, subscriptions, loyalty, size guides and reviews designed into the buying flow and tested against real customer behaviour.' },
      { title: 'Wired into your operations', text: "ERP, 3PL, POS and marketing tools connected through Shopify's APIs — inventory, orders and customers in sync without spreadsheets." },
      { title: 'Migrated without losing rank', text: 'Moving from WooCommerce, Magento or a legacy platform with products, customers, order history and SEO redirects intact.' },
    ],
    stack: ['Shopify Plus', 'Liquid', 'Hydrogen', 'Shopify Functions', 'Storefront API', 'Klaviyo', 'Recharge', 'GraphQL'],
    cta: 'Discuss a Shopify build',
  },
  {
    id: 'betting-platforms',
    num: '08',
    short: 'Betting',
    title: 'Betting Platform Development',
    who: 'Licensed operators and start-ups launching a casino, sportsbook or prediction product in a regulated market.',
    intro:
      'Casino, sportsbook and prediction platforms built for regulated markets — real-money wallets, live odds and game lobbies engineered to stay up at peak load.',
    breaks:
      'White-label platforms cap what you can build and take a share of every wager. Custom builds without compliance designed in fail licensing review — and a wallet bug at kick-off is not something you can patch on Monday.',
    points: [
      { title: 'A wallet you can audit', text: 'Double-entry ledger, idempotent transactions and a full audit trail for deposits, wagers, settlements and withdrawals — on fiat and crypto rails.' },
      { title: 'Compliance designed in', text: 'KYC and AML flows, age verification, geo-fencing, responsible-gambling tools and certified RNG integration built for the licensing review, not retrofitted after it.' },
      { title: 'Live at match pace', text: 'Real-time odds feeds, bet settlement and game lobbies engineered for the traffic spike at kick-off, with failover that has actually been tested.' },
      { title: 'Games and provider integrations', text: 'Slots, table and card games from third-party studios integrated through their aggregators, alongside your own in-house games.' },
    ],
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'WebSockets', 'Kafka', 'Kubernetes', 'AWS'],
    cta: 'Discuss a betting platform',
  },
  {
    id: '3d-experiences',
    num: '09',
    short: '3D',
    title: '3D & Interactive Experiences',
    who: 'Manufacturers, retailers and brands with configurable or high-consideration products that customers want to see before they buy.',
    intro:
      'Real-time 3D configurators, product visualisers and interactive experiences in the browser — built on WebGL so they run on a phone, not only on a showroom PC.',
    breaks:
      'Most 3D on the web is a 200 MB model dropped into a page. It loads for a minute, stutters on mobile, and the "configurator" is a slideshow of pre-rendered images that cannot show the option the customer actually picked.',
    points: [
      { title: 'Streamed, not downloaded', text: 'Models split, compressed and streamed by part, so the first frame renders in seconds and detail arrives as the customer looks closer.' },
      { title: 'Every combination, live', text: 'Materials, parts and finishes swap in real time with live pricing and validation, so the build on screen is exactly the build they can order.' },
      { title: 'Runs on real devices', text: 'Performance budgets for mid-range phones and tested on hardware. Lazy loading, code splitting and asset streaming cut load time by a third on our last configurator.' },
      { title: 'Wired into the sale', text: 'Saved builds, accounts, region-specific catalogues and hand-off to dealers or checkout, so the experience ends in an order rather than a screenshot.' },
    ],
    stack: ['Three.js', 'React Three Fiber', 'WebGL', 'Next.js', 'TypeScript', 'glTF / Draco', 'Blender'],
    cta: 'Discuss a 3D build',
  },
  {
    id: 'web3-blockchain',
    num: '10',
    short: 'Web3',
    title: 'Web3 & Blockchain',
    who: 'Products with a genuine reason for tokens, wallets or on-chain ownership — loyalty, rewards, treasury, DeSci — and the compliance to match.',
    intro:
      'Token economies, wallets and on-chain features built into products people actually use — where the chain does one job well and the rest is ordinary, reliable software.',
    breaks:
      'Web3 products fail in two ways. Everything is on-chain, so every click costs gas and takes eight seconds; or the token is bolted onto an app that would be better without it. Either way, users leave at the wallet prompt.',
    points: [
      { title: 'On-chain only where it earns its place', text: 'Ownership, rewards and settlement on-chain; everything else off-chain and fast. We draw that line in the scope document, not in production.' },
      { title: 'Wallets people can use', text: 'Embedded wallets, social login and gasless transactions, so a first-time user never sees a seed phrase unless they ask for one.' },
      { title: 'Contracts reviewed before they hold money', text: 'Audited smart contracts, upgrade paths and monitoring, with the test suite written before anything touches mainnet.' },
      { title: 'Compliance and privacy built in', text: 'KYC and AML where the product needs it, token rules that survive legal review, and health or financial records kept off the chain with only entitlements on it.' },
    ],
    stack: ['Solidity', 'Ethereum & L2s', 'Cardano', 'ethers.js / viem', 'Hardhat', 'The Graph', 'Node.js', 'PostgreSQL'],
    cta: 'Discuss a Web3 build',
  },
  {
    id: 'marketplace-platforms',
    num: '11',
    short: 'Marketplace',
    title: 'Marketplace Platforms',
    who: 'Founders launching a two-sided marketplace for goods, services or digital items, where supply, trust and payouts have to work from day one.',
    intro:
      'Two-sided marketplaces for physical goods, services or digital items — with the trust, payments and moderation machinery that decides whether both sides come back.',
    breaks:
      'A marketplace is two products that have to launch at once. Most builds nail the buyer side, ship a spreadsheet for sellers, and then discover that disputes, fraud and payouts were the actual product.',
    points: [
      { title: 'Both sides designed on purpose', text: 'Seller onboarding, listings, dashboards and payouts get the same care as search and checkout, because a marketplace with no supply is a landing page.' },
      { title: 'Trust as a feature', text: 'Escrow, verified trades, ratings, dispute flows and moderation tools in the first version, not after the first chargeback.' },
      { title: 'Search that finds things', text: 'Catalogue structure, filters and ranking tuned to how your inventory actually varies — rarity, condition, size, location.' },
      { title: 'Payments that cross borders', text: 'Split payments, multi-currency balances, fees and payouts through Stripe Connect or whichever rails your market needs.' },
    ],
    stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Elasticsearch', 'Stripe Connect', 'Redis', 'AWS'],
    cta: 'Discuss a marketplace',
  },
];
