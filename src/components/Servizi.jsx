import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Tattoo',
    subtitle: 'Il cuore dello studio',
    num: 'I',
    description: 'Tatuaggi personalizzati, progettati insieme a te attraverso un percorso di ascolto e consulenza. Ogni lavoro è unico, ogni segno racconta una storia.',
    details: [
      'Consulenza iniziale — ascolto dell\'idea, della storia, del significato',
      'Progettazione del disegno su misura',
      'Sessione di tatuaggio in ambiente intimo e curato',
      'Aftercare con prodotti professionali Tattoolicious',
    ],
    styles: 'Fineline · Sketch · Blackwork · Black & Grey · Lettering · Minimal',
  },
  {
    title: 'Lash & Beauty',
    subtitle: 'Cura e bellezza',
    num: 'II',
    description: 'Servizi di estetica disponibili in studio: trattamenti ciglia, beauty e cura della persona. Un\'estensione naturale della filosofia ARTEN — prendersi cura di sé con arte e attenzione.',
    details: [
      'Trattamenti ciglia professionali',
      'Servizi beauty personalizzati',
      'Ambiente curato e intimo',
    ],
    styles: '',
  },
  {
    title: 'Arte & Opere',
    subtitle: 'Oltre la pelle',
    num: 'III',
    description: 'Alessia Leoni realizza opere d\'arte originali — astrattismo, illustrazione, ciclo sul tema del Sacro. Opere disponibili per acquisto o commissione su richiesta.',
    details: [
      'Opere originali su tela e carta',
      'Illustrazioni e astrattismo',
      'Commissioni personalizzate',
      'Mostre personali in preparazione',
    ],
    styles: '',
  },
]

export default function Servizi() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.servizi-header', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.servizi-header', start: 'top 88%', once: true }
      })
      document.querySelectorAll('.servizio-item').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1, x: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true }
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="servizi" className="py-[12vh] sm:py-[18vh]">
      {/* Header — right-aligned this time (contrast with Artisti which was left) */}
      <div className="servizi-header px-5 sm:px-8 md:px-12 lg:px-20 mb-[8vh] text-right" style={{ opacity: 0 }}>
        <span className="t-label block mb-4">03 — Cosa Facciamo</span>
        <h2 className="t-heading text-[var(--cream)]">
          I nostri{' '}<em className="text-[var(--gold)]">Servizi</em>
        </h2>
      </div>

      {/* Services — NOT a grid. Stacked, alternating alignment */}
      <div className="space-y-0">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="servizio-item border-t border-[var(--charcoal)] group"
            style={{ opacity: 0 }}
          >
            <div className={`flex flex-col lg:flex-row ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''} gap-6 lg:gap-0`}>
              {/* Number + Title side */}
              <div className={`lg:w-[40%] px-5 sm:px-8 lg:px-12 py-8 sm:py-12 flex items-start gap-6 ${i % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                <span className="text-[var(--gold)]/20 text-[clamp(3rem,8vw,7rem)] leading-none font-light" style={{ fontFamily: 'var(--serif)' }}>
                  {service.num}
                </span>
                <div className="pt-2">
                  <span className="t-mono text-[12px] block mb-1">{service.subtitle}</span>
                  <h3 className="text-[var(--cream)] text-[clamp(1.8rem,4vw,3rem)] leading-[1.1]" style={{ fontFamily: 'var(--serif)' }}>
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content side */}
              <div className={`lg:w-[60%] px-5 sm:px-8 lg:px-12 py-4 sm:py-12 lg:border-l border-[var(--charcoal)] ${i % 2 !== 0 ? 'lg:border-l-0 lg:border-r' : ''}`}>
                <p className="t-body mb-6 max-w-xl">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3 text-[var(--warm)] text-[var(--fluid-sm)]" style={{ fontSize: 'var(--fluid-sm)' }}>
                      <span className="text-[var(--gold)] mt-0.5 shrink-0 text-xs">+</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                {service.styles && (
                  <p className="t-mono text-[12px] text-[var(--muted)] pt-4 border-t border-[var(--charcoal)]/50">
                    {service.styles}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
        {/* Bottom border */}
        <div className="border-t border-[var(--charcoal)]" />
      </div>

      <hr className="hr-gold mt-[10vh] mx-5 sm:mx-12 lg:mx-20" />
    </section>
  )
}
