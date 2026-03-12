import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const studios = [
  {
    name: 'Ceto',
    label: 'Sede Principale',
    address: 'Via Badetto 60, Ceto (BS)',
    description: 'Nel cuore della Valle Camonica, circondato dalle Alpi. Ambiente curato, intimo, artigianale — più una bottega d\'artista che un negozio. Qui lavorano Marco e Alessia Leoni.',
    artists: 'Marco Leoni, Alessia Leoni',
    instagram: 'arten_tattoo',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Badetto+60+Ceto+BS',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.0!2d10.35!3d45.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDU3JzAwLjAiTiAxMMKwMjEnMDAuMCJF!5e0!3m2!1sit!2sit!4v1600000000000!5m2!1sit!2sit',
  },
  {
    name: 'Sonico',
    label: 'ARTEN & Cate Tattoo',
    address: 'Via Camiasco 1, Sonico (BS)',
    description: 'Sede secondaria dello studio, nata dalla collaborazione con Caterina Grola. Un ambiente accogliente e creativo nella Valle Camonica.',
    artists: 'Caterina Grola',
    instagram: 'arten.catetattoo.sonico',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Camiasco+1+Sonico+BS',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.0!2d10.35!3d46.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDA5JzAwLjAiTiAxMMKwMjEnMDAuMCJF!5e0!3m2!1sit!2sit!4v1600000000000!5m2!1sit!2sit',
  },
]

export default function Studi() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.studi-header', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.studi-header', start: 'top 88%', once: true }
      })
      document.querySelectorAll('.studio-block').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%', once: true } }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="studi" className="py-[12vh] sm:py-[18vh] overflow-hidden">
      {/* Header */}
      <div className="studi-header px-5 sm:px-8 md:px-12 lg:px-20 mb-[8vh]" style={{ opacity: 0 }}>
        <span className="t-label block mb-4">04 — Dove Trovarci</span>
        <h2 className="t-heading text-[var(--cream)] max-w-[70vw]">
          Gli{' '}<em className="text-[var(--gold)]">Studi</em>
        </h2>
        <p className="t-body mt-4 max-w-md">
          Due sedi nel cuore della Valle Camonica, tra le Alpi bresciane.
        </p>
      </div>

      {/* Studios — asymmetric layout, first bigger than second */}
      <div className="flex flex-col lg:flex-row gap-0">
        {/* Ceto — takes 60% */}
        <div className="studio-block lg:w-[60%] border-t border-r-0 lg:border-r border-[var(--charcoal)]" style={{ opacity: 0 }}>
          <div className="relative h-[35vh] sm:h-[40vh] overflow-hidden">
            <iframe
              src={studios[0].mapEmbed}
              className="w-full h-full border-0 grayscale opacity-50 hover:opacity-70 transition-opacity duration-700"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Studio Ceto"
            />
            {/* Large location name overlay */}
            <div className="absolute bottom-4 left-6 sm:left-10">
              <span className="text-[var(--cream)] text-[clamp(3rem,8vw,6rem)] font-light leading-none" style={{ fontFamily: 'var(--serif)', opacity: 0.15 }}>
                {studios[0].name}
              </span>
            </div>
          </div>
          <div className="px-5 sm:px-8 lg:px-10 py-8 sm:py-10 space-y-4">
            <span className="t-label text-[10px]">{studios[0].label}</span>
            <h3 className="text-[var(--cream)] text-[clamp(1.5rem,3vw,2.5rem)]" style={{ fontFamily: 'var(--serif)' }}>
              Studio di {studios[0].name}
            </h3>
            <p className="t-mono text-[var(--gold)] text-[11px]">{studios[0].address}</p>
            <p className="t-body text-sm">{studios[0].description}</p>
            <p className="t-mono text-[11px]"><span className="text-[var(--gold)]">Artisti</span> — {studios[0].artists}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={studios[0].mapUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--cream)]/20 t-mono text-[10px] text-[var(--cream)] uppercase tracking-[0.1em] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-500">
                Indicazioni
              </a>
              <a href={`https://www.instagram.com/${studios[0].instagram}/`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--cream)]/20 t-mono text-[10px] text-[var(--cream)] uppercase tracking-[0.1em] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-500">
                @{studios[0].instagram}
              </a>
            </div>
          </div>
        </div>

        {/* Sonico — takes 40%, offset down */}
        <div className="studio-block lg:w-[40%] border-t border-[var(--charcoal)] lg:mt-[8vh]" style={{ opacity: 0 }}>
          <div className="relative h-[30vh] sm:h-[35vh] overflow-hidden">
            <iframe
              src={studios[1].mapEmbed}
              className="w-full h-full border-0 grayscale opacity-50 hover:opacity-70 transition-opacity duration-700"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Studio Sonico"
            />
            <div className="absolute bottom-4 left-6">
              <span className="text-[var(--cream)] text-[clamp(2.5rem,6vw,5rem)] font-light leading-none" style={{ fontFamily: 'var(--serif)', opacity: 0.15 }}>
                {studios[1].name}
              </span>
            </div>
          </div>
          <div className="px-5 sm:px-8 lg:px-10 py-8 sm:py-10 space-y-4">
            <span className="t-label text-[10px]">{studios[1].label}</span>
            <h3 className="text-[var(--cream)] text-[clamp(1.5rem,3vw,2.2rem)]" style={{ fontFamily: 'var(--serif)' }}>
              Studio di {studios[1].name}
            </h3>
            <p className="t-mono text-[var(--gold)] text-[11px]">{studios[1].address}</p>
            <p className="t-body text-sm">{studios[1].description}</p>
            <p className="t-mono text-[11px]"><span className="text-[var(--gold)]">Artista</span> — {studios[1].artists}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={studios[1].mapUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--cream)]/20 t-mono text-[10px] text-[var(--cream)] uppercase tracking-[0.1em] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-500">
                Indicazioni
              </a>
              <a href={`https://www.instagram.com/${studios[1].instagram}/`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--cream)]/20 t-mono text-[10px] text-[var(--cream)] uppercase tracking-[0.1em] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-500">
                @{studios[1].instagram}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
