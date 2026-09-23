// ---------------------------------------------------------------
// Font registration.
//
// react-pdf cannot read WOFF2, so the profile ships static TTFs in
// public/fonts. The browser loads them over HTTP from /fonts; the Node
// render script passes an absolute directory instead, which fontkit reads
// straight off disk. Nothing here imports `node:path`, so the module stays
// safe to bundle for the browser.
// ---------------------------------------------------------------

import { Font } from '@react-pdf/renderer';

const INTER = [
  ['Inter-Regular.ttf', 400],
  ['Inter-Medium.ttf', 500],
  ['Inter-SemiBold.ttf', 600],
  ['Inter-Bold.ttf', 700],
] as const;

const SPACE_GROTESK = [
  ['SpaceGrotesk-Medium.ttf', 500],
  ['SpaceGrotesk-SemiBold.ttf', 600],
] as const;

let registered = false;

/**
 * Where the browser should fetch the TTFs from, honouring Vite's `base`.
 * `import.meta.env` does not exist under plain Node, hence the guard.
 */
export function browserFontsBase() {
  try {
    // BASE_URL always ends in a slash, so this never doubles up.
    return `${import.meta.env.BASE_URL}fonts`;
  } catch {
    return '/fonts';
  }
}

/**
 * Registers Inter and Space Grotesk. First call wins, so the render script
 * can register absolute paths before anything imports the document.
 *
 * @param base directory holding the TTFs — a URL prefix in the browser
 *   (default `${BASE_URL}fonts`) or an absolute path in Node.
 */
export function registerFonts(base = browserFontsBase()) {
  if (registered) return;
  registered = true;

  const src = (file: string) => `${base}/${file}`;

  Font.register({
    family: 'Inter',
    fonts: INTER.map(([file, fontWeight]) => ({ src: src(file), fontWeight })),
  });

  Font.register({
    family: 'SpaceGrotesk',
    fonts: SPACE_GROTESK.map(([file, fontWeight]) => ({ src: src(file), fontWeight })),
  });

  // Every page is fixed height, so a hyphenated break would silently push
  // content past the bottom edge. Keep words whole.
  Font.registerHyphenationCallback((word) => [word]);
}
