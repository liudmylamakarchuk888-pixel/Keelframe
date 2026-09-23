import { Text, View } from '@react-pdf/renderer';
import { color, font, hairline, mm, radius, type } from '../theme';
import { Card, Divider, IconTile, PageShell, SectionHeader, SectionLabel } from '../components';
import { runningHead } from '../sections';
import type { CompanyProfile } from '../types';

/** Page 8 — 05 AI Development: what we build. */
export function AiPage({ profile }: { profile: CompanyProfile }) {
  const ai = profile.ai ?? {};
  const capabilities = (ai.capabilities ?? []).slice(0, 6);
  const stats = (ai.stats ?? []).slice(0, 4);

  return (
    <PageShell company={profile.company} pageNumber="08" sectionLabel={runningHead('05')}>
      <SectionHeader
        number="05"
        eyebrow="AI Development"
        title={'We build the model,\nnot just the prompt.'}
        lead={ai.lead}
        gap={6}
      />

      <View style={{ gap: mm(4.8) }}>
        {[capabilities.slice(0, 3), capabilities.slice(3, 6)].map((row, r) => (
          <View key={r} style={{ flexDirection: 'row', gap: mm(4.4) }}>
            {row.map((cap, i) => (
              <Card key={i} style={{ flex: 1, height: mm(46), padding: mm(4.8) }}>
                <IconTile icon={cap.icon} size={8.6} />
                <Text
                  style={{
                    marginTop: mm(3),
                    fontFamily: font.head,
                    fontWeight: 600,
                    fontSize: 9.8,
                    lineHeight: 1.2,
                    color: color.navy,
                  }}
                >
                  {cap.title ?? ''}
                </Text>
                <Text style={{ marginTop: mm(1.8), fontSize: 7.6, lineHeight: 1.4, color: color.ink2 }}>
                  {cap.text ?? ''}
                </Text>
              </Card>
            ))}
          </View>
        ))}
      </View>

      <View style={{ flex: 1 }} />

      <Divider top={0} bottom={6} />

      <SectionLabel>WHERE THE MODEL RUNS</SectionLabel>

      <View style={{ flexDirection: 'row', gap: mm(4.4) }}>
        {(ai.deployment ?? []).slice(0, 3).map((option, i) => (
          <Card key={i} variant="tint" style={{ flex: 1, padding: mm(5) }}>
            <Text style={{ fontFamily: font.head, fontWeight: 600, fontSize: 9.8, color: color.navy }}>
              {option.title ?? ''}
            </Text>
            <Text style={{ marginTop: mm(1.8), fontSize: 7.6, lineHeight: 1.4, color: color.ink2 }}>
              {option.text ?? ''}
            </Text>
          </Card>
        ))}
      </View>

      <View
        style={{
          marginTop: mm(6),
          flexDirection: 'row',
          backgroundColor: color.navy,
          borderRadius: radius.card,
          paddingVertical: mm(5),
          paddingHorizontal: mm(7),
        }}
      >
        {stats.map((stat, i) => (
          <View
            key={i}
            style={{
              flex: 1,
              paddingLeft: i === 0 ? 0 : mm(5),
              ...(i === 0
                ? {}
                : { borderLeftWidth: hairline, borderLeftColor: 'rgba(255,255,255,0.18)' }),
            }}
          >
            <Text style={{ fontWeight: 600, fontSize: type.statSmall, color: color.cyan }}>
              {stat.value ?? ''}
            </Text>
            <Text style={{ marginTop: mm(1), fontSize: 7.6, lineHeight: 1.3, color: color.white }}>
              {stat.label ?? ''}
            </Text>
          </View>
        ))}
      </View>
    </PageShell>
  );
}
