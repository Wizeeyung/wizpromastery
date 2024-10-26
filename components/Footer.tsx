import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white-800 flex justify-between w-full mx-auto px-16 py-8 border-t max-md:gap-8 body-text max-md:flex-col border-black-400 bg-black-100'>
      <p>Copyright 2023 WIZ PRO | All Rights Reserved</p>

      <div className='flex gap-x-9 max-md:flex-col gap-8' >
        <Link href='/terms-of-use'>Terms & Conditions</Link>
        <Link href='/Privacy Policy'>Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default Footer