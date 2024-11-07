import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const TemperatureandDetails = ({
  weather: {
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
  },
  units,
}) => {
  const verticalDetails = [
    {
      id: 1,
      icon: UilTemperature,
      title: "Real Feel",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      icon: UilTear,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      icon: UilWind,
      title: "Wind",
      value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s"}`,
    },
  ];

  const HorizontalDetails = [
    {
      id: 1,
      icon: UilSun,
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 2,
      icon: UilSunset,
      title: "Sunset",
      value: sunset,
    },
    {
      id: 3,
      icon: UilArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,
      icon: UilArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}°`,
    },
  ];

  return (
    <div className="w-3/4">
      <div className="flex items-center justify-center py-6 text-cyan-300 text-xl">
        <p>{details}</p>
      </div>
      <div className="flex flex-row  items-center justify-between py-3 text-white">
        <img src={icon} alt="weather" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          {verticalDetails.map(({ id, icon, title, value }) => (
            <div
              key={id}
              className="flex font-light text-sm justify-center items-center"
            >
              <icon size={18} className="mr-1" />
              {`${title}:`}
              <span className="font-medium ml-1">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-center items-center space-x-2 text-white text-sm py-3">
        {HorizontalDetails.map(({ id, icon, title, value }) => (
          <div className="flex" key={id}>
            <icon />
            <p className="font-light">
              {`${title}:`} <span className="font-medium ml-1">{value}</span>
            </p>
          </div>
        ))}
        {/* <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:45 PM</span>
        </p>
        <p className="text-white">|</p>
        <UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1">19:45</span>
        </p>
        <p className="text-white">|</p>
        <UilArrowUp />
        <p className="font-light">
          High: <span className="font-medium ml-1">45&deg;</span>
        </p>
        <p className="text-white">|</p>
        <UilArrowDown />
        <p className="font-light">
          Low: <span className="font-medium ml-1">35&deg;</span>
        </p> */}
      </div>
    </div>
  );
};

export default TemperatureandDetails;
