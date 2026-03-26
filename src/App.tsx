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
import { GallerySection } from './sections/GallerySection'
import { AuthorsSection } from './sections/AuthorsSection'
import { ChatBox } from './components/ChatBox'

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
      <GallerySection />
      <ConclusionSection />
      <AuthorsSection />
      <ChatBox />
    </Layout>
  )
}

export default App
