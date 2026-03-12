import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import logo from '../assets/logo.webp'

const navLinks = [
  { label: 'Storia', href: '#storia', num: '01' },
  { label: 'Artisti', href: '#artisti', num: '02' },
  { label: 'Servizi', href: '#servizi', num: '03' },
  { label: 'Studi', href: '#studi', num: '04' },
  { label: 'Portfolio', href: '#portfolio', num: '05' },
  { label: 'Contatti', href: '#contatti', num: '06' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const linksRef = useRef([])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      gsap.fromTo(linksRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.06, ease: 'power4.out', delay: 0.2 }
      )
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 mix-blend-difference pointer-events-none">
      <div className="flex items-center justify-between px-5 sm:px-8 md:px-12 py-5 sm:py-6">
        <a href="#" className="pointer-events-auto relative z-50">
          <img src={logo} alt="ARTEN" className={`h-8 sm:h-10 w-auto transition-all duration-700 ${scrolled ? 'opacity-70' : 'opacity-100'}`} />
        </a>

        {/* Desktop — minimal, off-center */}
        <div className="hidden lg:flex items-center gap-10 pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative t-mono text-[var(--cream)] hover:text-[var(--gold)] transition-colors duration-500"
            >
              <span className="text-[9px] text-[var(--gold)] opacity-0 group-hover:opacity-100 absolute -top-3 left-0 transition-opacity duration-300">{link.num}</span>
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-[6px] p-3 pointer-events-auto relative z-50"
          aria-label="Menu"
        >
          <span className={`block w-7 h-[1px] bg-[var(--cream)] transition-all duration-500 origin-center ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block w-7 h-[1px] bg-[var(--cream)] transition-all duration-500 origin-center ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Fullscreen menu */}
      <div
        ref={menuRef}
        className={`fixed inset-0 bg-[var(--black)] flex flex-col justify-end pb-16 px-8 transition-all duration-700 lg:hidden pointer-events-auto ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="space-y-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              ref={el => linksRef.current[i] = el}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block group"
            >
              <div className="flex items-baseline gap-4 py-3 border-b border-[var(--charcoal)]">
                <span className="t-mono text-[10px] text-[var(--gold)]">{link.num}</span>
                <span className="t-subheading text-[var(--cream)] group-hover:text-[var(--gold)] transition-colors duration-300">
                  {link.label}
                </span>
              </div>
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/393289027217"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-[var(--gold)] text-[var(--black)] t-mono text-[11px] uppercase tracking-[0.15em] w-fit"
        >
          Prenota ora
        </a>
      </div>
    </nav>
  )
}
