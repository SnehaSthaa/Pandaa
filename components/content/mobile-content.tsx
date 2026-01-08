import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import { useIsMobile } from '../hooks/use-is-mobile'
import { cn } from '@/lib/utils'

import AppImage from '../image'
import AppButton from '../button'
interface MobContentProps {
  src: string
}
interface MobContentImage {
  image: MobContentProps[]
}

const MobileContent = ({ image }: MobContentImage) => {
  const isMobile = useIsMobile()
  return (
    <>
      <div className="relative">
        <div className="container overflow-x-hidden">
          <div className="rotate-21.79 absolute -top-16 -left-7 h-40 w-40">
            <AppImage
              src={'/background/paw.png'}
              alt="Paw Background"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className={cn(`relative container ${isMobile ? 'm-0 px-5' : ''}`)}>
          <Carousel>
            <CarouselContent>
              {image.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center">
                    <h1 className="bg-accent-pink text-primary-white relative top-12 z-10 w-60 rounded-sm py-1 text-center">
                      work with us for easy service
                    </h1>

                    <div className="relative h-105 w-full">
                      <AppImage
                        src={img.src}
                        alt="First Image"
                        className="h-full w-full"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="relative flex w-full flex-row justify-center gap-2">
              {Array.from({ length: 3 }).map((_, index) => (
                <AppButton
                  key={index}
                  className="bg-accent-lavender h-[0.8rem] w-[0.8rem] rounded-full"
                ></AppButton>
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </>
  )
}
export default MobileContent
