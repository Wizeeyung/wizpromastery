import Filters from '@/components/Filters'
import Header from '@/components/Header'
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import { getResources, getResourcesPlaylist } from '@/sanity/actions'
import React from 'react'


//means this page would be serverside updated every 15mins whenever you add a new resource to your sanity studio
export const revalidate = 900;

interface HomeProps{
  searchParams: { [key: string]: string | undefined}
}

const Page = async({searchParams}: HomeProps) => {
 
  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1'
  });

  const resourcesPlaylist = await getResourcesPlaylist()

  console.log(resourcesPlaylist, 'resource')

  return (
    <main className='flex justify-center items-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full '>
        <div className='flex justify-center relative items-center rounded-xl w-full bg-banner min-h-[274px] bg-cover bg-center'>
          <h1 className='sm:heading1 heading2 mb-6 text-center text-white'>
            Wiz Pro Mastery Resources
          </h1>

          
        </div>
        <SearchForm />
        <Filters />


        {(searchParams?.query || searchParams?.category )&& (
          <section className='flex justify-center mt-6 w-full flex-col sm:mt-20'>
          <Header 
            query={searchParams?.query || ''}
            category={searchParams?.category || ''}
          />

          <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
            {resources?.length > 0 ? (
              resources.map((resource: any)=>(
                <ResourceCard 
                  key={resource._id}
                  title={resource.title}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                 
                />
              ))
            ):
            <p className='body-regular text-white-400'>No resources found</p>
            }
          </div>
        </section>
        )}


        {resourcesPlaylist.map((items:any)=> (
          <section key={items._id} className='flex-center mt-6 w-full flex-col sm:mt-20'>
            <h1 className='heading3 self-start text-white-800'>
              {items.title}
            </h1>

            <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
                {items.resources.map((item: any)=> (
                    <ResourceCard 
                    key={item._id}
                    title={item.title}
                    image={item.image}
                    downloadNumber={item.views}
                    downloadLink={item.downloadLink}
                   
                  />
                ))}
                
              
            </div>
          </section>
        ))}
        

      </section>

      
    </main>
  )
}

export default Page