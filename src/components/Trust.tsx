import { Link } from 'react-router-dom';
import { clients, accreditations } from '../data/trust';
import { projects } from '../data/projects';
import { site } from '../data/site';

const years = new Date().getFullYear() - site.founded;

const numbers = [
  { v: '50+', k: 'Products shipped' },
  { v: `${years} yrs`, k: `In business since ${site.founded}` },
  { v: String(projects.length) + "+", k: 'Case studies published' },
  { v: '100%', k: 'Code owned by clients' },
];

/** Trust strip under the home-page hero: numbers, client wordmarks, accreditations. */
export function Trust() {
  return (
    <section className="trust" aria-label="Why teams choose Keelframe">
      <div className="wrap">
        <div className="numbers">
          {numbers.map((n) => (
            <div className="number" key={n.k}>
              <div className="v">{n.v}</div>
              <div className="k">{n.k}</div>
            </div>
          ))}
        </div>
        <div className="trust-row">
          <span className="lbl">Trusted by</span>
          <ul className="marks">
            {clients.map((c) => (
              <li key={c}><Link to="/work">{c}</Link></li>
            ))}
          </ul>
        </div>
        <div className="trust-row">
          <span className="lbl">Partners &amp; accreditations</span>
          <ul className="badges">
            {accreditations.map((a) => (
              <li key={a.label}><span className="badge" title={a.note}>{a.label}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
