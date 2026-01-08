import React from 'react'
import AppImage from '../image'
import AppButton from '../button'
interface DesktopProp {
  src: string
  className?: string
}
const desktopNAv = ({ src, className }: DesktopProp) => {
  return (
    <>
      <div className={className}>
        <div className="relative inline-block">
          <div className="relative z-20 h-10 w-10 md:h-20 md:w-20 lg:h-30 lg:w-30">
            <AppImage src={src} alt="Paw logo" height={150} width={150} />
          </div>
          <p className="absolute top-0 left-6 text-[10px] font-bold md:top-12 md:left-10 lg:top-17 lg:left-15 lg:text-2xl">
            Work
          </p>
        </div>

        <h2 className="pl-2 text-lg font-extrabold md:text-4xl lg:text-6xl">
          PANDAA
        </h2>
        <AppButton className="border-primary-white rounded-sm border p-0.5 text-[5px] hover:cursor-pointer md:p-2 md:text-sm lg:m-2 lg:p-3 lg:text-sm">
          Contact us
        </AppButton>
      </div>
    </>
  )
}

export default desktopNAv
