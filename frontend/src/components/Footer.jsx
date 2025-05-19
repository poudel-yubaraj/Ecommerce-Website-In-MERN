import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40  text-small">
      <div>
        <img src={assets.logo} alt="logo" className="w-32 mb-5" />
        <p className="w-full md:w-2/3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa minus
          quisquam facilis voluptatibus tempore sint sed! Eum quam consequuntur
          obcaecati vel accusantium velit dignissimos minima perspiciatis?
          Cupiditate rem consectetur doloremque?
        </p>
      </div>

      <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>

      <div>
        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>+1-000-000-0000</li>
          <li>Abc@gmail.com</li>
          <li>
            {" "}
            <Link to="https://chatgpt.com/c/6829372c-4b84-8012-b6fc-a3f8992eb147">
              Instagram
            </Link>
          </li>
        </ul>
      </div>
    </div>
<div className='py-5'>
  <hr className='w-full h-0.5 bg-gray-300 border-0' />
  <p className='pt-5 text-sm text-center text-gray-600'>
    © 2025 Yubaraj Poudel – All Rights Reserved.
  </p>
</div>

    
    </>
  );
};

export default Footer;
