import { FiMenu } from 'react-icons/fi'

import React from 'react'

const mobileNav = () => {
  return (
    <div className="fixed top-0 left-0 w-full p-3">
      <div className="flex w-full flex-row items-center justify-between p-4">
        <h2 className="text-3xl font-extrabold">PANDAA</h2>
        <a>
          <FiMenu className="text-primary-white" size={30} />
        </a>
      </div>
    </div>
  )
}

export default mobileNav
