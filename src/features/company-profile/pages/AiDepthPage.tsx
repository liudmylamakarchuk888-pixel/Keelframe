import { Text, View } from '@react-pdf/renderer';
import { color, font, hairline, mm, radius, type } from '../theme';
import { BulletList, Chip, Divider, PageShell, SectionHeader, SectionLabel } from '../components';
import { runningHead } from '../sections';
import type { CompanyProfile, ProfileAiLayer } from '../types';

/**
 * One rung of the stack: a numbered tag, the layer, what we do at it, and
 * the techniques involved. The rungs are joined by a rule down the left so
 * the page reads as one stack rather than six cards.
 */
function Layer({ layer, last }: { layer: ProfileAiLayer; last: boolean }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ width: mm(13), alignItems: 'center' }}>
        <View
          style={{
            width: mm(10),
            height: mm(10),
            borderRadius: mm(2.5),
            backgroundColor: color.accentSoft,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontFamily: font.head, fontWeight: 600, fontSize: 8.6, color: color.accent }}>
            {layer.tag ?? ''}
          </Text>
        </View>
        {last ? null : <View style={{ flex: 1, width: hairline, backgroundColor: color.line }} />}
      </View>

      <View style={{ flex: 1, paddingLeft: mm(4.6), paddingBottom: last ? 0 : mm(5.6) }}>
        <Text style={{ fontFamily: font.head, fontWeight: 600, fontSize: 10.2, color: color.navy }}>
          {layer.title ?? ''}
        </Text>
        <Text style={{ marginTop: mm(1.4), fontSize: type.bodyXs, lineHeight: 1.42, color: color.ink2 }}>
          {layer.text ?? ''}
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: mm(1.6), marginTop: mm(2.2) }}>
          {(layer.items ?? []).map((item) => (
            <Chip key={item} label={item} />
          ))}
        </View>
      </View>
    </View>
  );
}

/** Page 9 — 05 AI Development: how far down the stack we go. */
export function AiDepthPage({ profile }: { profile: CompanyProfile }) {
  const ai = profile.ai ?? {};
  const layers = (ai.layers ?? []).slice(0, 6);

  return (
    <PageShell company={profile.company} pageNumber="09" sectionLabel={runningHead('05')}>
      <SectionHeader
        number="05"
        eyebrow="AI Development · the stack"
        title="Six layers deep."
        lead="Most agencies work at the top layer and call an API. We go as far down as the problem needs — through retrieval, adaptation, training and serving — and we tell you where the line should be before any of it is built."
        gap={6}
      />

      <View>
        {layers.map((layer, i) => (
          <Layer key={i} layer={layer} last={i === layers.length - 1} />
        ))}
      </View>

      <View style={{ flex: 1 }} />

      <Divider top={0} bottom={6} />

      <View style={{ flexDirection: 'row', gap: mm(5) }}>
        <View style={{ flex: 1 }}>
          <SectionLabel>HOW WE KEEP A MODEL HONEST</SectionLabel>
          <BulletList items={(ai.evaluation ?? []).slice(0, 4)} gap={1.8} />
        </View>

        <View
          style={{
            width: mm(74),
            backgroundColor: color.tint,
            borderRadius: radius.card,
            padding: mm(5.5),
          }}
        >
          <Text style={{ fontFamily: font.head, fontWeight: 600, fontSize: 10, color: color.navy }}>
            No feature ships unevaluated
          </Text>
          <Text style={{ marginTop: mm(2), fontSize: type.bodyXs, lineHeight: 1.45, color: color.ink2 }}>
            Every AI feature we deliver arrives with its own evaluation set built from your domain:
            edge cases, adversarial inputs and real examples. If it cannot beat the baseline on that
            set, it does not go live.
          </Text>
        </View>
      </View>
    </PageShell>
  );
}
