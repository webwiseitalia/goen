import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const quotes = [
  { text: 'Location eccezionale e vista mozzafiato! Il tramonto dalla terrazza è qualcosa di indimenticabile.', who: 'Marco R.', from: 'Google', size: 'lg' },
  { text: 'Pizza eccellente e ben lievitata. Pesce fresco e abbondante.', who: 'Laura B.', from: 'TripAdvisor', size: 'sm' },
  { text: 'Personale giovane, cordiale e attento. L\'entrée di benvenuto è un tocco di classe. Ambiente moderno e curato.', who: 'Giovanni T.', from: 'OpenTable', size: 'md' },
  { text: 'Ottimo rapporto qualità-prezzo. Ci torneremo.', who: 'Alessia M.', from: 'Google', size: 'sm' },
]

const ratings = [
  { name: 'Google', val: '4.2', note: '1.352 recensioni' },
  { name: 'OpenTable', val: '4.8', note: '' },
  { name: 'TripAdvisor', val: '3.5', note: '291 recensioni' },
  { name: 'Quandoo', val: '5.9', note: '/10' },
]

export default function Reviews() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.rf').forEach((el, i) => {
        const dirs = [
          { x: -60, y: 30, rotate: -1 },
          { x: 40, y: 50, rotate: 0.5 },
          { x: -30, y: 70, rotate: -0.5 },
          { x: 50, y: 40, rotate: 1 },
        ]
        const d = dirs[i % 4]
        gsap.fromTo(el, { x: d.x, y: d.y, opacity: 0, rotate: d.rotate }, { x: 0, y: 0, opacity: 1, rotate: 0, duration: 0.7 + i * 0.05, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } })
      })
    }, ref.current)
    return () => ctx.revert()
  }, [])

  return (
    <section id="recensioni" ref={ref} style={{ background: 'var(--cream-dark)' }}>
      <div style={{ padding: 'var(--space-xl) 0' }}>
        {/* Ratings — spread across width with irregular gaps */}
        <div className="px-6 md:px-12 lg:px-20 mb-16 md:mb-24">
          <div className="flex flex-wrap items-end gap-x-8 md:gap-x-16 lg:gap-x-24 gap-y-4">
            <div className="rf">
              <span className="label-sm block" style={{ color: 'var(--gold)' }}>Recensioni</span>
              <h2 className="display-md mt-1" style={{ color: 'var(--navy)' }}>Cosa dicono</h2>
            </div>
            {ratings.map((r) => (
              <div key={r.name} className="rf">
                <span className="label-sm block" style={{ color: 'var(--text-muted)' }}>{r.name}</span>
                <span className="display-sm block" style={{ color: 'var(--navy)' }}>{r.val}<span style={{ fontSize: '0.6em', color: 'var(--text-muted)' }}>{r.note}</span></span>
              </div>
            ))}
          </div>
        </div>

        {/* Quotes — scattered, different sizes, different positions, NO alignment */}
        <div className="relative px-6 md:px-12 lg:px-20" style={{ minHeight: 'clamp(30rem, 50vh, 50rem)' }}>
          {quotes.map((q, i) => {
            const positions = [
              { left: '0', top: '0', maxW: '28rem', pl: '0' },
              { left: 'auto', top: '3rem', maxW: '22rem', pl: '55%' },
              { left: '10%', top: 'auto', maxW: '32rem', pl: '8%' },
              { left: 'auto', top: 'auto', maxW: '20rem', pl: '60%' },
            ]
            const p = positions[i]
            const sizes = { lg: 'clamp(1.3rem, 2.2vw, 1.8rem)', md: 'clamp(1.1rem, 1.6vw, 1.4rem)', sm: 'clamp(0.95rem, 1.2vw, 1.1rem)' }
            return (
              <div key={i} className="rf mb-12 md:mb-16" style={{ maxWidth: p.maxW, paddingLeft: p.pl }}>
                <blockquote>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: sizes[q.size], lineHeight: 1.4, color: 'var(--navy)', fontStyle: 'italic', fontWeight: 400 }}>
                    "{q.text}"
                  </p>
                  <footer className="mt-3 flex items-center gap-3">
                    <span className="w-5 h-px" style={{ background: 'var(--gold)' }} />
                    <span className="label-sm" style={{ color: 'var(--text-muted)' }}>{q.who} — {q.from}</span>
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
