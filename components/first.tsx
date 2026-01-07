import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface Tooltip {
  message: string
  className: string
}

interface Props {
  alt: string
  src: string
  className?: string
  toolTips?: Tooltip[]
}

const Post = ({ className, alt, src, toolTips }: Props) => {
  return (
    <div className={cn(className, 'absolute')}>
      <div className="relative">
        <Image alt={alt} src={src} height={330} width={400} />

        {toolTips?.map((tooltip, index) => (
          <p
            key={index}
            className={cn(
              'text-primary-white absolute rounded-3xl text-center text-xs',
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

export default Post
