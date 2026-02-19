import { MapPin, Car, Train, Bike, Wifi, Accessibility, ParkingCircle, Users } from 'lucide-react'
import terraceImg from '../assets/foto/foto-8.webp'
import lakeImg from '../assets/foto/foto-9.webp'
import interiorImg from '../assets/foto/foto-11.webp'

const features = [
  { icon: ParkingCircle, text: 'Parcheggio disponibile' },
  { icon: Wifi, text: 'Wi-Fi gratuito' },
  { icon: Accessibility, text: 'Accessibile in sedia a rotelle' },
  { icon: Users, text: '450 posti totali' },
]

const directions = [
  { icon: Car, text: 'Da Brescia: 40 minuti' },
  { icon: Car, text: 'Da Bergamo: 50 minuti' },
  { icon: Train, text: 'Stazione Pisogne: 10 min a piedi' },
  { icon: Bike, text: 'Sulla ciclabile Vello–Toline' },
]

export default function Location() {
  return (
    <section id="location" className="section-padding bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold-500 font-semibold uppercase tracking-wider text-sm">La Location</span>
          <h2 className="section-title mt-2">Le Terrazze sul Lago</h2>
          <p className="section-subtitle">
            Vista panoramica sul Lago d'Iseo. Le ampie terrazze lo rendono il locale estivo per eccellenza
            e il perfetto "one place" dove trascorrere la giornata in riva al lago.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-xl group">
            <img
              src={terraceImg}
              alt="Terrazza Goen con vista Lago d'Iseo"
              className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-serif text-2xl font-bold">Terrazza Vista Lago</h3>
              <p className="text-white/80 text-sm mt-1">250 posti all'aperto</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group flex-1">
              <img
                src={lakeImg}
                alt="Fiori e vista lago dalla terrazza del Goen"
                className="w-full h-full min-h-[190px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-serif text-lg font-bold">Vista Mozzafiato</h3>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl group flex-1">
              <img
                src={interiorImg}
                alt="Sala interna Ristorante Goen con camino"
                className="w-full h-full min-h-[190px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-serif text-lg font-bold">Sala Interna</h3>
                <p className="text-white/80 text-xs mt-0.5">200 posti interni</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="font-serif text-xl font-bold text-navy-700 mb-4">Servizi</h3>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-lake-50 text-lake-600">
                    <f.icon size={18} />
                  </div>
                  <span className="text-sm text-navy-600">{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="font-serif text-xl font-bold text-navy-700 mb-4">Come Raggiungerci</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {directions.map((d, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gold-50 text-gold-600">
                    <d.icon size={18} />
                  </div>
                  <span className="text-sm text-navy-600">{d.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
