'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from './ui/button'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-black/90 backdrop-blur-xl border-b border-white/10' : 'py-6'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group relative">
          {/* Logo container with glow effect */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-accent-gold/30 via-accent-violet/30 to-accent-blue/30 rounded-full blur-lg group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-slow opacity-50" />
            
            {/* Icon */}
            <div className="relative w-12 h-12">
              <Image 
                src="/vetta_icon.svg" 
                alt="Vetta" 
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Logotype */}
          <div className="relative h-8">
            <Image 
              src="/vetta_logotype.svg" 
              alt="Vetta" 
              width={120}
              height={32}
              className="object-contain brightness-200"
            />
            {/* Subtle gradient underline that appears on hover */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          <Link 
            href="/builders"
            className="text-lg text-white hover:text-accent-gold transition-colors font-medium relative group"
          >
            For Builders
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>
          <Link 
            href="/leads"
            className="text-lg text-white hover:text-accent-gold transition-colors font-medium relative group"
          >
            For Tech Leads
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>
          <Link 
            href="/about"
            className="text-lg text-white hover:text-accent-gold transition-colors font-medium relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="default"
            className="text-white hover:text-accent-gold transition-colors"
          >
            Log in
          </Button>
          <Button 
            variant="gold" 
            size="default"
            className="shadow-glow-gold"
          >
            Get Started
          </Button>
        </div>
      </div>
    </motion.header>
  )
}