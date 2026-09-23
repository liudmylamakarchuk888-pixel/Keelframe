import { Image, Text, View } from '@react-pdf/renderer';
import { color, font, hairline, mm, radius, type } from '../theme';
import {
  Card,
  Divider,
  IconTile,
  PageShell,
  Ph,
  SectionHeader,
  SectionLabel,
} from '../components';
import { runningHead } from '../sections';
import type { CompanyProfile } from '../types';

/** One row of the company overview table. */
function Row({ label, children, last }: { label: string; children: React.ReactNode; last?: boolean }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: mm(2.5),
        ...(last ? {} : { borderBottomWidth: hairline, borderBottomColor: color.line }),
      }}
    >
      <Text style={{ width: mm(34), fontSize: type.bodyXs, color: color.muted }}>{label}</Text>
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
}

/** Page 4 — 02 About Us. */
export function AboutPage({ profile }: { profile: CompanyProfile }) {
  const c = profile.company ?? {};
  const about = profile.about ?? {};
  const values = about.values ?? [];

  const value = { fontSize: type.bodyXs, lineHeight: 1.4, color: color.ink };

  return (
    <PageShell company={profile.company} pageNumber="04" sectionLabel={runningHead('02')}>
      <SectionHeader
        number="02"
        eyebrow="About Us"
        title={'Your long-term partner\nfor digital growth.'}
        gap={6.4}
        lead={
          <>
            <Text style={{ fontWeight: 500 }}>{c.name ?? ''}</Text> is a product engineering studio in{' '}
            <Text style={{ fontWeight: 500 }}>{c.hq ?? ''}</Text>, founded in{' '}
            <Text style={{ fontWeight: 500 }}>{c.foundedYear ?? ''}</Text>. {about.lead ?? ''}
          </>
        }
      />

      <View style={{ flexDirection: 'row', gap: mm(7) }}>
        <View style={{ flex: 1 }}>
          <SectionLabel style={{ marginBottom: mm(1.4) }}>COMPANY OVERVIEW</SectionLabel>
          <Row label="Legal name">
            <Ph value={c.legalName} label="Company Legal Name Co., Ltd." style={value} />
          </Row>
          <Row label="Founded">
            <Ph value={c.foundedYear} label="Year" style={value} />
          </Row>
          <Row label="Headquarters">
            <Ph value={c.hq} label="City, Country" style={value} />
          </Row>
          <Row label="Other offices">
            <Ph value={about.otherOffices} label="City, City" style={value} />
          </Row>
          <Row label="Team size">
            <Ph value={c.teamSize} label="120+ full-time professionals" style={value} />
          </Row>
          <Row label="Core services">
            <Ph value={about.coreServices} label="Your four core services" style={value} />
          </Row>
          <Row label="Registration no.">
            <Ph value={c.registrationNo} label="0000-00-000000" style={value} />
          </Row>
          <Row label="Website" last>
            <Ph value={c.website} label="www.yourcompany.com" style={value} />
          </Row>
        </View>

        <View style={{ flex: 1, paddingTop: mm(5) }}>
          <Card variant="tint">
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <IconTile icon="cloud" size={7.9} glyph={4.4} background={color.white} />
              <Text
                style={{
                  marginLeft: mm(3),
                  fontFamily: font.head,
                  fontWeight: 600,
                  fontSize: type.h3,
                  color: color.navy,
                }}
              >
                Vision
              </Text>
            </View>
            <Ph
              value={about.vision}
              label="What you want to be known for"
              style={{ marginTop: mm(3), fontSize: type.bodySmall, lineHeight: 1.45, color: color.ink2 }}
            />
          </Card>
          <Card variant="tint" style={{ marginTop: mm(4) }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <IconTile icon="shield" size={7.9} glyph={4.4} background={color.white} />
              <Text
                style={{
                  marginLeft: mm(3),
                  fontFamily: font.head,
                  fontWeight: 600,
                  fontSize: type.h3,
                  color: color.navy,
                }}
              >
                Mission
              </Text>
            </View>
            <Ph
              value={about.mission}
              label="What you do for clients every day"
              style={{ marginTop: mm(3), fontSize: type.bodySmall, lineHeight: 1.45, color: color.ink2 }}
            />
          </Card>
        </View>
      </View>

      <Divider top={6.5} bottom={6} />

      <SectionLabel>OUR CORE VALUES</SectionLabel>

      <View style={{ flexDirection: 'row', gap: mm(4.5) }}>
        {values.slice(0, 4).map((v, i) => (
          <View key={i} style={{ flex: 1, borderTopWidth: mm(0.8), borderTopColor: color.accent, paddingTop: mm(2.6) }}>
            <Text style={{ fontSize: 8, fontWeight: 600, color: color.accent }}>
              {String(i + 1).padStart(2, '0')}
            </Text>
            <Ph
              value={v.title}
              label="Value"
              style={{
                marginTop: mm(1.6),
                fontFamily: font.head,
                fontWeight: 600,
                fontSize: type.h3,
                color: color.navy,
              }}
            />
            <Ph
              value={v.text}
              label="One line on what it means"
              style={{ marginTop: mm(1.8), fontSize: type.bodyXs, lineHeight: 1.4, color: color.ink2 }}
            />
          </View>
        ))}
      </View>

      {about.wideImageUrl ? (
        <Image
          src={about.wideImageUrl}
          style={{ marginTop: 'auto', height: mm(52), objectFit: 'cover', borderRadius: radius.card }}
        />
      ) : null}
    </PageShell>
  );
}
