"use client"

import React, { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"

let vapiClient: any

type Props = {
  onTranscript: (t: string) => void
  onComplete: (finalText: string) => void
}

export default function VoiceInput({ onTranscript, onComplete }: Props) {
  const [status, setStatus] = useState<"idle" | "connecting" | "listening" | "processing">("idle")
  const [fullTranscript, setFullTranscript] = useState("")
  const [error, setError] = useState<string>("")
  const [amp, setAmp] = useState(0.1)
  const [showAssistantInput, setShowAssistantInput] = useState(false)
  const [assistantInput, setAssistantInput] = useState("")
  const bars = useMemo(()=> Array.from({ length: 56 }, (_, i) => 0.15 + (i % 7) * 0.06), [])

  useEffect(() => {
    let mounted = true
    async function setup() {
      try {
        const mod = await import("@vapi-ai/web")
        const Vapi = (mod as any).default || (mod as any)
        const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || process.env.VITE_VAPI_PUBLIC_KEY
        if (!publicKey) { setError("Missing VAPI public key"); return }
        vapiClient = new Vapi(publicKey)

        if (!mounted) return
        vapiClient.on("call.started", () => { setStatus("listening"); setError("") })
        vapiClient.on("call.ended", () => { setStatus("idle"); onComplete(fullTranscript.trim()) })
        vapiClient.on("speech.recognized", (e: any) => {
          const text = e?.text || ""
          if (!text) return
          setFullTranscript(prev => (prev ? prev + " " : "") + text)
          onTranscript(text)
        })
        vapiClient.on("audio.level", (lvl: number) => setAmp(Math.max(0.1, Math.min(1, lvl))))
        vapiClient.on("error", (e: any) => { console.error("Vapi error", e); setError(e?.message || "Voice error"); setStatus("idle") })
      } catch (e: any) {
        console.error("Vapi init error", e)
        setError(e?.message || "Vapi init error")
      }
    }
    setup()
    return () => { mounted = false }
  }, [onTranscript, onComplete, fullTranscript])

  const resolveAssistantId = (): string | undefined => {
    const envId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || process.env.VITE_VAPI_ASSISTANT_ID
    const lsId = typeof window !== 'undefined' ? window.localStorage.getItem('vapiAssistantId') ?? undefined : undefined
    return envId || lsId
  }

  const start = async () => {
    if (!vapiClient) return
    try {
      setFullTranscript("")
      setStatus("connecting")
      if (typeof (navigator as any)?.mediaDevices?.getUserMedia === 'function') {
        await navigator.mediaDevices.getUserMedia({ audio: true })
      }

      const assistantId = resolveAssistantId()
      if (assistantId) {
        await vapiClient.start({ assistantId })
      } else {
        await vapiClient.start({
          assistant: {
            name: "Vetta Voice",
            instructions: "You are Vetta's AI champion. In ~2 minutes, guide the user to explain an interesting AI problem they've solved. Be concise and ask follow-ups if needed.",
            model: { provider: "openai", model: "gpt-4o-realtime-preview" },
            transcriber: { provider: "deepgram", model: "nova-2" },
          }
        })
      }
    } catch (e: any) {
      console.error("start failed", e)
      setError(e?.message || "Unable to start voice session.")
      if ((e?.message || "").toLowerCase().includes("assistant") || (e?.message || "").toLowerCase().includes("squad")) {
        setShowAssistantInput(true)
      }
      setStatus("idle")
    }
  }

  const stop = async () => {
    try { if (vapiClient) { setStatus("processing"); await vapiClient.stop() } } catch { setStatus("idle") }
  }

  const saveAssistant = () => {
    if (assistantInput) {
      window.localStorage.setItem('vapiAssistantId', assistantInput.trim())
      setShowAssistantInput(false)
      setError("Assistant ID saved — press Start again")
    }
  }

  return (
    <div className="glass-panel p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-white/70">
          <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">
            {status === "listening" ? "Listening" : status === "processing" ? "Processing" : status === "connecting" ? "Connecting" : "Idle"}
          </span>
          {error && <span className="ml-3 text-red-400">{error}</span>}
        </div>
        {status !== "listening" ? (
          <Button onClick={start} className="shadow-glow" variant="primary">Start</Button>
        ) : (
          <Button onClick={stop} variant="outline">Finish</Button>
        )}
      </div>

      {showAssistantInput && (
        <div className="mb-4 p-3 rounded-md bg-white/5 border border-white/10">
          <div className="text-sm text-white/70 mb-2">Paste your Vapi Assistant ID (temporary runtime setting)</div>
          <div className="flex gap-2">
            <input className="flex-1 bg-transparent border border-white/10 rounded-md px-2 py-1" value={assistantInput} onChange={(e)=>setAssistantInput(e.target.value)} placeholder="asst_..." />
            <Button size="sm" onClick={saveAssistant}>Save</Button>
          </div>
        </div>
      )}

      <div className="relative rounded-2xl border border-white/10 bg-[#0f1636]/60 overflow-hidden p-4 will-change-transform" style={{ transform: `perspective(1000px) translateZ(0) rotateX(${amp*2-1}deg)` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/10 via-brand-violet/10 to-transparent" />
        <div className="absolute -inset-20 opacity-40 blur-3xl" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(108,110,255,.35), transparent 60%)' }} />
        <div className="relative h-40 flex items-end gap-1">
          {bars.map((base, i) => (
            <div
              key={i}
              style={{ height: `${(base + amp * (0.35 + (i % 7) * 0.08)) * 100}%` }}
              className="w-2 rounded-full bg-gradient-to-t from-brand-blue to-brand-bright"
            />
          ))}
        </div>
      </div>

      {fullTranscript && (
        <div className="text-white/80 text-sm mt-4 min-h-[2.5rem]">
          {fullTranscript}
        </div>
      )}
    </div>
  )
}