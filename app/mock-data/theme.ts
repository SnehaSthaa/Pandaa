
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
    cardClass: 'bg-secondary-green text-white', 
    desktopCardClass:
      'bg-secondary-green ml-5 translate-x-[20%] lg:translate-x-[30%] text-primary-white xl:w-97 w-60 lg:w-75 mt-12', 
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
    lineColor: 'bg-primary-white',
  },
  {
    cardClass: 'bg-accent-pinklight mt-12 text-black',
    desktopCardClass:
      'bg-accent-pinklight lg:w-75 -translate-x-[12%] lg:-translate-x-[4%] mt-12 text-text-dark w-60 xl:w-97 top-0 z-1',
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
    listTextClass: 'text-text-dark',
    lineColor: 'bg-accent-pink',
  },
  {
    cardClass: 'bg-primary-blue z-10 mt-12 text-white',
    desktopCardClass:
      'bg-primary-blue -translate-x-[40%] lg:-translate-x-[35%] mt-12 lg:w-75 w-60 text-white z-3 xl:w-97',
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
    listTextClass: 'text-primary-white',
    lineColor: 'bg-primary-white',
  },
]