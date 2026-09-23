import { Text, View } from '@react-pdf/renderer';
import { color, font, mm, radius, type } from '../theme';
import { BulletList, Card, IconTile, PageShell, SectionHeader } from '../components';
import { runningHead } from '../sections';
import type { CompanyProfile, ProfileService } from '../types';

function ServiceCard({ service }: { service: ProfileService }) {
  return (
    <Card style={{ flex: 1, padding: mm(5) }}>
      <IconTile icon={service.icon} size={9} />
      <Text
        style={{
          marginTop: mm(3.4),
          fontFamily: font.head,
          fontWeight: 600,
          fontSize: 10.5,
          lineHeight: 1.2,
          color: color.navy,
        }}
      >
        {service.title ?? ''}
      </Text>
      <Text style={{ marginTop: mm(1.8), fontSize: 7.8, lineHeight: 1.4, color: color.ink2 }}>
        {service.description ?? ''}
      </Text>
      <View style={{ marginTop: mm(2.4) }}>
        <BulletList items={(service.bullets ?? []).slice(0, 3)} gap={1.2} />
      </View>
    </Card>
  );
}

/** Both services pages share the same 2 × 3 grid. */
function ServiceGrid({ services, trailing }: { services: ProfileService[]; trailing?: React.ReactNode }) {
  const rows = [services.slice(0, 2), services.slice(2, 4), services.slice(4, 6)];
  return (
    <View style={{ flex: 1, gap: mm(4.6) }}>
      {rows.map((row, r) => (
        <View key={r} style={{ flex: 1, flexDirection: 'row', gap: mm(4.6) }}>
          {row.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
          {r === 2 && row.length === 1 ? trailing : null}
        </View>
      ))}
    </View>
  );
}

/** Page 6 — 04 Services, the first six. */
export function ServicesPage({ profile }: { profile: CompanyProfile }) {
  const services = profile.services ?? [];

  return (
    <PageShell company={profile.company} pageNumber="06" sectionLabel={runningHead('04')}>
      <SectionHeader
        number="04"
        eyebrow="Services"
        title={'Eleven services,\none accountable partner.'}
        lead="From the first idea to day-to-day operations, we cover the full product lifecycle — scoped in writing and delivered by the people who scoped it."
        gap={6}
      />
      <ServiceGrid services={services.slice(0, 6)} />
    </PageShell>
  );
}

/** Page 7 — 04 Services continued, plus the call to action. */
export function ServicesPageTwo({ profile }: { profile: CompanyProfile }) {
  const services = profile.services ?? [];
  const cta = profile.cta ?? {};

  return (
    <PageShell company={profile.company} pageNumber="07" sectionLabel={runningHead('04')}>
      <SectionHeader
        number="04"
        eyebrow="Services · continued"
        title="Specialist practices."
        lead="Commerce, regulated markets, real-time 3D, on-chain products and two-sided marketplaces — the work that needs a team that has shipped it before."
        gap={6}
      />

      <ServiceGrid
        services={services.slice(6, 11)}
        trailing={
          <Card variant="tint" style={{ flex: 1, padding: mm(5), justifyContent: 'center' }}>
            <Text style={{ fontFamily: font.head, fontWeight: 600, fontSize: 10.5, color: color.navy }}>
              One project, several services
            </Text>
            <Text style={{ marginTop: mm(2), fontSize: 7.8, lineHeight: 1.42, color: color.ink2 }}>
              Most builds use two or three of these at once. We scope them as one project with one
              team, so nothing is duplicated or lost in a hand-off.
            </Text>
          </Card>
        }
      />

      <View
        style={{
          marginTop: mm(6),
          height: mm(22.8),
          backgroundColor: color.navy,
          borderRadius: radius.card,
          paddingHorizontal: mm(7),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flex: 1, paddingRight: mm(6) }}>
          <Text style={{ fontFamily: font.head, fontWeight: 600, fontSize: 12, color: color.white }}>
            {cta.title ?? ''}
          </Text>
          <Text style={{ marginTop: mm(1.6), fontSize: type.bodyXs, color: color.white }}>
            {cta.text ?? ''}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: color.accent,
            borderRadius: radius.pill,
            paddingVertical: mm(2.7),
            paddingHorizontal: mm(6),
          }}
        >
          <Text style={{ fontSize: 9.5, fontWeight: 600, color: color.white }}>
            {cta.button ?? ''} →
          </Text>
        </View>
      </View>
    </PageShell>
  );
}
