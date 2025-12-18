import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Tooltip {
  message: string
  className: string
}

interface Props {
  alt: string
  src: StaticImageData
  className?: string
  toolTips?: Tooltip[]
}

const postr = ({ className, alt, src, toolTips }: Props) => {
  return (
    <div className={cn(className, 'absolute')}>
      <div id="test" className="relative">
        <Image alt={alt} src={src} />
        {toolTips?.map((tooltip, index) => (
          <p
            key={index}
            className={cn(
              'absolute rounded-3xl text-center text-white',
              tooltip.className
            )}
          >
            {tooltip.message}
          </p>
        ))}
      </div>
    </div>
  )
}

export default postr
