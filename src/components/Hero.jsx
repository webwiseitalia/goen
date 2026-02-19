import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImg from '../assets/foto/foto-9.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const s = useRef(null)
  const img = useRef(null)
  const ov = useRef(null)
  const h1 = useRef(null)
  const sub = useRef(null)
  const cta = useRef(null)
  const tag = useRef(null)
  const bigNum = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(img.current, { scale: 1.4 }, { scale: 1, duration: 1, ease: 'expo.out', delay: 0.05 })
      gsap.fromTo(ov.current, { opacity: 1 }, { opacity: 0.5, duration: 0.8, ease: 'power2.out', delay: 0.05 })

      const w = h1.current?.querySelectorAll('.hw')
      if (w) gsap.fromTo(w, { y: '130%', rotate: 3 }, { y: '0%', rotate: 0, duration: 0.55, stagger: 0.05, ease: 'expo.out', delay: 0.15 })

      gsap.fromTo(sub.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.5 })
      gsap.fromTo(cta.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', delay: 0.7 })
      gsap.fromTo(tag.current, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.6 })
      gsap.fromTo(bigNum.current, { opacity: 0, x: 50 }, { opacity: 0.06, x: 0, duration: 0.7, ease: 'power2.out', delay: 0.3 })

      gsap.to(img.current, {
        y: '30%', ease: 'none',
        scrollTrigger: { trigger: s.current, start: 'top top', end: 'bottom top', scrub: 1 },
      })
      gsap.to(h1.current, {
        y: '-20%', ease: 'none',
        scrollTrigger: { trigger: s.current, start: 'top top', end: 'bottom top', scrub: 1 },
      })
    }, s.current)
    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={s} className="relative overflow-hidden" style={{ background: 'var(--navy)', height: '100vh' }}>
      <div className="absolute inset-0 overflow-hidden">
        <img ref={img} src={heroImg} alt="Vista Lago d'Iseo" title="Vista panoramica del Lago d'Iseo da Goen" loading="eager" width={1920} height={1080} className="w-full h-full object-cover will-change-transform" style={{ objectPosition: '50% 30%' }} />
        <div ref={ov} className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(10,15,26,0.8) 0%, rgba(10,15,26,0.2) 50%, rgba(10,15,26,0.9) 100%)' }} />
      </div>

      {/* Giant decorative number - bleeds right */}
      <div ref={bigNum} className="absolute top-[15%] right-[-5%] pointer-events-none select-none" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(10rem, 30vw, 30rem)', lineHeight: 0.8, color: '#fff', opacity: 0.06 }}>
        '15
      </div>

      {/* Tag - top left, vertical */}
      <div ref={tag} className="absolute top-[30%] left-6 md:left-10 opacity-0 hidden md:block">
        <span className="label-sm text-white/20 block" style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>
          Porto di Goen — Pisogne — Lago d'Iseo
        </span>
      </div>

      {/* Content — centered title, bottom bar */}
      <div ref={h1} className="absolute inset-0 z-10 flex items-center justify-center">
        <h1 className="text-white text-center" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(5.5rem, 12vw, 10rem)', lineHeight: 0.9, fontWeight: 400, letterSpacing: '-0.04em' }}>
          <span className="block overflow-hidden" style={{ paddingBottom: '0.15em' }}>
            <span className="hw inline-block">Il tuo</span>
          </span>
          <span className="block overflow-hidden" style={{ paddingBottom: '0.15em' }}>
            <span className="hw inline-block" style={{ fontStyle: 'italic', color: 'var(--gold)' }}>posto</span>
          </span>
          <span className="block overflow-hidden" style={{ paddingBottom: '0.15em' }}>
            <span className="hw inline-block">sul lago</span>
          </span>
        </h1>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-16 pb-8 md:pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div ref={sub} className="max-w-sm">
            <p style={{ fontSize: 'clamp(0.85rem, 1vw, 1rem)', lineHeight: 1.7, fontWeight: 300, color: '#fff' }}>
              Ristorante, pizzeria e cocktail bar.<br />
              Cucina di pesce, pizza al forno a legna<br />
              e tramonti che non dimenticherai.
            </p>
          </div>
          <div ref={cta} className="flex items-center gap-8 flex-shrink-0">
            <a href="#contatti" className="label-sm px-8 py-4 transition-all duration-500 hover:bg-white hover:text-[var(--navy)]" style={{ background: 'var(--gold)', color: 'var(--navy)' }}>
              Prenota un tavolo
            </a>
            <a href="#menu" className="label-sm text-white hover:text-white/80 transition-colors duration-500 hidden md:flex items-center gap-3">
              <span className="w-12 h-px bg-white" />Scopri il menu
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
