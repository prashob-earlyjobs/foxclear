import Icon from './Icon'
import { business } from '../data/site'

export default function StickyCallBar() {
  return (
    <div className="bg-ink-950/95 fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 backdrop-blur md:hidden">
      <a
        href={business.phoneHref}
        className="font-display flex items-center justify-center gap-2 py-4 text-base font-bold tracking-wider text-white uppercase"
      >
        <Icon name="phone" className="text-fox-500 h-5 w-5" />
        Call Us
      </a>
      <a
        href="#contact"
        className="bg-fox-500 font-display flex items-center justify-center gap-2 py-4 text-base font-bold tracking-wider text-white uppercase"
      >
        <Icon name="calendar" className="h-5 w-5" />
        Free Quote
      </a>
    </div>
  )
}
