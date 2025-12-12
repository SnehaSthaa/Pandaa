import Footer from '@/components/Footer'
import { Poster } from '@/components/Poster'
import './globals.css'

export default function Home() {
  return (
    <>
      <Poster className="absolute top-[130px] left-[50px]" />

      <Footer />
    </>
  )
}
