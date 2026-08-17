import { motion } from 'framer-motion';
import { Award, BookOpen, Clock3, GraduationCap } from 'lucide-react';

const education = [
  {
    institution: 'PIT — Piauí Instituto de Tecnologia',
    course: 'Tecnólogo em Ciência de Dados',
    period: 'Início 2026',
  },
  {
    institution: 'Ceti Zacarias de Gois',
    course: 'Ensino médio',
    period: 'Término 2023',
  },
];

const courses = [
  { name: 'Python avançado', institution: 'Ucademy', workload: '+50h' },
  { name: 'Excel Avançado', institution: null, workload: '+40h' },
  { name: 'Power BI', institution: null, workload: '+40h' },
  { name: 'Front end', institution: 'Hi Happy', workload: '+50h' },
  { name: 'Back end', institution: 'Santander Academy', workload: '+50h' },
  { name: 'Curso de redes', institution: 'Suporte de TI do Google', workload: null },
];

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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
      id="education"
      className="section-padding bg-gradient-to-b from-ink-900 to-ink-950"
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
            Aprendizado contínuo
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-3 gradient-text"
            variants={itemVariants}
          >
            Formação &amp; Cursos
          </motion.h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={itemVariants}>
            <h3 className="mb-8 flex items-center gap-3 text-2xl font-semibold text-beige-200">
              <GraduationCap size={24} className="text-red-500" />
              Formação
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.article
                  key={item.institution}
                  className="glass-card p-6 border border-beige-700/35"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="mb-4 flex items-center justify-between gap-4 border-b border-beige-700/30 pb-4">
                    <span className="font-mono text-xs text-beige-500">
                      $ education --record {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-xs text-red-500">{item.period}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-beige-100">{item.course}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-beige-500">{item.institution}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="mb-8 flex items-center gap-3 text-2xl font-semibold text-beige-200">
              <Award size={24} className="text-red-500" />
              Cursos e certificações
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {courses.map((course, index) => (
                <motion.article
                  key={`${course.name}-${course.institution || 'curso'}`}
                  className="glass-card p-5 border border-beige-700/35"
                  variants={itemVariants}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-beige-700/40 bg-ink-800/70 text-red-500">
                      <BookOpen size={18} />
                    </div>
                    {course.workload && (
                      <span className="flex items-center gap-1.5 font-mono text-xs text-red-500">
                        <Clock3 size={13} />
                        {course.workload}
                      </span>
                    )}
                  </div>
                  <h4 className="font-semibold text-beige-100">{course.name}</h4>
                  {course.institution && (
                    <p className="mt-2 text-sm text-beige-500">{course.institution}</p>
                  )}
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
