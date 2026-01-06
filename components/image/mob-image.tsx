import React from 'react'

import Image, { StaticImageData } from 'next/image'
interface ImageArr {
  img: StaticImageData
}
interface ImageProps {
  image: ImageArr[]
}

const MobImage = ({ image }: ImageProps) => {
  return (
    <>
      <div className="mt-10 flex flex-col">
        <div className="flex flex-row gap-7">
          <div className="flex flex-col gap-5">
            {' '}
            <Image
              src={image[0].img}
              alt="Girl Image"
              className="aspect-[45/54] rounded-xl"
            />
            <div className="flex flex-col gap-3 text-center text-xl text-black">
              <p>kristy ABC hjsducs</p>
              <p>CTO</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {' '}
            <Image
              src={image[1].img}
              alt="Girl Image"
              className="aspect-[45/54] rounded-xl"
            />
            <div className="flex flex-col gap-3 text-center text-xl text-black">
              <p>kristy ABC </p>
              <p>CTO</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-row gap-7">
          <div className="flex flex-col gap-5">
            {' '}
            <Image
              src={image[2].img}
              alt="Girl Image"
              className="aspect-[45/54] rounded-xl"
            />
            <div className="flex flex-col gap-3 text-center text-xl text-black">
              <p>kristy ABC hjsducs</p>
              <p>CTO</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {' '}
            <Image
              src={image[3].img}
              alt="Girl Image"
              className="aspect-[45/54] rounded-xl"
            />
            <div className="flex flex-col gap-3 text-center text-xl text-black">
              <p>kristy ABC </p>
              <p>CTO</p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-center">
          <button className="items-center rounded-lg bg-[#414BAE] p-2 text-white">
            meet everyone
          </button>
        </div>
      </div>
    </>
  )
}

export default MobImage
