import { cn } from '@/lib/utils'
import Image from 'next/image'

interface AppImageProps {
  src?: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function AppImage({
  src,
  alt,
  width,
  height,
  className = '',
}: AppImageProps) {
  if (!src) {
    return (
      <div
        className={cn(
          `flex items-center justify-center bg-gray-200`,
          className
        )}
        style={{
          width: width ?? 100,
          height: height ?? 100,
        }}
      >
        <span className="text-sm text-gray-500">No Image</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 100}
      height={height ?? 100}
      className={className}
    />
  )
}

export default AppImage
