'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import VoiceInput from '@/components/onboarding/voice-input'
import { TALENT } from '@/data/talent'

export default function Home() {
  const [demoState, setDemoState] = useState<'idle' | 'builder' | 'lead'>('idle')
  const [feedTab, setFeedTab] = useState<'opps' | 'spots'>('opps')
  const [liveText, setLiveText] = useState('')
  const [finalText, setFinalText] = useState('')

  const matches = useMemo(() => {
    const text = (finalText || liveText).toLowerCase()
    const score = (card: any) => {
      let s = 0
      if (text.includes('rag')) s += card.skills.some((x: any)=> x.name.toLowerCase()==='rag') ? 2 : 0
      if (text.includes('eval')) s += card.skills.some((x: any)=> x.name.toLowerCase()==='evals') ? 2 : 0
      if (text.includes('token') || text.includes('cost')) s += card.headline.toLowerCase().includes('token') ? 2 : 0
      if (text.length>120) s+=1
      return s
    }
    return TALENT.map(t => ({ t, s: score(t) })).filter(x => x.s > 0).sort((a,b)=> b.s - a.s).slice(0,3)
  }, [liveText, finalText])

  const metrics = useMemo(() => {
    const text = finalText || ''
    return {
      lengthSec: Math.max(20, Math.min(120, Math.floor(text.length / 9))),
      reasoning: Math.min(100, 40 + Math.floor(text.split(/because|so|therefore|so that|thus/i).length * 8)),
      clarity: Math.min(100, 40 + Math.floor(text.split(/[.,]/).length * 3)),
      structure: Math.min(100, 30 + Math.floor(text.split(/\n|\r/).length * 10)),
    }
  }, [finalText])

  return (
    <>
      <Header />
      <main className="relative">
        {/* HERO */}
        <section className="relative pt-32 pb-16">
          <div className="container-tight">
            <div className="relative grid lg:grid-cols-2 gap-20 items-center">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hero-beams" />

              {/* Left: Copy */}
              <div className="space-y-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-xl">
                  <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-bright opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-brand-bright" /></span>
                  <span className="text-brand-bright font-medium text-sm">Now in Private Beta</span>
                </div>

                <div className="space-y-6">
                  <h1 className="headline-glow font-display font-bold leading-[1.02] text-[44px] md:text-[72px] lg:text-[84px]">
                    The Network for
                    <br />
                    <span className="text-gradient-blue">Builders Who Lead</span>
                  </h1>
                  <p className="text-white/75 text-xl max-w-2xl">Solve real problems, share the glory, and grow your influence — powered by your personal AI champion. No résumés. No LinkedIn theatre. Just builders.</p>
                </div>

                <div className="segmented">
                  <button className={`segmented-btn ${demoState === 'builder' ? 'segmented-active' : 'text-white/80 hover:text-white'}`} onClick={() => { setFinalText(''); setLiveText(''); setDemoState('builder') }}>I'm a Builder</button>
                  <button className={`segmented-btn ${demoState === 'lead' ? 'segmented-active' : 'text-white/80 hover:text-white'}`} onClick={() => { setFinalText(''); setLiveText(''); setDemoState('lead') }}>I Want Builders</button>
                </div>

                <div className="flex flex-wrap gap-8">
                  {['No recruiters', 'Direct to decision makers', 'Paid for real problems'].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-white/65 text-lg">
                      <svg className="w-5 h-5 text-brand-bright" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Interactive Panel */}
              <div className="relative w-full max-w-2xl justify-self-end">
                <motion.div className="absolute -inset-6 rounded-[28px] bg-gradient-to-r from-brand-blue/25 via-brand-violet/25 to-brand-bright/25 blur-2xl" initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} />
                <motion.div className="relative glass-deep p-12 overflow-hidden" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                  <AnimatePresence mode="wait">
                    {demoState === 'idle' && (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center space-y-4">
                        <div className="relative w-24 h-24 mx-auto">
                          <Image src="/vetta_icon.svg" alt="Vetta" fill className="object-contain" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gradient-blue">Show Your Thinking</h3>
                        <p className="text-white/70">Speak for ~2 minutes. See your card and matches appear instantly.</p>
                      </motion.div>
                    )}

                    {demoState === 'builder' && (
                      <motion.div key="builder" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} className="space-y-6">
                        <VoiceInput onTranscript={(t)=> setLiveText(prev => prev ? prev + ' ' + t : t)} onComplete={setFinalText} />
                        <div className="glass-panel p-4">
                          <div className="text-sm text-white/60 mb-2">Your Talent Card (preview)</div>
                          <div className="flex flex-wrap gap-2">
                            {((finalText || liveText).match(/rag|retrieval/i) ? ['RAG','Evals'] : ['LLMOps']).map((t)=> (
                              <span key={t} className="px-2 py-1 rounded-full bg-white/10 text-sm">{t}</span>
                            ))}
                          </div>
                          <div className="mt-3 text-white/80">Style: {(finalText || liveText).length > 120 ? 'clear explainer' : 'concise'}</div>
                        </div>

                        {finalText && (
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="glass-panel p-4"><div className="text-sm text-white/60">Reasoning</div><div className="text-2xl font-semibold">{metrics.reasoning}%</div></div>
                            <div className="glass-panel p-4"><div className="text-sm text-white/60">Clarity</div><div className="text-2xl font-semibold">{metrics.clarity}%</div></div>
                            <div className="glass-panel p-4"><div className="text-sm text-white/60">Structure</div><div className="text-2xl font-semibold">{metrics.structure}%</div></div>
                          </div>
                        )}

                        <div className="glass-panel p-4">
                          <div className="text-sm text-white/60 mb-2">Instant matches</div>
                          {matches.length ? (
                            <div className="space-y-2">
                              {matches.map(({t}) => (
                                <div key={t.id} className="flex items-center justify-between bg-white/5 rounded-md p-2 text-sm">
                                  <div>
                                    <div className="font-medium">{t.name}</div>
                                    <div className="text-white/60">{t.headline}</div>
                                  </div>
                                  <Button size="sm" variant="outline">Invite</Button>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-white/60 text-sm">Speak about RAG / Evals / Token usage to see matches…</div>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {demoState === 'lead' && (
                      <motion.div key="lead" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} className="space-y-6">
                        <VoiceInput onTranscript={(t)=> setLiveText(prev => prev ? prev + ' ' + t : t)} onComplete={setFinalText} />
                        <div className="glass-panel p-4">
                          <div className="text-sm text-white/60 mb-2">Instant shortlist</div>
                          <div className="space-y-2">
                            {['Alex — RAG Optimization','Sarah — LLMOps + Eval'].map((m)=> (
                              <div key={m} className="flex items-center justify-between bg-white/5 rounded-md p-2 text-sm">
                                <span>{m}</span>
                                <Button size="sm" variant="outline">Invite</Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>

            <div className="mt-16 flex items-center gap-3">
              <span className="eyebrow"><span className="eyebrow-dot" /> Next: Your AI Champion</span>
              <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
            </div>
          </div>
        </section>

        {/* AI CHAMPION — INTRO */}
        <section className="py-24">
          <div className="container-tight grid lg:grid-cols-2 gap-20 items-start">
            <div className="flex flex-col items-center gap-8">
              <div className="ai-orb" />
              <div className="channel-grid">{['X / LinkedIn','Discord / Slack','Podcasts','Newsletters','AMAs','VC intros','Communities','Spotlights'].map((c)=> (<span key={c} className="orbit-chip text-white/80">{c}</span>))}</div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="step-badge">1</div>
                <div>
                  <h2 className="text-5xl font-display font-bold">A pro agent that builds your reputation while you build.</h2>
                  <p className="text-white/80 text-lg max-w-3xl mt-2">We treat top builders like athletes. Your agent promotes wins, secures stages, and brings the right problems to you. For teams, it amplifies your tech and attracts elite builders.</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Button variant="primary" className="h-12 px-8 text-base">Start in 2 minutes</Button>
                <span className="cta-tag">for builders</span>
                <div className="rule-v h-6" />
                <Button variant="outline" className="h-12 px-8 text-base">Post a problem</Button>
                <span className="cta-tag">for teams</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROMOTE BAND */}
        <section className="py-24 border-t border-white/10/5">
          <div className="container-tight grid lg:grid-cols-2 gap-14 items-start">
            <div className="flex items-start gap-4">
              <div className="step-badge">2</div>
              <div>
                <h3 className="text-4xl font-display font-bold">Promote — make your work impossible to ignore.</h3>
                <p className="text-white/75 text-lg max-w-2xl">Your agent turns wins into posts, clips, and features across the channels where builders lead. You approve — it publishes.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass-panel p-6 text-sm">Viral post → <span className="text-brand-bright">“Shipped RAG eval harness — 6 metrics.”</span></div>
              <div className="glass-panel p-6 text-sm">Clip 22s highlight → auto‑caption for X/LinkedIn</div>
              <div className="glass-panel p-6 text-sm">Newsletter pitch queued → <span className="text-brand-bright">AI Builders Weekly</span></div>
              <div className="glass-panel p-6 text-sm">AMA slot held for Thu 6pm → <span className="text-white/60">Approve schedule</span></div>
            </div>
          </div>
        </section>

        {/* MATCH BAND */}
        <section className="py-24 border-t border-white/10/5">
          <div className="container-tight grid lg:grid-cols-2 gap-14 items-start">
            <div className="flex items-start gap-4">
              <div className="step-badge">3</div>
              <div>
                <h3 className="text-4xl font-display font-bold">Match — problems worth solving, today.</h3>
                <p className="text-white/75 text-lg max-w-2xl">Voice shows how you think. We match on real signal: reasoning and clarity. Start with scoped paid trials; convert to ongoing work when it clicks.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass-panel p-6 text-sm flex items-center justify-between"><span>3 instant matches</span><Button size="sm" variant="primary">View</Button></div>
              <div className="glass-panel p-6 text-sm">Why match → <span className="text-brand-bright">Prompt tooling + eval experience</span></div>
              <div className="glass-panel p-6 text-sm">Team fit → async, docs‑first, shared spotlight</div>
              <div className="glass-panel p-6 text-sm">Start today → paid trial (48–72h)</div>
            </div>
          </div>
        </section>

        {/* AMPLIFY BAND */}
        <section className="py-24 border-t border-white/10/5">
          <div className="container-tight grid lg:grid-cols-2 gap-14 items-start">
            <div className="flex items-start gap-4">
              <div className="step-badge">4</div>
              <div>
                <h3 className="text-4xl font-display font-bold">Amplify — grow your audience & attract opportunities.</h3>
                <p className="text-white/75 text-lg max-w-2xl">Your agent books podcasts, AMAs, and collabs; shares spotlights to curated communities; and introduces you to mentors, mentees, and VCs — when the signal is strong.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass-panel p-6 text-sm">Podcast / AMA pitches queued</div>
              <div className="glass-panel p-6 text-sm">Share to communities (opt‑in) → curated Discord/Slack</div>
              <div className="glass-panel p-6 text-sm">VC intros when your work resonates — never spam</div>
              <div className="glass-panel p-6 text-sm">Mentee queue from AMAs → approve in one click</div>
            </div>
          </div>
        </section>

        {/* WHY WE EXIST */}
        <section className="py-24 border-t border-white/10/5">
          <div className="container-tight">
            <div className="mb-10">
              <h2 className="text-5xl font-display font-bold mb-3">The Old Way vs Vetta</h2>
              <p className="text-white/70 max-w-3xl text-lg">Old world fades. Vetta glows. Watch the signal replace theatre.</p>
            </div>
            {[['Weeks of back‑and‑forth','Matches in minutes'],['Keywords + HR filters','Verified skills + communication'],['Recruiter screens','Direct to the person you’ll work with'],['Job titles','Problems worth solving'],['One‑way applications','Mutual fit & shared spotlight']].map(([oldItem,newItem])=> (
              <motion.div key={oldItem} initial={{opacity:0,y:6}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="compare-row">
                <div className="flex-1 glass-panel px-6 py-4 compare-old">✕ {oldItem}</div>
                <div className="w-24 relative"><div className="connection-line top-1/2 -translate-y-1/2 left-0 right-0" /></div>
                <div className="flex-1 glass-panel px-6 py-4 compare-new">✓ <span className="text-white/95">{newItem}</span></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* LIVE FEED */}
        <section className="py-24 border-t border-white/10/5">
          <div className="container-tight">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <h2 className="text-5xl font-display font-bold">Live Feed</h2>
                <p className="text-white/70 mt-2">Real briefs and real spotlights from the network. Small, scoped, and designed for speed — not job-board fluff.</p>
              </div>
              <div className="segmented"><button onClick={()=>setFeedTab('opps')} className={`segmented-btn ${feedTab==='opps'?'segmented-active':'text-white/80 hover:text-white'}`}>Opportunities</button><button onClick={()=>setFeedTab('spots')} className={`segmented-btn ${feedTab==='spots'?'segmented-active':'text-white/80 hover:text-white'}`}>Spotlights</button></div>
            </div>

            {feedTab==='opps' ? (
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { t: 'RAG Evaluation Harness', reward: '$400', window: '48h', tags: ['RAG','Evals'], faces: ['A','S','M'] },
                  { t: 'Token Usage Optimization', reward: '$300', window: '24h', tags: ['LLMOps'], faces: ['J','R'] },
                  { t: 'Prompt Robustness Tests', reward: '$500', window: '72h', tags: ['Eval'], faces: ['K','N','T'] },
                ].map((o)=> (
                  <motion.div key={o.t} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="glass-panel card-hover p-0">
                    <div className="p-6 flex items-center justify-between">
                      <div className="pill">{o.tags.join(' / ')}</div>
                      <div className="text-white/60 text-sm">{o.window}</div>
                    </div>
                    <div className="px-6 pb-4">
                      <div className="font-semibold text-lg mb-2">{o.t}</div>
                      <div className="text-white/70 text-sm mb-4">Small, scoped brief to ship this week.</div>
                    </div>
                    <div className="px-6 pb-6 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="reward">{o.reward}</div>
                        <div className="facepile">
                          {o.faces.map((f)=>(<span key={f} className="bg-white/10 text-[10px] flex items-center justify-center">{f}</span>))}
                        </div>
                      </div>
                      <Button variant="primary" size="sm">Start</Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { n:'A. Khan', clip:'20s', skills:['RAG','LLMOps','Evals'] },
                  { n:'S. Mehta', clip:'18s', skills:['Prompting','Eval'] },
                  { n:'J. Chen', clip:'22s', skills:['MLOps','Tracing'] },
                ].map((s)=> (
                  <motion.div key={s.n} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="glass-panel card-hover p-0">
                    <div className="video-thumb">
                      <div className="play-btn">▶</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3"><div className="font-medium">{s.n}</div><div className="pill">{s.clip}</div></div>
                      <div className="flex flex-wrap gap-2 mb-2">{s.skills.map((sk)=> (<span key={sk} className="px-2 py-1 rounded-full bg-white/5 text-sm text-white/80">{sk}</span>))}</div>
                      <div className="text-white/60 text-sm">Top clip: “I debug token spikes by…“</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="mt-12 flex flex-wrap gap-4"><Button variant="primary" className="h-12 px-8 text-base">Start in 2 minutes</Button><Button variant="outline" className="h-12 px-8 text-base">Post a problem</Button></div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20">
          <div className="container-tight">
            <div className="rounded-2xl overflow-hidden border border-brand-blue/20 bg-gradient-to-r from-brand-blue/10 via-brand-violet/10 to-brand-bright/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-display font-bold">No résumés. No LinkedIn theatre. Just builders.</h3>
                <p className="text-white/70 mt-2 text-lg">Your AI champion does the heavy lifting — you focus on building.</p>
              </div>
              <div className="flex gap-4"><Button variant="primary" className="h-12 px-8 text-base">I'm a Builder</Button><Button variant="outline" className="h-12 px-8 text-base">I Want Builders</Button></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}