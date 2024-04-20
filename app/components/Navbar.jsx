"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const router = usePathname();

    const links = [
        {
            id: 1,
            title: 'Home',
            route: '/'
        },
        {
            id: 2,
            title: 'Search',
            route: '/Search'
        },
        {
            id: 3,
            title: 'Add',
            route: '/Add'
        }
    ]

  return (
    <div className='bg-slate-200 h-full w-full'>
      <div className='w-full h-full py-4 px-20 flex items-center justify-between'>
        <h1>CarHub</h1>
        <nav className='flex gap-4'>
            {links.map(({id, title, route}) => (
                <div className='relative group'>
                    <Link key={id} className='' href={route}>{title}</Link>
                    <span className={`absolute top-5 left-0 bg-black h-[1px] ${router === route ? 'w-full' : 'w-0'} group-hover:w-full duration-300`}>&nbsp;</span>
                </div>
            ))}
        </nav>
      </div>
    </div>
  )
}

export default Navbar
