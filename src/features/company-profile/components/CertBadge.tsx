import { Circle, Path, Svg, Text, View } from '@react-pdf/renderer';
import { color, font, mm } from '../theme';

/** Glyphs for the badge faces, each drawn in a 24 × 24 box. */
const MARKS: Record<string, string> = {
  check: 'M7 12.5 10.5 16 17 8.5',
  shield: 'M12 3.5l7 2.6v5.4c0 4-3 7.4-7 8-4-.6-7-4-7-8V6.1l7-2.6z',
  cloud: 'M7.5 17.5h9a3.5 3.5 0 0 0 .5-6.95A5.5 5.5 0 0 0 6.8 9.1 4 4 0 0 0 7.5 17.5z',
  lock: 'M7 11V8.5a5 5 0 0 1 10 0V11 M5.5 11h13v8.5h-13z',
};

interface CertBadgeProps {
  /** Two or three letters set inside the ring — "ISO", "AWS". */
  abbr?: string;
  /** Used instead of `abbr` when the badge is better as a glyph. */
  mark?: keyof typeof MARKS;
  size?: number;
}

/**
 * A certification or partnership badge, drawn rather than photographed.
 *
 * Issuing bodies do not licence their marks for a company profile, so each
 * badge is set in the studio's own design language: a double accent ring
 * around an abbreviation or a simple glyph.
 */
export function CertBadge({ abbr, mark, size = 17 }: CertBadgeProps) {
  return (
    <View style={{ width: mm(size), height: mm(size), alignItems: 'center', justifyContent: 'center' }}>
      <Svg style={{ width: mm(size), height: mm(size), position: 'absolute' }} viewBox="0 0 48 48">
        <Circle cx={24} cy={24} r={23} fill={color.accentSoft} />
        <Circle cx={24} cy={24} r={23} fill="none" stroke={color.accent} strokeOpacity={0.35} strokeWidth={1} />
        <Circle cx={24} cy={24} r={19} fill="none" stroke={color.accent} strokeOpacity={0.2} strokeWidth={0.7} />
      </Svg>

      {mark ? (
        <Svg
          style={{ width: mm(size * 0.42), height: mm(size * 0.42) }}
          viewBox="0 0 24 24"
          stroke={color.accent}
          strokeWidth={1.9}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d={MARKS[mark]} fill="none" />
        </Svg>
      ) : (
        <Text
          style={{
            fontFamily: font.head,
            fontWeight: 600,
            fontSize: size * 0.62,
            letterSpacing: 0.3,
            color: color.accent,
          }}
        >
          {abbr ?? '—'}
        </Text>
      )}
    </View>
  );
}
