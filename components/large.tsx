import React from 'react'
import paw2 from '../public/Group 33376 (1).png'
import first from '../public/Frame 1984078274.png'

import second from '../public/Frame 1984078275 (1).png'
import third from '../public/Frame 1984078277 (1).png'
import fourth from '../public/Frame 1984078276 (1).png'
import Content from '../components/first'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ClassNameProps {
  className?: string
}

const large = ({ className }: ClassNameProps) => {
  return (
    <div className="relative bottom-10 h-[1000px]">
      <Image
        src={paw2}
        alt="paw"
        style={{
          width: 'auto',
          height: '500px',
        }}
      />

      <div
        className={cn(
          'container !p-[80px] md:overflow-x-scroll lg:overflow-x-visible',
          className
        )}
      >
        {/* <div className="relative flex"> */}
        <Content
          className="top-[20px] left-[30px] z-20"
          textClassName="bg-[#414BAE] left-[250px] z-30  top-[380px]"
          alt="First card"
          src={first}
          toottipsMessage="i can make futsal booking easy"
          // position="Right"
        />

        <Content
          className="-top-[20px] left-[270px]"
          textClassName=" bg-[#00A06D] z-30 left-[500px] top-[150px]"
          alt="Second Card"
          src={second}
          toottipsMessage="work with us for easy service"
        />
        <Content
          className="-top-[70px] left-[600px] z-20"
          textClassName="bg-[#FF2BD1] z-30  left-[920px] bottom-[50px] "
          alt="Second Card"
          src={third}
          toottipsMessage="work with us for easy service"
        />
        <Content
          className="top-[80px] left-[700px] z-10"
          alt="Second Card"
          src={fourth}
        />
      </div>
    </div>
  )
}

export default large
