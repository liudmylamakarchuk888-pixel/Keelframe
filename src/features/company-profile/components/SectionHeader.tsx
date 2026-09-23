import { Text, View } from '@react-pdf/renderer';
import { color, font, leading, mm, space, type } from '../theme';

interface SectionHeaderProps {
  /** Section number, "01". Omit on the contents page. */
  number?: string;
  /** Eyebrow text after the number — "Message from the CEO". */
  eyebrow: string;
  /** The h1. Break it yourself with \n to control where the line falls. */
  title: string;
  /** Optional lead paragraph under the title. */
  lead?: React.ReactNode;
  /** Millimetres of space below the block. Defaults to 7mm. */
  gap?: number;
}

/** Eyebrow, h1, optional lead — the opening block of every inner page. */
export function SectionHeader({ number, eyebrow, title, lead, gap = space.afterHeader }: SectionHeaderProps) {
  return (
    <View style={{ marginBottom: mm(gap) }}>
      <Text
        style={{
          fontSize: type.eyebrow,
          fontWeight: 600,
          letterSpacing: 1,
          color: color.accent,
          marginBottom: mm(2.4),
        }}
      >
        {number ? `${number} — ${eyebrow.toUpperCase()}` : eyebrow.toUpperCase()}
      </Text>
      <Text
        style={{
          fontFamily: font.head,
          fontWeight: 600,
          fontSize: type.h1,
          lineHeight: leading.h1,
          color: color.navy,
        }}
      >
        {title}
      </Text>
      {lead ? (
        <Text
          style={{
            marginTop: mm(3.6),
            fontSize: type.lead,
            lineHeight: 1.45,
            color: color.ink2,
          }}
        >
          {lead}
        </Text>
      ) : null}
    </View>
  );
}
