import { Document } from '@react-pdf/renderer';
import { registerFonts } from './fonts';
import { orPh } from './components';
import {
  AboutPage,
  AiDepthPage,
  AiPage,
  CaseStudiesPage,
  CaseStudiesPageTwo,
  CeoPage,
  ClientsPage,
  ContactPage,
  ContentsPage,
  CoverPage,
  IndustriesPage,
  JourneyPage,
  PortfolioPage,
  PortfolioPageTwo,
  ProcessPage,
  QualityPage,
  ServicesPage,
  ServicesPageTwo,
  TeamPage,
} from './pages';
import type { CompanyProfile } from './types';

// Browser default. The Node render script registers absolute paths before
// importing this module, and the first registration wins.
registerFonts();

/**
 * The 19-page company profile.
 *
 * Every page is `wrap={false}` inside a fixed A4 frame, so the document is
 * always exactly TOTAL_PAGES long — content never spills onto an extra page.
 * Page numbers live in sections.ts; keep the two in step when adding a page.
 */
export function CompanyProfilePDF({ data }: { data: CompanyProfile }) {
  const name = orPh(data.company?.name, 'Company Name');

  return (
    <Document
      title={`${name} — Company Profile`}
      author={name}
      subject="Company profile"
      creator={name}
      producer={name}
    >
      <CoverPage profile={data} />
      <ContentsPage profile={data} />
      <CeoPage profile={data} />
      <AboutPage profile={data} />
      <JourneyPage profile={data} />
      <ServicesPage profile={data} />
      <ServicesPageTwo profile={data} />
      <AiPage profile={data} />
      <AiDepthPage profile={data} />
      <IndustriesPage profile={data} />
      <ProcessPage profile={data} />
      <CaseStudiesPage profile={data} />
      <CaseStudiesPageTwo profile={data} />
      <PortfolioPage profile={data} />
      <PortfolioPageTwo profile={data} />
      <ClientsPage profile={data} />
      <TeamPage profile={data} />
      <QualityPage profile={data} />
      <ContactPage profile={data} />
    </Document>
  );
}
