import React, { useEffect, useState } from "react";
import {
  FaGlobe,
  FaWind,
  FaSun,
  FaMoon,
  FaTemperatureHigh,
  FaTemperatureLow,
  FaTint,
  FaLeaf,
} from "react-icons/fa"; // Import icons

const TemperatureandDetails = ({
  weather: {
    country,
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    dt,
    timezone,
  },
  units,
}) => {
  const [rotation, setRotation] = useState(0); // State to store the current rotation

  const isCelsius = units === "metric";

  const steps = [
    {
      label: "Country",
      value: country,
      icon: FaGlobe, // Icon for Real Feel
    },
    {
      label: "Real Feel",
      value: `${feels_like.toFixed()}°`,
      icon: FaTemperatureHigh, // Icon for Real Feel
    },
    {
      label: "Humidity",
      value: `${humidity.toFixed()}%`,
      icon: FaTint, // Icon for Humidity
    },
    {
      label: "Wind",
      value: `${speed.toFixed()} ${isCelsius ? "km/h" : "m/s"}`,
      icon: FaWind, // Icon for Wind
    },
    {
      label: "Sunrise",
      value: sunrise,
      icon: FaSun, // Icon for Sunrise
    },
    {
      label: "Sunset",
      value: sunset,
      icon: FaMoon, // Icon for Sunset
    },
    {
      label: "High",
      value: `${temp_max.toFixed()}°`,
      icon: FaTemperatureHigh, // Icon for High Temperature
    },
    {
      label: "Low",
      value: `${temp_min.toFixed()}°`,
      icon: FaTemperatureLow, // Icon for Low Temperature
    },
  ];

  useEffect(() => {
    // Calculate the local time from `dt` and `timezone`
    const localTime = new Date((dt + timezone) * 1000); // Convert to local time in ms
    const hours = localTime.getHours(); // Get the current hour (0-23)

    // Calculate the rotation angle based on the current hour
    const angle = (hours / 24) * 360; // Full rotation based on 24 hours
    setRotation(angle); // Update the rotation state
  }, [dt, timezone]);

  return (
    <div className="w-full md:w-3/4 lg:w-2/3 px-4 mt-6 flex flex-col items-center">
      {/* Central Display */}
      <div
        id="parent"
        className="relative bg-white/10 backdrop-blur-md rounded-full w-64 h-64 sm:w-56 sm:h-56 xs:w-48 xs:h-48 flex flex-col items-center justify-center shadow-xl mb-8 transition-transform duration-500 hover:scale-105 animate-fade-in"
      >
        <div
          className="absolute w-20 h-20 sm:w-16 sm:h-16 xs:w-14 xs:h-14 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white/20 shadow-md"
          style={{
            transform: `rotate(${rotation}deg) translateX(100px) rotate(-${rotation}deg)`, // Rotate the child in a circular orbit
            transition: "transform 1s ease-in-out", // Smooth transition for rotation
          }}
        >
          <img
            src={icon}
            alt="weather icon"
            className="w-12 h-12 sm:w-10 sm:h-10 xs:w-8 xs:h-8"
          />
        </div>
        <p
          className="text-6xl sm:text-5xl xs:text-4xl text-white font-bold"
          aria-label={`Temperature: ${temp.toFixed()} degrees ${
            isCelsius ? "Celsius" : "Fahrenheit"
          }`}
        >
          {temp.toFixed()}°{isCelsius ? "C" : "F"}
        </p>
        <p className="text-blue-300 text-md sm:text-sm xs:text-xs capitalize">
          {details}
        </p>
      </div>

      <div className="w-full grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8 px-4 sm:px-0">
        {steps.map(({ label, value, icon: Icon }, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 sm:gap-4 p-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md shadow-lg sm:shadow-xl transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Icon - Responsive sizing */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 text-blue-500 shadow-inner">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* Label and Value - Responsive text */}
            <div className="flex flex-col text-white">
              <span className="text-xs sm:text-sm text-white/70">{label}</span>
              <span className="text-base sm:text-lg font-semibold">
                {value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemperatureandDetails;
