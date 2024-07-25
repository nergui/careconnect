import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import SearchBar from '../components/SearchBar'
import CategoryButtons from '../components/CategoryButtons'
import PopularSearches from '../components/PopularSearches'

export default function HomePage() {
  return (
    <main className="relative pb-32">
      <Header />
      <HeroSection />
      <SearchBar />
      <CategoryButtons />
      <div className="curve-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        
        </svg>
      </div>
    </main>
  )
}