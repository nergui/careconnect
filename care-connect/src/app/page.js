import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import SearchBar from '../components/SearchBar'
import CategoryButtons from '../components/CategoryButtons'

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <SearchBar />
      <CategoryButtons />
    </main>
  )
}