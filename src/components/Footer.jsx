import logo from '../assets/logogoen-Photoroom.webp'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)' }}>
      {/* Big CTA */}
      <div className="px-6 md:px-12 lg:px-20 pt-[var(--space-xl)] pb-[var(--space-lg)] border-b border-white/5">
        <div className="grid grid-cols-12 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="label-sm mb-4" style={{ color: 'var(--gold)' }}>Cosa aspetti?</p>
            <h2 className="display-lg text-white">
              Prenota il tuo<br />tavolo <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>vista lago</em>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 mt-8 lg:mt-0 lg:text-right">
            <a href="#contatti" className="label-sm inline-block px-10 py-4 transition-all duration-500 hover:bg-white hover:text-[var(--navy)]" style={{ background: 'var(--gold)', color: 'var(--navy)' }}>
              Prenota ora
            </a>
          </div>
        </div>
      </div>

      {/* Footer grid - irregular */}
      <div className="px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <img src={logo} alt="Goen" className="h-12 brightness-0 invert mb-6" />
            <p className="text-white/30" style={{ fontSize: '0.8rem', lineHeight: 1.7 }}>
              Ristorante, pizzeria e cocktail bar sul porto di Pisogne. Dal 2015.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2 md:col-start-5">
            <span className="label-sm block mb-4" style={{ color: 'var(--gold)' }}>Navigazione</span>
            {['Menu', 'Location', 'Eventi', 'Galleria', 'Prenota'].map((l) => (
              <a key={l} href={`#${l === 'Prenota' ? 'contatti' : l === 'Menu' ? 'menu' : l.toLowerCase()}`} className="block text-white/30 hover:text-white transition-colors mb-2" style={{ fontSize: '0.85rem' }}>
                {l}
              </a>
            ))}
          </div>

          <div className="col-span-6 md:col-span-2">
            <span className="label-sm block mb-4" style={{ color: 'var(--gold)' }}>Contatti</span>
            <p className="text-white/30 mb-2" style={{ fontSize: '0.85rem' }}>Corso G. Zanardelli, 15</p>
            <p className="text-white/30 mb-2" style={{ fontSize: '0.85rem' }}>25055 Pisogne (BS)</p>
            <a href="tel:+39036487229" className="block text-white/30 hover:text-white transition-colors mb-2" style={{ fontSize: '0.85rem' }}>+39 0364 87229</a>
            <p className="text-white/30 mt-4 mb-1" style={{ fontSize: '0.85rem' }}>Pranzo e Cena</p>
            <p style={{ fontSize: '0.85rem', color: '#b44' }}>Chiuso il Mercoledì</p>
          </div>

          <div className="col-span-12 md:col-span-2 md:col-start-11">
            <span className="label-sm block mb-4" style={{ color: 'var(--gold)' }}>Social</span>
            <a href="https://www.instagram.com/goenristorante/" target="_blank" rel="noopener noreferrer" className="block text-white/30 hover:text-white transition-colors mb-2" style={{ fontSize: '0.85rem' }}>Instagram</a>
            <a href="https://www.facebook.com/GoenRistorantePizzeria" target="_blank" rel="noopener noreferrer" className="block text-white/30 hover:text-white transition-colors mb-2" style={{ fontSize: '0.85rem' }}>Facebook</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 md:px-12 lg:px-20 py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-white/20" style={{ fontSize: '0.7rem' }}>
          © 2025 Goen Ristorante Pizzeria — Pisogne (BS) · P.IVA 04528650981
        </span>
        <a href="#hero" className="label-sm text-white/20 hover:text-white/60 transition-colors">↑ Torna su</a>
      </div>
    </footer>
  )
}
