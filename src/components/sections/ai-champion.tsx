'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const championFeatures = [
  {
    title: "Promote",
    description: "Turns your wins into posts, clips, and features across the right communities and socials.",
    icon: "📢",
    demo: {
      title: "Auto-generating your win post",
      content: "🚀 Just shipped a RAG eval harness that cut false positives by 60%!\n\nKey insights:\n• Semantic similarity alone isn't enough\n• Context relevance + factual accuracy = winning combo\n• Open sourcing the evaluation framework\n\n#LLMOps #RAG #AIBuilder"
    }
  },
  {
    title: "Match", 
    description: "Scans problems and people to surface mutual-fit connections — no noise, no gatekeepers.",
    icon: "🎯",
    demo: {
      title: "Finding your perfect match",
      content: "New match found!\n\n🏢 Stealth AI Startup\n💡 Need: RAG optimization expert\n💰 Budget: $2-5K for 2-week sprint\n⚡ Why you: Your eval framework + performance optimization background\n\n✨ 94% compatibility score"
    }
  },
  {
    title: "Amplify",
    description: "Secures AMAs, podcasts, and collabs that grow your influence and attract future opportunities.",
    icon: "📈",
    demo: {
      title: "Booking your next opportunity",
      content: "🎙️ Podcast invite secured!\n\n\"The MLOps Show\" wants you as a guest\nTopic: \"RAG Evaluation in Production\"\nAudience: 50K+ ML engineers\nScheduled: Next Thursday 2pm PT\n\n🎯 This aligns with your expertise and growth goals"
    }
  }
]

export function AIChampion() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="py-24 px-4 bg-ink/20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your personal AI champion — always on.
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Voice is encouraged, not required. <span className="text-accent-violet">Profiles with a voice snippet are surfaced more often</span> (richer signal).
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feature Cards */}
          <div className="space-y-4">
            {championFeatures.map((feature, index) => (
              <motion.button
                key={index}
                className={`w-full text-left p-6 rounded-xl border transition-all ${
                  activeFeature === index
                    ? 'bg-accent-violet/10 border-accent-violet/30'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Demo Panel */}
          <motion.div 
            className="lg:sticky lg:top-8"
            key={activeFeature}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-ink/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-medium mb-4 text-accent-violet">
                {championFeatures[activeFeature].demo.title}
              </h4>
              
              <div className="bg-base/50 rounded-lg p-4 font-mono text-sm">
                <pre className="whitespace-pre-wrap text-white/90">
                  {championFeatures[activeFeature].demo.content}
                </pre>
              </div>

              {/* Typing indicator */}
              <motion.div 
                className="flex items-center gap-2 mt-4 text-sm text-white/60"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span>Your AI champion is working...</span>
                <div className="flex gap-1">
                  {[0, 1, 2].map(i => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 bg-accent-violet rounded-full"
                      animate={{ 
                        scale: [0.5, 1, 0.5],
                        transition: {
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2
                        }
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
