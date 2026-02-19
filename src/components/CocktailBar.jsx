import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import wineImg from '../assets/foto/foto-8.webp'

gsap.registerPlugin(ScrollTrigger)

export default function CocktailBar() {
  const ref = useRef(null)
  const imgRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imgRef.current) {
        gsap.to(imgRef.current, { y: '30%', ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 0.5 } })
      }
      // Horizontal line grows on scroll
      if (lineRef.current) {
        gsap.fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top 60%', end: 'center center', scrub: 0.5 } })
      }
      gsap.utils.toArray('.cf').forEach((el) => {
        gsap.fromTo(el, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
      })
    }, ref.current)
    return () => ctx.revert()
  }, [])

  return (
    <section id="cocktail" ref={ref} className="relative overflow-hidden" style={{ background: 'var(--navy)', minHeight: '110vh' }}>
      {/* Parallax BG */}
      <div className="absolute inset-0 overflow-hidden">
        <img ref={imgRef} src={wineImg} alt="Calici di vino al tramonto" title="Cocktail bar con vista tramonto sul Lago d'Iseo" loading="lazy" width={1920} height={1080} className="w-[110%] h-[140%] object-cover will-change-transform" style={{ marginTop: '-20%', marginLeft: '-5%' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(200deg, rgba(10,15,26,0.92) 0%, rgba(10,15,26,0.5) 40%, rgba(10,15,26,0.95) 100%)' }} />
      </div>

      {/* Content — nothing centered, extreme asymmetry */}
      <div className="relative z-10 min-h-[110vh] flex flex-col justify-between px-6 md:px-16 py-[var(--space-xl)]">
        {/* Top: label far right */}
        <div className="cf flex justify-end">
          <div className="flex items-center gap-3">
            <span className="label-sm" style={{ color: 'var(--gold)' }}>Cocktail Bar</span>
            <span className="editorial-divider" />
          </div>
        </div>

        {/* Middle: huge headline, left-aligned, with line cutting through */}
        <div className="relative">
          <div ref={lineRef} className="absolute top-1/2 left-0 right-0 h-px origin-left" style={{ background: 'rgba(196,152,63,0.3)' }} />
          <h2 className="cf display-xxl text-white relative z-10" style={{ mixBlendMode: 'difference' }}>
            Un tramonto,
          </h2>
          <h2 className="cf display-xxl indent-deep relative z-10" style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
            il lago
          </h2>
        </div>

        {/* Bottom: offerings scattered, not a grid */}
        <div>
          <div className="grid grid-cols-12 gap-y-6">
            <div className="cf col-span-6 md:col-span-2">
              <span className="label-sm block text-white/15 mb-1">01</span>
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Cocktail d'autore e long drink</span>
            </div>
            <div className="cf col-span-6 md:col-span-2 md:col-start-4">
              <span className="label-sm block text-white/15 mb-1">02</span>
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Vini lombardi e prosecco</span>
            </div>
            <div className="cf col-span-6 md:col-span-2 md:col-start-7">
              <span className="label-sm block text-white/15 mb-1">03</span>
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Aperitivi a buffet con vista</span>
            </div>
            <div className="cf col-span-6 md:col-span-2 md:col-start-11">
              <span className="label-sm block text-white/15 mb-1">04</span>
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Aperto fino a tarda sera</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
