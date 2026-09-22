import { SectionHead } from './SectionHead';
import { faq } from '../data/content';

export function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <SectionHead eyebrow="FAQ" title="Questions we get asked most." text="Not answered here? Ask on the discovery call — it is quicker than email." />
        <div className="faq">
          {faq.map((item, i) => (
            <details key={item.q} open={i === 0}>
              <summary>
                {item.q}
                <span className="ic" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
