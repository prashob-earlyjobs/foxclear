import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { process } from '../data/site'

export default function Process() {
  return (
    <section className="bg-ink-900 border-y border-white/5 py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="Cleared In"
          accent="Four Simple Steps"
          intro="No skip permits, no waiting around and no heavy lifting for you. Here is exactly what happens from the moment you get in touch."
        />

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, index) => (
            <Reveal
              key={item.step}
              as="li"
              delay={index * 80}
              className="group border-ink-800 bg-ink-950 hover:border-fox-500/50 relative border p-7 transition-colors duration-300"
            >
              <span
                className="font-display text-ink-800 group-hover:text-fox-500/25 absolute top-4 right-5 text-6xl leading-none font-bold transition-colors duration-300"
                aria-hidden="true"
              >
                {item.step}
              </span>
              <span className="bg-fox-500 block h-1 w-10" aria-hidden="true" />
              <h3 className="relative mt-6 text-xl leading-tight">{item.title}</h3>
              <p className="text-ink-300 mt-3 text-[0.95rem] leading-relaxed">
                {item.blurb}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
