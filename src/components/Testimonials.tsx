import { SectionHead } from './SectionHead';
import { testimonials } from '../data/content';

export function Testimonials() {
  return (
    <section className="section" id="clients">
      <div className="wrap">
        <SectionHead eyebrow="What clients say" title="Results, in their words." text="From the founders and product leads we have shipped for." />
        <ul className="quotes">
          {testimonials.map((t, i) => (
            <li className={`quote${t.placeholder ? '' : ' real'}`} key={i}>
              <span className={`ph${t.placeholder ? '' : ' ok'}`}>{t.tag}</span>
              <blockquote>"{t.quote}"</blockquote>
              <div className="who"><strong>{t.name}</strong>{t.role}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
