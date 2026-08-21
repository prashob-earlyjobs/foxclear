import Icon from './Icon'
import heroCollection from '../assets/hero-collection.jpg'
import heroCollectionTall from '../assets/hero-collection-tall.jpg'
import { business } from '../data/site'

const highlights = ['Fully Licensed & Insured', 'Eco Friendly', 'Competitive Prices']

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink-950">
      <div className="absolute inset-0 -z-20">
        <picture className="block h-full w-full">
          <source media="(max-width: 767px)" srcSet={heroCollectionTall} />
          <img
            src={heroCollection}
            alt="A Fox Clear operative carrying an old armchair to the branded clearance van outside a house"
            className="h-full w-full object-cover object-[22%_50%] md:object-[50%_35%]"
            fetchPriority="high"
          />
        </picture>
      </div>

      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black from-15% via-black/88 via-45% to-black/25 lg:via-black/70 lg:to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black to-transparent"
        aria-hidden="true"
      />

      <div className="container-page relative flex min-h-[38rem] flex-col justify-center pt-32 pb-20 sm:min-h-[42rem] lg:min-h-[46rem] lg:pt-36">
        <div className="max-w-2xl">
          <p className="reveal is-visible eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="bg-fox-500 h-px w-10 shrink-0" />
            {business.areaServed}
          </p>

          <h1
            className="reveal is-visible mt-4 text-[3.2rem] leading-[0.88] sm:text-7xl lg:text-8xl"
            style={{ animationDelay: '80ms' }}
          >
            Fast. Reliable.
            <br />
            <span className="text-fox-500">Responsible.</span>
          </h1>

          <p
            className="reveal is-visible text-ink-200 mt-6 max-w-xl text-lg leading-relaxed"
            style={{ animationDelay: '160ms' }}
          >
            Professional waste clearance services for homes, businesses and sites.
            We clear it all — so you don’t have to.
          </p>

          <div
            className="reveal is-visible mt-9 flex flex-wrap gap-4"
            style={{ animationDelay: '240ms' }}
          >
            <a href="#contact" className="btn-primary">
              <Icon name="calendar" className="h-5 w-5" />
              Book a Collection
            </a>
            <a href="#services" className="btn-outline">
              <Icon name="play" className="h-4 w-4" />
              Our Services
            </a>
          </div>

          <ul
            className="reveal is-visible text-ink-100 mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium"
            style={{ animationDelay: '320ms' }}
          >
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <Icon name="check" className="text-leaf h-4.5 w-4.5" strokeWidth={2.6} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href="#services"
        className="text-ink-400 absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs tracking-[0.3em] uppercase transition-colors hover:text-white lg:flex"
      >
        Scroll
        <Icon name="chevron" className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}
