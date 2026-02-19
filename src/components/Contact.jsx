import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, label: 'Indirizzo', value: 'Corso Giuseppe Zanardelli, 15\n25055 Pisogne (BS)' },
  { icon: Phone, label: 'Telefono', value: '+39 0364 87229', href: 'tel:+390364 87229' },
  { icon: Mail, label: 'Email', value: 'goenristorantepisogne@gmail.com', href: 'mailto:goenristorantepisogne@gmail.com' },
  { icon: Clock, label: 'Orari', value: 'Pranzo e Cena\nChiuso il Mercoledì' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nome: '', data: '', ora: '', persone: '', note: '', evento: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Prenotazione Goen:%0A` +
      `Nome: ${formData.nome}%0A` +
      `Data: ${formData.data}%0A` +
      `Ora: ${formData.ora}%0A` +
      `Persone: ${formData.persone}%0A` +
      `${formData.evento ? 'Tipo: Evento/Cerimonia%0A' : ''}` +
      `${formData.note ? `Note: ${formData.note}` : ''}`
    window.open(`https://wa.me/390364 87229?text=${message}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const inputClasses = 'w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-navy-700 bg-white'

  return (
    <section id="contatti" className="section-padding bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold-500 font-semibold uppercase tracking-wider text-sm">Contatti</span>
          <h2 className="section-title mt-2">Prenota il Tuo Tavolo</h2>
          <p className="section-subtitle">
            Contattaci per prenotare o per qualsiasi informazione.
            Saremo felici di accoglierti!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-navy-700 text-white flex-shrink-0">
                  <info.icon size={20} />
                </div>
                <div>
                  <span className="text-sm font-semibold text-navy-500 uppercase tracking-wider">{info.label}</span>
                  {info.href ? (
                    <a href={info.href} className="block text-navy-700 font-medium mt-1 hover:text-gold-600 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-navy-700 font-medium mt-1 whitespace-pre-line">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg h-[250px]">
              <iframe
                title="Goen Ristorante Pisogne - Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.123!2d10.107!3d45.803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47817e0a0a0a0a0a%3A0x0!2sGoen+Ristorante+Pizzeria!5e0!3m2!1sit!2sit!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-navy-700 mb-6">Richiedi Prenotazione</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h4 className="font-serif text-xl font-bold text-navy-700 mb-2">Richiesta inviata!</h4>
                  <p className="text-navy-500">Ti risponderemo il prima possibile.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-600 mb-1.5">Nome e Cognome *</label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Il tuo nome"
                      className={inputClasses}
                    />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-navy-600 mb-1.5">Data *</label>
                      <input
                        type="date"
                        name="data"
                        required
                        value={formData.data}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-600 mb-1.5">Ora *</label>
                      <select
                        name="ora"
                        required
                        value={formData.ora}
                        onChange={handleChange}
                        className={inputClasses}
                      >
                        <option value="">Seleziona</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                      </select>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-sm font-medium text-navy-600 mb-1.5">Persone *</label>
                      <select
                        name="persone"
                        required
                        value={formData.persone}
                        onChange={handleChange}
                        className={inputClasses}
                      >
                        <option value="">N°</option>
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'persone'}</option>
                        ))}
                        <option value="20+">Più di 20</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-600 mb-1.5">Note o richieste particolari</label>
                    <textarea
                      name="note"
                      rows={3}
                      value={formData.note}
                      onChange={handleChange}
                      placeholder="Allergie, esigenze particolari, occasioni speciali..."
                      className={inputClasses + ' resize-none'}
                    />
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="evento"
                      checked={formData.evento}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-navy-300 text-gold-500 focus:ring-gold-500"
                    />
                    <span className="text-sm text-navy-600">È per un evento o cerimonia</span>
                  </label>

                  <button
                    type="submit"
                    className="btn-primary w-full !py-4 gap-2"
                  >
                    <Send size={18} />
                    Invia richiesta via WhatsApp
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
