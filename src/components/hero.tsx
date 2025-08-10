import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
      {/* Background with subtle parallax */}
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

      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/vetta.svg"
          alt="Vetta"
          width={180}
          height={48}
          priority
        />
      </div>

      {/* Hero content */}
      <div className="max-w-4xl text-center">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
          The Network for Builders Who Lead
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-white/90">
          Solve real problems, share the glory, and grow your influence — powered by your personal AI champion.
          <br />
          <span className="text-white/70">No résumés. No LinkedIn theatre. Just builders.</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/builders"
            className="relative group px-8 py-4 bg-accent-violet hover:bg-accent-violet/90 rounded-lg text-lg font-medium transition-colors"
          >
            <span>I'm a Builder</span>
            
            {/* Preview video on hover */}
            <div className="absolute -top-48 left-1/2 -translate-x-1/2 hidden group-hover:block">
              <video
                className="w-64 rounded-lg shadow-xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/builder-preview.mp4" type="video/mp4" />
              </video>
            </div>
          </Link>

          <Link
            href="/leads"
            className="relative group px-8 py-4 bg-accent-blue hover:bg-accent-blue/90 rounded-lg text-lg font-medium transition-colors"
          >
            <span>I Want Builders</span>
            
            {/* Preview video on hover */}
            <div className="absolute -top-48 left-1/2 -translate-x-1/2 hidden group-hover:block">
              <video
                className="w-64 rounded-lg shadow-xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/lead-preview.mp4" type="video/mp4" />
              </video>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
