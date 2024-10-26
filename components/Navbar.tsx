import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import HamburgMenu from './HamburgMenu'
import ListMenu from './ListMenu'

const Navbar = () => {
  return (
    <nav className='w-full fixed top-0 z-50 text-white py-7 px-4 border-b-2 bg-black-100 border-black-200'>
      <div className='flex justify-between mx-auto w-full max-w-screen-2xl xs:px-6 sm:px-16'>
        <Link href='/'>
          <Image 
            src='/jsm-logo.svg'
            alt='logo'
            width={50}
            height={40}
          />
        </Link>

        <div className='flex gap-6'>
          <ListMenu />
          {/* <HamburgMenu /> */}
        </div>  

      </div>

    </nav>
  )
}

export default Navbar