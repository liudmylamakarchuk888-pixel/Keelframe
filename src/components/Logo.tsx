import { Link } from 'react-router-dom';
import { site } from '../data/site';

/** The Keelframe mark: three hull frames on a gradient keel. */
export function Mark({ className = 'mark' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="kf-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="#12142A" />
      <path d="M12 23C12 38 22 45 32 45C42 45 52 38 52 23" fill="none" stroke="#F3F4FF" strokeWidth="3.6" strokeLinecap="round" />
      <path d="M20 17C20 32 26 45 32 45C38 45 44 32 44 17" fill="none" stroke="#F3F4FF" strokeWidth="3.6" strokeLinecap="round" />
      <path d="M27 12C27 27 30 45 32 45C34 45 37 27 37 12" fill="none" stroke="#F3F4FF" strokeWidth="3.6" strokeLinecap="round" />
      <rect x="22" y="50.5" width="20" height="4.5" rx="2.25" fill="url(#kf-grad)" />
    </svg>
  );
}

/** Mark + wordmark, linking home. */
export function Brand() {
  return (
    <Link className="brand" to="/" aria-label={`${site.name} home`}>
      <Mark />
      {site.name}
    </Link>
  );
}
