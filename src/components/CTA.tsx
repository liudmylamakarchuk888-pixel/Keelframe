import { Link } from 'react-router-dom';
import { CtaLink } from './CtaLink';
import { marquee, contactLink, bookCallLink } from '../data/site';

/** Scrolling strip of promises. */
export function Marquee() {
  const items = [...marquee, ...marquee]; // duplicated for a seamless loop
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((m, i) => (
          <span key={i}>{m}<i>·</i></span>
        ))}
      </div>
    </div>
  );
}

/**
 * Closing call to action for pages other than the home page. Both buttons lead
 * to the contact form on the home page (or the booking tool, if one is set).
 */
export function CTA() {
  return (
    <>
      <Marquee />
      <section className="cta">
        <div className="wrap">
          <p className="eyebrow">Working with founders worldwide</p>
          <h2>Have something to build?</h2>
          <p>Tell us what it is and when it needs to be live. You will have a written scope, a price and a first delivery date within three working days.</p>
          <div className="cta-actions">
            <CtaLink className="btn btn-primary" to={bookCallLink()}>
              Book a discovery call <span className="arr">→</span>
            </CtaLink>
            <Link className="btn btn-ghost" to={contactLink({ intent: 'estimate' })}>
              Request a written estimate
            </Link>
          </div>
          <p className="cta-note">30 minutes · No slides · No obligation</p>
        </div>
      </section>
    </>
  );
}
