// ---------------------------------------------------------------
// Image paths for the PDF.
//
// react-pdf reads PNG and JPEG only, so the portfolio screenshots are kept
// as JPEGs in public/img-pdf alongside the .webp files the website uses.
// See the README for the one-liner that regenerates them.
//
// Like the fonts, these have to resolve both in the browser (a URL) and in
// the Node render script (an absolute path), so the base is set once and
// the first caller wins.
// ---------------------------------------------------------------

let base: string | null = null;

/**
 * Points image lookups at a directory. The render script calls this with an
 * absolute path before importing the profile data; in the browser the
 * default below applies.
 */
export function setAssetBase(dir: string) {
  if (base === null) base = dir;
}

function resolveBase() {
  if (base === null) {
    try {
      // BASE_URL always ends in a slash, so this never doubles up.
      base = `${import.meta.env.BASE_URL}img-pdf`;
    } catch {
      base = '/img-pdf';
    }
  }
  return base;
}

/** `asset('beretta.jpg')` -> "/img-pdf/beretta.jpg" or an absolute path. */
export const asset = (file: string) => `${resolveBase()}/${file}`;

/** The JPEG twin of a portfolio entry's `img` field ("beretta.webp"). */
export const projectImage = (webp?: string) =>
  webp ? asset(webp.replace(/\.webp$/i, '.jpg')) : undefined;
