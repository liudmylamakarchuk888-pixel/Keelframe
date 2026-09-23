import { useState } from 'react';
import type { CompanyProfile } from './types';

/** "Acme Systems" -> "acme-systems". Falls back to "company". */
export const companySlug = (name?: string) =>
  (name ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'company';

interface DownloadProfileButtonProps {
  data: CompanyProfile;
  /** Button text. Defaults to "Download company profile". */
  label?: string;
  className?: string;
}

/**
 * Renders the profile in the browser and saves it as
 * `{company-slug}-company-profile.pdf`.
 *
 * react-pdf and the six embedded fonts are a large download, so both the
 * renderer and the document are imported on click rather than up front —
 * a visitor who never asks for the PDF never pays for it.
 */
export function DownloadProfileButton({
  data,
  label = 'Download company profile',
  className = 'btn btn-ghost',
}: DownloadProfileButtonProps) {
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);

  const download = async () => {
    setBusy(true);
    setFailed(false);
    try {
      const [{ pdf }, { CompanyProfilePDF }, { buildWebsiteQr }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('./CompanyProfilePDF'),
        import('./qr'),
      ]);

      const profile: CompanyProfile = data.qrDataUrl
        ? data
        : { ...data, qrDataUrl: await buildWebsiteQr(data.company?.website) };

      const blob = await pdf(<CompanyProfilePDF data={profile} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${companySlug(data.company?.name)}-company-profile.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      // Revoke on the next tick: Safari needs the URL alive during the click.
      setTimeout(() => URL.revokeObjectURL(url), 0);
    } catch (error) {
      console.error('Could not build the company profile PDF', error);
      setFailed(true);
    } finally {
      setBusy(false);
    }
  };

  return (
    <button type="button" className={className} onClick={download} disabled={busy}>
      {busy ? 'Preparing PDF…' : failed ? 'Try again' : label}
      {busy || failed ? null : <span className="arr"> →</span>}
    </button>
  );
}
