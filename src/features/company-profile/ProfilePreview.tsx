import { useEffect, useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { CompanyProfilePDF } from './CompanyProfilePDF';
import { buildWebsiteQr } from './qr';
import type { CompanyProfile } from './types';

/**
 * In-app preview of the profile.
 *
 * Imports react-pdf at module scope, so it must only ever be reached
 * through a lazy import — see src/pages/CompanyProfile.tsx.
 */
export function ProfilePreview({ data, height = '82vh' }: { data: CompanyProfile; height?: string }) {
  const [profile, setProfile] = useState<CompanyProfile | null>(data.qrDataUrl ? data : null);

  useEffect(() => {
    if (data.qrDataUrl) {
      setProfile(data);
      return;
    }
    let live = true;
    buildWebsiteQr(data.company?.website).then((qrDataUrl) => {
      if (live) setProfile({ ...data, qrDataUrl });
    });
    return () => {
      live = false;
    };
  }, [data]);

  if (!profile) return <div style={{ height, display: 'grid', placeItems: 'center' }}>Preparing preview…</div>;

  return (
    <PDFViewer style={{ width: '100%', height, border: 0 }} showToolbar>
      <CompanyProfilePDF data={profile} />
    </PDFViewer>
  );
}
