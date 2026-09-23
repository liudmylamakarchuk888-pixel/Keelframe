import { Image, Text, View } from '@react-pdf/renderer';
import { color, font, mm, radius, type } from '../theme';
import { Card, Chip, PageShell, SectionHeader } from '../components';
import { runningHead } from '../sections';
import type { CompanyProfile, ProfileCaseStudy } from '../types';

function Column({ label, value }: { label: string; value?: string }) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 6.6, fontWeight: 600, letterSpacing: 0.9, color: color.muted }}>{label}</Text>
      <Text style={{ marginTop: mm(1.6), fontSize: 7.8, lineHeight: 1.42, color: color.ink2 }}>
        {value ?? ''}
      </Text>
    </View>
  );
}

/**
 * One case study, laid out across the page: the screenshot down the left,
 * everything else to the right of it. Stacking two of these beats a
 * two-column grid — the challenge and solution get a readable measure
 * instead of a 40mm gutter.
 */
function CaseStudyCard({ study }: { study: ProfileCaseStudy }) {
  const results = (study.results ?? []).slice(0, 3);
  // A result value is a word or two, not just a number ("FCA Ready", "50 States"),
  // and the three columns are ~27mm wide. The longest value in the row sets the
  // size for all three, so they stay level and none of them wraps.
  const statSize = Math.max(0, ...results.map((r) => (r.value ?? '').length)) > 7 ? 13 : 16;

  return (
    <Card style={{ height: mm(100), padding: 0, flexDirection: 'row', overflow: 'hidden' }}>
      {study.imageUrl ? (
        <Image
          src={study.imageUrl}
          style={{
            width: mm(64),
            height: '100%',
            objectFit: 'cover',
            borderTopLeftRadius: radius.card,
            borderBottomLeftRadius: radius.card,
          }}
        />
      ) : null}

      <View style={{ flex: 1, padding: mm(5.6) }}>
        <View style={{ flexDirection: 'row', gap: mm(2) }}>
          <Chip label={study.industry} placeholder="Industry" variant="accent" />
          <Chip label={study.region} placeholder="Region" />
          <Chip label={study.duration} placeholder="Duration" />
        </View>

        <Text
          style={{
            marginTop: mm(3.4),
            fontFamily: font.head,
            fontWeight: 600,
            fontSize: 13,
            lineHeight: 1.2,
            color: color.navy,
          }}
        >
          {study.title ?? ''}
        </Text>

        <View style={{ flexDirection: 'row', gap: mm(5), marginTop: mm(3.4) }}>
          <Column label="CHALLENGE" value={study.challenge} />
          <Column label="SOLUTION" value={study.solution} />
        </View>

        <View
          style={{
            marginTop: 'auto',
            backgroundColor: color.tint,
            borderRadius: radius.card,
            padding: mm(4.2),
            flexDirection: 'row',
          }}
        >
          {results.map((result, i) => (
            <View key={i} style={{ flex: 1, paddingRight: mm(2.5) }}>
              <Text style={{ fontWeight: 600, fontSize: statSize, color: color.navy }}>
                {result.value ?? ''}
              </Text>
              <Text style={{ marginTop: mm(1.2), fontSize: 7.2, lineHeight: 1.3, color: color.ink2 }}>
                {result.label ?? ''}
              </Text>
            </View>
          ))}
        </View>

        <View style={{ marginTop: mm(3.4), flexDirection: 'row', alignItems: 'baseline' }}>
          <Text style={{ flex: 1, fontSize: 7.6, color: color.ink2 }}>
            <Text style={{ fontWeight: 600, color: color.navy }}>Technology </Text>
            {study.tech ?? ''}
          </Text>
          {study.domain ? (
            <Text style={{ marginLeft: mm(4), fontSize: 7.6, fontWeight: 500, color: color.accent }}>
              {study.domain}
            </Text>
          ) : null}
        </View>
      </View>
    </Card>
  );
}

/** Page 12 — 08 Case Studies, the first two. */
export function CaseStudiesPage({ profile }: { profile: CompanyProfile }) {
  return (
    <PageShell company={profile.company} pageNumber="12" sectionLabel={runningHead('08')}>
      <SectionHeader
        number="08"
        eyebrow="Case Studies"
        title="Results that speak for us."
        lead="Four projects in depth — what the client came with, what we built, and what changed afterwards."
        gap={6}
      />
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        {(profile.caseStudies ?? []).slice(0, 2).map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
      </View>
    </PageShell>
  );
}

/** Page 13 — 08 Case Studies continued. */
export function CaseStudiesPageTwo({ profile }: { profile: CompanyProfile }) {
  return (
    <PageShell company={profile.company} pageNumber="13" sectionLabel={runningHead('08')}>
      <SectionHeader
        number="08"
        eyebrow="Case Studies · continued"
        title="Commerce and regulated markets."
        lead="An FCA-authorised investment product and a storefront serving a million customers — two builds where compliance and peak traffic were design constraints from day one."
        gap={6}
      />
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        {(profile.caseStudies ?? []).slice(2, 4).map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
      </View>

      <Text style={{ marginTop: mm(5), fontSize: type.bodyXs, color: color.ink2 }}>
        Every project on the next two pages has a full write-up, with its stack and results, at{' '}
        <Text style={{ fontWeight: 500, color: color.accent }}>
          {profile.company?.website ?? ''}/work
        </Text>
        .
      </Text>
    </PageShell>
  );
}
