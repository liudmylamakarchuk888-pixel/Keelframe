import { Link } from 'react-router-dom';
import { HullCanvas } from './HullCanvas';
import { CtaLink } from './CtaLink';
import { bookCallLink } from '../data/site';

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div>
          <p className="eyebrow">Product engineering studio — London / remote worldwide</p>
          <h1>
            Custom software and AI <em>for founders and growing businesses.</em>
          </h1>
          <p className="lede">
            AI features, web platforms, mobile apps, 3D experiences, Shopify stores, marketplaces and betting platforms —
            scoped in writing, shipped on a date, and still standing when the tenth
            feature lands.
          </p>
          <div className="hero-actions">
            <CtaLink className="btn btn-primary" to={bookCallLink()}>
              Book a discovery call <span className="arr">→</span>
            </CtaLink>
            <Link className="btn btn-ghost" to="/services">
              See what we build
            </Link>
          </div>
          <div className="hero-facts">
            <div className="fact"><strong>Senior-led, always</strong>The people on the call are the people who write the code.</div>
            <div className="fact"><strong>Scope in writing first</strong>What we build, when, and what it costs — before anything starts.</div>
            <div className="fact"><strong>Real software in week one</strong>A working pilot deliverable before you commit to the full build.</div>
          </div>
        </div>
        <div>
          <div className="hull">
            <HullCanvas />
          </div>
          <div className="fig">
            <span>Fig. 01 — Lines plan</span>
            <span>Every hull starts with a keel</span>
          </div>
        </div>
      </div>
    </section>
  );
}
