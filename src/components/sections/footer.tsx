'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const updates = [
  "New: Paid bounties live in RAG Reliability season.",
  "Builder spotlight: 5 new experts this week.",
  "AMA series: 10-min lightning talks every Tuesday.",
  "Integration: Stripe Connect payouts now instant.",
  "Community: 500+ builders across 40 countries."
]

export function Footer() {
  const [currentUpdate, setCurrentUpdate] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUpdate((prev) => (prev + 1) % updates.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="bg-ink/40 backdrop-blur-sm border-t border-white/10">
      {/* Updates Ticker */}
      <div className="border-b border-white/10 py-3 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <span className="text-accent-gold font-medium whitespace-nowrap">What's new:</span>
            <motion.div 
              key={currentUpdate}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="text-white/80"
            >
              {updates[currentUpdate]}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/builders" className="block text-white/70 hover:text-white transition-colors">
                For Builders
              </Link>
              <Link href="/leads" className="block text-white/70 hover:text-white transition-colors">
                For Leads
              </Link>
              <Link href="/spotlight" className="block text-white/70 hover:text-white transition-colors">
                Spotlight
              </Link>
              <Link href="/opportunities" className="block text-white/70 hover:text-white transition-colors">
                Opportunities
              </Link>
              <Link href="/about" className="block text-white/70 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/community" className="block text-white/70 hover:text-white transition-colors">
                Community
              </Link>
            </div>
          </div>

          {/* Operational */}
          <div>
            <h3 className="font-semibold mb-4">Legal & Operations</h3>
            <div className="space-y-3">
              <Link href="/terms" className="block text-white/70 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="block text-white/70 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/creator-guidelines" className="block text-white/70 hover:text-white transition-colors">
                Creator Guidelines
              </Link>
            </div>
          </div>

          {/* Integrations */}
          <div>
            <h3 className="font-semibold mb-4">Integrations</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/70">
                <span>Stripe</span>
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span>Calendly</span>
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span>Slack</span>
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span>Discord</span>
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              </div>
            </div>
          </div>

          {/* Global Note */}
          <div>
            <h3 className="font-semibold mb-4">Global</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Vetta supports builders & teams worldwide. Multi-language voice onboarding available.
            </p>
            
            <div className="mt-6 space-y-2">
              <div className="text-sm text-white/50">
                <span className="font-medium">500+</span> builders
              </div>
              <div className="text-sm text-white/50">
                <span className="font-medium">40+</span> countries
              </div>
              <div className="text-sm text-white/50">
                <span className="font-medium">$50K+</span> paid out
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-sm">
            This isn't a job board. It's a problem-solving network with shared recognition.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-white/60">
            <span>Always direct to the person you'll actually work with.</span>
            <span>•</span>
            <span>We make you visible. You keep the freedom.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
