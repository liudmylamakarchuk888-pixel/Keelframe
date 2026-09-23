import { useEffect } from 'react';
import { SectionHead } from '../components/SectionHead';
import { CTA } from '../components/CTA';
import { careersLede, culture, benefits, roles } from '../data/careers';
import { site, mailto } from '../data/site';

/** Careers page: culture, benefits and open roles. Content lives in src/data/careers.ts. */
export function Careers() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = `Careers — ${site.name}`;
    return () => { document.title = site.title; };
  }, []);

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Careers</p>
          <h1>Work with people <em>who ship.</em></h1>
          <p className="lede">{careersLede}</p>
        </div>
      </section>

      <section className="section" id="culture">
        <div className="wrap">
          <div className="story">
            <div>
              <p className="eyebrow">How it feels</p>
              <h2>One team, whole products.</h2>
            </div>
            <div className="story-text">
              {culture.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="benefits">
        <div className="wrap">
          <SectionHead eyebrow="Benefits" title="What you get." text="The basics done properly, so nobody has to negotiate for them." />
          <ul className="principles">
            {benefits.map((b) => (
              <li className="principle" key={b.n}>
                <div className="n">{b.n}</div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="roles">
        <div className="wrap">
          <SectionHead
            eyebrow="Open roles"
            title={`${roles.length} open positions.`}
            text={<>Nothing that fits? Send a note anyway to <a href={mailto('Open application')}>{site.email}</a> — we keep good people in mind.</>}
          />
          <ul className="roles">
            {roles.map((r) => (
              <li className="role" key={r.title}>
                <div>
                  <div className="meta">{r.type} · {r.location}</div>
                  <h3>{r.title}</h3>
                  <p>{r.summary}</p>
                </div>
                <a className="btn btn-ghost" href={mailto(`Application: ${r.title}`)}>
                  Apply by email <span className="arr">→</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="roles-note">CV or portfolio link by email · We reply to every application within a week</p>
        </div>
      </section>

      <CTA />
    </main>
  );
}
