import './globals.css'
import Navbar from '@/app/components/navbar'
import Faq from '@/app/components/faq'
import Landing from '@/app/components/landing'
import About from '@/app/components/about'
import Timeline from './components/timeline'
import Footer from '@/app/components/footer'
import Tracks from './components/tracks'
import Prizes from './components/prizes'
import Sponsors from './components/sponsors'

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Timeline />
      <Tracks />
      <Prizes />
      <Sponsors />
      <Faq />
      <Footer />
    </>
  )
}
