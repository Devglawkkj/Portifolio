import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { experience } from '../data/experience';

const TimelineItem = ({ item, index }) => {
  const Icon = item.type === 'education' ? GraduationCap : Briefcase;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.08, 0.3) }}
      className="relative grid gap-4 pb-12 pl-12 last:pb-0 md:grid-cols-[170px_minmax(0,1fr)] md:gap-10 md:pl-0"
    >
      <div className="absolute left-[7px] top-0 h-full w-px bg-gradient-to-b from-red-500/50 via-beige-700/30 to-beige-700/30 md:left-[190px]" />
      <div className="absolute left-0 top-1 z-10 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-red-500 bg-ink-950 md:left-[183px]">
        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
      </div>

      <div className="md:text-right">
        <p className="font-mono text-xs font-medium text-red-500">{item.period}</p>
        <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-beige-600 md:justify-end">
          <MapPin size={12} />
          {item.location}
        </p>
      </div>

      <div className="rounded-2xl border border-beige-700/25 bg-ink-900/75 p-6 transition-colors hover:border-red-500/35 md:p-7">
        <div className="mb-5 flex items-start gap-4">
          <div className="mt-0.5 rounded-lg border border-red-500/30 bg-red-600/10 p-2.5 text-red-400">
            <Icon size={19} />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-beige-600">
              {item.type === 'education' ? 'Education' : 'Experience'}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-beige-50">{item.title}</h3>
            <p className="mt-1 text-sm text-red-500">{item.company}</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-beige-400">{item.description}</p>
        {item.achievements?.length > 0 && (
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {item.achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex items-start gap-2 text-xs leading-relaxed text-beige-500"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-500" />
                {achievement}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
};

const Timeline = () => (
  <section id="experience" className="section-padding bg-ink-950">
    <div className="container-custom">
      <div className="mb-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-red-500">
            04 / Track record
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-beige-50 md:text-5xl">
            From research questions to resilient systems.
          </h2>
        </motion.div>
        <p className="max-w-xl text-sm leading-relaxed text-beige-500 lg:justify-self-end">
          Five years working across applied research, product engineering, and platform
          infrastructure, with a focus on getting models safely into users&apos; hands.
        </p>
      </div>

      <div className="mx-auto max-w-5xl">
        {experience.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
