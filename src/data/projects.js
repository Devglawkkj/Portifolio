/**
 * Project portfolio data
 * Each project includes placeholder images, tech stacks, and links
 */
export const projects = [
  {
    id: 'rag-chatbot',
    title: 'Enterprise RAG Chatbot',
    description:
      'A production-grade conversational AI system using Retrieval-Augmented Generation. Built with LangChain, OpenAI embeddings, and Pinecone vector store to provide accurate, context-aware answers from enterprise documentation. Includes role-based access control, conversation history, and a custom fine-tuned LLM for domain-specific terminology.',
    techStack: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'Pinecone', 'React', 'Docker'],
    category: 'nlp',
    image: '/project-images/rag-chatbot.png',
    github: 'https://github.com/username/rag-chatbot',
    demo: 'https://rag-chatbot-demo.example.com',
    featured: true,
    outcome: '42% faster support resolution',
  },
  {
    id: 'vision-api',
    title: 'Computer Vision API',
    description:
      'A scalable computer vision microservice for real-time image classification and object detection. Built with PyTorch and FastAPI, serving models via ONNX Runtime for low-latency inference. Includes automated retraining pipeline with active learning for continuous improvement.',
    techStack: ['PyTorch', 'FastAPI', 'ONNX', 'Redis', 'Docker', 'Kubernetes', 'AWS SageMaker'],
    category: 'cv',
    image: '/project-images/vision-api.png',
    github: 'https://github.com/username/vision-api',
    demo: 'https://vision-api-docs.example.com',
    featured: true,
    outcome: '84ms p95 inference latency',
  },
  {
    id: 'rec-system',
    title: 'Real-Time Recommendation Engine',
    description:
      'A collaborative filtering recommendation system using matrix factorization and deep learning. Features real-time inference with Redis caching, A/B testing framework, and a streaming pipeline using Kafka for event processing. Deployed on GCP with autoscaling.',
    techStack: ['Python', 'TensorFlow', 'Redis', 'Kafka', 'Airflow', 'GCP', 'Docker'],
    category: 'ml',
    image: '/project-images/rec-system.png',
    github: 'https://github.com/username/rec-system',
    demo: null,
    featured: true,
    outcome: '+35% user engagement',
  },
  {
    id: 'mlops-pipeline',
    title: 'MLOps Pipeline & Orchestration',
    description:
      'End-to-end MLOps platform for orchestrating ML workflows. Includes automated model training, validation, deployment, and monitoring using MLflow, GitHub Actions, and Kubernetes. Features drift detection and automated rollback capabilities.',
    techStack: ['MLflow', 'GitHub Actions', 'Kubernetes', 'Prometheus', 'Grafana', 'Terraform'],
    category: 'mlops',
    image: '/project-images/mlops-pipeline.png',
    github: 'https://github.com/username/mlops-pipeline',
    demo: null,
    featured: true,
    outcome: '70% fewer production incidents',
  },
  {
    id: 'fine-tuning-platform',
    title: 'LLM Fine-Tuning Platform',
    description:
      'A self-service platform for fine-tuning and evaluating large language models. Supports LoRA and QLoRA parameter-efficient fine-tuning, automated evaluation with custom metrics, and A/B testing of model variants. Built for research teams.',
    techStack: ['PyTorch', 'Transformers', 'LoRA', 'Streamlit', 'MLflow', 'Weights & Biases'],
    category: 'llm',
    image: '/project-images/fine-tuning.png',
    github: 'https://github.com/username/fine-tuning-platform',
    demo: 'https://finetune-platform.example.com',
    featured: false,
    outcome: '64% fewer GPU hours',
  },
  {
    id: 'data-pipeline',
    title: 'Data Pipeline & Feature Store',
    description:
      'A robust data engineering pipeline for feature extraction and storage. Integrates with Snowflake for data warehousing, uses dbt for transformation, and provides a centralized feature store for ML model training and inference.',
    techStack: ['Python', 'Snowflake', 'dbt', 'Airflow', 'Kafka', 'Spark', 'Great Expectations'],
    category: 'mlops',
    image: '/project-images/data-pipeline.png',
    github: 'https://github.com/username/data-pipeline',
    demo: null,
    featured: false,
    outcome: '99.7% feature test coverage',
  },
];

// Project category filters
export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'nlp', label: 'NLP' },
  { id: 'cv', label: 'Computer Vision' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'llm', label: 'LLMs' },
  { id: 'mlops', label: 'MLOps' },
];
