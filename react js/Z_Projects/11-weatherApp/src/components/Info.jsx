import { React, useRef, useState , useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const Info = () => {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  // const [error , setError] = useState()
  let cityInputRef = useRef("");

  const API_KEY = "f617e24e9fa3215e4aa0836f83573c19";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  // if data comes then code executes
  // if not then a alert pops up

  // function to get the city from the input box
  const getResult = () => {
    let location = cityInputRef.current.value;
    setCity(location);
    // fetchData();
  };

  // function to fetch the api url
  const fetchData = async () => {
    try {
      let response = await fetch(url);
      let output = await response.json();
      console.log(output);
      if (response.ok) {
        setWeather(output);
        setError("");
      } else {
        setError("no data found");
      }
    } catch (error) {
      alert("inside catch");
    }
  };

    useEffect((city)=>{
      if(city)
      fetchData()
    } , [city])


  return (
    <div>
      {/* heading  */}
      <div className="font-bold text-3xl">
        <h2>Enter the city name</h2>
      </div>

      <div>
        <input
          className="text-3xl"
          type="text"
          placeholder="city name"
          ref={cityInputRef}
        />
        <button className="text-3xl" onClick={getResult}>
          <CiSearch />
        </button>
      </div>

      {/* if user enters a wrong city name or empty the execute this code  */}

      {error ? <p>Not a valid city. try again</p> : null}

      {weather ? (
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />

          <div>{weather.weather[0].description}</div>

          <div>{weather.main.temp}*C</div>

          <div className="flex items-center">
            <FaLocationDot /> {weather.name} , {weather.sys.country}
          </div>
        </div>
      ) : null}

      <div></div>
    </div>
  );
};

export default Info;
