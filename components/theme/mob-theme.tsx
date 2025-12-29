import React from 'react'
import Theme from '../theme-card'
import starWhite from '../../public/theme/white-star.svg'
import logo1 from '../../public/theme/logo1.svg'
import pinkStar from '../../public/theme/pink-star.svg'
import logo2 from '../../public/theme/logo2.svg'
import logo3 from '../../public/theme/logo3.svg'

const mobTheme = () => {
  return (
    <>
      <Theme
        cardClass="bg-[#00A06D] text-white "
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
        cardClass="bg-[#FFD9F7] mt-12 text-black "
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
        cardClass="bg-[#414BAE] z-10 mt-12 text-white  "
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
    </>
  )
}

export default mobTheme
