import React from 'react'
import MobFeatured from '../featured-card'

const mobFeatured = () => {
  return (
    <>
      <MobFeatured
        title="Khelaam"
        description="Khelam brings the entire futsal experience into one smooth, rapid booking platform — find a venue, schedule a match, and get on the court without the chaos."
        img="/featured/khelaam.png"
        buttonBg="bg-accent-red"
        titleButtonClass="text-accent-red border border-accent-red p-1 text-xs md:text-sm rounded-sm "
        listItems={[
          'Instant venue booking',
          'Unified management dashboard',
          'Secure digital payments',
          'Real-time notifications',
        ]}
      />
      <MobFeatured
        title="Khelaam"
        description="Khelam brings the entire futsal experience into one smooth, rapid booking platform — find a venue, schedule a match, and get on the court without the chaos."
        img="/featured/Pandaa.png"
        buttonBg="bg-primary-blue"
        titleButtonClass="text-primary-blue border text-xs p-1 border-primary-blue rounded-sm "
        listItems={[
          'Instant venue booking',
          'Unified management dashboard',
          'Secure digital payments',
          'Real-time notifications',
        ]}
      />
    </>
  )
}

export default mobFeatured
