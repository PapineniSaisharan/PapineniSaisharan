export type Project = {
  title: string; category: string; status: string; summary: string; problem: string;
  approach: string; technologies: string[]; implementation: string[]; results?: string[];
  datasets?: string[]; href: string;
};

export const projects: Project[] = [
  {
    title: 'Cross-Domain Threat Detection: XAI and Ensemble ML for IIoT and Darknet Scenarios',
    category: 'Research project · IEEE ICDDS 2025', status: 'Peer-reviewed research',
    summary: 'A cross-domain intrusion-detection study using machine learning, deep learning, ensemble methods, and explainability across IIoT and Darknet traffic.',
    problem: 'Investigate threat detection across two distinct traffic domains and make model behavior more interpretable.',
    approach: 'Preprocess data, engineer features, develop and evaluate ML/DL and ensemble models, then inspect predictions with SHAP and LIME.',
    technologies: ['Python', 'Jupyter Notebook', 'Machine learning', 'Deep learning', 'Ensemble models', 'SHAP', 'LIME'],
    datasets: ['CIC-APT-IIoT-2024', 'CIC-Darknet2020'],
    implementation: ['Separate notebooks cover the IIoT and Darknet datasets.', 'LIME visualizations are included for ensemble predictions and XGBoost predictions.'],
    results: ['Reported accuracy: 99% on CIC-APT-IIoT-2024 and 98% on CIC-Darknet2020.'],
    href: 'https://github.com/PapineniSaisharan/Cross-Domain-Threat-Detection-XAI-and-Ensemble-ML-for-IIoT-and-Darknet-Scenarios',
  },
  {
    title: 'Keylogger Detection Using Machine Learning', category: 'Personal project · Security research', status: 'Machine learning project',
    summary: 'A machine-learning approach to identifying keylogger behavior using a public dataset and classification models including Random Forest and K-Nearest Neighbors.',
    problem: 'Explore whether behavioral features can distinguish keylogger activity from other activity.',
    approach: 'Analyze keystroke timing and frequency, monitor system processes, and identify behavior patterns associated with keylogging.',
    technologies: ['Python', 'Jupyter Notebook', 'Random Forest', 'K-Nearest Neighbors'],
    datasets: ['Keylogger Detection Dataset'],
    implementation: ['A Jupyter notebook explores the detection workflow.', 'Demonstration scripts illustrate keylogger behavior in a controlled research context.'],
    results: ['Reported accuracy: 97% for Random Forest and 97% for K-Nearest Neighbors.'],
    href: 'https://github.com/PapineniSaisharan/Major-Project-Detect-Keylogger-using-Machine-learning',
  }
];
