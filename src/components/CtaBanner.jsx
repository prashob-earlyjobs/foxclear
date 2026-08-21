import Icon from './Icon'
import Reveal from './Reveal'
import vanStreet from '../assets/van-street.jpg'
import { business } from '../data/site'

export default function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={vanStreet}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full scale-105 object-cover blur-[3px]"
      />
      <div
        className="absolute inset-0 -z-10 bg-black/82 [background-image:radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_75%)]"
        aria-hidden="true"
      />

      <div className="container-page py-20 text-center lg:py-24">
        <Reveal>
          <p className="eyebrow">{business.tagline}</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl leading-[0.95] sm:text-6xl">
            No Job Too Big.
            <br />
            <span className="text-fox-500">No Job Too Small.</span> We Clear It All!
          </h2>
          <p className="text-ink-200 mx-auto mt-6 max-w-xl leading-relaxed">
            Same day and next day slots available across {business.areaServed}. Give us
            a call and we will get you booked in.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href={business.phoneHref} className="btn-primary">
              <Icon name="phone" className="h-5 w-5" />
              {business.phone}
            </a>
            <a href="#contact" className="btn-outline">
              Request a Callback
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
