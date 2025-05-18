import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const{products}= useContext(ShopContext);
    const [latestProducts, setLatestProduct]= useState([]);
    console.log(products);
      useEffect(()=>{
          setLatestProduct(products.slice(0,10))
      },[])
   
    
  return (
    <div className='my-1' >
        <div className='text-center py-2 text-3xl'>
            <Title text1={'LATEST '} text2={'COLLECTION'}/>
            <p className='w-3/4  m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor  Facere, nulla. Ab molestiasreiciendis rem porro.</p>
        </div>
        
  {/* Rendering Products */}
  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-2'>
  {latestProducts.map(( item, index)=>{
     return <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
  })}
  </div>
    </div>
  )
}

export default LatestCollection
