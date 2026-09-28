export const cloud = [
  { name: 'AWS EC2', label: 'CLOUD COMPUTE', detail: 'Cloud compute infrastructure.' },
  { name: 'AWS RDS', label: 'MANAGED DATABASES', detail: 'Managed relational database infrastructure.' },
  { name: 'AWS Aurora', label: 'CLOUD DATABASE', detail: 'Cloud relational database technology.' }
];
export const databaseMatrix = [
  { category: 'DATABASES', items: ['MySQL', 'PostgreSQL', 'TiDB', 'MongoDB'], context: 'Production database monitoring and performance engineering.' },
  { category: 'CLOUD DATABASES', items: ['AWS RDS', 'AWS Aurora'], context: 'Managed relational database technologies within the AWS ecosystem.' },
  { category: 'CLOUD COMPUTE', items: ['AWS EC2'], context: 'Cloud compute and infrastructure.' },
  { category: 'SYSTEMS', items: ['Linux', 'SSH', 'Docker', 'System monitoring'], context: 'Systems and infrastructure tooling used across engineering and technical experimentation.' },
  { category: 'PERFORMANCE', items: ['Query analysis', 'Execution plans', 'Replication', 'Query optimization', 'Monitoring', 'Resource analysis', 'Storage analysis'], context: 'Applied to database health, performance analysis, and production troubleshooting.' }
];
