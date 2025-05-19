import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from '../components/ProductItem'
const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const[filterProducts, setFilterProducts]= useState([]);

  useEffect(()=>{
    setFilterProducts(products);
  },[])
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/*filtering option*/}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 "
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>

        {/* Category Filter */}

        <div
          className={`border border-gray-300 pl-5 py-4 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="font-medium text-sm mb-3 ">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 ">
              <input
                className="w-4 h-4 transition ease-in-out"
                type="checkbox"
                value={"Men"}
              />
              Men
            </p>
            <p className="flex gap-2 ">
              <input
                className="w-4 h-4  transition ease-in-out"
                type="checkbox"
                value={"Women"}
              />
              Women
            </p>
            <p className="flex gap-2 ">
              <input
                className="w-4 h-4 accent-gray-500 border-gray-300 rounded cursor-pointer"
                type="checkbox"
                value={"Kid"}
              />
              Kid
            </p>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-4 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="font-medium text-sm mb-3 ">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 ">
              <input
                className="w-4 h-4 transition ease-in-out"
                type="checkbox"
                value={"Topwear"}
              />
              Topwear
            </p>
            <p className="flex gap-2 ">
              <input
                className="w-4 h-4  transition ease-in-out"
                type="checkbox"
                value={"Bottomwear"}
              />
              Bottomwear
            </p>
            <p className="flex gap-2 ">
              <input
                className="w-4 h-4 accent-gray-500 border-gray-300 rounded cursor-pointer"
                type="checkbox"
                value={"Winterwear"}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side  */}
      <div className="flex-1">
        <div className="flex flex-row justify-between items-center text-base sm:text-2xl mb-6 gap-4 sm:gap-0">
          {/* Title */}
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/* Sort Dropdown */}
          <select className="border border-gray-300 text-sm sm:text-base px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
      

{/* mapping the item */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {filterProducts.map((item,index)=>{
            return <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          })}
      </div>
      </div>
    </div>
  );
};

export default Collection;
