/**
 * Professional experience and education timeline data
 */
export const experience = [
  {
    id: 1,
    type: 'work',
    title: 'Senior AI Engineer',
    company: 'TechVision AI',
    location: 'Remote / San Francisco, CA',
    period: '2023 — Present',
    description:
      'Leading the development of enterprise AI solutions including a production RAG chatbot and computer vision API. Managing a team of 5 ML engineers and establishing MLOps best practices. Implemented model monitoring that reduced production incidents by 70%.',
    achievements: [
      'Deployed RAG chatbot serving 50K+ monthly active users with 99.9% uptime',
      'Reduced model inference latency by 40% through quantization and ONNX optimization',
      'Established CI/CD pipeline for ML models with automated testing and rollback',
    ],
  },
  {
    id: 2,
    type: 'work',
    title: 'Machine Learning Engineer',
    company: 'DataFlow Analytics',
    location: 'Austin, TX',
    period: '2021 — 2023',
    description:
      'Built and deployed recommendation systems and predictive models for enterprise clients. Worked on time-series forecasting, customer segmentation, and anomaly detection. Collaborated with data engineering teams to build scalable ML pipelines.',
    achievements: [
      'Developed recommendation engine that increased user engagement by 35%',
      'Automated feature engineering pipeline reducing data prep time by 60%',
      'Published 3 internal research papers on model optimization techniques',
    ],
  },
  {
    id: 3,
    type: 'work',
    title: 'AI Research Intern',
    company: 'NeuroTech Labs',
    location: 'Boston, MA',
    period: 'Summer 2020',
    description:
      'Researched few-shot learning techniques for low-resource NLP tasks. Implemented prototypical networks and adapter-based fine-tuning methods. Contributed to open-source library for prompt engineering.',
    achievements: [
      'Co-authored paper on few-shot learning accepted to NeurIPS workshop',
      'Open-sourced prompt-engineering toolkit with 500+ stars on GitHub',
      'Implemented adapter framework reducing fine-tuning costs by 75%',
    ],
  },
  {
    id: 4,
    type: 'education',
    title: 'M.S. in Computer Science (AI Specialization)',
    company: 'Stanford University',
    location: 'Stanford, CA',
    period: '2019 — 2021',
    description:
      'Graduated with distinction. Thesis: "Efficient Fine-Tuning Methods for Large Language Models." Coursework included Deep Learning, Probabilistic Graphical Models, Advanced NLP, and Distributed Systems.',
    achievements: [
      'Thesis: Efficient Fine-Tuning Methods for LLMs (Advisor: Prof. Andrew Ng)',
      'Graduate Fellowship, Department of Computer Science',
      'TA for CS229: Machine Learning',
    ],
  },
  {
    id: 5,
    type: 'education',
    title: 'B.S. in Computer Science',
    company: 'Massachusetts Institute of Technology',
    location: 'Cambridge, MA',
    period: '2015 — 2019',
    description:
      'Graduated with honors. Focused on machine learning and computational mathematics. Member of the MIT AI Club and ACM.',
    achievements: [
      'Valedictorian, Class of 2019',
      "Dean's List (6 semesters)",
      'Winner, MIT Hackathon — Health AI track',
    ],
  },
];
