import React, { useState } from 'react'
import Theme from '../theme-card'
import starWhite from '../../public/theme/white-star.svg'
import pinkStar from '../../public/theme/pink-star.svg'
import logo1 from '../../public/theme/logo1.svg'
import logo2 from '../../public/theme/logo2.svg'
import logo3 from '../../public/theme/logo3.svg'

const DeskTheme = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const themes = [
    {
      cardClass:
        'bg-[#00A06D] ml-5 translate-x-[20%] lg:translate-x-[30%] text-white xl:w-97 w-65 lg:w-75 mt-12',
      listStar: starWhite,
      description: [
        { list: ' UI Design' },
        { list: 'UX Design' },
        { list: 'UX Consultancy' },
        { list: 'Design System' },
        { list: 'Animation' },
        { list: 'Illustration' },
      ],
      title: 'Design',
      cardLogoClass: 'absolute -top-15 left-2/3 ',
      imgLogo: logo1,
      listTextClass: 'text-white',
      lineColor: 'bg-[#F7F7F7]',
    },
    {
      cardClass:
        'bg-[#FFD9F7]  lg:w-75 -translate-x-[12%] lg:-translate-x-[4%] mt-12 text-black w-65  xl:w-97 top-0 z-1',
      listStar: pinkStar,
      description: [
        { list: ' Web Development' },
        { list: 'Software' },
        { list: 'Mobile Apps' },
        { list: 'Web Apps' },
        { list: 'Front-End' },
        { list: 'Back-End' },
      ],
      title: 'Technology',
      cardLogoClass: 'absolute -top-15 left-2/3 ',
      imgLogo: logo2,
      listTextClass: 'text-black',
      lineColor: 'bg-[#FF2BD1]',
    },
    {
      cardClass:
        'bg-[#414BAE] -translate-x-[40%] lg:-translate-x-[35%] mt-12 lg:w-75 w-65 text-white z-3  xl:w-97',
      listStar: starWhite,
      description: [
        { list: 'Branding' },
        { list: 'Brand Name' },
        { list: 'Brand Guidelines' },
        { list: 'Strategy' },
        { list: 'Digital Marketing' },
        { list: 'S.E.O' },
      ],
      title: 'Marketing',
      cardLogoClass: 'absolute -top-15 left-2/3  ',
      imgLogo: logo3,
      listTextClass: 'text-white',
      lineColor: 'bg-[#F7F7F7]',
    },
  ]
  const getTransform = (index: number) => {
    if (hoveredIndex === null) return ''

    if (hoveredIndex === 0) {
      if (index === 0) return '-translate-x-[10%] lg:-translate-x-[5%]'
      if (index === 1) return 'translate-x-[30%] lg:translate-x-[35%] '
      if (index === 2) return 'z-30'
    }

    if (hoveredIndex === 1) {
      if (index === 0)
        return '-translate-x-[60%] lg:-translate-x-[72%] xl:-translate-x-[88%]'
      if (index === 1)
        return ' z-2 -translate-x-[25%] lg:-translate-x-[35%] xl:-translate-x-[50%] '
      if (index === 2)
        return 'translate-x-[10%] lg:translate-x-[3%] xl:-translate-x-[10%] '
    }

    if (hoveredIndex === 2) {
      if (index === 0) return '-translate-x-[20%]  '
      if (index === 1) return ' -translate-x-[40%] xl:-translate-x-[45%] '
      if (index === 2) return ' -translate-x-[2%]'
    }

    return ''
  }

  return (
    <div className="relative flex items-center justify-center lg:px-10">
      {themes.map((theme, index) => {
        let zIndex = ''
        if (index == 2) zIndex = 'z-60'
        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`transition-all duration-200 ${zIndex} ${getTransform(index)}`}
          >
            <Theme
              cardClass={theme.cardClass}
              listStar={theme.listStar}
              description={theme.description}
              title={theme.title}
              cardLogoClass={theme.cardLogoClass}
              imgLogo={theme.imgLogo}
              listTextClass={theme.listTextClass}
              lineColor={theme.lineColor}
            />
          </div>
        )
      })}
    </div>
  )
}

export default DeskTheme
