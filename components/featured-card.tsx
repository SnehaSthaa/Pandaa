import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useIsMobile } from './hooks/use-is-mobile'
import AppImage from './image'
import AppButton from './button'
interface FeaturedProps {
  title: string
  description: string
  img: string
  listClassName?: string
  listItems?: string[]
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
  listItems,
  listClassName,
  messageClass,
}: FeaturedProps) => {
  const isMobile = useIsMobile()

  return (
    <div className="m-5 md:m-10">
      <Card className="min-h-200 rounded-3xl px-5 py-5 md:w-140 md:px-8 lg:w-200">
        <CardHeader className="m-0 p-0 md:mt-6 md:mb-0">
          <CardTitle className="flex flex-row justify-between">
            <div className="text-2xl font-bold md:text-3xl lg:text-6xl">
              {title}
            </div>
            <div className="flex flex-row gap-2 md:gap-5 lg:gap-10">
              <AppButton className={titleButtonClass}>ui/ux design</AppButton>
              <AppButton className={cn(titleButtonClass)}>
                development
              </AppButton>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="m-0 p-0">
          <div className="flex justify-center">
            <AppImage
              src={img}
              alt="Image1"
              width={340}
              height={540}
              className={cardImageClass}
            />
          </div>
        </CardContent>

        <CardDescription className="font-sansation text-md text-text-dark leading-6 md:text-lg md:leading-9 lg:px-12 lg:text-xl">
          <div>{description}</div>
          <div className={cn('mt-7 md:mt-12', listClassName)}>
            <h1 className="font-medium md:text-2xl">What can our app do?</h1>
            <ul className="md:text-md mt-2 list-disc pl-5">
              {listItems?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </CardDescription>

        <CardFooter className="text-primary-white my-2">
          <AppButton
            className={cn(
              isMobile
                ? 'absolute left-10 flex rounded-sm px-2 py-1 text-center'
                : 'mt-20 rounded-full px-3 py-1',
              buttonBg
            )}
          >
            explore
          </AppButton>
        </CardFooter>
      </Card>
      <div className={cn(`text-primary-white rounded-full`, messageClass)}>
        {message}
      </div>
    </div>
  )
}

export default FeaturedCard
