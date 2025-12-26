import React from 'react'
import Theme from '../theme-card'
import starWhite from '../../public/theme/white-star.svg'
import logo1 from '../../public/theme/logo1.svg'
import pinkStar from '../../public/theme/pink-star.svg'
import logo2 from '../../public/theme/logo2.svg'
import logo3 from '../../public/theme/logo3.svg'

const deskTheme = () => {
  return (
    <>
      <div className="relative flex items-center justify-center lg:px-10">
        <Theme
          cardClass="bg-[#00A06D] ml-5  text-white w-70  lg:w-90 mt-12   "
          listStar={starWhite}
          description={[
            { list: ' UI Design' },
            { list: 'UX Design' },
            { list: 'UX Consultancy' },
            { list: 'Design System' },
            { list: 'Animation' },
            { list: 'Illustration' },
          ]}
          title="Design"
          cardLogoClass="absolute -top-15 right-1/35"
          imgLogo={logo1}
          listTextClass="text-white"
          lineColor="bg-[#F7F7F7]"
        />
        <Theme
          cardClass="bg-[#FFD9F7] absolute lg:w-97 left-3/10 mt-12 text-black w-70  z-1  "
          listStar={pinkStar}
          description={[
            { list: ' Web Development' },
            { list: 'Software' },
            { list: 'Mobile Apps' },
            { list: 'Web Apps' },
            { list: 'Front-End' },
            { list: 'Back-End' },
          ]}
          title="Technology"
          cardLogoClass="absolute -top-15 right-1/35"
          imgLogo={logo2}
          listTextClass="text-black"
          lineColor="bg-[#FF2BD1]"
        />

        <Theme
          cardClass="bg-[#414BAE] mt-12 lg:w-97  w-70 ml-31  text-white  z-3   "
          listStar={starWhite}
          description={[
            { list: 'Branding' },
            { list: 'Brand Name' },
            { list: 'Brand Guidelines' },
            { list: 'Strategy' },
            { list: 'Digital Marketing' },
            { list: 'S.E.O' },
          ]}
          title="Marketing"
          cardLogoClass="absolute -top-15 right-1/35"
          imgLogo={logo3}
          listTextClass="text-white"
          lineColor="bg-[#F7F7F7]"
        />
      </div>
    </>
  )
}

export default deskTheme
