import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext"; // ✅ Correct
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext); // ✅ Correct
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const[size , setSize] = useState('');
  const fetchProductData = async () => {
    // console.log(productId);
    products.map((item)=>{
      if(item._id === productId){
          setProductData(item);
      // console.log(productData);
      setImage(item.image[0]);
      // console.log(image)
      }
       
    })
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? 
  <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
    {/* productData */}
   <div className="flex gap-12 sm:gap-12  flex-col sm:flex-row">
    {/* product images */}
     <div className=" flex-1  flex flex-col-reverse gap-3 sm:flex-row">
      <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
          {
            productData.image.map((item, index)=> {
             return <img onClick={()=>setImage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt="image" />
            })
          }
      </div>
        <div className="w-full sm:w-[80%]">
          <img className="w-full h-auto" src={image} />
        </div>
     </div>
      {/* -------------product info------------ */}
      <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
               <img src={assets.star_icon} alt="" className="w-3 5" />
               <img src={assets.star_icon} alt="" className="w-3 5" />
               <img src={assets.star_icon} alt="" className="w-3 5" />
               <img src={assets.star_icon} alt="" className="w-3 5" />
               <img src={assets.dull_icon} alt="" className="w-3 5" />
               <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-4" >
              {productData.sizes.map((item, index)=>{
                return <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item=== size ? 'border-orange-500':'bg-gray-100'}`} key={index} >{item}</button>
              })}
            </div>
          </div>
        <button className="bg-black text-white px-8 py-3 active:bg-gray-700">ADD TO CART</button>
        <hr className="mt-8 sm:w-4/5" />
        <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
        </div>
      </div>
   </div>
    {/* ---------Description and Review Section---------------------- */}
    <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-small">Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus impedit dignissimos quaerat voluptas cupiditate doloremque perspiciatis animi modi, molestiae magni tempore, quam quibusdam numquam incidunt suscipit quasi inventore et.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate velit deleniti rem veniam maiores aliquid possimus aperiam. Deleniti iste laborum ducimus aperiam doloremque! Fuga dolores atque eligendi adipisci, nemo nobis?</p>
        </div>
    </div>
   
   {/* display the related product */}
   <RelatedProducts category={productData.category} subCategory ={productData.subCategory}/>

  </div>
   : <div className="opacity-0"></div>;
};

export default Product;
