import React from "react";
import { FaCloudSun } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";

function Navbar() {
  return (
    <div className="hidden sm:flex items-center justify-between w-full py-4 px-4 sm:px-8">
      {/* WeatherPulse Logo */}
      <div className="flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-md shadow-lg">
        <FaCloudSun className="text-yellow-400 text-lg sm:text-xl" />
        <h1 className="text-white font-semibold text-lg sm:text-xl tracking-wider">
          WeatherPulse
        </h1>
      </div>
      
      {/* Open Weather API Logo */}
      <div className="flex items-center gap-2">
        <AiOutlineApi className="text-yellow-400 text-lg sm:text-xl" />
        <h1 className="text-white font-semibold text-lg sm:text-xl tracking-wider">
          Open Weather API
        </h1>
      </div>
    </div>
  );
}

export default Navbar;