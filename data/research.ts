export const research = {
  status: 'Published research',
  summary: 'Cross-domain intrusion-detection research across IIoT and Darknet traffic, with model evaluation and explainable AI.',
  profileListedCurrent: {
    title: 'Cross-Chip Malware Sense',
    status: 'Exploratory research direction',
    question: 'Zero-shot IoT malware detection from resource telemetry — why does it break across architectures?',
    topics: ['IoT security', 'Malware detection', 'Zero-shot learning', 'Resource telemetry', 'Cross-architecture ML']
  },
  topics: [
    { name: 'XAI', detail: 'SHAP and LIME support model interpretation and feature-importance analysis.' },
    { name: 'THREAT DETECTION', detail: 'Machine-learning-based intrusion detection across two traffic datasets.' },
    { name: 'IIoT', detail: 'CIC-APT-IIoT-2024 is one of the two datasets used in the study.' },
    { name: 'DARKNET', detail: 'CIC-Darknet2020 is the second dataset used in the study.' },
    { name: 'MACHINE LEARNING', detail: 'Machine-learning and deep-learning models were implemented and evaluated.' },
    { name: 'ENSEMBLES', detail: 'Ensemble methods combine model predictions; explainability tools help interpret selected results.' },
    { name: 'CROSS-CHIP', detail: 'This direction explores why zero-shot IoT malware detection from resource telemetry can break across architectures.' },
    { name: 'ZERO-SHOT', detail: 'Zero-shot learning offers a way to explore detection across architectures without retraining for each one.' },
    { name: 'TELEMETRY', detail: 'Resource telemetry offers signals for comparing device behavior across chip architectures.' }
  ],
  workflow: ['Datasets', 'Preprocessing', 'Feature engineering', 'ML / DL', 'Ensemble methods', 'Evaluation', 'SHAP / LIME', 'Interpretation']
};
