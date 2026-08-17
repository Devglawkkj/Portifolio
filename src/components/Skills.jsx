import { motion } from 'framer-motion';
import { skillCategories, skills } from '../data/skills';

/**
 * Skills — categorized technical competencies with tags and proficiency bars
 */
const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id="skills"
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Technical Proficiency
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-3 gradient-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills &amp; Expertise
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, catIndex) => {
            const categorySkills = skills[category.key] || [];
            return (
              <motion.div
                key={category.key}
                className="glass-card p-6 border border-beige-700/35"
                variants={categoryVariants}
                transition={{ delay: catIndex * 0.1 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.span className="text-2xl" whileHover={{ scale: 1.2 }}>
                    {category.icon}
                  </motion.span>
                  <div>
                    <h3 className="text-xl font-semibold text-beige-100">{category.label}</h3>
                    <p className="text-sm text-beige-500 mt-1">{category.description}</p>
                  </div>
                </div>

                {/* Skill bars with proficiency levels */}
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-beige-300">{skill.name}</span>
                        <span className="text-sm text-red-500 font-medium">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 bg-ink-700/80 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute inset-0 h-full rounded-full"
                          style={{
                            background:
                              'linear-gradient(90deg, #9f241d 0%, #df4432 50%, #d8bd96 100%)',
                            width: 0,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            ease: 'easeOut',
                            delay: catIndex * 0.1 + categorySkills.indexOf(skill) * 0.05,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Focus areas as tags */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-center text-lg font-semibold text-beige-300 mb-6">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.focusAreas.map((area, index) => (
              <motion.span
                key={area}
                className="px-5 py-2 bg-ink-800/70 border border-beige-700/40 text-beige-300 rounded-full text-sm font-medium hover:bg-red-600/10 hover:border-red-500/40 hover:text-red-400 transition-all duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -2, scale: 1.05 }}
              >
                {area}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
