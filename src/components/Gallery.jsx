import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

gsap.registerPlugin(ScrollTrigger)

const images = [
  { src: foto9, alt: 'Vista lago', tall: true },
  { src: foto6, alt: 'Grigliata di pesce', tall: false },
  { src: foto1, alt: 'Esterno ristorante', tall: false },
  { src: foto3, alt: 'Pasta con capesante', tall: true },
  { src: foto8, alt: 'Calici al tramonto', tall: false },
  { src: foto11, alt: 'Sala con camino', tall: true },
  { src: foto7, alt: 'Fritto misto', tall: false },
  { src: foto2, alt: 'Dessert', tall: false },
  { src: foto10, alt: 'Sala elegante', tall: true },
  { src: foto4, alt: 'Cialda fragole', tall: false },
  { src: foto5, alt: 'Tortino cioccolato', tall: false },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gal-item').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 60 + (i % 3) * 20, opacity: 0, scale: 0.97 },
          {
            y: 0, opacity: 1, scale: 1,
            duration: 1 + (i % 3) * 0.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%' },
          }
        )
      })
    }, ref.current)
    return () => ctx.revert()
  }, [])

  return (
    <section id="galleria" ref={ref} style={{ background: 'var(--navy)' }}>
      <div className="px-6 md:px-12 lg:px-20 py-[var(--space-xl)]">
        {/* Header */}
        <div className="grid grid-cols-12 mb-12 md:mb-20">
          <div className="col-span-12 md:col-span-8 md:col-start-5 text-right">
            <div className="flex items-center gap-4 justify-end mb-4">
              <span className="label-sm" style={{ color: 'var(--gold)' }}>Galleria</span>
              <span className="editorial-divider" />
            </div>
            <h2 className="display-lg text-white">
              I nostri <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>scatti</em>
            </h2>
          </div>
        </div>

        {/* Irregular masonry - three columns with different heights */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`gal-item overflow-hidden cursor-pointer group ${img.tall ? 'row-span-2' : ''}`}
              onClick={() => setLightbox(img)}
              style={{ aspectRatio: img.tall ? '3/5' : '4/3' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/goenristorante/"
            target="_blank"
            rel="noopener noreferrer"
            className="label-sm text-white/40 hover:text-white transition-colors duration-300 inline-flex items-center gap-3"
          >
            <span className="w-8 h-px bg-white/30" />
            @goenristorante su Instagram
            <span className="w-8 h-px bg-white/30" />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer" style={{ background: 'rgba(10,15,26,0.95)' }} onClick={() => setLightbox(null)}>
          <img src={lightbox.src} alt={lightbox.alt} className="max-w-full max-h-[85vh] object-contain" />
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 label-sm text-white/50 hover:text-white transition-colors">Chiudi</button>
        </div>
      )}
    </section>
  )
}
