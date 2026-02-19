import { Heart, Briefcase, PartyPopper, Music, Utensils, Users } from 'lucide-react'
import interiorImg from '../assets/foto/foto-10.webp'

const eventTypes = [
  { icon: Heart, label: 'Matrimoni & Cerimonie', desc: 'Battesimi, cresime, comunioni' },
  { icon: Briefcase, label: 'Cene Aziendali', desc: 'Pranzi di lavoro e meeting' },
  { icon: PartyPopper, label: 'Feste Private', desc: 'Compleanni e ricorrenze' },
  { icon: Music, label: 'Serate Speciali', desc: 'Luxury Night, DJ set, cene cantate' },
  { icon: Utensils, label: 'Buffet & Ricevimenti', desc: 'Menu personalizzabili' },
  { icon: Users, label: 'Grandi Gruppi', desc: 'Capienza fino a 450 persone' },
]

export default function Events() {
  return (
    <section id="eventi" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-gold-500 font-semibold uppercase tracking-wider text-sm">Eventi & Cerimonie</span>
            <h2 className="section-title mt-2 !text-left">
              Il luogo perfetto per ogni occasione
            </h2>
            <p className="text-navy-600 mt-4 leading-relaxed">
              Il Ristorante Goen è perfetto per organizzare cerimonie, eventi, pranzi,
              cene e ricevimenti a buffet. Menu personalizzabili per ogni occasione speciale.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {eventTypes.map((event) => (
                <div
                  key={event.label}
                  className="p-4 rounded-xl border border-navy-100 hover:border-gold-300 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-navy-50 text-navy-600 w-fit group-hover:bg-gold-50 group-hover:text-gold-600 transition-colors">
                    <event.icon size={20} />
                  </div>
                  <h4 className="font-semibold text-navy-700 text-sm mt-3">{event.label}</h4>
                  <p className="text-xs text-navy-500 mt-1">{event.desc}</p>
                </div>
              ))}
            </div>

            <a href="#contatti" className="btn-primary mt-8 inline-flex">
              Richiedi un preventivo
            </a>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={interiorImg}
                alt="Sala interna Goen - location per eventi e cerimonie"
                className="w-full h-[400px] md:h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
