import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    setBestSeller(
      products.filter((product) => product.bestseller === true).slice(0, 5)
    );
  }, []);
  console.log(bestSeller);
  return (
    <div className="py-1">
      <div className="text-center py-2 text-3xl">
        <Title text1="BEST" text2="SELLER" />
        <p className="w-3/4 m-auto  text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          molestias neque.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-2">
        {bestSeller.map((item, index) => {
          return (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSeller;
