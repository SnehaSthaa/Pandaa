import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
interface DesktopProp {
  src: string
  className?: string
}
const desktopNAv = ({ src, className }: DesktopProp) => {
  return (
    <>
      <div className={cn(className)}>
        <div className="relative inline-block">
          <div className="relative z-20 h-10 w-10 md:h-20 md:w-20 lg:h-30 lg:w-30">
            <Image src={src} alt="Paw logo" fill />
          </div>
          <p className="absolute top-0 left-6 text-[10px] font-bold text-white md:top-12 md:left-10 lg:top-17 lg:left-15 lg:text-2xl">
            Work
          </p>
        </div>

        <h2 className="pl-2 text-lg font-extrabold text-white md:text-4xl lg:text-6xl">
          PANDAA
        </h2>
        <button className="rounded-sm border border-white p-0.5 text-[5px] text-[#F7F7F7] hover:m-0 hover:cursor-pointer hover:bg-[#bcbcbc] md:p-2 md:text-sm lg:m-2 lg:p-3 lg:text-sm">
          Contact us
        </button>
      </div>
    </>
  )
}

export default desktopNAv
