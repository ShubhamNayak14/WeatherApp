import React, { useState } from "react";
import { UilSearchAlt, UilLocationPoint } from "@iconscout/react-unicons";

function Input({ setQuery, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handlelocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  return (
    <>
      <div className="  w-3/4 shadow-xl rounded-xl bg-[#5a96bf] sticky top-6 z-40 ">
        <div className=" flex flex-row w-full  justify-end my-2">
          <div className="flex flex-row w-2/4 items-center  space-x-4">
            <p className="flex flex-row w-1/4  text-white font-bold items-start">
              Weather
            </p>
            <input
              value={city}
              onChange={(e) => setCity(e.currentTarget.value)}
              type="text"
              placeholder="Search for city..."
              className="text-l font-200 p-2 w-3/4 shadow-xl rounded-xl focus:outline-none capitalize placeholder:lowercase"
            />
            <UilSearchAlt
              size={30}
              className="text-white cursor-pointer mx-1 transition ease-linear hover:scale-125"
              onClick={handleSearchClick}
            />
            <UilLocationPoint
              size={30}
              className="text-white cursor-pointer transition ease-out hover:scale-125"
              onClick={handlelocationClick}
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-row justify-end my-4">
        <button
          className="text-white font-xl font-light transition ease-out hover:scale-125"
          onClick={() => setUnits("metric")}
        >
          &deg;C
        </button>
        <p className="text-white mx-1 font-light">|</p>
        <button
          className="text-white font-xl font-light  ease-out hover:scale-125"
          onClick={() => setUnits("imperial")}
        >
          &deg;F
        </button>
      </div>
    </>
  );
}

export default Input;
