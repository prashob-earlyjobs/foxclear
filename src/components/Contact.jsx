import { useState } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'
import { business, services } from '../data/site'

const emptyForm = {
  name: '',
  phone: '',
  email: '',
  postcode: '',
  service: '',
  message: '',
}

const fieldClass =
  'w-full border border-ink-700 bg-ink-950 px-4 py-3 text-white placeholder:text-ink-500 ' +
  'transition-colors focus:border-fox-500 focus:outline-none'

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!/^[\d\s+()-]{7,}$/.test(form.phone.trim()))
      next.phone = 'Please enter a contact number we can reach you on.'
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim()))
      next.email = 'That email address does not look right.'
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = 'A short description of the waste helps us price it accurately.'
    return next
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length) return

    setStatus('sending')
    // Wire this up to your form endpoint (Formspree, Netlify Forms, an API route, etc.).
    window.setTimeout(() => {
      setStatus('sent')
      setForm(emptyForm)
    }, 900)
  }

  const details = [
    {
      icon: 'phone',
      label: 'Call or text',
      value: business.phone,
      href: business.phoneHref,
    },
    {
      icon: 'mail',
      label: 'Email us',
      value: business.email,
      href: `mailto:${business.email}`,
    },
    {
      icon: 'pin',
      label: 'Find us',
      value: business.address.full,
      href: business.address.mapsHref,
      external: true,
    },
    { icon: 'map', label: 'Areas covered', value: business.areaServed },
  ]

  return (
    <section id="contact" className="bg-ink-900 relative py-20 lg:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">Get in touch</p>
              <h2 className="mt-2.5 text-4xl leading-[0.95] sm:text-5xl">
                Get Your Free
                <br />
                <span className="text-fox-500">No Obligation Quote</span>
              </h2>
              <span className="bg-fox-500 mt-5 block h-1 w-16" />
              <p className="text-ink-300 mt-6 leading-relaxed">
                Tell us what needs clearing and roughly where you are. We will come back
                with a fixed price — no pressure, no hidden extras and no obligation to
                book.
              </p>
            </Reveal>

            <Reveal delay={90} className="mt-9 space-y-3">
              {details.map((detail) => {
                const Wrapper = detail.href ? 'a' : 'div'
                return (
                  <Wrapper
                    key={detail.label}
                    href={detail.href}
                    target={detail.external ? '_blank' : undefined}
                    rel={detail.external ? 'noreferrer noopener' : undefined}
                    className="border-ink-800 bg-ink-950 hover:border-fox-500/60 flex items-center gap-4 border p-4 transition-colors"
                  >
                    <span className="bg-fox-500/12 text-fox-500 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                      <Icon name={detail.icon} className="h-5.5 w-5.5" />
                    </span>
                    <span>
                      <span className="text-ink-400 block text-xs font-semibold tracking-[0.2em] uppercase">
                        {detail.label}
                      </span>
                      <span className="font-display mt-0.5 block text-xl font-bold text-white">
                        {detail.value}
                      </span>
                    </span>
                  </Wrapper>
                )
              })}
            </Reveal>

            <Reveal delay={150} className="border-ink-800 bg-ink-950 mt-3 border p-6">
              <h3 className="text-lg">Opening Hours</h3>
              <dl className="mt-4 space-y-2.5 text-sm">
                {business.hours.map((slot) => (
                  <div
                    key={slot.days}
                    className="flex items-center justify-between gap-4 border-b border-white/5 pb-2.5 last:border-0 last:pb-0"
                  >
                    <dt className="text-ink-300">{slot.days}</dt>
                    <dd className="font-semibold text-white">{slot.time}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={60}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="border-ink-800 bg-ink-950 border p-7 sm:p-9"
            >
              <h3 className="text-2xl">Request a callback</h3>
              <p className="text-ink-400 mt-2 text-sm">
                Fields marked with * are required.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Your name *"
                  value={form.name}
                  onChange={update('name')}
                  error={errors.name}
                  placeholder="Jane Smith"
                  autoComplete="name"
                />
                <Field
                  id="phone"
                  label="Phone number *"
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  error={errors.phone}
                  placeholder="07000 000 000"
                  autoComplete="tel"
                />
                <Field
                  id="email"
                  label="Email address"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  error={errors.email}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                <Field
                  id="postcode"
                  label="Postcode"
                  value={form.postcode}
                  onChange={update('postcode')}
                  placeholder="KT1 2AB"
                  autoComplete="postal-code"
                />

                <div className="sm:col-span-2">
                  <label
                    htmlFor="service"
                    className="font-display mb-2 block text-sm font-bold tracking-[0.16em] text-white uppercase"
                  >
                    What do you need clearing?
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={update('service')}
                    className={fieldClass}
                  >
                    <option value="">Select a service…</option>
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Something else">Something else</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="font-display mb-2 block text-sm font-bold tracking-[0.16em] text-white uppercase"
                  >
                    Job details *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="e.g. Two bedroom flat clearance — sofa, double bed, wardrobe and around 15 bags of general waste. Ground floor, parking outside."
                    className={`${fieldClass} resize-y`}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-fox-400 mt-1.5 text-sm">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? 'Sending…' : 'Send My Enquiry'}
                {status !== 'sending' && <Icon name="arrow" className="h-4 w-4" />}
              </button>

              <p aria-live="polite" className="min-h-6">
                {status === 'sent' && (
                  <span className="text-leaf mt-4 flex items-center justify-center gap-2 text-sm font-semibold">
                    <Icon name="check" className="h-4.5 w-4.5" strokeWidth={2.6} />
                    Thanks — your enquiry is on its way. We usually reply within the hour.
                  </span>
                )}
              </p>

              <p className="text-ink-500 mt-4 text-center text-xs leading-relaxed">
                We only use your details to reply to this enquiry. We never pass them on.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ id, label, error, ...rest }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-display mb-2 block text-sm font-bold tracking-[0.16em] text-white uppercase"
      >
        {label}
      </label>
      <input
        id={id}
        className={fieldClass}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="text-fox-400 mt-1.5 text-sm">
          {error}
        </p>
      )}
    </div>
  )
}
