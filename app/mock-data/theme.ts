
export type ThemeData = {
  cardClass: string
  listStar: string
  description: { list: string }[]
  title: string
  cardLogoClass: string
  imgLogo: string
  listTextClass: string
  lineColor: string
  desktopCardClass?: string 
}

export const themes: ThemeData[] = [
  {
    cardClass: 'bg-[#00A06D] text-white', 
    desktopCardClass:
      'bg-[#00A06D] ml-5 translate-x-[20%] lg:translate-x-[30%] text-white xl:w-97 w-65 lg:w-75 mt-12', 
    listStar: '/theme/white-star.svg',
    description: [
      { list: 'UI Design' },
      { list: 'UX Design' },
      { list: 'UX Consultancy' },
      { list: 'Design System' },
      { list: 'Animation' },
      { list: 'Illustration' },
    ],
    title: 'Design',
    cardLogoClass: 'absolute -top-15 left-2/3',
    imgLogo: '/theme/logo1.svg',
    listTextClass: 'text-white',
    lineColor: 'bg-[#F7F7F7]',
  },
  {
    cardClass: 'bg-[#FFD9F7] mt-12 text-black',
    desktopCardClass:
      'bg-[#FFD9F7] lg:w-75 -translate-x-[12%] lg:-translate-x-[4%] mt-12 text-black w-65 xl:w-97 top-0 z-1',
    listStar: '/theme/pink-star.svg',
    description: [
      { list: 'Web Development' },
      { list: 'Software' },
      { list: 'Mobile Apps' },
      { list: 'Web Apps' },
      { list: 'Front-End' },
      { list: 'Back-End' },
    ],
    title: 'Technology',
    cardLogoClass: 'absolute -top-15 left-2/3',
    imgLogo: '/theme/logo2.svg',
    listTextClass: 'text-black',
    lineColor: 'bg-[#FF2BD1]',
  },
  {
    cardClass: 'bg-[#414BAE] z-10 mt-12 text-white',
    desktopCardClass:
      'bg-[#414BAE] -translate-x-[40%] lg:-translate-x-[35%] mt-12 lg:w-75 w-65 text-white z-3 xl:w-97',
    listStar: '/theme/white-star.svg',
    description: [
      { list: 'Branding' },
      { list: 'Brand Name' },
      { list: 'Brand Guidelines' },
      { list: 'Strategy' },
      { list: 'Digital Marketing' },
      { list: 'S.E.O' },
    ],
    title: 'Marketing',
    cardLogoClass: 'absolute -top-15 left-2/3',
    imgLogo: '/theme/logo3.svg',
    listTextClass: 'text-white',
    lineColor: 'bg-[#F7F7F7]',
  },
]
