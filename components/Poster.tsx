'use client'

import * as React from 'react'
import Image from 'next/image'
import paw from '../public/banner/paw-logo.png'

import greenV from '../public/background/green-star.png'
import paw2 from '../public/background/paw.png'
// import first from '../public/content banner/first-image.png'
import MobNav from '../components/nav/mobile-nav'
import DeskNav from '../components/nav/desktop-nav'

// import second from '../public/content banner/second-image.png'
import mobScreen from '../public/banner/MobScreen.png'

import '../app/globals.css'
import { useIsMobile } from '../components/hooks/use-is-mobile'

// import Content from '../components/first'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { cn } from '@/lib/utils'

export function Poster() {
  const [isBorder, setIsBorder] = React.useState<number>(0)

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
          <Carousel>
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
                        src="/HomeScreen.png"
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
                        `${isMobile ? 'hidden' : 'absolute top-1/2 right-5 flex flex-col gap-6 md:right-10 lg:right-20'}`
                      )}
                    >
                      {Array.from({ length: 5 }).map((_, index) => (
                        <button
                          onClick={() => setIsBorder(index)}
                          key={index}
                          className={cn(
                            `rounded-full bg-white md:h-[1rem] md:w-[1rem] lg:h-[1.3rem] lg:w-[1.3rem] ${isBorder === index ? 'outline-4 outline-amber-300' : ''}`
                          )}
                        />
                      ))}
                    </div>

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

      <section>
        <div className="relative">
          <Image src={paw2} alt="Paw Background" />

          {/* <div className="container2 absolute top-[10rem]">
            <Content
              imageClassName="top-[1.25rem] left-[1.875rem] z-20"
              textClassName="bg-[#414BAE] left-[15.625rem] z-30 top-[23.75rem]"
              alt="First card"
              src={first}
              toottipsMessage="i can make futsal booking easy"
            />

            <Content
              imageClassName="-top-[1.25rem] left-[16.875rem] "
              textClassName="bg-[#00A06D] z-30 left-[31.25rem] top-[9.375rem]"
              alt="Second Card"
              src={second}
              toottipsMessage="work with us for easy service"
            />

            <Content
              imageClassName="-top-[4.375rem] left-[37.5rem] z-20"
              textClassName="bg-[#FF2BD1] z-30 left-[57.5rem] bottom-[3.125rem]"
              alt="Third Card"
              src={first}
              toottipsMessage="work with us for easy service"
            />

            <Content
              imageClassName="top-[5rem] left-[43.75rem] z-10"
              alt="Fourth Card"
              src={second}
            />
          </div> */}
        </div>
      </section>
    </>
  )
}
