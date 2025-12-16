import Image from 'next/image'
import '../app/globals.css'
import facebook from '../public/fb.svg'
import instagram from '../public/insta.svg'
import linkedin from '../public/linkedin.svg'
import copyright from '../public/copyright.png'

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="relative overflow-hidden rounded-4xl bg-[#414CAF] px-5 py-10 sm:px-10">
          <div className="container mx-auto flex flex-col justify-between gap-10 bg-[url('/PANDAA.svg')] bg-contain bg-center bg-no-repeat lg:flex-row lg:gap-50">
            <div className="relative flex-1 overflow-visible">
              <h2 className="mb-3 text-xl font-bold text-white">
                Looking for job
              </h2>
              <p className="text-white">Come join us at cubit.com.np</p>

              <div className="mt-8">
                <h1 className="mb-3 text-2xl font-bold text-white">
                  Stay up To date
                </h1>
                <div className="relative max-w-sm">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-auto rounded-xl bg-[#F7F7F7] px-3 py-3 text-black placeholder-black placeholder:text-xs lg:w-sm lg:px-9 lg:placeholder:text-lg"
                  />
                  <button className="absolute top-6 left-30 -translate-y-1/2 rounded-xl bg-[#2E35B5] px-3 py-1 font-semibold text-white sm:px-6 sm:py-3 md:left-70 lg:py-2">
                    Submit
                  </button>
                </div>
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
              <h1 className="mb-3 text-xl font-bold text-white">
                Our Projects
              </h1>
              <ul className="flex flex-col gap-2 text-white">
                <li>Pandaa</li>
                <li>HRM</li>
                <li>Khelaam</li>
              </ul>

              <div className="mt-6 flex gap-4">
                <Image
                  src={facebook}
                  alt="Facebook Logo"
                  width={30}
                  height={30}
                />
                <Image
                  src={linkedin}
                  alt="LinkedIn logo"
                  width={30}
                  height={30}
                />
                <Image
                  src={instagram}
                  alt="Instagram logo"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
          <div className="mt-6 pt-5 text-center text-xs text-white">
            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8">
              <a className="ml-8">Terms and Condition</a>
              <a className="ml-8">Privacy Policy</a>
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 text-white">
              <Image
                src={copyright}
                alt="Copyright Logo"
                width={12}
                height={12}
              />
              2025 All rights reserved to Pandaa Entertaintment
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
