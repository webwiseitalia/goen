import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import interiorImg from '../assets/foto/foto-10.webp'

gsap.registerPlugin(ScrollTrigger)

const eventTypes = [
  'Matrimoni & Cerimonie',
  'Battesimi, Cresime, Comunioni',
  'Cene aziendali e pranzi di lavoro',
  'Feste private e compleanni',
  'Ricevimenti a buffet',
  'Serate speciali — Luxury Night, DJ set',
  'Menu personalizzabili',
  'Capienza fino a 450 persone',
]

export default function Events() {
  const ref = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.ev-fade').forEach((el, i) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: i * 0.04, scrollTrigger: { trigger: el, start: 'top 87%' } })
      })

      if (imgRef.current) {
        gsap.fromTo(imgRef.current,
          { clipPath: 'inset(0 100% 0 0)' },
          { clipPath: 'inset(0 0% 0 0)', duration: 1.6, ease: 'power3.inOut', scrollTrigger: { trigger: imgRef.current, start: 'top 70%' } }
        )
      }
    }, ref.current)
    return () => ctx.revert()
  }, [])

  return (
    <section id="eventi" ref={ref} style={{ background: 'var(--white)' }}>
      <div className="py-[var(--space-xl)]">
        <div className="grid grid-cols-12 min-h-[80vh]">
          {/* Image - takes more than half, bleeds */}
          <div className="col-span-12 lg:col-span-7 relative order-2 lg:order-1">
            <div ref={imgRef} className="h-[50vh] lg:h-full overflow-hidden">
              <img src={interiorImg} alt="Sala Goen per eventi" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content - right side, vertically centered, tight */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center px-6 md:px-12 lg:pl-16 lg:pr-20 py-16 lg:py-0 order-1 lg:order-2">
            <div className="ev-fade flex items-center gap-4 mb-6">
              <span className="editorial-divider" />
              <span className="label-sm" style={{ color: 'var(--gold)' }}>Eventi & Cerimonie</span>
            </div>

            <h2 className="ev-fade display-md" style={{ color: 'var(--navy)' }}>
              Il luogo<br />perfetto per<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-muted)' }}>ogni occasione</em>
            </h2>

            <p className="ev-fade text-editorial mt-6">
              Il Ristorante Goen è perfetto per organizzare cerimonie, eventi e ricevimenti. Menu personalizzabili per ogni occasione speciale.
            </p>

            <ul className="mt-8 space-y-2.5">
              {eventTypes.map((e, i) => (
                <li key={i} className="ev-fade flex items-center gap-3" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <span className="w-3 h-px" style={{ background: 'var(--gold)' }} />
                  {e}
                </li>
              ))}
            </ul>

            <a href="#contatti" className="ev-fade label-sm inline-block mt-10 px-8 py-4 border transition-all duration-500 hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] self-start" style={{ borderColor: 'var(--navy)', color: 'var(--navy)' }}>
              Richiedi un preventivo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
