import React, { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef()

  // function to generate a random password 
  const passGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "123456789";
    }
    if (symbolAllowed) {
      str += "/*-%^!@)(";
    }

    for (let i = 0; i < length; i++) {
      let num = Math.floor(Math.random() * str.length);

      pass += str.charAt(num);
    }
   
    setPassword(pass);
  })
    
  
  // function to copy the password to clipboard
  const copyPassToClipboard = ()=>{
    console.log(passwordRef)
      passwordRef.current?.select();
      window.navigator.clipboard.writeText(password)
  }

  // useEffect hook to call the generate password function whenever any of the parameters is changed 
  useEffect(() => {
    passGenerator(length);
  }, [length, numberAllowed, symbolAllowed]);




  return (
  
    <main className=" h-screen w-full bg-purple-400">
      {/* NAV BAR  */}
      <Navbar />

      {/* Middle container  */}
      <div className="flex items-center justify-center ">

        <div className="container bg-blue-950 flex flex-col items-center justify-center rounded-lg max-w-md  mt-6 gap-2 ">

          {/* div containing the output area + copy button  */}
          <div className="flex items-center justify-center  w-[80%] p-2 gap-4">
             <input
            type="text"
            className="outline-none  w-[60%] text-center  font-bold  rounded-lg"
            readOnly
            value={password}
            ref={passwordRef}
            placeholder="Click on the generate button"
          />
          <button  
        
          onClick={copyPassToClipboard}
          className="text-black bg-blue-300 hover:bg-blue-500 p-1 rounded-sm font-bold">copy</button>
          </div>
         
         


          {/* length label and input area  */}
          <label htmlFor="range" className="text-white">
            Length : {length}
          </label>
          <input
            min={5}
            max={50}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            type="range"
            id="range"
          />

            {/* numbers checkbox  */}
          <div className="bg-blue-500 flex items-center justify-between p-2 w-[90%] rounded-lg m-2 ">
            <label htmlFor="checkBox1">Numbers</label>
            <input
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              type="checkbox"
              id="checkBox1"
            />
          </div>

              
              {/* special symbol symbols  */}
          <div className="bg-blue-500 flex items-center justify-between p-2 venly w-[90%] rounded-lg m-2 ">
            <label htmlFor="checkBox1"> Special characters</label>
            <input
              onChange={() => {
                setSymbolAllowed((prev) => !prev);
              }}
              type="checkbox"
              id="checkBox1"
            />
          </div>



        </div>
      </div>
    </main>
  );
}

export default App;
