// ---------------------------------------------------------------
// QR code for the back cover.
//
// react-pdf draws images, not QR codes, so the code is generated as a PNG
// data URL before rendering and passed in on the profile as `qrDataUrl`.
// ---------------------------------------------------------------

import QRCode from 'qrcode';
import { color } from './theme';

/**
 * Builds a PNG data URL for a website, ready to hand to `<Image>`.
 *
 * Drawn navy-on-white so it stays scannable inside the navy back cover,
 * and returns undefined for an empty URL — the page then shows its dashed
 * placeholder instead.
 */
export async function buildWebsiteQr(website?: string): Promise<string | undefined> {
  if (!website) return undefined;
  const target = /^https?:\/\//i.test(website) ? website : `https://${website}`;
  return QRCode.toDataURL(target, {
    margin: 1,
    width: 512,
    errorCorrectionLevel: 'M',
    color: { dark: color.navy, light: '#FFFFFF' },
  });
}
