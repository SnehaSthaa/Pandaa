import React from 'react'
import Image, { StaticImageData } from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '../ui/card'
interface MobProps {
  carouselClass: string
  star: StaticImageData
  description: string[]
}

const AboutUs = ({ carouselClass, description, star }: MobProps) => {
  return (
    <>
      <div className="mt-5 mb-15">
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card className={cn('font-sansation', carouselClass)}>
                  <CardContent>
                    <div className="flex flex-row items-center justify-center gap-3">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <Image src={star} key={index} alt="Stars" />
                      ))}
                    </div>
                    <hr className="m-5 bg-[#272727]" />
                    <div className="text-center text-lg">
                      {description.map((description, index) => (
                        <p key={index}>{description}</p>
                      ))}
                    </div>

                    <div className="mt-7 mb-10 flex items-center justify-center">
                      <p className="flex text-lg font-bold">John Doe</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="">
            <CarouselPrevious className="!top-[105%] left-[33%] !size-10 !translate-y-0 bg-[#D5D8F5]" />
            <CarouselNext className="!top-[105%] right-[33%] !size-10 !translate-y-0 bg-[#D5D8F5]" />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default AboutUs
