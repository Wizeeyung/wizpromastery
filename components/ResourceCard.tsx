import React from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'


interface ResourceCardProps{
  title: string,
  id: string,
  image: string,
  downloadNumber: number,
  downloadLink: string
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  id,
  image,
  downloadNumber,
  downloadLink
}) => {
  return (
    <Card className='w-full text-white max-w-[356px] border-0 !bg-transparent sm:max-w-[356px]'>
      <Link href={downloadLink} target='_blank'>
      <CardHeader className='flex justify-center flex-col gap-2.5 !p-0'>
        <div className='h-fit w-full'>
          <Image 
            src={image}
            alt={title}
            className='h-full rounded-md object-cover'
            width={384}
            height={440}
          />
        </div>
        <CardTitle className='text-white paragraph-semibold line-clamp-3'>{title}</CardTitle>
        
      </CardHeader>
      </Link>
      <CardContent className='flex justify-between mt-4 p-0'>
        <div className='flex body-medium gap-1.5 justify-center text-white'>
          <Image 
            src='/downloads.svg'
            width={20}
            height={20}
            alt='download'
          />
          {downloadNumber}
        </div>

        <Link href={downloadLink} target='_blank'
        className='flex justify-center text-gradient_purple-blue gap-1.5 body-semibold'
        >
          Download now
          <Image 
            src='/arrow-blue.svg'
            width={13}
            height={0}
            alt='arrow'
          />
        </Link>
      </CardContent>
      
</Card>
  )
}

export default ResourceCard