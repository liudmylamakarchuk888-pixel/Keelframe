import { Text, View } from '@react-pdf/renderer';
import { color, font, mm, type } from '../theme';
import {
  BulletList,
  Card,
  CertBadge,
  Divider,
  PageShell,
  SectionHeader,
  SectionLabel,
} from '../components';
import { runningHead } from '../sections';
import type { CompanyProfile } from '../types';

/** Page 18 — 12 Quality & Why Choose Us. */
export function QualityPage({ profile }: { profile: CompanyProfile }) {
  const quality = profile.quality ?? {};
  const certifications = (quality.certifications ?? []).slice(0, 4);
  const whyUs = (quality.whyUs ?? []).slice(0, 6);
  const companyName = profile.company?.name ?? '';

  return (
    <PageShell company={profile.company} pageNumber="18" sectionLabel={runningHead('12')}>
      <SectionHeader
        number="12"
        eyebrow="Quality & Why Choose Us"
        title={'Quality and security,\nbuilt in from day one.'}
        gap={6}
      />

      <SectionLabel>CERTIFICATIONS &amp; MEMBERSHIPS</SectionLabel>

      <View style={{ flexDirection: 'row', gap: mm(3.6) }}>
        {certifications.map((cert, i) => (
          <Card key={i} style={{ flex: 1, height: mm(38.4), alignItems: 'center', padding: mm(4.6) }}>
            <CertBadge abbr={cert.abbr} mark={cert.mark} size={17} />
            <Text
              style={{
                marginTop: mm(3.4),
                fontSize: 8.8,
                fontWeight: 600,
                color: color.ink,
                textAlign: 'center',
              }}
            >
              {cert.name ?? ''}
            </Text>
            <Text
              style={{ marginTop: mm(1.2), fontSize: 7.4, lineHeight: 1.3, color: color.ink2, textAlign: 'center' }}
            >
              {cert.subtitle ?? ''}
            </Text>
          </Card>
        ))}
      </View>

      <View style={{ flex: 1 }} />

      <Divider top={0} bottom={6} />

      <View style={{ flexDirection: 'row', gap: mm(4.4), height: mm(42.9) }}>
        <Card variant="tint" style={{ flex: 1 }}>
          <Text style={{ fontFamily: font.head, fontWeight: 600, fontSize: type.h3, color: color.navy }}>
            Quality practices
          </Text>
          <View style={{ marginTop: mm(2.8) }}>
            <BulletList items={(quality.practices ?? []).slice(0, 4)} gap={1.8} />
          </View>
        </Card>
        <Card variant="tint" style={{ flex: 1 }}>
          <Text style={{ fontFamily: font.head, fontWeight: 600, fontSize: type.h3, color: color.navy }}>
            Security &amp; compliance
          </Text>
          <View style={{ marginTop: mm(2.8) }}>
            <BulletList items={(quality.security ?? []).slice(0, 4)} gap={1.8} />
          </View>
        </Card>
      </View>

      <View style={{ flex: 1 }} />

      <Divider top={0} bottom={6} />

      <SectionLabel>WHY CHOOSE {companyName.toUpperCase()}</SectionLabel>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', rowGap: mm(6), columnGap: mm(8) }}>
        {whyUs.map((item, i) => (
          <View key={i} style={{ width: '46%', flexDirection: 'row' }}>
            <Text
              style={{
                width: mm(11),
                fontFamily: font.head,
                fontWeight: 600,
                fontSize: 13,
                color: color.accent,
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </Text>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 9.5, fontWeight: 600, color: color.navy }}>
                {item.title ?? ''}
              </Text>
              <Text
                style={{ marginTop: mm(1.4), fontSize: type.bodyXs, lineHeight: 1.4, color: color.ink2 }}
              >
                {item.text ?? ''}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </PageShell>
  );
}
