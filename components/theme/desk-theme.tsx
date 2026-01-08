import { themes } from '../../app/mock-data/theme'
import Theme from '../theme-card'
import { useState } from 'react'

const DeskTheme = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const hoverTransforms = [
    [
      '-translate-x-[10%] lg:-translate-x-[5%]',
      'translate-x-[30%] lg:translate-x-[35%]',
      'z-30',
    ],
    [
      '-translate-x-[60%] lg:-translate-x-[72%] xl:-translate-x-[88%]',
      'z-2 -translate-x-[25%] lg:-translate-x-[35%] xl:-translate-x-[50%]',
      'translate-x-[10%] lg:translate-x-[3%] xl:-translate-x-[10%]',
    ],
    [
      '-translate-x-[20%]',
      '-translate-x-[40%] xl:-translate-x-[45%]',
      '-translate-x-[2%]',
    ],
  ]

  const getTransform = (index: number) =>
    hoveredIndex !== null ? hoverTransforms[hoveredIndex][index] : ''

  return (
    <div className="relative flex items-center justify-center lg:px-10">
      {themes.map((theme, index) => {
        const zIndex = index === 2 ? 'z-60' : ''
        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`transition-all duration-200 ${zIndex} ${getTransform(
              index
            )}`}
          >
            <Theme
              cardClass={theme.desktopCardClass ?? ''}
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
