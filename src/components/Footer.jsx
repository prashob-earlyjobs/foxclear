import Icon from './Icon'
import logo from '../assets/logo-wordmark.png'
import { business, navLinks, services } from '../data/site'

const socials = [
  { name: 'Facebook', icon: 'facebook', href: business.facebook },
  { name: 'Instagram', icon: 'instagram', href: business.instagram },
]

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-white/8">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12">
        <div>
          <img src={logo} alt={business.fullName} className="h-12 w-auto" />
          <p className="text-ink-400 mt-5 max-w-xs text-sm leading-relaxed">
            A local, family run waste clearance business. Fully licensed, fully insured
            and recycling up to 90% of everything we collect.
          </p>

          <div className="mt-6 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${business.name} on ${social.name}`}
                className="border-ink-800 text-ink-300 hover:border-fox-500 hover:bg-fox-500 flex h-11 w-11 items-center justify-center border transition-colors hover:text-white"
              >
                <Icon name={social.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-lg">Quick Links</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-ink-400 hover:text-fox-500 inline-flex items-center gap-2 transition-colors"
                >
                  <span className="bg-fox-500/60 h-px w-3" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-lg">Services</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.map((service) => (
              <li key={service.title}>
                <a
                  href="#services"
                  className="text-ink-400 hover:text-fox-500 inline-flex items-center gap-2 transition-colors"
                >
                  <span className="bg-fox-500/60 h-px w-3" />
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg">Get In Touch</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Icon name="phone" className="text-fox-500 mt-0.5 h-4.5 w-4.5 shrink-0" />
              <a href={business.phoneHref} className="text-ink-300 hover:text-white">
                {business.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="mail" className="text-fox-500 mt-0.5 h-4.5 w-4.5 shrink-0" />
              <a
                href={`mailto:${business.email}`}
                className="text-ink-300 break-all hover:text-white"
              >
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="pin" className="text-fox-500 mt-0.5 h-4.5 w-4.5 shrink-0" />
              <address className="text-ink-300 not-italic">
                <a
                  href={business.address.mapsHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white"
                >
                  {business.address.street}
                  <br />
                  {business.address.town} {business.address.postcode}
                </a>
              </address>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="map" className="text-fox-500 mt-0.5 h-4.5 w-4.5 shrink-0" />
              <span className="text-ink-300">Covering {business.areaServed}</span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="leaf" className="text-leaf mt-0.5 h-4.5 w-4.5 shrink-0" />
              <span className="text-ink-300">
                Licensed waste carrier — waste transfer note supplied on every job.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-page text-ink-500 flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {business.fullName}. All rights reserved.
          </p>
          <p className="font-display text-fox-500 text-sm tracking-[0.2em] uppercase">
            {business.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
