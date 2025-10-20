'use client';

import HamburgerMenu from '@/components/HamburgerMenu';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Technologies from '@/components/Technologies';
import Approach from '@/components/Approach';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Rain from '@/components/Rain';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Rain />
      <HamburgerMenu />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Technologies />
      <Approach />
      <Contact />
      <Footer />
    </main>
  );
}
