import { useState, useMemo, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import tattooAngel from '../assets/foto/tattoo-angel-balance-fineline.webp'
import tattooArm from '../assets/foto/tattoo-arm-snake-angel-studio.webp'
import tattooSword from '../assets/foto/tattoo-sword-knight-blackwork.webp'
import tattooSpine from '../assets/foto/tattoo-spine-moon-script-fineline.webp'
import tattooLotus from '../assets/foto/tattoo-matching-lotus-fineline.webp'
import tattooCherub from '../assets/foto/tattoo-cherub-angel-blackwork.webp'
import tattooButterflies from '../assets/foto/tattoo-butterflies-hand-fineline.webp'
import tattooPatchwork from '../assets/foto/tattoo-patchwork-arm-flash.webp'
import tattooEye from '../assets/foto/tattoo-eye-rays-fineline.webp'
import tattooPine from '../assets/foto/tattoo-pine-tree-constellation.webp'
import tattooHearts from '../assets/foto/tattoo-matching-hearts-lettering.webp'
import tattooDog from '../assets/foto/tattoo-dog-portrait-sketch.webp'
import tattooKnight from '../assets/foto/tattoo-knight-helmet-blackwork.webp'
import tattooBalloon from '../assets/foto/tattoo-balloon-dog-minimal.webp'

gsap.registerPlugin(ScrollTrigger)

const works = [
  { src: tattooAngel, alt: 'Angelo con corona - fineline', style: 'Fineline', artist: 'Marco' },
  { src: tattooSpine, alt: 'Luna e scritta sulla schiena', style: 'Fineline', artist: 'Marco' },
  { src: tattooEye, alt: 'Occhio con raggi - fineline', style: 'Fineline', artist: 'Marco' },
  { src: tattooPine, alt: 'Pino con costellazione', style: 'Fineline', artist: 'Marco' },
  { src: tattooLotus, alt: 'Fiori di loto abbinati', style: 'Fineline', artist: 'Marco' },
  { src: tattooCherub, alt: 'Cherubino alato', style: 'Blackwork', artist: 'Marco' },
  { src: tattooSword, alt: 'Spada e cavaliere', style: 'Blackwork', artist: 'Marco' },
  { src: tattooKnight, alt: 'Elmo spartano', style: 'Blackwork', artist: 'Marco' },
  { src: tattooArm, alt: 'Braccio con serpente', style: 'Black & Grey', artist: 'Marco' },
  { src: tattooHearts, alt: 'Cuori con scritta', style: 'Lettering', artist: 'Alessia' },
  { src: tattooButterflies, alt: 'Farfalle sulla mano', style: 'Sketch', artist: 'Alessia' },
  { src: tattooBalloon, alt: 'Cane palloncino', style: 'Minimal', artist: 'Alessia' },
  { src: tattooDog, alt: 'Ritratto cane', style: 'Sketch', artist: 'Caterina' },
  { src: tattooPatchwork, alt: 'Patchwork braccio', style: 'Flash', artist: 'Marco' },
]

const styleFilters = ['Tutti', 'Fineline', 'Blackwork', 'Black & Grey', 'Sketch', 'Lettering', 'Minimal']
const artistFilters = ['Tutti', 'Marco', 'Alessia', 'Caterina']

// Masonry-like irregular row heights
const rowPatterns = [
  ['aspect-[3/4]', 'aspect-[4/5]', 'aspect-[2/3]'],
  ['aspect-[2/3]', 'aspect-[3/4]', 'aspect-[4/5]', 'aspect-[3/4]'],
  ['aspect-[4/5]', 'aspect-[3/4]', 'aspect-[2/3]'],
]

export default function Portfolio() {
  const sectionRef = useRef(null)
  const [activeStyle, setActiveStyle] = useState('Tutti')
  const [activeArtist, setActiveArtist] = useState('Tutti')
  const [lightbox, setLightbox] = useState(null)

  const filtered = useMemo(() => {
    return works.filter((w) => {
      const styleMatch = activeStyle === 'Tutti' || w.style === activeStyle
      const artistMatch = activeArtist === 'Tutti' || w.artist === activeArtist
      return styleMatch && artistMatch
    })
  }, [activeStyle, activeArtist])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.portfolio-header', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.portfolio-header', start: 'top 88%', once: true }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Animate grid items when filter changes
  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.portfolio-item')
    if (!items?.length) return
    gsap.fromTo(items,
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.04, ease: 'power2.out' }
    )
  }, [activeStyle, activeArtist])

  return (
    <section ref={sectionRef} id="portfolio" className="py-[12vh] sm:py-[18vh] overflow-hidden">
      {/* Header — left, with a large decorative number */}
      <div className="portfolio-header relative px-5 sm:px-8 md:px-12 lg:px-20 mb-[6vh]" style={{ opacity: 0 }}>
        <span className="absolute -top-[2vh] right-[5vw] text-[var(--charcoal)] text-[clamp(8rem,20vw,18rem)] leading-none font-light pointer-events-none select-none hidden sm:block" style={{ fontFamily: 'var(--serif)' }}>
          05
        </span>
        <span className="t-label block mb-4 relative z-10">05 — I Nostri Lavori</span>
        <h2 className="t-heading text-[var(--cream)] relative z-10">
          <em className="text-[var(--gold)]">Portfolio</em>
        </h2>
      </div>

      {/* Filters — left-aligned, horizontal scroll on mobile */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-20 mb-8 space-y-3">
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {styleFilters.map((f) => (
            <button key={f} onClick={() => setActiveStyle(f)}
              className={`shrink-0 px-4 py-2 t-mono text-[12px] uppercase tracking-[0.1em] transition-all duration-400 border ${
                activeStyle === f
                  ? 'border-[var(--gold)] text-[var(--gold)] bg-[var(--gold)]/5'
                  : 'border-[var(--charcoal)] text-[var(--muted)] hover:text-[var(--warm)] hover:border-[var(--warm)]'
              }`}>
              {f}
            </button>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {artistFilters.map((f) => (
            <button key={f} onClick={() => setActiveArtist(f)}
              className={`shrink-0 px-4 py-2 t-mono text-[12px] uppercase tracking-[0.1em] transition-all duration-400 border ${
                activeArtist === f
                  ? 'border-[var(--gold)] text-[var(--gold)] bg-[var(--gold)]/5'
                  : 'border-[var(--charcoal)] text-[var(--muted)] hover:text-[var(--warm)] hover:border-[var(--warm)]'
              }`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Irregular grid — NOT uniform columns */}
      <div className="px-3 sm:px-5">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4">
          {filtered.map((work, i) => {
            const patternRow = rowPatterns[i % rowPatterns.length]
            const aspect = patternRow[i % patternRow.length]
            return (
              <div
                key={`${work.src}-${i}`}
                className={`portfolio-item group relative ${aspect} overflow-hidden cursor-pointer mb-3 sm:mb-4 break-inside-avoid`}
                onClick={() => setLightbox(i)}
              >
                <img src={work.src} alt={work.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <span className="t-mono text-[12px] text-[var(--gold)]">{work.style}</span>
                  <p className="text-[var(--cream)] text-sm mt-0.5" style={{ fontFamily: 'var(--sans)' }}>{work.artist}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[var(--muted)] py-20 italic text-[clamp(1.2rem,2vw,1.5rem)]" style={{ fontFamily: 'var(--serif)' }}>
          Nessun lavoro trovato per questi filtri.
        </p>
      )}

      {/* Instagram CTA */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-20 mt-[6vh] flex flex-wrap gap-6 items-center">
        <span className="t-body text-sm">Scopri di più su</span>
        <a href="https://www.instagram.com/arten_tattoo/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 t-mono text-[13px] text-[var(--cream)] hover:text-[var(--gold)] transition-colors duration-400">
          @arten_tattoo
        </a>
        <a href="https://www.instagram.com/arten.catetattoo.sonico/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 t-mono text-[13px] text-[var(--cream)] hover:text-[var(--gold)] transition-colors duration-400">
          @arten.catetattoo.sonico
        </a>
      </div>

      <hr className="hr-gold mt-[10vh] mx-5 sm:mx-12 lg:mx-20" />

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-[var(--cream)]/50 hover:text-[var(--cream)] z-10" onClick={() => setLightbox(null)} aria-label="Chiudi">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--cream)]/30 hover:text-[var(--cream)] p-2" aria-label="Precedente"
            onClick={(e) => { e.stopPropagation(); setLightbox(p => p > 0 ? p - 1 : filtered.length - 1) }}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <img src={filtered[lightbox]?.src} alt={filtered[lightbox]?.alt} className="max-h-[85vh] max-w-[90vw] object-contain" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--cream)]/30 hover:text-[var(--cream)] p-2" aria-label="Successivo"
            onClick={(e) => { e.stopPropagation(); setLightbox(p => p < filtered.length - 1 ? p + 1 : 0) }}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" /></svg>
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <span className="t-mono text-[12px] text-[var(--gold)]">{filtered[lightbox]?.style}</span>
            <span className="text-[var(--muted)]">·</span>
            <span className="t-mono text-[13px] text-[var(--warm)]">{filtered[lightbox]?.artist}</span>
          </div>
        </div>
      )}

      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>
    </section>
  )
}
