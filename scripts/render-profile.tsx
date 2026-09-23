// ---------------------------------------------------------------
// Renders sampleProfile to out/company-profile.pdf.
//
//   npx tsx scripts/render-profile.tsx
//
// Fonts are registered with absolute paths before the document module is
// imported, so react-pdf reads the TTFs off disk rather than over HTTP.
// ---------------------------------------------------------------

import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { renderToFile } from '@react-pdf/renderer';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'out', 'company-profile.pdf');

async function main() {
  // Register first, then import: the document module registers the browser
  // URLs at import time and the first registration wins.
  const { registerFonts } = await import('../src/features/company-profile/fonts');
  registerFonts(path.join(root, 'public', 'fonts'));

  // A file:// URL, not a bare path: on Windows "F:\..." parses as a URL
  // with protocol "f:", and react-pdf then tries to fetch it over the network.
  const { setAssetBase } = await import('../src/features/company-profile/assets');
  setAssetBase(pathToFileURL(path.join(root, 'public', 'img-pdf')).href);

  const [{ CompanyProfilePDF }, { sampleProfile }, { buildWebsiteQr }] = await Promise.all([
    import('../src/features/company-profile/CompanyProfilePDF'),
    import('../src/features/company-profile/sampleProfile'),
    import('../src/features/company-profile/qr'),
  ]);

  const profile = {
    ...sampleProfile,
    qrDataUrl: await buildWebsiteQr(sampleProfile.company?.website),
  };

  await mkdir(path.dirname(out), { recursive: true });
  await renderToFile(<CompanyProfilePDF data={profile} />, out);

  console.log(`Wrote ${path.relative(root, out)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
