import { Link } from 'react-router-dom';
import { SectionHead } from './SectionHead';
import { services } from '../data/services';
import { contactLink } from '../data/site';

const words = ['Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'];

export function Services() {
  const count = words[services.length - 6] ?? String(services.length);
  return (
    <section className="section" id="services">
      <div className="wrap">
        <SectionHead
          eyebrow="Services"
          title={`${count} ways to work with us.`}
          text="Most projects combine two or three of these. We scope the whole thing as one build with one team, so nothing gets duplicated or dropped in a hand-off."
        />

        <nav className="svc-index" aria-label="Jump to a service">
          {services.map((s) => (
            <Link key={s.id} to={`/services/${s.id}`}>{s.short}</Link>
          ))}
        </nav>

        {services.map((s) => (
          <article className="svc" id={s.id} key={s.id}>
            <div className="svc-head">
              <div className="svc-num">Service {s.num}</div>
              <h3>{s.title}</h3>
              <p className="svc-intro">{s.intro}</p>
              <p className="svc-for">
                <span className="lbl">For</span>
                <span>{s.who}</span>
              </p>
              <Link className="btn btn-ghost btn-sm" to={contactLink({ intent: 'call', service: s.id })}>
                {s.cta} <span className="arr">→</span>
              </Link>
            </div>
            <div>
              <div className="breaks">
                <div className="lbl">Where it usually breaks</div>
                <p>{s.breaks}</p>
              </div>
              <div className="points">
                {s.points.map((p) => (
                  <div className="point" key={p.title}>
                    <h4>{p.title}</h4>
                    <p>{p.text}</p>
                  </div>
                ))}
              </div>
              <div className="stack">
                {s.stack.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
