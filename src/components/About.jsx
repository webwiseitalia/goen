import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import interiorImg from '../assets/foto/foto-11.webp'
import salaImg from '../assets/foto/foto-10.webp'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.about-fade').forEach((el) => {
        gsap.fromTo(el, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } })
      })
      gsap.utils.toArray('.about-img').forEach((el) => {
        gsap.fromTo(el, { clipPath: 'inset(40% 0 0 0)', scale: 1.15 }, { clipPath: 'inset(0% 0 0 0)', scale: 1, duration: 1.8, ease: 'power3.inOut', scrollTrigger: { trigger: el, start: 'top 80%' } })
      })
      gsap.utils.toArray('.counter-num').forEach((el) => {
        const target = parseInt(el.dataset.value)
        gsap.fromTo(el, { textContent: 0 }, { textContent: target, duration: 2, ease: 'power2.out', snap: { textContent: 1 }, scrollTrigger: { trigger: el, start: 'top 85%' } })
      })
    }, ref.current)
    return () => ctx.revert()
  }, [])

  return (
    <section id="chi-siamo" ref={ref} style={{ background: 'var(--cream)' }}>
      <div className="px-6 md:px-12 lg:px-20 pt-[var(--space-xl)]">
        <div className="about-fade flex items-center gap-4 mb-6">
          <span className="editorial-divider" />
          <span className="label-sm" style={{ color: 'var(--gold)' }}>Chi Siamo</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-y-8 md:gap-y-0">
        <div className="col-span-12 lg:col-span-7 px-6 md:px-12 lg:pl-20 lg:pr-0">
          <h2 className="about-fade display-lg" style={{ color: 'var(--navy)' }}>
            Un punto di<br /><em className="not-italic" style={{ color: 'var(--gold-muted)' }}>riferimento</em><br />a Pisogne
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:-ml-8">
          <div className="about-img aspect-[4/5] overflow-hidden lg:aspect-auto lg:h-[70vh]">
            <img src={interiorImg} alt="Sala interna con camino" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 mt-12 md:mt-0">
        <div className="col-span-12 md:col-span-6 md:col-start-2 lg:col-span-4 lg:col-start-2 px-6 md:px-0" style={{ marginTop: 'clamp(-2rem, -4vw, -6rem)' }}>
          <div className="about-fade space-y-5">
            <p className="text-editorial">
              Il nome <strong style={{ fontWeight: 500, color: 'var(--text)' }}>"Goen"</strong> deriva dalla località e dal porto dove sorge il ristorante. La nostra filosofia è servire piatti deliziosi in un ambiente rilassato, accogliente e senza pretese.
            </p>
            <p className="text-editorial">
              Il team è stabile — molti collaboratori sono presenti da oltre dieci anni, sin dall'apertura. Chef e personale di sala condividono passione, esperienza e attenzione ai dettagli.
            </p>
          </div>
        </div>
        <div className="col-span-10 col-start-2 md:col-span-4 md:col-start-8 lg:col-span-3 lg:col-start-8 px-6 md:px-0 mt-12 md:mt-16">
          <div className="about-img aspect-[3/4] overflow-hidden">
            <img src={salaImg} alt="Sala elegante" className="w-full h-full object-cover" />
          </div>
          <p className="about-fade label-sm mt-4" style={{ color: 'var(--text-muted)' }}>Sala interna — 200 coperti</p>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 mt-20 md:mt-32 pb-[var(--space-lg)]">
        <div className="about-fade flex flex-wrap gap-x-16 md:gap-x-24 lg:gap-x-32 gap-y-8">
          {[
            { value: 2015, label: 'Anno di apertura', suffix: '' },
            { value: 450, label: 'Posti a sedere', suffix: '' },
            { value: 10, label: 'Anni di esperienza del team', suffix: '+' },
          ].map((s) => (
            <div key={s.label}>
              <span className="display-md block" style={{ color: 'var(--navy)' }}><span className="counter-num" data-value={s.value}>0</span>{s.suffix}</span>
              <span className="label-sm block mt-2" style={{ color: 'var(--text-muted)' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
