import { Image, Text, View } from '@react-pdf/renderer';
import { color, font, hairline, leading, mm, radius, type } from '../theme';
import { Card, Divider, IconTile, PageShell, SectionHeader, SectionLabel } from '../components';
import { runningHead } from '../sections';
import type { CompanyProfile, ServiceIcon } from '../types';

const PROMISE_ICONS: ServiceIcon[] = ['pen', 'shield', 'cloud'];

/**
 * Page 3 — 01 Message from the CEO.
 *
 * There is no founder portrait on file, so the letter carries the page on
 * its own: a full-width pull quote, the letter in two columns, and a band
 * of proof points and the signature where the photograph would have gone.
 */
export function CeoPage({ profile }: { profile: CompanyProfile }) {
  const ceo = profile.ceo ?? {};
  const paragraphs = ceo.paragraphs ?? [];
  const promises = profile.promises ?? [];
  const highlights = ceo.highlights ?? [];

  const half = Math.ceil(paragraphs.length / 2);

  return (
    <PageShell company={profile.company} pageNumber="03" sectionLabel={runningHead('01')}>
      <SectionHeader
        number="01"
        eyebrow="Message from the CEO"
        title={'Technology is only as good\nas the results it delivers.'}
        gap={6.4}
      />

      {/* paddingRight leaves a little slack: at 20pt the line breaker can
          measure a line as fitting and still render a hair past the edge. */}
      <View
        style={{
          borderLeftWidth: mm(1.2),
          borderLeftColor: color.accent,
          paddingLeft: mm(6),
          paddingRight: mm(3),
        }}
      >
        <Text
          style={{
            fontFamily: font.head,
            fontWeight: 500,
            fontSize: 20,
            lineHeight: 1.28,
            color: color.navy,
          }}
        >
          {`“${ceo.quote ?? ''}”`}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', gap: mm(9), marginTop: mm(8) }}>
        {[paragraphs.slice(0, half), paragraphs.slice(half)].map((column, c) => (
          <View key={c} style={{ flex: 1 }}>
            {column.map((p, i) => (
              <Text
                key={i}
                style={{
                  fontSize: type.body,
                  lineHeight: leading.body,
                  color: color.ink2,
                  marginTop: i === 0 ? 0 : mm(3),
                }}
              >
                {p}
              </Text>
            ))}
          </View>
        ))}
      </View>

      <View
        style={{
          marginTop: 'auto',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: color.tint,
          borderRadius: radius.card,
          paddingVertical: mm(5),
          paddingHorizontal: mm(6.5),
        }}
      >
        {highlights.slice(0, 3).map((h, i) => (
          <View key={i} style={{ flex: 1, paddingRight: mm(4) }}>
            <Text style={{ fontWeight: 600, fontSize: 17, color: color.navy }}>{h.value ?? ''}</Text>
            <Text style={{ marginTop: mm(1), fontSize: 7.8, lineHeight: 1.32, color: color.ink2 }}>
              {h.label ?? ''}
            </Text>
          </View>
        ))}

        <View
          style={{
            width: mm(50),
            paddingLeft: mm(6),
            borderLeftWidth: hairline,
            borderLeftColor: color.line,
          }}
        >
          {ceo.signatureUrl ? (
            <Image src={ceo.signatureUrl} style={{ width: mm(34), height: mm(9), objectFit: 'contain' }} />
          ) : null}
          <Text
            style={{
              marginTop: ceo.signatureUrl ? mm(2) : 0,
              fontFamily: font.head,
              fontWeight: 600,
              fontSize: 10.5,
              color: color.navy,
            }}
          >
            {ceo.name ?? ''}
          </Text>
          <Text style={{ marginTop: mm(1), fontSize: 7.6, lineHeight: 1.35, color: color.ink2 }}>
            {ceo.title ?? ''}
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 'auto' }}>
        <Divider top={7} bottom={6} />

        <SectionLabel>OUR PROMISE TO EVERY CLIENT</SectionLabel>

        <View style={{ flexDirection: 'row', gap: mm(4) }}>
          {promises.slice(0, 3).map((promise, i) => (
            <Card key={i} variant="tint" style={{ flex: 1, height: mm(44) }}>
              <IconTile icon={PROMISE_ICONS[i]} size={7.9} glyph={4.4} background={color.white} />
              <Text
                style={{
                  marginTop: mm(4),
                  fontFamily: font.head,
                  fontWeight: 600,
                  fontSize: type.h3,
                  lineHeight: 1.22,
                  color: color.navy,
                }}
              >
                {promise.title ?? ''}
              </Text>
              <Text style={{ marginTop: mm(2), fontSize: type.bodyXs, lineHeight: 1.42, color: color.ink2 }}>
                {promise.text ?? ''}
              </Text>
            </Card>
          ))}
        </View>
      </View>
    </PageShell>
  );
}
