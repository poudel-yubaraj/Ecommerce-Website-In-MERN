import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center p-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum a fugiat explicabo iste iure, est, tenetur fuga, quis illo non nesciunt? Quo doloribus earum nobis natus et impedit, debitis consectetur?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nobis neque numquam odio, corporis incidunt unde repellendus quae distinctio error saepe ad at eligendi nihil ab non maxime ipsum voluptatibus?</p>
          </div>
        </div>
    </div>
  )
}

export default About
