import { Phone } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MenuSection from './components/MenuSection'
import Location from './components/Location'
import Events from './components/Events'
import CocktailBar from './components/CocktailBar'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Location />
      <Events />
      <CocktailBar />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />

      {/* Mobile fixed call button */}
      <a
        href="tel:+390364 87229"
        className="fixed bottom-6 right-6 z-40 md:hidden p-4 bg-gold-500 text-white rounded-full shadow-xl shadow-gold-500/30 hover:bg-gold-600 transition-all active:scale-95"
        aria-label="Chiama il ristorante"
      >
        <Phone size={24} />
      </a>
    </div>
  )
}

export default App
