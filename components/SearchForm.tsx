"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { formUrlQuery } from '@/sanity/utils'

const SearchForm = () => {

  const [search, setSearch] = useState('');

  const searchParams = useSearchParams();
  const router = useRouter();
  

  //to delay search for small time so it can make request once instead of on any key stroke
  useEffect(()=>{
    const delayDebounceFn = setTimeout(()=>{

      let newUrl = '';

      if(search){
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: search,
        })
      } else{
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['query'],
        })
      }

      router.push(newUrl, {scroll:false});
    }, 300)

    return ()=> clearTimeout(delayDebounceFn)
  },[search, router, searchParams])

  return (
    <form className='flex justify-center w-full sm:-mt-10 mt-10 mx-auto sm:px-5'>
      <label className='flex justify-center items-center relative w-full max-w-3xl'>
        <Image 
          src='/magnifying-glass.svg'
          alt='search'
          width={30}
          height={30}
          className='absolute left-8'
        />
        <Input 
          className='base-regular placeholder:text-white h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0'
          type='text'
          placeholder='Search...'
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
        />
      </label>
    </form>
  )
}

export default SearchForm