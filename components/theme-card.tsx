import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image, { StaticImageData } from 'next/image'
import { cn } from '@/lib/utils'
import { useIsMobile } from './hooks/use-is-mobile'
interface ListProps {
  list: string
}
interface ThemeProps {
  title: string
  description: ListProps[]
  imgLogo: StaticImageData
  cardLogoClass: string
  listStar: StaticImageData
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
  const isMobile = useIsMobile()
  return (
    <>
      <Card className={cn(cardClass)}>
        <CardHeader>
          <CardTitle>
            <div className="relative flex">
              <p
                className={cn(
                  `font-bold ${isMobile ? 'mb-4 text-2xl' : 'mb-5 md:text-2xl'}`
                )}
              >
                {' '}
                {title}
              </p>

              <div
                className={cn('absolute -bottom-2 mx-2 h-1 w-7/8', lineColor)}
              ></div>
              <Image
                className={cn(cardLogoClass)}
                src={imgLogo}
                alt="CardLogo"
              />
            </div>
          </CardTitle>
          <CardDescription className="font-sansation mt-5">
            <div>
              <ul className={cn(`${isMobile ? 'space-y-2' : 'space-y-2'}`)}>
                {description.map((list, index) => (
                  <li
                    className={cn(
                      `flex ${isMobile ? 'flex flex-row gap-2' : ''}`,
                      listTextClass
                    )}
                    key={index}
                  >
                    <Image src={listStar} alt="star" width={15} height={15} />
                    <span
                      className={cn(
                        ` ${isMobile ? 'text-lg' : 'text-lg'}`,
                        listTextClass
                      )}
                    >
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
