
import Link from 'next/link'
import React from 'react'

const ListMenu = () => {
  return (
    <ul className='flex items-center gap-3  md:gap-10'>
      <li className='body-text text-gradient_blue-purple !font-bold'>
        <Link href="https://samson-portfolio-jet.vercel.app/" target="_blank">
          My Portfolio
        </Link>

      </li>

      {/* <li className='body-text !font-normal'>
        <Link href="https://jsmastery.pro/masterclass" target="_blank">
          Next.js 13.4 course
        </Link>

      </li> */}

    </ul>
  )
}

export default ListMenu