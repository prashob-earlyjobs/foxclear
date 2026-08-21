import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  intro,
  align = 'center',
  tone = 'dark',
}) {
  const centered = align === 'center'
  const introTone = tone === 'dark' ? 'text-ink-300' : 'text-ink-600'

  return (
    <Reveal
      className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2.5 text-4xl leading-[0.95] sm:text-5xl">
        {title} {accent && <span className="text-fox-500">{accent}</span>}
      </h2>
      <span
        className={`bg-fox-500 mt-5 block h-1 w-16 ${centered ? 'mx-auto' : ''}`}
      />
      {intro && <p className={`mt-5 text-base leading-relaxed ${introTone}`}>{intro}</p>}
    </Reveal>
  )
}
