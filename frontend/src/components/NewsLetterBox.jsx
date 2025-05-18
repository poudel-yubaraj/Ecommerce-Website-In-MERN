import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='text-center p-6'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-500 mt-2 mb-2'>Lorem ip quidem tenetllat labore praesentium deserunt?</p>
        <form onSubmit={onSubmitHandler} action="" className='w-full sm:w-1/2 flex items-center justify-center m-auto gap-3'>
            <input type="text" placeholder='Your Email' className=' h-11 border-collapse w-full outline-none  sm:flex-1 text-gray-800 ' required/>
            <button type='submit' className='bg-black text-white text-xs p-2 rounded-sm  px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
