import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Image from 'next/image'

import { useIsMobile } from '../hooks/use-is-mobile'
import { cn } from '@/lib/utils'
import paw2 from '../../public/background/paw.png'
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
        <div className="container overflow-x-hidden !px-0">
          <div className="rotate-21.79 absolute -top-16 -left-7 h-[10rem] w-[10rem]">
            <Image src={paw2} alt="Paw Background" fill />
          </div>
        </div>
        <div
          className={cn(
            `relative container ${isMobile ? '!m-0 !px-[20px]' : ''}`
          )}
        >
          <Carousel>
            <CarouselContent>
              {image.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center">
                    <h1 className="bg-accent-pink text-primary-white relative top-12 z-10 w-[15rem] rounded-sm py-1 text-center">
                      work with us for easy service
                    </h1>

                    <div className="relative h-[420px] w-full">
                      <Image src={img.src} alt="First Image" fill />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="relative flex w-full flex-row justify-center gap-2">
              {Array.from({ length: 3 }).map((_, index) => (
                <button
                  key={index}
                  className="h-[0.8rem] w-[0.8rem] rounded-full bg-gray-200"
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </>
  )
}
export default MobileContent
