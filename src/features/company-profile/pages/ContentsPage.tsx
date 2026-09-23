import { Text, View } from '@react-pdf/renderer';
import { color, font, hairline, mm, radius, type } from '../theme';
import { PageShell, SectionHeader } from '../components';
import { SECTIONS } from '../sections';
import type { CompanyProfile } from '../types';

/** Page 2 — contents, with the "At a glance" box pinned to the bottom. */
export function ContentsPage({ profile }: { profile: CompanyProfile }) {
  const glance = profile.glance ?? [];

  return (
    <PageShell company={profile.company} pageNumber="02" sectionLabel="Contents">
      <SectionHeader eyebrow="Inside this profile" title="Contents" gap={5.4} />

      <View>
        {SECTIONS.map((s) => (
          <View
            key={s.n}
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              paddingTop: mm(3),
              paddingBottom: mm(2.8),
              borderBottomWidth: hairline,
              borderBottomColor: color.line,
            }}
          >
            <Text
              style={{
                width: mm(13),
                fontFamily: font.head,
                fontWeight: 600,
                fontSize: 10,
                color: color.accent,
                marginTop: mm(0.4),
              }}
            >
              {s.n}
            </Text>
            <View style={{ flex: 1 }}>
              <Text style={{ fontFamily: font.head, fontWeight: 500, fontSize: 11.5, color: color.navy }}>
                {s.title}
              </Text>
              <Text style={{ marginTop: mm(1), fontSize: 7.6, color: color.ink2 }}>{s.description}</Text>
            </View>
            <Text style={{ fontSize: 8.8, fontWeight: 500, color: color.ink2, marginTop: mm(0.6) }}>
              {s.page}
            </Text>
          </View>
        ))}
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: color.navy,
          borderRadius: radius.card,
          paddingVertical: mm(5.6),
          paddingHorizontal: mm(7),
        }}
      >
        <Text style={{ fontSize: 6.8, fontWeight: 600, letterSpacing: 1.1, color: '#9AA6B8' }}>
          AT A GLANCE
        </Text>
        <View style={{ flexDirection: 'row', marginTop: mm(3) }}>
          {glance.slice(0, 4).map((stat, i) => (
            <View key={i} style={{ width: '25%', paddingRight: mm(3) }}>
              <Text style={{ fontWeight: 600, fontSize: type.stat, color: color.white }}>
                {stat.value ?? ''}
              </Text>
              <Text style={{ marginTop: mm(1), fontSize: 8, lineHeight: 1.3, color: color.white }}>
                {stat.label ?? ''}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </PageShell>
  );
}
