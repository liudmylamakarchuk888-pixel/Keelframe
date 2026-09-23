import { Suspense, lazy, useEffect } from 'react';
import { site } from '../data/site';
import { DownloadProfileButton, sampleProfile } from '../features/company-profile';

// react-pdf and the six embedded TTFs are a heavy download, so the viewer is
// split into its own chunk and fetched only when this route is opened.
const ProfilePreview = lazy(() =>
  import('../features/company-profile/ProfilePreview').then((m) => ({ default: m.ProfilePreview })),
);

const Loading = () => (
  <div style={{ height: '82vh', display: 'grid', placeItems: 'center', color: 'var(--muted)' }}>
    Loading the company profile…
  </div>
);

/** /company-profile — previews the 13-page PDF and offers it for download. */
export function CompanyProfile() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = `Company profile — ${site.name}`;
    return () => {
      document.title = site.title;
    };
  }, []);

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Company profile</p>
          <h1>
            Thirteen pages on who we are, <em>as a PDF.</em>
          </h1>
          <p className="lede">
            The same story as this site — services, process, case studies, the team and how to reach
            us — laid out for print and for sending on. Preview it below or take the file.
          </p>
          <div className="hero-actions">
            <DownloadProfileButton data={sampleProfile} className="btn btn-primary" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Suspense fallback={<Loading />}>
            <ProfilePreview data={sampleProfile} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
