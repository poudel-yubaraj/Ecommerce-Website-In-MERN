import React from 'react'
import { assets } from '../assets/assets'
const OurPolicy = () => {
  return (
    <div className='flex py-20  flex-col sm:flex-row justify-around gap-2 text-xs items-center sm:text-sm md:text-base text-gray-700 '>
   <div className='text-center' >
    <img src={assets.exchange_icon} alt="Exchange" className='w-12 m-auto mb-5' />
    <p className='font-semibold'>Easy Exchange Policy</p>
    <p className='text-gray-400'>We offer hassel free exchange policy</p>
   </div>

   <div className='text-center' >
    <img src={assets.quality_icon} alt="Exchange" className='w-12 m-auto mb-5' />
    <p className='font-bold'>7 Days Return Policy</p>
    <p>We provide 7 days free return policy</p>
   </div>


   <div className='text-center' >
    <img src={assets.support_img} alt="Exchange" className='w-12 m-auto mb-5' />
    <p className='font-bold'>Best Customer Support</p>
    <p>We provide 24/7 customer support</p>
   </div>

   
      
    </div>
  )
}

export default OurPolicy
