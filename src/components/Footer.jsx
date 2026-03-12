import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from '../assets/logo.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.footer-cta', { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.footer-cta', start: 'top 85%', once: true }
      })
    }, footerRef)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="border-t border-[var(--charcoal)]">
      {/* CTA — massive, cinematic */}
      <div className="footer-cta px-5 sm:px-8 md:px-12 lg:px-20 py-[12vh] sm:py-[16vh]" style={{ opacity: 0 }}>
        <div className="max-w-5xl">
          <p className="t-display text-[var(--cream)]">
            Il tuo prossimo<br />tatuaggio
          </p>
          <p className="t-display italic text-[var(--gold)] mt-[-0.05em]" style={{ paddingLeft: 'clamp(0.5rem, 5vw, 6rem)' }}>
            inizia da qui
          </p>
        </div>
        <a
          href="https://wa.me/393289027217"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 mt-12 px-10 py-5 bg-[var(--gold)] text-[var(--black)] t-mono text-[11px] uppercase tracking-[0.15em] hover:bg-[var(--cream)] transition-colors duration-500"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Scrivici su WhatsApp
        </a>
      </div>

      {/* Footer grid — irregular columns */}
      <div className="border-t border-[var(--charcoal)] px-5 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          {/* Logo + tagline — 30% */}
          <div className="lg:w-[30%]">
            <img src={logo} alt="ARTEN" className="h-8 w-auto mb-4 opacity-70" />
            <p className="t-mono text-[10px] text-[var(--muted)] leading-relaxed mt-4">
              Studio di tatuaggi artistici<br />
              Valle Camonica, Brescia<br />
              Dal 2006
            </p>
          </div>

          {/* Nav — 25% */}
          <div className="lg:w-[25%]">
            <span className="t-mono text-[10px] text-[var(--muted)] block mb-4">Navigazione</span>
            <ul className="space-y-2">
              {['Storia', 'Artisti', 'Servizi', 'Portfolio', 'Contatti'].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-[var(--warm)] text-sm hover:text-[var(--gold)] transition-colors duration-300" style={{ fontFamily: 'var(--sans)' }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sedi — 20% */}
          <div className="lg:w-[20%]">
            <span className="t-mono text-[10px] text-[var(--muted)] block mb-4">Sedi</span>
            <div className="space-y-3">
              <div>
                <p className="text-[var(--cream)] text-sm" style={{ fontFamily: 'var(--sans)' }}>Ceto</p>
                <p className="t-mono text-[10px] text-[var(--muted)]">Via Badetto 60</p>
              </div>
              <div>
                <p className="text-[var(--cream)] text-sm" style={{ fontFamily: 'var(--sans)' }}>Sonico</p>
                <p className="t-mono text-[10px] text-[var(--muted)]">Via Camiasco 1</p>
              </div>
            </div>
          </div>

          {/* Social — 25% */}
          <div className="lg:w-[25%]">
            <span className="t-mono text-[10px] text-[var(--muted)] block mb-4">Social</span>
            <div className="space-y-2">
              <a href="https://www.instagram.com/arten_tattoo/" target="_blank" rel="noopener noreferrer" className="block t-mono text-sm text-[var(--warm)] hover:text-[var(--gold)] transition-colors duration-300">
                @arten_tattoo
              </a>
              <a href="https://www.instagram.com/arten.catetattoo.sonico/" target="_blank" rel="noopener noreferrer" className="block t-mono text-sm text-[var(--warm)] hover:text-[var(--gold)] transition-colors duration-300">
                @arten.catetattoo.sonico
              </a>
              <a href="https://wa.me/393289027217" target="_blank" rel="noopener noreferrer" className="block t-mono text-sm text-[var(--warm)] hover:text-[var(--gold)] transition-colors duration-300">
                328 902 7217
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom — minimal */}
      <div className="border-t border-[var(--charcoal)]/50 px-5 sm:px-8 md:px-12 lg:px-20 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="t-mono text-[10px] text-[var(--muted)]">
          © {new Date().getFullYear()} ARTEN | La Bottega del Tattoo
        </p>
        <div className="flex gap-6">
          <a href="#" className="t-mono text-[10px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors">Privacy</a>
          <a href="#" className="t-mono text-[10px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors">Cookie</a>
        </div>
      </div>
    </footer>
  )
}
