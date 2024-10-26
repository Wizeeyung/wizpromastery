import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const loading = () => {
  return (
    <main className="flex justify-center items-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className='nav-padding w-full '>
        <Skeleton className='h-[274px] w-full rounded-full' />
      </section>

      <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
        <Skeleton className='h-10 w-56'/>

        <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
          <Skeleton className='h-[440px] w-full sm:w-[356px]'/>
          <Skeleton className='h-[440px] w-full sm:w-[356px]'/>
          <Skeleton className='h-[440px] w-full sm:w-[356px]'/>
        </div>
      </section>
    </main>
  )
}

export default loading


export const FiltersLoading = ()=>{
  return(
    <ul className='text-white body-text flex w-full justify-center py-10 gap-4 overflow-auto'>
      <Skeleton className='h-5 w-20'/>
    </ul>
  )
}