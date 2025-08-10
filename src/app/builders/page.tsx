import { BuilderHero } from '@/components/builder/hero'
import { InstantOpportunities } from '@/components/builder/opportunities'
import { WhyBuilders } from '@/components/builder/why-builders'
import { BuilderAIChampion } from '@/components/builder/ai-champion'
import { SocialLoop } from '@/components/builder/social-loop'
import { Footer } from '@/components/footer'

export default function BuildersPage() {
  return (
    <main className="min-h-screen">
      <BuilderHero />
      <InstantOpportunities />
      <WhyBuilders />
      <BuilderAIChampion />
      <SocialLoop />
      <Footer />
    </main>
  )
}
