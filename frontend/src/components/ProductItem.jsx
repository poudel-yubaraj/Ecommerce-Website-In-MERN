import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';

const ProductItem = ({id, name, image , price}) => {
    const{currency}= useContext(ShopContext);
    
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
     <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="image" />
    </div>
  
    <p className='pt-3 pb-1 text-sm'>{name}</p>
    <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
   
  )
}

export default ProductItem
