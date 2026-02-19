import { Award, Users, Clock, Heart } from 'lucide-react'
import buildingImg from '../assets/foto/foto-1.webp'

const highlights = [
  { icon: Clock, label: 'Dal 2015', desc: 'Un punto di riferimento a Pisogne' },
  { icon: Users, label: '450 Posti', desc: '200 interni + 250 in terrazza' },
  { icon: Award, label: 'Team stabile', desc: 'Collaboratori presenti da oltre 10 anni' },
  { icon: Heart, label: 'Passione', desc: 'Attenzione ai dettagli e cura del cliente' },
]

export default function About() {
  return (
    <section id="chi-siamo" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={buildingImg}
                alt="Ristorante Goen Pisogne - Vista esterna"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white px-8 py-4 rounded-2xl shadow-xl hidden md:block">
              <span className="text-4xl font-serif font-bold">10+</span>
              <span className="block text-sm uppercase tracking-wider">Anni di esperienza</span>
            </div>
          </div>

          <div>
            <span className="text-gold-500 font-semibold uppercase tracking-wider text-sm">Chi Siamo</span>
            <h2 className="section-title mt-2 !text-left">
              Un punto di riferimento a Pisogne dal 2015
            </h2>
            <div className="mt-6 space-y-4 text-navy-600 leading-relaxed">
              <p>
                Il nome <strong>"Goen"</strong> deriva dalla località e dal porto dove sorge il ristorante.
                La nostra filosofia è servire piatti deliziosi in un ambiente rilassato, accogliente e senza pretese.
              </p>
              <p>
                Il nostro team è stabile: molti collaboratori sono presenti da oltre 10 anni, sin dall'apertura.
                Chef e personale di sala condividono passione, esperienza e attenzione ai dettagli.
              </p>
              <p>
                Il menu mantiene i piatti classici amati dalla clientela, ma sperimenta costantemente con nuovi
                sapori e creazioni originali. Il servizio è cordiale, attento ma mai invadente.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-3 rounded-xl bg-navy-50/50">
                  <div className="p-2 rounded-lg bg-gold-500/10 text-gold-600">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <span className="font-semibold text-navy-700 text-sm">{item.label}</span>
                    <p className="text-xs text-navy-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
