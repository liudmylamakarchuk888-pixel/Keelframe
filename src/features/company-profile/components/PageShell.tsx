import { Page, Text, View } from '@react-pdf/renderer';
import { A4, color, font, hairline, mm, page, type } from '../theme';
import { orPh } from './Ph';
import type { ProfileCompany } from '../types';

interface PageShellProps {
  company?: ProfileCompany;
  /** Two-digit page number, "02" .. "13". */
  pageNumber: string;
  /** Right-hand running head: "01  MESSAGE FROM THE CEO". */
  sectionLabel: string;
  children: React.ReactNode;
}

/**
 * Every inner page: white, with the running head, the footer rule and a
 * fixed content box between them.
 *
 * The content box is positioned absolutely from all four edges, so a page
 * body can never push the footer down — it simply has 174 × 255mm to work
 * with, and the layout is tuned to fit.
 */
export function PageShell({ company, pageNumber, sectionLabel, children }: PageShellProps) {
  const head = {
    fontFamily: font.body,
    fontSize: type.runningHead,
    letterSpacing: 0.6,
    color: color.muted,
  };

  return (
    <Page size="A4" wrap={false} style={{ backgroundColor: color.white, fontFamily: font.body }}>
      <View style={{ ...A4, position: 'relative' }}>
      <View
        style={{
          position: 'absolute',
          top: mm(page.headerTop),
          left: mm(page.margin),
          right: mm(page.margin),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text style={head}>
          <Text style={{ fontWeight: 600, color: color.ink }}>
            {orPh(company?.name, 'COMPANY NAME').toUpperCase()}
          </Text>
          <Text> · COMPANY PROFILE</Text>
        </Text>
        <Text style={head}>{sectionLabel.toUpperCase()}</Text>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: mm(page.footerBottom),
          left: mm(page.margin),
          right: mm(page.margin),
          borderTopWidth: hairline,
          borderTopColor: color.line,
          paddingTop: mm(3.4),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: type.runningHead, color: color.accent }}>
          {orPh(company?.website, 'www.yourcompany.com')}
        </Text>
        <Text style={{ fontSize: type.runningHead, fontWeight: 700, color: color.ink }}>
          {pageNumber}
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          top: mm(page.top),
          bottom: mm(page.bottom),
          left: mm(page.margin),
          right: mm(page.margin),
        }}
      >
        {children}
      </View>
      </View>
    </Page>
  );
}
