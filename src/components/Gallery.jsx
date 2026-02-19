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

// Chaotic layout definitions — each image has unique positioning
const items = [
  { src: foto9, alt: 'Vista lago', w: '58%', h: '58vh', ml: '0', mt: '0' },
  { src: foto6, alt: 'Grigliata pesce', w: '38%', h: '42vh', ml: '60%', mt: '-30vh' },
  { src: foto3, alt: 'Pasta capesante', w: '43%', h: '52vh', ml: '5%', mt: '-5vh' },
  { src: foto1, alt: 'Esterno ristorante', w: '34%', h: '38vh', ml: '50%', mt: '-15vh' },
  { src: foto11, alt: 'Sala camino', w: '48%', h: '60vh', ml: '45%', mt: '2vh' },
  { src: foto8, alt: 'Calici tramonto', w: '42%', h: '48vh', ml: '2%', mt: '-25vh' },
  { src: foto7, alt: 'Fritto misto', w: '32%', h: '38vh', ml: '55%', mt: '-10vh' },
  { src: foto2, alt: 'Dessert', w: '36%', h: '42vh', ml: '10%', mt: '0' },
  { src: foto10, alt: 'Sala elegante', w: '45%', h: '52vh', ml: '48%', mt: '-20vh' },
  { src: foto4, alt: 'Fragole', w: '30%', h: '35vh', ml: '3%', mt: '-8vh' },
  { src: foto5, alt: 'Tortino', w: '34%', h: '40vh', ml: '35%', mt: '-5vh' },
]

export default function Gallery() {
  const [lb, setLb] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gi').forEach((el, i) => {
        const yStart = 40 + (i % 5) * 25
        const rotStart = (i % 2 === 0 ? 1 : -1) * (0.5 + Math.random())
        gsap.fromTo(el,
          { y: yStart, opacity: 0, rotate: rotStart, scale: 0.92 },
          { y: 0, opacity: 1, rotate: 0, scale: 1, duration: 0.4 + (i % 3) * 0.05, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%' } }
        )
      })
    }, ref.current)
    return () => ctx.revert()
  }, [])

  return (
    <section id="galleria" ref={ref} style={{ background: 'var(--navy)' }}>
      <div style={{ padding: 'var(--space-xl) 0 var(--space-lg)' }}>
        {/* Header — far left, label + title stacked */}
        <div className="px-6 md:px-16 mb-12 md:mb-20">
          <span className="label-sm" style={{ color: 'var(--gold)' }}>Galleria</span>
          <h2 className="display-lg text-white mt-2">
            I nostri<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>scatti</em>
          </h2>
        </div>

        {/* Chaotic overlap — each image positioned independently */}
        <div className="relative px-4 md:px-8">
          {items.map((img, i) => (
            <div
              key={i}
              className="gi relative overflow-hidden cursor-pointer group"
              style={{ width: img.w, height: img.h, marginLeft: img.ml, marginTop: img.mt }}
              onClick={() => setLb(img)}
            >
              <img src={img.src} alt={img.alt} title={`${img.alt} - Galleria Goen`} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          ))}
        </div>

        {/* IG link — asymmetric */}
        <div className="mt-16 px-6 md:px-16 flex justify-end">
          <a href="https://www.instagram.com/goenristorante/" target="_blank" rel="noopener noreferrer" className="label-sm text-white/25 hover:text-white/70 transition-colors duration-500 flex items-center gap-3">
            @goenristorante
            <span className="w-10 h-px bg-white/20" />
          </a>
        </div>
      </div>

      {lb && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer" style={{ background: 'rgba(10,15,26,0.96)' }} onClick={() => setLb(null)}>
          <img src={lb.src} alt={lb.alt} title={lb.alt} width={1200} height={800} className="max-w-full max-h-[85vh] object-contain" />
          <button onClick={() => setLb(null)} className="absolute top-6 right-8 label-sm text-white/40 hover:text-white transition-colors">Chiudi</button>
        </div>
      )}
    </section>
  )
}
