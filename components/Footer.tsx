'use client'
import Image from 'next/image'
import '../app/globals.css'
import { useIsMobile } from './hooks/use-is-mobile'
import { cn } from '@/lib/utils'
import { footer } from '../app/mock-data/footer'
interface IconProps {
  img: string
}
interface Props {
  icons: IconProps[]
  copy: string
}
const Footer = ({ icons, copy }: Props) => {
  const isMobile = useIsMobile()
  return (
    <>
      <div className="container !m-0 !p-0 md:!mx-auto md:!px-[30px] md:!py-[27px] lg:flex-row lg:gap-16">
        <footer className="text-primary-white bg-primary-blue relative overflow-hidden rounded-4xl p-[30px] md:px-19">
          <div className="mx-auto flex flex-col-reverse gap-15 bg-contain bg-bottom bg-no-repeat md:flex-col md:bg-[url('/footer/PANDAA.svg')] md:py-5 lg:flex-row lg:!justify-between xl:!gap-55">
            <div className="flex-1">
              <h2 className="mb-2 text-xl font-bold">Looking for job</h2>
              <p className="font-sansation text-md">
                Come join us at cubit.com.np
              </p>

              <div className="mt-15">
                <h1 className="mb-2 text-2xl font-bold">Stay up To date</h1>
                <div className="relative max-w-xs">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="bg-primary-white w-full rounded-xl px-4 py-3 pr-28 text-[#2A2929] placeholder:text-sm"
                  />
                  <button className="bg-primary-blue absolute top-1/2 right-1 -translate-y-1/2 rounded-xl px-6 py-2">
                    Submit
                  </button>
                </div>
              </div>
              <div className="mt-6 flex gap-4 md:hidden lg:hidden">
                {icons.map((item, index) => (
                  <Image
                    key={index}
                    src={item.img}
                    alt="Facebook"
                    width={35}
                    height={35}
                  />
                ))}
              </div>
            </div>

            <div className="flex-1">
              <h1 className="mb-3 text-xl font-bold">Company</h1>
              <ul className="font-sansation flex flex-col gap-2 text-lg">
                {footer.company.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
              <h1 className="m-3 text-center text-3xl font-extrabold md:hidden lg:hidden">
                PANDAA
              </h1>
              <h1 className="mb-3 text-xl font-bold">Our Projects</h1>
              <ul className="font-sansation flex flex-col gap-2 text-lg">
                {footer.projects.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className={cn(`${isMobile ? 'hidden' : 'mt-6 flex gap-4'}`)}>
                {icons.map((item, index) => (
                  <Image
                    key={index}
                    src={item.img}
                    alt="icons"
                    width={35}
                    height={35}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="font-sansation mt-6 pt-5 text-center text-xs">
            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
              {footer.privacy.map((item, index) => (
                <a key={index}>{item}</a>
              ))}
            </div>

            <div className="font-sansation mt-3 flex items-center justify-center gap-2">
              <Image src={copy} alt="Copyright" width={12} height={12} />
              2025 All rights reserved to Pandaa Entertaintment
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
