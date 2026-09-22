import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Brand } from './Logo';
import { CtaLink } from './CtaLink';
import { nav, bookCallLink } from '../data/site';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header${open ? ' open' : ''}`} id="top">
      <div className="wrap">
        <Brand />
        <ul className="nav" id="nav">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <CtaLink className="btn btn-primary btn-sm header-cta" to={bookCallLink()}>
          Book a call
        </CtaLink>
        <button
          className="menu-btn"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
    </header>
  );
}
