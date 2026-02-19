import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import interiorImg from '../assets/foto/foto-11.webp'
import salaImg from '../assets/foto/foto-10.webp'
import buildingImg from '../assets/foto/foto-1.webp'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const ref = useRef(null)
  const bigTextRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.af').forEach((el) => {
        gsap.fromTo(el, { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
      })
      gsap.utils.toArray('.a-img').forEach((el, i) => {
        const dirs = ['inset(100% 0 0 0)', 'inset(0 100% 0 0)', 'inset(0 0 100% 0)']
        gsap.fromTo(el, { clipPath: dirs[i % 3], scale: 1.1 }, { clipPath: 'inset(0 0 0 0)', scale: 1, duration: 0.55, ease: 'power3.inOut', scrollTrigger: { trigger: el, start: 'top 82%' } })
      })
      // Big text parallax
      if (bigTextRef.current) {
        gsap.to(bigTextRef.current, {
          x: '-10%', ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
        })
      }
      // Counter
      gsap.utils.toArray('.cn').forEach((el) => {
        const v = parseInt(el.dataset.v)
        gsap.fromTo(el, { textContent: 0 }, { textContent: v, duration: 0.8, ease: 'power2.out', snap: { textContent: 1 }, scrollTrigger: { trigger: el, start: 'top 88%' } })
      })
    }, ref.current)
    return () => ctx.revert()
  }, [])

  return (
    <section id="chi-siamo" ref={ref} style={{ background: 'var(--cream)' }}>
      {/* Giant sliding background text */}
      <div className="overflow-hidden pointer-events-none select-none" style={{ paddingTop: 'var(--space-lg)' }}>
        <div ref={bigTextRef} className="whitespace-nowrap" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(6rem, 18vw, 18rem)', lineHeight: 0.85, color: 'rgba(10,15,26,0.04)', fontWeight: 400, letterSpacing: '-0.04em' }}>
          Goen Ristorante&nbsp;&nbsp;Goen Ristorante&nbsp;&nbsp;Goen Ristorante
        </div>
      </div>

      {/* Content overlaps the giant text */}
      <div style={{ marginTop: 'clamp(-5rem, -10vw, -12rem)' }}>
        {/* Row 1: image left (bleeds), text far right */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-5 relative" style={{ marginLeft: '-2vw' }}>
            <div className="a-img overflow-hidden" style={{ height: 'clamp(30rem, 60vh, 45rem)' }}>
              <img src={interiorImg} alt="Sala con camino" className="w-full h-full object-cover" />
            </div>
            {/* Floating label overlapping image bottom-right */}
            <div className="af absolute -bottom-4 right-4 md:right-8 px-5 py-3 z-10" style={{ background: 'var(--cream)' }}>
              <span className="label-sm" style={{ color: 'var(--gold)' }}>Dal 2015</span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8 px-6 md:px-0 flex flex-col justify-end pb-8">
            <div className="af">
              <span className="label-sm" style={{ color: 'var(--gold)' }}>Chi Siamo</span>
              <h2 className="display-lg mt-3" style={{ color: 'var(--navy)' }}>
                Un punto<br />di <em style={{ fontStyle: 'italic', color: 'var(--gold-muted)' }}>riferimento</em>
              </h2>
            </div>
          </div>
        </div>

        {/* Row 2: text deeply indented, small image floating right with offset */}
        <div className="grid grid-cols-12 gap-4 mt-12 md:mt-0">
          <div className="col-span-12 md:col-span-4 md:col-start-4 px-6 md:px-0" style={{ marginTop: 'clamp(-1rem, -3vw, -5rem)' }}>
            <div className="af space-y-5">
              <p className="text-editorial">
                Il nome <strong style={{ fontWeight: 500, color: 'var(--text)' }}>"Goen"</strong> deriva dalla località e dal porto dove sorge il ristorante. La nostra filosofia è servire piatti deliziosi in un ambiente rilassato e senza pretese.
              </p>
              <p className="text-editorial">
                Il team è stabile — molti collaboratori sono qui da oltre dieci anni. Il menu mantiene i classici amati ma sperimenta con nuovi sapori. Il servizio è cordiale, attento ma mai invadente.
              </p>
            </div>
          </div>

          <div className="col-span-8 col-start-3 md:col-span-3 md:col-start-9 px-6 md:px-0" style={{ marginTop: 'clamp(2rem, 6vw, 8rem)' }}>
            <div className="a-img overflow-hidden aspect-[3/4]">
              <img src={salaImg} alt="Sala elegante" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Row 3: building image small, far left, overlapping with stats that bleed right */}
        <div className="grid grid-cols-12 gap-4" style={{ marginTop: 'clamp(3rem, 6vw, 8rem)' }}>
          <div className="col-span-5 md:col-span-3 col-start-1 px-6 md:pl-10 md:px-0">
            <div className="a-img overflow-hidden aspect-[4/5]">
              <img src={buildingImg} alt="Goen dal drone" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-5 px-6 md:px-0 flex items-end pb-4" style={{ marginBottom: 'var(--space-xl)' }}>
            <div className="af flex flex-wrap gap-x-12 md:gap-x-20 lg:gap-x-28 gap-y-6">
              {[
                { v: 2015, l: 'Anno di apertura', suf: '' },
                { v: 450, l: 'Posti a sedere', suf: '' },
                { v: 10, l: 'Anni di team', suf: '+' },
              ].map((s) => (
                <div key={s.l}>
                  <span className="display-md block" style={{ color: 'var(--navy)' }}><span className="cn" data-v={s.v}>0</span>{s.suf}</span>
                  <span className="label-sm block mt-1" style={{ color: 'var(--text-muted)' }}>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
