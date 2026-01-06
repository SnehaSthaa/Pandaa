import Image from 'next/image'
import React, { useState } from 'react'
import { motion, useAnimation } from 'motion/react'

interface ImageArr {
  img: string
}
interface DeskImageProps {
  image: ImageArr[]
}
const DeskImage = ({ image }: DeskImageProps) => {
  const controls = useAnimation()
  const [isFlipped, setIsFlipped] = useState(false)
  const [hasHovered, setHasHovered] = useState(false)
  const handleMouseEnter = async () => {
    if (hasHovered) return

    setHasHovered(true)
    setIsFlipped(true)
    await controls.start({ rotateY: 180 })
  }

  const handleMouseLeave = async () => {
    setIsFlipped(false)
    await controls.start({ rotateY: 0 })
    setHasHovered(false)
  }
  return (
    <>
      <div className="flex flex-row gap-4 lg:justify-between">
        <div className="flex flex-col gap-3">
          <div className='[mask-image:url("/image/subtract1.png")] [mask-size:100%_100%] [mask-position:center_center] [mask-repeat:no-repeat]'>
            <Image
              src={image[0].img}
              alt="Image first"
              width={260}
              height={0}
              className="aspect-[64/80] object-cover"
            />
          </div>
          <Image
            src={image[1].img}
            alt="Image Second"
            className="aspect-[5/3] rounded-2xl object-cover"
            width={260}
            height={0}
          />
        </div>
        <div className="mt-12 flex items-center">
          <div className='[mask-image:url("/image/subtract2.png")] [mask-size:100%_100%] [mask-position:center_center] [mask-repeat:no-repeat]'>
            <Image
              src={image[2].img}
              alt="image Third"
              className="aspect-[77/130] rounded-b-2xl"
              width={230}
              height={0}
            />
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-center gap-10">
          <motion.div
            animate={controls}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <Image
                src={image[4].img}
                alt="image Fourth"
                className="aspect-[64/50] rounded-3xl object-cover"
                width={260}
                height={420}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={isFlipped ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, repeat: 0 }}
                className="absolute bottom-0 flex flex-col items-center justify-center gap-3 px-3 text-white"
              >
                <span className="text-center text-3xl font-bold">
                  kristy ABC hjsducs
                </span>
                <span className="text-center text-2xl font-medium">CTO</span>
              </motion.div>
            </div>
          </motion.div>

          <button className="w-auto rounded-lg bg-[#414CAF] p-2 text-center text-white">
            meet everyone
          </button>
        </div>
        <div className="mt-12 flex items-center">
          <div className='[mask-image:url("/image/subtract3.png")] [mask-size:100%_100%] [mask-position:center_center] [mask-repeat:no-repeat]'>
            <Image
              src={image[3].img}
              alt="image Third"
              className="aspect-[77/130] rounded-b-2xl"
              width={230}
              height={0}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className='[mask-image:url("/image/subtract4.png")] [mask-size:100%_100%] [mask-position:center_center] [mask-repeat:no-repeat]'>
            <Image
              src={image[5].img}
              alt="Image first"
              className="aspect-[64/80] object-cover"
              width={260}
              height={0}
            />
          </div>
          <Image
            src={image[6].img}
            alt="Image Second"
            className="aspect-[5/3] rounded-2xl object-cover"
            width={260}
            height={0}
          />
        </div>
      </div>
    </>
  )
}

export default DeskImage
