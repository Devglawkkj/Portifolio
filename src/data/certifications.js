/**
 * Publications and certifications data
 */
export const publications = [
  {
    id: 1,
    title: 'Efficient Fine-Tuning Methods for Low-Resource NLP Tasks',
    venue: 'NeurIPS Workshop on Efficient Natural Language Understanding',
    year: '2021',
    type: 'publication',
    description:
      'Proposed adapter-based fine-tuning approaches that reduce parameter updates by up to 90% while maintaining performance on low-resource tasks.',
    link: 'https://arxiv.org/abs/2106.09680',
  },
  {
    id: 2,
    title: 'Real-Time Anomaly Detection in Streaming Data',
    venue: 'KDD Workshop on Advanced Analytics and Learning',
    year: '2020',
    type: 'publication',
    description:
      'Developed a novel ensemble method combining isolation forests with LSTM-based detectors for real-time anomaly detection in distributed systems.',
    link: 'https://doi.org/10.1145/3400626.3401901',
  },
  {
    id: 3,
    title: 'Scaling Recommender Systems to Billion-Scale Data',
    venue: 'Internal Tech Report, DataFlow Analytics',
    year: '2022',
    type: 'report',
    description:
      'Technical report on practical considerations and optimizations for deploying collaborative filtering at production scale.',
    link: null,
  },
];

export const certifications = [
  {
    id: 1,
    name: 'AWS Certified Machine Learning – Specialty',
    issuer: 'Amazon Web Services',
    date: '2022',
    badge: '🏆',
  },
  {
    id: 2,
    name: 'DeepLearning.AI TensorFlow Developer Certification',
    issuer: 'DeepLearning.AI',
    date: '2021',
    badge: '🏆',
  },
  {
    id: 3,
    name: 'Google Cloud Professional Machine Learning Engineer',
    issuer: 'Google Cloud',
    date: '2021',
    badge: '🏆',
  },
  {
    id: 4,
    name: 'Hugging Face NLP Course Certification',
    issuer: 'Hugging Face',
    date: '2020',
    badge: '🏆',
  },
  {
    id: 5,
    name: 'CS50: Introduction to Computer Science',
    issuer: 'Harvard University',
    date: '2016',
    badge: '🏆',
  },
];

export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
];
