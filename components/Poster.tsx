'use client'

import * as React from 'react'
import Image from 'next/image'
import paw from '../public/banner/paw-logo.png'

import greenV from '../public/background/green-star.png'

// import first from '../public/content banner/first-image.png'
import MobNav from './nav/mobile-nav'
import DeskNav from './nav/desktop-nav'

// import second from '../public/content banner/second-image.png'
import mobScreen from '../public/banner/MobScreen.png'
import homeScreen from '../public/banner/HomeScreen.png'

import '../app/globals.css'
import { useIsMobile } from '../components/hooks/use-is-mobile'
import MobileContent from './content/mobile-content'

// import Content from '../components/first'
import DesktopContent from './content/desktop-content'

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { cn } from '@/lib/utils'

export function Poster() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  const onSelectHandler = (index: number) => {
    api?.scrollTo(index)
    setCurrent(index)
  }

  const isMobile = useIsMobile()
  const heading1 = React.useRef(null)
  const heading2 = React.useRef(null)
  useGSAP(() => {
    gsap.from(heading1.current, {
      xPercent: 700,
      ease: 'power1.in',
      delay: 0.5,
      duration: 1,
    })
    gsap.from(heading2.current, {
      xPercent: -700,
      ease: 'power1.in',
      delay: 0.5,
      duration: 1,
    })
  })

  return (
    <>
      <section>
        <div
          className={cn(
            `relative container py-[1.875rem] ${isMobile ? '!m-0 !p-0' : 'overflow-visible'}`
          )}
        >
          <Carousel setApi={setApi}>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    {isMobile ? (
                      <Image
                        src={mobScreen}
                        alt="Mobile Screen"
                        className="w-full"
                      />
                    ) : (
                      <Image
                        className="z-30 w-full rounded-md bg-contain"
                        src={homeScreen}
                        alt="Poster Image"
                        width={300}
                        height={300}
                        priority
                      />
                    )}
                    {isMobile ? (
                      <MobNav />
                    ) : (
                      <DeskNav
                        className="absolute inset-x-0 top-0 flex items-center justify-between px-4 md:px-10"
                        src={paw}
                      />
                    )}

                    <div
                      className={cn(
                        `absolute bottom-4 flex w-full flex-col text-white ${isMobile ? 'absolute left-5 mb-8 gap-3' : 'text-center md:bottom-6 lg:bottom-10'}`
                      )}
                    >
                      <div className="overflow-hidden">
                        <h1
                          className={cn(
                            `slide-up font-extrabold ${isMobile ? 'text-5xl' : 'text-xl md:text-6xl lg:text-8xl'}`
                          )}
                        >
                          Simple to use.
                        </h1>
                      </div>
                      <h1
                        className={cn(
                          `slide-up font-extrabold ${isMobile ? 'text-5xl' : 'text-xl md:text-6xl lg:text-8xl'}`
                        )}
                      >
                        Powerful to grow.
                      </h1>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div
            className={cn(
              `${isMobile ? 'hidden' : 'absolute top-1/2 right-5 flex flex-col gap-6 md:right-10 lg:right-20'}`
            )}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <button
                onClick={() => {
                  onSelectHandler(index)
                }}
                key={index}
                className={cn(
                  `rounded-full bg-white md:h-[1rem] md:w-[1rem] lg:h-[1.3rem] lg:w-[1.3rem] ${current === index ? 'outline-4 outline-amber-300' : ''}`
                )}
              />
            ))}
          </div>

          <div className={`absolute right-0 -bottom-50`}>
            <Image
              src={greenV}
              alt="decorative green shape"
              className={cn(
                `${isMobile ? 'overflow-hidden object-contain' : 'h-auto w-full'}`
              )}
              priority
            />
          </div>
        </div>
      </section>
      <section>
        <div className="relative z-10 mt-16 text-center">
          <h1
            ref={heading1}
            className={cn(
              `font-bold text-black ${isMobile ? 'mx-6 text-2xl' : 'md:text-4xl lg:text-5xl'}`
            )}
          >
            empowering businesses with fast, reliable, and future-driven IT
            solutions built for long-term success.
          </h1>
          <p
            ref={heading2}
            className={cn(
              `mt-8 text-black ${isMobile ? 'mx-8 text-lg' : 'md:text-xl lg:text-2xl'}`
            )}
          >
            We build smart, scalable digital products that solve real problems
            and provide <br /> actual outcomes. Simple to use, powerful
            underneath — that’s the PANDAA approach.
          </p>
        </div>
      </section>

      <section>{isMobile ? <MobileContent /> : <DesktopContent />}</section>
    </>
  )
}
