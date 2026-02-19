import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowUp } from 'lucide-react'
import logo from '../assets/logogoen-Photoroom.webp'

const quickLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Prenota', href: '#contatti' },
  { label: 'Eventi', href: '#eventi' },
  { label: 'Gallery', href: '#galleria' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-700 text-white">
      <div className="max-w-7xl mx-auto section-padding !pb-8">
        <div className="text-center mb-12 pb-12 border-b border-white/10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Prenota il tuo tavolo <span className="text-gold-400">vista lago</span>
          </h2>
          <p className="text-white/60 mb-6 max-w-xl mx-auto">
            Un'esperienza unica tra sapori autentici e panorami mozzafiato sul Lago d'Iseo.
          </p>
          <a href="#contatti" className="btn-primary">
            Prenota ora
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img src={logo} alt="Goen Pisogne" className="h-14 brightness-0 invert mb-4" />
            <p className="text-white/60 text-sm leading-relaxed">
              Ristorante, pizzeria e cocktail bar affacciato sul porto di Pisogne, Lago d'Iseo. Dal 2015.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold-400">Contatti</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/70">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Corso Giuseppe Zanardelli, 15<br />25055 Pisogne (BS)</span>
              </li>
              <li>
                <a href="tel:+390364 87229" className="flex items-center gap-2 text-white/70 hover:text-gold-400 transition-colors">
                  <Phone size={16} />
                  +39 0364 87229
                </a>
              </li>
              <li>
                <a href="mailto:goenristorantepisogne@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-gold-400 transition-colors">
                  <Mail size={16} />
                  goenristorantepisogne@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold-400">Orari</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Clock size={16} />
                Pranzo e Cena
              </li>
              <li className="text-red-300 font-medium ml-6">Chiuso il Mercoledì</li>
            </ul>

            <h4 className="font-semibold text-sm uppercase tracking-wider mt-6 mb-4 text-gold-400">Link Rapidi</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-gold-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold-400">Seguici</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/goenristorante/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/GoenRistorantePizzeria"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
            <div className="mt-6 text-sm text-white/50">
              <p>goenpisogne.it</p>
              <p>goenristorante.it</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/40 text-center md:text-left">
            <p>© 2025 Goen Ristorante Pizzeria — Pisogne (BS)</p>
            <p className="mt-1">P.IVA: 04528650981</p>
          </div>
          <a
            href="#hero"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Torna in cima"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
