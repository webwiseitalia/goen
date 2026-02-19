import { Star, Quote } from 'lucide-react'

const platforms = [
  { name: 'Google', rating: '4.2', count: '1.352 recensioni', stars: 4 },
  { name: 'OpenTable', rating: '4.8', count: 'Eccellente', stars: 5 },
  { name: 'TripAdvisor', rating: '3.5', count: '291 recensioni', stars: 4 },
  { name: 'Quandoo', rating: '5.9/10', count: 'Consigliato', stars: 3 },
]

const testimonials = [
  {
    text: 'Location eccezionale e vista mozzafiato! Il tramonto dalla terrazza è qualcosa di indimenticabile. Torneremo sicuramente.',
    author: 'Marco R.',
    source: 'Google',
  },
  {
    text: 'Pizza eccellente e ben lievitata, una delle migliori del lago. Il pesce fresco e abbondante. Rapporto qualità-prezzo ottimo.',
    author: 'Laura B.',
    source: 'TripAdvisor',
  },
  {
    text: 'Personale giovane, cordiale e attento. L\'entrée di benvenuto è un tocco di classe. Ambiente pulito, curato e moderno.',
    author: 'Giovanni T.',
    source: 'OpenTable',
  },
]

export default function Reviews() {
  return (
    <section id="recensioni" className="section-padding bg-navy-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold-500 font-semibold uppercase tracking-wider text-sm">Recensioni</span>
          <h2 className="section-title mt-2">Cosa Dicono i Nostri Ospiti</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {platforms.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <span className="text-sm font-semibold text-navy-500 uppercase tracking-wider">{p.name}</span>
              <div className="text-3xl font-serif font-bold text-navy-700 mt-2">{p.rating}</div>
              <div className="flex justify-center gap-0.5 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < p.stars ? 'fill-gold-500 text-gold-500' : 'text-gray-200'}
                  />
                ))}
              </div>
              <span className="text-xs text-navy-400 mt-2 block">{p.count}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow relative">
              <Quote size={32} className="text-gold-200 absolute top-6 right-6" />
              <p className="text-navy-600 leading-relaxed italic mb-6 relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center text-white font-bold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <span className="font-semibold text-navy-700 text-sm">{t.author}</span>
                  <span className="block text-xs text-navy-400">{t.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
