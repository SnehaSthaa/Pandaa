'use client'
import React from 'react'
import Content from '../first'
import { motion } from 'motion/react'
import AppImage from '../image'

interface Props {
  bgImage: string
  image1: string
  image2: string
}

const desktopContent = ({ bgImage, image1, image2 }: Props) => {
  return (
    <>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.1 }}
        className="container min-h-100 py-25 lg:min-h-150"
      >
        <div className="relative">
          <div className="overflow-x-hidden">
            <motion.div
              initial={{ x: 600, y: 100, opacity: 2 }}
              whileInView={{ x: 0, y: 0, opacity: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: 'easeOut', delay: 0.2 }}
              className="absolute -top-40 -left-20 h-110 w-110 lg:-top-48 lg:-left-[10%] lg:h-140 lg:w-140 xl:-left-[11%]"
            >
              <AppImage
                src={bgImage}
                alt="Paw Background"
                className="h-full w-full"
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-x-0 flex justify-center">
          <div className="relative bottom-0 container w-full px-20">
            <motion.div
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative z-2"
            >
              <Content
                className="top-20 left-18.25 z-1 w-[26%] lg:w-[29%]"
                alt="First card"
                src={image1}
                toolTips={[
                  {
                    message: 'i can make futsal booking easy',
                    className:
                      'left-[70%] bottom-0 bg-[#414BAE] w-[12.5rem] xl:w-[15rem] xl:left-65 xl:text-sm xl:py-1 lg:w-[15rem]  lg:text-sm py-0.5 ',
                  },
                ]}
              />
            </motion.div>
            <motion.div
              initial={{ x: -30, y: -10 }}
              whileInView={{ x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 3, delay: 0.3 }}
              className="relative z-0"
            >
              <Content
                alt="Second Card"
                className="top-0 left-[29%] w-[30%] md:top-5 lg:left-[29%] lg:w-[32%] xl:left-[27%]"
                src={image2}
              />
            </motion.div>
            <motion.div
              initial={{ x: -150, y: -15, zIndex: 1 }}
              whileInView={{ x: 0, y: 0, zIndex: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
              className="relative z-1"
            >
              <Content
                alt="Third Card"
                className="-top-5 left-[51%] z-1 w-[26%] md:top-0 lg:left-[52.8%] lg:w-[29%] xl:left-[51%]"
                src={image1}
                toolTips={[
                  {
                    message: 'work with us for easy service',
                    className:
                      'bg-[#00A06D] -left-[27%] w-[12.5rem] py-0.5 bottom-[23%]  xl:w-[15rem] xl:-left-28 xl:bottom-35 xl:text-sm lg:w-[15rem]  lg:text-sm lg:-left-[28%] lg:bottom-[32%] ',
                  },
                  {
                    message: 'work with us for easy service',
                    className:
                      'bg-[#FF2BD1] lg:left-[80%] md:left-[66%] w-[12rem] py-0.5 xl:text-sm xl:w-[15rem] xl:left-82 top-4 lg:w-[15rem]  lg:text-sm ',
                  },
                ]}
              />
            </motion.div>
            <motion.div
              initial={{ x: -250 }}
              whileInView={{ x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
              className="relative z-0"
            >
              <Content
                alt="Fourth Card"
                src={image2}
                className="top-25 right-17.5 w-[30%] lg:top-38 lg:w-[32%] xl:top-55"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default desktopContent
