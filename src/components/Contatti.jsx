import { useState } from 'react'
import useReveal from './useReveal'

export default function Contatti() {
  const sectionRef = useReveal()
  const [formData, setFormData] = useState({
    nome: '',
    telefono: '',
    artista: '',
    sede: '',
    idea: '',
    zona: '',
    dimensione: '',
    primaVolta: '',
    privacy: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Ciao! Mi chiamo ${formData.nome}.\n` +
      `📱 ${formData.telefono}\n` +
      `🎨 Artista preferito: ${formData.artista || 'Nessuna preferenza'}\n` +
      `📍 Sede: ${formData.sede || 'Da definire'}\n` +
      `💡 Idea: ${formData.idea}\n` +
      `📐 Zona: ${formData.zona || 'Da definire'}\n` +
      `📏 Dimensione: ${formData.dimensione || 'Da definire'}\n` +
      `${formData.primaVolta ? `Prima volta: ${formData.primaVolta}` : ''}`
    )
    window.open(`https://wa.me/393289027217?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-transparent border border-arten-charcoal px-4 py-3 text-arten-cream text-sm font-sans placeholder:text-arten-gray/50 focus:border-arten-gold focus:outline-none transition-colors duration-300'
  const selectClass =
    'w-full bg-arten-black border border-arten-charcoal px-4 py-3 text-arten-cream text-sm font-sans focus:border-arten-gold focus:outline-none transition-colors duration-300 appearance-none'

  return (
    <section
      id="contatti"
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 section-padding"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="label-text">Contattaci</span>
          <div className="divider mt-4 mb-6" />
          <h2 className="heading-lg text-arten-cream">
            Raccontaci la tua <span className="text-arten-gold italic">idea</span>
          </h2>
          <p className="body-text max-w-xl mx-auto mt-4">
            Il tuo prossimo tatuaggio inizia da una conversazione. Scrivici su WhatsApp o compila il form.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3 reveal">
            {submitted ? (
              <div className="text-center py-16 border border-arten-gold/30 bg-arten-gold/5">
                <svg className="w-12 h-12 text-arten-gold mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="font-serif text-2xl text-arten-cream mb-2">Messaggio pronto!</h3>
                <p className="body-text text-sm">Si aprirà WhatsApp con il tuo messaggio. Ti risponderemo al più presto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="nome"
                    placeholder="Il tuo nome *"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Telefono / WhatsApp *"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <select
                      name="artista"
                      value={formData.artista}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">Artista preferito</option>
                      <option value="Marco Leoni">Marco Leoni</option>
                      <option value="Alessia Leoni">Alessia Leoni</option>
                      <option value="Caterina Grola">Caterina Grola</option>
                      <option value="Nessuna preferenza">Nessuna preferenza</option>
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-arten-gray pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="relative">
                    <select
                      name="sede"
                      value={formData.sede}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">Sede preferita</option>
                      <option value="Ceto">Studio di Ceto</option>
                      <option value="Sonico">Studio di Sonico</option>
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-arten-gray pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <textarea
                  name="idea"
                  placeholder="Raccontaci la tua idea per il tatuaggio... *"
                  required
                  rows={4}
                  value={formData.idea}
                  onChange={handleChange}
                  className={inputClass + ' resize-none'}
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="zona"
                    placeholder="Zona del corpo"
                    value={formData.zona}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    type="text"
                    name="dimensione"
                    placeholder="Dimensione indicativa"
                    value={formData.dimensione}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div className="relative">
                  <select
                    name="primaVolta"
                    value={formData.primaVolta}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">È la prima volta che ti tatui?</option>
                    <option value="Sì">Sì, è la mia prima volta</option>
                    <option value="No">No, ho già altri tatuaggi</option>
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-arten-gray pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="privacy"
                    required
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-arten-gold"
                  />
                  <span className="text-arten-gray text-xs leading-relaxed group-hover:text-arten-warm-gray transition-colors">
                    Acconsento al trattamento dei dati personali ai sensi del GDPR. I tuoi dati verranno utilizzati
                    esclusivamente per rispondere alla tua richiesta di appuntamento.
                  </span>
                </label>

                <button type="submit" className="btn-primary w-full justify-center mt-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Invia su WhatsApp
                </button>
              </form>
            )}
          </div>

          {/* Sidebar info */}
          <div className="lg:col-span-2 reveal space-y-8">
            {/* Quick contact */}
            <div className="border border-arten-charcoal/50 p-8 space-y-6">
              <h3 className="font-serif text-xl text-arten-cream">Contatto rapido</h3>

              <a
                href="https://wa.me/393289027217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-arten-warm-gray hover:text-arten-gold transition-colors group"
              >
                <svg className="w-5 h-5 text-arten-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-sm">328 902 7217</span>
              </a>

              <a
                href="https://www.instagram.com/arten_tattoo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-arten-warm-gray hover:text-arten-gold transition-colors"
              >
                <svg className="w-5 h-5 text-arten-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span className="text-sm">@arten_tattoo</span>
              </a>
            </div>

            {/* Sedi */}
            <div className="border border-arten-charcoal/50 p-8 space-y-6">
              <h3 className="font-serif text-xl text-arten-cream">Le nostre sedi</h3>

              <div className="space-y-4">
                <div>
                  <span className="label-text text-[10px]">Sede Principale</span>
                  <p className="text-arten-cream text-sm mt-1">Studio di Ceto</p>
                  <p className="text-arten-gray text-xs">Via Badetto 60, Ceto (BS)</p>
                </div>
                <div>
                  <span className="label-text text-[10px]">ARTEN & Cate Tattoo</span>
                  <p className="text-arten-cream text-sm mt-1">Studio di Sonico</p>
                  <p className="text-arten-gray text-xs">Via Camiasco 1, Sonico (BS)</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="border-l-2 border-arten-gold/30 pl-6 py-2">
              <p className="font-serif text-lg italic text-arten-cream/70 leading-relaxed">
                "Tatuare è un atto sacro: non si tratta solo di far scorrere la mano sulla pelle,
                ma di saper coltivare l'arte dell'ascolto."
              </p>
              <p className="text-arten-gold text-xs uppercase tracking-widest mt-3">— Marco Leoni</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
