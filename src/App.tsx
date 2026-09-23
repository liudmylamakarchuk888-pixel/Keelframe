import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { CompanyProfile } from './pages/CompanyProfile';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

/**
 * Routing.
 *
 * HashRouter is used so the site works on any static host with no server
 * configuration (URLs look like /#/about). If your host supports SPA
 * fallbacks (Vercel, Netlify, Cloudflare Pages all do), swap HashRouter for
 * BrowserRouter below to get clean URLs like /about and /services/ai-development.
 *
 * /:section and /:section/:sub render the home page and scroll to that section
 * (/work, /contact, /services/ai-development). Query strings survive, which is
 * how the contact form is pre-filled: /contact?intent=call&service=mobile-apps.
 */
export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/:section" element={<Home />} />
        <Route path="/:section/:sub" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
