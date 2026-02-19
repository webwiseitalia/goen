import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import terraceImg from '../assets/foto/foto-8.webp'
import lakeImg from '../assets/foto/foto-9.webp'
import interiorImg from '../assets/foto/foto-11.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Location() {
  const ref = useRef(null)
  const bigImgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.loc-fade').forEach((el) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } })
      })

      if (bigImgRef.current) {
        gsap.fromTo(bigImgRef.current,
          { clipPath: 'inset(20% 10% 20% 10%)', scale: 1.1 },
          { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.6, ease: 'power3.inOut', scrollTrigger: { trigger: bigImgRef.current, start: 'top 75%' } }
        )
      }

      gsap.utils.toArray('.loc-img-sm').forEach((el) => {
        gsap.fromTo(el, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.3, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } })
      })

      // Parallax on big image
      if (bigImgRef.current) {
        gsap.to(bigImgRef.current.querySelector('img'), {
          y: '15%', ease: 'none',
          scrollTrigger: { trigger: bigImgRef.current, start: 'top bottom', end: 'bottom top', scrub: 2 },
        })
      }
    }, ref.current)
    return () => ctx.revert()
  }, [])

  return (
    <section id="location" ref={ref} style={{ background: 'var(--cream)' }}>
      <div className="py-[var(--space-xl)]">
        {/* Header - right aligned for contrast */}
        <div className="px-6 md:px-12 lg:px-20 mb-16">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <div className="loc-fade flex items-center gap-4 mb-4">
                <span className="editorial-divider" />
                <span className="label-sm" style={{ color: 'var(--gold)' }}>La Location</span>
              </div>
              <h2 className="loc-fade display-lg" style={{ color: 'var(--navy)' }}>
                Le terrazze<br />sul <em style={{ fontStyle: 'italic', color: 'var(--lake)' }}>lago</em>
              </h2>
              <p className="loc-fade text-editorial mt-6 max-w-md">
                Vista panoramica sul Lago d'Iseo. Le ampie terrazze lo rendono il locale estivo per eccellenza — il perfetto luogo dove trascorrere la giornata in riva al lago.
              </p>
            </div>
          </div>
        </div>

        {/* Full-bleed image */}
        <div ref={bigImgRef} className="w-full overflow-hidden" style={{ height: 'clamp(50vh, 70vh, 80vh)' }}>
          <img src={terraceImg} alt="Terrazza Goen vista lago" className="w-full h-[120%] object-cover will-change-transform" style={{ marginTop: '-10%' }} />
        </div>

        {/* Offset content + images below */}
        <div className="px-6 md:px-12 lg:px-20 mt-16 md:mt-24">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            {/* Text block - not centered */}
            <div className="col-span-12 md:col-span-5 lg:col-span-4">
              <div className="loc-fade">
                <p className="text-editorial mb-6">
                  Direttamente sul porto di Goen. Raggiungibile a piedi dal centro di Pisogne tramite il lungolago e la ciclabile Vello–Toline.
                </p>
                <div className="space-y-3">
                  {['Parcheggio disponibile', 'Wi-Fi gratuito', 'Accessibile', '450 posti totali'].map((s) => (
                    <div key={s} className="flex items-center gap-3">
                      <span className="w-4 h-px" style={{ background: 'var(--gold)' }} />
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Small images - different sizes, offset */}
            <div className="col-span-6 md:col-span-3 md:col-start-7 loc-img-sm">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={lakeImg} alt="Vista lago con fiori" className="w-full h-full object-cover" />
              </div>
              <p className="label-sm mt-3" style={{ color: 'var(--text-muted)' }}>Vista lago</p>
            </div>
            <div className="col-span-6 md:col-span-3 loc-img-sm" style={{ marginTop: 'clamp(2rem, 5vw, 6rem)' }}>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={interiorImg} alt="Sala interna" className="w-full h-full object-cover" />
              </div>
              <p className="label-sm mt-3" style={{ color: 'var(--text-muted)' }}>Sala interna</p>
            </div>
          </div>

          {/* How to reach - minimal */}
          <div className="loc-fade mt-20 grid grid-cols-12">
            <div className="col-span-12 md:col-span-8 lg:col-span-6">
              <span className="label-sm block mb-4" style={{ color: 'var(--gold)' }}>Come Raggiungerci</span>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {[
                  'Da Brescia — 40 min',
                  'Da Bergamo — 50 min',
                  'Stazione Pisogne — 10 min a piedi',
                  'Ciclabile Vello–Toline',
                ].map((d) => (
                  <span key={d} className="text-editorial" style={{ fontSize: '0.85rem' }}>{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
