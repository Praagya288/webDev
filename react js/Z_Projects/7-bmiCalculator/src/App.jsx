import React from "react";
import "./App.css";
import { useState } from "react";
function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {

    e.preventDefault();


    if (weight === 0 || height === 0) {
      alert("enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

        if(bmi<25){
          setMessage('You are underweight')
        }
        else if(bmi>=25 && bmi<=30){
          setMessage('You are a health weight person')
        }
        else{
          setMessage('You are overweight')
        }



    }
  };

  let reload = ()=>{
    window.location.reload();
  }




  return (
    <>
      <div className="App">
        <div className="container">
          <h2>Bmi calculator</h2>
          <form onSubmit={calcBmi}>
            <div>
              <label>Weight in lbs</label>
              <input
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                type="text"
                placeholder="enter weight value"
                // value={weight}
              />
            </div>
            <div>
              <label>Height </label>

              <input
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
                type="text"
                placeholder="enter heigth value"
                // value={height}
              />
            </div>
            <div>
              <button className="btn" type="submit">
                Submit
              </button>
              <button
                className="btn btn-outline"
                onClick={reload}
                type="submit"
              >
                Reload
              </button>
            </div>
            <div className="center">
              <h3>Your bmi is : {bmi}</h3>
              <p> {message} </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
