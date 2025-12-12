import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import React, { ComponentProps } from 'react'

interface Props extends ComponentProps<'div'> {
  textClassName?: string
  toottipsMessage?: string
  // position?: 'Left' | 'Right' | 'Top' | 'Bottom'
  alt: string
  src: StaticImageData
  imageClassName?: string
}

const postr = ({
  imageClassName,
  alt,
  src,
  toottipsMessage,
  textClassName,
  ...props
}: Props) => {
  return (
    <div {...props} id="test" className="relative">
      <Image className={cn('absolute', imageClassName)} alt={alt} src={src} />
      <div
        className={cn(
          'relative w-[20%] rounded-3xl text-center text-white',
          textClassName
        )}
      >
        {toottipsMessage}
      </div>
    </div>
  )
}

export default postr
