import React from 'react'
import AppImage from '../image'
import AppButton from '../button'

interface ImageArr {
  img: string
  name?: string
  role?: string
}

interface ImageProps {
  image: ImageArr[]
}

const MobImage = ({ image }: ImageProps) => {
  return (
    <div className="font-sansation mt-10">
      <div className="grid grid-cols-2 gap-4">
        {image.map((item, index) => (
          <div key={index} className="flex flex-col gap-5">
            <AppImage
              src={item.img}
              alt={item.name ?? 'Team member'}
              width={300}
              height={250}
              className="aspect-46/55 rounded-xl"
            />

            <div className="text-text-dark flex flex-col items-center justify-center gap-2 text-center text-lg">
              <p className="font-medium">{item.name}</p>
              <p>{item.role ?? 'CTO'}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <AppButton className="text-primary-white bg-primary-blue rounded-lg px-4 py-2">
          meet everyone
        </AppButton>
      </div>
    </div>
  )
}

export default MobImage
