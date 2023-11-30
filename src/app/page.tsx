import './globals.css'
import About from '@/app/about'
import Navbar from '@/app/navbar'

export default function Home() {
  return (
    <section>
      <Navbar/>
      <div className='text-red-700'>
        Rebase
      </div>
    </section>
  )
}
