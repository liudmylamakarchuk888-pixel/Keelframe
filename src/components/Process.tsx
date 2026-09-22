import { SectionHead } from './SectionHead';
import { processSteps, engagementModels } from '../data/content';

export function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <SectionHead
          eyebrow="How we work"
          title="Every engagement starts the same way."
          text="Five steps, in this order, every time — so there are no surprises in week three."
        />
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

        <div className="models-head">
          <div>
            <p className="eyebrow">Engagement models</p>
            <h3>Four ways to engage us. None of them is by the hour.</h3>
          </div>
          <p>Every model starts with the same free discovery call and written scope.</p>
        </div>
        <div className="models">
          {engagementModels.map((m) => (
            <div className="model" key={m.title}>
              <div className="k">Best for</div>
              <p className="best">{m.best}</p>
              <h4>{m.title}</h4>
              <p>{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
