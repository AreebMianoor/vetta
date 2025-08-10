import { LeadHero } from '@/components/lead/hero'
import { WhyLeads } from '@/components/lead/why-leads'
import { LeadAIChampion } from '@/components/lead/ai-champion'
import { PaidTrials } from '@/components/lead/paid-trials'
import { Footer } from '@/components/footer'

export default function LeadsPage() {
  return (
    <main className="min-h-screen">
      <LeadHero />
      <WhyLeads />
      <LeadAIChampion />
      <PaidTrials />
      <Footer />
    </main>
  )
}
