import React from 'react'

import DeskFeature from '../featured-card'
import khelaam1 from '../../public/featured/khelaam.png'
import Pandaa from '../../public/featured/Pandaa.png'
import { motion } from 'motion/react'

const DeskFeatured = () => {
  return (
    <>
      <div className="relative flex justify-start">
        <DeskFeature
          title="Khelaam"
          description="Khelam brings the entire futsal experience into one smooth, rapid booking platform — find a venue, schedule a match, and get on the court without the chaos."
          img={khelaam1}
          buttonBg="bg-[#BC230F] absolute left-23 "
          titleButtonClass="text-[#BC230F] text-sm border border-[#BC230F] px-5 rounded-full lg:text-md lg:px-8   "
          cardImageClass="absolute left-80 w-120 bottom-0 lg:left-100"
          message='futsal,booked in a "blink".'
          messageClass="bg-[#414BAE]  absolute px-3 py-1 xl:right-1/7 top-1/5 right-1  xl:px-5 py-2 lg:px-2 "
        />
      </div>
      <div className="relative left-3/4 mb-3 h-[194px] w-[194px] xl:left-4/5">
        <div className="absolute top-1/6 left-1/6 h-30 w-30 rounded-full bg-[#00A06D]"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="194"
          height="194"
          viewBox="0 0 194 194"
          fill="none"
        >
          <path
            id="circlePath"
            d="M95 23C134.765 23 167 55.2355 167 95C167 134.765 134.765 167 95 167C55.2355 167 23 134.765 23 95C23 55.2355 55.2355 23 95 23ZM95 27C57.4446 27 27 57.4446 27 95C27 132.555 57.4446 163 95 163C132.555 163 163 132.555 163 95C163 57.4446 132.555 27 95 27Z"
          />

          <motion.text
            fontSize="23"
            fill="white"
            initial={{ rotate: [0, 0, 0, 0, 0] }}
            animate={{ rotate: [0, 30, 60, 90, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <textPath href="#circlePath">
              work with us-work with us-work with us-
            </textPath>
          </motion.text>
        </svg>
      </div>

      <div className="relative flex justify-end">
        <DeskFeature
          title="Pandaa"
          description="Khelam brings the entire futsal experience into one smooth, rapid booking platform — find a venue, schedule a match, and get on the court without the chaos."
          img={Pandaa}
          buttonBg="bg-[#414BAE] absolute lg:right-110 right-80 "
          titleButtonClass="text-[#414BAE] text-sm lg:text-md  border border-[#414BAE]  px-5 lg:px-8  rounded-full py-0 "
          cardImageClass="absolute lg:left-50 xl:left-130 left-30 bottom-5"
          listClassName="ml-45"
          message="your ticket to “everything”."
          messageClass="bg-[#00A06D] absolute px-3 py-1 xl:left-1/7 xl:px-5 lg:py-2 top-1/5 left-1 lg:left-0 lg:px-2 "
        />
      </div>
    </>
  )
}

export default DeskFeatured
