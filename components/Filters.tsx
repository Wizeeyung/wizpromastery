"use client"

import { formUrlQuery } from '@/sanity/utils';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { Suspense, useState } from 'react'
import { FiltersLoading } from '@/app/(root)/(home)/loading';

const links = ['all', 'Next 13', 'frontend', 'backend', 'fullstack']


const Filters = () => {


  const [active, setActive] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();
  console.log(searchParams, 'search')

  const handleFilter = (link: string) =>{
    
    let newUrl = ''
    
    if(active === link){
      setActive('');

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ['category'],
        value: null,
      })
    } else{
      setActive(link);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: link.toLowerCase(),
      })
    }
    
    
    router.push(newUrl, {scroll: false})

  }


  return (
    <ul className='text-white body-text flex w-full justify-center py-10 gap-4 overflow-auto'>
      {links.map((link)=>(
        <Suspense  key={link} fallback={<FiltersLoading />} >

          <button key={link} onClick={()=>handleFilter(link)} className={`${active === link ? 'gradient_blue-purple': ''} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}>
            {link}
          </button>
        </Suspense>
      ))}
    </ul>
  )
}

export default Filters