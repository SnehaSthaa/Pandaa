import React from 'react'
import MobFeatured from '../featured-card'

const mobFeatured = () => {
  return (
    <>
      <MobFeatured
        title="Khelaam"
        description="Khelam brings the entire futsal experience into one smooth, rapid booking platform — find a venue, schedule a match, and get on the court without the chaos."
        img="/featured/khelaam.png"
        buttonBg="bg-[#BC230F]"
        titleButtonClass="text-[#BC230F] border border-[#BC230F] p-1 text-xs  md:text-sm rounded-sm "
      />
      <MobFeatured
        title="Khelaam"
        description="Khelam brings the entire futsal experience into one smooth, rapid booking platform — find a venue, schedule a match, and get on the court without the chaos."
        img="/featured/Pandaa.png"
        buttonBg="bg-[#414BAE]"
        titleButtonClass="text-[#414BAE] border text-xs p-1 border-[#414BAE]   rounded-sm "
      />
    </>
  )
}

export default mobFeatured
