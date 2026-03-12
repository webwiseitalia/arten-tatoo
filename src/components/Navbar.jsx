import { useState, useEffect } from 'react'
import logo from '../assets/logo.webp'

const navLinks = [
  { label: 'La Storia', href: '#storia' },
  { label: 'Artisti', href: '#artisti' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Gli Studi', href: '#studi' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-arten-black/95 backdrop-blur-md py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-padding flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img
            src={logo}
            alt="ARTEN - La Bottega del Tattoo"
            className="h-10 sm:h-12 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs uppercase tracking-[0.15em] text-arten-warm-gray hover:text-arten-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/393289027217"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-3 px-6"
          >
            Prenota
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-px bg-arten-cream transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-arten-cream transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-arten-cream transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-arten-black/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-serif text-3xl font-light text-arten-cream hover:text-arten-gold transition-colors duration-300"
            style={{ transitionDelay: menuOpen ? `${i * 80}ms` : '0ms' }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/393289027217"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="btn-primary mt-4"
        >
          Prenota ora
        </a>
      </div>
    </nav>
  )
}
