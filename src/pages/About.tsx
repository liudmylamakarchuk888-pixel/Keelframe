import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionHead } from '../components/SectionHead';
import { CTA } from '../components/CTA';
import { CtaLink } from '../components/CtaLink';
import { aboutHero, numbers, story, principles, whoWeWorkWith, team } from '../data/about';
import { processSteps } from '../data/content';
import { accreditations } from '../data/trust';
import { site, bookCallLink } from '../data/site';
import { DownloadProfileButton, sampleProfile } from '../features/company-profile';

const IMG = `${import.meta.env.BASE_URL}img/`;

/** Renders **bold** spans inside a paragraph string. */
function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') ? <strong key={i}>{p.slice(2, -2)}</strong> : <span key={i}>{p}</span>,
      )}
    </>
  );
}

export function About() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = `About — ${site.name}`;
    return () => { document.title = site.title; };
  }, []);

  return (
    <main>
      {/* ---- hero ---- */}
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">{aboutHero.eyebrow}</p>
          <h1>{aboutHero.title.replace(' ships.', ' ')}<em>ships.</em></h1>
          <p className="lede">{aboutHero.lede}</p>
          <div className="numbers">
            {numbers.map((n) => (
              <div className="number" key={n.k}><div className="v">{n.v}</div><div className="k">{n.k}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- story ---- */}
      <section className="section" id="story">
        <div className="wrap">
          <div className="story">
            <div>
              <p className="eyebrow">Why we exist</p>
              <h2>Built by founders, for founders.</h2>
            </div>
            <div className="story-text">
              {story.map((p, i) => <p key={i}><Rich text={p} /></p>)}
            </div>
          </div>
        </div>
      </section>

      {/* ---- principles ---- */}
      <section className="section" id="principles">
        <div className="wrap">
          <SectionHead eyebrow="How we operate" title="Six habits we do not negotiate on." text="They are the reason projects here finish on the date in the scope document — and the reason a few prospects choose someone else." />
          <ul className="principles">
            {principles.map((p) => (
              <li className="principle" key={p.n}>
                <div className="n">{p.n}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- who we work with ---- */}
      <section className="section" id="clients-types">
        <div className="wrap">
          <SectionHead eyebrow="Who we work with" title="Four kinds of team keep coming back." text={<>See what that looks like in practice in the <Link to="/work">portfolio</Link>.</>} />
          <div className="clients-grid">
            {whoWeWorkWith.map((c) => (
              <div className="client-type" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <div className="tag-row">{c.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- team ---- */}
      <section className="section" id="team">
        <div className="wrap">
          <SectionHead eyebrow="The team" title="The people on the call are the people who build." text="Senior-led by design. Every engagement is led by a senior engineer or designer who stays on it from scope to launch." />
          <ul className="team">
            {team.map((m) => (
              <li className={`member${m.placeholder ? '' : ' real'}`} key={m.name + m.role}>
                {m.placeholder && <span className="ph">Placeholder — add real details</span>}
                <div className="avatar">{m.photo ? <img src={IMG + m.photo} alt={m.name} /> : m.initials}</div>
                <div>
                  <h3>{m.name}</h3>
                  <div className="role">{m.role}</div>
                </div>
                <p>{m.bio}</p>
              </li>
            ))}
          </ul>
          <div className="hero-actions" style={{ marginTop: 32 }}>
            <Link className="btn btn-ghost btn-sm" to="/careers">We are hiring — see open roles <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      {/* ---- accreditations + where we are ---- */}
      <section className="section" id="where">
        <div className="wrap">
          <SectionHead eyebrow="Where and how" title="A London studio, working with founders everywhere." text={<>Founded in {site.founded}, registered in the UK, and available across time zones.</>} />
          <div className="about-meta">
            <div>
              <h3>Partners &amp; accreditations</h3>
              <ul className="badges">
                {accreditations.map((a) => (
                  <li key={a.label}><span className="badge">{a.label}</span><small>{a.note}</small></li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Where we are</h3>
              <address>
                {site.address.map((line) => (
                  <span key={line}>{line}<br /></span>
                ))}
              </address>
              <p>{site.hours}<br />We reply {site.responseTime}.</p>
              <p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <p><Link to="/contact">Contact form and map →</Link></p>
              <p style={{ marginTop: 18 }}>
                <DownloadProfileButton data={sampleProfile} className="btn btn-ghost btn-sm" />
              </p>
              <p><Link to="/company-profile">Preview the company profile →</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- process (short) ---- */}
      <section className="section" id="about-process">
        <div className="wrap">
          <SectionHead eyebrow="How a project runs" title="The same five steps, every time." text={<>The full version, with engagement models, is on the <Link to="/process">home page</Link>.</>} />
          <ol className="steps">
            {processSteps.map((s) => (
              <li className="step" key={s.n}>
                <span className="step-n">{s.n}</span>
                <div className="step-when">{s.when}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="hero-actions" style={{ marginTop: 40 }}>
            <CtaLink className="btn btn-primary" to={bookCallLink()}>Book a discovery call <span className="arr">→</span></CtaLink>
            <Link className="btn btn-ghost" to="/work">See the work</Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
