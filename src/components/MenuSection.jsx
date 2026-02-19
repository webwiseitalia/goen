import { useState } from 'react'
import { Fish, Flame, Beef, MapPin, CakeSlice, Sun } from 'lucide-react'
import fishImg from '../assets/foto/foto-6.webp'
import pastaImg from '../assets/foto/foto-3.webp'
import dessertImg from '../assets/foto/foto-2.webp'
import friedImg from '../assets/foto/foto-7.webp'

const categories = [
  {
    id: 'pesce',
    label: 'Pesce',
    icon: Fish,
    image: fishImg,
    description: 'Specialità principale del Goen: pesce di mare e di lago, freschissimo e preparato con maestria.',
    dishes: [
      'Antipasto Goen — capasanta gratinata, ostriche, carpaccio di tonno, spada affumicato, salmone marinato, triglia dorata',
      'Spaghetti allo scoglio',
      'Risotto ai frutti di mare',
      'Risotto alla pescatora',
      'Fritto misto di pesce',
      'Persico del Lago d\'Iseo con panatura',
      'Sardina di lago',
    ],
  },
  {
    id: 'pizza',
    label: 'Pizzeria',
    icon: Flame,
    image: friedImg,
    description: 'Pizze ben lievitate cotte nel nostro forno a legna. Impasto fragrante e ingredienti selezionati.',
    dishes: [
      'Pizza Goen — la nostra signature',
      'Pizze classiche e creative',
      'Impasto a lunga lievitazione',
      'Cotte in forno a legna',
      'A partire da circa €8',
    ],
  },
  {
    id: 'carne',
    label: 'Carne',
    icon: Beef,
    image: pastaImg,
    description: 'Tagli pregiati e piatti della tradizione lombarda, preparati con cura e ingredienti selezionati.',
    dishes: [
      'Tagliata',
      'Bistecca',
      'Risotto ai porcini',
    ],
  },
  {
    id: 'locali',
    label: 'Piatti Locali',
    icon: MapPin,
    image: friedImg,
    description: 'Sapori autentici della Val Camonica e della tradizione bresciana.',
    dishes: [
      'Casoncelli',
      'Risotto al Bagoss',
      'Risotto formaggella e tartufo',
      'Culatello di Zibello',
      'Prosciutto di cervo',
      'Slinzega della Val Camonica con gnocco fritto',
    ],
  },
  {
    id: 'dolci',
    label: 'Dolci',
    icon: CakeSlice,
    image: dessertImg,
    description: 'I nostri dolci fatti in casa, il finale perfetto per ogni cena.',
    dishes: [
      'Tiramisù',
      'Tortino al cacao con cuore fondente',
      'Cialda di fragole e crema di mascarpone',
    ],
  },
]

export default function MenuSection() {
  const [active, setActive] = useState('pesce')
  const current = categories.find((c) => c.id === active)

  return (
    <section id="menu" className="section-padding bg-navy-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold-400 font-semibold uppercase tracking-wider text-sm">La Cucina</span>
          <h2 className="section-title mt-2 !text-white">I Nostri Menu</h2>
          <p className="section-subtitle !text-white/70">
            Ogni piatto è preparato fresco, con ingredienti scelti.
            Realizziamo internamente brodi, condimenti e salse.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat.id
                  ? 'bg-gold-500 text-white shadow-lg shadow-gold-500/25'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <cat.icon size={16} />
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={current.image}
              alt={current.label}
              className="w-full h-[350px] md:h-[450px] object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
          </div>

          <div className="text-white">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">{current.label}</h3>
            <p className="text-white/70 mb-6 leading-relaxed">{current.description}</p>
            <ul className="space-y-3">
              {current.dishes.map((dish, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2.5 flex-shrink-0" />
                  <span className="text-white/90 leading-relaxed">{dish}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sun size={20} className="text-gold-400" />
            <h4 className="font-serif text-xl font-bold text-white">Menu del Giorno — Pranzo</h4>
          </div>
          <p className="text-white/70 mb-1">Primo + secondo + acqua + vino + caffè</p>
          <span className="text-3xl font-serif font-bold text-gold-400">€15</span>
        </div>
      </div>
    </section>
  )
}
