import { Text } from '@react-pdf/renderer';
import type { Style } from '@react-pdf/types';
import { color } from '../theme';

/** One style object or a list of them — what every component here accepts. */
export type TextStyle = Style | Style[];

interface PhProps {
  /** The real value. When empty, the bracketed label is shown instead. */
  value?: string;
  /** What the missing value is, without brackets — "Company Name". */
  label: string;
  style?: TextStyle;
  /** True on the navy pages, where placeholders read cyan rather than accent. */
  dark?: boolean;
}

/**
 * A value, or `[label]` in the accent colour when it is missing.
 *
 * Renders a plain `<Text>`, so it nests inside a paragraph as happily as it
 * stands alone: `<Text>Founded in <Ph value={y} label="Year" />.</Text>`.
 */
export function Ph({ value, label, style, dark }: PhProps) {
  const base = Array.isArray(style) ? style : style ? [style] : [];
  if (value) return <Text style={base}>{value}</Text>;
  return <Text style={[...base, { color: dark ? color.cyan : color.accent }]}>[{label}]</Text>;
}

/** The same fallback for places that need a string rather than an element. */
export const orPh = (value: string | undefined, label: string) => value || `[${label}]`;
