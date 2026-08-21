import Icon from './Icon'
import { business, stats } from '../data/site'

export default function StatsBar() {
  return (
    <section className="bg-fox-500 text-white">
      <div className="container-page flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-8">
        <div className="flex items-center gap-4">
          <span className="bg-ink-950 flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
            <Icon name="phone" className="h-6 w-6" />
          </span>
          <div>
            <p className="font-display text-2xl leading-none font-bold uppercase">
              Need a clear out?
            </p>
            <p className="mt-1.5 text-sm text-white/85">
              Get in touch today for a free, no obligation quote.
            </p>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="font-display block text-4xl leading-none font-bold">
                  {stat.value}
                </span>
                <span className="mt-1.5 block text-[0.7rem] font-semibold tracking-[0.16em] text-white/85 uppercase">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <a href={business.phoneHref} className="btn-dark shrink-0 whitespace-nowrap">
          Get Your Free Quote
          <Icon name="arrow" className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
