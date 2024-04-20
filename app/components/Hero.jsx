import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='w-screen h-screen'>
      <div className='h-20'>
        <Navbar/>
      </div>
      <div className='h-[calc(100vh-80px)]'>
        Home
      </div>
    </div>
  )
}

export default Hero
