import { Image, Text, View } from '@react-pdf/renderer';
import { color, font, mm } from '../theme';

/** "Sofia Lindqvist" -> "SL". Falls back to the first two letters. */
export const initialsOf = (name?: string) => {
  const parts = (name ?? '').trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '—';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

interface MonogramProps {
  name?: string;
  /** A real portrait, if there is one. Drawn instead of the initials. */
  photoUrl?: string;
  /** Side length in millimetres. */
  size: number;
  /** Fully round (avatars) rather than a rounded square (team tiles). */
  round?: boolean;
  /** Point size of the initials. Defaults to a third of the tile. */
  fontSize?: number;
}

/**
 * A portrait, or the person's initials set in the brand face.
 *
 * The studio has no headshots on file, and a dashed "photo goes here" box
 * has no place in a document that goes to a client — so the fallback is a
 * finished piece of design, the same treatment the website uses.
 */
export function Monogram({ name, photoUrl, size, round, fontSize }: MonogramProps) {
  const radius = round ? mm(size / 2) : mm(3.5);

  if (photoUrl) {
    return (
      <Image
        src={photoUrl}
        style={{ width: mm(size), height: mm(size), objectFit: 'cover', borderRadius: radius }}
      />
    );
  }

  return (
    <View
      style={{
        width: mm(size),
        height: mm(size),
        borderRadius: radius,
        backgroundColor: color.accentSoft,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontFamily: font.head,
          fontWeight: 600,
          fontSize: fontSize ?? size * 0.95,
          letterSpacing: 0.5,
          color: color.accent,
        }}
      >
        {initialsOf(name)}
      </Text>
    </View>
  );
}
