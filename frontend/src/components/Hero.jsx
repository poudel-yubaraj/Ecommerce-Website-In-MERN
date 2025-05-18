


import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row border border-gray-300 m-2">
      
      {/* Left side - Text */}
      <div className="flex flex-col justify-center items-center px-10 py-16 w-full lg:w-1/2 bg-white gap-4">
        <div className="flex items-center gap-3 text-sm tracking-wider text-gray-700">
          <hr className="w-10 border border-black" />
          <span className="uppercase">OUR BESTSELLERS</span>
        </div>

        <h1 className="text-5xl font-semibold text-gray-800">Latest Arrivals</h1>

        <div className="flex items-center gap-3 mt-3 text-sm font-semibold tracking-wider cursor-pointer">
          <span>SHOP  NOW</span>
          <hr className="w-10 border border-black" />
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-full lg:w-1/2 bg-pink-100 flex justify-center items-center">
        <img src={assets.hero_img} alt="Hero" className="object-cover w-full h-full max-h-[500px]" />
      </div>
    </div>
  )
}

export default Hero
