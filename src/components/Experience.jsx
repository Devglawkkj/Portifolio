import { motion } from 'framer-motion';
import { Briefcase, Building2, CalendarDays, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Monitor de Qualidade',
    company: 'Honda',
    period: 'Jul. 2026',
    status: 'atual',
  },
  {
    role: 'Suporte T.I',
    company: 'Brightbee School',
    period: 'Jul. 2025',
    status: 'finalizado',
  },
  {
    role: 'Suporte Técnico Nata',
    company: 'GTS Net',
    period: 'Jan. 2025',
    status: 'término',
  },
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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
      id="experience"
      className="section-padding bg-gradient-to-b from-ink-950 to-ink-900"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container-custom">
        <div className="mb-16 text-center">
          <motion.span
            className="text-sm font-semibold text-red-500 tracking-wider uppercase"
            variants={itemVariants}
          >
            Histórico profissional
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-3 gradient-text"
            variants={itemVariants}
          >
            Experiência
          </motion.h2>
        </div>

        <div className="mx-auto max-w-5xl space-y-6">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              className="glass-card p-6 border border-beige-700/35"
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-beige-700/30 pb-4">
                <span className="font-mono text-xs text-beige-500">
                  $ experience --entry {String(index + 1).padStart(2, '0')}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-600/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-red-400">
                  <CheckCircle2 size={12} />
                  {experience.status}
                </span>
              </div>

              <div className="grid gap-5 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center">
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-beige-700/40 bg-ink-800/70 text-red-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Briefcase size={22} />
                </motion.div>

                <div>
                  <h3 className="text-xl font-semibold text-beige-100">{experience.role}</h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-beige-400">
                    <Building2 size={15} className="text-red-500" />
                    {experience.company}
                  </p>
                </div>

                <p className="flex items-center gap-2 font-mono text-sm text-beige-500 md:justify-self-end">
                  <CalendarDays size={15} className="text-red-500" />
                  {experience.period}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
