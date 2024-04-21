import Image from 'next/image'
import React from 'react'


const page = () => {
  return (
    <div className='w-full h-[calc(100vh-80px)] px-10'>
      <div className='flex flex-col my-20 gap-6'>
        <h1 className='text-7xl font-bold'>Find, book, rent a car—quick and super easy!</h1>
        <h3 className='text-2xl'>Streamline your car rental experience with our effortless booking process.</h3>
      </div>
      <button className='p-4 bg-blue-500 rounded-full text-white hover:text-blue-500 hover:border-blue-500 border-2 duration-300 hover:bg-light'>Explore Cars</button>
      <div className=' w-full flex justify-end items-end'>
        <div className='relative z-0 '>
          <Image src="/hero.png" className='' width={700} height={700}/>
        </div>
        <div className='absolute bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[300px] overflow-hidden'/>
      </div>
    </div>
  )
}

export default page
