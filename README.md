# Vetta — The Network for Builders Who Lead

A voice‑first, AI‑native reputation and matching network. Skip résumés. Explain your thinking in ~2 minutes. Get matched to problems worth solving. Share the glory.

> We treat great builders like athletes — with a 24/7 AI Champion that promotes wins, books AMAs/podcasts, curates opportunities, and makes you visible while you build.


## ⚡ Manifesto
**LinkedIn is theater. Vetta is signal.**
- Theater: keyword bingo, recruiter filters, stale job boards.
- Signal: how you reason, communicate, ship, and collaborate.
- We believe AI builders should be seen like NBA stars — not anonymous CVs.
- Your voice, your clips, your outcomes: captured once, amplified everywhere.

We’re building the platform where the world’s best AI builders lead from the front — and teams meet them at the speed of thought.


## 🧬 Origin
Vetta was started during the **MIT Global AI Hackathon 2025**, co‑hosted with the MIT Sloan AI Club (backed by sponsors like OpenAI, Akamai, and ScaleAI). See the event details and project listings:
- Event: [Global AI Hackathon — The 2nd Edition with MIT Sloan & OpenAI](https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-mannheim-mannheim-germany-presents-global-ai-hackathon-the-2nd-edition-with-mit-sloan-amp-openai/)
- Projects: [Hack‑Nation Projects](https://projects.hack-nation.ai/)

We’re taking the hackathon spark to a product builders can use every day.


## ✨ TL;DR
- Voice‑first onboarding that builds a Talent Card and matches you instantly
- Two personas: Builders and Teams/Leads
- “AI Champion” that Promotes • Matches • Amplifies
- Premium 2025 visual language (glass, neon, motion) on Next.js 14 + Tailwind + Framer Motion
- Live voice via Vapi (web SDK)


## 🎥 Demo
- Live App (local): `npm run dev` → http://localhost:3000
- Screenshots: `/docs/screenshots/`


## 🧭 Why this exists
Hiring for AI is broken. Résumés and LinkedIn theater under‑represent the signals that matter.
- Show your thinking (voice)
- Build a Talent Card automatically
- Match to problems worth solving, now
- Share the spotlight with teams who credit builders


## 🧩 Product — What’s here today
- Home hub with voice‑first demo and premium motion UI
- AI Champion section (Promote • Match • Amplify) with micro‑demos
- Live Feed with premium cards (Opportunities • Spotlights)
- Builder flow (voice‑only):
  - Start → talk for ~2 minutes → transcript + analytics
  - Instant Talent Card preview
  - Seeded matching to real `TalentCard` schema (`src/data/talent.ts`)
- Lead flow (voice‑only): instant shortlist (stubbed for now)


## 🏗️ Tech
- Framework: **Next.js 14 (App Router)** + **TypeScript**
- Styling: **Tailwind CSS** + custom glass/neon design system
- Motion: **Framer Motion** (parallax, beams, waveform)
- Voice: **Vapi** web SDK (`@vapi-ai/web`) for live capture + transcripts

```
src/
  app/                 # App router pages + sections
  components/          # UI, voice input, sections, cards
  data/                # Seeded TalentCard data
  types/               # Shared interfaces (TalentCard, ManagerCard, Opportunity)
  styles/              # Design system (globals / tokens via Tailwind)
brand/                 # Logos, SVGs, tokens (see /brand)
```


## 🚀 Getting Started (Local)
1) Install deps
```
npm install
```
2) Environment
Create `.env.local` in the project root:
```
NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
# optional but recommended for one‑click start
NEXT_PUBLIC_VAPI_ASSISTANT_ID=asst_...
```
3) Run
```
npm run dev
```
4) Open http://localhost:3000 → press “Start” in the hero panel

> If you don’t have an assistantId, the app lets you paste one at runtime (stored in localStorage). You can also run without one using the inline assistant template, provided your key has access to the configured providers.


## 🔐 Environment Variables
- `NEXT_PUBLIC_VAPI_PUBLIC_KEY` (required) — Vapi public key
- `NEXT_PUBLIC_VAPI_ASSISTANT_ID` (optional) — recommended. Create an Assistant in your Vapi dashboard and paste the ID here for zero‑friction start.


## 🎙️ Vapi Setup (Quick)
- Create a project in Vapi
- Add a Web Assistant
- Grab the Assistant ID → set `NEXT_PUBLIC_VAPI_ASSISTANT_ID`
- Ensure microphone permissions are allowed in your browser


## 🧪 Data Model
We keep real, typed entities for interoperability.
- `TalentCard` — builder profile with skills, evidence, style, availability
- `ManagerCard` — team/project intent with stack, constraints, engagement
- `Opportunity` — scannable, scoped brief (reward, duration, tags)

See `src/types/index.ts` and example seeds in `src/data/`.


## 🧭 Roadmap (next 14–21 days)
- Voice → Card → Match
  - [ ] Replace heuristic signals with LLM scoring service (`/api/score`)
  - [ ] Persist TalentCard and ManagerCard to a DB (Supabase/PG)
  - [ ] Match reasons (“RAG + Evals from your snippet”)
- AI Champion
  - [ ] Auto‑draft clips/posts, AMA pitches, and newsletters (approve‑first)
  - [ ] Community distribution (Discord/Slack) with consent
- Teams
  - [ ] Lead voice intake → real ManagerCard → shortlist with availability
  - [ ] “Start Paid Trial” flow (Stripe Connect)
- Social + Growth
  - [ ] Share cards (OG/video) for X/LinkedIn
  - [ ] Public Spotlight + Opportunities pages
- Orb + UX polish
  - [ ] Docked Agent Orb (breath/pulse/waveform)
  - [ ] Enhanced waveform + parallax interactions


## 🤝 Collaborators — we’re building this in the open
We want the best **AI builders**, **designers**, **researchers**, and **operators** to shape this with us.
- Builders: voice scoring, RAG/eval pipelines, realtime UI/agents
- Design: visual systems, motion, interaction physics, sound design
- Research: multimodal evaluation, signal extraction, trust frameworks
- Growth: community partnerships, AMAs, content flywheel

Open an issue with a proposal — or ship a PR.


## 🧠 Design Philosophy
- **Signal over theater**: voice and reasoning first
- **Builder‑centric**: credit and visibility baked in
- **Fast loops**: scoped briefs → paid trials → ongoing work
- **Tasteful motion**: premium, not noisy


## 🗺️ Join the movement
This started at the **MIT Global AI Hackathon 2025** and continues here. If you’re building the future of AI work, **star this repo**, share feedback, and help us make AI builders visible — like NBA stars.

- Event: [Global AI Hackathon — The 2nd Edition with MIT Sloan & OpenAI](https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-mannheim-mannheim-germany-presents-global-ai-hackathon-the-2nd-edition-with-mit-sloan-amp-openai/)
- Projects: [Hack‑Nation Projects](https://projects.hack-nation.ai/)


## 📄 License
MIT © Vetta


## 💙 Star This Repo
If this resonates, **star** the repo — it helps more builders find it.


## 📨 Contact
- Founders / Maintainers: open an issue or reach out via GH discussions
- Partnerships / Ecosystem: PRs welcome, or ping us with your stack

> Vetta supports builders & teams worldwide. Multi‑language voice onboarding planned.

