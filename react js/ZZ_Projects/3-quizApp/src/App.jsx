import React, { useState } from "react";
import { data } from "./assets/data.js";
function App() {
  let [index, setIndex] = useState(0);
  let [content, setContent] = useState(data[index]);
  let [score , setScore] = useState(0);
  let [showResult , setShowResult] = useState(false)

  // play again button 
  const playAgain = ()=>{
    setIndex(0)
    setContent(data[index])
    setScore(0)
    setShowResult(false)
  }


  // check Ans function
  const checkAns = (liNo) => {
        
    
      if(content.ans === liNo){
          setScore(++score)
        }
    

        if(index!= data.length-1){
                  setIndex(++index)
              setContent(data[index])
              // setIncreaseScore(false)
        }
        else{
          setShowResult(true)
        }

  };

  // next button function
  // const next = () => {
  //   setIndex(++index)
  // }; 
      
  return (
    <main className="bg-slate-800  w-full min-h-[100vh] ">
      {/* container or First screen page */}
      <div className="w-full h-screen flex items-center justify-center ">
        {/* quizBox */}
        <div className="bg-gray-400  h-auto w-[50%] rounded-sm">
          <h1 className="text-4xl p-2 text-black">Quiz App</h1>

          {/* horizontal line  */}
          <hr className=" mx-2" />

          {showResult ? <>You Scored {score} out of {data.length}  

          <button onClick={playAgain} className="text-2xl bg-lime-400  hover:bg-green-200 rounded-lg p-2 ml-10 m-2">Play again</button>
          </> : <>
          {/* Question  */}
          <h2 className="flex items-center  bg-gray-300 h-14 m-2 p-2 font-bold">
            {index+1}. {content.question}
          </h2>

          {/* options for answers  */}
          <ul>
            <li
              onClick={()=>{
                checkAns(1)
              }}
              className="flex items-center hover:bg-slate-300 border-black border h-14 m-2 p-2 hover:bg-gray-400"
            >
              {content.option1}
            </li>{" "}
            <li
              onClick={()=>{
                checkAns(2)
              }}
              className="flex items-center hover:bg-slate-300 border-black border h-14 m-2 p-2 hover:bg-gray-400"
            >
              {content.option2}
            </li>{" "}
            <li
              onClick={()=>{
                checkAns(3)
              }}
              className="flex items-center hover:bg-slate-300 border-black border h-14 m-2 p-2 hover:bg-gray-400"
            >
              {content.option3}
            </li>{" "}
            <li
              onClick={()=>{
                checkAns(4)
              }}
              className="flex items-center hover:bg-slate-300 border-black border h-14 m-2 p-2 hover:bg-gray-400"
            >
              {content.option4}
            </li>
          </ul>

          {/* next button   */}
          {/* <div onClick={next} className="flex items-center justify-center">
            <button className="text-2xl bg-lime-400  hover:bg-green-200 rounded-lg p-2">
              Next Question
            </button>
          </div> */}

          {/* page number  */}
          <div className="flex items-center justify-center m-2 p-2 bg-red-300 font-bold text-lg">
            {index + 1} out of {data.length} Question
          </div>
          </>}
             




          





        </div>
      </div>
    </main>
  );
}

export default App;
