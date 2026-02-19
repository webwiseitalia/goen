import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/logogoen-Photoroom.webp'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Menu', href: '#menu' },
  { label: 'Location', href: '#location' },
  { label: 'Eventi', href: '#eventi' },
  { label: 'Cocktail Bar', href: '#cocktail' },
  { label: 'Galleria', href: '#galleria' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-gradient-to-b from-black/50 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#hero" className="flex-shrink-0">
              <img
                src={logo}
                alt="Goen Ristorante Pisogne"
                className={`transition-all duration-500 ${
                  scrolled ? 'h-12 brightness-100' : 'h-14 brightness-0 invert'
                }`}
              />
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                    scrolled
                      ? 'text-navy-700 hover:text-gold-600 hover:bg-navy-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contatti"
                className="ml-3 btn-primary !py-2.5 !px-6 !text-xs"
              >
                Prenota
              </a>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <a
                href="tel:+390364 87229"
                className={`p-2 rounded-full transition-colors ${
                  scrolled ? 'text-navy-700 hover:bg-navy-50' : 'text-white hover:bg-white/10'
                }`}
              >
                <Phone size={20} />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled ? 'text-navy-700 hover:bg-navy-50' : 'text-white hover:bg-white/10'
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <img src={logo} alt="Goen" className="h-10" />
              <button onClick={() => setIsOpen(false)} className="p-2 text-navy-700 hover:bg-navy-50 rounded-lg">
                <X size={24} />
              </button>
            </div>
            <div className="py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-3.5 text-navy-700 hover:bg-navy-50 hover:text-gold-600 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-6 pt-4">
                <a
                  href="#contatti"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full text-center"
                >
                  Prenota un tavolo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
