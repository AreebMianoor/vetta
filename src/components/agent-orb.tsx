'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function AgentOrb() {
  const [state, setState] = useState<'idle' | 'listening' | 'matching'>('idle')
  const [showTooltip, setShowTooltip] = useState(true)
  
  return (
    <motion.div 
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full right-0 mb-4 px-4 py-2 card-glass text-sm whitespace-nowrap"
          >
            Start by speaking. It's faster and shows your clarity.
            <div className="absolute bottom-0 right-4 w-2 h-2 bg-white/10 rotate-45 translate-y-1/2" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Orb */}
      <button
        onClick={() => {
          setState('listening')
          setShowTooltip(false)
        }}
        className="group relative"
      >
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-accent-violet/20 blur-xl animate-pulse-glow" />
        
        {/* Glass container */}
        <motion.div 
          className="relative w-14 h-14 card-glass flex items-center justify-center overflow-hidden"
          style={{ borderRadius: state === 'listening' ? '25%' : '50%' }}
          transition={{ duration: 0.5 }}
        >
          {/* Core orb */}
          <motion.div 
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-violet to-accent-blue"
            animate={state === 'idle' ? 'breathe' : state === 'listening' ? 'wave' : 'pulse'}
            variants={{
              breathe: {
                scale: [1, 1.1, 1],
                transition: { duration: 4, repeat: Infinity }
              },
              wave: {
                scaleY: [1, 0.5, 1],
                transition: { duration: 1.5, repeat: Infinity }
              },
              pulse: {
                opacity: [1, 0.5, 1],
                scale: [1, 1.1, 1],
                transition: { duration: 2, repeat: Infinity }
              }
            }}
          />

          {/* Waveform when listening */}
          {state === 'listening' && (
            <div className="absolute inset-0 flex items-center justify-center gap-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-0.5 h-4 bg-white/40 rounded-full"
                  animate={{
                    scaleY: [0.2, 1, 0.2],
                    transition: { 
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1
                    }
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      </button>
    </motion.div>
  )
}