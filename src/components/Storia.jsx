import useReveal from './useReveal'
import studioImg from '../assets/foto/tattoo-patchwork-arm-flash.webp'

export default function Storia() {
  const sectionRef = useReveal()

  return (
    <section
      id="storia"
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 section-padding"
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="reveal text-center mb-16">
          <span className="label-text">La Nostra Storia</span>
          <div className="divider mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="space-y-6 reveal">
            <h2 className="heading-lg text-arten-cream">
              Dove l'arte incontra<br />
              <span className="text-arten-gold italic">la pelle</span>
            </h2>

            <p className="body-text">
              Il nome <strong className="text-arten-cream font-medium">ARTEN</strong> viene dal nonno di Marco Leoni.
              Le sue parole — <em className="text-arten-cream italic">"hai delle mani d'oro, prenditi cura di loro
              perché un giorno diverranno il tuo lavoro"</em> — sono diventate la ragione di un percorso lungo oltre 17 anni
              nel mondo del tatuaggio.
            </p>

            <p className="body-text">
              ARTEN nasce nel cuore della Valle Camonica, provincia di Brescia, circondato dalle Alpi.
              Quello che era un istinto è diventato un mestiere, poi una bottega, poi un luogo dove l'arte,
              l'ascolto e l'intimità si incontrano sulla pelle.
            </p>

            <p className="body-text">
              Marco ha aperto la strada: anni di sperimentazione, tecnica, umiltà. Al suo fianco si è unita
              la sorella Alessia, artista prima ancora che tatuatrice — pittrice, illustratrice, ricercatrice
              tra numerologia sacra e astrattismo. Oggi lo studio si è evoluto con la sede di Sonico e la
              collaborazione con Caterina Grola.
            </p>

            <p className="body-text text-arten-cream/80 italic font-serif text-xl mt-8">
              "Un luogo che supera il concetto di negozio di tatuaggi."
            </p>
          </div>

          {/* Image */}
          <div className="reveal relative">
            <div className="relative overflow-hidden">
              <img
                src={studioImg}
                alt="Interno dello studio ARTEN con tatuaggi in stile patchwork"
                className="w-full h-[500px] sm:h-[600px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-arten-black/50 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-arten-gold/20" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border border-arten-gold/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
