import { useEffect } from 'react';
import { CTA } from '../components/CTA';
import { site } from '../data/site';

/**
 * Privacy policy. Plain, short and honest about what this site does (which is very little).
 * DEMO CONTENT: written so the footer link works for client demos — have it reviewed before launch.
 */
const updated = '01 September 2024';

const sections: { h: string; p: (string | JSX.Element)[] }[] = [
  {
    h: 'Who we are',
    p: [
      <>
        {site.legal.name} (trading as {site.name}) is a product engineering studio registered in England and Wales, company
        number {site.legal.companyNumber}, at {site.legal.registeredOffice}. We are the data controller for any personal
        information you share with us through this site or by email, and our ICO registration number is {site.legal.ico}.
        Questions go to <a href={`mailto:${site.email}`}>{site.email}</a>.
      </>,
    ],
  },
  {
    h: 'What this site collects',
    p: [
      'This site sets no cookies of its own and runs no analytics or advertising trackers. The fonts are loaded from Google Fonts, which means your browser requests font files from Google’s servers; Google’s own privacy policy applies to those requests.',
      'The contact form sends us what you type into it: your name, email address, company, what you need, an indicative budget and timeline, and your message. Depending on how the site is configured it is delivered either through your own email app — nothing leaves your device until you press send there — or through a form-delivery provider acting on our behalf, which forwards it to us by email.',
      'The office map on the contact page loads from Google Maps only after you click “Load map”. Until then no request is made to Google. Clicking “Open in Google Maps” takes you to Google’s site, where Google’s privacy policy applies.',
    ],
  },
  {
    h: 'Cookies',
    p: [
      'We do not set cookies, and we do not use analytics, advertising or social-media tracking. If you choose to load the office map, Google may set cookies of its own for that embedded map; that is the only case, and it happens only after you ask for it. Because no non-essential cookies are set automatically, this site does not show a cookie banner.',
    ],
  },
  {
    h: 'What we collect when you contact us',
    p: [
      'Your name, email address, company and whatever you tell us about your project. If we go on to work together we will also hold the details needed to scope, deliver and invoice the work: contact details, contract and billing information, and the project material you share with us.',
    ],
  },
  {
    h: 'How we use it',
    p: [
      'To reply to you, to prepare a written scope, to deliver and support the work you commission, and to meet our legal and accounting obligations. Under UK GDPR our lawful basis is the performance of a contract with you, or our legitimate interest in responding to enquiries and running the studio.',
      'We do not sell personal information, and we do not use it for marketing you have not asked for.',
    ],
  },
  {
    h: 'Who we share it with',
    p: [
      'Service providers who host our email, documents, code repositories and cloud infrastructure, and — if the contact form is configured to use one — the form-delivery provider that forwards your message to us. Each of them handles data only to the extent needed to run the studio and deliver your project. Where you ask us to build on your own accounts, your data stays in your accounts.',
    ],
  },
  {
    h: 'How long we keep it',
    p: [
      'Enquiries that do not lead to a project are deleted within twelve months. Contract, invoice and delivery records are kept for six years after the project ends, as UK tax law requires, and then deleted.',
    ],
  },
  {
    h: 'Your rights',
    p: [
      'You can ask us for a copy of the personal information we hold about you, ask us to correct or delete it, restrict or object to how we use it, or ask for it in a portable format. Email us and we will respond within one month. You also have the right to complain to the Information Commissioner’s Office at ico.org.uk.',
    ],
  },
  {
    h: 'Changes to this policy',
    p: [`We will post any changes on this page and update the date at the top. This version was last updated on ${updated}.`],
  },
];

export function Privacy() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = `Privacy policy — ${site.name}`;
    return () => { document.title = site.title; };
  }, []);

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Legal</p>
          <h1>Privacy <em>policy.</em></h1>
          <p className="lede">How we handle the information you share with us when you visit this site or get in touch. Last updated {updated}.</p>
        </div>
      </section>

      <section className="section" id="privacy">
        <div className="wrap">
          <div className="story">
            <div>
              <p className="eyebrow">The short version</p>
              <h2>We collect very little, and we do not sell any of it.</h2>
            </div>
            <div className="story-text legal">
              {sections.map((s) => (
                <div key={s.h}>
                  <h3>{s.h}</h3>
                  {s.p.map((t, i) => <p key={i}>{t}</p>)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
