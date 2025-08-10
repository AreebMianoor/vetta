'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { VoiceInput } from '../onboarding/voice-input'

export function BuilderHero() {
  const [showOnboarding, setShowOnboarding] = useState(false)
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
      {/* Background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 35% 22%, #05050A, #07070D, #000000)',
        }}
        animate={{
          scale: [1, 1.02, 1],
          transition: { duration: 20, repeat: Infinity }
        }}
      />

      {/* Hero content */}
      <div className="max-w-4xl text-center">
        <motion.h1 
          className="font-display text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Lead. Build. Be seen.
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Skip the fluff. Show your thinking in 2 minutes and start solving real problems with teams who share the glory.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            onClick={() => setShowOnboarding(true)}
            className="px-8 py-4 bg-accent-violet hover:bg-accent-violet/90 rounded-lg text-lg font-medium transition-colors"
          >
            Get Started (2 minutes)
          </button>
        </motion.div>
      </div>

      {/* Onboarding modal */}
      <AnimatePresence>
        {showOnboarding && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-4xl bg-base rounded-xl p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Multi‑modal chooser */}
              <div className="flex gap-3 mb-6">
                <button className="btn-primary">Speak</button>
                <button className="btn-secondary">Write</button>
                <button className="btn-secondary">Drop a link</button>
              </div>

              <VoiceInput
                prompt="In 60 seconds, tell us the most interesting AI problem you've worked on."
                onComplete={(audioBlob) => {
                  // Handle recording
                  console.log('Recording complete:', audioBlob)
                }}
                onSkip={() => {
                  // Switch to text input
                  console.log('Switching to text input')
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
