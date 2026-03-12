import useReveal from './useReveal'

const services = [
  {
    title: 'Tattoo',
    subtitle: 'Il cuore dello studio',
    description:
      'Tatuaggi personalizzati, progettati insieme a te attraverso un percorso di ascolto e consulenza. Ogni lavoro è unico, ogni segno racconta una storia.',
    details: [
      'Consulenza iniziale — ascolto dell\'idea, della storia, del significato',
      'Progettazione del disegno su misura',
      'Sessione di tatuaggio in ambiente intimo e curato',
      'Aftercare con prodotti professionali Tattoolicious',
    ],
    styles: 'Fineline · Sketch · Blackwork · Black & Grey · Lettering · Minimal',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: 'Lash & Beauty',
    subtitle: 'Cura e bellezza',
    description:
      'Servizi di estetica disponibili in studio: trattamenti ciglia, beauty e cura della persona. Un\'estensione naturale della filosofia ARTEN — prendersi cura di sé con arte e attenzione.',
    details: [
      'Trattamenti ciglia professionali',
      'Servizi beauty personalizzati',
      'Ambiente curato e intimo',
    ],
    styles: '',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Arte & Opere',
    subtitle: 'Oltre la pelle',
    description:
      'Alessia Leoni realizza opere d\'arte originali — astrattismo, illustrazione, ciclo sul tema del Sacro. Opere disponibili per acquisto o commissione su richiesta.',
    details: [
      'Opere originali su tela e carta',
      'Illustrazioni e astrattismo',
      'Commissioni personalizzate',
      'Mostre personali in preparazione',
    ],
    styles: '',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
]

export default function Servizi() {
  const sectionRef = useReveal()

  return (
    <section
      id="servizi"
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 section-padding"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <span className="label-text">Cosa Facciamo</span>
          <div className="divider mt-4 mb-6" />
          <h2 className="heading-lg text-arten-cream">
            I nostri <span className="text-arten-gold italic">Servizi</span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="reveal group p-8 lg:p-10 border border-arten-charcoal/50 hover:border-arten-gold/30 transition-all duration-500 bg-arten-dark/30"
            >
              <div className="text-arten-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <span className="label-text text-[10px]">{service.subtitle}</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-arten-cream mt-1 mb-4">
                {service.title}
              </h3>

              <p className="body-text text-sm mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-arten-warm-gray text-sm">
                    <span className="text-arten-gold mt-1 flex-shrink-0">—</span>
                    {detail}
                  </li>
                ))}
              </ul>

              {service.styles && (
                <p className="text-arten-gray text-xs tracking-wide border-t border-arten-charcoal/50 pt-4">
                  {service.styles}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
