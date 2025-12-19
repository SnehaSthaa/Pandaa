import React from 'react'
import MobFeatured from '../featured-card'
import khelaam1 from '../../public/featured/khelaam.png'

import Pandaa from '../../public/featured/Pandaa.png'

const mobFeatured = () => {
  return (
    <>
      <MobFeatured
        title="Khelaam"
        description="Khelam brings the entire futsal experience into one smooth, rapid booking platform — find a venue, schedule a match, and get on the court without the chaos."
        img={khelaam1}
        buttonBg="bg-[#BC230F]"
        titleButtonClass="text-[#BC230F] border border-[#BC230F] p-1  text-sm rounded-sm "
      />
      <MobFeatured
        title="Khelaam"
        description="Khelam brings the entire futsal experience into one smooth, rapid booking platform — find a venue, schedule a match, and get on the court without the chaos."
        img={Pandaa}
        buttonBg="bg-[#414BAE]"
        titleButtonClass="text-[#414BAE] border text-sm  border-[#414BAE] p-1 rounded-sm "
      />
    </>
  )
}

export default mobFeatured
