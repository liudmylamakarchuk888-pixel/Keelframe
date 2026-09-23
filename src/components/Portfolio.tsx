import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHead } from './SectionHead';
import { projects, filters, matchesFilter, type Project, type ProjectKind, type FilterKey } from '../data/projects';
import { contactLink } from '../data/site';

const IMG = `${import.meta.env.BASE_URL}img/`;

/** Which service the contact form pre-selects for "Discuss a similar build" (a project can override via `service`). */
const serviceByKind: Record<ProjectKind, string> = {
  app: 'mobile-apps',
  web: 'web-development',
  shopify: 'shopify-development',
  betting: 'betting-platforms',
};
const similarLink = (p: Project) =>
  contactLink({ intent: 'call', service: p.service ?? serviceByKind[p.kind], re: `Something like ${p.name}` });

/** Image, or a branded placeholder tile for sites without a screenshot. */
function Media({ p }: { p: Project }) {
  if (p.img) return <img src={IMG + p.img} alt={p.alt || p.name} loading="lazy" decoding="async" />;
  const [a, b] = p.tint ?? ['#8B5CF6', '#22D3EE'];
  return (
    <div className="pf-site" style={{ '--tint-a': a, '--tint-b': b } as React.CSSProperties}>
      <div className="bar"><i /><i /><i /><span>{p.domain}</span></div>
      <div className="name">
        {p.name}
        <small>{p.kind === 'shopify' ? 'Shopify store' : 'Live platform'}</small>
      </div>
    </div>
  );
}

function Tags({ p }: { p: Project }) {
  return (
    <>
      <b>{p.cat}</b> · {p.year} · {p.platform}
    </>
  );
}

export function Portfolio() {
  const [filter, setFilter] = useState<FilterKey>('all');
  const [active, setActive] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastFocus = useRef<Element | null>(null);

  // open / close the native <dialog> when `active` changes
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (active && !d.open) {
      lastFocus.current = document.activeElement;
      d.showModal();
      d.scrollTop = 0;
    } else if (!active && d.open) {
      d.close();
    }
  }, [active]);

  // A filter is either a kind (what was built) or a tag (a topic such as AI or 3D),
  // so one project can be counted under several buttons.
  const counts = (key: FilterKey) => projects.filter((p) => matchesFilter(p, key)).length;

  // Filtered cards are removed from the DOM rather than hidden with an attribute,
  // so the grid reflows and no stylesheet rule can override the filter.
  const visible = projects.filter((p) => matchesFilter(p, filter));

  return (
    <section className="section" id="work">
      <div className="wrap">
        <SectionHead
          eyebrow="Portfolio"
          title="Products we have shipped."
          text={`${projects.length} representative  products across mobile, web, 3D, e-commerce, Web3 and gaming. Open any of them for the challenge, the scope of work, the tech stack and what happened after launch.`}
        />

        <div className="filters" role="group" aria-label="Filter portfolio">
          {filters.map((f) => (
            <button key={f.key} type="button" aria-pressed={filter === f.key} onClick={() => setFilter(f.key)}>
              {f.label}<span>{counts(f.key)}</span>
            </button>
          ))}
        </div>

        <div className="pf-grid">
          {visible.map((p) => (
            <button
              key={p.id}
              type="button"
              className="pf-card"
              aria-haspopup="dialog"
              onClick={() => setActive(p)}
            >
              <div className="pf-media"><Media p={p} /></div>
              <div className="pf-tags"><Tags p={p} /></div>
              <h3>{p.name}</h3>
              <p>{p.tagline}</p>
              <div className="pf-stat">{p.stat}</div>
              <div className="pf-more">{p.img ? 'Read case study' : 'View project'} <span>→</span></div>
            </button>
          ))}
        </div>
        <p className="pf-note" aria-live="polite">
          Showing {visible.length} of {projects.length} · Store and platform links open the live sites in a new tab
        </p>
      </div>

      {/* ---- case study dialog ---- */}
      <dialog
        className="case"
        ref={dialogRef}
        aria-labelledby="caseTitle"
        onClose={() => { setActive(null); (lastFocus.current as HTMLElement | null)?.focus?.(); }}
        onClick={(e) => { if (e.target === dialogRef.current) dialogRef.current?.close(); }}
      >
        {active && (
          <>
            <div className="case-head">
              <div className="pf-tags"><Tags p={active} /></div>
              <button type="button" className="case-close" aria-label="Close case study" onClick={() => dialogRef.current?.close()}>✕</button>
            </div>
            <div className="case-body">
              <h3 id="caseTitle">{active.name}</h3>
              <p className="case-lede">{active.tagline}</p>
              <div className="case-media"><Media p={active} /></div>
              <div className="case-stats">
                {active.stats.map(([k, v]) => (
                  <div className="case-stat" key={k}><div className="k">{k}</div><div className="v">{v}</div></div>
                ))}
              </div>
              <div className="case-sec">
                <div className="n">01 — The challenge</div>
                <h4>What problem were we solving?</h4>
                <p>{active.challenge}</p>
              </div>
              <div className="case-sec">
                <div className="n">02 — Scope of work</div>
                <h4>What we did</h4>
                <div className="scope">
                  {active.scope.map(([h, t]) => (
                    <div key={h}><h5>{h}</h5><p>{t}</p></div>
                  ))}
                </div>
              </div>
              <div className="case-sec">
                <div className="n">03 — The results</div>
                <h4>What happened after launch</h4>
                <p>{active.results}</p>
              </div>
              {active.stack.length > 0 && (
                <div className="case-stack">
                  <div className="n">Tech stack</div>
                  <div className="stack">
                    {active.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              )}
              {active.quote && (
                <blockquote className="case-quote">
                  <p>“{active.quote.text}”</p>
                  <cite><strong>{active.quote.who}</strong> — {active.quote.role}</cite>
                </blockquote>
              )}
              <div className="case-actions">
                {active.url && (
                  <a className="btn btn-primary" href={active.url} target="_blank" rel="noopener">
                    Visit {active.domain} <span className="arr">→</span>
                  </a>
                )}
                <Link
                  className={`btn ${active.url ? 'btn-ghost' : 'btn-primary'}`}
                  to={similarLink(active)}
                  onClick={() => dialogRef.current?.close()}
                >
                  Discuss a similar build <span className="arr">→</span>
                </Link>
              </div>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
