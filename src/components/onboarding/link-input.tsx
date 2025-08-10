'use client'

import { useState } from 'react'

interface LinkInputProps {
  prompt: string
  onComplete: (url: string) => void
}

export function LinkInput({ prompt, onComplete }: LinkInputProps) {
  const [url, setUrl] = useState('')

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-3 text-white/80">{prompt}</div>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-3 rounded-lg bg-ink/40 border border-white/10 outline-none"
        placeholder="https://github.com/you/repo or https://x.com/you/status/..."
      />
      <div className="flex justify-end mt-3">
        <button className="btn-primary" onClick={() => onComplete(url)}>Continue</button>
      </div>
    </div>
  )
}


