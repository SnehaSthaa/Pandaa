import React from 'react'
import Content from '../first'

import Image, { StaticImageData } from 'next/image'
import { motion } from 'motion/react'

interface Props {
  bgImage: StaticImageData
  image1: StaticImageData
  image2: StaticImageData
}

const desktopContent = ({ bgImage, image1, image2 }: Props) => {
  return (
    <>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.1 }}
        className="container min-h-100 py-20 lg:min-h-150"
      >
        <div className="relative">
          <div className="overflow-x-hidden !px-0">
            <motion.div
              initial={{ x: 600, y: 100, opacity: 2 }}
              animate={{ x: 0, y: 0, opacity: 100 }}
              transition={{ duration: 3, ease: 'easeOut', delay: 0.2 }}
              className="absolute top-[-5rem] -left-33 container h-[3rem] w-[30rem] lg:-top-[9rem] lg:-left-38 lg:w-150 xl:-left-48"
            >
              <Image src={bgImage} alt="Paw Background" />
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-x-0 flex justify-center">
          <div className="relative bottom-0 container w-full !px-[80px]">
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative z-2"
            >
              <Content
                className="top-10 -left-10 z-1 pl-[73px] md:scale-65 lg:-left-5 lg:scale-80 xl:left-5 xl:scale-90"
                alt="First card"
                src={image1}
                toolTips={[
                  {
                    message: 'i can make futsal booking easy',
                    className: 'left-60 bottom-0 bg-[#414BAE] w-[15rem]',
                  },
                ]}
              />
            </motion.div>
            <motion.div
              initial={{ x: -30, y: -10 }}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 3, delay: 0.3 }}
              className="relative z-0"
            >
              <Content
                alt="Second Card"
                className="top-0 left-[20%] md:scale-65 lg:left-[25%] lg:scale-80 xl:left-72 xl:scale-90"
                src={image2}
              />
            </motion.div>
            <motion.div
              initial={{ x: -150, y: -15, zIndex: 1 }}
              animate={{ x: 0, y: 0, zIndex: 20 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
              className="relative z-1"
            >
              <Content
                alt="Third Card"
                className="-top-3 left-95 z-1 md:scale-65 lg:left-[55%] lg:scale-80 xl:left-150 xl:scale-90"
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
            </motion.div>
            <motion.div
              initial={{ x: -250 }}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
              className="relative z-0"
            >
              <Content
                alt="Fourth Card"
                src={image2}
                className="top-40 left-[60%] md:scale-80 lg:top-[12rem] lg:left-[37rem] lg:scale-80 xl:top-[9rem] xl:left-[45rem] xl:scale-90"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default desktopContent
