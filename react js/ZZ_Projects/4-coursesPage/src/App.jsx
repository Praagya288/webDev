import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Buttons from "./components/Buttons";
import Info from "./components/Info";
import data from "./assets/data.js";

function App() {
  const [content, setContent] = useState(data);

  const handleContent = (text) => {
    console.log("handle content function is clicked");

    const newData = data.filter((part) => {
      return part.category === text;
    });
  setContent(newData)
};

const handleAllContent = ()=>{
    setContent(data)
}

  return (
    // parent div
    <div className="min-h-screen w-full bg-blue-950">


      {/* Navigation Bar */}
      <Navbar />



      {/* course filteration using buttons */}
      <div className="flex items-center justify-center gap-5 p-4">
        <Buttons handleContent={handleAllContent} text={"All"} />
        <Buttons handleContent={handleContent} text={"Development"} />
        <Buttons handleContent={handleContent} text={"Business"} />
        <Buttons handleContent={handleContent} text={"Design"} />
        <Buttons handleContent={handleContent} text={"Lifestyle"} />
      </div>

      {/* course details area  */}
      <div className="flex items-center justify-center">
        <Info data={content} />
      </div>
    </div>
  );
}

export default App;
