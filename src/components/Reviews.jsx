import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  { text: 'Location eccezionale e vista mozzafiato! Il tramonto dalla terrazza è qualcosa di indimenticabile.', author: 'Marco R.', source: 'Google' },
  { text: 'Pizza eccellente e ben lievitata, una delle migliori del lago. Pesce fresco e abbondante. Ottimo rapporto qualità-prezzo.', author: 'Laura B.', source: 'TripAdvisor' },
  { text: 'Personale giovane, cordiale e attento. L\'entrée di benvenuto è un tocco di classe. Ambiente pulito e moderno.', author: 'Giovanni T.', source: 'OpenTable' },
]

const platforms = [
  { name: 'Google', rating: '4.2', detail: '1.352 recensioni' },
  { name: 'OpenTable', rating: '4.8', detail: 'Eccellente' },
  { name: 'TripAdvisor', rating: '3.5', detail: '291 recensioni' },
  { name: 'Quandoo', rating: '5.9', detail: 'su 10' },
]

export default function Reviews() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.rev-fade').forEach((el, i) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: i * 0.08, scrollTrigger: { trigger: el, start: 'top 87%' } })
      })
    }, ref.current)
    return () => ctx.revert()
  }, [])

  return (
    <section id="recensioni" ref={ref} style={{ background: 'var(--cream-dark)' }}>
      <div className="px-6 md:px-12 lg:px-20 py-[var(--space-xl)]">
        {/* Header */}
        <div className="grid grid-cols-12 mb-16">
          <div className="col-span-12 lg:col-span-8">
            <div className="rev-fade flex items-center gap-4 mb-4">
              <span className="editorial-divider" />
              <span className="label-sm" style={{ color: 'var(--gold)' }}>Recensioni</span>
            </div>
            <h2 className="rev-fade display-lg" style={{ color: 'var(--navy)' }}>
              Cosa dicono<br />i nostri <em style={{ fontStyle: 'italic', color: 'var(--gold-muted)' }}>ospiti</em>
            </h2>
          </div>
        </div>

        {/* Ratings - horizontal, irregular spacing */}
        <div className="rev-fade flex flex-wrap gap-x-12 md:gap-x-20 gap-y-6 mb-20 pb-12 border-b" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
          {platforms.map((p) => (
            <div key={p.name}>
              <span className="label-sm block" style={{ color: 'var(--text-muted)' }}>{p.name}</span>
              <span className="display-md block" style={{ color: 'var(--navy)' }}>{p.rating}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{p.detail}</span>
            </div>
          ))}
        </div>

        {/* Testimonials - staggered columns, not a grid of cards */}
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {testimonials.map((t, i) => {
            const colClasses = [
              'col-span-12 md:col-span-5 md:col-start-1',
              'col-span-12 md:col-span-5 md:col-start-6 md:mt-16',
              'col-span-12 md:col-span-5 md:col-start-3 md:mt-8',
            ]
            return (
              <div key={i} className={`rev-fade ${colClasses[i]}`}>
                <blockquote>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', lineHeight: 1.5, color: 'var(--navy)', fontStyle: 'italic', fontWeight: 400 }}>
                    "{t.text}"
                  </p>
                  <footer className="mt-4 flex items-center gap-3">
                    <span className="w-6 h-px" style={{ background: 'var(--gold)' }} />
                    <span className="label-sm" style={{ color: 'var(--text-muted)' }}>{t.author} — {t.source}</span>
                  </footer>
                </blockquote>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
