// ---------------------------------------------------------------
// Site-wide settings. Edit this file to change the brand, contact
// details, legal details and navigation without touching any component.
// ---------------------------------------------------------------

export const site = {
  name: 'Keelframe',
  title: 'Keelframe — Custom software and AI for founders',
  tagline: 'A product engineering studio. Small senior team, fixed scopes, software that lasts.',
  email: 'hello@keelframe.com', // TODO: replace with your real address
  phone: '+19174750768',
  phoneHref: 'tel:+442031938835',
  // DEMO: WhatsApp is assumed to be on the office number — replace with the real business number.
  whatsapp: 'https://wa.me/442031938835',
  address: ['5 St. John’s Lane', 'London EC1M 4BH'],
  location: 'London',
  founded: 2021,
  hours: 'Monday to Friday, 9:00 – 18:00 UK time',
  responseTime: 'within one working day',
  year: new Date().getFullYear(),

  /**
   * Contact form delivery. Leave empty and the form opens the visitor's email
   * app with the message already filled in. Set it to a form endpoint
   * (Formspree, Basin, Netlify Forms, your own API) and the form posts the
   * fields there as JSON instead.
   */
  formEndpoint: '',

  /**
   * Optional booking link (Calendly, Cal.com, SavvyCal). When set, every
   * "Book a discovery call" button opens it instead of the contact form.
   */
  bookingUrl: '',

  // DEMO: company registration details are invented so the footer and legal pages look
  // complete for client demos — replace with the real numbers before launch.
  legal: {
    name: 'Keelframe Ltd',
    companyNumber: '13482917',
    vat: 'GB 391 5527 04',
    ico: 'ZB412876',
    registeredOffice: '5 St. John’s Lane, London EC1M 4BH, United Kingdom',
  },

  // DEMO: assumed handles so the footer links work in client demos — confirm or replace before launch.
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/keelframe' },
    { label: 'X', href: 'https://x.com/keelframe' },
    { label: 'Instagram', href: 'https://www.instagram.com/keelframe' },
  ],
};

/** Builds a mailto link with a subject line and an optional body. */
export const mailto = (subject: string, body?: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;

/** What the visitor wants from the contact form. Selected by the button that brought them there. */
export type ContactIntent = 'call' | 'estimate' | 'question';

export interface ContactTopic {
  intent?: ContactIntent;
  service?: string; // a service id from services.ts — pre-selects "What do you need?"
  re?: string;      // free text shown as "Regarding: …" and added to the subject line
}

/** Router path to the contact form, pre-filled from the button that was clicked. */
export const contactLink = (t: ContactTopic = {}) => {
  const q = new URLSearchParams();
  if (t.intent) q.set('intent', t.intent);
  if (t.service) q.set('service', t.service);
  if (t.re) q.set('re', t.re);
  const s = q.toString();
  return `/contact${s ? `?${s}` : ''}`;
};

/** Where "Book a discovery call" buttons go: the booking tool if one is set, else the contact form. */
export const bookCallLink = () => site.bookingUrl || contactLink({ intent: 'call' });

/** Main navigation. `to` is a router path; section links scroll on the home page. */
export const nav = [
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/work' },
  { label: 'Explore AI', to: '/explore-ai' },
  { label: 'How we work', to: '/process' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const industries = [
  { label: 'E-commerce & retail', to: '/work' },
  { label: 'iGaming & betting', to: '/work' },
  { label: 'Gaming & marketplaces', to: '/work' },
  { label: 'Web3 & blockchain', to: '/work' },
  { label: 'Health tech', to: '/work' },
  { label: 'Fintech', to: '/work' },
  { label: 'Property tech', to: '/contact' },
  { label: 'SaaS', to: '/contact' },
  { label: 'B2B software', to: '/contact' },
];

export const marquee = [
  'Scoped in writing',
  'Pilot in week one',
  'Weekly demos',
  'You own the code',
  'Senior engineers only',
  'Built to hold',
];
