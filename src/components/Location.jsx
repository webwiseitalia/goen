import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import terraceImg from '../assets/foto/foto-8.webp'
import lakeImg from '../assets/foto/foto-9.webp'
import interiorImg from '../assets/foto/foto-11.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Location() {
  const ref = useRef(null)
  const bigImg = useRef(null)
  const floatText = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.lf').forEach((el) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 87%' } })
      })

      // Big image reveal — expands from center
      if (bigImg.current) {
        gsap.fromTo(bigImg.current,
          { clipPath: 'inset(30% 20% 30% 20%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.65, ease: 'expo.out', scrollTrigger: { trigger: bigImg.current, start: 'top 75%' } }
        )
      }

      // Floating text slides horizontally
      if (floatText.current) {
        gsap.to(floatText.current, {
          x: '15%', ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
        })
      }

      gsap.utils.toArray('.l-img').forEach((el) => {
        gsap.fromTo(el, { y: 60, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.45, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } })
      })
    }, ref.current)
    return () => ctx.revert()
  }, [])

  return (
    <section id="location" ref={ref} style={{ background: 'var(--cream)' }}>
      {/* Floating oversized word */}
      <div className="overflow-hidden pointer-events-none select-none" style={{ paddingTop: 'var(--space-md)' }}>
        <div ref={floatText} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 14vw, 14rem)', lineHeight: 0.85, color: 'rgba(58,107,138,0.06)', fontWeight: 400, whiteSpace: 'nowrap', marginLeft: '-5vw' }}>
          Terrazze sul Lago
        </div>
      </div>

      {/* Header - pushed far right, overlapping the ghost text */}
      <div className="grid grid-cols-12 px-6 md:px-12 lg:px-20" style={{ marginTop: 'clamp(-3rem, -6vw, -8rem)' }}>
        <div className="col-span-12 md:col-span-5 md:col-start-8">
          <div className="lf">
            <span className="label-sm" style={{ color: 'var(--gold)' }}>La Location</span>
            <h2 className="display-lg mt-3" style={{ color: 'var(--navy)' }}>
              Le terrazze<br />sul <em style={{ fontStyle: 'italic', color: 'var(--lake)' }}>lago</em>
            </h2>
          </div>
        </div>
      </div>

      {/* Full-bleed image — edge to edge */}
      <div ref={bigImg} className="mt-12 md:mt-16 w-full overflow-hidden" style={{ height: 'clamp(40vh, 65vh, 80vh)' }}>
        <img src={terraceImg} alt="Terrazza Goen" className="w-full h-full object-cover" />
      </div>

      {/* Overlapping description band — rises into image */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20" style={{ marginTop: 'clamp(-4rem, -8vw, -10rem)' }}>
        <div className="lf p-8 md:p-12 max-w-2xl" style={{ background: 'var(--cream)' }}>
          <p className="text-editorial">
            Vista panoramica sul Lago d'Iseo. Direttamente sul porto di Goen — raggiungibile a piedi dal centro di Pisogne tramite il lungolago e la ciclabile Vello–Toline. Le ampie terrazze lo rendono il luogo perfetto dove trascorrere la giornata in riva al lago.
          </p>
        </div>
      </div>

      {/* Two images at different sizes and vertical offsets */}
      <div className="grid grid-cols-12 gap-4 px-6 md:px-12 lg:px-20 mt-12 md:mt-20">
        <div className="l-img col-span-7 md:col-span-4 md:col-start-2">
          <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
            <img src={lakeImg} alt="Vista lago" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="l-img col-span-5 md:col-span-3 md:col-start-7" style={{ marginTop: 'clamp(4rem, 10vw, 12rem)' }}>
          <div className="overflow-hidden" style={{ aspectRatio: '4/5' }}>
            <img src={interiorImg} alt="Sala interna" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Services list - no icons, just dashes, floats next to images */}
        <div className="lf col-span-12 md:col-span-2 md:col-start-11 flex flex-col justify-end pb-6">
          {['450 posti', 'Parcheggio', 'Wi-Fi', 'Accessibile', 'Da Brescia 40\'', 'Da Bergamo 50\'', 'Stazione 10\'', 'Ciclabile'].map((s) => (
            <span key={s} className="block py-1" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{s}</span>
          ))}
        </div>
      </div>

      <div style={{ height: 'var(--space-xl)' }} />
    </section>
  )
}
