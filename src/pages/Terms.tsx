import { useEffect } from 'react';
import { CTA } from '../components/CTA';
import { site } from '../data/site';

/**
 * Terms of service for the website itself. Project work is governed by the
 * written scope and services agreement, which these terms say explicitly.
 * DEMO CONTENT: generic wording written so the footer link works for client demos —
 * have it reviewed before launch.
 */
const updated = '01 September 2024';

const sections: { h: string; p: (string | JSX.Element)[] }[] = [
  {
    h: 'Who we are',
    p: [
      <>
        These terms cover your use of this website, which is run by {site.legal.name} (trading as {site.name}), a company
        registered in England and Wales with company number {site.legal.companyNumber} and its registered office at{' '}
        {site.legal.registeredOffice}. Questions about these terms go to <a href={`mailto:${site.email}`}>{site.email}</a>.
      </>,
    ],
  },
  {
    h: 'Using this site',
    p: [
      'You may browse this site, read its content and contact us through it for any lawful purpose. You may not copy it at scale, attempt to gain unauthorised access to it or the systems behind it, or use it to send unsolicited messages. We may change or remove any part of the site at any time without notice.',
    ],
  },
  {
    h: 'Content and intellectual property',
    p: [
      `The text, design, logo, illustrations and code of this site belong to ${site.legal.name}. You may quote short extracts with attribution and a link. Client names, products and logos shown in the portfolio belong to their respective owners and are shown to describe work we have done for them; nothing here implies their endorsement of anything else on the site.`,
    ],
  },
  {
    h: 'Case studies and figures',
    p: [
      'The results in our case studies are as reported to us by the client or measured at the time of launch. They describe those particular projects and are not a promise that any future project will achieve the same outcome.',
    ],
  },
  {
    h: 'Working with us',
    p: [
      'Nothing on this site is an offer to provide services. Any project we take on is governed by a written scope document and a services agreement signed by both parties, and where those documents differ from this site, they take precedence. Estimates given through the contact form are indicative until they are confirmed in writing.',
    ],
  },
  {
    h: 'No warranties',
    p: [
      'This site is provided as is. We try to keep it accurate and available, but we do not guarantee that it is free of errors or that it will always be available, and we may take it down for maintenance.',
    ],
  },
  {
    h: 'Limitation of liability',
    p: [
      'To the extent the law allows, we are not liable for any loss arising from your use of this site or reliance on its content. Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot be limited by law.',
    ],
  },
  {
    h: 'Links to other sites',
    p: [
      'Portfolio entries link to our clients’ live products, the contact page can open Google Maps, and the footer links to social networks. Those sites have their own terms and privacy policies, which we do not control.',
    ],
  },
  {
    h: 'Governing law',
    p: [
      'These terms are governed by the law of England and Wales, and the courts of England and Wales have exclusive jurisdiction over any dispute about them.',
    ],
  },
  {
    h: 'Changes',
    p: [`We may update these terms from time to time and will post the new version on this page. This version was last updated on ${updated}.`],
  },
];

export function Terms() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = `Terms of service — ${site.name}`;
    return () => { document.title = site.title; };
  }, []);

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Legal</p>
          <h1>Terms of <em>service.</em></h1>
          <p className="lede">The terms on which you may use this website. Project work is governed by its own written scope and agreement. Last updated {updated}.</p>
        </div>
      </section>

      <section className="section" id="terms">
        <div className="wrap">
          <div className="story">
            <div>
              <p className="eyebrow">The short version</p>
              <h2>Use the site freely. The work is governed by the scope you sign.</h2>
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
