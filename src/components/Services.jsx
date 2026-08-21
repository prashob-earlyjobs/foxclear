import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { services } from '../data/site'

export default function Services() {
  return (
    <section id="services" className="bg-ink-950 relative py-20 lg:py-28">
      <div
        className="from-fox-500/6 pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b to-transparent"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="What we do"
          title="Our"
          accent="Services"
          intro="One team for every kind of clear out. Whatever is filling up your home, garden or business, we will load it, take it away and recycle as much of it as we can."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              as="article"
              delay={index * 70}
              className="card-dark group relative overflow-hidden p-7"
            >
              <span
                className="bg-fox-500 absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-400 group-hover:scale-x-100"
                aria-hidden="true"
              />

              <span
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-sm transition-colors duration-300 ${
                  service.icon === 'recycle'
                    ? 'bg-leaf/12 text-leaf'
                    : 'bg-fox-500/12 text-fox-500 group-hover:bg-fox-500 group-hover:text-white'
                }`}
              >
                <Icon name={service.icon} className="h-7 w-7" />
              </span>

              <h3 className="text-2xl">{service.title}</h3>
              <p className="text-fox-400 mt-2 text-sm font-semibold">{service.blurb}</p>
              <p className="text-ink-300 mt-3.5 text-[0.95rem] leading-relaxed">
                {service.detail}
              </p>

              <a
                href="#contact"
                className="font-display text-fox-500 mt-6 inline-flex items-center gap-2 text-base font-bold tracking-wider uppercase transition-colors hover:text-white"
              >
                Get a price
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
