import { Poster } from '../components/poster'
import './globals.css'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Poster
        images={[{ src: '/banner/HomeScreen.png' }]}
        mobileImages={[{ src: '/banner/MobScreen.png' }]}
        build="/background/building.svg"
        bulb="/background/bulb.svg"
      />

      <Footer
        icons={[
          { img: '/footer/fb.svg' },
          { img: '/footer/linkedin.svg' },
          { img: '/footer/insta.svg' },
        ]}
        copy="/footer/copyright.png"
      />
    </>
  )
}
