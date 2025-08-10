'use client'

import { motion } from 'framer-motion'

export function LeadHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 py-24">
      <motion.h1
        className="text-center font-bold text-5xl md:text-7xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Builders who can lead — now.
      </motion.h1>

      <motion.p
        className="text-center text-xl md:text-2xl text-white/80 max-w-3xl mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Skip résumé spam. Describe your problem in one line, and we’ll match you to builders with verified skill and communication — direct and same‑day.
      </motion.p>

      <motion.button
        className="btn-secondary"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Post a Problem (2 minutes)
      </motion.button>
    </section>
  )
}


