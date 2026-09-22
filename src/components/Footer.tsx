import { Link } from 'react-router-dom';
import { Brand } from './Logo';
import { site, industries } from '../data/site';
import { services } from '../data/services';
import { exploreAI } from '../data/content';

export function Footer() {
  const { legal } = site;
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Brand />
            <p>{site.tagline}</p>
            <address>
              {site.address.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              <a href={site.phoneHref}>{site.phone}</a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              <a href={site.whatsapp} target="_blank" rel="noopener">WhatsApp</a>
            </address>
            <p className="foot-hours">{site.hours}</p>
          </div>

          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/work">Portfolio</Link></li>
              <li><Link to="/clients">Clients</Link></li>
              <li><Link to="/process">How we work</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Services</h5>
            <ul>
              {services.map((s) => (
                <li key={s.id}><Link to={`/services/${s.id}`}>{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <h5>Explore AI</h5>
            <ul>
              {exploreAI.map((e) => (
                <li key={e.title}><Link to="/explore-ai">{e.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <h5>Industries</h5>
            <ul>
              {industries.map((i) => (
                <li key={i.label}><Link to={i.to}>{i.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
{/* 
        <p className="foot-legal">
          {legal.name} is registered in England and Wales, company number {legal.companyNumber}. Registered office: {legal.registeredOffice}.
          VAT number {legal.vat}. ICO registration {legal.ico}. This site sets no tracking cookies.
        </p> */}

        <div className="foot-bottom">
          <span>
            © {site.year} {legal.name} · {site.location} · <a href={`mailto:${site.email}`}>{site.email}</a>
          </span>
          <span className="social">
            {site.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener">{s.label}</a>
            ))}
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
