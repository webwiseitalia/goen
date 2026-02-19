import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import fishImg from '../assets/foto/foto-6.webp'
import pastaImg from '../assets/foto/foto-3.webp'
import dessertImg from '../assets/foto/foto-2.webp'
import friedImg from '../assets/foto/foto-7.webp'

gsap.registerPlugin(ScrollTrigger)

const cats = [
  { id: 'pesce', label: 'Pesce', img: fishImg, dishes: ['Antipasto Goen — capasanta, ostriche, carpaccio, spada affumicato', 'Spaghetti allo scoglio', 'Risotto ai frutti di mare', 'Risotto alla pescatora', 'Fritto misto di pesce', 'Persico del Lago d\'Iseo', 'Sardina di lago'] },
  { id: 'pizza', label: 'Forno a Legna', img: friedImg, dishes: ['Pizza Goen — la signature', 'Impasto a lunga lievitazione', 'Cotte in forno a legna', 'Da circa €8'] },
  { id: 'terra', label: 'Terra & Tradizione', img: pastaImg, dishes: ['Tagliata', 'Risotto ai porcini', 'Casoncelli', 'Risotto al Bagoss', 'Risotto formaggella e tartufo', 'Slinzega con gnocco fritto', 'Culatello di Zibello'] },
  { id: 'dolci', label: 'Dolci', img: dessertImg, dishes: ['Tiramisù', 'Tortino al cacao con cuore fondente', 'Cialda fragole e mascarpone'] },
]

export default function MenuSection() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const imgRef = useRef(null)
  const c = cats[active]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.mf').forEach((el) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 87%' } })
      })
    }, ref.current)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(imgRef.current, { scale: 1.15, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.9, ease: 'power3.out' })
    }
  }, [active])

  return (
    <section id="menu" ref={ref} style={{ background: 'var(--navy)' }}>
      {/* Horizontal marquee */}
      <div className="overflow-hidden py-5 border-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
        <div className="marquee-track" style={{ animation: 'marquee 40s linear infinite' }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="label-sm text-white/8 whitespace-nowrap">
              Pesce fresco · Forno a legna · Vista Lago · Menu del Giorno €15 · Cocktail Bar · Dal 2015 · 450 Posti&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Main content — image takes 60% width, text panel overlaps from right */}
      <div className="relative" style={{ padding: 'clamp(3rem, 8vw, 10rem) 0' }}>
        {/* Section label — floats top-right */}
        <div className="mf absolute top-8 right-6 md:right-16 flex items-center gap-3 z-10">
          <span className="label-sm" style={{ color: 'var(--gold)' }}>La Cucina</span>
          <span className="editorial-divider" />
        </div>

        {/* Headline — massive, bleeds left */}
        <div className="mf px-6 md:px-0 md:pl-16 mb-12">
          <h2 className="display-xl text-white">
            I nostri<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>menu</em>
          </h2>
          <p className="text-white/25 mt-4 max-w-xs" style={{ fontSize: '0.85rem', lineHeight: 1.7, fontWeight: 300 }}>
            Ogni piatto è preparato fresco. Brodi, condimenti e salse sono fatti in casa.
          </p>
        </div>

        <div className="relative">
          {/* Image — 65% width from left edge, no padding */}
          <div ref={imgRef} className="w-[85%] md:w-[60%] overflow-hidden" style={{ height: 'clamp(25rem, 50vh, 40rem)' }}>
            <img src={c.img} alt={c.label} className="w-full h-full object-cover" />
          </div>

          {/* Text panel — overlaps image from right, floating */}
          <div className="relative md:absolute md:right-6 lg:right-16 md:top-[10%] md:w-[45%] lg:w-[38%] z-10 px-6 md:px-0 mt-[-3rem] md:mt-0">
            <div className="p-8 md:p-10" style={{ background: 'var(--navy-light)', border: '1px solid rgba(255,255,255,0.06)' }}>
              {/* Category tabs — stacked vertically, not horizontal */}
              <div className="flex flex-wrap gap-2 mb-8">
                {cats.map((cat, i) => (
                  <button key={cat.id} onClick={() => setActive(i)}
                    className="label-sm px-4 py-2 transition-all duration-400"
                    style={{ color: active === i ? 'var(--gold)' : 'rgba(255,255,255,0.2)', background: active === i ? 'rgba(196,152,63,0.08)' : 'transparent' }}>
                    {cat.label}
                  </button>
                ))}
              </div>

              <h3 className="display-sm text-white mb-6">{c.label}</h3>
              <ul className="space-y-2.5">
                {c.dishes.map((d, i) => (
                  <li key={i} className="flex items-start gap-3" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                    <span className="text-white/15 mt-0.5" style={{ fontSize: '0.7rem', minWidth: '1.2rem' }}>{String(i + 1).padStart(2, '0')}</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Lunch deal — offset block far right */}
        <div className="mf mt-16 md:mt-24 flex justify-end px-6 md:px-16">
          <div className="p-8 border border-white/6 max-w-sm">
            <span className="label-sm block" style={{ color: 'var(--gold)' }}>Menu del giorno</span>
            <p className="text-white/30 mt-2" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>Primo + secondo + acqua + vino + caffè</p>
            <span className="display-md block mt-3" style={{ color: 'var(--gold)' }}>€15</span>
          </div>
        </div>
      </div>
    </section>
  )
}
