import About from './components/About'
import BackToTop from './components/BackToTop'
import Contact from './components/Contact'
import CtaBanner from './components/CtaBanner'
import Faqs from './components/Faqs'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Process from './components/Process'
import Reviews from './components/Reviews'
import Services from './components/Services'
import StatsBar from './components/StatsBar'
import StickyCallBar from './components/StickyCallBar'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="bg-fox-500 sr-only px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70]"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" className="pb-14 md:pb-0">
        <Hero />
        <Services />
        <About />
        <StatsBar />
        <Process />
        <Gallery />
        <CtaBanner />
        <Reviews />
        <Faqs />
        <Contact />
      </main>

      <Footer />
      <StickyCallBar />
      <BackToTop />
    </>
  )
}
