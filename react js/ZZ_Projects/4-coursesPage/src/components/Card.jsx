import React, { useEffect, useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { Toaster , toast } from "sonner";

const Card = ({ id, category, title, image, description }) => {
  const [fav, setFav] = useState(false);

  // function to handle like , toaster
const handleFavs = () => {
    setFav(!fav);
    toaster(!fav)
  };
const toaster = (val)=>{
  if(val){
    toast("course added")
  }
  else{
    toast("coursr removed")
  }
}

  return (
    <div className=" relative flex flex-col h-72 w-72  rounded-md bg-blue-900 gap-2 overflow-hidden">
      <img className="h-[50%] w-full" src={image} alt="" />

      <h2 className="  bg-pink-50 rounded-lg mx-2 p-2 text-black font-bold text-pink-500">
        {title}
      </h2>

      <div className=" bg-white rounded-full w-9 h-9   flex items-center justify-center absolute  text-3xl top-28 right-3">
        <button 
        onClick={handleFavs}>
          {fav ? <FcLike /> : <FcLikePlaceholder />}
        </button>
      </div>

      <p className=" p-2  text-white">{description}</p>

      <Toaster/>
    </div>
  );
};

export default Card;
