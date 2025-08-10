export const SEEDED_BOUNTIES = [
  {
    id: 'b_001',
    title: 'RAG Evaluation Harness with 6 Metrics',
    reward_usd: 400,
    duration: '48h',
    outcome: 'Ship a production-ready RAG evaluation harness measuring relevance, faithfulness, latency, token efficiency, answer completeness, and citation accuracy.',
    stack: ['LangChain', 'PyTest', 'Pandas'],
    lead_id: 'lead_vetta',
    intro_video: '/videos/bounties/rag-eval.mp4',
    tags: ['RAG', 'evaluation', 'testing']
  },
  {
    id: 'b_002',
    title: 'Token Usage Optimization Pipeline',
    reward_usd: 300,
    duration: '24h',
    outcome: 'Reduce token usage by 30% while maintaining output quality through prompt compression and efficient chunking.',
    stack: ['OpenAI', 'TikToken', 'Python'],
    lead_id: 'lead_vetta',
    intro_video: '/videos/bounties/token-opt.mp4',
    tags: ['optimization', 'prompting', 'cost']
  },
  {
    id: 'b_003',
    title: 'GPU Cost Audit Script & Report',
    reward_usd: 350,
    duration: '36h',
    outcome: 'Create an automated script to analyze GPU usage patterns and generate cost optimization recommendations.',
    stack: ['PyTorch', 'Pandas', 'Plotly'],
    lead_id: 'lead_vetta',
    intro_video: '/videos/bounties/gpu-audit.mp4',
    tags: ['MLOps', 'cost', 'monitoring']
  },
  {
    id: 'b_004',
    title: 'Evaluation Dashboard (Next.js)',
    reward_usd: 500,
    duration: '48h',
    outcome: 'Build a responsive dashboard to visualize model performance metrics with real-time updates.',
    stack: ['Next.js', 'TailwindCSS', 'tRPC'],
    lead_id: 'lead_vetta',
    intro_video: '/videos/bounties/eval-dash.mp4',
    tags: ['frontend', 'dashboard', 'visualization']
  },
  {
    id: 'b_005',
    title: 'Prompt Compression Playground',
    reward_usd: 300,
    duration: '24h',
    outcome: 'Design an interactive tool to experiment with and optimize prompt compression techniques.',
    stack: ['React', 'OpenAI', 'Vercel'],
    lead_id: 'lead_vetta',
    intro_video: '/videos/bounties/prompt-playground.mp4',
    tags: ['prompting', 'optimization', 'UI']
  },
  {
    id: 'b_006',
    title: 'Finetuning Data Quality Checker',
    reward_usd: 350,
    duration: '36h',
    outcome: 'Create a comprehensive data validation pipeline for finetuning datasets with quality metrics.',
    stack: ['Python', 'Pandas', 'Great Expectations'],
    lead_id: 'lead_vetta',
    intro_video: '/videos/bounties/data-quality.mp4',
    tags: ['data', 'validation', 'finetuning']
  },
  {
    id: 'b_007',
    title: 'Inference Batching & Caching Layer',
    reward_usd: 450,
    duration: '48h',
    outcome: 'Implement efficient request batching and response caching for improved inference performance.',
    stack: ['FastAPI', 'Redis', 'Python'],
    lead_id: 'lead_vetta',
    intro_video: '/videos/bounties/inference-opt.mp4',
    tags: ['performance', 'caching', 'optimization']
  },
  {
    id: 'b_008',
    title: 'OpenTelemetry Tracing Hooks',
    reward_usd: 500,
    duration: '48h',
    outcome: 'Build model-agnostic tracing hooks for detailed performance and behavior monitoring.',
    stack: ['OpenTelemetry', 'Python', 'Jaeger'],
    lead_id: 'lead_vetta',
    intro_video: '/videos/bounties/tracing.mp4',
    tags: ['monitoring', 'tracing', 'observability']
  },
  {
    id: 'b_009',
    title: 'Guardrails & Red-Team Tests',
    reward_usd: 400,
    duration: '36h',
    outcome: 'Implement a starter kit for model guardrails and automated red-team testing.',
    stack: ['Python', 'NeMo-Guardrails', 'PyTest'],
    lead_id: 'lead_vetta',
    intro_video: '/videos/bounties/guardrails.mp4',
    tags: ['safety', 'testing', 'security']
  },
  {
    id: 'b_010',
    title: 'Training Collapse Debug Guide',
    reward_usd: 250,
    duration: '24h',
    outcome: 'Create a 5-minute video explainer and sample repo on debugging training collapse issues.',
    stack: ['PyTorch', 'Weights & Biases', 'GitHub'],
    lead_id: 'lead_vetta',
    intro_video: '/videos/bounties/debug-guide.mp4',
    tags: ['training', 'debugging', 'education']
  }
] as const;
