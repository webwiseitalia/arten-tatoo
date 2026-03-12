import useReveal from './useReveal'

const studios = [
  {
    name: 'Studio di Ceto',
    label: 'Sede Principale',
    address: 'Via Badetto 60, Ceto (BS)',
    description:
      'Nel cuore della Valle Camonica, circondato dalle Alpi. Ambiente curato, intimo, artigianale — più una bottega d\'artista che un negozio. Qui lavorano Marco e Alessia Leoni.',
    artists: 'Marco Leoni, Alessia Leoni',
    instagram: 'arten_tattoo',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Badetto+60+Ceto+BS',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.0!2d10.35!3d45.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDU3JzAwLjAiTiAxMMKwMjEnMDAuMCJF!5e0!3m2!1sit!2sit!4v1600000000000!5m2!1sit!2sit',
  },
  {
    name: 'Studio di Sonico',
    label: 'ARTEN & Cate Tattoo',
    address: 'Via Camiasco 1, Sonico (BS)',
    description:
      'Sede secondaria dello studio, nata dalla collaborazione con Caterina Grola. Un ambiente accogliente e creativo nella Valle Camonica.',
    artists: 'Caterina Grola',
    instagram: 'arten.catetattoo.sonico',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Camiasco+1+Sonico+BS',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.0!2d10.35!3d46.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDA5JzAwLjAiTiAxMMKwMjEnMDAuMCJF!5e0!3m2!1sit!2sit!4v1600000000000!5m2!1sit!2sit',
  },
]

export default function Studi() {
  const sectionRef = useReveal()

  return (
    <section
      id="studi"
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 section-padding bg-arten-dark/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <span className="label-text">Dove Trovarci</span>
          <div className="divider mt-4 mb-6" />
          <h2 className="heading-lg text-arten-cream">
            Gli <span className="text-arten-gold italic">Studi</span>
          </h2>
          <p className="body-text max-w-xl mx-auto mt-4">
            Due sedi nel cuore della Valle Camonica, tra le Alpi bresciane.
          </p>
        </div>

        {/* Studios */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {studios.map((studio) => (
            <div
              key={studio.name}
              className="reveal border border-arten-charcoal/50 overflow-hidden group hover:border-arten-gold/30 transition-all duration-500"
            >
              {/* Map placeholder */}
              <div className="relative h-56 bg-arten-charcoal/30 overflow-hidden">
                <iframe
                  src={studio.mapEmbed}
                  className="w-full h-full border-0 grayscale opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mappa ${studio.name}`}
                />
              </div>

              <div className="p-8 lg:p-10 space-y-4">
                <span className="label-text text-[10px]">{studio.label}</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-arten-cream">{studio.name}</h3>

                <div className="flex items-start gap-2 text-arten-warm-gray text-sm">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-arten-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {studio.address}
                </div>

                <p className="body-text text-sm">{studio.description}</p>

                <p className="text-arten-gray text-sm">
                  <span className="text-arten-gold">Artisti:</span> {studio.artists}
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  <a
                    href={studio.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs py-2.5 px-5"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Indicazioni
                  </a>
                  <a
                    href={`https://www.instagram.com/${studio.instagram}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs py-2.5 px-5"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    @{studio.instagram}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
