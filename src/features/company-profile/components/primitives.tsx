import { Text, View } from '@react-pdf/renderer';
import type { Style } from '@react-pdf/types';
import { color, font, hairline, mm, radius, space, type } from '../theme';
import type { TextStyle } from './Ph';

type ViewStyle = Style | Style[];

/** A 1px rule with 7mm of air above and below. */
export function Divider({ top = space.divider, bottom = space.divider }: { top?: number; bottom?: number }) {
  return (
    <View
      style={{
        marginTop: mm(top),
        marginBottom: mm(bottom),
        borderTopWidth: hairline,
        borderTopColor: color.line,
      }}
    />
  );
}

/** Small uppercase label above a sub-section. */
export function SectionLabel({ children, style }: { children: React.ReactNode; style?: TextStyle }) {
  const base = Array.isArray(style) ? style : style ? [style] : [];
  return (
    <Text
      style={[
        {
          fontSize: type.sectionLabel,
          fontWeight: 600,
          letterSpacing: 0.9,
          color: color.muted,
          marginBottom: mm(3.2),
        },
        ...base,
      ]}
    >
      {children}
    </Text>
  );
}

interface CardProps {
  children: React.ReactNode;
  /** "outline" is a 1px border on white; "tint" is a soft fill with no border. */
  variant?: 'outline' | 'tint';
  style?: ViewStyle;
}

/** The profile's one box: 3.5mm radius, 5.5mm padding. */
export function Card({ children, variant = 'outline', style }: CardProps) {
  const base = Array.isArray(style) ? style : style ? [style] : [];
  return (
    <View
      style={[
        {
          borderRadius: radius.card,
          padding: mm(5.5),
          ...(variant === 'tint'
            ? { backgroundColor: color.tint }
            : { borderWidth: hairline, borderColor: color.line, backgroundColor: color.white }),
        },
        ...base,
      ]}
    >
      {children}
    </View>
  );
}

interface ChipProps {
  /** The value, or — when it is missing — what it would have been. */
  label?: string;
  variant?: 'default' | 'accent';
  /** Shown as `[placeholder]` in the accent colour when `label` is empty. */
  placeholder?: string;
}

/** A rounded tag. Sized by its text, so a row of them can wrap. */
export function Chip({ label, variant = 'default', placeholder }: ChipProps) {
  const missing = !label;
  const text = label || `[${placeholder ?? 'value'}]`;
  return (
    <View
      style={{
        borderRadius: radius.pill,
        paddingVertical: mm(1),
        paddingHorizontal: mm(2.6),
        ...(variant === 'accent'
          ? { backgroundColor: color.accentSoft }
          : { backgroundColor: color.tint, borderWidth: hairline, borderColor: color.line }),
      }}
    >
      <Text
        style={{
          fontSize: 7.4,
          fontWeight: 500,
          color: missing || variant === 'accent' ? color.accent : color.ink2,
        }}
      >
        {text}
      </Text>
    </View>
  );
}

interface StatTileProps {
  value: React.ReactNode;
  label: React.ReactNode;
  /** Case-study results use the smaller 20pt number. */
  size?: 'lg' | 'sm';
  /** On navy: white label, cyan number. */
  dark?: boolean;
  style?: ViewStyle;
}

/** A big number with a caption under it. Numbers are always Inter. */
export function StatTile({ value, label, size = 'lg', dark, style }: StatTileProps) {
  const base = Array.isArray(style) ? style : style ? [style] : [];
  return (
    <View style={base}>
      <Text
        style={{
          fontFamily: font.body,
          fontWeight: 600,
          fontSize: size === 'lg' ? type.stat : type.statSmall,
          color: dark ? color.cyan : color.navy,
        }}
      >
        {value}
      </Text>
      <Text
        style={{
          marginTop: mm(1),
          fontSize: 8,
          lineHeight: 1.35,
          color: dark ? color.white : color.ink2,
        }}
      >
        {label}
      </Text>
    </View>
  );
}

/** Round accent bullets with 8.6pt text beside them. */
export function BulletList({ items, gap = 1.6 }: { items: React.ReactNode[]; gap?: number }) {
  return (
    <View>
      {items.map((item, i) => (
        <View
          key={i}
          style={{ flexDirection: 'row', marginTop: i === 0 ? 0 : mm(gap), alignItems: 'flex-start' }}
        >
          <View
            style={{
              width: mm(1.8),
              height: mm(1.8),
              borderRadius: mm(0.9),
              backgroundColor: color.accent,
              marginTop: mm(1.1),
              marginRight: mm(2.2),
            }}
          />
          <Text style={{ flex: 1, fontSize: type.bodySmall, lineHeight: 1.4, color: color.ink2 }}>
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
}
