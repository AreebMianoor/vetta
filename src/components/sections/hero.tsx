'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      {/* Animated background */}
      <div className="bg-gradient-animate" />

      {/* Main content */}
      <Card className="w-full max-w-5xl mx-auto p-16">
        {/* Logo */}
        <motion.div 
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-accent-violet/20 rounded-full blur-2xl animate-pulse-glow" />
            <Image
              src="/vetta_icon.svg"
              alt="Vetta"
              fill
              priority
              className="object-contain drop-shadow-2xl animate-float"
            />
          </div>
        </motion.div>

        {/* Text */}
        <div className="text-center mb-16">
          <motion.h1 
            className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Vetta — The Network for Builders Who Lead
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/80 leading-relaxed mb-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Solve real problems, share the glory, and grow your influence — powered by your personal AI champion.
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-white/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            No résumés. No LinkedIn theatre. Just builders.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/builders" className="group">
            <Button size="lg" glowColor="accent-violet">
              I'm a Builder
            </Button>
          </Link>

          <Link href="/leads" className="group">
            <Button size="lg" glowColor="accent-blue">
              I Want Builders
            </Button>
          </Link>
        </motion.div>
      </Card>
    </section>
  )
}
