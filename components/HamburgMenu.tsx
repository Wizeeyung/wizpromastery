import Image from 'next/image'
import React from 'react'

const HamburgMenu = () => {
  return (
    <Image 
      src='/hamburger-menu.svg'
      alt='menu'
      width={30}
      height={30}
      className='cursor-pointer'
    />
  )
}

export default HamburgMenu