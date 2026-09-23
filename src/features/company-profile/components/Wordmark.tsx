import { Text, View } from '@react-pdf/renderer';
import { color, font, hairline, mm, radius } from '../theme';

interface WordmarkProps {
  name: string;
  /** Small caption under the name — the sector, or what the partnership is. */
  note?: string;
  /** Tile height in millimetres. */
  height: number;
  /** "tint" for clients, "outline" for partner badges. */
  variant?: 'tint' | 'outline';
}

/**
 * A client or partner name set as a wordmark in a tile.
 *
 * We do not hold the rights to redraw anyone else's logo, so the profile
 * names them in type instead — the same treatment as the "Trusted by" strip
 * on the website.
 */
export function Wordmark({ name, note, height, variant = 'tint' }: WordmarkProps) {
  return (
    <View
      style={{
        flex: 1,
        height: mm(height),
        borderRadius: radius.card,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: mm(2.5),
        ...(variant === 'tint'
          ? { backgroundColor: color.tint }
          : { borderWidth: hairline, borderColor: color.line, backgroundColor: color.white }),
      }}
    >
      <Text
        style={{
          fontFamily: font.head,
          fontWeight: 600,
          fontSize: 9.4,
          letterSpacing: 0.2,
          textAlign: 'center',
          color: color.navy,
        }}
      >
        {name}
      </Text>
      {note ? (
        <Text
          style={{
            marginTop: mm(1),
            fontSize: 6.6,
            letterSpacing: 0.6,
            textAlign: 'center',
            color: color.muted,
          }}
        >
          {note.toUpperCase()}
        </Text>
      ) : null}
    </View>
  );
}
