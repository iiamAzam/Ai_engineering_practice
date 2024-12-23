import React from 'react'
import Navbar from '../commponent/Navbar'
import img1 from '../assets/hero_iphone16pro_avail__fnf0f9x70jiy_large.jpg'
function Homepage() {
  return (
    <div className='relative'>
      <div className=' w-full  fixed t-0' >
        <Navbar />
      </div>

      <div className=''>
        <div className='absolute  text-center left-[450px] text-white top-[100px]'>
        <h1 className='text-[50px] font-sans font-bold'>iPhone 16 Pro</h1>
          <h2>Build for Apple intelligent</h2>
          </div>
        <img src={img1} className='w-screen h-screen object-cover' />
      </div>


    </div>
  )
}

export default Homepage