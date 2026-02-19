import { ChevronDown } from 'lucide-react'
import heroImg from '../assets/foto/foto-9.webp'
import logo from '../assets/logogoen-Photoroom.webp'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Vista panoramica dal Ristorante Goen sul Lago d'Iseo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-navy-900/70" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <img
          src={logo}
          alt="Goen Pisogne"
          className="h-24 sm:h-32 md:h-40 mx-auto mb-6 brightness-0 invert drop-shadow-2xl"
        />

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          Il tuo posto sul<br />
          <span className="text-gold-400">Lago d'Iseo</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Ristorante, pizzeria e cocktail bar affacciato sul porto di Pisogne.
          Cucina di pesce, pizza al forno a legna e tramonti indimenticabili.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contatti" className="btn-primary !text-base !px-10 !py-4">
            Prenota un tavolo
          </a>
          <a href="#menu" className="btn-secondary !text-base !px-10 !py-4">
            Scopri il menu
          </a>
        </div>
      </div>

      <a
        href="#chi-siamo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
