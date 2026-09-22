import { useEffect, useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SectionHead } from './SectionHead';
import { site, mailto, type ContactIntent } from '../data/site';
import { services } from '../data/services';

/**
 * The contact section (home page, id="contact"). Every "Book a call",
 * "Discuss a … build" and "Request an estimate" button on the site lands here
 * with the intent, service and subject pre-filled from the URL:
 *   /contact?intent=call&service=ai-development&re=Something%20like%20Beretta
 *
 * Delivery: if `site.formEndpoint` is set the form posts JSON there; otherwise
 * it opens the visitor's email app with the message filled in.
 */

const intents: { key: ContactIntent; label: string; hint: string }[] = [
  { key: 'call', label: 'Book a discovery call', hint: 'Thirty minutes on a video call to talk through the idea. No slides, no obligation.' },
  { key: 'estimate', label: 'Request a written estimate', hint: 'Describe what you need and when. We reply with a scope, a price and a first delivery date.' },
  { key: 'question', label: 'Ask a question', hint: 'Anything else: a quick sanity check, a partnership, or press.' },
];

const budgets = ['Not sure yet', 'Under £10k', '£10k – £25k', '£25k – £50k', '£50k – £100k', 'Over £100k'];
const timelines = ['As soon as possible', 'Within three months', 'Three to six months', 'Just exploring'];

type Status =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'sent' }
  | { kind: 'mailto'; href: string }
  | { kind: 'error' };

/** Office map. Loads Google Maps only when the visitor asks, so no request goes to Google before that. */
function OfficeMap() {
  return <div></div>
  // const [loaded, setLoaded] = useState(false);
  // const place = site.address.join(', ');
  // const q = encodeURIComponent(place);

  // if (loaded) {
  //   return (
  //     <iframe
  //       className="map"
  //       title={`Map showing ${place}`}
  //       src={`https://www.google.com/maps?q=${q}&output=embed`}
  //       loading="lazy"
  //       allowFullScreen
  //       referrerPolicy="no-referrer-when-downgrade"
  //     />
  //   );
  // }
  // return (
  //   <div className="map map-ph">
  //     <p>{place}</p>
  //     <div className="map-actions">
  //       <button type="button" className="btn btn-ghost btn-sm" onClick={() => setLoaded(true)}>Load map</button>
  //       <a className="btn btn-ghost btn-sm" href={`https://www.google.com/maps/search/?api=1&query=${q}`} target="_blank" rel="noopener">
  //         Open in Google Maps
  //       </a>
  //     </div>
  //     <small>The map loads from Google only when you ask for it, so nothing is sent to Google until then.</small>
  //   </div>
  // );
}

export function Contact() {
  const [params] = useSearchParams();
  const [intent, setIntent] = useState<ContactIntent>('call');
  const [service, setService] = useState('');
  const [re, setRe] = useState('');
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  // Pre-fill from the button that brought the visitor here.
  useEffect(() => {
    const i = params.get('intent');
    const s = params.get('service');
    if (i && intents.some((x) => x.key === i)) setIntent(i as ContactIntent);
    if (s && services.some((x) => x.id === s)) setService(s);
    setRe(params.get('re') ?? '');
    setStatus({ kind: 'idle' });
  }, [params]);

  const current = intents.find((i) => i.key === intent) ?? intents[0];
  const serviceTitle = services.find((s) => s.id === service)?.title ?? 'Not sure yet';

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get('website')) return; // honeypot: bots fill it, people never see it

    const data = {
      intent: current.label,
      name: String(fd.get('name') ?? '').trim(),
      email: String(fd.get('email') ?? '').trim(),
      company: String(fd.get('company') ?? '').trim(),
      service: serviceTitle,
      budget: String(fd.get('budget') ?? ''),
      timeline: String(fd.get('timeline') ?? ''),
      message: String(fd.get('message') ?? '').trim(),
      regarding: re,
      page: window.location.href,
    };
    const subject = `${current.label} — ${data.service}${re ? ` — ${re}` : ''}`;

    if (site.formEndpoint) {
      setStatus({ kind: 'sending' });
      try {
        const r = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...data, _subject: subject }),
        });
        if (!r.ok) throw new Error(String(r.status));
        form.reset();
        setService('');
        setRe('');
        setStatus({ kind: 'sent' });
      } catch {
        setStatus({ kind: 'error' });
      }
      return;
    }

    // No endpoint configured: hand the message to the visitor's email app.
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.company ? `Company: ${data.company}` : '',
      `Service: ${data.service}`,
      `Budget: ${data.budget}`,
      `Timeline: ${data.timeline}`,
      re ? `Regarding: ${re}` : '',
      '',
      data.message,
    ]
      .filter((l, i) => l !== '' || i === 7)
      .join('\n');
    const href = mailto(subject, body);
    window.location.href = href;
    setStatus({ kind: 'mailto', href });
  }

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <SectionHead
          eyebrow="Contact"
          title="Have something to build?"
          text="Tell us what it is and when it needs to be live. You will have a written scope, a price and a first delivery date within three working days."
        />

        <div className="contact-grid">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="field">
              <span id="intent-label">I would like to</span>
              <div className="filters intent" role="radiogroup" aria-labelledby="intent-label">
                {intents.map((i) => (
                  <button key={i.key} type="button" role="radio" aria-checked={intent === i.key} onClick={() => setIntent(i.key)}>
                    {i.label}
                  </button>
                ))}
              </div>
              <p className="hint">{current.hint}</p>
            </div>

            {re && (
              <p className="re-chip">
                Regarding: <strong>{re}</strong>
                <button type="button" aria-label="Remove subject" onClick={() => setRe('')}>✕</button>
              </p>
            )}

            <div className="field-row">
              <label className="field">
                <span>Name</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label className="field">
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
            </div>

            <div className="field-row">
              <label className="field">
                <span>Company <em>(optional)</em></span>
                <input name="company" type="text" autoComplete="organization" />
              </label>
              <label className="field">
                <span>What do you need?</span>
                <select name="service" value={service} onChange={(e) => setService(e.target.value)}>
                  <option value="">Not sure yet</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="field-row">
              <label className="field">
                <span>Budget</span>
                <select name="budget" defaultValue={budgets[0]}>
                  {budgets.map((b) => <option key={b}>{b}</option>)}
                </select>
              </label>
              <label className="field">
                <span>When does it need to be live?</span>
                <select name="timeline" defaultValue={timelines[0]}>
                  {timelines.map((t) => <option key={t}>{t}</option>)}
                </select>
              </label>
            </div>

            <label className="field">
              <span>Tell us about it</span>
              <textarea
                name="message"
                rows={6}
                required
                placeholder="What it is, who it is for, and anything already decided — platform, deadline, existing code."
              />
            </label>

            <label className="hp" aria-hidden="true">
              Leave this field empty
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>

            <div className="form-foot">
              <button type="submit" className="btn btn-primary" disabled={status.kind === 'sending'}>
                {status.kind === 'sending' ? 'Sending…' : 'Send message'} <span className="arr">→</span>
              </button>
              <small>
                We reply {site.responseTime}. By sending this you agree to our <Link to="/privacy">privacy policy</Link>.
              </small>
            </div>

            <div aria-live="polite">
              {status.kind === 'sent' && (
                <p className="form-status">Thank you — we have your message and will reply {site.responseTime}.</p>
              )}
              {status.kind === 'mailto' && (
                <p className="form-status">
                  Your email app should have opened with the message ready to send. If it did not,{' '}
                  <a href={status.href}>open it again</a> or email <a href={`mailto:${site.email}`}>{site.email}</a>.
                </p>
              )}
              {status.kind === 'error' && (
                <p className="form-status error">
                  That did not send. Please email us directly at <a href={`mailto:${site.email}`}>{site.email}</a>.
                </p>
              )}
            </div>
          </form>

          <aside className="contact-aside" aria-label="Contact details">
            <div className="contact-item">
              <div className="k">Email</div>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className="contact-item">
              <div className="k">Phone</div>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
            <div className="contact-item">
              <div className="k">WhatsApp</div>
              <a href={site.whatsapp} target="_blank" rel="noopener">Message us on WhatsApp</a>
            </div>
            <div className="contact-item">
              <div className="k">Hours</div>
              <p>
                {site.hours}
                <br />
                We reply {site.responseTime}.
              </p>
            </div>
            <div className="contact-item">
              <div className="k">Office</div>
              <address>
                {site.address.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
              <OfficeMap />
            </div>
            {/* <div className="contact-item">
              <div className="k">Elsewhere</div>
              <div className="social">
                {site.social.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener">{s.label}</a>
                ))}
              </div>
            </div> */}
          </aside>
        </div>
      </div>
    </section>
  );
}
