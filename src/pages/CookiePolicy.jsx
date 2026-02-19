import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../constants/siteData'

export default function CookiePolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: 'var(--navy)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ padding: 'clamp(2rem, 4vw, 3rem) 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="px-6 md:px-16">
          <Link to="/" className="label-sm inline-flex items-center gap-2 mb-6 transition-colors duration-300" style={{ color: 'var(--gold)' }}>
            &larr; Torna alla Home
          </Link>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1, fontWeight: 400, color: '#fff' }}>
            Cookie Policy
          </h1>
          <p className="mt-2" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
            Informativa sull'utilizzo dei cookie
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-16 py-12 md:py-20">
        <div className="max-w-3xl mx-auto p-8 md:p-12" style={{ background: 'var(--cream)', color: 'var(--text)' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Ultimo aggiornamento: 19/02/2026</p>

          {/* Privacy-friendly badge */}
          <div className="mt-6 p-5 flex gap-4 items-start" style={{ background: 'rgba(76,175,80,0.06)', border: '1px solid rgba(76,175,80,0.2)' }}>
            <span style={{ fontSize: '1.5rem' }}>&#10003;</span>
            <div>
              <p style={{ fontWeight: 500, color: 'var(--navy)', fontSize: '1rem' }}>Sito Privacy-Friendly</p>
              <p className="mt-1" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Questo sito web utilizza <strong style={{ fontWeight: 500 }}>solo cookie tecnici</strong> necessari al funzionamento. <strong style={{ fontWeight: 500 }}>Non utilizziamo cookie di profilazione, tracciamento o analisi.</strong> La tua privacy è protetta e non serve il tuo consenso per la navigazione.
              </p>
            </div>
          </div>

          <h2 className="mt-10 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)' }}>1. Cosa sono i Cookie</h2>
          <p className="text-editorial">
            I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone) quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune informazioni sulle tue preferenze o azioni passate.
          </p>

          <h2 className="mt-10 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)' }}>2. Tipologie di Cookie</h2>

          <h3 className="mt-6 mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--navy)' }}>2.1 Cookie Tecnici</h3>
          <p className="text-editorial">
            Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza questi cookie, il sito potrebbe non funzionare correttamente.
          </p>
          <div className="mt-4 p-4" style={{ background: 'rgba(196,152,63,0.08)', border: '1px solid rgba(196,152,63,0.2)' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--gold-muted)' }}>Cookie tecnici utilizzati su questo sito:</p>
            <ul className="mt-2 space-y-1 pl-5 list-disc" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <li>Cookie di navigazione e di sessione</li>
              <li>Cookie per memorizzare le preferenze dell'interfaccia</li>
            </ul>
            <p className="mt-2" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell'utente.
            </p>
          </div>

          <h3 className="mt-6 mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--navy)' }}>2.2 Cookie Analitici</h3>
          <div className="p-4 flex items-start gap-3" style={{ background: 'rgba(200,50,50,0.04)', border: '1px solid rgba(200,50,50,0.1)' }}>
            <span style={{ color: '#b44', fontSize: '1.2rem' }}>&#10007;</span>
            <div>
              <p style={{ fontWeight: 500, color: '#b44', fontSize: '0.9rem' }}>NON UTILIZZATI</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.</p>
            </div>
          </div>

          <h3 className="mt-6 mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--navy)' }}>2.3 Cookie di Profilazione</h3>
          <div className="p-4 flex items-start gap-3" style={{ background: 'rgba(200,50,50,0.04)', border: '1px solid rgba(200,50,50,0.1)' }}>
            <span style={{ color: '#b44', fontSize: '1.2rem' }}>&#10007;</span>
            <div>
              <p style={{ fontWeight: 500, color: '#b44', fontSize: '0.9rem' }}>NON UTILIZZATI</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.</p>
            </div>
          </div>

          <h3 className="mt-6 mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--navy)' }}>2.4 Cookie di Terze Parti</h3>
          <div className="p-4 flex items-start gap-3" style={{ background: 'rgba(200,50,50,0.04)', border: '1px solid rgba(200,50,50,0.1)' }}>
            <span style={{ color: '#b44', fontSize: '1.2rem' }}>&#10007;</span>
            <div>
              <p style={{ fontWeight: 500, color: '#b44', fontSize: '0.9rem' }}>NON UTILIZZATI</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).</p>
            </div>
          </div>

          <h2 className="mt-10 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)' }}>3. Cookie Utilizzati su Questo Sito</h2>
          <p className="text-editorial">Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full" style={{ fontSize: '0.85rem', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--navy)' }}>
                  <th className="text-left py-2 pr-4" style={{ color: 'var(--navy)', fontWeight: 600 }}>Nome Cookie</th>
                  <th className="text-left py-2 pr-4" style={{ color: 'var(--navy)', fontWeight: 600 }}>Tipologia</th>
                  <th className="text-left py-2 pr-4" style={{ color: 'var(--navy)', fontWeight: 600 }}>Finalità</th>
                  <th className="text-left py-2" style={{ color: 'var(--navy)', fontWeight: 600 }}>Durata</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                  <td className="py-2 pr-4" style={{ color: 'var(--text)' }}>goen-cookie-consent</td>
                  <td className="py-2 pr-4"><span className="px-2 py-0.5" style={{ background: 'rgba(196,152,63,0.15)', color: 'var(--gold-muted)', fontSize: '0.75rem', fontWeight: 500 }}>Tecnico</span></td>
                  <td className="py-2 pr-4" style={{ color: 'var(--text-muted)' }}>Memorizza lo stato del consenso cookie per non mostrare il banner a ogni visita</td>
                  <td className="py-2" style={{ color: 'var(--text-muted)' }}>365 giorni</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4" style={{ background: 'rgba(196,152,63,0.08)', border: '1px solid rgba(196,152,63,0.2)' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <strong style={{ fontWeight: 500, color: 'var(--text)' }}>Nota importante:</strong> i cookie tecnici come "goen-cookie-consent" sono essenziali per il funzionamento del sito e non richiedono il consenso dell'utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.
            </p>
          </div>

          <h2 className="mt-10 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)' }}>4. Come Gestire i Cookie</h2>
          <p className="text-editorial">
            Anche se i cookie tecnici come "goen-cookie-consent" sono essenziali per il funzionamento del sito, puoi comunque gestirli o eliminarli attraverso le impostazioni del tuo browser.
          </p>
          <h3 className="mt-4 mb-2" style={{ fontWeight: 500, color: 'var(--navy)', fontSize: '0.95rem' }}>Disabilitare i cookie tramite il browser:</h3>
          <ul className="space-y-1 pl-5 list-disc text-editorial">
            <li><strong style={{ fontWeight: 500, color: 'var(--text)' }}>Google Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
            <li><strong style={{ fontWeight: 500, color: 'var(--text)' }}>Mozilla Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti web</li>
            <li><strong style={{ fontWeight: 500, color: 'var(--text)' }}>Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti web</li>
            <li><strong style={{ fontWeight: 500, color: 'var(--text)' }}>Microsoft Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Gestisci ed elimina cookie</li>
          </ul>
          <div className="mt-4 p-4" style={{ background: 'rgba(200,150,50,0.06)', border: '1px solid rgba(200,150,50,0.15)' }}>
            <p style={{ fontSize: '0.85rem', color: '#a07d3a' }}>
              <strong style={{ fontWeight: 500 }}>Attenzione:</strong> la disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la qualità dell'esperienza di navigazione.
            </p>
          </div>

          <h2 className="mt-10 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)' }}>5. Link a Siti Esterni</h2>
          <p className="text-editorial">
            Il nostro sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.
          </p>

          <h2 className="mt-10 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)' }}>6. Aggiornamenti della Cookie Policy</h2>
          <p className="text-editorial">
            Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate attraverso un avviso pubblicato su questa pagina.
          </p>
          <p className="text-editorial mt-2">
            Ti invitiamo a consultare periodicamente questa pagina per essere sempre aggiornato sull'utilizzo dei cookie sul nostro sito.
          </p>

          <h2 className="mt-10 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)' }}>7. Base Normativa</h2>
          <p className="text-editorial">Questa Cookie Policy è redatta in conformità a:</p>
          <ul className="mt-3 space-y-1 pl-5 list-disc text-editorial">
            <li>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
            <li>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
            <li>Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014, n. 229</li>
            <li>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
          </ul>

          <h2 className="mt-10 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)' }}>8. Contatti</h2>
          <p className="text-editorial">Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:</p>
          <div className="mt-4 p-5" style={{ background: 'var(--cream-dark)', borderLeft: '3px solid var(--gold)' }}>
            <p style={{ fontWeight: 500, color: 'var(--navy)' }}>{SITE.name}</p>
            <p className="mt-1 text-editorial">{SITE.address.full}</p>
            <p className="text-editorial">Email: <a href={`mailto:${SITE.email}`} style={{ color: 'var(--gold-muted)' }}>{SITE.email}</a></p>
            <p className="text-editorial">Tel: <a href={`tel:${SITE.phoneRaw}`} style={{ color: 'var(--gold-muted)' }}>{SITE.phone}</a></p>
          </div>

          {/* Zero tracking badge */}
          <div className="mt-12 py-8 text-center" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <span style={{ fontSize: '2rem' }}>&#10003;</span>
            <p className="mt-2" style={{ fontWeight: 500, color: 'var(--navy)', fontSize: '1.1rem' }}>Zero Tracciamento</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '24rem', margin: '0.5rem auto 0' }}>
              Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online.
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="max-w-3xl mx-auto mt-8 flex flex-col sm:flex-row gap-4">
          <Link to="/" className="flex-1 text-center label-sm py-4 border transition-all duration-300 hover:bg-white hover:text-[var(--navy)]" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
            Torna alla Home
          </Link>
          <Link to="/privacy-policy" className="flex-1 text-center label-sm py-4 border transition-all duration-300 hover:bg-white hover:text-[var(--navy)]" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
            Leggi la Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
