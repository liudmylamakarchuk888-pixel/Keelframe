import { Text, View } from '@react-pdf/renderer';
import { color, font, hairline, mm } from '../theme';
import { Card, Chip, Divider, PageShell, Ph, SectionHeader, SectionLabel } from '../components';
import { runningHead } from '../sections';
import type { CompanyProfile } from '../types';

/** Page 7 — 05 Industries & Technology. */
export function IndustriesPage({ profile }: { profile: CompanyProfile }) {
  const industries = (profile.industries ?? []).slice(0, 8);
  const stack = (profile.techStack ?? []).slice(0, 6);
  const rows = [industries.slice(0, 4), industries.slice(4, 8)];

  return (
    <PageShell company={profile.company} pageNumber="10" sectionLabel={runningHead('06')}>
      <SectionHeader
        number="06"
        eyebrow="Industries & Technology"
        title={'Domain knowledge meets\nmodern technology.'}
        gap={6.2}
      />

      <SectionLabel>INDUSTRIES WE SERVE</SectionLabel>

      <View style={{ gap: mm(3.8) }}>
        {rows.map((row, r) => (
          <View key={r} style={{ flexDirection: 'row', gap: mm(3.8) }}>
            {row.map((industry, i) => (
              <Card key={i} style={{ flex: 1, height: mm(37), padding: mm(4.6) }}>
                <Text style={{ fontSize: 8, fontWeight: 600, color: color.accent }}>
                  {String(r * 4 + i + 1).padStart(2, '0')}
                </Text>
                <Ph
                  value={industry.title}
                  label="Industry"
                  style={{
                    marginTop: mm(2),
                    fontFamily: font.head,
                    fontWeight: 600,
                    fontSize: 10,
                    lineHeight: 1.22,
                    color: color.navy,
                  }}
                />
                <Ph
                  value={industry.text}
                  label="What you build for them"
                  style={{ marginTop: mm(1.8), fontSize: 7.8, lineHeight: 1.4, color: color.ink2 }}
                />
              </Card>
            ))}
          </View>
        ))}
      </View>

      <Divider top={7} bottom={7} />

      <SectionLabel>TECHNOLOGY STACK</SectionLabel>

      <View>
        {stack.map((group, i) => (
          <View
            key={i}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: mm(4.8),
              borderBottomWidth: hairline,
              borderBottomColor: color.line,
            }}
          >
            <Text style={{ width: mm(36), fontSize: 8.8, fontWeight: 600, color: color.navy }}>
              {group.category ?? ''}
            </Text>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', gap: mm(1.6) }}>
              {(group.items ?? []).map((item) => (
                <Chip key={item} label={item} />
              ))}
            </View>
          </View>
        ))}
      </View>

      <Text style={{ marginTop: 'auto', fontSize: 7.8, color: color.muted }}>
        Technology names are listed as text only; the stack is chosen per project.
      </Text>
    </PageShell>
  );
}
