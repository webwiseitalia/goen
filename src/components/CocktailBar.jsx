import { Wine, Martini, Sun, Clock } from 'lucide-react'
import wineImg from '../assets/foto/foto-8.webp'

const offerings = [
  { icon: Martini, title: 'Cocktail d\'Autore', desc: 'Long drink e creazioni esclusive del nostro bar' },
  { icon: Wine, title: 'Vini Selezionati', desc: 'Vini lombardi e prosecco di qualità' },
  { icon: Sun, title: 'Aperitivi con Vista', desc: 'Buffet di aperitivo con panorama sul lago' },
  { icon: Clock, title: 'Fino a Tarda Sera', desc: 'Atmosfera lounge in terrazza' },
]

export default function CocktailBar() {
  return (
    <section id="cocktail" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={wineImg}
          alt="Aperitivo al Goen con vista Lago d'Iseo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/75" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gold-400 font-semibold uppercase tracking-wider text-sm">Cocktail Bar</span>
          <h2 className="section-title mt-2 !text-white">
            Un tramonto, un cocktail, il lago
          </h2>
          <p className="section-subtitle !text-white/70 mb-12">
            Tutto ciò che serve.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-gold-500/20 text-gold-400 w-fit mx-auto mb-4 group-hover:bg-gold-500/30 transition-colors">
                  <item.icon size={28} />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
