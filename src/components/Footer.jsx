import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { navLinks } from '../data/navigation';
import { profile } from '../data/profile';

/**
 * Footer — copyright, quick links, and back-to-top button
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: profile.github, icon: <Github size={20} /> },
    { name: 'LinkedIn', href: profile.linkedin, icon: <Linkedin size={20} /> },
    { name: 'Email', href: `mailto:${profile.email}`, icon: <Mail size={20} /> },
  ];

  return (
    <motion.footer
      className="relative bg-ink-950 border-t border-beige-800/50 pt-12 md:pt-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container-custom pb-8 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand / tagline */}
          <div className="md:col-span-1">
            <motion.a
              href="#hero"
              className="text-2xl font-bold gradient-text mb-4 block"
              whileHover={{ scale: 1.05 }}
            >
              {'<GR.dev>'}
            </motion.a>
            <p className="text-sm text-beige-500">
              Software, APIs e automações para problemas reais.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-beige-300 mb-4">Pages</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <motion.a
                    href={`#${link.id}`}
                    className="text-beige-400 hover:text-red-400 transition-colors text-sm"
                    whileHover={{ x: 3 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h4 className="text-sm font-semibold text-beige-300 mb-4">Social</h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-beige-400 hover:text-red-400 transition-colors text-sm"
                  whileHover={{ x: 3 }}
                  aria-label={social.name}
                >
                  {social.icon}
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h4 className="text-sm font-semibold text-beige-300 mb-4">Tem um projeto de software?</h4>
            <p className="text-sm text-beige-500 mb-4">
              Entre em contato para conversar sobre desenvolvimento, dados e automação.
            </p>
            <motion.a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-red-500/35 bg-red-600/10 px-4 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/20"
              whileHover={{ y: -2 }}
            >
              <Mail size={16} />
              {profile.email}
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          className="my-8 border-t border-beige-800/50"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
        />

        {/* Copyright + back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-beige-600">
            © {currentYear} {profile.name}. Built with React and curiosity.
          </p>

          {/* Back to top button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-beige-300 bg-ink-800/70 border border-beige-700/40 rounded-lg hover:text-red-400 hover:border-red-500/50 hover:bg-ink-800 transition-all duration-200"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
            Back to Top
          </motion.button>
        </div>
      </div>

      {/* Animated background decorative elements */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-80 h-80 bg-beige-600/5 rounded-full blur-3xl" />
    </motion.footer>
  );
};

export default Footer;
