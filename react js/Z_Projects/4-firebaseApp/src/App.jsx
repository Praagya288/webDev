import "./App.css";
import NavBar from "./components/NavBar";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import {collection} from 'firebase/firestore'

function App() {


  return (
    <div className="max-w-[370px] mx-auto px-4">
      <NavBar />

     <div className="flex gap-2">
       {/* input text field area  */}
       <div className="flex relative items-center flex-grow ">
        <IoIosSearch className="text-white text-3xl absolute ml-1 " />

        <input
          type="text"
          className="bg-transparent border  border-white rounded-md  flex-grow text-white pl-9 h-10  "
        />
      </div>
      

     
      <FaPlus className="text-4xl text-white cursor-pointer " />
    

     </div>

    </div>
  );
}

export default App;
