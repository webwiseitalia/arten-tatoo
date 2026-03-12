import { useState, useMemo } from 'react'
import useReveal from './useReveal'

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

const works = [
  { src: tattooAngel, alt: 'Angelo con corona - fineline', style: 'Fineline', artist: 'Marco' },
  { src: tattooSpine, alt: 'Luna e scritta sulla schiena - fineline', style: 'Fineline', artist: 'Marco' },
  { src: tattooEye, alt: 'Occhio con raggi - fineline', style: 'Fineline', artist: 'Marco' },
  { src: tattooPine, alt: 'Pino con costellazione - fineline', style: 'Fineline', artist: 'Marco' },
  { src: tattooLotus, alt: 'Fiori di loto abbinati - fineline', style: 'Fineline', artist: 'Marco' },
  { src: tattooCherub, alt: 'Cherubino alato - blackwork', style: 'Blackwork', artist: 'Marco' },
  { src: tattooSword, alt: 'Spada e cavaliere - blackwork', style: 'Blackwork', artist: 'Marco' },
  { src: tattooKnight, alt: 'Elmo spartano - blackwork', style: 'Blackwork', artist: 'Marco' },
  { src: tattooArm, alt: 'Braccio con serpente e angelo', style: 'Black & Grey', artist: 'Marco' },
  { src: tattooHearts, alt: 'Cuori con scritta - lettering', style: 'Lettering', artist: 'Alessia' },
  { src: tattooButterflies, alt: 'Farfalle sulla mano - sketch', style: 'Sketch', artist: 'Alessia' },
  { src: tattooBalloon, alt: 'Cane palloncino - minimal', style: 'Minimal', artist: 'Alessia' },
  { src: tattooDog, alt: 'Ritratto cane - sketch', style: 'Sketch', artist: 'Caterina' },
  { src: tattooPatchwork, alt: 'Patchwork braccio - flash', style: 'Flash', artist: 'Marco' },
]

const filters = ['Tutti', 'Fineline', 'Blackwork', 'Black & Grey', 'Sketch', 'Lettering', 'Minimal']
const artistFilters = ['Tutti', 'Marco', 'Alessia', 'Caterina']

export default function Portfolio() {
  const sectionRef = useReveal()
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

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 section-padding"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-12">
          <span className="label-text">I Nostri Lavori</span>
          <div className="divider mt-4 mb-6" />
          <h2 className="heading-lg text-arten-cream">
            <span className="text-arten-gold italic">Portfolio</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="reveal space-y-4 mb-12">
          {/* Style filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveStyle(f)}
                className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 border ${
                  activeStyle === f
                    ? 'border-arten-gold text-arten-gold bg-arten-gold/10'
                    : 'border-arten-charcoal text-arten-gray hover:border-arten-warm-gray hover:text-arten-warm-gray'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          {/* Artist filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {artistFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveArtist(f)}
                className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 border ${
                  activeArtist === f
                    ? 'border-arten-gold text-arten-gold bg-arten-gold/10'
                    : 'border-arten-charcoal text-arten-gray hover:border-arten-warm-gray hover:text-arten-warm-gray'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((work, i) => (
            <div
              key={i}
              className="reveal group relative aspect-[3/4] overflow-hidden cursor-pointer bg-arten-charcoal/20"
              onClick={() => setLightbox(i)}
            >
              <img
                src={work.src}
                alt={work.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-arten-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-arten-gold text-xs uppercase tracking-widest">{work.style}</span>
                <p className="text-arten-cream text-sm mt-1">{work.artist}</p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-arten-gray py-20 font-serif text-xl italic">
            Nessun lavoro trovato per questi filtri.
          </p>
        )}

        {/* CTA */}
        <div className="reveal text-center mt-16">
          <p className="body-text mb-6">Scopri altri lavori sui nostri profili Instagram</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com/arten_tattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs py-3 px-6"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @arten_tattoo
            </a>
            <a
              href="https://www.instagram.com/arten.catetattoo.sonico/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs py-3 px-6"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @arten.catetattoo.sonico
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-arten-cream/70 hover:text-arten-cream z-10"
            onClick={() => setLightbox(null)}
            aria-label="Chiudi"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-arten-cream/50 hover:text-arten-cream p-2"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((prev) => (prev > 0 ? prev - 1 : filtered.length - 1))
            }}
            aria-label="Precedente"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <img
            src={filtered[lightbox]?.src}
            alt={filtered[lightbox]?.alt}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-arten-cream/50 hover:text-arten-cream p-2"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((prev) => (prev < filtered.length - 1 ? prev + 1 : 0))
            }}
            aria-label="Successivo"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Info bar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <span className="text-arten-gold text-xs uppercase tracking-widest">
              {filtered[lightbox]?.style}
            </span>
            <span className="text-arten-gray text-xs mx-3">·</span>
            <span className="text-arten-warm-gray text-xs">
              {filtered[lightbox]?.artist}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}
