interface ManagerCardProps {
  team: string
  mission: string
  stack: string[]
  constraints?: string[]
  style?: string[]
}

export function ManagerCard({ team, mission, stack, constraints = [], style = [] }: ManagerCardProps) {
  return (
    <div className="card">
      <div className="text-sm text-white/60 mb-1">Team</div>
      <div className="text-lg font-semibold mb-2">{team}</div>
      <div className="text-sm text-white/80 mb-4">{mission}</div>

      <div className="mb-3">
        <div className="text-sm text-white/60 mb-1">Stack</div>
        <div className="flex flex-wrap gap-2">
          {stack.map(s => (
            <span key={s} className="px-2 py-1 bg-white/10 rounded text-xs">{s}</span>
          ))}
        </div>
      </div>

      {constraints.length > 0 && (
        <div className="mb-3">
          <div className="text-sm text-white/60 mb-1">Constraints</div>
          <div className="flex flex-wrap gap-2">
            {constraints.map(c => (
              <span key={c} className="px-2 py-1 bg-white/10 rounded text-xs">{c}</span>
            ))}
          </div>
        </div>
      )}

      {style.length > 0 && (
        <div className="mb-2">
          <div className="text-sm text-white/60 mb-1">Collaboration style</div>
          <div className="flex flex-wrap gap-2">
            {style.map(c => (
              <span key={c} className="px-2 py-1 bg-white/10 rounded text-xs">{c}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}


