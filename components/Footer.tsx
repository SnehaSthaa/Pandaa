'use client'
import Image from 'next/image'
import '../app/globals.css'
import facebook from '../public/footer/fb.svg'
import instagram from '../public/footer/insta.svg'
import linkedin from '../public/footer/linkedin.svg'
import copyright from '../public/footer/copyright.png'
import { useIsMobile } from '../components/hooks/use-is-mobile'
import { cn } from '@/lib/utils'

const Footer = () => {
  const isMobile = useIsMobile()
  return (
    <>
      <div
        className={cn(
          `container ${isMobile ? '!m-0 !p-0' : 'bg-contain bg-center bg-no-repeat lg:flex-row lg:gap-16'}`
        )}
      >
        <footer className="relative overflow-hidden rounded-4xl bg-[#414CAF] p-[30px]">
          <div
            className={cn(
              `mx-auto flex ${isMobile ? 'flex-col-reverse justify-between gap-10' : "mx-auto flex flex-col justify-between gap-10 bg-[url('/footer/PANDAA.svg')] bg-contain bg-center bg-no-repeat lg:flex-row lg:gap-16"}`
            )}
          >
            <div className="flex-1">
              <h2 className="mb-2 text-xl font-bold text-white">
                Looking for job
              </h2>
              <p className="text-white">Come join us at cubit.com.np</p>

              <div className="mt-6">
                <h1 className="mb-2 text-2xl font-bold text-white">
                  Stay up To date
                </h1>
                <div className="relative max-w-xs">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full rounded-xl bg-[#F7F7F7] px-4 py-3 pr-28"
                  />
                  <button className="absolute top-1/2 right-1 -translate-y-1/2 rounded-xl bg-[#2E35B5] px-6 py-2 text-white">
                    Submit
                  </button>
                </div>
              </div>
              <div className="mt-6 flex gap-4 md:hidden lg:hidden">
                <Image src={facebook} alt="Facebook" width={30} height={30} />
                <Image src={linkedin} alt="LinkedIn" width={30} height={30} />
                <Image src={instagram} alt="Instagram" width={30} height={30} />
              </div>
            </div>

            <div className="flex-1">
              <h1 className="mb-3 text-xl font-bold text-white">Company</h1>
              <ul className="flex flex-col gap-2 text-white">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="flex-1">
              <h1
                className={cn(
                  `${isMobile ? 'm-3 text-center text-3xl font-extrabold text-white' : 'hidden'}`
                )}
              >
                PANDAA
              </h1>
              <h1 className="mb-3 text-xl font-bold text-white">
                Our Projects
              </h1>
              <ul className="flex flex-col gap-2 text-white">
                <li>Pandaa</li>
                <li>HRM</li>
                <li>Khelaam</li>
              </ul>

              <div className={cn(`${isMobile ? 'hidden' : 'mt-6 flex gap-4'}`)}>
                <Image src={facebook} alt="Facebook" width={30} height={30} />
                <Image src={linkedin} alt="LinkedIn" width={30} height={30} />
                <Image src={instagram} alt="Instagram" width={30} height={30} />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 text-center text-xs text-white">
            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
              <a>Terms and Condition</a>
              <a>Privacy Policy</a>
            </div>

            <div className="mt-3 flex items-center justify-center gap-2">
              <Image src={copyright} alt="Copyright" width={12} height={12} />
              2025 All rights reserved to Pandaa Entertaintment
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
