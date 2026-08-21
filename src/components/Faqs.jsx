import { useState } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'
import { business, faqs } from '../data/site'

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faqs" className="bg-ink-950 py-20 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Good to know</p>
          <h2 className="mt-2.5 text-4xl leading-[0.95] sm:text-5xl">
            Frequently Asked
            <br />
            <span className="text-fox-500">Questions</span>
          </h2>
          <span className="bg-fox-500 mt-5 block h-1 w-16" />
          <p className="text-ink-300 mt-6 leading-relaxed">
            Everything customers usually want to know before booking a clearance. If your
            question is not here, just pick up the phone — we are happy to talk it
            through.
          </p>

          <div className="border-ink-800 bg-ink-900 mt-8 border p-7">
            <h3 className="text-xl">Still not sure?</h3>
            <p className="text-ink-300 mt-2.5 text-[0.95rem] leading-relaxed">
              Send us a couple of photos on WhatsApp and we will price it up for you,
              usually within the hour.
            </p>
            <a href={business.phoneHref} className="btn-primary mt-5 w-full">
              <Icon name="phone" className="h-5 w-5" />
              {business.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="divide-y divide-white/8 border-y border-white/8">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="group flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span
                      className={`font-display text-xl leading-snug font-bold tracking-tight uppercase transition-colors ${
                        isOpen ? 'text-fox-500' : 'group-hover:text-fox-400 text-white'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? 'bg-fox-500 border-fox-500 rotate-180 text-white'
                          : 'border-ink-700 text-ink-300 group-hover:border-fox-500 group-hover:text-fox-500'
                      }`}
                    >
                      <Icon name="chevron" className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-ink-300 pr-14 pb-6 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
