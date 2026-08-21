import { useCallback, useEffect, useState } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import vanHero from '../assets/van-hero.jpg'
import vanSide from '../assets/van-side.jpg'
import vanRear from '../assets/van-rear.jpg'
import vanAngle from '../assets/van-angle.jpg'
import vanStreet from '../assets/van-street.jpg'
import vanFront from '../assets/van-front.jpg'
import kitHoodie from '../assets/kit-hoodie.jpg'
import teamUniform from '../assets/team-uniform.jpg'
import heroTruck from '../assets/hero-truck.jpg'

const images = [
  { src: vanHero, alt: 'Fox Clear branded Ford Transit clearance van' },
  { src: heroTruck, alt: 'Fox Clear operative beside a branded clearance lorry' },
  { src: vanFront, alt: 'Front of the Fox Clear clearance van' },
  { src: vanSide, alt: 'Side profile of the Fox Clear clearance van' },
  { src: vanStreet, alt: 'Fox Clear van on site at dusk during a clearance' },
  { src: vanRear, alt: 'Rear of the Fox Clear van listing clearance services' },
  {
    src: teamUniform,
    alt: 'Fox Clear operative in branded polo workwear',
    pos: 'object-top',
  },
  { src: vanAngle, alt: 'Three quarter view of the Fox Clear clearance van' },
  { src: kitHoodie, alt: 'Fox Clear branded hoodie and cap' },
]

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null)

  const close = useCallback(() => setOpenIndex(null), [])
  const step = useCallback(
    (direction) =>
      setOpenIndex((current) =>
        current === null ? current : (current + direction + images.length) % images.length,
      ),
    [],
  )

  useEffect(() => {
    if (openIndex === null) return

    const onKey = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [openIndex, close, step])

  return (
    <section id="gallery" className="bg-ink-950 py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our work"
          title="On The Road &"
          accent="On The Job"
          intro="Clean vans, branded kit and a team you will recognise the moment we pull up. Here is a look at the Fox Clear fleet and crew."
        />

        <div className="mt-14 grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[14rem] lg:grid-cols-3 lg:auto-rows-[16rem]">
          {images.map((image, index) => (
            <Reveal key={image.src} delay={(index % 3) * 70}>
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className="group focus-visible:outline-fox-400 relative block h-full w-full overflow-hidden bg-ink-900"
                aria-label={`View image: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    image.pos ?? ''
                  }`}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />
                <span className="bg-fox-500 absolute right-3 bottom-3 flex h-9 w-9 translate-y-2 items-center justify-center text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Icon name="arrow" className="h-4 w-4 -rotate-45" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="hover:text-fox-500 absolute top-5 right-5 text-white transition-colors"
            aria-label="Close image viewer"
          >
            <Icon name="close" className="h-8 w-8" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              step(-1)
            }}
            className="hover:bg-fox-500 absolute left-3 flex h-12 w-12 items-center justify-center bg-white/10 text-white transition-colors sm:left-8"
            aria-label="Previous image"
          >
            <Icon name="chevron" className="h-6 w-6 rotate-90" />
          </button>

          <figure onClick={(event) => event.stopPropagation()} className="max-w-5xl">
            <img
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              className="max-h-[78vh] w-auto object-contain"
            />
            <figcaption className="text-ink-300 mt-4 text-center text-sm">
              {images[openIndex].alt}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              step(1)
            }}
            className="hover:bg-fox-500 absolute right-3 flex h-12 w-12 items-center justify-center bg-white/10 text-white transition-colors sm:right-8"
            aria-label="Next image"
          >
            <Icon name="chevron" className="h-6 w-6 -rotate-90" />
          </button>
        </div>
      )}
    </section>
  )
}
