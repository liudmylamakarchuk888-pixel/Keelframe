import { G, Path, Rect, Svg } from '@react-pdf/renderer';
import { mm } from '../theme';

/**
 * The Keelframe mark — three keel frames over a waterline bar.
 *
 * Redrawn from public/logo/keelframe-mark-mono.svg as react-pdf SVG
 * primitives: `<Image>` cannot read an SVG file, and the mark has to stay
 * crisp at any size and tint to whatever page it sits on.
 */
export function BrandMark({ size = 14, color = '#FFFFFF' }: { size?: number; color?: string }) {
  return (
    <Svg style={{ width: mm(size), height: mm(size) }} viewBox="0 0 64 64">
      <G fill="none" stroke={color} strokeWidth={3.6} strokeLinecap="round">
        <Path d="M12 23C12 38 22 45 32 45C42 45 52 38 52 23" />
        <Path d="M20 17C20 32 26 45 32 45C38 45 44 32 44 17" />
        <Path d="M27 12C27 27 30 45 32 45C34 45 37 27 37 12" />
      </G>
      <Rect x={22} y={50.5} width={20} height={4.5} rx={2.25} fill={color} stroke="none" />
    </Svg>
  );
}
