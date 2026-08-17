import { useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.slice(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-ink-950">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-md bg-red-500 px-4 py-2 font-semibold text-ink-950 transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-red-700 via-red-500 to-beige-400"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <main id="main-content" className="pt-16 md:pt-20">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
