import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// this is a custom react element so it wont work
/*
const reactElement = {
  type : 'a' ,
  props : {
      href : 'https://google.com' ,
      target : '_blank' ,
  } , 
  children : 'click me to visit google'
}
*/

// this is correct syntax in which react takes an element
const correctReactElement = React.createElement( 
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google"
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
