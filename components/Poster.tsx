'use client'

import * as React from 'react'
import Image, { StaticImageData } from 'next/image'
import paw from '../public/banner/paw-logo.png'
import MobAboutUs from './aboutUs/mob-about-us'
import DeskAboutUs from './aboutUs/desk-about-us'
import curveLine from '../public/aboutUs/curveLine.png'
import arrow from '../public/aboutUs/arrow.svg'

import greenV from '../public/background/green-star.png'

// import first from '../public/content banner/first-image.png'
import MobNav from './nav/mobile-nav'
import DeskNav from './nav/desktop-nav'

// import second from '../public/content banner/second-image.png'
import first from '../public/content banner/first-image.png'
import second from '../public/content banner/second-image.png'
import paw2 from '../public/background/paw.png'

import '../app/globals.css'
import { useIsMobile } from '../components/hooks/use-is-mobile'
import MobileContent from './content/mobile-content'
import ratingStar from '../public/aboutUs/Star 3.svg'

// import Content from '../components/first'
import DesktopContent from './content/desktop-content'
import image1 from '../public/content banner/first-image.png'
import lines from '../public/featured/lines.png'
import MobFeatured from './featured/mob-featured'
import DeskFeatured from './featured/desk-featured'
import DeskTheme from './theme/desk-theme'
import MobTheme from './theme/mob-theme'
import ellipse from '../public/theme/ellipse.png'
import pawLogo from '../public/theme/pawlogo.svg'
import mobPink from '../public/background/mobPink.png'
import MobImage from './image/mob-image'
import DeskImage from './image/desk-image'
import img1 from '../public/image/girl.jpg'
import img2 from '../public/image/Business.png'
import img3 from '../public/image/Man sitting on a roof.png'
import img4 from '../public/image/Calm and confident (1).png'
import deskPink from '../public/background/pink.png'
import img5 from '../public/image/middleimg.png'
import img6 from '../public/image/red-tshirt-girl.jpg'
import img7 from '../public/image/girl-smiling.png'
import fullpaw from '../public/background/paw2full.png'
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { cn } from '@/lib/utils'
interface Image {
  src: StaticImageData
}
interface DeskImageProps {
  images: Image[]
  mobileImages: Image[]
  bulb: StaticImageData
  build: StaticImageData
}

export function Poster({ images, build, bulb, mobileImages }: DeskImageProps) {
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
      <section className="relative overflow-x-hidden !px-0">
        <section className="relative">
          <div
            className={cn(
              `relative z-10 container py-[1.875rem] ${isMobile ? '!m-0 !p-0' : ''}`
            )}
          >
            <Carousel setApi={setApi}>
              <CarouselContent>
                {isMobile
                  ? mobileImages.map((img, index) => (
                      <CarouselItem key={index}>
                        <div className="relative">
                          <Image
                            src={img.src}
                            alt="Mobile Screen"
                            className="w-full"
                          />
                        </div>
                      </CarouselItem>
                    ))
                  : images.map((img, index) => (
                      <CarouselItem key={index}>
                        <div className="relative">
                          <Image
                            src={img.src}
                            alt="Mobile Screen"
                            className="w-full"
                          />
                        </div>
                      </CarouselItem>
                    ))}
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
          </div>
        </section>
        <div className="relative container">
          <div
            className={cn(
              `absolute ${isMobile ? '-top-90 -right-60' : '-top-106 -right-[6%]'}`
            )}
          >
            <Image
              src={greenV}
              alt="decorative green shape"
              className={cn(`${isMobile ? '' : ''}`)}
              priority
            />
          </div>
        </div>

        <section className="z-10 container">
          <div className="z-10 mt-16 text-center">
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
                `font-sansation mt-8 text-black ${isMobile ? 'mx-8 text-lg' : 'md:text-lg lg:text-xl'}`
              )}
            >
              We build smart, scalable digital products that solve real problems
              and provide <br /> actual outcomes. Simple to use, powerful
              underneath — that’s the PANDAA <br /> approach.
            </p>
          </div>
        </section>

        <section>
          {isMobile ? (
            <MobileContent image={[{ src: image1 }]} />
          ) : (
            <DesktopContent bgImage={paw2} image2={second} image1={first} />
          )}
          <div className="py-30">
            <div className={cn(` ${isMobile ? 'relative' : 'hidden'}`)}>
              <Image
                src={bulb}
                alt="bulb-icon"
                className={cn(`absolute -top-19 right-3 w-30`)}
              />
              <Image
                src={build}
                alt="building-icon"
                className={cn(`absolute top-13 -left-3 w-30`)}
              />
            </div>
            <div
              className={cn(
                `relative ${isMobile ? 'container !px-[20px]' : 'container !px-[131px]'}`
              )}
            >
              <div className={cn(`${isMobile ? 'hidden' : ''}`)}>
                <Image
                  src={bulb}
                  alt="bulb-icon"
                  className={cn(
                    `absolute -top-19 right-16 w-40 lg:-top-23 lg:right-19 lg:w-50 xl:right-23`
                  )}
                />
                <Image
                  src={build}
                  alt="building-icon"
                  className={cn(
                    `absolute -bottom-15 left-20 w-40 lg:left-20 lg:w-55 xl:left-45`
                  )}
                />
              </div>
              <div
                className={cn(
                  `text-center ${isMobile ? '' : 'leading-12 lg:leading-18'}`
                )}
              >
                <span
                  className={cn(
                    `font-bold ${isMobile ? 'text-2xl' : 'text-4xl lg:text-5xl xl:text-7xl'}`
                  )}
                >
                  We turn big challenges into
                </span>
                <br />
                <span
                  className={cn(
                    `font-sansation italic ${isMobile ? 'text-xl' : 'text-3xl lg:text-4xl xl:text-6xl'}`
                  )}
                >
                  sleek, high-performance digital products{' '}
                </span>
                <br />
                <span
                  className={cn(
                    `font-bold ${isMobile ? 'text-2xl' : 'text-4xl lg:text-5xl xl:text-6xl'}`
                  )}
                >
                  that deliver real results.
                </span>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="my-10">
        <div className="container min-h-400 bg-[#3D3D3D] !px-[0px] py-5">
          <div className="relative flex flex-col">
            <div
              className={cn(
                `flex justify-center text-white ${isMobile ? 'mt-3 gap-4 py-5' : 'mt-15 gap-7'}`
              )}
            >
              <span
                className={cn(
                  `font-bold ${isMobile ? 'text-4xl' : 'text-6xl lg:text-8xl'}`
                )}
              >
                Featured
              </span>
              <span
                className={cn(
                  `font-sansation ${isMobile ? 'text-4xl' : 'text-6xl lg:text-8xl'}`
                )}
              >
                {' '}
                works
              </span>
            </div>
            <Image
              src={lines}
              alt="Underlines"
              className={cn(
                `absolute ${isMobile ? 'top-16 right-15' : 'top-25 right-40 w-70 lg:top-30 lg:right-76 lg:w-100'} `
              )}
            />
          </div>

          {isMobile ? <MobFeatured /> : <DeskFeatured />}
        </div>
      </section>
      <section>
        <div
          className={cn(
            `container ${isMobile ? '' : '!px-15 lg:!px-25 xl:!px-64'}`
          )}
        >
          <div>
            <div
              className={cn(
                `relative flex ${isMobile ? 'mb-25 flex-col items-center gap-2' : 'flex-row justify-center gap-4'}`
              )}
            >
              <div className="relative flex">
                <Image
                  src={pawLogo}
                  alt="Theme pawLogo"
                  className="absolute bottom-1/2 w-13"
                />
                <Image src={ellipse} alt="Ellipse Theme" />
                <p
                  className={cn(
                    `font-sansation absolute top-1/4 left-1/4 italic ${isMobile ? 'text-3xl' : 'text-3xl lg:top-1/5 lg:left-1/5 lg:text-4xl'}`
                  )}
                >
                  call us
                </p>
              </div>
              <p
                className={cn(
                  `font-bold ${isMobile ? 'text-4xl' : 'text-5xl lg:text-6xl'}`
                )}
              >
                if you need to
              </p>
            </div>
          </div>
          <div className={cn(`${isMobile ? '' : ''}`)}>
            {isMobile ? <MobTheme /> : <DeskTheme />}
          </div>
        </div>
      </section>
      <section>
        <div className={cn(`${isMobile ? '' : 'container py-30'}`)}>
          <div
            className={cn(
              `relative ${isMobile ? 'z-0 h-full w-full overflow-hidden' : ''}`
            )}
          >
            {isMobile ? (
              <Image
                src={mobPink}
                alt="Pink Vector"
                className="absolute -top-13 right-0"
              />
            ) : (
              <Image
                src={deskPink}
                alt="Pink Vector"
                className="absolute -top-[30%] lg:-top-[35%] lg:left-[18%] xl:left-[35%]"
              />
            )}

            <div
              className={cn(
                `relative z-10 ${isMobile ? 'top-1/20 container py-20' : ''}`
              )}
            >
              <div
                className={cn(
                  `flex items-center justify-center text-center ${isMobile ? '' : ''}`
                )}
              >
                <span
                  className={cn(
                    `font-bold ${isMobile ? 'text-3xl' : 'text-6xl lg:w-180'}`
                  )}
                >
                  Team members who makes us
                  <span
                    className={cn(
                      `font-openSans !font-normal ${isMobile ? '' : ''}`
                    )}
                  >
                    {' '}
                    stronger
                  </span>
                  <Image
                    src={lines}
                    alt="Lines"
                    className={cn(`${isMobile ? 'ml-[50%]' : 'ml-120'}`)}
                  />
                </span>
              </div>
              {isMobile ? (
                <MobImage
                  image={[
                    { img: img1 },
                    { img: img2 },
                    { img: img3 },
                    { img: img4 },
                  ]}
                />
              ) : (
                <DeskImage
                  image={[
                    { img: img1 },
                    { img: img2 },
                    { img: img3 },
                    { img: img4 },
                    { img: img5 },
                    { img: img6 },
                    { img: img7 },
                  ]}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container !px-0 py-10">
          <div
            className={cn(
              'relative items-center text-center',
              isMobile ? '' : ''
            )}
          >
            <div className={cn(`absolute bottom-[10%] lg:bottom-[1%]`)}>
              <Image src={fullpaw} alt="full paw" className="lg:w-60 xl:w-86" />
            </div>
            <div
              className={cn(
                `mx-auto max-w-[85%] ${isMobile ? 'pb-5' : 'py-10 md:leading-8 lg:leading-10'}`
              )}
            >
              <span
                className={cn(
                  'font-bold',
                  isMobile ? 'text-4xl' : 'text-5xl lg:text-6xl xl:text-7xl'
                )}
              >
                Look at what people have to say
              </span>

              <span
                className={cn(
                  'font-sansation relative italic',
                  isMobile
                    ? 'ml-2 text-4xl'
                    : 'ml-4 text-5xl lg:text-6xl xl:text-7xl'
                )}
              >
                about us
                <Image
                  src={curveLine}
                  alt="curveLine"
                  className={cn(
                    `absolute ${isMobile ? 'hidden' : 'top-2 left-[95%] h-auto w-auto lg:top-1 lg:h-full'}`
                  )}
                />
              </span>
            </div>
          </div>
          <div className="container">
            {isMobile ? (
              <MobAboutUs
                star={ratingStar}
                carouselClass="bg-[#D5D8F5] rounded-lg"
                description={[
                  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                ]}
              />
            ) : (
              <DeskAboutUs
                star={ratingStar}
                arrow={arrow}
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
