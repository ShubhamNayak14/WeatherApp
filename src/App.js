import "./App.css";
import { useEffect, useState } from "react";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import Topbutton from "./Componets/Topbutton";
import Input from "./Componets/Input";
import TimeandLocation from "./Componets/TimeandLocation";
import TemperatureandDetails from "./Componets/TemperatureandDetails";
import Forecast from "./Componets/Forecast";
import getFormattedWeatherData from "./Services/weatherservice";
import footer from "./Componets/footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function App() {
  const [query, setQuery] = useState({ q: "bally" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);

    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
      setWeather(data);
    });
    // console.log(data);
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700";
    const threshold = units === "matric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-600 to-blue-700";
    return "from-yellow-600 to-orange-700";
  };
  return (
    <>
      <div
        className={`max-auto  py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 flex flex-col items-center justify-center ${formatBackground()}`}
      >
        <Input setQuery={setQuery} setUnits={setUnits} />
        <div className="upper-layer-nav flex flex-col items-center justify-center my-2">
          <Topbutton setQuery={setQuery} />
        </div>

        {weather && (
          <div className="upper-layer flex flex-col items-center justify-center">
            <TimeandLocation weather={weather} />
            <TemperatureandDetails weather={weather} units={units} />
            <div className="upper-layer-box flex flex-col items-center justify-center">
              <Forecast title="3 Hour step Forecast" data={weather.hourly} />
            </div>
            <div className="upper-layer-box flex flex-col items-center justify-center">
              <Forecast title="Daily Forecast" data={weather.daily} />
            </div>
            <footer />
          </div>
        )}
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={true}
          theme="colored"
        />
      </div>
    </>
  );
}

export default App;
