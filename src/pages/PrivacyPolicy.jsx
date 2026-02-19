import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../constants/siteData'

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="mt-2" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
            Informativa sul trattamento dei dati personali
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-16 py-12 md:py-20">
        <div className="max-w-3xl mx-auto p-8 md:p-12" style={{ background: 'var(--cream)', color: 'var(--text)' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Ultimo aggiornamento: 19/02/2026</p>

          <h2 className="mt-10 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)' }}>1. Titolare del Trattamento</h2>
          <p className="text-editorial">Il Titolare del trattamento dei dati personali è:</p>
          <div className="mt-4 p-5" style={{ background: 'var(--cream-dark)', borderLeft: '3px solid var(--gold)' }}>
            <p style={{ fontWeight: 500, color: 'var(--navy)' }}>{SITE.name}</p>
            <p className="mt-1 text-editorial">{SITE.address.full}</p>
            <p className="text-editorial">Tel: {SITE.phone}</p>
            <p className="text-editorial">Email: {SITE.email}</p>
            <p className="text-editorial">P.IVA: {SITE.piva}</p>
          </div>

          <h2 className="mt-10 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)' }}>2. Dati Raccolti e Finalità del Trattamento</h2>
          <h3 className="mt-6 mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--navy)' }}>2.1 Dati forniti volontariamente dall'utente</h3>
          <p className="text-editorial">Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:</p>
          <ul className="mt-3 space-y-1 pl-5 list-disc text-editorial">
            <li><strong style={{ fontWeight: 500, color: 'var(--text)' }}>Nome e Cognome</strong> — per identificare l'interessato</li>
            <li><strong style={{ fontWeight: 500, color: 'var(--text)' }}>Data e Ora</strong> — per gestire la prenotazione</li>
            <li><strong style={{ fontWeight: 500, color: 'var(--text)' }}>Numero di Persone</strong> — per organizzare il servizio</li>
            <li><strong style={{ fontWeight: 500, color: 'var(--text)' }}>Note</strong> (facoltativo) — per comprendere le esigenze</li>
          </ul>
          <div className="mt-4 p-4" style={{ background: 'rgba(196,152,63,0.08)', border: '1px solid rgba(196,152,63,0.2)' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--gold-muted)' }}>Finalità: i dati vengono raccolti esclusivamente per:</p>
            <ul className="mt-2 space-y-1 pl-5 list-disc" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <li>Rispondere alle richieste di prenotazione</li>
              <li>Fornire informazioni sui nostri servizi</li>
              <li>Organizzare eventi e cerimonie</li>
              <li>Gestire la relazione commerciale</li>
            </ul>
          </div>

          <h3 className="mt-6 mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--navy)' }}>2.2 Base giuridica del trattamento</h3>
          <p className="text-editorial">
            Il trattamento è basato sul <strong style={{ fontWeight: 500, color: 'var(--text)' }}>consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso l'invio del modulo di contatto, e sulla <strong style={{ fontWeight: 500, color: 'var(--text)' }}>esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).
          </p>

          <h2 className="mt-10 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)' }}>3. Modalità di Trattamento</h2>
          <p className="text-editorial">
            I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
          </p>
          <p className="text-editorial mt-3">
            Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione.
          </p>

          <h2 className="mt-10 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)' }}>4. Conservazione dei Dati</h2>
          <p className="text-editorial">I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le relazioni commerciali conseguenti.</p>
          <ul className="mt-3 space-y-1 pl-5 list-disc text-editorial">
            <li><strong style={{ fontWeight: 500, color: 'var(--text)' }}>Richieste di preventivo:</strong> i dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
            <li><strong style={{ fontWeight: 500, color: 'var(--text)' }}>Rapporti contrattuali:</strong> i dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
            <li><strong style={{ fontWeight: 500, color: 'var(--text)' }}>Richieste di informazioni:</strong> i dati vengono conservati per 12 mesi dalla risposta</li>
          </ul>

          <h2 className="mt-10 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)' }}>5. Comunicazione e Diffusione dei Dati</h2>
          <p className="text-editorial">I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:</p>
          <ul className="mt-3 space-y-1 pl-5 list-disc text-editorial">
            <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
            <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
            <li>Autorità competenti in caso di richieste legittime previste per legge</li>
          </ul>
          <div className="mt-4 p-4" style={{ background: 'rgba(200,50,50,0.05)', border: '1px solid rgba(200,50,50,0.15)' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 500, color: '#b44' }}>I tuoi dati NON verranno MAI:</p>
            <ul className="mt-2 space-y-1 pl-5 list-disc" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <li>Venduti a terze parti</li>
              <li>Condivisi con società di marketing</li>
              <li>Utilizzati per invio di newsletter non richieste</li>
              <li>Trasferiti fuori dall'Unione Europea</li>
            </ul>
          </div>

          <h2 className="mt-10 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)' }}>6. Diritti dell'Interessato</h2>
          <p className="text-editorial">In qualità di interessato, hai il diritto di:</p>
          <ul className="mt-3 space-y-1 pl-5 list-disc text-editorial">
            <li><strong style={{ fontWeight: 500, color: 'var(--text)' }}>Accesso (Art. 15 GDPR):</strong> ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
            <li><strong style={{ fontWeight: 500, color: 'var(--text)' }}>Rettifica (Art. 16 GDPR):</strong> richiedere la correzione di dati inesatti o incompleti</li>
            <li><strong style={{ fontWeight: 500, color: 'var(--text)' }}>Cancellazione (Art. 17 GDPR):</strong> richiedere la cancellazione dei dati ("diritto all'oblio")</li>
            <li><strong style={{ fontWeight: 500, color: 'var(--text)' }}>Limitazione (Art. 18 GDPR):</strong> richiedere la limitazione del trattamento</li>
            <li><strong style={{ fontWeight: 500, color: 'var(--text)' }}>Portabilità (Art. 20 GDPR):</strong> ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
            <li><strong style={{ fontWeight: 500, color: 'var(--text)' }}>Opposizione (Art. 21 GDPR):</strong> opporsi al trattamento dei dati personali</li>
            <li><strong style={{ fontWeight: 500, color: 'var(--text)' }}>Revoca del consenso:</strong> revocare il consenso in qualsiasi momento</li>
          </ul>
          <div className="mt-4 p-4" style={{ background: 'rgba(196,152,63,0.08)', border: '1px solid rgba(196,152,63,0.2)' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--gold-muted)' }}>Come esercitare i tuoi diritti:</p>
            <p className="mt-2" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Puoi esercitare i tuoi diritti inviando una richiesta via email a <a href={`mailto:${SITE.email}`} style={{ color: 'var(--gold-muted)', textDecoration: 'underline' }}>{SITE.email}</a> o tramite raccomandata A/R all'indirizzo: {SITE.address.full}.
            </p>
            <p className="mt-1" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Risponderemo entro <strong style={{ fontWeight: 500 }}>30 giorni</strong> dalla ricezione della richiesta.</p>
          </div>

          <h2 className="mt-10 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)' }}>7. Diritto di Reclamo</h2>
          <p className="text-editorial">
            Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il trattamento dei tuoi dati violi il GDPR.
          </p>
          <div className="mt-4 p-4" style={{ background: 'var(--cream-dark)' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text)' }}>Garante per la protezione dei dati personali:</p>
            <p className="mt-1" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Sito web: www.garanteprivacy.it</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email: garante@gpdp.it</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>PEC: protocollo@pec.gpdp.it</p>
          </div>

          <h2 className="mt-10 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)' }}>8. Cookie e Tecnologie di Tracciamento</h2>
          <p className="text-editorial">
            Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni, consulta la nostra <Link to="/cookie-policy" style={{ color: 'var(--gold-muted)', textDecoration: 'underline' }}>Cookie Policy</Link>.
          </p>

          <h2 className="mt-10 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)' }}>9. Modifiche alla Privacy Policy</h2>
          <p className="text-editorial">
            Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.
          </p>

          <h2 className="mt-10 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)' }}>10. Contatti</h2>
          <p className="text-editorial">Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:</p>
          <div className="mt-4 p-5 flex flex-col gap-2" style={{ background: 'var(--cream-dark)' }}>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2" style={{ fontSize: '0.9rem', color: 'var(--gold-muted)' }}>
              <span>✉</span> {SITE.email}
            </a>
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2" style={{ fontSize: '0.9rem', color: 'var(--gold-muted)' }}>
              <span>✆</span> {SITE.phone}
            </a>
          </div>

          {/* Footer note */}
          <div className="mt-12 pt-6 text-center" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="max-w-3xl mx-auto mt-8 flex flex-col sm:flex-row gap-4">
          <Link to="/" className="flex-1 text-center label-sm py-4 border transition-all duration-300 hover:bg-white hover:text-[var(--navy)]" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
            Torna alla Home
          </Link>
          <Link to="/cookie-policy" className="flex-1 text-center label-sm py-4 border transition-all duration-300 hover:bg-white hover:text-[var(--navy)]" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
            Leggi la Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
