'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  animate?: boolean
}

export function Card({ children, className, glowColor = 'accent-violet', animate = true }: CardProps) {
  return (
    <motion.div
      className={cn('card-glass group', className)}
      initial={animate ? { opacity: 0, y: 20 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : false}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Glow effect */}
      <div 
        className={cn(
          'absolute -inset-px rounded-[24px] opacity-0 blur transition-opacity duration-500',
          `bg-${glowColor}`,
          'group-hover:opacity-20'
        )} 
      />

      {/* Inner highlight */}
      <div className="absolute inset-0 rounded-[24px] bg-gradient-to-b from-white/[0.08] to-transparent" />

      {/* Content */}
      <div className="relative">{children}</div>
    </motion.div>
  )
}
