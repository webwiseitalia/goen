import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import interiorImg from '../assets/foto/foto-10.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Events() {
  const ref = useRef(null)
  const imgRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.ef').forEach((el, i) => {
        gsap.fromTo(el, { y: 40 + i * 5, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 + i * 0.02, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
      })
      // Image wipe from bottom
      if (imgRef.current) {
        gsap.fromTo(imgRef.current, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0 0 0 0)', duration: 0.6, ease: 'expo.inOut', scrollTrigger: { trigger: imgRef.current, start: 'top 70%' } })
      }
      // Text creeps up while scrolling
      if (textRef.current) {
        gsap.to(textRef.current, { y: '-15%', ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 0.8 } })
      }
    }, ref.current)
    return () => ctx.revert()
  }, [])

  return (
    <section id="eventi" ref={ref} className="relative overflow-hidden" style={{ background: 'var(--white)' }}>
      {/* Diagonal tension — image left 55%, text overlapping from right */}
      <div className="relative min-h-screen flex items-stretch">
        {/* Image — not full width, not half, awkward 55% */}
        <div className="w-full md:w-[55%] flex-shrink-0 relative">
          <div ref={imgRef} className="h-full min-h-[60vh] md:min-h-full">
            <img src={interiorImg} alt="Sala Goen per eventi" className="w-full h-full object-cover" />
          </div>
          {/* Capacity badge overlapping image edge */}
          <div className="absolute bottom-8 right-0 translate-x-1/2 z-20 py-3 px-6 hidden md:block" style={{ background: 'var(--gold)' }}>
            <span className="label-sm" style={{ color: 'var(--navy)' }}>450 Posti</span>
          </div>
        </div>

        {/* Text content — overlaps into image zone on desktop */}
        <div ref={textRef} className="w-full md:w-[50%] md:ml-[-5%] relative z-10 flex items-center">
          <div className="px-6 md:px-12 lg:pl-16 lg:pr-20 py-16 md:py-0" style={{ background: 'var(--white)' }}>
            <div className="ef">
              <span className="label-sm" style={{ color: 'var(--gold)' }}>Eventi & Cerimonie</span>
            </div>

            <h2 className="ef display-md mt-4" style={{ color: 'var(--navy)' }}>
              Il luogo perfetto<br />per <em style={{ fontStyle: 'italic', color: 'var(--gold-muted)' }}>ogni</em> occasione
            </h2>

            <p className="ef text-editorial mt-6 max-w-sm">
              Matrimoni, battesimi, cene aziendali, feste private. Menu personalizzabili per ogni occasione speciale.
            </p>

            <div className="ef mt-10 space-y-0">
              {['Matrimoni & Cerimonie', 'Battesimi, Cresime, Comunioni', 'Cene aziendali', 'Feste private', 'Ricevimenti a buffet', 'Luxury Night & DJ set'].map((e, i) => (
                <div key={i} className="py-2.5 flex items-center gap-4" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <span className="label-sm text-[var(--text-muted)]/30 min-w-[1.5rem]">{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{e}</span>
                </div>
              ))}
            </div>

            <a href="#contatti" className="ef label-sm inline-block mt-10 px-8 py-4 border transition-all duration-500 hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)]" style={{ borderColor: 'var(--navy)', color: 'var(--navy)' }}>
              Richiedi un preventivo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
