import React from 'react'

const Title = ({text1="LATEST",text2="COLLECTION"}) => {
  return (
    <div className='flex  py-4 mt-4 justify-center font-semibold text-base items-center '>
    <h1 className='font-semibold text-base pr-2'>{text1}</h1>
    <h1>{text2}</h1>
    <hr className='w-10 ml-6 bordert-3 border-gray-900' />
    </div>
  )
}

export default Title
