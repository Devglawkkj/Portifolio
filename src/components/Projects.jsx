import { useDeferredValue, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Boxes,
  BrainCircuit,
  Database,
  ExternalLink,
  Github,
  ScanSearch,
  Waypoints,
} from 'lucide-react';
import { projectCategories, projects } from '../data/projects';

const categoryVisuals = {
  nlp: { icon: BrainCircuit, code: 'NLP', color: 'from-red-600/25 to-ink-800/5' },
  cv: { icon: ScanSearch, code: 'CV', color: 'from-red-800/25 to-red-950/5' },
  ml: { icon: Waypoints, code: 'ML', color: 'from-beige-600/20 to-ink-800/5' },
  mlops: { icon: Boxes, code: 'OPS', color: 'from-red-500/20 to-beige-800/5' },
  llm: { icon: Database, code: 'LLM', color: 'from-beige-500/20 to-red-900/5' },
};

const ProjectPreview = ({ project }) => {
  const visual = categoryVisuals[project.category] || categoryVisuals.ml;
  const Icon = visual.icon;

  return (
    <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${visual.color}`}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(247,236,217,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(247,236,217,0.035)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-beige-700/30" />
      <div className="absolute -right-3 top-5 h-24 w-24 rounded-full border border-beige-700/30" />
      <div className="absolute inset-x-6 bottom-6 top-6 flex items-end justify-between rounded-xl border border-beige-700/30 bg-ink-950/65 p-5 backdrop-blur-sm">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-beige-500">
            Example / {visual.code}
          </span>
          <p className="mt-2 max-w-[190px] font-mono text-sm font-medium text-beige-100">
            {project.outcome}
          </p>
        </div>
        <motion.div
          className="rounded-xl border border-red-500/30 bg-red-600/10 p-3 text-red-400"
          whileHover={{ rotate: 5, scale: 1.08 }}
        >
          <Icon size={26} />
        </motion.div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.96 }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    className={`group overflow-hidden rounded-2xl border bg-ink-900/80 transition-colors hover:border-red-500/45 ${
      project.featured ? 'border-beige-600/40' : 'border-beige-700/25'
    }`}
  >
    <ProjectPreview project={project} />
    <div className="p-6">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight text-beige-100 transition-colors group-hover:text-red-400">
          {project.title}
        </h3>
        {project.featured && (
          <span className="shrink-0 rounded-full border border-red-500/30 bg-red-600/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-red-400">
            Example
          </span>
        )}
      </div>
      <p className="line-clamp-3 text-sm leading-relaxed text-beige-400">{project.description}</p>
      <div className="my-5 flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-beige-700/25 bg-beige-100/[0.025] px-2.5 py-1 font-mono text-[10px] text-beige-400"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-5 border-t border-beige-700/25 pt-5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-beige-400 transition-colors hover:text-red-400"
          aria-label={`View ${project.title} source code`}
        >
          <Github size={16} /> Source
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-beige-400 transition-colors hover:text-red-400"
            aria-label={`View ${project.title} live demo`}
          >
            <ExternalLink size={16} /> Live demo
          </a>
        )}
        <ArrowUpRight
          size={18}
          className="ml-auto text-ink-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-red-500"
          aria-hidden="true"
        />
      </div>
    </div>
  </motion.article>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const deferredCategory = useDeferredValue(activeCategory);
  const visibleProjects =
    deferredCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === deferredCategory);

  return (
    <section id="projects" className="section-padding border-y border-beige-700/20 bg-ink-900/60">
      <div className="container-custom">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-red-500">
              Projetos / Exemplos temporários
            </span>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-beige-50 md:text-5xl">
              Exemplos de projetos para substituir pelos trabalhos reais.
            </h2>
          </motion.div>
          <p className="max-w-md text-sm leading-relaxed text-beige-500 lg:text-right">
            Este conteúdo é demonstrativo e será trocado por projetos reais do portfólio.
          </p>
        </div>

        <div
          className="mb-9 flex gap-2 overflow-x-auto pb-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-red-500 text-ink-950'
                  : 'border border-beige-700/30 bg-beige-100/[0.025] text-beige-400 hover:text-red-400'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={deferredCategory}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
