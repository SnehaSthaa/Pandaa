import React from 'react'
import Content from '../first'

import Image, { StaticImageData } from 'next/image'

interface Props {
  bgImage: StaticImageData
  image1: StaticImageData
  image2: StaticImageData
}

const desktopContent = ({ bgImage, image1, image2 }: Props) => {
  return (
    <>
      <div className="container min-h-100 lg:min-h-150">
        <div className="relative">
          <div className="overflow-x-hidden !px-0">
            <div className="absolute top-[-5rem] -left-33 container h-[3rem] w-[30rem] lg:-top-[9rem] lg:-left-38 lg:w-150 xl:-left-48">
              <Image src={bgImage} alt="Paw Background" />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 flex justify-center">
          <div className="relative bottom-0 container w-full !px-[80px]">
            <Content
              className="top-25 left-10 z-1 pl-[73px] md:scale-65 lg:left-20 lg:scale-80 xl:left-30 xl:scale-90"
              alt="First card"
              src={image1}
              toolTips={[
                {
                  message: 'i can make futsal booking easy',
                  className: 'left-60 bottom-0 bg-[#414BAE] w-[15rem]',
                },
              ]}
            />

            <Content
              alt="Second Card"
              className="top-20 left-50 md:scale-70 lg:left-80 lg:scale-80 xl:left-100 xl:scale-90"
              src={image2}
            />

            <Content
              alt="Third Card"
              className="top-12 left-110 z-1 md:scale-65 lg:left-145 lg:scale-80 xl:left-180 xl:scale-90"
              src={image1}
              toolTips={[
                {
                  message: 'work with us for easy service',
                  className: 'bg-[#00A06D] -left-20 w-[15rem] bottom-23 ',
                },
                {
                  message: 'work with us for easy service',
                  className:
                    'bg-[#FF2BD1] lg:left-60 md:left-45 w-[15rem] top-4',
                },
              ]}
            />

            <Content
              alt="Fourth Card"
              src={image2}
              className="top-53 left-130 md:scale-70 lg:top-[15rem] lg:left-[43rem] lg:scale-80 xl:top-[14rem] xl:left-[52rem] xl:scale-90"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default desktopContent
