import { useState } from 'react'
import { X, Instagram } from 'lucide-react'
import foto1 from '../assets/foto/foto-1.webp'
import foto2 from '../assets/foto/foto-2.webp'
import foto3 from '../assets/foto/foto-3.webp'
import foto4 from '../assets/foto/foto-4.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto9 from '../assets/foto/foto-9.webp'
import foto10 from '../assets/foto/foto-10.webp'
import foto11 from '../assets/foto/foto-11.webp'

const images = [
  { src: foto9, alt: 'Vista lago con fiori dalla terrazza', category: 'Location' },
  { src: foto6, alt: 'Grigliata di pesce fresco', category: 'Piatti' },
  { src: foto1, alt: 'Vista esterna del ristorante Goen', category: 'Location' },
  { src: foto3, alt: 'Pasta fresca con capesante', category: 'Piatti' },
  { src: foto8, alt: 'Calici di vino con vista porto', category: 'Location' },
  { src: foto11, alt: 'Sala interna con camino', category: 'Ambiente' },
  { src: foto7, alt: 'Fritto misto di calamari', category: 'Piatti' },
  { src: foto2, alt: 'Piatto di dessert assortiti', category: 'Piatti' },
  { src: foto10, alt: 'Sala interna elegante', category: 'Ambiente' },
  { src: foto4, alt: 'Cialda con fragole fresche', category: 'Piatti' },
  { src: foto5, alt: 'Tortino al cioccolato', category: 'Piatti' },
]

const categories = ['Tutti', 'Location', 'Piatti', 'Ambiente']

export default function Gallery() {
  const [filter, setFilter] = useState('Tutti')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'Tutti' ? images : images.filter((img) => img.category === filter)

  return (
    <section id="galleria" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-gold-500 font-semibold uppercase tracking-wider text-sm">Galleria</span>
          <h2 className="section-title mt-2">I Nostri Scatti</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-navy-700 text-white shadow-lg'
                  : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/goenristorante/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-semibold rounded-full hover:shadow-lg transition-shadow text-sm uppercase tracking-wider"
          >
            <Instagram size={18} />
            Seguici su Instagram
          </a>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
          >
            <X size={28} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  )
}
