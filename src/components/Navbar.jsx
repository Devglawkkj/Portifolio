import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';
import { navLinks } from '../data/navigation';

const sectionIds = navLinks.map((link) => link.id);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds, 0.15);

  // Handle scroll for background transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 80;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  // Navbar background: transparent → solid on scroll
  const navbarBg = scrolled
    ? 'bg-ink-950/90 border-beige-800/50'
    : 'bg-transparent border-transparent';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBg} backdrop-blur-md border-b`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl md:text-2xl font-bold gradient-text hover:opacity-90 transition-opacity"
              aria-label="Scroll to top"
            >
              <span className="text-red-500">{'<'}</span>
              <span className="text-beige-50">GR</span>
              <span className="text-red-500">.</span>
              <span className="text-beige-50">dev</span>
              <span className="text-red-500">{'>'}</span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-red-400 bg-red-600/10'
                      : 'text-beige-400 hover:text-beige-100 hover:bg-ink-800/70'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-700 to-red-400 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              );
            })}

            <motion.button
              onClick={() => scrollToSection('contact')}
              className="ml-3 inline-flex items-center gap-2 rounded-lg border border-red-500/40 bg-red-600/10 px-4 py-2 text-sm font-semibold text-red-400 transition-colors hover:bg-red-500/20"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Let&apos;s talk
              <ArrowUpRight size={16} />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-beige-400 hover:text-beige-100 hover:bg-ink-800/70 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="x"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-ink-950/95 border-t border-beige-800/50 backdrop-blur-md"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.button
                      key={link.id}
                      onClick={() => {
                        scrollToSection(link.id);
                        handleLinkClick();
                      }}
                      className={`px-4 py-3 rounded-lg text-left text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-red-400 bg-red-600/10 border-l-2 border-red-500'
                          : 'text-beige-400 hover:text-beige-100 hover:bg-ink-800/70'
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.label}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
