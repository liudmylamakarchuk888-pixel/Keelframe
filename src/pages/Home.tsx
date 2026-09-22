import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Trust } from '../components/Trust';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { ExploreAI } from '../components/ExploreAI';
import { Chooser } from '../components/Chooser';
import { Process } from '../components/Process';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Marquee } from '../components/CTA';
import { Contact } from '../components/Contact';
import { site } from '../data/site';

/**
 * The home page. Routes like /services, /work, /contact or /services/ai-development
 * render this page and scroll to the matching section id. `location.key` is a
 * dependency so that a second click on a button that leads to the same section
 * (for example two different "Discuss a … build" buttons) scrolls again.
 */
export function Home() {
  const { section, sub } = useParams();
  const location = useLocation();

  useEffect(() => {
    document.title = site.title;
    const id = sub || section;
    if (!id) { window.scrollTo({ top: 0 }); return; }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [section, sub, location.key]);

  return (
    <main>
      <Hero />
      <Trust />
      <Services />
      <Portfolio />
      <ExploreAI />
      <Chooser />
      <Process />
      <Testimonials />
      <FAQ />
      <Marquee />
      <Contact />
    </main>
  );
}
