import { useState } from 'react'
import useReveal from './useReveal'
import tattooAngel from '../assets/foto/tattoo-angel-balance-fineline.webp'
import tattooEye from '../assets/foto/tattoo-eye-rays-fineline.webp'
import tattooDog from '../assets/foto/tattoo-dog-portrait-sketch.webp'
import tattooButterflies from '../assets/foto/tattoo-butterflies-hand-fineline.webp'
import tattooPine from '../assets/foto/tattoo-pine-tree-constellation.webp'
import tattooBalloon from '../assets/foto/tattoo-balloon-dog-minimal.webp'
import tattooHearts from '../assets/foto/tattoo-matching-hearts-lettering.webp'
import tattooLotus from '../assets/foto/tattoo-matching-lotus-fineline.webp'
import tattooKnight from '../assets/foto/tattoo-knight-helmet-blackwork.webp'

const artists = [
  {
    name: 'Marco Leoni',
    role: 'Fondatore / Tatuatore',
    bio: 'Oltre 17 anni di esperienza nel mondo del tatuaggio. Versatile e curioso, con una predilezione per il fineline — tattoo poco invasivo, elegante e pulito. Per Marco, tatuare è un atto sacro: ascolto, empatia, intimità.',
    quote: '"Non si tratta solo di far scorrere la mano sulla pelle, ma di saper coltivare l\'arte dell\'ascolto."',
    styles: ['Fineline', 'Blackwork', 'Black & Grey', 'Lettering'],
    sede: 'Studio di Ceto',
    instagram: 'arten_tattoo',
    portfolio: [tattooAngel, tattooEye, tattooPine, tattooKnight, tattooLotus],
    whatsapp: '393289027217',
  },
  {
    name: 'Alessia Leoni',
    role: 'Tatuatrice / Artista',
    bio: 'Sorella di Marco, prima di tutto pittrice e artista poliedrica. Il suo stile tattoo è lo sketch, in richiamo diretto alle sue opere d\'arte. La sua ricerca si intreccia con la numerologia sacra, l\'astrattismo e l\'illustrazione.',
    quote: '"L\'arte non è solo quello che vedi, è quello che senti sulla pelle."',
    styles: ['Sketch', 'Fineline', 'Artistico'],
    sede: 'Studio di Ceto',
    instagram: 'leonia.rt',
    portfolio: [tattooButterflies, tattooBalloon, tattooHearts],
    whatsapp: '393289027217',
  },
  {
    name: 'Caterina Grola',
    role: 'Tatuatrice',
    bio: 'Artista della sede di Sonico, Caterina porta la sua visione personale e il suo tratto unico nel mondo ARTEN. Precisione, delicatezza e attenzione al dettaglio caratterizzano ogni suo lavoro.',
    quote: '"Ogni tatuaggio racconta una storia unica."',
    styles: ['Fineline', 'Minimal', 'Black & Grey'],
    sede: 'Studio di Sonico',
    instagram: '_catetattoo_',
    portfolio: [tattooDog, tattooLotus, tattooBalloon],
    whatsapp: '393289027217',
  },
]

function ArtistCard({ artist, index }) {
  const [activeImg, setActiveImg] = useState(0)
  const isEven = index % 2 === 0

  return (
    <div className={`reveal grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${!isEven ? 'lg:direction-rtl' : ''}`}>
      {/* Portfolio preview */}
      <div className={`relative ${!isEven ? 'lg:order-2' : ''}`}>
        <div className="relative overflow-hidden aspect-[3/4] max-h-[550px]">
          <img
            src={artist.portfolio[activeImg]}
            alt={`Tatuaggio di ${artist.name}`}
            className="w-full h-full object-cover transition-opacity duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-arten-black/60 via-transparent to-transparent" />
        </div>

        {/* Thumbnail dots */}
        {artist.portfolio.length > 1 && (
          <div className="flex gap-2 justify-center mt-4">
            {artist.portfolio.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeImg ? 'bg-arten-gold w-6' : 'bg-arten-charcoal hover:bg-arten-gray'
                }`}
                aria-label={`Foto ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className={`space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
        <div>
          <span className="label-text">{artist.role}</span>
          <h3 className="heading-md text-arten-cream mt-2">{artist.name}</h3>
        </div>

        <p className="body-text">{artist.bio}</p>

        <p className="font-serif text-lg italic text-arten-cream/70">{artist.quote}</p>

        {/* Styles */}
        <div className="flex flex-wrap gap-2">
          {artist.styles.map((style) => (
            <span
              key={style}
              className="px-4 py-1.5 border border-arten-charcoal text-arten-warm-gray text-xs uppercase tracking-widest"
            >
              {style}
            </span>
          ))}
        </div>

        <p className="text-arten-gray text-sm">
          <svg className="w-4 h-4 inline mr-1 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {artist.sede}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={`https://wa.me/${artist.whatsapp}?text=Ciao! Vorrei prenotare un appuntamento con ${artist.name.split(' ')[0]}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-3 px-6"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Prenota con {artist.name.split(' ')[0]}
          </a>
          <a
            href={`https://www.instagram.com/${artist.instagram}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs py-3 px-6"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @{artist.instagram}
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Artisti() {
  const sectionRef = useReveal()

  return (
    <section
      id="artisti"
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 section-padding bg-arten-dark/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <span className="label-text">Il Team</span>
          <div className="divider mt-4 mb-6" />
          <h2 className="heading-lg text-arten-cream">
            Gli <span className="text-arten-gold italic">Artisti</span>
          </h2>
          <p className="body-text max-w-xl mx-auto mt-4">
            Tre anime, un unico linguaggio: l'arte sulla pelle.
          </p>
        </div>

        {/* Artists */}
        <div className="space-y-24 lg:space-y-32">
          {artists.map((artist, i) => (
            <ArtistCard key={artist.name} artist={artist} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
