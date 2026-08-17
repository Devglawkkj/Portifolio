/**
 * Skills data — categorized technical competencies
 * Used by the Skills component and project tag rendering
 */
export const skills = {
  softwareDevelopment: [
    { name: 'Python', level: 95 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 85 },
    { name: 'FastAPI', level: 80 },
    { name: 'SQL', level: 75 },
    { name: 'APIs REST', level: 85 },
    { name: 'Git & GitHub', level: 80 },
  ],
  dataAnalysis: [
    { name: 'Ciência de Dados', level: 80 },
    { name: 'Business Intelligence (BI)', level: 80 },
    { name: 'Dashboards e KPIs', level: 80 },
    { name: 'Machine Learning', level: 75 },
    { name: 'Excel e Planilhas', level: 85 },
  ],
  automation: [
    { name: 'Automação com Python e JavaScript', level: 85 },
    { name: 'RPA', level: 75 },
    { name: 'Scripts de Automação', level: 85 },
    { name: 'Integração entre Sistemas', level: 80 },
  ],
  focusAreas: [
    'Desenvolvimento de Software',
    'Ciência e Análise de Dados',
    'Automação e RPA',
    'APIs REST',
    'Business Intelligence',
    'Integração entre Sistemas',
  ],
};

// Skill category metadata — icons and descriptions for display
export const skillCategories = [
  {
    key: 'softwareDevelopment',
    label: 'Desenvolvimento de Software',
    icon: '💻',
    description: 'Tecnologias para aplicações, sistemas e APIs',
  },
  {
    key: 'dataAnalysis',
    label: 'Ciência e Análise de Dados',
    icon: '🧠',
    description: 'Dados, indicadores e inteligência de negócio',
  },
  {
    key: 'automation',
    label: 'Automação e RPA',
    icon: '⚙️',
    description: 'Automação de processos e integração de sistemas',
  },
];
