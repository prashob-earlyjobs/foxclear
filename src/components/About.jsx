import Icon from './Icon'
import Reveal from './Reveal'
import teamUniform from '../assets/team-uniform.jpg'
import { promises, serviceAreas } from '../data/site'

export default function About() {
  return (
    <section id="about" className="bg-ink-50 py-20 text-ink-800 lg:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <Reveal className="relative">
            <div className="border-fox-500 absolute -top-5 -left-5 hidden h-32 w-32 border-t-4 border-l-4 lg:block" />
            <img
              src={teamUniform}
              alt="A uniformed Fox Clear operative in branded workwear"
              className="relative w-full object-cover shadow-2xl shadow-black/25"
              loading="lazy"
            />
            <div className="bg-fox-500 absolute -right-4 -bottom-6 px-6 py-4 text-white shadow-xl sm:-right-6">
              <p className="font-display text-4xl leading-none font-bold">10+</p>
              <p className="mt-1 text-xs font-semibold tracking-[0.2em] uppercase">
                Years experience
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">About us</p>
              <h2 className="text-ink-900 mt-2.5 text-4xl leading-[0.95] sm:text-5xl">
                A Family Business
                <br />
                <span className="text-fox-500">You Can Trust</span>
              </h2>
              <span className="bg-fox-500 mt-5 block h-1 w-16" />

              <p className="text-ink-600 mt-6 leading-relaxed">
                Fox Clear Waste Clearance is a local, family run business built on hard
                work, honesty and reliability. We take pride in every job, no matter the
                size — from a single sofa on a Tuesday morning to a full four bedroom
                house clearance.
              </p>
              <p className="text-ink-600 mt-4 leading-relaxed">
                Our mission is simple: clear your waste, protect the environment and make
                your life easier. You get a fixed price up front, a uniformed team that
                turns up when we say we will, and a licensed paper trail proving your
                waste was disposed of properly.
              </p>
            </Reveal>

            <Reveal delay={100} className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {serviceAreas.map((item) => (
                <p
                  key={item}
                  className="text-ink-700 flex items-start gap-2.5 text-[0.95rem] font-medium"
                >
                  <Icon
                    name="check"
                    className="text-leaf mt-0.5 h-4.5 w-4.5 shrink-0"
                    strokeWidth={2.6}
                  />
                  {item}
                </p>
              ))}
            </Reveal>

            <Reveal delay={160} className="mt-9">
              <a href="#contact" className="btn-dark">
                Learn More About Us
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>

        <div className="bg-ink-800 mt-16 grid gap-px overflow-hidden sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {promises.map((promise, index) => (
            <Reveal
              key={promise.title}
              delay={index * 70}
              className="bg-ink-900 hover:bg-ink-800 px-7 py-9 text-center transition-colors duration-300"
            >
              <span className="bg-fox-500/12 text-fox-500 mx-auto flex h-14 w-14 items-center justify-center rounded-full">
                <Icon name={promise.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl leading-tight">{promise.title}</h3>
              <p className="text-ink-300 mt-2.5 text-sm leading-relaxed">
                {promise.blurb}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
