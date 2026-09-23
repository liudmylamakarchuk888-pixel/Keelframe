import { Circle, Defs, Image, Page, RadialGradient, Rect, Stop, Svg, Text, View } from '@react-pdf/renderer';
import { A4, color, font, leading, mm, onNavy, page, radius, type } from '../theme';
import { Ph } from '../components';
import type { CompanyProfile, ProfileOffice } from '../types';

const RING_RADII = [22, 40, 58, 76];

/** Back-cover artwork: the accent bar, a soft glow and rings at the top right. */
function ContactArtwork() {
  return (
    <Svg
      viewBox="0 0 210 297"
      style={{ position: 'absolute', top: 0, left: 0, width: mm(210), height: mm(297) }}
    >
      <Defs>
        <RadialGradient id="backGlow" cx="182" cy="34" r="88" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor={color.accent} stopOpacity="0.42" />
          <Stop offset="1" stopColor={color.accent} stopOpacity="0" />
        </RadialGradient>
      </Defs>

      <Rect x={0} y={0} width={210} height={297} fill={color.navy} />
      <Circle cx={182} cy={34} r={88} fill="url(#backGlow)" />

      {RING_RADII.map((r) => (
        <Circle key={r} cx={182} cy={34} r={r} fill="none" stroke={color.white} strokeOpacity={0.08} strokeWidth={0.3} />
      ))}

      {Array.from({ length: 17 }, (_, i) => 130 + i * 5).flatMap((x) =>
        Array.from({ length: 15 }, (_, j) => j * 5).map((y) => (
          <Circle key={`${x}-${y}`} cx={x} cy={y} r={0.36} fill={color.white} fillOpacity={0.14} />
        )),
      )}

      <Rect x={0} y={0} width={70} height={3} fill={color.accent} />
      <Rect x={70} y={0} width={18} height={3} fill={color.cyan} />
    </Svg>
  );
}

function OfficeCard({ office }: { office: ProfileOffice }) {
  return (
    <View
      style={{
        width: mm(54.4),
        borderWidth: 1,
        borderColor: onNavy.cardBorder,
        borderRadius: radius.card,
        padding: mm(5),
        height: mm(34),
      }}
    >
      <Ph
        dark
        value={office.city}
        label="City"
        style={{ fontFamily: font.head, fontWeight: 500, fontSize: 11, color: color.white }}
      />
      <Text style={{ marginTop: mm(1.6), fontSize: 6.8, fontWeight: 600, letterSpacing: 0.9, color: color.cyan }}>
        {(office.type ?? 'Office').toUpperCase()}
      </Text>
      <View style={{ marginTop: mm(2.4) }}>
        {(office.address?.length ? office.address : [undefined, undefined]).slice(0, 2).map((line, i) => (
          <Ph
            key={i}
            dark
            value={line}
            label={i === 0 ? 'Street address' : 'Postal code, City, Country'}
            style={{ fontSize: 7.8, lineHeight: 1.45, color: color.white }}
          />
        ))}
      </View>
    </View>
  );
}

function FootItem({ label, value, ph }: { label: string; value?: string; ph: string }) {
  return (
    <View style={{ marginBottom: mm(4.4) }}>
      <Text style={{ fontSize: 6.8, fontWeight: 600, letterSpacing: 1, color: '#9AA6B8' }}>{label}</Text>
      <Ph dark value={value} label={ph} style={{ marginTop: mm(1.4), fontSize: 8.6, color: color.white }} />
    </View>
  );
}

/** Page 13 — 11 Contact Us, the navy back cover. */
export function ContactPage({ profile }: { profile: CompanyProfile }) {
  const c = profile.company ?? {};
  const contact = profile.contact ?? {};
  // Show the offices there are, up to three; an empty list still draws one
  // placeholder card so the back cover never has a hole in it.
  const offices = (c.offices?.length ? c.offices : [{}]).slice(0, 3);

  return (
    <Page size="A4" wrap={false} style={{ backgroundColor: color.navy, fontFamily: font.body }}>
      <View style={{ ...A4, position: 'relative' }}>
      <ContactArtwork />

      <View style={{ position: 'absolute', top: mm(58), left: mm(page.margin), right: mm(page.margin) }}>
        <Text style={{ fontSize: type.eyebrow, fontWeight: 600, letterSpacing: 1.1, color: color.cyan }}>
          13 — CONTACT US
        </Text>
        <Text
          style={{
            marginTop: mm(2.6),
            fontFamily: font.head,
            fontWeight: 600,
            fontSize: type.backTitle,
            lineHeight: leading.cover,
            color: color.white,
            maxWidth: mm(155),
          }}
        >
          {contact.headline ?? "Let's build something great together."}
        </Text>
        <View style={{ marginTop: mm(6), maxWidth: mm(140) }}>
          <Ph
            dark
            value={contact.lead}
            label="How fast you reply and what the first call covers"
            style={{ fontSize: type.lead, lineHeight: 1.5, color: color.white }}
          />
        </View>

        <View style={{ flexDirection: 'row', marginTop: mm(8) }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: color.accent,
              borderRadius: radius.pill,
              paddingVertical: mm(3),
              paddingHorizontal: mm(6),
            }}
          >
            <Text style={{ fontSize: 9.5, fontWeight: 600, color: color.white }}>
              {contact.button ?? 'Book a consultation'} →{'  '}
            </Text>
            <Ph dark value={c.bookingUrl} label="yourcompany.com/contact" style={{ fontSize: 9.5, color: color.white }} />
          </View>
        </View>

        <View style={{ flexDirection: 'row', gap: mm(5.4), marginTop: mm(13) }}>
          {offices.map((office, i) => (
            <OfficeCard key={i} office={office} />
          ))}
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: mm(20),
          left: mm(page.margin),
          right: mm(page.margin),
          borderTopWidth: 1,
          borderTopColor: onNavy.hairline,
          paddingTop: mm(6),
          flexDirection: 'row',
        }}
      >
        <View style={{ width: mm(68) }}>
          <FootItem label="EMAIL" value={c.email} ph="hello@yourcompany.com" />
          {/* <FootItem label="PHONE" value={c.phone} ph="+00 00 0000 0000" /> */}
          <FootItem label="BUSINESS HOURS" value={c.hours} ph="Mon–Fri, 9:00–18:00" />
        </View>
        <View style={{ width: mm(68) }}>
          <FootItem label="WEBSITE" value={c.website} ph="www.yourcompany.com" />
          <FootItem label="COMPANY" value={c.legalName} ph="Company Legal Name Co., Ltd." />
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          {profile.qrDataUrl && c.website ? (
            <Image
              src={profile.qrDataUrl}
              style={{ width: mm(38), height: mm(38), borderRadius: mm(2) }}
            />
          ) : (
            <View
              style={{
                width: mm(38),
                height: mm(38),
                borderWidth: 1,
                borderStyle: 'dashed',
                borderColor: onNavy.cardBorder,
                borderRadius: mm(2),
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ fontSize: 7.2, lineHeight: 1.5, textAlign: 'center', color: onNavy.sub }}>
                {'QR code\nto website or\nbooking page'}
              </Text>
            </View>
          )}
        </View>
      </View>
      </View>
    </Page>
  );
}
