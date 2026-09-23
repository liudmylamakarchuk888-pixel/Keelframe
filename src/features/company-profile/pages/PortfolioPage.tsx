import { Image, Text, View } from '@react-pdf/renderer';
import { color, font, hairline, mm, radius } from '../theme';
import { PageShell, SectionHeader } from '../components';
import { runningHead } from '../sections';
import type { CompanyProfile, ProfilePortfolioItem } from '../types';

/** One tile: screenshot, name, sector, and the headline result. */
function Tile({ item }: { item: ProfilePortfolioItem }) {
  return (
    <View style={{ flex: 1 }}>
      {item.imageUrl ? (
        <Image
          src={item.imageUrl}
          style={{
            width: '100%',
            height: mm(42),
            objectFit: 'cover',
            borderRadius: radius.image,
            borderWidth: hairline,
            borderColor: color.line,
          }}
        />
      ) : null}

      <View style={{ flexDirection: 'row', alignItems: 'baseline', marginTop: mm(2.6) }}>
        <Text
          style={{
            flex: 1,
            fontFamily: font.head,
            fontWeight: 600,
            fontSize: 9.4,
            color: color.navy,
          }}
        >
          {item.name ?? ''}
        </Text>
        <Text style={{ fontSize: 6.8, fontWeight: 600, letterSpacing: 0.4, color: color.muted }}>
          {(item.year ?? '').toUpperCase()}
        </Text>
      </View>

      <Text style={{ marginTop: mm(1), fontSize: 7, fontWeight: 600, letterSpacing: 0.3, color: color.accent }}>
        {item.category ?? ''}
      </Text>
      <Text style={{ marginTop: mm(1.4), fontSize: 7.2, lineHeight: 1.38, color: color.ink2 }}>
        {item.result ?? ''}
      </Text>
    </View>
  );
}

/** A 3 × 3 grid of tiles. */
function Grid({ items }: { items: ProfilePortfolioItem[] }) {
  const rows = [items.slice(0, 3), items.slice(3, 6), items.slice(6, 9)];
  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      {rows.map((row, r) => (
        <View key={r} style={{ flexDirection: 'row', gap: mm(5) }}>
          {row.map((item, i) => (
            <Tile key={i} item={item} />
          ))}
          {/* Keep the last row aligned left if it is short. */}
          {Array.from({ length: 3 - row.length }, (_, i) => (
            <View key={`pad-${i}`} style={{ flex: 1 }} />
          ))}
        </View>
      ))}
    </View>
  );
}

/** Page 14 — 09 Selected Portfolio, apps and platforms. */
export function PortfolioPage({ profile }: { profile: CompanyProfile }) {
  return (
    <PageShell company={profile.company} pageNumber="14" sectionLabel={runningHead('09')}>
      <SectionHeader
        number="09"
        eyebrow="Selected Portfolio"
        title="Products we designed and built."
        lead="Eighteen live products across health, finance, marketplaces, gaming and commerce. Mobile apps and web platforms first."
        gap={5.6}
      />
      <Grid items={(profile.portfolio ?? []).slice(0, 9)} />
    </PageShell>
  );
}

/** Page 15 — 09 Selected Portfolio continued: commerce, 3D, Web3, betting. */
export function PortfolioPageTwo({ profile }: { profile: CompanyProfile }) {
  return (
    <PageShell company={profile.company} pageNumber="15" sectionLabel={runningHead('09')}>
      <SectionHeader
        number="09"
        eyebrow="Selected Portfolio · continued"
        title="Commerce, 3D, Web3 and betting."
        lead="A longevity platform, high-volume Shopify storefronts, a real-time product configurator, an on-chain treasury platform and an online casino."
        gap={5.6}
      />
      <Grid items={(profile.portfolio ?? []).slice(9, 18)} />
    </PageShell>
  );
}
