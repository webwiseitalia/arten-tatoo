import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import studioImg from '../assets/foto/tattoo-patchwork-arm-flash.webp'
import detailImg from '../assets/foto/tattoo-cherub-angel-blackwork.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Storia() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal with clip
      gsap.fromTo('.storia-img-main',
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.6,
          ease: 'power4.inOut',
          scrollTrigger: { trigger: '.storia-img-main', start: 'top 80%', once: true }
        }
      )

      // Floating detail image
      gsap.fromTo('.storia-img-detail',
        { opacity: 0, scale: 0.8, rotation: -5 },
        {
          opacity: 1, scale: 1, rotation: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.storia-img-detail', start: 'top 85%', once: true }
        }
      )

      // Text blocks stagger
      gsap.fromTo('.storia-text-block',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.storia-text-block', start: 'top 88%', once: true }
        }
      )

      // Quote — horizontal slide
      gsap.fromTo('.storia-quote',
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: { trigger: '.storia-quote', start: 'top 85%', once: true }
        }
      )

      // Parallax on main image
      gsap.to('.storia-img-main img', {
        y: 80,
        ease: 'none',
        scrollTrigger: {
          trigger: '.storia-img-main',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="storia" className="relative py-[15vh] sm:py-[20vh] overflow-hidden">
      {/* Asymmetric layout — NOT a grid */}
      <div className="px-5 sm:px-8 md:px-12">
        {/* Label — offset left */}
        <div className="storia-text-block ml-0 lg:ml-[5vw] mb-6" style={{ opacity: 0 }}>
          <span className="t-label">01 — La Nostra Storia</span>
        </div>

        {/* Heading — large, breaking to the left */}
        <div className="storia-text-block mb-[8vh] lg:mb-[12vh]" style={{ opacity: 0 }}>
          <h2 className="t-heading text-[var(--cream)] max-w-[90vw] lg:max-w-[60vw]">
            Dove l'arte<br />
            incontra{' '}
            <em className="text-[var(--gold)]">la pelle</em>
          </h2>
        </div>
      </div>

      {/* Content — deliberately uneven columns */}
      <div className="relative">
        {/* Main image — pushed to the right, overlapping */}
        <div className="storia-img-main absolute top-0 right-0 w-[50vw] lg:w-[40vw] h-[70vh] sm:h-[80vh] img-parallax hidden md:block">
          <img
            src={studioImg}
            alt="Tatuaggi patchwork nello studio ARTEN"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, transparent, var(--black))' }} />
        </div>

        {/* Text content — left side, constrained width */}
        <div className="relative z-10 px-5 sm:px-8 md:px-12 lg:px-20 max-w-2xl space-y-8">
          <div className="storia-text-block" style={{ opacity: 0 }}>
            <p className="t-body">
              Il nome <strong className="text-[var(--cream)] font-normal">ARTEN</strong> viene dal nonno di Marco Leoni.
              Le sue parole — <em className="text-[var(--cream)]">"hai delle mani d'oro, prenditi cura di loro
              perché un giorno diverranno il tuo lavoro"</em> — sono diventate la ragione di un percorso lungo oltre 17 anni
              nel mondo del tatuaggio.
            </p>
          </div>

          <div className="storia-text-block" style={{ opacity: 0 }}>
            <p className="t-body">
              ARTEN nasce nel cuore della Valle Camonica, provincia di Brescia, circondato dalle Alpi.
              Quello che era un istinto è diventato un mestiere, poi una bottega, poi un luogo dove l'arte,
              l'ascolto e l'intimità si incontrano sulla pelle.
            </p>
          </div>

          <div className="storia-text-block" style={{ opacity: 0 }}>
            <p className="t-body">
              Marco ha aperto la strada: anni di sperimentazione, tecnica, umiltà. Al suo fianco si è unita
              la sorella Alessia, artista prima ancora che tatuatrice — pittrice, illustratrice, ricercatrice
              tra numerologia sacra e astrattismo. Oggi lo studio si è evoluto con la sede di Sonico e la
              collaborazione con Caterina Grola.
            </p>
          </div>

          {/* Mobile image */}
          <div className="storia-img-main md:hidden w-full aspect-[4/5] img-parallax my-8">
            <img
              src={studioImg}
              alt="Tatuaggi patchwork nello studio ARTEN"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Quote — overlapping, offset */}
        <div className="storia-quote relative z-10 mt-[6vh] sm:mt-[10vh] px-5 sm:px-8 md:px-12 lg:ml-[25vw]" style={{ opacity: 0 }}>
          <div className="border-l-[2px] border-[var(--gold)] pl-6 sm:pl-10 py-4 max-w-xl">
            <p className="font-[var(--serif)] text-[clamp(1.3rem,3vw,2.2rem)] italic leading-[1.3] text-[var(--cream)]/80" style={{ fontFamily: 'var(--serif)' }}>
              "Un luogo che supera il concetto di negozio di tatuaggi."
            </p>
          </div>
        </div>

        {/* Small floating image — deliberate overlap */}
        <div className="storia-img-detail absolute bottom-[-5vh] left-[8vw] w-[22vw] max-w-[200px] aspect-[3/4] hidden lg:block" style={{ opacity: 0 }}>
          <img
            src={detailImg}
            alt="Dettaglio tatuaggio cherubino"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Horizontal line — asymmetric */}
      <hr className="hr-gold mt-[10vh] mx-5 sm:mx-12 lg:mx-20" />
    </section>
  )
}
