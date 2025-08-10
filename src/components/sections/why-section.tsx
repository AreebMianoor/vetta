'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const comparisons = [
  {
    old: "Weeks of back-and-forth",
    new: "Matches in minutes"
  },
  {
    old: "Keywords + HR filters", 
    new: "Verified skills + communication"
  },
  {
    old: "Recruiter screens",
    new: "Direct to the person you'll work with"
  },
  {
    old: "Job titles",
    new: "Problems worth solving"
  },
  {
    old: "One-way applications",
    new: "Mutual fit & shared spotlight"
  }
]

export function WhySection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % comparisons.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Old Way vs Vetta
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Old World Column */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white/60 mb-8 text-center">
              Old World (LinkedIn/Résumés)
            </h3>
            
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-lg border transition-all duration-500 ${
                  activeIndex === index 
                    ? 'bg-red-500/10 border-red-500/30 text-white/30' 
                    : 'bg-white/5 border-white/10'
                }`}
                animate={{
                  opacity: activeIndex === index ? 0.3 : 1,
                  scale: activeIndex === index ? 0.98 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                {item.old}
              </motion.div>
            ))}
          </motion.div>

          {/* Vetta Column */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Vetta
            </h3>
            
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-lg border transition-all duration-500 ${
                  activeIndex === index 
                    ? 'bg-accent-violet/20 border-accent-violet/50 shadow-lg shadow-accent-violet/20' 
                    : 'bg-white/5 border-white/10'
                }`}
                animate={{
                  scale: activeIndex === index ? 1.02 : 1,
                  backgroundColor: activeIndex === index ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)'
                }}
                transition={{ duration: 0.5 }}
              >
                {item.new}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
