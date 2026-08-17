import { motion } from 'framer-motion';
import { BookOpen, Award, ExternalLink } from 'lucide-react';
import { publications, certifications } from '../data/certifications';

/**
 * Certifications — publications and certifications section
 */
const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id="certifications"
      className="section-padding bg-gradient-to-b from-ink-950 to-ink-900"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.span
            className="text-sm font-semibold text-red-500 tracking-wider uppercase"
            variants={itemVariants}
          >
            Research &amp; Recognition
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-3 gradient-text"
            variants={itemVariants}
          >
            Publications &amp; Certifications
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Publications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-beige-200 mb-8 flex items-center gap-3">
              <BookOpen size={24} className="text-red-500" />
              Publications
            </h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  className="glass-card p-6 border border-beige-700/35 hover:border-red-500/30 transition-all duration-300 group"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-600/10 border border-red-500/40 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <BookOpen size={20} className="text-red-500" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-beige-100 group-hover:text-red-400 transition-colors">
                        {pub.title}
                      </h4>
                      <p className="text-sm text-beige-500 mt-1">
                        {pub.venue} • {pub.year}
                      </p>
                      <p className="text-sm text-beige-400 mt-2 leading-relaxed">
                        {pub.description}
                      </p>
                      {pub.link && (
                        <motion.a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-red-500 hover:text-red-400 mt-2"
                          whileHover={{ x: 3 }}
                        >
                          <ExternalLink size={14} />
                          Read paper
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-beige-200 mb-8 flex items-center gap-3">
              <Award size={24} className="text-red-500" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  className="glass-card p-5 border border-beige-700/35 hover:border-red-500/30 transition-all duration-300 group flex items-center gap-4"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3, x: 5 }}
                >
                  <motion.div className="flex-shrink-0 text-3xl" whileHover={{ scale: 1.2 }}>
                    {cert.badge}
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-beige-100 group-hover:text-red-400 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-beige-500">{cert.issuer}</p>
                    <p className="text-xs text-beige-600 mt-0.5">{cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional recognition / stats */}
            <motion.div className="mt-8 grid grid-cols-2 gap-4" variants={itemVariants}>
              {[
                { value: '3', label: 'Published Papers' },
                { value: '5', label: 'Industry Certifications' },
                { value: '15+', label: 'Conferences Attended' },
                { value: '3', label: 'Open Source Projects' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 glass-card border border-beige-700/30"
                  whileHover={{ scale: 1.03 }}
                >
                  <span className="text-3xl font-bold text-red-500">{stat.value}</span>
                  <p className="text-xs text-beige-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
