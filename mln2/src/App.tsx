import './App.css'
import { Layout } from './components/Layout'
import { HeroSection } from './sections/HeroSection'
import { BaoCapSection } from './sections/BaoCapSection'
import { CrisisSection } from './sections/CrisisSection'
import { DoiMoiSection } from './sections/DoiMoiSection'
import { MarketEconomySection } from './sections/MarketEconomySection'
import { AchievementSection } from './sections/AchievementSection'
import { ConclusionSection } from './sections/ConclusionSection'
import { TheorySection } from './sections/TheorySection'

function App() {
  return (
    <Layout>
      <HeroSection
        onStartJourney={() => {
          const el = document.getElementById('bao-cap')
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }}
      />
      <BaoCapSection />
      <CrisisSection />
      <DoiMoiSection />
      <MarketEconomySection />
      <AchievementSection />
      <TheorySection />
      <ConclusionSection />
    </Layout>
  )
}

export default App
