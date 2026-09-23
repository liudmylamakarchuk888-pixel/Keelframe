import { Text, View } from '@react-pdf/renderer';
import { color, font, hairline, mm } from '../theme';
import {
  Card,
  Divider,
  Monogram,
  PageShell,
  SectionHeader,
  SectionLabel,
  Wordmark,
} from '../components';
import { runningHead } from '../sections';
import type { CompanyProfile, ProfileTestimonial } from '../types';

function TestimonialCard({ testimonial }: { testimonial: ProfileTestimonial }) {
  return (
    <Card style={{ flex: 1, padding: mm(5) }}>
      <Text style={{ fontFamily: font.head, fontWeight: 600, fontSize: 16, color: color.accent }}>
        &#8220;
      </Text>
      <Text
        style={{
          marginTop: mm(0.6),
          fontFamily: font.head,
          fontWeight: 500,
          fontSize: 9.4,
          lineHeight: 1.44,
          color: color.navy,
        }}
      >
        {testimonial.quote ?? ''}
      </Text>
      <View
        style={{
          marginTop: 'auto',
          paddingTop: mm(3.2),
          borderTopWidth: hairline,
          borderTopColor: color.line,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Monogram name={testimonial.name} photoUrl={testimonial.avatarUrl} size={10} round fontSize={8} />
        <View style={{ marginLeft: mm(3), flex: 1 }}>
          <Text style={{ fontSize: 8.4, fontWeight: 600, color: color.ink }}>
            {testimonial.name ?? ''}
          </Text>
          <Text style={{ marginTop: mm(0.8), fontSize: 7.4, lineHeight: 1.3, color: color.ink2 }}>
            {[testimonial.title, testimonial.company].filter(Boolean).join(', ')}
          </Text>
        </View>
      </View>
    </Card>
  );
}

/** Page 16 — 10 Clients & Partners. */
export function ClientsPage({ profile }: { profile: CompanyProfile }) {
  const clients = profile.clients ?? {};
  const logos = (clients.logos ?? []).slice(0, 8);
  const testimonials = (clients.testimonials ?? []).slice(0, 3);
  const partners = (clients.partners ?? []).slice(0, 4);

  return (
    <PageShell company={profile.company} pageNumber="16" sectionLabel={runningHead('10')}>
      <SectionHeader
        number="10"
        eyebrow="Clients & Partners"
        title={'Trusted by organisations\nthat depend on technology.'}
        gap={6}
      />

      <SectionLabel>SELECTED CLIENTS</SectionLabel>

      <View style={{ gap: mm(3.4) }}>
        {[logos.slice(0, 4), logos.slice(4, 8)].map((row, r) => (
          <View key={r} style={{ flexDirection: 'row', gap: mm(3.4) }}>
            {row.map((client, i) => (
              <Wordmark key={i} name={client.name ?? ''} note={client.note} height={19} />
            ))}
          </View>
        ))}
      </View>

      <View style={{ flex: 1 }} />

      <Divider top={0} bottom={6} />

      <SectionLabel>WHAT OUR CLIENTS SAY</SectionLabel>

      <View style={{ flexDirection: 'row', gap: mm(4), height: mm(70) }}>
        {testimonials.map((testimonial, i) => (
          <TestimonialCard key={i} testimonial={testimonial} />
        ))}
      </View>

      <View style={{ flex: 1 }} />

      <Divider top={0} bottom={6} />

      <SectionLabel>PARTNERSHIPS &amp; ACCREDITATIONS</SectionLabel>

      <View style={{ flexDirection: 'row', gap: mm(3.4) }}>
        {partners.map((partner, i) => (
          <Wordmark key={i} name={partner.name ?? ''} note={partner.note} height={16} variant="outline" />
        ))}
      </View>
    </PageShell>
  );
}
