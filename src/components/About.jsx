import { motion } from 'framer-motion';

/**
 * About — bio, focus areas, and profile avatar
 */
const About = () => {
  // Focus areas displayed as badges
  const focusAreas = [
    'Natural Language Processing',
    'Computer Vision',
    'Large Language Models',
    'MLOps & Deployment',
    'Recommender Systems',
    'Time-Series Forecasting',
  ];

  // Animation variants for the section
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
      id="about"
      className="section-padding bg-gradient-to-b from-ink-950 to-ink-900"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left column: text content */}
          <motion.div className="lg:col-span-3 space-y-8" variants={itemVariants}>
            <div>
              <motion.span
                className="text-sm font-semibold text-red-500 tracking-wider uppercase"
                variants={itemVariants}
              >
                About Me
              </motion.span>
              <motion.h2
                className="text-3xl md:text-4xl font-bold mt-3 gradient-text"
                variants={itemVariants}
              >
                Transforming data into intelligent products
              </motion.h2>
            </div>

            <motion.p
              className="text-lg text-beige-300 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              I&apos;m an AI engineer with 5+ years of experience building and deploying machine
              learning systems at scale. My work spans the full ML lifecycle — from research and
              prototyping to production deployment and monitoring. I&apos;m passionate about
              leveraging cutting-edge AI techniques to solve complex real-world problems and making
              machine learning accessible to everyone.
            </motion.p>

            <motion.p
              className="text-lg text-beige-300 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Currently, I focus on advancing large language model applications, building robust
              MLOps pipelines, and democratizing access to AI through developer-friendly tools and
              frameworks.
            </motion.p>

            {/* Focus areas */}
            <motion.div className="pt-4" variants={itemVariants}>
              <motion.h3 className="text-xl font-semibold text-beige-200 mb-4">
                Focus Areas
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {focusAreas.map((area, index) => (
                  <motion.span
                    key={area}
                    className="inline-flex items-center px-4 py-2 bg-ink-800/70 border border-beige-700/40 rounded-full text-sm text-beige-300 hover:bg-red-600/10 hover:border-red-500/40 hover:text-red-400 transition-all duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2" />
                    {area}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column: profile avatar */}
          <motion.div
            className="lg:col-span-2 flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Outer hexagon / polygonal frame */}
              <motion.div
                className="absolute inset-0"
                style={{
                  clipPath:
                    'polygon(20% 0% 80% 0% 100% 20% 100% 80% 80% 100% 20% 100% 0% 80% 0% 20%)',
                }}
              >
                <motion.div
                  className="w-full h-full border-2 border-red-500/30 rounded-xl"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 30%, rgba(223,68,50,0.1), transparent 70%)',
                  }}
                  animate={{
                    borderColor: [
                      'rgba(223,68,50,0.2)',
                      'rgba(223,68,50,0.4)',
                      'rgba(223,68,50,0.2)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>

              {/* Inner avatar container with gradient border animation */}
              <motion.div
                className="absolute inset-2 rounded-xl overflow-hidden"
                style={{
                  background: 'conic-gradient(from 0deg, #c52f23, #d8bd96, #c52f23)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-[8px] overflow-hidden">
                  {/* Avatar - abstract geometric representation */}
                  <div className="w-full h-full bg-gradient-to-br from-ink-800 to-ink-900 flex items-center justify-center">
                    <motion.div
                      className="w-32 h-32 rounded-full"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      style={{
                        background: 'radial-gradient(circle at 30% 30%, #df4432, #7f211d, #141110)',
                        boxShadow: '0 0 40px rgba(223,68,50,0.4)',
                      }}
                    >
                      {/* Abstract geometric pattern representing AI */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-1 w-16 h-16">
                          {[...Array(9)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-1.5 h-1.5 bg-red-500/50 rounded-full"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Glowing dots around the avatar */}
                <motion.div
                  className="absolute -top-3 -right-3 w-4 h-4 bg-beige-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-4 w-3 h-3 bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.7 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
