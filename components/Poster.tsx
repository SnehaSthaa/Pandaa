'use client'

import Image from 'next/image'
import * as React from 'react'
import dot from '../public/Ellipse 1226.png'
import greenV from '../public/Vector (2).png'
import paw from '../public/Vector 213.png'


import '../app/globals.css'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { cn } from '@/lib/utils'


interface ClassNameProps {
  className?: string
}

export function Poster({ className }: ClassNameProps) {
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
    // gsap.from(contentRef.current, { opacity: 0, x: 100, duration: 1 })
    // gsap.from(firstRef.current, { opacity: 0, x: 60, y: 50, duration: 1 })
    // gsap.from(secondRef.current, { opacity: 0, x: 40, duration: 1 })
    // gsap.from(thirdRef.current, { opacity: 0, x: 70, duration: 1 })
    // gsap.from(fourthRef.current, { opacity: 0, y: 300, x: -80, duration: 1 })
  })

  return (
    <>
      <div className={cn("relative container overflow-visible", className)}>
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="relative">
                  <Image
                    className="z-30 w-full rounded-md"
                    src="/HomeScreen.png"
                    alt="Poster Image"
                    width={300}
                    height={300}
                    priority
                  />
                  <div className="absolute top-0 right-8 left-0 flex items-center justify-between pt-4 md:right-10 lg:right-14">
                    <div>
                      <Image
                        src={paw}
                        alt="Paw logo"
                        className="relative w-10 md:w-20 lg:w-30"
                      />
                      <p className="absolute top-8 left-5 text-sm font-bold text-white md:top-14 md:left-10 lg:top-20 lg:left-15 lg:text-2xl">
                        Work
                      </p>
                    </div>

                    <h2 className="text-sm font-extrabold text-white md:text-4xl lg:text-6xl">
                      PANDAA
                    </h2>
                    <button className="hover: m-0 rounded-sm border border-white p-0.5 text-[#F7F7F7] hover:cursor-pointer hover:bg-[#bcbcbc] md:p-2 lg:m-2 lg:p-3">
                      Contact us
                    </button>
                  </div>
                  <div className="absolute top-1/2 right-5 flex flex-col gap-2 md:right-1 md:gap-3 lg:right-20 lg:gap-5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Image
                        key={index}
                        src={dot}
                        alt="dot"
                        className="w-auto md:h-[13px] md:w-[13px] lg:h-[15px] lg:w-[15px]"
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-2 flex w-full flex-col text-center text-white sm:text-3xl md:bottom-6 lg:bottom-10">
                    <div className="overflow-hidden">
                      <h1 className="slide-up text-3xl font-extrabold md:text-6xl lg:text-8xl">
                        Simple to use.
                      </h1>
                    </div>
                    <h1 className="slide-up mt-2 text-3xl font-extrabold md:mt-4 md:text-6xl lg:mt-6 lg:text-8xl">
                      Powerful to grow.
                    </h1>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Image
          src={greenV}
          alt="greenV"
          className="absolute right-0 -bottom-20 h-auto w-[150px] sm:w-[240px] md:top-100 md:w-[300px] lg:top-130 lg:w-[350px]"
        />
      </div>
      <div className="container">
        <div>
          <h1
            ref={heading1}
            className="mx-auto mt-0 flex max-w-[1000px] items-center justify-center text-center text-2xl font-bold text-black md:mt-10 md:text-4xl lg:mt-12 lg:text-5xl"
          >
            empowering businesses with fast, reliable, and future-driven IT
            solutions built for long-term success.
          </h1>
          <p
            ref={heading2}
            className="mt-7 flex flex-row items-center justify-center text-center text-lg text-black lg:mt-10"
          >
            We build smart, scalable digital products that solve real problems
            and provide <br /> actual outcomes. Simple to use, powerful
            underneath — that’s the PANDAA approach.
          </p>
        </div>
      </div>
      {/* <div className="relative bottom-10 h-[800px]">
        <Image
          ref={contentRef}
          src={paw2}
          alt="paw"
          style={{
            width: 'auto',
            height: '500px',
          }}
        />

        <div
          className={cn(
            'container !p-[80px] md:overflow-x-scroll lg:overflow-x-visible',
            className
          )}
        >
          <Content
            ref={firstRef}
            imageClassName="top-[20px] left-[30px] z-20"
            textClassName="bg-[#414BAE] left-[250px] z-30  top-[380px]"
            alt="First card"
            src={first}
            toottipsMessage="i can make futsal booking easy"
          />

          <Content
            ref={secondRef}
            imageClassName="-top-[20px] left-[270px]"
            textClassName=" bg-[#00A06D] z-30 left-[500px] top-[150px]"
            alt="Second Card"
            src={second}
            toottipsMessage="work with us for easy service"
          />
          <Content
            ref={thirdRef}
            imageClassName="-top-[70px] left-[600px] z-20"
            textClassName="bg-[#FF2BD1] z-30  left-[920px] bottom-[50px] "
            alt="Second Card"
            src={third}
            toottipsMessage="work with us for easy service"
          />
          <Content
            ref={fourthRef}
            imageClassName="top-[80px] left-[700px] z-10"
            alt="Second Card"
            src={fourth}
          />
        </div>
      </div> */}
    </>
  )
}
