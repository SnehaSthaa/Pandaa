import React from 'react'
import Content from '../first'
import first from '../../public/content banner/first-image.png'
import second from '../../public/content banner/second-image.png'
import Image from 'next/image'
import paw2 from '../../public/background/paw.png'
const desktopContent = () => {
  return (
    <>
      <div className="relative min-h-[40rem]">
        <div className="absolute top-[-4rem] h-[25rem] w-[25rem] xl:-top-[5rem] xl:w-[30rem]">
          <Image src={paw2} alt="Paw Background" />
        </div>
        <div className="absolute inset-x-0 flex justify-center">
          <div className="relative bottom-0 container w-full !px-[50px]">
            <Content
              className="top-25 left-10 z-1 pl-[73px] md:scale-65 lg:left-20 lg:scale-80 xl:left-30 xl:scale-90"
              alt="First card"
              src={first}
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
              src={second}
            />

            <Content
              alt="Third Card"
              className="top-12 left-110 z-1 md:scale-65 lg:left-148 lg:scale-80 xl:left-180 xl:scale-90"
              src={first}
              toolTips={[
                {
                  message: 'work with us for easy service',
                  className: 'bg-[#00A06D] -left-20 w-[15rem] bottom-23 ',
                },
                {
                  message: 'work with us for easy service',
                  className:
                    'bg-[#FF2BD1] lg:left-80 md:left-50 w-[15rem] top-3',
                },
              ]}
            />

            <Content
              alt="Fourth Card"
              src={second}
              className="top-45 left-130 pr-[73px] md:scale-70 lg:top-[13rem] lg:left-[43rem] lg:scale-80 xl:top-[14rem] xl:left-[52rem] xl:scale-90"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default desktopContent
