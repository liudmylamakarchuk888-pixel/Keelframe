import { Text, View } from '@react-pdf/renderer';
import { color, font, mm, radius, type } from '../theme';
import { Card, Divider, Monogram, PageShell, SectionHeader, SectionLabel } from '../components';
import { runningHead } from '../sections';
import type { CompanyProfile, ProfileTeamMember } from '../types';

function Member({ member }: { member: ProfileTeamMember }) {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Monogram name={member.name} photoUrl={member.photoUrl} size={16} fontSize={13} />
      <View style={{ flex: 1, marginLeft: mm(3.6) }}>
        <Text style={{ fontFamily: font.head, fontWeight: 600, fontSize: 10, color: color.navy }}>
          {member.name ?? ''}
        </Text>
        <Text style={{ marginTop: mm(1.2), fontSize: 7.8, fontWeight: 600, color: color.accent }}>
          {member.role ?? ''}
        </Text>
        <Text style={{ marginTop: mm(1.6), fontSize: type.bodyXs, lineHeight: 1.42, color: color.ink2 }}>
          {member.bio ?? ''}
        </Text>
      </View>
    </View>
  );
}

/** Page 17 — 11 Leadership Team. */
export function TeamPage({ profile }: { profile: CompanyProfile }) {
  const team = profile.team ?? {};
  const members = (team.members ?? []).slice(0, 6);
  const stats = (team.stats ?? []).slice(0, 4);
  const staffing = (team.staffing ?? []).slice(0, 3);

  return (
    <PageShell company={profile.company} pageNumber="17" sectionLabel={runningHead('11')}>
      <SectionHeader
        number="11"
        eyebrow="Leadership Team"
        title={'The people behind\nyour project.'}
        lead="The engineers and designers on your discovery call are the ones who do the work. Each practice is led by someone who has shipped it before."
        gap={6.6}
      />

      <View style={{ gap: mm(9) }}>
        {[members.slice(0, 2), members.slice(2, 4), members.slice(4, 6)].map((row, r) => (
          <View key={r} style={{ flexDirection: 'row', gap: mm(8) }}>
            {row.map((member, i) => (
              <Member key={i} member={member} />
            ))}
          </View>
        ))}
      </View>

      <View style={{ marginTop: 'auto' }}>
        <Divider top={8} bottom={6} />
        <SectionLabel>HOW YOUR TEAM IS PUT TOGETHER</SectionLabel>
        <View style={{ flexDirection: 'row', gap: mm(4.4) }}>
          {staffing.map((note, i) => (
            <Card key={i} style={{ flex: 1, padding: mm(5) }}>
              <Text style={{ fontFamily: font.head, fontWeight: 600, fontSize: 9.8, color: color.navy }}>
                {note.title ?? ''}
              </Text>
              <Text style={{ marginTop: mm(1.8), fontSize: 7.6, lineHeight: 1.42, color: color.ink2 }}>
                {note.text ?? ''}
              </Text>
            </Card>
          ))}
        </View>
      </View>

      <View
        style={{
          marginTop: mm(7),
          backgroundColor: color.tint,
          borderRadius: radius.card,
          paddingVertical: mm(5.6),
          paddingHorizontal: mm(7),
        }}
      >
        <Text style={{ fontSize: 6.8, fontWeight: 600, letterSpacing: 1.1, color: color.muted }}>
          OUR TEAM AT A GLANCE
        </Text>
        <View style={{ flexDirection: 'row', marginTop: mm(3) }}>
          {stats.map((stat, i) => (
            <View key={i} style={{ width: '25%', paddingRight: mm(3) }}>
              <Text style={{ fontWeight: 600, fontSize: type.stat, color: color.navy }}>
                {stat.value ?? ''}
              </Text>
              <Text style={{ marginTop: mm(1), fontSize: 8, lineHeight: 1.3, color: color.ink2 }}>
                {stat.label ?? ''}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </PageShell>
  );
}
