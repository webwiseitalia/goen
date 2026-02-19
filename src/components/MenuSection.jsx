import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import fishImg from '../assets/foto/foto-6.webp'
import pastaImg from '../assets/foto/foto-3.webp'
import dessertImg from '../assets/foto/foto-2.webp'
import friedImg from '../assets/foto/foto-7.webp'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  {
    id: 'pesce', label: 'Pesce', image: fishImg,
    desc: 'Specialità principale: pesce di mare e di lago, freschissimo.',
    dishes: ['Antipasto Goen — capasanta gratinata, ostriche, carpaccio di tonno, spada affumicato', 'Spaghetti allo scoglio', 'Risotto ai frutti di mare', 'Risotto alla pescatora', 'Fritto misto di pesce', 'Persico del Lago d\'Iseo', 'Sardina di lago'],
  },
  {
    id: 'pizza', label: 'Forno a legna', image: friedImg,
    desc: 'Pizze ben lievitate, cotte nel nostro forno a legna. Da circa €8.',
    dishes: ['Pizza Goen — la nostra signature', 'Impasto a lunga lievitazione', 'Ingredienti selezionati', 'Cotte in forno a legna'],
  },
  {
    id: 'terra', label: 'Terra', image: pastaImg,
    desc: 'Carne pregiata e sapori autentici della Val Camonica.',
    dishes: ['Tagliata', 'Bistecca', 'Risotto ai porcini', 'Casoncelli', 'Risotto al Bagoss', 'Risotto formaggella e tartufo', 'Slinzega con gnocco fritto'],
  },
  {
    id: 'dolci', label: 'Dolci', image: dessertImg,
    desc: 'Dolci fatti in casa, il finale perfetto.',
    dishes: ['Tiramisù', 'Tortino al cacao con cuore fondente', 'Cialda di fragole e crema di mascarpone'],
  },
]

export default function MenuSection() {
  const [active, setActive] = useState('pesce')
  const ref = useRef(null)
  const imgContainerRef = useRef(null)
  const current = categories.find((c) => c.id === active)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.menu-reveal').forEach((el) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } })
      })
    }, ref.current)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (imgContainerRef.current) {
      gsap.fromTo(imgContainerRef.current, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'power3.inOut' })
    }
  }, [active])

  return (
    <section id="menu" ref={ref} style={{ background: 'var(--navy)' }}>
      {/* Marquee divider */}
      <div className="overflow-hidden py-6 border-t border-b border-white/5">
        <div className="marquee-track animate-[marquee_30s_linear_infinite]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="label-sm text-white/15 whitespace-nowrap">
              Pesce · Pizza · Cocktail · Vista Lago · Dal 2015 · Forno a Legna · Terrazza · Menu del Giorno&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-[var(--space-xl)]">
        {/* Header - left aligned, not centered */}
        <div className="menu-reveal flex items-center gap-4 mb-4">
          <span className="editorial-divider" style={{ background: 'var(--gold)' }} />
          <span className="label-sm" style={{ color: 'var(--gold)' }}>La Cucina</span>
        </div>
        <div className="menu-reveal grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="display-lg text-white">I nostri<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>menu</em></h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:flex lg:items-end">
            <p className="text-white/40" style={{ fontSize: 'clamp(0.85rem,1vw,1rem)', lineHeight: 1.7, fontWeight: 300 }}>
              Ogni piatto è preparato fresco. Realizziamo internamente brodi, condimenti e salse.
            </p>
          </div>
        </div>

        {/* Tabs - stretched, not pills */}
        <div className="menu-reveal flex flex-wrap gap-0 border-b border-white/10 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className="label-sm px-6 py-4 transition-all duration-500 relative"
              style={{ color: active === cat.id ? 'var(--gold)' : 'rgba(255,255,255,0.3)' }}
            >
              {cat.label}
              {active === cat.id && <span className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'var(--gold)' }} />}
            </button>
          ))}
        </div>

        {/* Content - asymmetric split */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
            <div ref={imgContainerRef} className="aspect-[16/10] overflow-hidden">
              <img src={current.image} alt={current.label} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
            <h3 className="display-md text-white mb-4">{current.label}</h3>
            <p className="text-white/40 mb-8" style={{ fontSize: '0.95rem', lineHeight: 1.7, fontWeight: 300 }}>{current.desc}</p>
            <ul className="space-y-3">
              {current.dishes.map((d, i) => (
                <li key={i} className="flex items-start gap-4 text-white/70" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                  <span className="label-sm mt-1.5 text-white/20" style={{ minWidth: '1.5rem' }}>{String(i + 1).padStart(2, '0')}</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lunch deal - offset block */}
        <div className="menu-reveal mt-20 grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 md:col-start-7 p-8 md:p-12 border border-white/10">
            <span className="label-sm" style={{ color: 'var(--gold)' }}>Menu del giorno — Pranzo</span>
            <p className="text-white/50 mt-3" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
              Primo + secondo + acqua + vino + caffè
            </p>
            <span className="display-md block mt-4" style={{ color: 'var(--gold)' }}>€15</span>
          </div>
        </div>
      </div>
    </section>
  )
}
