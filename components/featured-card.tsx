import React from 'react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { StaticImageData } from 'next/image'
import { cn } from '@/lib/utils'
import { useIsMobile } from './hooks/use-is-mobile'
interface FeaturedProps {
  title: string
  description: string
  img: StaticImageData
  listClassName?: string
  buttonBg: string
  titleButtonClass: string
  cardImageClass?: string
  message?: string
  messageClass?: string
}

const FeaturedCard = ({
  title,
  titleButtonClass,
  description,
  img,
  message,
  buttonBg,
  cardImageClass,
  listClassName,
  messageClass,
}: FeaturedProps) => {
  const isMobile = useIsMobile()

  return (
    <div className={cn(isMobile ? 'm-5' : 'm-10')}>
      <Card
        className={cn(isMobile ? 'px-5 py-5' : 'min-h-162 w-140 px-8 lg:w-200')}
      >
        <CardHeader className={cn(isMobile ? '!m-0 !p-0' : 'mt-5 !mb-0')}>
          <CardTitle className="flex flex-row justify-between">
            <div
              className={cn(
                `font-bold ${isMobile ? 'text-2xl' : 'text-3xl lg:text-6xl'}`
              )}
            >
              {title}
            </div>
            <div
              className={cn(
                `flex flex-row ${isMobile ? 'gap-2' : 'gap-5 lg:gap-10'}`
              )}
            >
              <button className={cn(titleButtonClass)}>ui/ux design</button>
              <button className={cn(titleButtonClass)}>development</button>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="!m-0 !p-0">
          <div className="flex justify-center">
            <Image src={img} alt="Image1" className={cn(cardImageClass)} />
          </div>
        </CardContent>

        <CardDescription
          className={`text-black ${isMobile ? 'text-md leading-6' : 'text-lg leading-8'}`}
        >
          <div>{description}</div>
          <div className={cn(`${isMobile ? 'mt-7' : 'mt-10'}`, listClassName)}>
            <h1 className={`font-medium ${isMobile ? '' : 'text-2xl'}`}>
              What can our app do?
            </h1>
            <ul className={`mt-2 list-disc pl-5 ${isMobile ? '' : 'text-md'}`}>
              <li>Instant venue booking</li>
              <li>Unified management dashboard</li>
              <li>Secure digital payments</li>
              <li>Real-time notifications</li>
            </ul>
          </div>
        </CardDescription>

        <CardFooter className="my-2 text-white">
          <button
            className={cn(
              isMobile
                ? 'absolute left-10 flex rounded-sm px-2 py-1 text-center'
                : 'mt-20 rounded-full px-3 py-1',
              buttonBg
            )}
          >
            explore
          </button>
        </CardFooter>
      </Card>
      <div className={cn(`rounded-full text-white`, messageClass)}>
        {message}
      </div>
    </div>
  )
}

export default FeaturedCard
