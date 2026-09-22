import { Link } from 'react-router-dom';
import { SectionHead } from './SectionHead';
import { exploreAI, type ExploreItem } from '../data/content';
import { contactLink } from '../data/site';

const icons: Record<ExploreItem['icon'], JSX.Element> = {
  loop: <><path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" /><path d="M18 3v4h-4M6 21v-4h4" /></>,
  chat: <><path d="M4 5h16v11H9l-5 4z" /><circle cx="9" cy="10.5" r=".9" fill="currentColor" stroke="none" /><circle cx="12" cy="10.5" r=".9" fill="currentColor" stroke="none" /><circle cx="15" cy="10.5" r=".9" fill="currentColor" stroke="none" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" /></>,
  sparkle: <><path d="M11 3l1.8 5.2L18 10l-5.2 1.8L11 17l-1.8-5.2L4 10l5.2-1.8z" /><path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" /></>,
  scatter: <><path d="M4 20h16M4 20V4" /><circle cx="8" cy="15" r="1.2" /><circle cx="11" cy="11" r="1.2" /><circle cx="15" cy="12" r="1.2" /><circle cx="18" cy="7" r="1.2" /><path d="M6 17.5L19.5 5.5" strokeDasharray="2 2.5" /></>,
  doc: <><path d="M14 3H6v18h12V7z" /><path d="M14 3v4h4" /><circle cx="11" cy="13" r="2.5" /><path d="M13 15l2.5 2.5" /></>,
  route: <><path d="M4 12h5M15 6h5M15 12h5M15 18h5" /><path d="M9 12c3 0 3-6 6-6M9 12c3 0 3 6 6 6M9 12h6" /></>,
  nodes: <><circle cx="12" cy="5" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M11 7l-5 9M13 7l5 9M7 18h10" /></>,
};

export function ExploreAI() {
  return (
    <section className="section" id="explore-ai">
      <div className="wrap">
        <SectionHead
          eyebrow="Explore AI"
          title="Specialist AI work."
          text="Focused engagements for teams that already know what they need — each one shipped with evaluation, cost control and monitoring built in."
        />
        <div className="ai-grid">
          {exploreAI.map((e) => (
            <Link className="ai-card" to={contactLink({ intent: 'call', service: 'ai-development', re: e.title })} key={e.title}>
              <span className="ic"><svg viewBox="0 0 24 24">{icons[e.icon]}</svg></span>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
              <span className="more">Talk to us about this <span>→</span></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
