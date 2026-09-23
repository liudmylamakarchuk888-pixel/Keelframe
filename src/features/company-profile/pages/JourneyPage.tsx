import { View } from '@react-pdf/renderer';
import { color, font, hairline, mm, radius, type } from '../theme';
import { Divider, PageShell, Ph, SectionHeader, SectionLabel, StatTile } from '../components';
import { runningHead } from '../sections';
import type { CompanyProfile } from '../types';

/** Page 5 — 03 Our Journey. */
export function JourneyPage({ profile }: { profile: CompanyProfile }) {
  const milestones = (profile.milestones ?? []).slice(0, 7);
  const numbers = (profile.keyNumbers ?? []).slice(0, 6);
  const rows = [numbers.slice(0, 3), numbers.slice(3, 6)];

  return (
    <PageShell company={profile.company} pageNumber="05" sectionLabel={runningHead('03')}>
      <SectionHeader
        number="03"
        eyebrow="Our Journey"
        title="Growing with our clients."
        lead="Key milestones that shaped who we are today."
        gap={6.6}
      />

      <View style={{ flex: 1 }}>
        {milestones.map((m, i) => {
          const last = i === milestones.length - 1;
          return (
            <View key={i} style={{ flexDirection: 'row' }}>
              <Ph
                value={m.year}
                label="Year"
                style={{
                  width: mm(19),
                  textAlign: 'right',
                  fontFamily: font.head,
                  fontWeight: 500,
                  fontSize: 12,
                  color: color.accent,
                }}
              />
              <View style={{ width: mm(8), alignItems: 'center' }}>
                <View
                  style={{
                    width: mm(3.2),
                    height: mm(3.2),
                    borderRadius: mm(1.6),
                    marginTop: mm(1),
                    borderWidth: 1,
                    borderColor: color.accent,
                    backgroundColor: last ? color.accent : color.white,
                  }}
                />
                {last ? null : <View style={{ flex: 1, width: hairline, backgroundColor: color.line }} />}
              </View>
              <View style={{ flex: 1, paddingBottom: last ? 0 : mm(14.4) }}>
                <Ph
                  value={m.title}
                  label="Milestone"
                  style={{ fontSize: 8.8, fontWeight: 600, color: color.navy }}
                />
                <Ph
                  value={m.text}
                  label="One line on what happened"
                  style={{ marginTop: mm(1.4), fontSize: type.bodySmall, color: color.ink2 }}
                />
              </View>
            </View>
          );
        })}
      </View>

      <Divider top={5} bottom={5.5} />

      <SectionLabel>KEY NUMBERS</SectionLabel>

      <View
        style={{
          borderWidth: hairline,
          borderColor: color.line,
          borderRadius: radius.card,
        }}
      >
        {rows.map((row, r) => (
          <View
            key={r}
            style={{
              flexDirection: 'row',
              ...(r === 0 ? { borderBottomWidth: hairline, borderBottomColor: color.line } : {}),
            }}
          >
            {row.map((stat, i) => (
              <View
                key={i}
                style={{
                  width: '33.333%',
                  height: mm(31),
                  padding: mm(5.5),
                  justifyContent: 'center',
                  ...(i < 2 ? { borderRightWidth: hairline, borderRightColor: color.line } : {}),
                }}
              >
                <StatTile
                  value={<Ph value={stat.value} label="00+" style={{ fontSize: type.stat, fontWeight: 600 }} />}
                  label={stat.label ?? ''}
                />
              </View>
            ))}
          </View>
        ))}
      </View>
    </PageShell>
  );
}
