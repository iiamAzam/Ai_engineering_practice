import React from 'react'
import Navbar from '../commponent/Navbar'
import img1 from '../assets/hero_iphone16pro_avail__fnf0f9x70jiy_large.jpg'
import img2 from '../assets/hero_iphone16_avail__euwzls69btea_large.jpg'
import img3 from '../assets/hero_ipad_air__enn6321t3tkm_large.jpg'
import logo1 from '../assets/promo_logo_ipadair_ai__gikal75essya_large.png'
function Homepage() {
  return (
    <div className='relative'>
      <div className=' w-full z-10 fixed t-0' >
        <Navbar />
      </div>

      <div className=' mb-2'>
        <div className='absolute  text-center left-[400px] text-white top-[70px]'>
        <h1 className='text-[50px] font-sans font-bold'>iPhone 16 Pro</h1>
          <h2 className='text-[22px] font-semibold'>Build for Apple intelligent</h2>

          <div className=' flex absolute left-[40px]  top-[485px]  gap-5'>
                 <button className=' px-5  rounded-3xl bg-sky-400 '>
              Learn More
        </button>
          <button className='  px-8 py-2 rounded-3xl text-sky-400   border-2 border-sky-400  '>
              Buy
            </button>

          </div>
          <h2  className=' text-gray-400  absolute left-[20px] tracking-wider   top-[550px]  text-[13px]'>
              Apple intelligens available now in US English
            </h2>
               </div>
        <img src={img1} className='w-screen h-[650px] object-cover' />

      </div>
      <div className=' relative '>
        <div className='absolute  text-center left-[400px] text-white top-[70px]'>
        <h1 className='text-[50px] font-sans font-bold'>iPhone 16 Pro</h1>
          <h2 className='text-[22px] font-semibold'>Build for Apple intelligent</h2>

          <div className=' flex absolute left-[40px]  top-[485px]  gap-5'>
                 <button className=' px-5  rounded-3xl bg-sky-400 '>
              Learn More
        </button>
          <button className='  px-8 py-2 rounded-3xl text-sky-400   border-2 border-sky-400  '>
              Buy
            </button>

          </div>
          <h2  className=' text-gray-400  absolute left-[20px] tracking-wider   top-[550px]  text-[13px]'>
              Apple intelligens available now in US English
            </h2>
               </div>
        <img src={img2} className='w-screen h-[650px] object-cover' />

      </div>
       <div className=' relative '>
        <div className='absolute  text-center left-[400px] text-white top-[70px]'>
            <img className=' w-[200px] ml-20 ' src={logo1}/>
          <div className=' flex absolute w-full left-[40px]  top-[100px]  gap-5'>
                 <button className=' px-5  rounded-3xl bg-sky-400 '>
              Learn More
        </button>
          <button className='  px-8 py-2 rounded-3xl text-sky-400   border-2 border-sky-400  '>
              Buy
            </button>

          </div>
          <span  className='text-black ml-[-60px] mt-[10px]  font-semibold  tracking-wider    text-[30px]'>
              Two Sizes. Faster chip. Does all.
          </span>

          <h2  className=' text-gray-400  absolute left-[20px] tracking-wider   top-[550px]  text-[13px]'>
              Apple intelligens available now in US English
            </h2>
           <h2  className=' text-gray-400  absolute left-[20px] tracking-wider   top-[550px]  text-[13px]'>
              Apple intelligens available now in US English
            </h2>


               </div>
        <img src={img3} className='w-screen h-[650px] object-cover' />

      </div>


    </div>
  )
}

export default Homepage