import { Image, Text, View } from '@react-pdf/renderer';
import type { Style } from '@react-pdf/types';
import { color, mm, radius } from '../theme';

type ViewStyle = Style | Style[];

interface ImageOrPlaceholderProps {
  /** When set, the image is drawn cover-cropped with rounded corners. */
  src?: string;
  /** Shown in the empty state — "Photo · CEO portrait (4:5)", "CLIENT LOGO". */
  label: string;
  /** Box style: give it a width and a height. */
  style?: ViewStyle;
  /** Corner radius. Defaults to the 3mm image radius. */
  cornerRadius?: string;
  /** Circular placeholders (avatars, certification badges). */
  round?: boolean;
  /** Placeholder label size. Defaults to 7.2pt. */
  labelSize?: number;
}

/**
 * An image, or a dashed box standing in for one.
 *
 * Both states occupy exactly the same space, so dropping real photography
 * into the profile never moves anything else on the page.
 */
export function ImageOrPlaceholder({
  src,
  label,
  style,
  cornerRadius,
  round,
  labelSize = 7.2,
}: ImageOrPlaceholderProps) {
  const base = Array.isArray(style) ? style : style ? [style] : [];
  const corner = round ? mm(999) : (cornerRadius ?? radius.image);

  if (src) {
    return <Image src={src} style={[{ objectFit: 'cover', borderRadius: corner }, ...base]} />;
  }

  return (
    <View
      style={[
        {
          backgroundColor: color.phFill,
          borderWidth: 1,
          borderStyle: 'dashed',
          borderColor: color.phBorder,
          borderRadius: corner,
          alignItems: 'center',
          justifyContent: 'center',
          padding: mm(1.5),
        },
        ...base,
      ]}
    >
      <Text
        style={{
          fontSize: labelSize,
          fontWeight: 500,
          letterSpacing: 0.4,
          lineHeight: 1.45,
          textAlign: 'center',
          color: color.phLabel,
        }}
      >
        {label}
      </Text>
    </View>
  );
}
