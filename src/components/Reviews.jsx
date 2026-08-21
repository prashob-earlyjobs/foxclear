import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { reviews } from '../data/site'

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Icon
          key={index}
          name="star"
          className={index < rating ? 'text-fox-500 h-4.5 w-4.5' : 'text-ink-700 h-4.5 w-4.5'}
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-ink-900 border-y border-white/5 py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Reviews"
          title="What Our"
          accent="Customers Say"
          intro="Most of our work comes from recommendations and repeat customers. Here is what people say after we have been out."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal
              key={review.name}
              as="figure"
              delay={index * 60}
              className="card-dark relative flex flex-col p-7"
            >
              <Icon
                name="quote"
                className="text-fox-500/12 absolute top-5 right-5 h-12 w-12"
              />
              <Stars rating={review.rating} />
              <blockquote className="text-ink-200 mt-4 flex-1 text-[0.95rem] leading-relaxed">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <span className="bg-fox-500/15 text-fox-500 font-display flex h-11 w-11 items-center justify-center rounded-full text-lg font-bold">
                  {review.name.charAt(0)}
                </span>
                <span>
                  <span className="font-display block text-lg leading-none font-bold text-white uppercase">
                    {review.name}
                  </span>
                  <span className="text-ink-400 mt-1 block text-xs tracking-wider uppercase">
                    {review.location}
                  </span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 text-center">
          <p className="text-ink-300 text-sm">
            Rated <span className="font-display text-fox-500 text-lg font-bold">5.0</span>{' '}
            from 48 customer reviews
          </p>
        </Reveal>
      </div>
    </section>
  )
}
