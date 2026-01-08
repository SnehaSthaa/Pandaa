import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { cn } from '@/lib/utils'
import AppImage from './image'

interface ListProps {
  list: string
}
interface ThemeProps {
  title: string
  description: ListProps[]
  imgLogo: string
  cardLogoClass: string
  listStar: string
  cardClass: string
  listTextClass: string
  lineColor: string
}

const ThemeCard = ({
  cardLogoClass,
  lineColor,
  imgLogo,
  title,
  description,
  listStar,
  cardClass,
  listTextClass,
}: ThemeProps) => {
  return (
    <>
      <Card className={cardClass}>
        <CardHeader>
          <CardTitle>
            <div className="relative flex">
              <p className={cn('mb-4 text-2xl font-bold')}> {title}</p>

              <div
                className={cn('absolute -bottom-2 mx-2 h-1 w-7/8', lineColor)}
              ></div>

              <AppImage
                className={cardLogoClass}
                src={imgLogo}
                alt="CardLogo"
                height={100}
                width={100}
              />
            </div>
          </CardTitle>
          <CardDescription className="font-sansation mt-5">
            <div>
              <ul className="space-y-2">
                {description.map((list, index) => (
                  <li
                    className={cn('flex flex-row gap-2 md:flex', listTextClass)}
                    key={index}
                  >
                    <AppImage
                      src={listStar}
                      alt="star"
                      width={15}
                      height={15}
                    />
                    <span className={cn('text-lg', listTextClass)}>
                      {list.list}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  )
}

export default ThemeCard
