import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import wineImg from '../assets/foto/foto-8.webp'

gsap.registerPlugin(ScrollTrigger)

export default function CocktailBar() {
  const ref = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.ck-fade').forEach((el) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } })
      })

      // Parallax bg
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          y: '25%', ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 2 },
        })
      }
    }, ref.current)
    return () => ctx.revert()
  }, [])

  return (
    <section id="cocktail" ref={ref} className="relative overflow-hidden" style={{ minHeight: '90vh' }}>
      {/* Parallax background */}
      <div className="absolute inset-0 overflow-hidden">
        <img ref={imgRef} src={wineImg} alt="Aperitivo vista lago" className="w-full h-[130%] object-cover will-change-transform" style={{ marginTop: '-15%' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,15,26,0.85) 0%, rgba(10,15,26,0.6) 50%, rgba(10,15,26,0.85) 100%)' }} />
      </div>

      {/* Content - off-center, editorial */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-[var(--space-xl)] flex flex-col justify-center min-h-[90vh]">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-7 lg:col-start-1">
            <div className="ck-fade flex items-center gap-4 mb-6">
              <span className="editorial-divider" />
              <span className="label-sm" style={{ color: 'var(--gold)' }}>Cocktail Bar</span>
            </div>

            <h2 className="ck-fade display-lg text-white">
              Un tramonto,<br />un cocktail,<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>il lago</em>
            </h2>

            <p className="ck-fade text-white/40 mt-8 max-w-md" style={{ fontSize: 'clamp(0.9rem,1.1vw,1.1rem)', lineHeight: 1.7, fontWeight: 300 }}>
              Tutto ciò che serve.
            </p>
          </div>
        </div>

        {/* Offerings - scattered, not grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-y-8">
          {[
            { label: 'Cocktail d\'autore', desc: 'Long drink e creazioni esclusive', col: 'col-span-6 md:col-span-3' },
            { label: 'Vini selezionati', desc: 'Vini lombardi e prosecco di qualità', col: 'col-span-6 md:col-span-3 md:col-start-5' },
            { label: 'Aperitivi con vista', desc: 'Buffet di aperitivo sul lago', col: 'col-span-6 md:col-span-3 md:col-start-2' },
            { label: 'Fino a tarda sera', desc: 'Atmosfera lounge in terrazza', col: 'col-span-6 md:col-span-3 md:col-start-8' },
          ].map((item, i) => (
            <div key={i} className={`ck-fade ${item.col}`}>
              <span className="label-sm block text-white/20 mb-2">{String(i + 1).padStart(2, '0')}</span>
              <h4 className="text-white font-medium mb-1" style={{ fontSize: '1rem', fontFamily: 'var(--font-display)' }}>{item.label}</h4>
              <p className="text-white/30" style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
