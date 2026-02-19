import logo from '../assets/logogoen-Photoroom.webp'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)' }}>
      {/* Big CTA — headline breaks the grid */}
      <div className="relative" style={{ padding: 'var(--space-2xl) 0 var(--space-lg)' }}>
        <div className="px-6 md:px-16">
          <p className="label-sm mb-6" style={{ color: 'var(--gold)' }}>Cosa aspetti?</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className="display-xl text-white" style={{ maxWidth: '70vw' }}>
              Prenota il tuo tavolo<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>vista lago</em>
            </h2>
            <a href="#contatti" className="label-sm px-10 py-4 flex-shrink-0 transition-all duration-500 hover:bg-white hover:text-[var(--navy)]" style={{ background: 'var(--gold)', color: 'var(--navy)' }}>
              Prenota ora
            </a>
          </div>
        </div>
        {/* Decorative line — doesn't stretch full width */}
        <div className="mt-16 mx-6 md:mx-16 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
      </div>

      {/* Footer info — irregular widths, not evenly spaced */}
      <div className="px-6 md:px-16 pb-12">
        <div className="grid grid-cols-12 gap-y-8 gap-x-4">
          {/* Logo + desc — wider */}
          <div className="col-span-12 md:col-span-4">
            <img src={logo} alt="Goen" className="h-10 brightness-0 invert mb-4" />
            <p className="text-white/20" style={{ fontSize: '0.78rem', lineHeight: 1.7, maxWidth: '16rem' }}>
              Ristorante, pizzeria e cocktail bar sul porto di Pisogne, Lago d'Iseo.
            </p>
          </div>

          {/* Nav — narrow */}
          <div className="col-span-6 md:col-span-2 md:col-start-6">
            <span className="label-sm block mb-3" style={{ color: 'var(--gold)' }}>Menu</span>
            {['Chi Siamo', 'Cucina', 'Location', 'Eventi', 'Galleria', 'Prenota'].map((l) => (
              <a key={l} href={`#${l === 'Prenota' ? 'contatti' : l === 'Cucina' ? 'menu' : l === 'Chi Siamo' ? 'chi-siamo' : l.toLowerCase()}`} className="block text-white/20 hover:text-white/60 transition-colors mb-1.5" style={{ fontSize: '0.8rem' }}>
                {l}
              </a>
            ))}
          </div>

          {/* Contact — mid */}
          <div className="col-span-6 md:col-span-2">
            <span className="label-sm block mb-3" style={{ color: 'var(--gold)' }}>Contatti</span>
            <p className="text-white/20 mb-1" style={{ fontSize: '0.8rem' }}>Corso G. Zanardelli, 15</p>
            <p className="text-white/20 mb-1" style={{ fontSize: '0.8rem' }}>25055 Pisogne (BS)</p>
            <a href="tel:+39036487229" className="block text-white/20 hover:text-white/60 transition-colors my-3" style={{ fontSize: '0.8rem' }}>+39 0364 87229</a>
            <p className="text-white/20" style={{ fontSize: '0.8rem' }}>Pranzo e Cena</p>
            <p style={{ fontSize: '0.8rem', color: '#944' }}>Chiuso il Mercoledì</p>
          </div>

          {/* Social — far right, tiny */}
          <div className="col-span-12 md:col-span-2 md:col-start-11">
            <span className="label-sm block mb-3" style={{ color: 'var(--gold)' }}>Social</span>
            <a href="https://www.instagram.com/goenristorante/" target="_blank" rel="noopener noreferrer" className="block text-white/20 hover:text-white/60 transition-colors mb-1.5" style={{ fontSize: '0.8rem' }}>Instagram</a>
            <a href="https://www.facebook.com/GoenRistorantePizzeria" target="_blank" rel="noopener noreferrer" className="block text-white/20 hover:text-white/60 transition-colors mb-1.5" style={{ fontSize: '0.8rem' }}>Facebook</a>
          </div>
        </div>
      </div>

      {/* Bottom bar — asymmetric */}
      <div className="px-6 md:px-16 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <span className="text-white/10" style={{ fontSize: '0.65rem' }}>© 2025 Goen Ristorante Pizzeria — Pisogne (BS) · P.IVA 04528650981</span>
        <a href="#hero" className="label-sm text-white/10 hover:text-white/40 transition-colors">↑</a>
      </div>
    </footer>
  )
}
