import type { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler;
}

/**
 * A button-styled link that works for router paths ("/contact?intent=call")
 * and for external URLs (a Calendly page, mailto:, tel:) alike.
 */
export function CtaLink({ to, className, children, onClick }: Props) {
  if (/^(https?:|mailto:|tel:)/.test(to)) {
    const newTab = to.startsWith('http');
    return (
      <a className={className} href={to} onClick={onClick} {...(newTab ? { target: '_blank', rel: 'noopener' } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link className={className} to={to} onClick={onClick}>
      {children}
    </Link>
  );
}
