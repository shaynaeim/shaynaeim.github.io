export const projectDomains = [
  {
    name: 'Time Series',
    projects: [
      {
        slug: 'stock-price-forecasting',
        title: 'Stock-Price-Forecasting',
        tagline: 'LSTM and RNN models for Apple stock price forecasting',
        badges: [
          { label: 'python 3.8+', tone: 'blue' },
          { label: 'TensorFlow', tone: 'blue' },
          { label: 'Jupyter Notebook', tone: 'green' },
        ],
        description:
          'Trains **SimpleRNN**, **LSTM**, and multivariate LSTM models on historical **AAPL OHLCV** data with RSI and EMA features. Evaluates with **RMSE** on a held-out test period and supports multi-step forecasting.',
        tags: ['LSTM', 'RNN', 'Time series', 'pandas-ta', 'TensorFlow'],
        repoUrl: 'https://github.com/shaynaeim/Stock-Price-Forecasting',
      },
    ],
  },
  {
    name: 'NLP',
    projects: [
      {
        slug: 'yelp-review-sentiment-nlp',
        title: 'yelp-review-sentiment-nlp',
        tagline: 'Classify Yelp reviews as positive or negative from text',
        badges: [
          { label: 'scikit-learn', tone: 'blue' },
          { label: 'NLP', tone: 'green' },
          { label: 'Jupyter Notebook', tone: 'blue' },
        ],
        description:
          'Builds a **sentiment classifier** for Yelp reviews using **scikit-learn pipelines** for text preprocessing and modeling, focusing on clear **1-star vs 5-star** polarity.',
        tags: ['NLP', 'Sentiment analysis', 'scikit-learn', 'Text classification'],
        repoUrl: 'https://github.com/shaynaeim/yelp-review-sentiment-nlp',
      },
      {
        slug: 'real-estate-price-prediction-nlp',
        title: 'real-estate-price-prediction-NLP',
        tagline: 'Predict property prices with NLP-derived listing features',
        badges: [
          { label: 'NLP', tone: 'green' },
          { label: 'FastAPI', tone: 'blue' },
          { label: 'ML pipeline', tone: 'green' },
        ],
        description:
          'Combines structured property attributes with **NLP features** such as **noun, verb, and adjective counts** and key phrase signals from listing text to predict real-estate prices.',
        tags: ['NLP', 'Feature engineering', 'FastAPI', 'Regression'],
        repoUrl: 'https://github.com/shaynaeim/real-estate-price-prediction-NLP',
      },
    ],
  },
  {
    name: 'MLOps & Explainability',
    projects: [
      {
        slug: 'mlops-banking-classifier',
        title: 'MLOps-Project-Deploy-a-Classification-Model-AWS-',
        tagline: 'End-to-end banking classification model on AWS EKS',
        badges: [
          { label: 'python 3.11', tone: 'blue' },
          { label: 'CI/CD', tone: 'green' },
          { label: 'AWS EKS', tone: 'blue' },
        ],
        description:
          'Deploys a banking classification model with **CI/CD**, containerized serving on **EKS**, and monitoring hooks for production MLOps workflows.',
        tags: ['SHAP', 'CI/CD', 'pytest', 'Docker', 'Kubernetes'],
        repoUrl: 'https://github.com/shaynaeim/MLOps-Project-Deploy-a-Classification-Model-AWS-',
        images: [
          {
            src: 'https://raw.githubusercontent.com/shaynaeim/MLOps-Project-Deploy-a-Classification-Model-AWS-/main/assets/architecture.png',
            alt: 'AWS MLOps architecture diagram',
          },
        ],
      },
      {
        slug: 'azure-devops-cicd',
        title: 'Azure-DevOps-CI-CD-',
        tagline: 'Medallion pipeline automation for Databricks notebooks',
        badges: [
          { label: 'Azure DevOps', tone: 'blue' },
          { label: 'Databricks', tone: 'green' },
          { label: 'CI/CD', tone: 'green' },
        ],
        description:
          'Automates **Bronze → Silver → Gold** notebook promotion across dev and prod Databricks workspaces with validation gates on every merge.',
        tags: ['CI/CD', 'Databricks', 'Medallion', 'pytest'],
        repoUrl: 'https://github.com/shaynaeim/Azure-DevOps-CI-CD-',
        images: [
          {
            src: 'https://raw.githubusercontent.com/shaynaeim/Azure-DevOps-CI-CD-/main/Architecture-CICD.png',
            alt: 'Azure DevOps CI/CD architecture',
          },
          {
            src: 'https://raw.githubusercontent.com/shaynaeim/Azure-DevOps-CI-CD-/main/workflow-CICD.png',
            alt: 'Azure DevOps CI/CD workflow',
          },
        ],
      },
    ],
  },
  {
    name: 'LLM Agents & RAG',
    projects: [
      {
        slug: 'refund-agent',
        title: 'Refund-request-AI-agent-LangGraph-FAISS',
        tagline: 'Multi-agent customer-service workflow for refunds and returns',
        badges: [
          { label: 'LangGraph', tone: 'blue' },
          { label: 'FAISS', tone: 'green' },
          { label: 'Python', tone: 'blue' },
        ],
        description:
          'Supervisor agent coordinates validation, policy, and communication agents backed by **FAISS** retrieval over SOP documents and a SQLite order database.',
        tags: ['LangGraph', 'FAISS', 'Multi-agent', 'RAG'],
        repoUrl: 'https://github.com/shaynaeim/Refund-request-AI-agent-LangGraph-FAISS',
      },
      {
        slug: 'insurance-rag',
        title: 'insurance-assistant-llm-RAG',
        tagline: 'RAG assistant grounded in internal insurance knowledge',
        badges: [
          { label: 'RAG', tone: 'green' },
          { label: 'LLM', tone: 'blue' },
          { label: 'Markdown KB', tone: 'blue' },
        ],
        description:
          'Employees ask product and policy questions; answers are grounded in a markdown knowledge base with **retrieval-augmented generation** for reliable responses.',
        tags: ['RAG', 'LLM', 'Knowledge base'],
        repoUrl: 'https://github.com/shaynaeim/insurance-assistant-llm-RAG',
      },
    ],
  },
];
