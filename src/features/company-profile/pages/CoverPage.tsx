import { Circle, Defs, Image, Page, Polyline, RadialGradient, Rect, Stop, Svg, Text, View } from '@react-pdf/renderer';
import { A4, color, font, leading, mm, onNavy, page, radius, type } from '../theme';
import { BrandMark, Ph } from '../components';
import type { CompanyProfile } from '../types';

/** Concentric rings, centred on the network hub. */
const RING_RADII = [18, 32, 46, 60, 74, 88];

/** Outer nodes of the network graphic, in millimetres. */
const NODES: [number, number, number][] = [
  [112, 40, 1.3],
  [136, 52, 1.6],
  [150, 34, 1.3],
  [186, 40, 1.3],
  [202, 56, 1.2],
  [142, 82, 1.3],
  [176, 96, 1.3],
  [198, 88, 1.2],
  [170, 16, 1.2],
  [122, 98, 1.2],
];

/** Each run passes through the hub at 168,62 or links two outer nodes. */
const EDGES = [
  '112,40 150,34 168,62 186,40 202,56',
  '136,52 168,62 176,96 198,88',
  '150,34 170,16 186,40',
  '168,62 142,82 122,98',
];

/** Dot field across the top-right corner: 98 × 104mm on a 6mm pitch. */
const DOTS: [number, number][] = [];
for (let x = 112; x <= 210; x += 6) {
  for (let y = 0; y <= 104; y += 6) DOTS.push([x, y]);
}

/** The full-bleed navy background artwork. Coordinates are millimetres. */
function CoverArtwork() {
  return (
    <Svg
      viewBox="0 0 210 297"
      style={{ position: 'absolute', top: 0, left: 0, width: mm(210), height: mm(297) }}
    >
      <Defs>
        <RadialGradient id="coverGlow" cx="168" cy="62" r="92" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor={color.accent} stopOpacity="0.55" />
          <Stop offset="1" stopColor={color.accent} stopOpacity="0" />
        </RadialGradient>
        <RadialGradient id="coverCyanGlow" cx="6" cy="252" r="82" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor={color.cyan} stopOpacity="0.16" />
          <Stop offset="1" stopColor={color.cyan} stopOpacity="0" />
        </RadialGradient>
      </Defs>

      <Rect x={0} y={0} width={210} height={297} fill={color.navy} />
      <Circle cx={168} cy={62} r={92} fill="url(#coverGlow)" />
      <Circle cx={6} cy={252} r={82} fill="url(#coverCyanGlow)" />

      {RING_RADII.map((r) => (
        <Circle key={r} cx={168} cy={62} r={r} fill="none" stroke={color.white} strokeOpacity={0.09} strokeWidth={0.3} />
      ))}

      {DOTS.map(([x, y]) => (
        <Circle key={`${x}-${y}`} cx={x} cy={y} r={0.42} fill={color.white} fillOpacity={0.16} />
      ))}

      {EDGES.map((points) => (
        <Polyline key={points} points={points} fill="none" stroke={color.network} strokeOpacity={0.75} strokeWidth={0.32} />
      ))}

      {NODES.map(([cx, cy, r]) => (
        <Circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill={color.navy} stroke={color.cyan} strokeWidth={0.42} />
      ))}

      <Circle cx={168} cy={62} r={6} fill="none" stroke={color.cyan} strokeOpacity={0.5} strokeWidth={0.4} />
      <Circle cx={168} cy={62} r={3} fill={color.cyan} />

      <Rect x={0} y={293} width={70} height={4} fill={color.accent} />
      <Rect x={70} y={293} width={18} height={4} fill={color.cyan} />
    </Svg>
  );
}

/** Page 1 — the navy cover. */
export function CoverPage({ profile }: { profile: CompanyProfile }) {
  const c = profile.company ?? {};
  const tags = c.serviceTags?.length ? c.serviceTags : [];

  const footCol = (label: string, value: string | undefined, ph: string) => (
    <View style={{ width: mm(60) }}>
      <Text
        style={{
          fontSize: 6.8,
          letterSpacing: 1,
          color: onNavy.label,
          marginBottom: mm(1.6),
        }}
      >
        {label}
      </Text>
      <Ph dark value={value} label={ph} style={{ fontSize: 9, fontWeight: 500, color: color.white }} />
    </View>
  );

  return (
    <Page size="A4" wrap={false} style={{ backgroundColor: color.navy, fontFamily: font.body }}>
      <View style={{ ...A4, position: 'relative' }}>
      <CoverArtwork />

      <View style={{ position: 'absolute', top: mm(18), left: mm(page.margin), flexDirection: 'row' }}>
        {c.logoUrl ? (
          <Image src={c.logoUrl} style={{ width: mm(14), height: mm(14), objectFit: 'contain' }} />
        ) : (
          <BrandMark size={14} color={color.white} />
        )}
        <View style={{ marginLeft: mm(4), justifyContent: 'center' }}>
          <Ph
            dark
            value={c.name}
            label="Company Name"
            style={{ fontFamily: font.head, fontWeight: 500, fontSize: 13, color: color.white }}
          />
          <Text style={{ marginTop: mm(1.4), fontSize: 7.5, letterSpacing: 1.1, color: onNavy.sub }}>
            {(c.kicker ?? 'IT solutions & services').toUpperCase()}
          </Text>
        </View>
      </View>

      <View style={{ position: 'absolute', top: mm(118), left: mm(page.margin), right: mm(page.margin) }}>
        <Text style={{ fontSize: type.eyebrow, fontWeight: 600, letterSpacing: 1.1, color: color.cyan }}>
          COMPANY PROFILE ·{' '}
          <Ph dark value={c.year} label="2026" style={{ fontWeight: 500 }} />
        </Text>
        <View style={{ maxWidth: mm(150), marginTop: mm(2.6) }}>
          <Ph
            dark
            value={c.tagline}
            label="A one-line promise about what you build"
            style={{
              fontFamily: font.head,
              fontWeight: 600,
              fontSize: type.coverTitle,
              lineHeight: leading.cover,
              color: color.white,
            }}
          />
        </View>
        <View style={{ maxWidth: mm(122), marginTop: mm(7) }}>
          <Ph
            dark
            value={c.lead}
            label="Two lines on what you do and who you do it for"
            style={{ fontSize: 12, lineHeight: 1.5, color: onNavy.lead }}
          />
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: mm(2.4), marginTop: mm(8) }}>
          {tags.map((tag) => (
            <View
              key={tag}
              style={{
                borderWidth: 1,
                borderColor: onNavy.border,
                borderRadius: radius.pill,
                paddingVertical: mm(1.7),
                paddingHorizontal: mm(3.5),
              }}
            >
              <Text style={{ fontSize: 7.8, fontWeight: 500, color: color.white }}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: mm(16),
          left: mm(page.margin),
          right: mm(page.margin),
          borderTopWidth: 1,
          borderTopColor: onNavy.hairline,
          paddingTop: mm(5.6),
          flexDirection: 'row',
        }}
      >
        {footCol('WEBSITE', c.website, 'www.yourcompany.com')}
        {footCol('EMAIL', c.email, 'hello@yourcompany.com')}
        {footCol('HEADQUARTERS', c.hq, 'City, Country')}
      </View>
      </View>
    </Page>
  );
}
