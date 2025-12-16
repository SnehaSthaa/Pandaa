import Image from 'next/image'
import paw from '../public/Group 33376.png'
import bulbBack from '../public/Vector (4).png'

import bulb from '../public/Group 33570.png'
import build from '../public/Group 33572.png'
import { cn } from '@/lib/utils'
interface ClassNameProps {
  className?: string
}

const Additional = ({ className }: ClassNameProps) => {
  return (
    <>
      <div>
        <Image src={paw} alt="content" />
      </div>
      <div className={cn('container', className)}></div>
      <div className="container">
        <div className="flex items-end justify-end">
          <Image
            src={bulbBack}
            alt="bulbBack "
            className="relative"
            style={{ width: 'auto', height: 'auto ' }}
          />
          <Image
            src={bulb}
            alt="bulb"
            className="absolute m-3"
            style={{ width: 'auto', height: 'auto ' }}
          />
        </div>
        <div>
          <h1 className="absolute right-2/3">We turn big challenges into</h1>
          <br />
          <span> seek, high-performnce digital products</span>

          <div>
            <Image
              src={build}
              alt="Building icon"
              style={{ width: 'auto', height: 'auto ' }}
              className="relative flex items-start justify-start"
            />
            <span> that deliver real results.</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Additional
