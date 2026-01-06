'use client'
import React from 'react'
import Theme from '../theme-card'
import { themes, ThemeData } from '../../app/mock-data/theme'

const MobTheme = () => {
  return (
    <>
      {themes.map((theme: ThemeData, index: number) => (
        <Theme
          key={index}
          cardClass={theme.cardClass}
          listStar={theme.listStar}
          description={theme.description}
          title={theme.title}
          cardLogoClass={theme.cardLogoClass}
          imgLogo={theme.imgLogo}
          listTextClass={theme.listTextClass}
          lineColor={theme.lineColor}
        />
      ))}
    </>
  )
}

export default MobTheme
