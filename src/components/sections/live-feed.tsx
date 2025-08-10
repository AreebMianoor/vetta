'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

// Using our seeded bounties data
const opportunities = [
  {
    id: "op_001",
    title: "RAG Eval Harness (6 metrics)",
    reward: 400,
    duration: "48h",
    outcome: "Ship harness + dashboard + sample dataset",
    lead: {
      name: "Maya Chen",
      role: "CTO",
      company: "Stealth AI Startup"
    },
    tags: ["RAG", "evaluation", "testing"],
    intro_video: "/videos/bounties/rag-eval.mp4"
  },
  {
    id: "op_002", 
    title: "Token Usage Optimization",
    reward: 300,
    duration: "24h",
    outcome: "Reduce costs 30% while maintaining quality",
    lead: {
      name: "Alex Rivera",
      role: "Founder",
      company: "DataFlow Inc"
    },
    tags: ["optimization", "cost", "prompting"],
    intro_video: "/videos/bounties/token-opt.mp4"
  },
  {
    id: "op_003",
    title: "GPU Cost Audit & Report", 
    reward: 350,
    duration: "36h",
    outcome: "Automated analysis + recommendations",
    lead: {
      name: "Jordan Kim",
      role: "VP Engineering", 
      company: "ModelOps"
    },
    tags: ["MLOps", "monitoring", "cost"],
    intro_video: "/videos/bounties/gpu-audit.mp4"
  }
]

const spotlights = [
  {
    id: "sp_001",
    name: "Alex Chen",
    headline: "LLMOps engineer | ships evals and RAG infra",
    highlight: "Built a RAG evaluation framework that caught 85% more edge cases than traditional metrics. The key insight: semantic similarity alone isn't enough—you need factual consistency + context relevance.",
    skills: ["RAG", "LLMOps", "Evaluation"],
    spotlight_url: "/spotlight/alex-chen",
    clip_duration: "22s"
  },
  {
    id: "sp_002", 
    name: "Sam Rodriguez",
    headline: "ML Infrastructure | 0→1 MLOps at scale",
    highlight: "Reduced model serving costs by 60% using intelligent batching and caching. The trick: predicting request patterns and pre-computing popular inference paths.",
    skills: ["MLOps", "Performance", "Infrastructure"],
    spotlight_url: "/spotlight/sam-rodriguez", 
    clip_duration: "18s"
  },
  {
    id: "sp_003",
    name: "Riley Patel",
    headline: "AI Safety & Alignment researcher",
    highlight: "Developed a novel approach to red-team testing that finds failure modes 3x faster. Using adversarial prompting with semantic constraints to maintain realistic attack vectors.",
    skills: ["AI Safety", "Red-teaming", "Research"],
    spotlight_url: "/spotlight/riley-patel",
    clip_duration: "25s"
  }
]

export function LiveFeed() {
  const [activeTab, setActiveTab] = useState<'opportunities' | 'spotlights'>('opportunities')

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Live Feed
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-ink/40 backdrop-blur-sm rounded-lg p-1 border border-white/10">
            <button
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'opportunities'
                  ? 'bg-accent-violet text-white'
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setActiveTab('opportunities')}
            >
              Opportunities
            </button>
            <button
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'spotlights'
                  ? 'bg-accent-violet text-white'
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setActiveTab('spotlights')}
            >
              Spotlights
            </button>
          </div>
        </div>

        {/* Feed Content */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {activeTab === 'opportunities' ? (
            opportunities.map((opportunity) => (
              <motion.div
                key={opportunity.id}
                className="bg-ink/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-accent-violet/30 transition-all"
                whileHover={{ scale: 1.02 }}
              >
                {/* Video Preview */}
                <div className="relative mb-4 aspect-video bg-base/50 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-12 h-12 bg-accent-violet/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent-violet/30 transition-colors">
                      <svg className="w-5 h-5 text-accent-violet ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 rounded text-xs">
                    30s intro
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2">{opportunity.title}</h3>
                <p className="text-white/70 text-sm mb-3">{opportunity.outcome}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-accent-gold font-semibold">${opportunity.reward}</span>
                  <span className="text-white/60 text-sm">{opportunity.duration}</span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-accent-violet/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">
                      {opportunity.lead.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">{opportunity.lead.name}</div>
                    <div className="text-white/60">{opportunity.lead.role}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {opportunity.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-accent-blue/20 text-accent-blue text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            spotlights.map((spotlight) => (
              <motion.div
                key={spotlight.id}
                className="bg-ink/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-accent-violet/30 transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent-violet/20 rounded-full flex items-center justify-center">
                    <span className="font-medium">
                      {spotlight.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{spotlight.name}</h3>
                    <p className="text-sm text-white/70">{spotlight.headline}</p>
                  </div>
                  <button className="flex items-center gap-1 px-2 py-1 bg-accent-violet/20 text-accent-violet text-xs rounded-full">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                    {spotlight.clip_duration}
                  </button>
                </div>

                <blockquote className="text-sm text-white/80 italic mb-4 border-l-2 border-accent-violet/30 pl-3">
                  "{spotlight.highlight}"
                </blockquote>

                <div className="flex flex-wrap gap-2 mb-4">
                  {spotlight.skills.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>

                <Link 
                  href={spotlight.spotlight_url}
                  className="text-accent-violet text-sm hover:underline"
                >
                  View full spotlight →
                </Link>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            href="/builders"
            className="px-8 py-4 bg-accent-violet hover:bg-accent-violet/90 rounded-lg font-medium transition-all hover:scale-[1.02]"
          >
            Builders: Start in 2 minutes
          </Link>
          <Link
            href="/leads"
            className="px-8 py-4 bg-accent-blue hover:bg-accent-blue/90 rounded-lg font-medium transition-all hover:scale-[1.02]"
          >
            Leads: Post a problem now
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
