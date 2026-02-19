import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImg from '../assets/foto/foto-9.webp'
import buildingImg from '../assets/foto/foto-1.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const overlayRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const scrollRef = useRef(null)
  const sideRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current, { scale: 1.3 }, { scale: 1, duration: 2.5, ease: 'power3.out', delay: 0.2 })
      gsap.fromTo(overlayRef.current, { opacity: 1 }, { opacity: 0.55, duration: 2, ease: 'power2.out', delay: 0.3 })

      const words = headlineRef.current?.querySelectorAll('.hw')
      if (words) {
        gsap.fromTo(words, { y: '110%', rotateX: -40 }, { y: '0%', rotateX: 0, duration: 1.4, stagger: 0.12, ease: 'power4.out', delay: 0.8 })
      }

      gsap.fromTo(subRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 1.8 })
      gsap.fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 2.2 })
      gsap.fromTo(sideRef.current, { clipPath: 'inset(100% 0 0 0)', y: 40 }, { clipPath: 'inset(0% 0 0 0)', y: 0, duration: 1.5, ease: 'power3.inOut', delay: 1.4 })
      gsap.fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 3 })

      gsap.to(imgRef.current, {
        y: '20%', ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 },
      })
    }, sectionRef.current)
    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen overflow-hidden" style={{ background: 'var(--navy)' }}>
      <div className="absolute inset-0 overflow-hidden">
        <img ref={imgRef} src={heroImg} alt="Vista Lago d'Iseo" className="w-full h-full object-cover will-change-transform" />
        <div ref={overlayRef} className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,15,26,0.7) 0%, rgba(10,15,26,0.3) 40%, rgba(10,15,26,0.8) 100%)' }} />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-16 md:pb-24">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-12 lg:col-span-8">
              <p className="label-sm mb-6 md:mb-8" style={{ color: 'var(--gold)' }}>Porto di Goen — Pisogne, Lago d'Iseo</p>
              <h1 ref={headlineRef} className="display-xl text-white" style={{ perspective: '500px' }}>
                <span className="block overflow-hidden">
                  <span className="hw inline-block">Il&nbsp;</span>
                  <span className="hw inline-block">tuo&nbsp;</span>
                  <span className="hw inline-block" style={{ fontStyle: 'italic', color: 'var(--gold)' }}>posto</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="hw inline-block">sul&nbsp;</span>
                  <span className="hw inline-block">lago</span>
                </span>
              </h1>
              <div ref={subRef} className="mt-8 md:mt-12 max-w-lg">
                <p className="text-white/60" style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)', lineHeight: 1.7, fontWeight: 300 }}>
                  Ristorante, pizzeria e cocktail bar. Cucina di pesce, pizza al forno a legna e tramonti che non dimenticherai.
                </p>
              </div>
              <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-6">
                <a href="#contatti" className="label-sm px-8 py-4 transition-all duration-500 hover:bg-white" style={{ background: 'var(--gold)', color: 'var(--navy)' }}>Prenota un tavolo</a>
                <a href="#menu" className="label-sm text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-3">
                  <span className="w-8 h-px bg-white/40" />Scopri il menu
                </a>
              </div>
            </div>
            <div className="hidden lg:block col-span-4 relative">
              <div ref={sideRef} className="w-full aspect-[3/4] overflow-hidden" style={{ marginBottom: '-4rem' }}>
                <img src={buildingImg} alt="Ristorante Goen" className="w-full h-full object-cover" />
              </div>
              <p className="label-sm text-white/30 mt-6 text-right">Dal 2015</p>
            </div>
          </div>
        </div>
        <div ref={scrollRef} className="absolute bottom-8 left-6 md:left-12 flex items-center gap-3 opacity-0">
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <div className="w-full h-1/2 bg-white/60 animate-[heroSlide_2s_ease-in-out_infinite]" />
          </div>
          <span className="label-sm text-white/30" style={{ writingMode: 'vertical-lr' }}>Scroll</span>
        </div>
      </div>
      <style>{`@keyframes heroSlide{0%{transform:translateY(-100%)}100%{transform:translateY(200%)}}`}</style>
    </section>
  )
}
