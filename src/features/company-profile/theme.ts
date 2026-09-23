// ---------------------------------------------------------------
// Design tokens for the company profile PDF.
//
// Layout is in millimetres, type sizes in points. react-pdf understands
// both, so a style can mix `marginBottom: mm(7)` with `fontSize: 9.3`.
// ---------------------------------------------------------------

/** Millimetres as a react-pdf length. Use for every box, gap and offset. */
export const mm = (v: number) => `${v}mm` as const;

export const color = {
  navy: '#0A1633',
  navy2: '#12244F',
  accent: '#2F5BFF',
  accentSoft: '#EAF0FF',
  cyan: '#35C8DC',
  ink: '#0F172A',
  ink2: '#475569',
  muted: '#8A97AB',
  line: '#E3E8F0',
  tint: '#F4F6FA',
  white: '#FFFFFF',
  /** Joining lines in the cover network graphic. */
  network: '#6F8DFF',
  /** Image placeholders: fill, dashed border, label. */
  phFill: '#EEF2F8',
  phBorder: '#C3CDDC',
  phLabel: '#7C8AA0',
};

/** Semi-transparent whites used on the navy cover and back cover. */
export const onNavy = {
  sub: 'rgba(255,255,255,0.60)',
  lead: 'rgba(255,255,255,0.72)',
  label: 'rgba(255,255,255,0.50)',
  border: 'rgba(255,255,255,0.22)',
  cardBorder: 'rgba(255,255,255,0.14)',
  hairline: 'rgba(255,255,255,0.16)',
};

export const font = {
  /** Headings. Registered weights: 500, 600. */
  head: 'SpaceGrotesk',
  /** Body text, labels and every number. Registered weights: 400, 500, 600, 700. */
  body: 'Inter',
};

/** Point sizes. Named after the role they play, not the size. */
export const type = {
  body: 9.3,
  bodySmall: 8.6,
  bodyXs: 8.4,
  lead: 11,
  h1: 27,
  h2: 14,
  h3: 11,
  coverTitle: 40,
  backTitle: 38,
  eyebrow: 7.5,
  sectionLabel: 7.2,
  runningHead: 7,
  stat: 24,
  statSmall: 20,
};

export const leading = {
  body: 1.55,
  tight: 1.4,
  h1: 1.08,
  cover: 1.05,
};

/** Corner radii, in millimetres. */
export const radius = {
  card: mm(3.5),
  image: mm(3),
  tile: mm(2.5),
  /** Chips and pill buttons: any value past half the height reads as fully round. */
  pill: mm(20),
};

/** 1px hairlines. react-pdf border widths are points; 0.8pt matches the reference. */
export const hairline = 0.8;

export const page = {
  margin: 18,
  /** Content box, measured from the page edges. */
  top: 22,
  bottom: 20,
  width: 174,
  /** Running head baseline, from the top. */
  headerTop: 9.5,
  /** Footer block, measured up from the bottom. */
  footerBottom: 9,
};

/** Space below a SectionHeader, and above/below a Divider. */
export const space = {
  afterHeader: 7,
  divider: 7,
};

/**
 * Full-bleed A4 frame. Every page wraps its contents in one.
 *
 * react-pdf takes a Page's laid-out *height* from its content, not from
 * `size` — the pagination step is what normally stretches it, and
 * `wrap={false}` skips that step. Since every page here positions its parts
 * absolutely, the content measures zero high and the page box collapses.
 * A frame of exactly 210 × 297mm gives the page its real height back, so the
 * document stays true A4 *and* keeps the guarantee that no page can split.
 */
export const A4 = { width: mm(210), height: mm(297) } as const;
