'use client'

import { motion } from 'framer-motion'

export function InstantOpportunities() {
  const cards = [
    { title: 'RAG Evaluation Harness', reward: '$400', duration: '48h' },
    { title: 'Token Usage Optimization', reward: '$300', duration: '24h' },
    { title: 'GPU Cost Audit Script', reward: '$350', duration: '36h' },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Problems worth solving — right now.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              className="card card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-semibold mb-2">{c.title}</h3>
              <div className="text-sm text-white/70">Outcome-based bounty</div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-accent-gold font-medium">{c.reward}</span>
                <span className="text-white/60">{c.duration}</span>
              </div>
              <button className="mt-4 btn-primary w-full">Interested</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


