import { useEffect, useState } from 'react'
import Icon from './Icon'
import logo from '../assets/logo-wordmark.png'
import { business, navLinks } from '../data/site'

const sectionIds = navLinks.map((link) => link.href.slice(1))

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (inView) setActive(inView.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.6] },
    )

    sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/95 border-b border-white/10 shadow-lg shadow-black/40 backdrop-blur'
          : 'bg-gradient-to-b from-black/85 to-transparent'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6 lg:h-[5.5rem]">
        <a href="#home" className="shrink-0" aria-label={`${business.fullName} — home`}>
          <img
            src={logo}
            alt={business.fullName}
            className="h-10 w-auto sm:h-11 lg:h-12"
            width="706"
            height="184"
          />
        </a>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="font-display flex items-center gap-7 text-[0.95rem] font-semibold tracking-[0.14em] uppercase">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative block py-2 transition-colors ${
                      isActive ? 'text-fox-500' : 'text-ink-100 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`bg-fox-500 absolute -bottom-0.5 left-0 h-0.5 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="hover:text-fox-400 hidden items-center gap-2.5 text-white transition-colors md:flex"
          >
            <span className="bg-fox-500/15 text-fox-500 flex h-9 w-9 items-center justify-center rounded-full">
              <Icon name="phone" className="h-4.5 w-4.5" />
            </span>
            <span className="font-display text-lg font-bold tracking-wide">
              {business.phone}
            </span>
          </a>

          <a href="#contact" className="btn-primary hidden py-3 text-base lg:inline-flex">
            Get a Free Quote
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="text-white xl:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Icon name="menu" className="h-8 w-8" />
          </button>
        </div>
      </div>

      <div
        className={`bg-ink-950/80 fixed inset-0 z-50 overflow-hidden backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`bg-ink-900 ml-auto flex h-full w-[min(22rem,88vw)] flex-col border-l border-white/10 transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
            <img src={logo} alt="" className="h-9 w-auto" />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="hover:text-fox-500 text-white transition-colors"
              aria-label="Close menu"
            >
              <Icon name="close" className="h-7 w-7" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-6">
            <ul className="font-display space-y-1 text-2xl font-bold tracking-wide uppercase">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-fox-500 block border-b border-white/5 py-3 text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3 border-t border-white/10 p-6">
            <a
              href={business.phoneHref}
              className="btn-outline w-full"
              onClick={() => setMenuOpen(false)}
            >
              <Icon name="phone" className="h-5 w-5" />
              {business.phone}
            </a>
            <a
              href="#contact"
              className="btn-primary w-full"
              onClick={() => setMenuOpen(false)}
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
