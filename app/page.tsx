import Footer from '@/components/Footer'
import { Poster } from '@/components/Poster'
import './globals.css'
import homeScreen from '../public/banner/HomeScreen.png'
import mobScreen from '../public/banner/MobScreen.png'
import facebook from '../public/footer/fb.svg'
import instagram from '../public/footer/insta.svg'
import linkedin from '../public/footer/linkedin.svg'
import copyright from '../public/footer/copyright.png'
import bulb from '../public/background/bulb.svg'
import building from '../public/background/building.svg'

export default function Home() {
  return (
    <>
      <Poster
        images={[{ src: homeScreen }]}
        mobileImages={[{ src: mobScreen }]}
        build={building}
        bulb={bulb}
      />

      <Footer
        fb={facebook}
        insta={instagram}
        link={linkedin}
        copy={copyright}
      />
    </>
  )
}
