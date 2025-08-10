import { motion } from 'framer-motion'
import type { TalentCard as TalentCardType } from '@/types'

interface TalentCardProps {
  data: TalentCardType
  showActions?: boolean
  isPreview?: boolean
}

export function TalentCard({ data, showActions = true, isPreview = false }: TalentCardProps) {
  return (
    <motion.div
      className="relative bg-ink/40 backdrop-blur-sm rounded-lg p-6 border border-white/10"
      initial={isPreview ? { opacity: 0, y: 20 } : false}
      animate={isPreview ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-display text-xl font-semibold">{data.name}</h3>
          <p className="text-white/70">{data.headline}</p>
        </div>
        
        {data.highlight_clip_url && (
          <button 
            className="flex items-center gap-2 px-3 py-1.5 bg-accent-violet/10 rounded-full text-accent-violet text-sm"
            onClick={() => {/* Play clip */}}
          >
            <span className="sr-only">Play voice clip</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
            <span>20s</span>
          </button>
        )}
      </div>

      {/* Skills */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-white/50 mb-2">Skills & Evidence</h4>
        <div className="flex flex-wrap gap-2">
          {data.skills.map(skill => (
            <div
              key={skill.name}
              className="group relative px-2 py-1 bg-white/5 rounded text-sm"
            >
              {skill.name}
              
              {/* Evidence tooltip */}
              <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block w-48 p-2 bg-ink rounded text-xs">
                {skill.evidence.map(e => (
                  <div key={e} className="mb-1 last:mb-0">{e}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work style */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-white/50 mb-2">Work Style</h4>
        <div className="flex flex-wrap gap-2">
          {data.work_style.map(style => (
            <span
              key={style}
              className="px-2 py-1 bg-accent-blue/10 text-accent-blue rounded text-sm"
            >
              {style}
            </span>
          ))}
        </div>
      </div>

      {/* Communication & Location */}
      <div className="mb-4">
        <p className="text-sm text-white/70 italic">&ldquo;{data.comms_summary}&rdquo;</p>
        <p className="text-sm text-white/50 mt-2">
          {data.location} · {data.availability}
        </p>
      </div>

      {/* Actions */}
      {showActions && (
        <div className="flex gap-3 mt-6">
          <button className="flex-1 px-4 py-2 bg-accent-violet hover:bg-accent-violet/90 rounded-lg font-medium transition-colors">
            Match Me
          </button>
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg font-medium transition-colors">
            Share Spotlight
          </button>
        </div>
      )}
    </motion.div>
  )
}
