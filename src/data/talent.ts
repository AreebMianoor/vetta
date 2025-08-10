import { TalentCard } from '@/types'

export const TALENT: TalentCard[] = [
  {
    id: 'tc_alex',
    name: 'Alex K.',
    headline: 'RAG Optimization • Eval harnesses',
    skills: [
      { name: 'RAG', evidence: ['clip:22s@rag'] },
      { name: 'Evals', evidence: ['repo:rag-eval'] },
      { name: 'LLMOps', evidence: [] },
    ],
    work_style: ['clear explainer', 'fast-iterating'],
    comms_summary: 'Concise, structured, empathetic.',
    highlight_clip_url: '#',
    location: 'Remote',
    availability: '10–20 hrs/wk',
    preferences: { modes: ['bounty', 'collab'], domains: ['RAG', 'Evals'] },
    spotlight_url: '#',
    stripe_connected: true,
  },
  {
    id: 'tc_sarah',
    name: 'Sarah M.',
    headline: 'LLMOps • Token efficiency',
    skills: [
      { name: 'LLMOps', evidence: ['clip:18s@llmops'] },
      { name: 'Evals', evidence: [] },
    ],
    work_style: ['docs-first', 'async-friendly'],
    comms_summary: 'Clear and practical; strong with non-tech stakeholders.',
    highlight_clip_url: '#',
    location: 'Remote',
    availability: '20–30 hrs/wk',
    preferences: { modes: ['bounty', 'contract'], domains: ['LLMOps'] },
    spotlight_url: '#',
    stripe_connected: true,
  },
]
