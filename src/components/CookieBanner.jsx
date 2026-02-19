import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const COOKIE_KEY = 'goen-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()
  const isPolicy = location.pathname === '/privacy-policy' || location.pathname === '/cookie-policy'

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) setVisible(true)
  }, [])

  const handleConsent = (value) => {
    localStorage.setItem(COOKIE_KEY, value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      {/* Blur overlay — hidden on policy pages */}
      {!isPolicy && (
        <div className="fixed inset-0 z-[9999]" style={{ backdropFilter: 'blur(8px)', background: 'rgba(10,15,26,0.4)' }} />
      )}

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[10000] px-4 pb-4 md:px-8 md:pb-8">
        <div className="max-w-3xl mx-auto p-6 md:p-8" style={{ background: 'var(--cream)', border: '1px solid rgba(0,0,0,0.08)' }}>
          <div className="flex items-start gap-4">
            <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>&#127850;</span>
            <div className="flex-1">
              <p style={{ fontWeight: 500, color: 'var(--navy)', fontSize: '1rem', fontFamily: 'var(--font-display)' }}>
                Questo sito utilizza i cookie
              </p>
              <p className="mt-2" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Utilizziamo solo cookie tecnici necessari al funzionamento del sito. Non utilizziamo cookie di profilazione o tracciamento. Per maggiori informazioni consulta la nostra{' '}
                <Link to="/cookie-policy" style={{ color: 'var(--gold-muted)', textDecoration: 'underline' }}>Cookie Policy</Link>{' '}
                e la{' '}
                <Link to="/privacy-policy" style={{ color: 'var(--gold-muted)', textDecoration: 'underline' }}>Privacy Policy</Link>.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => handleConsent('accepted')}
              className="flex-1 label-sm py-3 px-6 transition-all duration-300 hover:opacity-80"
              style={{ background: 'var(--navy)', color: '#fff' }}
            >
              Accetta
            </button>
            <button
              onClick={() => handleConsent('rejected')}
              className="flex-1 label-sm py-3 px-6 transition-all duration-300 hover:opacity-80"
              style={{ background: 'var(--navy)', color: '#fff' }}
            >
              Rifiuta
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
