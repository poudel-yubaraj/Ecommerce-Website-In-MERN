import React, { useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBar = () => {
  const { showSearch, setShowSearch, setSearch } = useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate(); // ✅ Use the hook to get navigate function


  useEffect(() => {
    // for checking purposes
      console.log(location.pathname);
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);   
        
    }
    if(showSearch==true && visible==false){
       navigate('/collection');
    }
  }, [location.pathname,showSearch]);

  return visible && showSearch ? (
    <div className="bg-gray-100 border-t border-b text-center">
      <div className="inline-flex justify-center items-center  gap-4 px-5 py-2 mx-5 my-3 rounded-full border border-gray-400 w-3/4 sm:1/2 ">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit"
        />
        <img src={assets.search_icon} alt="search-icon" className="w-4" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        alt=""
        className="inline w-3 cursor-pointer "
      />
    </div>
  ) : null;
};
// flex-1 outline-none bg-inherit text-sm' placeholder='Search here....

export default SearchBar;
