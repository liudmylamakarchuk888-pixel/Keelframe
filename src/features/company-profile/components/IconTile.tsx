import { G, Path, Rect, Svg, View } from '@react-pdf/renderer';
import { color, mm, radius } from '../theme';
import type { ServiceIcon } from '../types';

/**
 * The icon set. Every glyph is drawn in a 24 × 24 box with a 1.7 stroke and
 * round caps, so they all read at the same weight whatever the tile size.
 *
 * Each one is wrapped in its own `<G fill="none">` rather than inheriting
 * the fill from the `<Svg>`: react-pdf normalises `"none"` to null on child
 * nodes only, so a fill inherited from the root survives as the string
 * `"none"` — which is truthy, and paints the shape solid black.
 */
const ICONS: Record<ServiceIcon, React.ReactNode> = {
  code: (
    <G fill="none">
      <Path d="M8 7 3 12 8 17 M16 7 21 12 16 17 M14 4 10 20" />
    </G>
  ),
  cloud: (
    <G fill="none">
      <Path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.2 4.4 4.4 0 0 0 7 18z" />
    </G>
  ),
  'ai-chip': (
    <G fill="none">
      <Rect x={6} y={6} width={12} height={12} rx={2} />
      <Rect x={9.5} y={9.5} width={5} height={5} rx={0.6} />
      <Path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </G>
  ),
  shield: (
    <G fill="none">
      <Path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" />
      <Path d="M8.5 12 11 14.5 15.5 9.5" />
    </G>
  ),
  server: (
    <G fill="none">
      <Rect x={3} y={4} width={18} height={7} rx={1.5} />
      <Rect x={3} y={13} width={18} height={7} rx={1.5} />
      <Path d="M11 7.5h6M11 16.5h6" />
    </G>
  ),
  pen: (
    <G fill="none">
      <Path d="M4 20l4-1 11-11-3-3L5 16l-1 4z" />
      <Path d="M14 7l3 3" />
    </G>
  ),
};

interface IconTileProps {
  icon?: ServiceIcon;
  /** Tile side in millimetres. 10mm on the services cards, 7.9mm elsewhere. */
  size?: number;
  /** Glyph size in millimetres. Defaults to 56% of the tile. */
  glyph?: number;
  /** Tile fill. Defaults to the soft accent wash. */
  background?: string;
}

/** A rounded tile with a stroked accent icon centred in it. */
export function IconTile({ icon = 'code', size = 10, glyph, background = color.accentSoft }: IconTileProps) {
  const glyphSize = glyph ?? size * 0.56;
  return (
    <View
      style={{
        width: mm(size),
        height: mm(size),
        borderRadius: radius.tile,
        backgroundColor: background,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Stroke settings are props, not style: react-pdf only inherits
          presentation *props* down an SVG tree. The size goes the other way —
          through style, which is where mm units are resolved. */}
      <Svg
        style={{ width: mm(glyphSize), height: mm(glyphSize) }}
        viewBox="0 0 24 24"
        stroke={color.accent}
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {ICONS[icon] ?? ICONS.code}
      </Svg>
    </View>
  );
}
