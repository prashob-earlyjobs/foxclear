import { useEffect, useState } from 'react'
import Icon from './Icon'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`bg-fox-500 hover:bg-fox-400 fixed right-5 bottom-20 z-40 flex h-12 w-12 items-center justify-center text-white shadow-lg transition-all duration-300 md:bottom-6 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <Icon name="chevron" className="h-6 w-6 rotate-180" strokeWidth={2.4} />
    </button>
  )
}
