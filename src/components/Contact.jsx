import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import terraceImg from '../assets/foto/foto-9.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const ref = useRef(null)
  const [fd, setFd] = useState({ nome: '', data: '', ora: '', persone: '', note: '', evento: false })
  const [sent, setSent] = useState(false)

  const hc = (e) => {
    const { name, value, type, checked } = e.target
    setFd((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }))
  }
  const hs = (e) => {
    e.preventDefault()
    const m = `Prenotazione Goen:%0ANome: ${fd.nome}%0AData: ${fd.data}%0AOra: ${fd.ora}%0APersone: ${fd.persone}${fd.evento ? '%0ATipo: Evento/Cerimonia' : ''}${fd.note ? `%0ANote: ${fd.note}` : ''}`
    window.open(`https://wa.me/39036487229?text=${m}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.ctf').forEach((el) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
      })
    }, ref.current)
    return () => ctx.revert()
  }, [])

  const iSt = { width: '100%', padding: '0.85rem 0', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', outline: 'none', color: 'var(--text)', fontSize: '0.9rem', fontFamily: 'var(--font-body)' }

  return (
    <section id="contatti" ref={ref} className="relative" style={{ background: 'var(--cream)' }}>
      {/* Background image — 40% height, bleeds at top */}
      <div className="relative w-full overflow-hidden" style={{ height: '45vh' }}>
        <img src={terraceImg} alt="Terrazza" className="w-full h-full object-cover" style={{ objectPosition: '50% 70%' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, var(--cream) 100%)' }} />
        {/* Floating headline overlapping image */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-16" style={{ transform: 'translateY(40%)' }}>
          <h2 className="ctf display-xl" style={{ color: 'var(--navy)' }}>
            Prenota il<br />tuo <em style={{ fontStyle: 'italic', color: 'var(--gold-muted)' }}>tavolo</em>
          </h2>
        </div>
      </div>

      {/* Content — wildly asymmetric, form and info at different levels */}
      <div className="px-6 md:px-16" style={{ paddingTop: 'clamp(5rem, 10vw, 10rem)', paddingBottom: 'var(--space-xl)' }}>
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          {/* Info — narrow column, left */}
          <div className="col-span-12 md:col-span-3 md:col-start-1">
            <div className="ctf space-y-8" style={{ marginTop: 'clamp(2rem, 4vw, 6rem)' }}>
              <div>
                <span className="label-sm block mb-1.5" style={{ color: 'var(--gold)' }}>Indirizzo</span>
                <p className="text-editorial">Corso Giuseppe Zanardelli, 15<br />25055 Pisogne (BS)</p>
              </div>
              <div>
                <span className="label-sm block mb-1.5" style={{ color: 'var(--gold)' }}>Telefono</span>
                <a href="tel:+39036487229" className="text-editorial hover:underline" style={{ color: 'var(--text)' }}>+39 0364 87229</a>
              </div>
              <div>
                <span className="label-sm block mb-1.5" style={{ color: 'var(--gold)' }}>Email</span>
                <a href="mailto:goenristorantepisogne@gmail.com" className="text-editorial hover:underline" style={{ color: 'var(--text)', wordBreak: 'break-all', fontSize: '0.85rem' }}>goenristorantepisogne<br />@gmail.com</a>
              </div>
              <div>
                <span className="label-sm block mb-1.5" style={{ color: 'var(--gold)' }}>Orari</span>
                <p className="text-editorial">Pranzo e Cena</p>
                <p style={{ color: '#b44', fontSize: '0.9rem' }}>Chiuso il Mercoledì</p>
              </div>
            </div>

            <div className="ctf mt-10 overflow-hidden" style={{ height: '180px' }}>
              <iframe title="Mappa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.123!2d10.107!3d45.803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47817e0a0a0a0a0a%3A0x0!2sGoen+Ristorante+Pizzeria!5e0!3m2!1sit!2sit!4v1" width="100%" height="100%" style={{ border: 0 }} loading="lazy" />
            </div>
          </div>

          {/* Form — wider, offset right and upward */}
          <div className="col-span-12 md:col-span-7 md:col-start-5">
            <div className="ctf">
              {sent ? (
                <div className="py-20">
                  <span className="display-md block" style={{ color: 'var(--navy)' }}>Grazie!</span>
                  <p className="text-editorial mt-3">Ti risponderemo il prima possibile.</p>
                </div>
              ) : (
                <form onSubmit={hs} className="space-y-7">
                  <div>
                    <label className="label-sm block mb-2" style={{ color: 'var(--text-muted)' }}>Nome e cognome *</label>
                    <input type="text" name="nome" required value={fd.nome} onChange={hc} placeholder="Il tuo nome" style={iSt} />
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <label className="label-sm block mb-2" style={{ color: 'var(--text-muted)' }}>Data *</label>
                      <input type="date" name="data" required value={fd.data} onChange={hc} style={iSt} />
                    </div>
                    <div>
                      <label className="label-sm block mb-2" style={{ color: 'var(--text-muted)' }}>Ora *</label>
                      <select name="ora" required value={fd.ora} onChange={hc} style={iSt}>
                        <option value="">—</option>
                        {['12:00','12:30','13:00','13:30','19:00','19:30','20:00','20:30','21:00','21:30'].map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="label-sm block mb-2" style={{ color: 'var(--text-muted)' }}>Persone *</label>
                      <select name="persone" required value={fd.persone} onChange={hc} style={iSt}>
                        <option value="">—</option>
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                        <option value="20+">20+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="label-sm block mb-2" style={{ color: 'var(--text-muted)' }}>Note</label>
                    <textarea name="note" rows={2} value={fd.note} onChange={hc} placeholder="Allergie, occasioni speciali..." style={{ ...iSt, resize: 'none' }} />
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" name="evento" checked={fd.evento} onChange={hc} className="w-4 h-4 accent-[var(--gold)]" />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Evento o cerimonia</span>
                  </label>
                  <button type="submit" className="label-sm px-10 py-4 transition-all duration-500 hover:bg-[var(--navy)] hover:text-white" style={{ background: 'var(--gold)', color: 'var(--navy)' }}>
                    Invia via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
