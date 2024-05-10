import React, { useState } from "react";

const Cards = ({ id, image, info, price, name , removeTour} ) => {
  const [readmore, setReadMore] = useState(false);
//   const description = `${info.substring(0, 10)} ...`;
const description = readmore ? info :  `${info.substring(0, 10)} ...` 
  const readmoreHandler = () => {
    setReadMore(!readmore);
  };


  return (
    <div className="card">
      <img src={image} className="image" />
      <div className="tour-info">
        <div className="tour-details">
          <div className="tour-price"></div>
          <div className="tour-name"></div>
        </div>

        <div className="tour-description">
          {description}
          <span onClick={readmoreHandler}>
            {readmore ? "Show less" : " Read more "}
          </span>
        </div>
      </div>

      <button className="btn-red"onClick={()=> removeTour(id)} > Not interested</button>
    </div>
  );
};

export default Cards;
