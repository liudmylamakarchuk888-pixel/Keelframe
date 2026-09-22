// ---------------------------------------------------------------
// Portfolio / case studies. Add a project here and it appears in the
// grid, the filters and the case-study dialog automatically.
// Images live in /public/img — reference them by file name only.
// ---------------------------------------------------------------

export type ProjectKind = 'app' | 'web' | 'shopify' | 'betting';
/** Cross-cutting topics a project can also be filtered by, on top of its kind. */
export type ProjectTag = 'ai' | '3d' | 'web3' | 'marketplace';
export type FilterKey = ProjectKind | ProjectTag | 'all';

export interface Project {
  id: string;
  kind: ProjectKind;  // what was built — one per project, sets the default filter and service
  tags?: ProjectTag[]; // topic filters the project also appears under (a project can have several)
  name: string;
  cat: string;       // category label, e.g. "FinTech · Investing"
  year: string;      // "2025" or "Live"
  platform: string;  // "iOS & Android", "Web", "Web store"
  img?: string;      // file name in /public/img (omit for sites without a screenshot)
  alt?: string;
  url?: string;      // live site (opens in a new tab)
  domain?: string;
  service?: string;  // service id the contact form pre-selects for "Discuss a similar build" (defaults by kind)
  stack: string[];   // tech stack shown in the case study
  tint?: [string, string]; // gradient for the placeholder tile when there is no image
  tagline: string;
  stat: string;      // one-line headline result shown on the card
  stats: [string, string][]; // three stat tiles in the case study
  challenge: string;
  scope: [string, string][]; // [heading, text]
  results: string;
  quote?: { text: string; who: string; role: string };
}

export const filters: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'app', label: 'Mobile apps' },
  { key: 'web', label: 'Web platforms' },
  { key: 'shopify', label: 'Shopify' },
  { key: 'betting', label: 'Betting' },
  { key: 'ai', label: 'AI' },
  { key: '3d', label: '3D' },
  { key: 'web3', label: 'Web3' },
  { key: 'marketplace', label: 'Marketplace' },
];

/** True when a project belongs under a filter: its kind, or one of its tags. */
export const matchesFilter = (p: Project, key: FilterKey) =>
  key === 'all' || p.kind === key || (p.tags?.includes(key as ProjectTag) ?? false);

export const projects: Project[] = [
    {id:'rejuve',kind:'app',tags:['ai','web3'],name:'Rejuve.AI',cat:'HealthTech · AI · Web3',year:'Live',platform:'iOS & Android',img:'rejuve.webp',
     alt:'Rejuve.AI Longevity App screens: daily quests, a biological-age dial reading 35.7, and health insights with metric trends',
     url:'https://www.rejuve.ai/',domain:'rejuve.ai',tint:['#3B0764','#1E1B4B'],
     tagline:'A decentralised longevity platform that turns everyday health data into biological-age insight, shared research and RJV token rewards.',
     stat:'iOS & Android · AI aging clocks · RJV token rewards · SingularityNET ecosystem',
     stats:[['Platform','iOS & Android'],['AI','3 aging clocks + LongevityGPT'],['Rewards','RJV token economy']],
     challenge:'Longevity research is locked inside clinics and closed datasets. Rejuve needed a consumer app people would open every day — surveys, labs and wearable data in, a biological-age estimate out — while feeding an IRB-reviewed research database and rewarding contributors with tokens, all without putting health records on a public chain.',
     scope:[
       ['Research','Worked with the science team to map which signals — surveys, blood panels, wearables — feed the RejuveAge-Q, LinAge2 and Delphi models, and what a person needs to see to trust a number like “3.7 years younger”.'],
       ['User experience','A daily loop of quests, check-ins and connected devices, with biological age, healthspan and an overall health score explained in plain language rather than clinical jargon.'],
       ['User interface','A dark, luminous interface — hexagonal modules, a central biological-age dial and a token balance always in view — designed to feel like a personal lab rather than a hospital.'],
       ['AI','Aging-clock models trained on public cohorts and Rejuve’s International Longevity Research Database, plus LongevityGPT, a conversational coach grounded in the user’s own data.'],
       ['Web3','RJV token rewards for contributing data, redeemable with wellness and clinic partners, with health data held off-chain and only entitlements on it.'],
       ['Development','iOS and Android apps with wearable integrations, lab uploads, daily quests and streaks, a rewards store and the research-consent flows behind the DeSci network.']],
     stack:['Flutter','Python','FastAPI','PostgreSQL','HealthKit & Google Fit','Cardano','AWS'],
     results:'Live on the App Store and Google Play inside the SingularityNET ecosystem, with a growing network of users, clinics and researchers contributing to open N-of-1 and observational studies.'},
    {id:'beretta',kind:'web',tags:['3d'],service:'3d-experiences',name:'Beretta Configurator',cat:'3D configurator · E-commerce',year:'Live',platform:'Web',img:'beretta.webp',
     alt:'Beretta 3D configurator: a 1301 Comp Pro shotgun rendered in real time with part hotspots, drag-to-spin controls and a confirm-and-continue button',
     url:'https://configurator.beretta.com/',domain:'configurator.beretta.com',tint:['#18181B','#52525B'],
     tagline:'A real-time 3D configurator that lets customers build a Beretta firearm part by part, explore it from any angle, save it to MyBeretta and hand the finished build to a local gunsmith.',
     stat:'Real-time 3D · 360° rotation · Live pricing · LCP and TTI down 35%',
     stats:[['Platform','Web · Next.js + Three.js'],['Performance','LCP / TTI −35%'],['Live','configurator.beretta.com']],
     challenge:'Beretta’s catalogue runs to thousands of part combinations that customers could only explore in a showroom. The configurator had to render every combination in real time in a browser, keep pricing and validity in sync with region-specific catalogues, work on a phone, and end in an order a local gunsmith could fulfil.',
     scope:[
       ['3D rendering','Three.js and WebGL rendering with 360° rotation, part-level hotspots, a cinema mode and a share view — streaming compressed 3D assets so the first frame appears in seconds.'],
       ['Configuration engine','Part selection with live pricing, build validation and region-specific catalogues, synced through REST and GraphQL APIs with Redux and Zustand state management.'],
       ['Accounts','MyBeretta authentication, saved builds and internationalisation across markets.'],
       ['Hand-off','Finalised configurations linked directly to local gunsmiths, turning a browsing session into a fulfilable order.'],
       ['Performance','Lazy loading, code splitting and 3D asset streaming, cutting Largest Contentful Paint and Time to Interactive by 35% across devices.']],
     stack:['Next.js','React','TypeScript','Three.js','WebGL','Redux & Zustand','REST & GraphQL'],
     results:'Live at configurator.beretta.com: a showroom-style experience in the browser, a 35% improvement in LCP and TTI, and a direct path from configuration to gunsmith order.'},
    {id:'petify',kind:'web',tags:['marketplace'],service:'marketplace-platforms',name:'Petify.gg',cat:'Marketplace · Gaming',year:'Live',platform:'Web',img:'petify.webp',
     alt:'Petify.gg marketplace: game and rarity filters on the left, a hot-listings banner, and a search bar with sort and price range',
     url:'https://petify.gg',domain:'petify.gg',tint:['#18181B','#BE185D'],
     tagline:'An independent marketplace for buying and selling in-game pets, eggs and collectibles from popular Roblox games, with verified trades and a full seller back office.',
     stat:'Web marketplace · Multi-game catalogue · Verified trades · Seller dashboards',
     stats:[['Platform','Web'],['Catalogue','4+ Roblox games'],['Trust','Every trade verified']],
     challenge:'Trading virtual items between strangers is where scams live. Petify needed a marketplace that felt safe enough for a teenager to sell on and a parent to buy from — items that vary by game, rarity, mutation and age, sellers linking several game accounts, balances and payouts, and a support loop built into the product.',
     scope:[
       ['Catalogue & search','A multi-game catalogue with rarity, mutation and property filters, price ranges and popularity ranking, so one-of-a-kind items are actually findable.'],
       ['Buyer experience','Wallet balances and top-ups, a cart and order tracking, with every trade verified by the team before it completes.'],
       ['Seller back office','A dashboard for listing products by game and category, linked game accounts (up to ten per profile), stock, orders, chat and payouts.'],
       ['Trust & support','Verification levels for seller accounts, a feedback and bug-report flow, a help centre and clear policies — including the boundary with the game publishers.'],
       ['Development','A responsive dark-mode web platform built for a young, mobile-first audience and for the traffic spikes that follow a game update.']],
     stack:['Next.js','TypeScript','Node.js','PostgreSQL','Redis','Stripe'],
     results:'Live at petify.gg with a growing multi-game catalogue, verified peer-to-peer trades and a self-service seller back office.'},
    {id:'loom',kind:'app',tags:['marketplace'],name:'Loom',cat:'Fashion marketplace',year:'2025',platform:'iOS & Android',img:'loom.webp',
     alt:'Loom app screens: designer marketplace home with current orders, and the customer-or-designer onboarding screen',
     tagline:'A sustainable-fashion marketplace that matches customers with vetted designers to upcycle the clothes they already own.',
     stat:'21 weeks · Live on the App Store · 10K+ downloads in the first month',
     stats:[['Timeline','21 weeks'],['Platform','iOS & Android'],['First month','10K+ downloads']],
     challenge:'Wardrobes sit unused while fashion waste keeps growing. Loom needed a marketplace that made upcycling feel as easy as buying new — pairing customers with vetted designers, with clear pricing and a visible order status from first brief to delivery.',
     scope:[
       ['Research','Interviews with customers and independent designers to find where upcycling loses people: trusting a stranger with your clothes, unclear pricing, and not knowing what happens next.'],
       ['User experience','A two-sided marketplace flow — customers create a project, vetted designers accept and quote, and every order shows its status from accepted to delivered.'],
       ['User interface','A lilac-and-lime identity with playful display type, so the app reads as fashion rather than a utility.'],
       ['Prototype','A clickable prototype of the full order journey, tested with both customers and designers before development began.'],
       ['Development','iOS and Android apps with designer profiles and ratings, order tracking, referrals and in-app messaging.']],
     stack:['Flutter','Firebase','Node.js','PostgreSQL','Stripe','Figma'],
     results:'Live on the App Store with 10K+ downloads in the first month, and an ongoing product partnership.'},
    {id:'gather',kind:'app',name:'Gather',cat:'FinTech · Investing',year:'2025',platform:'iOS & Android',img:'gather.webp',
     alt:'Gather app screens: portfolio performance chart with pending transactions, and the My Network screen with top news',
     tagline:'An FCA-authorised UK investment app with curated, expert-managed portfolios that blends investing with wellbeing, learning and community.',
     stat:'6 months · FCA-compliant · Seed round raised 8 weeks after launch',
     stats:[['Timeline','6 months'],['Platform','iOS & Android'],['Outcome','Seed round in 8 weeks']],
     challenge:'Traditional investment platforms feel complex and intimidating. First-time and modern investors wanted clarity, guidance and relevance — inside a product that had to satisfy FCA requirements from day one.',
     scope:[
       ['Research','Interviews with first-time investors about what made existing platforms intimidating, alongside a review of the FCA requirements for a retail investment product.'],
       ['User experience','A portfolio home that answers "how am I doing?" at a glance, with deposits, pending transactions and performance over any period one tap away.'],
       ['User interface','A calm, editorial look — serif headings, warm neutrals and gold accents — deliberately unlike the crowded charts of traditional trading apps.'],
       ['Prototype','An interactive prototype of onboarding, funding and portfolio views, refined through user testing before build.'],
       ['Development','iOS and Android apps with multi-currency portfolios, curated expert-managed strategies, a learning and news feed, and a community network — built to FCA compliance standards.']],
     stack:['React Native','TypeScript','Node.js','PostgreSQL','AWS','Figma'],
     results:'Live on the App Store and Google Play. Seed round raised eight weeks after launch. An FCA-regulated, multi-currency retail investment platform.',
     quote:{text:'The team has been instrumental in driving both the design and development of Gather, pairing a proactive, highly responsive workflow with the technical depth needed to handle our platform’s complexity. Their partnership continues to move the product forward in a reliable and impactful way.',who:'Chris Jones',role:'Chief Product Officer, Gather'}},
    {id:'ove',kind:'app',name:'Ove Care',cat:'FemTech · Education',year:'2025',platform:'iOS & Android',img:'ove.webp',
     alt:'Ove app screens: cycle tracker with menstrual phase ring, and the Ove Learn section with product guides',
     tagline:'A puberty companion for young girls that uses AI to deliver a personalised, supportive and age-appropriate experience.',
     stat:'14 weeks · Featured on the App Store · 60,000+ users',
     stats:[['Timeline','14 weeks'],['Platform','iOS & Android'],['Users','60,000+']],
     challenge:'Young girls lacked a trusted, age-appropriate space to learn about puberty with confidence. The product had to be COPPA-aware, clinically careful — and actually used, not just downloaded.',
     scope:[
       ['Research','Work with young users, parents and clinical advisors to define what a trusted puberty companion should and, just as importantly, should not do.'],
       ['User experience','A cycle tracker that speaks plainly, daily check-ins, and a Learn section that explains products and welfare topics without jargon or shame.'],
       ['User interface','Soft lilac tones, rounded shapes and friendly illustration — reassuring rather than clinical, and designed for a young audience.'],
       ['Prototype','A tested prototype of the tracking, learning and check-in flows, with every line of copy reviewed for age-appropriateness.'],
       ['Development','iOS and Android apps with AI-personalised guidance, cycle prediction and educational content, built COPPA-aware with careful data handling.']],
     stack:['Flutter','Firebase','Python','OpenAI API','Figma'],
     results:'60,000+ users within 14 weeks of launch, and featured on the App Store.'},
    {id:'clementine',kind:'app',name:'Clementine',cat:'HealthTech · Wellness',year:'2024',platform:'iOS & Android',img:'clementine.webp',
     alt:'Clementine app screens: home with courses and a free play offer, and the Creators grid',
     tagline:'An ORCHA-certified mental-wellness platform with guided hypnotherapy, expert-led courses, affirmations and daily habit-building.',
     stat:'14 weeks · iOS & Android · 150,000+ members',
     stats:[['Timeline','14 weeks'],['Platform','iOS & Android'],['Members','150,000+']],
     challenge:'Mental-wellness products often feel generic and get abandoned after the first week. Clementine needed clinical credibility and a daily habit loop that people would actually keep.',
     scope:[
       ['Research','Analysis of why wellness apps lose users after week one, and what clinical credibility looks like to both members and ORCHA assessors.'],
       ['User experience','A daily loop built around short sessions — courses, hypnotherapy, affirmations and creators — with progress that rewards coming back.'],
       ['User interface','Warm, creator-led visuals and a clear content library, so every session feels human rather than generic.'],
       ['Prototype','Prototyped and tested the home, library and session flows to make a five-minute daily habit frictionless.'],
       ['Development','iOS and Android apps with audio courses, expert-led content, creator profiles and habit tracking — built to meet ORCHA digital-health certification.']],
     stack:['React Native','Node.js','PostgreSQL','AWS','Figma'],
     results:'ORCHA-certified, with 150,000+ members on iOS and Android.'},
    {id:'chance',kind:'app',tags:['ai'],name:'Chance.ai',cat:'Dating · AI',year:'2025',platform:'iOS & Android',img:'chance.webp',
     alt:'Chance.ai app screen: video-first profile feed with an AI clip-processing notice',
     tagline:'An AI-powered dating app that builds meaningful connections by understanding preferences, behaviour and compatibility — including video.',
     stat:'12 weeks · Live on iOS & Android · AI video matchmaking launched',
     stats:[['Timeline','12 weeks'],['Platform','iOS & Android'],['Launched','AI video matchmaking']],
     challenge:'Swipe-first dating rewards volume over fit. Chance needed matching that understood preferences, behaviour and compatibility — and a video-first profile that people would actually record.',
     scope:[
       ['Research','Studied why swipe-based apps optimise for volume, and which signals — preferences, behaviour, video — predict a match people actually meet.'],
       ['User experience','A video-first feed with "For you" and "Near by" modes, AI-assisted clip editing, and matching driven by compatibility rather than left-or-right.'],
       ['User interface','A cinematic dark interface with a single vivid accent, keeping attention on people rather than chrome.'],
       ['Prototype','Prototyped the video capture, AI review and match flows to test whether users would record before they swiped.'],
       ['Development','iOS and Android apps with AI video processing, compatibility matching, location-aware discovery and real-time chat.']],
     stack:['Flutter','Python','FastAPI','PostgreSQL','FFmpeg','AWS'],
     results:'Live on iOS and Android, with AI video matchmaking launched.'},
    {id:'lostandfound',kind:'app',name:'Lost and Found Crew',cat:'Location-based · Community',year:'2024',platform:'iOS & Android',img:'lostandfound.webp',
     alt:'Lost and Found Crew app screen: a map of Italy and Croatia showing nearby friends and crew',
     tagline:'A location-based community app that shows friends and fellow crew nearby, so people who move between ports can find each other and meet up.',
     stat:'10 weeks · Community platform live · Real-time location features',
     stats:[['Timeline','10 weeks'],['Platform','iOS & Android'],['Live','Real-time location']],
     challenge:'A mobile, port-hopping community needed a lightweight way to reconnect with people nearby — without becoming another noisy social network.',
     scope:[
       ['Research','Interviews with community members about how they lost touch between ports, and what a low-noise way to reconnect would look like.'],
       ['User experience','A live map first: see friends and nearby crew, tap to meet up, with a simple feed and messaging instead of a full social network.'],
       ['User interface','A clean, map-led interface with bright, friendly markers that stay legible in sunlight.'],
       ['Prototype','Prototyped the map, nearby lists and meet-up flows and tested them with community members.'],
       ['Development','iOS and Android apps with real-time location sharing, privacy controls, nearby discovery and chat.']],
     stack:['Flutter','Firebase','Google Maps SDK','Node.js'],
     results:'Community platform live, with real-time location features.'},
    {id:'mybestmood',kind:'app',tags:['ai'],name:'My Best Mood',cat:'Kids · AI storytelling',year:'2024',platform:'iOS',img:'mybestmood.webp',
     alt:'My Best Mood app screen: a library of illustrated children’s stories with a create-a-story button',
     tagline:'An interactive storytelling app for children, with engaging narration, colourful visuals and stories that adapt as they unfold.',
     stat:'14 weeks · Live on the App Store · AI-powered adaptive storytelling',
     stats:[['Timeline','14 weeks'],['Platform','iOS'],['Launched','Adaptive AI stories']],
     challenge:'Children’s story apps are usually static. This one needed adaptive narration that stayed safe and age-appropriate — and was actually fun to come back to.',
     scope:[
       ['Research','Worked with parents and children on what makes a story app safe, replayable and worth creating with, rather than passively watching.'],
       ['User experience','A library of stories to read, favourite and draft, plus a create-a-story flow where children shape the tale as it unfolds.'],
       ['User interface','Soft mint tones and rich illustrated covers, with large touch targets and simple navigation for young hands.'],
       ['Prototype','Prototyped story creation and narration with families to test pacing and age-appropriateness.'],
       ['Development','An iOS app with AI-generated adaptive narration and illustrations, with safety guardrails on everything generated.']],
     stack:['Swift','SwiftUI','Node.js','OpenAI API','ElevenLabs'],
     results:'Live on the App Store with AI-powered adaptive storytelling.'},
    {id:'sinq',kind:'web',name:'Sinq',cat:'Construction · Analytics',year:'2025',platform:'Web',img:'sinq.webp',
     alt:'Sinq web dashboard on a laptop: contract values, variations and a project cost breakdown',
     tagline:'A construction cost and project-control platform that helps contractors manage quotations, variations, approvals and project finances in real time.',
     stat:'18 weeks · Deployed across active job sites · Real-time cost control',
     stats:[['Timeline','18 weeks'],['Platform','Web'],['Deployed','Active job sites']],
     challenge:'Contractors were running quotations, variations and approvals across spreadsheets, so cost control always lagged what was happening on site.',
     scope:[
       ['Research','Shadowed contractors managing quotations, variations and approvals in spreadsheets to map exactly where cost control fell behind the site.'],
       ['User experience','A dashboard that shows contract value, variations, agreed and outstanding amounts and the final-account forecast for every live project at once.'],
       ['User interface','A dark, data-dense interface with clear status colour for agreed, in-progress and not-agreed value.'],
       ['Prototype','Prototyped the variation and approval workflow with site and office teams before build.'],
       ['Development','A web platform with multi-project dashboards, variation tracking, approval workflows and real-time cost reporting.']],
     stack:['React','TypeScript','Node.js','PostgreSQL','AWS'],
     results:'Deployed across active job sites, with real-time cost control replacing the spreadsheets.'},
    {id:'mosaic',kind:'web',tags:['web3'],service:'web3-blockchain',name:'Mosaic',cat:'Web3 · Treasury',year:'2025',platform:'Web',img:'mosaic.webp',
     alt:'Mosaic web dashboard on a laptop: wallet balance, digital-asset and real-estate holdings, and market tickers',
     tagline:'A Web3 treasury and portfolio platform that brings digital assets and real-estate holdings into one wallet-aware dashboard.',
     stat:'20 weeks · Web3 treasury platform live · Multi-wallet support',
     stats:[['Timeline','20 weeks'],['Platform','Web'],['Live','Multi-wallet support']],
     challenge:'Treasury and portfolio workflows lived in disconnected tools — exchanges, wallets and spreadsheets. Mosaic needed one place for balances, holdings and wallet-aware operations.',
     scope:[
       ['Research','Mapped how teams tracked digital assets and real-estate holdings across exchanges, wallets and spreadsheets.'],
       ['User experience','One home for the whole balance — available funds, digital assets and real estate — with holdings, returns and market tickers in a single view.'],
       ['User interface','A dark, premium interface with warm neutrals, built to make large numbers readable and security prompts impossible to miss.'],
       ['Prototype','Prototyped funding, holdings and withdrawal flows, plus the identity-verification path required before deposits.'],
       ['Development','A web platform with multi-wallet support, KYC and two-factor security, portfolio analytics and a referral programme.']],
     stack:['Next.js','TypeScript','Node.js','PostgreSQL','ethers.js','WalletConnect'],
     results:'Web3 treasury platform live, with multi-wallet support.'},
    {id:'baysmokes',kind:'shopify',name:'Bay Smokes',cat:'Shopify · Hemp & wellness',year:'Live',platform:'Web store',img:'baysmokes.webp',
     alt:'Bay Smokes Shopify storefront: hero with product bags on a sky-blue background, a “#1 online dispensary” headline and shop buttons',
     url:'https://baysmokes.com/',domain:'baysmokes.com',tint:['#0284C7','#7DD3FC'],
     tagline:'A high-volume Shopify store for a family-owned, Farm Bill-compliant hemp brand — custom theme, rewards, reviews, chat and video commerce, served from Cloudflare’s edge.',
     stat:'Shopify · Custom theme · 1M+ customers · Klaviyo, Yotpo & Gorgias',
     stats:[['Platform','Shopify + Cloudflare'],['Sells','Hemp-derived THCa products'],['Customers','1,000,000+']],
     challenge:'A national online dispensary selling at volume in a regulated category. The store had to convert like a mainstream DTC brand — reviews, rewards, bundles, fast pages — while handling state-by-state shipping restrictions, lab-test and compliance messaging, and the traffic spikes that follow drops and social campaigns.',
     scope:[
       ['Storefront','A custom Shopify theme with a bold, sky-blue identity: category-led navigation, product carousels and video-commerce blocks, kept fast with lazy loading and a deliberately small app footprint.'],
       ['Conversion','Social proof front and centre — star ratings, review counts and press logos — with bundles, a free-shipping threshold, a first-order offer and Shop Pay checkout.'],
       ['Retention','The Bay Rewards loyalty programme, Klaviyo email and SMS flows, and Gorgias live chat inside the store.'],
       ['Compliance','Lab-test and Farm Bill compliance messaging on every product, state-restriction handling at checkout and discreet-shipping communication throughout.'],
       ['Performance & security','Cloudflare edge caching with HTTP/3, TLS 1.3, a Content Security Policy and HSTS, so the store stays fast and safe under campaign traffic.']],
     stack:['Shopify','Liquid','Cloudflare','Klaviyo','Yotpo','Gorgias','VideoWise'],
     results:'A live, high-volume store serving over a million customers, with reviews, rewards, chat and video commerce integrated and every page served from the edge.'},
    {id:'sparkleinpink',kind:'shopify',name:'Sparkle In Pink',cat:'Shopify · Children’s fashion',year:'Live',platform:'Web store',img:'sparkleinpink.webp',
     alt:'Sparkle In Pink storefront: pastel navigation, a fall sale banner and a “25% off” hero with children’s outfits',url:'https://sparkleinpink.com',domain:'sparkleinpink.com',tint:['#EC4899','#7C3AED'],
     tagline:'A high-volume children’s boutique with a points-based loyalty programme, seasonal drops across dozens of collections, mom-and-me sets and a companion mobile app.',
     stat:'Shopify · Loyalty programme · Seasonal collections · Mobile app',
     stats:[['Platform','Shopify'],['Sells','Children’s fashion'],['Notable','Loyalty & mobile app']],
     challenge:'A boutique selling at volume needed a storefront that could handle dozens of seasonal collections and constant drops without slowing down — and keep customers coming back.',
     scope:[
       ['Storefront','A themed Shopify storefront organised around seasonal and holiday collections, with fast browsing on mobile.'],
       ['Conversion','Size charts, free exchanges and review highlights placed where they answer a shopper’s doubts.'],
       ['Retention','A points-based loyalty programme, gift cards and a companion mobile app for repeat customers.'],
       ['Operations','Collections and inventory structured so the team can launch a new drop without a developer.']],
     stack:['Shopify','Liquid','Klaviyo','Smile.io','Tapcart'],
     results:'Live and trading at volume, with a loyalty programme and mobile app supporting repeat purchase.'},
    {id:'needed',kind:'shopify',name:'Needed',cat:'Shopify · Health & supplements',year:'Live',platform:'Web store',img:'needed.webp',
     alt:'Needed storefront: prenatal multi-gummy hero, shop buttons and the life-stage collection row',url:'https://thisisneeded.com',domain:'thisisneeded.com',tint:['#0F172A','#14B8A6'],
     tagline:'A subscription-first supplement brand with life-stage collections, bundle builders, competitor comparison tables, practitioner content and HSA/FSA checkout.',
     stat:'Shopify · Subscriptions · Bundles · HSA/FSA checkout',
     stats:[['Platform','Shopify'],['Sells','Women’s health supplements'],['Notable','Subscriptions & bundles']],
     challenge:'A science-led brand needed to sell recurring subscriptions across several life stages, back every claim with evidence, and make bundles and comparisons easy to understand.',
     scope:[
       ['Storefront','Collections organised by life stage — cycle support, trying to conceive, pregnancy, postpartum, perimenopause — with a clean, minimal design.'],
       ['Conversion','Side-by-side comparison charts, expert endorsements and research citations built into the product experience.'],
       ['Subscriptions','Subscribe-and-save with first-order discounts, a bundle-and-save section and HSA/FSA-eligible checkout.'],
       ['Content','A blog and learning academy that feed the store with educational content and practitioner referrals.']],
     stack:['Shopify','Liquid','Recharge','Klaviyo','Rebuy','Truemed'],
     results:'A live subscription store with life-stage collections, bundles and HSA/FSA checkout.'},
    {id:'mephisto',kind:'shopify',name:'Mephisto',cat:'Shopify · Footwear',year:'Live',platform:'Web store',img:'mephisto.webp',
     alt:'Mephisto UK storefront: “Back to work” hero with four seated models in Mephisto footwear',url:'https://mephisto.com',domain:'mephisto.com',tint:['#1E3A5F','#B45309'],
     tagline:'A multi-brand catalogue for the French comfort-shoe maker: sub-brand collections, an interactive technology explainer, size and fit guidance and a physical store locator.',
     stat:'Shopify · Multi-brand catalogue · Store locator',
     stats:[['Platform','Shopify'],['Sells','Comfort footwear'],['Notable','Multi-brand & store locator']],
     challenge:'A heritage footwear brand with several sub-brands needed one storefront that could present a very large catalogue clearly and still send shoppers to physical stores.',
     scope:[
       ['Storefront','Collections by gender, shoe type and sub-brand — Mephisto, Mobils, Allrounder, Trampolins, Sano — with campaign-led hero banners.'],
       ['Conversion','Fit information such as removable insoles and arch support surfaced on product pages, with free shipping and returns made prominent.'],
       ['Education','An interactive explainer for the brand’s proprietary cushioning technology.'],
       ['Retail','A store locator connecting the online catalogue to physical retail locations.']],
     stack:['Shopify','Liquid','Klaviyo','Stockist'],
     results:'A live multi-brand storefront with a technology hub and store locator.'},
    {id:'unclaimedbaggage',kind:'shopify',name:'Unclaimed Baggage',cat:'Shopify · Retail & resale',year:'Live',platform:'Web store',img:'unclaimedbaggage.webp',
     alt:'Unclaimed Baggage storefront: “The nation’s only retailer of lost luggage” headline over a jewellery finds banner',url:'https://www.unclaimedbaggage.com/',domain:'unclaimedbaggage.com',tint:['#0E7490','#F97316'],
     tagline:'One-of-a-kind inventory that changes daily — hundreds of new products a day across apparel, electronics and luxury, with deep filtering and retail-price comparisons.',
     stat:'Shopify · Hundreds of new products daily · Deep filtering',
     stats:[['Platform','Shopify'],['Sells','Lost-luggage finds'],['Notable','Daily inventory refresh']],
     challenge:'Every product is unique and hundreds arrive every day, so the store had to handle constant inventory churn and still let treasure-hunters find what they came for.',
     scope:[
       ['Storefront','Curated collections — vintage, luxury finds, mystery boxes, outdoor, activewear — over a catalogue that refreshes daily.'],
       ['Discovery','Deep filtering by gender, product type, brand and price, built for one-of-a-kind inventory.'],
       ['Conversion','Percentage discounts shown against estimated retail price, free returns and a free-shipping threshold.'],
       ['Operations','Inventory flows designed for hundreds of new single-unit products a day.']],
     stack:['Shopify Plus','Liquid','Boost Search & Filter','Klaviyo','Inventory sync'],
     results:'A live store adding hundreds of new products every day.'},
    {id:'pennyswap',kind:'betting',name:'PennySwap',cat:'Betting platform · Online casino',year:'Live',platform:'Web',img:'pennyswap.webp',
     alt:'PennySwap lobby: sidebar navigation, category tabs and rows of slot and original game tiles',url:'https://pennyswap.space/',domain:'pennyswap.space',tint:['#4C1D95','#DB2777'],
     tagline:'A mobile-first gaming platform with a categorised lobby for slots, table and card games, favourites, a news feed and app-style bottom navigation.',
     stat:'Betting platform · Slots, table & card games · Mobile-first lobby',
     stats:[['Platform','Web (mobile-first)'],['Games','Slots, table & card'],['Notable','Categorised lobby']],
     challenge:'An online casino needed a lobby that felt like a native app on a phone — fast to browse, easy to favourite, and organised by game type.',
     scope:[
       ['Lobby','A categorised game lobby — slots, tables, cards — with favourites and a news section.'],
       ['Experience','Mobile-first navigation with side panels and an icon-based bottom bar, so it behaves like an app.'],
       ['Integrations','Third-party game content organised into a single browsable catalogue.'],
       ['Platform','A responsive web build designed for peak-time traffic.']],
     stack:['React','TypeScript','Node.js','PostgreSQL','Redis','WebSockets','Game aggregator API'],
     results:'Live gaming platform with a mobile-first lobby.'}
  ];
