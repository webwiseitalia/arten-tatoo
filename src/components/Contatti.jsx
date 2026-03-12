import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contatti() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    nome: '', telefono: '', artista: '', sede: '', idea: '', zona: '', dimensione: '', primaVolta: '', privacy: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Ciao! Mi chiamo ${formData.nome}.\n📱 ${formData.telefono}\n🎨 Artista: ${formData.artista || 'Nessuna preferenza'}\n📍 Sede: ${formData.sede || 'Da definire'}\n💡 Idea: ${formData.idea}\n📐 Zona: ${formData.zona || 'Da definire'}\n📏 Dimensione: ${formData.dimensione || 'Da definire'}\n${formData.primaVolta ? `Prima volta: ${formData.primaVolta}` : ''}`
    )
    window.open(`https://wa.me/393289027217?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contatti-header', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.contatti-header', start: 'top 88%', once: true }
      })
      gsap.fromTo('.contatti-form', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.contatti-form', start: 'top 85%', once: true }
      })
      gsap.fromTo('.contatti-sidebar', { opacity: 0, x: 40 }, {
        opacity: 1, x: 0, duration: 1, delay: 0.3, ease: 'power3.out',
        scrollTrigger: { trigger: '.contatti-sidebar', start: 'top 85%', once: true }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const inputCls = 'w-full bg-transparent border-b border-[var(--charcoal)] px-0 py-3 text-[var(--cream)] text-sm focus:border-[var(--gold)] focus:outline-none transition-colors duration-500 placeholder:text-[var(--muted)]'
  const selectCls = 'w-full bg-[var(--black)] border-b border-[var(--charcoal)] px-0 py-3 text-[var(--cream)] text-sm focus:border-[var(--gold)] focus:outline-none transition-colors duration-500 appearance-none'

  return (
    <section ref={sectionRef} id="contatti" className="py-[12vh] sm:py-[18vh]">
      {/* Header — asymmetric with large quote */}
      <div className="contatti-header px-5 sm:px-8 md:px-12 lg:px-20 mb-[8vh]" style={{ opacity: 0 }}>
        <span className="t-label block mb-4">06 — Contattaci</span>
        <h2 className="t-heading text-[var(--cream)] max-w-[80vw] lg:max-w-[50vw]">
          Raccontaci la tua{' '}<em className="text-[var(--gold)]">idea</em>
        </h2>
        <p className="t-body mt-6 max-w-lg">
          Il tuo prossimo tatuaggio inizia da una conversazione. Scrivici su WhatsApp o compila il form.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-0">
        {/* Form — 65% */}
        <div className="contatti-form lg:w-[65%] px-5 sm:px-8 md:px-12 lg:px-20 lg:pr-16 border-t border-[var(--charcoal)] pt-10" style={{ opacity: 0 }}>
          {submitted ? (
            <div className="py-20 text-center">
              <span className="text-[var(--gold)] text-6xl block mb-6" style={{ fontFamily: 'var(--serif)' }}>✓</span>
              <h3 className="t-subheading text-[var(--cream)] mb-3">Messaggio pronto</h3>
              <p className="t-body">Si aprirà WhatsApp con il tuo messaggio. Ti risponderemo al più presto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <input type="text" name="nome" placeholder="Il tuo nome *" required value={formData.nome} onChange={handleChange} className={inputCls} style={{ fontFamily: 'var(--sans)' }} />
                <input type="tel" name="telefono" placeholder="Telefono / WhatsApp *" required value={formData.telefono} onChange={handleChange} className={inputCls} style={{ fontFamily: 'var(--sans)' }} />
              </div>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <select name="artista" value={formData.artista} onChange={handleChange} className={selectCls} style={{ fontFamily: 'var(--sans)' }}>
                  <option value="">Artista preferito</option>
                  <option value="Marco Leoni">Marco Leoni</option>
                  <option value="Alessia Leoni">Alessia Leoni</option>
                  <option value="Caterina Grola">Caterina Grola</option>
                  <option value="Nessuna preferenza">Nessuna preferenza</option>
                </select>
                <select name="sede" value={formData.sede} onChange={handleChange} className={selectCls} style={{ fontFamily: 'var(--sans)' }}>
                  <option value="">Sede preferita</option>
                  <option value="Ceto">Studio di Ceto</option>
                  <option value="Sonico">Studio di Sonico</option>
                </select>
              </div>
              <textarea name="idea" placeholder="Raccontaci la tua idea per il tatuaggio... *" required rows={4} value={formData.idea} onChange={handleChange} className={inputCls + ' resize-none border border-[var(--charcoal)] px-4 py-3'} style={{ fontFamily: 'var(--sans)' }} />
              <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
                <input type="text" name="zona" placeholder="Zona del corpo" value={formData.zona} onChange={handleChange} className={inputCls} style={{ fontFamily: 'var(--sans)' }} />
                <input type="text" name="dimensione" placeholder="Dimensione indicativa" value={formData.dimensione} onChange={handleChange} className={inputCls} style={{ fontFamily: 'var(--sans)' }} />
                <select name="primaVolta" value={formData.primaVolta} onChange={handleChange} className={selectCls} style={{ fontFamily: 'var(--sans)' }}>
                  <option value="">Prima volta?</option>
                  <option value="Sì">Sì</option>
                  <option value="No">No</option>
                </select>
              </div>
              <label className="flex items-start gap-3 cursor-pointer group mt-4">
                <input type="checkbox" name="privacy" required checked={formData.privacy} onChange={handleChange} className="mt-1 w-4 h-4 accent-[var(--gold)]" />
                <span className="text-[var(--muted)] text-xs leading-relaxed group-hover:text-[var(--warm)] transition-colors">
                  Acconsento al trattamento dei dati personali ai sensi del GDPR. I dati verranno utilizzati esclusivamente per rispondere alla richiesta di appuntamento.
                </span>
              </label>
              <button type="submit" className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--gold)] text-[var(--black)] t-mono text-[11px] uppercase tracking-[0.15em] hover:bg-[var(--cream)] transition-colors duration-500 mt-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Invia su WhatsApp
              </button>
            </form>
          )}
        </div>

        {/* Sidebar — 35%, sticky, different rhythm */}
        <div className="contatti-sidebar lg:w-[35%] lg:sticky lg:top-24 lg:self-start px-5 sm:px-8 lg:px-10 py-10 lg:border-l border-t lg:border-t-0 border-[var(--charcoal)]" style={{ opacity: 0 }}>
          <div className="space-y-10">
            <div>
              <span className="t-mono text-[10px] text-[var(--muted)] block mb-4">Contatto diretto</span>
              <a href="https://wa.me/393289027217" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[var(--cream)] hover:text-[var(--gold)] transition-colors duration-400 mb-3">
                <span className="t-mono text-sm">328 902 7217</span>
              </a>
              <a href="https://www.instagram.com/arten_tattoo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[var(--cream)] hover:text-[var(--gold)] transition-colors duration-400">
                <span className="t-mono text-sm">@arten_tattoo</span>
              </a>
            </div>

            <div>
              <span className="t-mono text-[10px] text-[var(--muted)] block mb-4">Sedi</span>
              <div className="space-y-4">
                <div>
                  <p className="text-[var(--cream)] text-sm" style={{ fontFamily: 'var(--sans)' }}>Studio di Ceto</p>
                  <p className="t-mono text-[10px] text-[var(--muted)]">Via Badetto 60, Ceto (BS)</p>
                </div>
                <div>
                  <p className="text-[var(--cream)] text-sm" style={{ fontFamily: 'var(--sans)' }}>Studio di Sonico</p>
                  <p className="t-mono text-[10px] text-[var(--muted)]">Via Camiasco 1, Sonico (BS)</p>
                </div>
              </div>
            </div>

            {/* Quote — large, breaking rhythm */}
            <div className="pt-6 border-t border-[var(--charcoal)]">
              <p className="text-[clamp(1.2rem,2.5vw,1.8rem)] italic leading-[1.4] text-[var(--cream)]/60" style={{ fontFamily: 'var(--serif)' }}>
                "Tatuare è un atto sacro: non si tratta solo di far scorrere la mano sulla pelle, ma di saper coltivare l'arte dell'ascolto."
              </p>
              <span className="t-mono text-[10px] text-[var(--gold)] mt-4 block">— Marco Leoni</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
