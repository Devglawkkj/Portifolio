import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  BrainCircuit,
  Check,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import { profile } from '../data/profile';

const nodes = Array.from({ length: 26 }, (_, index) => ({
  id: index,
  x: (index * 37 + 11) % 100,
  y: (index * 61 + 17) % 100,
  size: 0.35 + (index % 4) * 0.16,
  delay: (index % 8) * 0.18,
}));

const connections = nodes.flatMap((from, fromIndex) =>
  nodes.slice(fromIndex + 1).flatMap((to) => {
    const distance = Math.hypot(from.x - to.x, from.y - to.y);
    return distance < 24 ? [{ from, to, opacity: 1 - distance / 24 }] : [];
  })
);

const NeuralNetworkBackground = () => (
  <svg
    className="absolute inset-0 h-full w-full"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c52f23" stopOpacity="0" />
        <stop offset="50%" stopColor="#df4432" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#d8bd96" stopOpacity="0" />
      </linearGradient>
    </defs>
    <g>
      {connections.map(({ from, to, opacity }) => (
        <motion.line
          key={`${from.id}-${to.id}`}
          x1={from.x}
          y1={from.y}
          x2={to.x}
          y2={to.y}
          stroke="url(#connectionGradient)"
          strokeWidth="0.18"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: opacity * 0.45 }}
          transition={{ duration: 1.4, delay: from.delay }}
        />
      ))}
      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r={node.size}
          fill="#df4432"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0.25, 0.8, 0.25], scale: [0.8, 1.25, 0.8] }}
          transition={{ duration: 3.5, delay: node.delay, repeat: Infinity }}
        />
      ))}
    </g>
  </svg>
);

const pipeline = [
  { label: 'APIs REST', detail: 'FastAPI + Node.js' },
  { label: 'Automação', detail: 'Python + JavaScript' },
  { label: 'Dados', detail: 'SQL + BI' },
];

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden border-b border-beige-700/20 bg-ink-950 md:min-h-[calc(100vh-5rem)]"
    >
      <div className="absolute inset-0 opacity-35">
        <NeuralNetworkBackground />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(197,47,35,0.16),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(195,157,111,0.10),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(247,236,217,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(247,236,217,0.018)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="container-custom relative z-10 py-20 md:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/10 px-3 py-1.5 font-mono text-xs text-red-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                Available for select projects
              </span>
              <span className="font-mono text-xs text-beige-500">TERESINA / BRASIL</span>
            </div>

            <p className="mb-3 font-mono text-sm font-medium uppercase tracking-[0.22em] text-red-500">
              {profile.name} / {profile.role}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-beige-50 sm:text-6xl md:text-7xl xl:text-[5.4rem]">
              Software,
              <span className="block text-beige-500">built to automate</span>
              <span className="gradient-text">and optimize.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-beige-400 sm:text-lg">
              Desenvolvo software, aplicações web e sistemas internos para automatizar processos,
              otimizar operações e melhorar a experiência do usuário, com HTML, CSS, JavaScript,
              Node.js, Python, FastAPI, SQL e APIs REST.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <motion.button
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-red-500 px-6 py-3.5 font-semibold text-ink-950 transition-colors hover:bg-red-400"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore selected work
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-beige-700/40 bg-beige-100/[0.04] px-6 py-3.5 font-semibold text-beige-100 transition-colors hover:bg-beige-100/[0.08]"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a conversation
                <Mail size={18} />
              </motion.button>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <span className="mr-2 font-mono text-[11px] uppercase tracking-widest text-beige-600">
                Elsewhere
              </span>
              {[
                { label: 'GitHub', href: profile.github, icon: Github },
                { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
                { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
              ].map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                  className="rounded-lg border border-beige-700/30 p-2.5 text-beige-500 transition-colors hover:border-red-500/50 hover:text-red-400"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-10 rounded-full bg-red-600/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-beige-700/30 bg-ink-900/90 shadow-2xl shadow-ink-950/60 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-beige-700/25 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-beige-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink-400/80" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-beige-600">
                  portfolio / live
                </span>
              </div>

              <div className="p-6">
                <div className="mb-8 flex items-start justify-between">
                  <div>
                    <p className="font-mono text-xs text-red-500">BACK-END STACK</p>
                    <h2 className="mt-2 text-xl font-semibold text-beige-50">Development pipeline</h2>
                  </div>
                  <div className="rounded-xl border border-red-500/30 bg-red-600/10 p-3 text-red-400">
                    <BrainCircuit size={24} />
                  </div>
                </div>

                <div className="space-y-3">
                  {pipeline.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.15 }}
                      className="flex items-center gap-4 rounded-xl border border-beige-700/25 bg-beige-100/[0.025] p-4"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-red-500/30 bg-red-600/10 text-red-400">
                        <Check size={14} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-beige-200">{item.label}</p>
                        <p className="font-mono text-[11px] text-beige-600">stage_0{index + 1}</p>
                      </div>
                      <span className="font-mono text-xs text-beige-400">{item.detail}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-beige-700/25 bg-beige-700/25">
                  {[
                    ['REST', 'APIs'],
                    ['SQL', 'data'],
                    ['RPA', 'automation'],
                  ].map(([value, label]) => (
                    <div key={label} className="bg-ink-900 px-3 py-4 text-center">
                      <p className="font-mono text-sm font-medium text-beige-50">{value}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-wider text-beige-600">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <button
          onClick={() => scrollTo('skills')}
          className="absolute bottom-5 right-6 hidden items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-beige-600 transition-colors hover:text-red-400 md:flex lg:right-12 xl:right-16"
        >
          Scroll to inspect
          <ArrowDownRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
