'use client'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface DescriptionProps {
  name: string
  text: string
}

interface DeskProps {
  star: string
  description: DescriptionProps[]
  arrow: string
}

const DeskAboutUs = ({ star, arrow, description }: DeskProps) => {
  const [active, setActive] = useState(1)
  const handlePrev = () => {
    if (active > 0) setActive(active - 1)
  }

  const handleNext = () => {
    if (active < description.length - 1) setActive(active + 1)
  }

  return (
    <div className="font-sansation container mx-auto py-14">
      <div className="flex justify-center gap-6">
        {description.map((item, index) => {
          const isActive = index === active
          const isNext = index === active + 1
          const isPrev = index === active - 1

          return (
            <Card
              key={index}
              onClick={() => setActive(index)}
              className={cn(
                'relative w-[360px] text-center transition-all duration-300',
                isActive && 'bg-primary-blue text-primary-white z-20 scale-100',
                (isPrev || isNext) &&
                  'bg-secondary-lightblue text-text-dark z-10 scale-90 blur-[1px]',
                isPrev && '-mr-30',
                isNext && '-ml-30',
                !isActive && !isPrev && !isNext && 'hidden'
              )}
            >
              <CardContent className="flex flex-col px-8 py-6">
                <div>
                  <div className="mb-6 flex justify-center gap-1">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Image
                        key={i}
                        src={star}
                        alt="star"
                        width={20}
                        height={20}
                      />
                    ))}
                  </div>

                  <hr
                    className={cn(
                      'mb-6 border-t',
                      isActive
                        ? 'border-primary-white/50'
                        : 'border-text-dark/40'
                    )}
                  />

                  <p className="text-sm leading-7">{item.text}</p>
                </div>

                <div className="mt-auto pt-6">
                  <p className="text-lg font-bold">{item.name}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
      <div className="mt-10 flex flex-row justify-center gap-4">
        <button
          onClick={handlePrev}
          disabled={active === 0}
          className="bg-secondary-lightblue flex h-12 w-12 items-center justify-center rounded-full disabled:opacity-40"
        >
          <Image src={arrow} alt="Prev" width={14} height={14} />
        </button>

        <button
          onClick={handleNext}
          disabled={active === description.length - 1}
          className="bg-secondary-lightblue flex h-12 w-12 items-center justify-center rounded-full disabled:opacity-40"
        >
          <Image
            src={arrow}
            alt="Next"
            width={14}
            height={14}
            className="rotate-180"
          />
        </button>
      </div>
    </div>
  )
}

export default DeskAboutUs
