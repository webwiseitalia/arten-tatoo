import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from '../assets/logo.webp'
import heroImg from '../assets/foto/tattoo-spine-moon-script-fineline.webp'
import heroImg2 from '../assets/foto/tattoo-eye-rays-fineline.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const img2Ref = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.fromTo(imgRef.current,
        { scale: 1.3, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2 },
        0
      )
      .fromTo(img2Ref.current,
        { scale: 1.2, opacity: 0, x: 30 },
        { scale: 1, opacity: 1, x: 0, duration: 1.8 },
        0.4
      )
      .fromTo(headlineRef.current?.children || [],
        { y: 120, opacity: 0, skewY: 5 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.3, stagger: 0.1 },
        0.6
      )
      .fromTo(subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        1.2
      )
      .fromTo(ctaRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
        1.5
      )

      // Parallax on scroll
      gsap.to(imgRef.current?.querySelector('img'), {
        y: 120,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background — asymmetric image placement */}
      <div
        ref={imgRef}
        className="absolute top-0 right-0 w-[65%] sm:w-[55%] h-full img-parallax"
      >
        <img
          src={heroImg}
          alt="Tatuaggio fineline sulla schiena"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, var(--black) 0%, transparent 40%, transparent 60%, rgba(10,10,10,0.8) 100%)'
        }} />
      </div>

      {/* Secondary image — floating, offset */}
      <div
        ref={img2Ref}
        className="absolute bottom-[8%] right-[5%] w-[25vw] max-w-[280px] aspect-[3/4] hidden md:block"
        style={{ opacity: 0 }}
      >
        <img
          src={heroImg2}
          alt="Tatuaggio occhio fineline"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute -inset-3 border border-[var(--gold-dim)]" />
      </div>

      {/* Content — pushed left, not centered */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-[12vh] sm:pb-[15vh] px-5 sm:px-8 md:px-12 lg:px-20">
        {/* Small label top-left */}
        <div className="absolute top-[25vh] left-5 sm:left-8 md:left-12">
          <span className="t-mono block" style={{ writingMode: 'vertical-lr' }}>
            Valle Camonica — dal 2006
          </span>
        </div>

        <div ref={headlineRef} className="max-w-4xl">
          <div style={{ overflow: 'hidden' }}>
            <h1 className="t-display text-[var(--cream)]">
              L'arte sulla pelle
            </h1>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <h1 className="t-display italic text-[var(--gold)] mt-[-0.05em]" style={{ paddingLeft: 'clamp(1rem, 8vw, 8rem)' }}>
              nasce dall'ascolto
            </h1>
          </div>
        </div>

        <div ref={subRef} className="mt-8 sm:mt-12 max-w-lg ml-0 sm:ml-[8vw]" style={{ opacity: 0 }}>
          <p className="t-body">
            ARTEN è la bottega del tatuaggio nel cuore della Valle Camonica.
            Fineline, sketch, arte e cura del dettaglio — con le mani e con il cuore.
          </p>
        </div>

        <div ref={ctaRef} className="flex flex-wrap gap-5 mt-10 sm:mt-14 ml-0 sm:ml-[8vw]">
          <a
            href="https://wa.me/393289027217"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--gold)] text-[var(--black)] t-mono text-[11px] uppercase tracking-[0.15em] hover:bg-[var(--cream)] transition-colors duration-500"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Prenota appuntamento
          </a>
          <a
            href="#artisti"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[var(--cream)]/20 text-[var(--cream)] t-mono text-[11px] uppercase tracking-[0.15em] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-500"
          >
            Scopri gli artisti
          </a>
        </div>
      </div>

      {/* Scroll indicator — off-center right */}
      <div className="absolute bottom-8 right-8 sm:right-12 flex items-center gap-3 opacity-40">
        <span className="t-mono text-[10px]">scroll</span>
        <div className="w-[1px] h-12 bg-[var(--cream)]/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-[var(--gold)]" style={{ animation: 'scrollLine 2s ease-in-out infinite' }} />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
      `}</style>
    </section>
  )
}
