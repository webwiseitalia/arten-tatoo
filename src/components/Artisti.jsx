import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import tattooAngel from '../assets/foto/tattoo-angel-balance-fineline.webp'
import tattooEye from '../assets/foto/tattoo-eye-rays-fineline.webp'
import tattooDog from '../assets/foto/tattoo-dog-portrait-sketch.webp'
import tattooButterflies from '../assets/foto/tattoo-butterflies-hand-fineline.webp'
import tattooPine from '../assets/foto/tattoo-pine-tree-constellation.webp'
import tattooBalloon from '../assets/foto/tattoo-balloon-dog-minimal.webp'
import tattooHearts from '../assets/foto/tattoo-matching-hearts-lettering.webp'
import tattooLotus from '../assets/foto/tattoo-matching-lotus-fineline.webp'
import tattooKnight from '../assets/foto/tattoo-knight-helmet-blackwork.webp'

gsap.registerPlugin(ScrollTrigger)

const artists = [
  {
    name: 'Marco Leoni',
    role: 'Fondatore / Tatuatore',
    num: '01',
    bio: 'Oltre 17 anni di esperienza nel mondo del tatuaggio. Versatile e curioso, con una predilezione per il fineline — tattoo poco invasivo, elegante e pulito. Per Marco, tatuare è un atto sacro: ascolto, empatia, intimità.',
    quote: 'Non si tratta solo di far scorrere la mano sulla pelle, ma di saper coltivare l\'arte dell\'ascolto.',
    styles: ['Fineline', 'Blackwork', 'Black & Grey', 'Lettering'],
    sede: 'Ceto',
    instagram: 'arten_tattoo',
    portfolio: [tattooAngel, tattooEye, tattooPine, tattooKnight, tattooLotus],
    whatsapp: '393289027217',
  },
  {
    name: 'Alessia Leoni',
    role: 'Tatuatrice / Artista',
    num: '02',
    bio: 'Sorella di Marco, prima di tutto pittrice e artista poliedrica. Il suo stile tattoo è lo sketch, in richiamo diretto alle sue opere d\'arte. La sua ricerca si intreccia con la numerologia sacra, l\'astrattismo e l\'illustrazione.',
    quote: 'L\'arte non è solo quello che vedi, è quello che senti sulla pelle.',
    styles: ['Sketch', 'Fineline', 'Artistico'],
    sede: 'Ceto',
    instagram: 'leonia.rt',
    portfolio: [tattooButterflies, tattooBalloon, tattooHearts],
    whatsapp: '393289027217',
  },
  {
    name: 'Caterina Grola',
    role: 'Tatuatrice',
    num: '03',
    bio: 'Artista della sede di Sonico, Caterina porta la sua visione personale e il suo tratto unico nel mondo ARTEN. Precisione, delicatezza e attenzione al dettaglio caratterizzano ogni suo lavoro.',
    quote: 'Ogni tatuaggio racconta una storia unica.',
    styles: ['Fineline', 'Minimal', 'Black & Grey'],
    sede: 'Sonico',
    instagram: '_catetattoo_',
    portfolio: [tattooDog, tattooLotus, tattooBalloon],
    whatsapp: '393289027217',
  },
]

// Each artist gets a UNIQUE layout
const layouts = [
  // Marco — image left, text right
  (artist, activeImg, setActiveImg) => (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 px-5 sm:px-8 lg:px-20 items-start">
      {/* Image — left */}
      <div className="lg:w-[55%] relative artist-img">
        <div className="aspect-[3/4] max-h-[75vh] overflow-hidden">
          <img src={artist.portfolio[activeImg]} alt={`Tatuaggio di ${artist.name}`} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex gap-2 mt-4">
          {artist.portfolio.map((_, i) => (
            <button key={i} onClick={() => setActiveImg(i)}
              className={`h-[2px] transition-all duration-500 ${i === activeImg ? 'w-10 bg-[var(--gold)]' : 'w-4 bg-[var(--charcoal)] hover:bg-[var(--muted)]'}`}
              aria-label={`Foto ${i + 1}`} />
          ))}
        </div>
      </div>
      {/* Text — right */}
      <div className="lg:w-[45%] lg:pt-[8vh] artist-text" style={{ opacity: 0 }}>
        <span className="t-mono block mb-2">{artist.num}</span>
        <span className="t-label block mb-3">{artist.role}</span>
        <h3 className="t-subheading text-[var(--cream)] mb-6">{artist.name}</h3>
        <p className="t-body mb-6">{artist.bio}</p>
        <ArtistMeta artist={artist} />
      </div>
    </div>
  ),
  // Alessia — text left, image right pulled up, quote overlapping
  (artist, activeImg, setActiveImg) => (
    <div className="relative flex flex-col-reverse lg:flex-row gap-6 lg:gap-0">
      {/* Text — left, wider */}
      <div className="lg:w-[45%] px-5 sm:px-8 lg:pl-20 lg:pr-8 lg:pt-[10vh] artist-text" style={{ opacity: 0 }}>
        <span className="t-mono block mb-2">{artist.num}</span>
        <span className="t-label block mb-3">{artist.role}</span>
        <h3 className="t-subheading text-[var(--cream)] mb-6">{artist.name}</h3>
        <p className="t-body mb-6">{artist.bio}</p>
        <div className="border-l border-[var(--gold-dim)] pl-5 mb-8">
          <p className="text-[var(--cream)]/70 italic text-[clamp(1rem,2vw,1.4rem)]" style={{ fontFamily: 'var(--serif)' }}>
            "{artist.quote}"
          </p>
        </div>
        <ArtistMeta artist={artist} />
      </div>
      {/* Image — right, offset */}
      <div className="lg:w-[55%] lg:-mr-8 artist-img">
        <div className="aspect-[3/4] max-h-[70vh] overflow-hidden lg:ml-auto lg:w-[80%]">
          <img src={artist.portfolio[activeImg]} alt={`Tatuaggio di ${artist.name}`} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex gap-2 mt-4 justify-end mr-4 lg:mr-12">
          {artist.portfolio.map((_, i) => (
            <button key={i} onClick={() => setActiveImg(i)}
              className={`h-[2px] transition-all duration-500 ${i === activeImg ? 'w-10 bg-[var(--gold)]' : 'w-4 bg-[var(--charcoal)] hover:bg-[var(--muted)]'}`}
              aria-label={`Foto ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  ),
  // Caterina — full-width image behind, text overlay bottom-left
  (artist, activeImg, setActiveImg) => (
    <div className="relative">
      {/* Full-width image */}
      <div className="w-full aspect-[16/9] sm:aspect-[2/1] overflow-hidden artist-img">
        <img src={artist.portfolio[activeImg]} alt={`Tatuaggio di ${artist.name}`} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--black) 10%, rgba(10,10,10,0.3) 50%, transparent)' }} />
      </div>
      <div className="flex gap-2 mt-4 ml-5 sm:ml-8">
        {artist.portfolio.map((_, i) => (
          <button key={i} onClick={() => setActiveImg(i)}
            className={`h-[2px] transition-all duration-500 ${i === activeImg ? 'w-10 bg-[var(--gold)]' : 'w-4 bg-[var(--charcoal)] hover:bg-[var(--muted)]'}`}
            aria-label={`Foto ${i + 1}`} />
        ))}
      </div>
      {/* Text — overlapping at bottom */}
      <div className="relative sm:absolute sm:bottom-0 sm:left-0 sm:w-[60%] lg:w-[45%] px-5 sm:px-8 lg:px-12 py-8 sm:pb-12 artist-text" style={{ opacity: 0 }}>
        <span className="t-mono block mb-2">{artist.num}</span>
        <span className="t-label block mb-3">{artist.role}</span>
        <h3 className="t-subheading text-[var(--cream)] mb-4">{artist.name}</h3>
        <p className="t-body mb-6">{artist.bio}</p>
        <ArtistMeta artist={artist} />
      </div>
    </div>
  ),
]

function ArtistMeta({ artist }) {
  return (
    <>
      <div className="flex flex-wrap gap-3 mb-5">
        {artist.styles.map((s) => (
          <span key={s} className="px-3 py-1 border border-[var(--charcoal)] t-mono text-[10px] text-[var(--warm)]">{s}</span>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        <a href={`https://wa.me/${artist.whatsapp}?text=Ciao! Vorrei prenotare con ${artist.name.split(' ')[0]}.`}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--gold)] text-[var(--black)] t-mono text-[10px] uppercase tracking-[0.12em] hover:bg-[var(--cream)] transition-colors duration-500">
          Prenota con {artist.name.split(' ')[0]}
        </a>
        <a href={`https://www.instagram.com/${artist.instagram}/`}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--cream)]/20 text-[var(--cream)] t-mono text-[10px] uppercase tracking-[0.12em] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-500">
          @{artist.instagram}
        </a>
      </div>
    </>
  )
}

function ArtistBlock({ artist, index }) {
  const [activeImg, setActiveImg] = useState(0)
  const blockRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.artist-img',
        { clipPath: 'inset(0 0 100% 0)' },
        {
          clipPath: 'inset(0 0 0% 0)', duration: 1.5, ease: 'power4.inOut',
          scrollTrigger: { trigger: blockRef.current, start: 'top 75%', once: true }
        }
      )
      gsap.fromTo(blockRef.current?.querySelector('.artist-text'),
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, delay: 0.4, ease: 'power3.out',
          scrollTrigger: { trigger: blockRef.current, start: 'top 75%', once: true }
        }
      )
    }, blockRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={blockRef} className={index === 0 ? '' : 'mt-[12vh] sm:mt-[18vh]'}>
      {layouts[index](artist, activeImg, setActiveImg)}
    </div>
  )
}

export default function Artisti() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.artisti-header',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.artisti-header', start: 'top 88%', once: true } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="artisti" className="py-[12vh] sm:py-[18vh] overflow-hidden">
      {/* Header — left-aligned, NOT centered */}
      <div className="artisti-header px-5 sm:px-8 md:px-12 lg:px-20 mb-[8vh]" style={{ opacity: 0 }}>
        <span className="t-label block mb-4">02 — Il Team</span>
        <h2 className="t-heading text-[var(--cream)]">
          Gli{' '}<em className="text-[var(--gold)]">Artisti</em>
        </h2>
        <p className="t-body mt-4 max-w-md">
          Tre anime, un unico linguaggio: l'arte sulla pelle.
        </p>
      </div>

      {artists.map((artist, i) => (
        <ArtistBlock key={artist.name} artist={artist} index={i} />
      ))}

      <hr className="hr-gold mt-[10vh] mx-5 sm:mx-12 lg:mx-20" />
    </section>
  )
}
