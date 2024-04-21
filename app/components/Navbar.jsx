"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

  return (
    <div className='bg-light h-20 w-full z-10'>
      <div className='w-full h-full py-4 px-20 flex items-center justify-between'>
        <Image src='logo.svg' width={120} height={120}/>
        <button className='p-4 flex justify-center items-center rounded-md bg-blue-500 text-light hover:bg-light border-2 hover:border-blue-500 duration-300 hover:text-blue-500'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
