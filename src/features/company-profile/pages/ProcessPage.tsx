import { Text, View } from '@react-pdf/renderer';
import { color, font, hairline, mm, type } from '../theme';
import { Card, Divider, PageShell, Ph, SectionHeader, SectionLabel } from '../components';
import { runningHead } from '../sections';
import type { CompanyProfile } from '../types';

/** Page 8 — 06 How We Work. */
export function ProcessPage({ profile }: { profile: CompanyProfile }) {
  const steps = (profile.process ?? []).slice(0, 6);
  const models = (profile.engagementModels ?? []).slice(0, 3);

  return (
    <PageShell company={profile.company} pageNumber="11" sectionLabel={runningHead('07')}>
      <SectionHeader
        number="07"
        eyebrow="How We Work"
        title={'A clear process,\nfrom idea to impact.'}
        gap={6.4}
      />

      <View style={{ flex: 1 }}>
        {steps.map((step, i) => {
          const last = i === steps.length - 1;
          return (
            <View key={i} style={{ flexDirection: 'row' }}>
              <View style={{ width: mm(10), alignItems: 'center' }}>
                <View
                  style={{
                    width: mm(10),
                    height: mm(10),
                    borderRadius: mm(5),
                    backgroundColor: color.navy,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ fontSize: 9.5, fontWeight: 500, color: color.white }}>{i + 1}</Text>
                </View>
                {last ? null : <View style={{ flex: 1, width: hairline, backgroundColor: color.line }} />}
              </View>

              <View style={{ flex: 1, paddingLeft: mm(5.4), paddingBottom: last ? 0 : mm(8.6) }}>
                <Ph
                  value={step.title}
                  label="Step"
                  style={{ fontFamily: font.head, fontWeight: 600, fontSize: type.h3, color: color.navy }}
                />
                <Ph
                  value={step.text}
                  label="What happens in this step"
                  style={{ marginTop: mm(1.6), fontSize: type.bodyXs, lineHeight: 1.42, color: color.ink2 }}
                />
              </View>

              <View style={{ width: mm(58), paddingLeft: mm(4), paddingTop: mm(1.2) }}>
                <Text style={{ fontSize: 6.6, fontWeight: 600, letterSpacing: 0.9, color: color.muted }}>
                  DELIVERABLES
                </Text>
                <Ph
                  value={step.deliverables}
                  label="What you receive"
                  style={{ marginTop: mm(1.4), fontSize: type.bodyXs, lineHeight: 1.4, color: color.ink2 }}
                />
              </View>
            </View>
          );
        })}
      </View>

      <Divider top={5.5} bottom={6} />

      <SectionLabel>ENGAGEMENT MODELS</SectionLabel>

      <View style={{ flexDirection: 'row', gap: mm(4.4), height: mm(49.5) }}>
        {models.map((model, i) => (
          <Card key={i} style={{ flex: 1 }}>
            <Ph
              value={model.title}
              label="Model"
              style={{ fontFamily: font.head, fontWeight: 600, fontSize: type.h3, color: color.navy }}
            />
            <Ph
              value={model.text}
              label="When this model fits"
              style={{ marginTop: mm(2), fontSize: type.bodyXs, lineHeight: 1.42, color: color.ink2 }}
            />
            <View
              style={{
                marginTop: 'auto',
                paddingTop: mm(2.6),
                borderTopWidth: hairline,
                borderTopColor: color.line,
              }}
            >
              <Text style={{ fontSize: type.bodyXs, lineHeight: 1.4, color: color.ink2 }}>
                <Text style={{ fontWeight: 600, color: color.navy }}>Best for: </Text>
                <Ph value={model.bestFor} label="the projects it suits" />
              </Text>
            </View>
          </Card>
        ))}
      </View>
    </PageShell>
  );
}
