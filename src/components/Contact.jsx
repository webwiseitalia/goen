import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const ref = useRef(null)
  const [formData, setFormData] = useState({ nome: '', data: '', ora: '', persone: '', note: '', evento: false })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Prenotazione Goen:%0ANome: ${formData.nome}%0AData: ${formData.data}%0AOra: ${formData.ora}%0APersone: ${formData.persone}${formData.evento ? '%0ATipo: Evento/Cerimonia' : ''}${formData.note ? `%0ANote: ${formData.note}` : ''}`
    window.open(`https://wa.me/39036487229?text=${msg}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.ct-fade').forEach((el) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 87%' } })
      })
    }, ref.current)
    return () => ctx.revert()
  }, [])

  const inputStyle = {
    width: '100%', padding: '0.85rem 0', background: 'transparent',
    borderBottom: '1px solid rgba(0,0,0,0.12)', outline: 'none', color: 'var(--text)',
    fontSize: '0.9rem', fontFamily: 'var(--font-body)', transition: 'border-color 0.3s',
  }

  return (
    <section id="contatti" ref={ref} style={{ background: 'var(--cream)' }}>
      <div className="py-[var(--space-xl)]">
        {/* Asymmetric header */}
        <div className="px-6 md:px-12 lg:px-20 mb-16">
          <div className="ct-fade flex items-center gap-4 mb-4">
            <span className="editorial-divider" />
            <span className="label-sm" style={{ color: 'var(--gold)' }}>Contatti</span>
          </div>
          <h2 className="ct-fade display-lg" style={{ color: 'var(--navy)' }}>
            Prenota il<br />tuo <em style={{ fontStyle: 'italic', color: 'var(--gold-muted)' }}>tavolo</em>
          </h2>
        </div>

        {/* Split layout - info left, form right, not equal */}
        <div className="grid grid-cols-12 gap-y-16">
          <div className="col-span-12 lg:col-span-4 px-6 md:px-12 lg:pl-20 lg:pr-0">
            <div className="ct-fade space-y-8">
              <div>
                <span className="label-sm block mb-2" style={{ color: 'var(--gold)' }}>Indirizzo</span>
                <p className="text-editorial">Corso Giuseppe Zanardelli, 15<br />25055 Pisogne (BS)</p>
              </div>
              <div>
                <span className="label-sm block mb-2" style={{ color: 'var(--gold)' }}>Telefono</span>
                <a href="tel:+39036487229" className="text-editorial hover:underline" style={{ color: 'var(--text)' }}>+39 0364 87229</a>
              </div>
              <div>
                <span className="label-sm block mb-2" style={{ color: 'var(--gold)' }}>Email</span>
                <a href="mailto:goenristorantepisogne@gmail.com" className="text-editorial hover:underline" style={{ color: 'var(--text)', wordBreak: 'break-all' }}>goenristorantepisogne@gmail.com</a>
              </div>
              <div>
                <span className="label-sm block mb-2" style={{ color: 'var(--gold)' }}>Orari</span>
                <p className="text-editorial">Pranzo e Cena</p>
                <p className="text-editorial" style={{ color: '#b44' }}>Chiuso il Mercoledì</p>
              </div>
            </div>

            {/* Map */}
            <div className="ct-fade mt-12 overflow-hidden" style={{ height: '200px' }}>
              <iframe
                title="Goen Ristorante - Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.123!2d10.107!3d45.803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47817e0a0a0a0a0a%3A0x0!2sGoen+Ristorante+Pizzeria!5e0!3m2!1sit!2sit!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form - offset to the right */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-6 px-6 md:px-12 lg:px-0 lg:pr-20">
            <div className="ct-fade">
              {submitted ? (
                <div className="py-20 text-center">
                  <span className="display-md block" style={{ color: 'var(--navy)' }}>Grazie!</span>
                  <p className="text-editorial mt-4">Ti risponderemo il prima possibile.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="label-sm block mb-2" style={{ color: 'var(--text-muted)' }}>Nome e cognome *</label>
                    <input type="text" name="nome" required value={formData.nome} onChange={handleChange} placeholder="Il tuo nome" style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.12)'} />
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <label className="label-sm block mb-2" style={{ color: 'var(--text-muted)' }}>Data *</label>
                      <input type="date" name="data" required value={formData.data} onChange={handleChange} style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.12)'} />
                    </div>
                    <div>
                      <label className="label-sm block mb-2" style={{ color: 'var(--text-muted)' }}>Ora *</label>
                      <select name="ora" required value={formData.ora} onChange={handleChange} style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}>
                        <option value="">—</option>
                        {['12:00','12:30','13:00','13:30','19:00','19:30','20:00','20:30','21:00','21:30'].map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="label-sm block mb-2" style={{ color: 'var(--text-muted)' }}>Persone *</label>
                      <select name="persone" required value={formData.persone} onChange={handleChange} style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}>
                        <option value="">—</option>
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                        <option value="20+">20+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="label-sm block mb-2" style={{ color: 'var(--text-muted)' }}>Note o richieste</label>
                    <textarea name="note" rows={3} value={formData.note} onChange={handleChange} placeholder="Allergie, occasioni speciali..." style={{ ...inputStyle, resize: 'none' }} onFocus={(e) => e.target.style.borderColor = 'var(--gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.12)'} />
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" name="evento" checked={formData.evento} onChange={handleChange} className="w-4 h-4 accent-[var(--gold)]" />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>È per un evento o cerimonia</span>
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
