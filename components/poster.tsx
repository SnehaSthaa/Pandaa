'use client'

import * as React from 'react'
import Image from 'next/image'
import MobAboutUs from './about-us/mob-about-us'
import DeskAboutUs from './about-us/desk-about-us'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import MobNav from './nav/mobile-nav'
import DeskNav from './nav/desktop-nav'
import '../app/globals.css'
import { useIsMobile } from './hooks/use-is-mobile'
import MobileContent from './content/mobile-content'
import DesktopContent from './content/desktop-content'
import MobFeatured from './featured/mob-featured'
import DeskFeatured from './featured/desk-featured'
import DeskTheme from './theme/desk-theme'
import MobTheme from './theme/mob-theme'
import MobImage from './image/mob-image'
import DeskImage from './image/desk-image'

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import { cn } from '@/lib/utils'
import AppImage from './image'
import AppButton from './button'
interface Image {
  src: string
}
interface DeskImageProps {
  images: Image[]
  mobileImages: Image[]
  bulb: string
  build: string
}

export function Poster({ images, build, bulb, mobileImages }: DeskImageProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  const onSelectHandler = (index: number) => {
    api?.scrollTo(index)
    setCurrent(index)
  }

  const isMobile = useIsMobile()

  const text =
    'empowering businesses with fast, reliable, and future-driven IT solutions built for long-term success.'
  const scrollRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end end'],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], ['50%', '-250%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const x = useSpring(x1, {
    stiffness: 70,
    bounce: 1,
  })

  return (
    <>
      <section className="relative overflow-x-clip">
        <section className="text-primary-white relative">
          <div
            className={cn(
              `relative z-10 container py-7.5 ${isMobile ? 'm-0 p-0' : 'px-7.5'}`
            )}
          >
            <Carousel setApi={setApi}>
              <CarouselContent>
                {isMobile
                  ? mobileImages.map((img, index) => (
                      <CarouselItem key={index}>
                        <AppImage
                          src={img.src}
                          alt="Mobile Screen"
                          height={900}
                          width={900}
                        />
                      </CarouselItem>
                    ))
                  : images.map((img, index) => (
                      <CarouselItem key={index}>
                        <AppImage
                          src={img.src}
                          alt="Mobile Screen"
                          height={10000}
                          width={10000}
                        />
                      </CarouselItem>
                    ))}
                {isMobile ? (
                  <MobNav />
                ) : (
                  <DeskNav
                    className="absolute inset-x-0 flex items-center justify-between px-4 md:px-10"
                    src="/banner/paw-logo.png"
                  />
                )}

                <div className="absolute bottom-4 left-5 mb-8 flex w-full flex-col gap-3 text-center md:bottom-6 lg:bottom-10">
                  <div className="overflow-hidden">
                    <h1 className="md:slide-up text-5xl font-extrabold md:text-6xl lg:text-8xl">
                      Simple to use.
                    </h1>
                  </div>
                  <h1 className="md:slide-up text-5xl font-extrabold md:text-6xl lg:text-8xl">
                    Powerful to grow.
                  </h1>
                </div>
              </CarouselContent>
            </Carousel>

            <div className="absolute top-1/2 right-5 hidden flex-col gap-6 md:right-10 md:flex lg:right-20">
              {Array.from({ length: 5 }).map((_, index) => (
                <AppButton
                  onClick={() => {
                    onSelectHandler(index)
                  }}
                  key={index}
                  className={cn(
                    `bg-primary-white rounded-full md:h-4 md:w-4 lg:h-[1.3rem] lg:w-[1.3rem] ${current === index ? 'outline-accent-yellow outline-4' : ''}`
                  )}
                >
                  .
                </AppButton>
              ))}
            </div>
          </div>
        </section>
        <div className="relative container px-7.5">
          <div className="absolute -top-90 -right-60 md:-top-106 md:-right-[6%]">
            <AppImage
              src="/background/green-star.png"
              alt="decorative green shape"
              height={500}
              width={600}
            />
          </div>
        </div>

        <section ref={scrollRef} className="relative md:h-[150vh]">
          <div className="container mt-16 flex flex-col justify-center px-5 md:sticky md:top-1/5 md:mt-20 md:flex md:items-center">
            <div className="text-text-dark container overflow-visible overflow-x-clip">
              {isMobile ? (
                <>
                  <h1 className="text-center text-2xl font-bold">
                    empowering businesses with fast, reliable, and future-driven
                    IT solutions built for long-term success.
                  </h1>
                  <p className="font-sansation mt-8 text-center text-lg text-black sm:mx-8 md:text-lg lg:text-xl">
                    We build smart, scalable digital products that solve real
                    problems and provide <br /> actual outcomes. Simple to use,
                    powerful underneath — that’s the PANDAA <br /> approach.
                  </p>
                </>
              ) : (
                <>
                  <motion.h1
                    style={{ x, scale }}
                    viewport={{ once: true, amount: 0 }}
                    className="text-6xl font-bold tracking-wider whitespace-nowrap will-change-transform lg:text-7xl xl:text-8xl"
                  >
                    {text.split(' ').map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ y: -100 }}
                        whileInView={{ y: 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 70,
                          damping: 10,
                          delay: index * 0.06,
                        }}
                        className="mr-3 inline-block"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.h1>
                  <motion.p
                    initial={{ x: -700, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeIn' }}
                    className="font-sansation mt-8 text-center text-lg sm:mx-8 md:text-lg lg:text-xl"
                  >
                    We build smart, scalable digital products that solve real
                    problems and provide <br /> actual outcomes. Simple to use,
                    powerful underneath — that’s the PANDAA <br /> approach.
                  </motion.p>
                </>
              )}
            </div>
          </div>
        </section>

        <section>
          {isMobile ? (
            <MobileContent
              image={[{ src: '/content-banner/first-image.png' }]}
            />
          ) : (
            <DesktopContent
              bgImage="/background/paw.png"
              image2="/content-banner/second-image.png"
              image1="/content-banner/first-image.png"
            />
          )}
          <div className="py-30">
            <div className="relative md:hidden">
              <AppImage
                src={bulb}
                alt="bulb-icon"
                className={'absolute -top-19 right-3 w-30'}
                width={20}
                height={20}
              />
              <AppImage
                src={build}
                alt="building-icon"
                className={'absolute top-13 -left-3 w-30'}
                width={20}
                height={20}
              />
            </div>
            <div className="relative container px-5 md:px-32.75">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="hidden md:block">
                  <AppImage
                    src={bulb}
                    alt="bulb-icon"
                    className={
                      'absolute -top-19 right-16 w-40 lg:-top-23 lg:right-19 lg:w-50 xl:right-23'
                    }
                    width={20}
                    height={20}
                  />
                  <AppImage
                    src={build}
                    alt="building-icon"
                    className={`absolute -bottom-15 left-20 w-40 lg:left-20 lg:w-55 xl:left-45`}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="text-text-dark text-center leading-7 md:leading-12 lg:leading-18">
                  <span className="text-2xl font-bold md:text-4xl lg:text-5xl xl:text-7xl">
                    We turn big challenges into
                  </span>
                  <br />
                  <span className="font-sansation text-xl italic md:text-3xl lg:text-4xl xl:text-6xl">
                    sleek, high-performance digital products{' '}
                  </span>
                  <br />
                  <span className="text-2xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
                    that deliver real results.
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </section>

      <section className="my-10">
        <div className="bg-text-dark container min-h-400 py-5">
          <div className="relative flex flex-col">
            <div className="text-primary-white mt-3 flex justify-center gap-4 py-5 md:mt-15 md:gap-7">
              <span className="text-4xl font-bold md:text-6xl lg:text-8xl">
                Featured
              </span>
              <span className="font-sansation text-4xl md:text-6xl lg:text-8xl">
                works
              </span>
            </div>
            <div className="absolute top-15 right-1/8 md:top-30 md:right-40 lg:top-36 lg:right-1/10 xl:right-1/5">
              <AppImage
                src="/featured/lines.png"
                alt="Underlines"
                height={200}
                width={200}
              />
            </div>
          </div>

          {isMobile ? <MobFeatured /> : <DeskFeatured />}
        </div>
      </section>
      <section>
        <div className="container px-7.5 md:px-15 lg:px-25 xl:px-64">
          <div>
            <div className="relative mb-25 flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-4">
              <div className="relative flex">
                <AppImage
                  src="/theme/pawlogo.svg"
                  alt="Theme pawLogo"
                  className="absolute bottom-1/2 w-13"
                  height={5}
                  width={10}
                />
                <AppImage
                  src="/theme/ellipse.png"
                  alt="Ellipse Theme"
                  width={180}
                  height={100}
                />
                <p className="font-sansation absolute top-1/4 left-1/4 text-3xl italic lg:top-1/5 lg:left-1/5 lg:text-4xl">
                  call us
                </p>
              </div>
              <p className="text-4xl font-bold md:text-5xl lg:text-6xl">
                if you need to
              </p>
            </div>
          </div>
          {isMobile ? <MobTheme /> : <DeskTheme />}
        </div>
      </section>
      <section>
        <div className="container md:px-7 md:py-30">
          <div className="relative z-0 h-full w-full">
            {isMobile ? (
              <AppImage
                src="/background/mob-pink.png"
                alt="Pink Vector"
                className="absolute -top-8 right-0"
                height={550}
                width={320}
              />
            ) : (
              <AppImage
                src="/background/pink.png"
                alt="Pink Vector"
                className="absolute -top-[30%] left-[10%] lg:-top-[25%] lg:left-[33%] xl:left-[35%]"
                height={800}
                width={650}
              />
            )}

            <div className="relative top-1/20 z-10 px-7.5 py-20 md:top-3 md:py-5">
              <div className="flex items-center justify-center text-center">
                <span className="text-3xl font-bold md:text-6xl lg:w-180">
                  Team members who makes us
                  <span className="font-open-sans font-normal"> stronger</span>
                  <AppImage
                    src="/featured/lines.png"
                    alt="Lines"
                    className="ml-[50%] md:ml-120"
                    width={150}
                    height={20}
                  />
                </span>
              </div>
              {isMobile ? (
                <MobImage
                  image={[
                    {
                      img: '/image/girl.jpg',
                      name: 'kristy ABC hjsducs',
                      role: 'CTO',
                    },
                    {
                      img: '/image/business.png',
                      name: 'kristy ABC',
                    },
                    {
                      img: '/image/man-sitting-on-a-roof.png',
                      name: 'kristy ABC hjsducs',
                    },
                    {
                      img: '/image/calm-and-confident.png',
                      name: 'kristy ABC',
                    },
                  ]}
                />
              ) : (
                <DeskImage
                  image={[
                    { img: '/image/girl.jpg' },
                    { img: '/image/business.png' },
                    { img: '/image/man-sitting-on-a-roof.png' },
                    { img: '/image/calm-and-confident.png' },
                    { img: '/image/middleimg.png' },
                    { img: '/image/red-tshirt-girl.jpg' },
                    { img: '/image/girl-smiling.png' },
                  ]}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-10">
          <div className="relative items-center text-center">
            <div className="absolute bottom-[10%] lg:bottom-[1%]">
              <AppImage
                src="/background/paw2full.png"
                alt="full paw"
                className="h-40 w-40 md:h-60 md:w-60 lg:h-85 lg:w-70 xl:h-90 xl:w-86"
              />
            </div>
            <div className="mx-auto px-7.5 pb-5 md:py-10 md:leading-8 lg:leading-10">
              <span className="text-3xl font-bold md:text-5xl lg:text-6xl xl:text-7xl">
                Look at what people have to say
              </span>

              <span className="font-sansation relative ml-2 text-3xl italic md:ml-4 md:text-5xl lg:text-6xl xl:text-7xl">
                about us
                <div className="absolute top-0 left-[95%] hidden h-full w-25 md:block">
                  <AppImage
                    src="/about-us/curve-line.png"
                    alt="curveLine"
                    className="h-full w-full"
                  />
                </div>
              </span>
            </div>
          </div>
          <div className="container px-7.5">
            {isMobile ? (
              <MobAboutUs
                star="/about-us/star.svg"
                carouselClass="bg-secondary-lightblue rounded-lg"
                description={[
                  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                ]}
              />
            ) : (
              <DeskAboutUs
                star="/about-us/star.svg"
                arrow="/about-us/arrow.svg"
                description={[
                  {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ecommodo consequat. Duis aute irure dolor in reprehenderit ',
                    name: 'Marry Welsom',
                  },
                  {
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                    name: 'John Doe',
                  },
                  {
                    text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
                    name: 'Jane Smith',
                  },
                ]}
              />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
