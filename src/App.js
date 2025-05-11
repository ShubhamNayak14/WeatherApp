import { useEffect, useState } from "react";
import Topbutton from "./Componets/Topbutton";
import Input from "./Componets/Input";
import TimeandLocation from "./Componets/TimeandLocation";
import TemperatureandDetails from "./Componets/TemperatureandDetails";
import Forecast from "./Componets/Forecast";
import getFormattedWeatherData from "./Services/weatherservice";
import Footer from "./Componets/Footer";
import ForecastChart from "./Componets/ForecastChart";
import DailyForecastChart from "./Componets/DailyForecastChart";
import Navbar from "./Componets/Navbar";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function App() {
  const [query, setQuery] = useState({ q: "Kolkata" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  // Snackbar state
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info", // "success", "error", "warning", "info"
  });

  const showSnackbar = (message, severity = "info") => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  // Fetch weather
  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    showSnackbar(`Fetching weather data for ${cityName}`, "info");
    try {
      const data = await getFormattedWeatherData({ ...query, units });
      setWeather(data);
      showSnackbar(`Fetched weather for ${data.name}, ${data.country}`, "success");
    } catch (error) {
      showSnackbar("Failed to fetch weather data. Check API key or location.", "error");
    }
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

 const isNight = () => {
  if (!weather) return false;

  const localTime = new Date().getTime() + weather.timezone * 1000 - new Date().getTimezoneOffset() * 60000;
  const currentHour = new Date(localTime).getHours();

  const sunriseHour = new Date(weather.sunrise * 1000 + weather.timezone * 1000).getHours();
  const sunsetHour = new Date(weather.sunset * 1000 + weather.timezone * 1000).getHours();

  return currentHour < sunriseHour || currentHour >= sunsetHour;
};

const formatBackground = () => {
  if (!weather) return "from-cyan-600 to-blue-700";

  const threshold = units === "metric" ? 20 : 60;

  if (weather.temp <= threshold) {
    return isNight()
      ? "from-gray-800 to-black"
      : "from-blue-200 to-blue-700";
  } else {
    return "from-rose-500 via-orange-400 to-amber-500";

  }
};


  return (
    <>
      <div
        className={`max-auto py-5 px-4 md:px-10 bg-gradient-to-br shadow-xl shadow-gray-400 flex flex-col items-center justify-center ${formatBackground()}`}
      >
        <Navbar />
        <Input setQuery={setQuery} setUnits={setUnits} />
        <Topbutton setQuery={setQuery} />

        {weather ? (
          <>
            <TimeandLocation weather={weather} />
            <TemperatureandDetails weather={weather} units={units} />
            <Forecast title="Next 3-Hour Forecast" data={weather.hourly} />
            <ForecastChart data={weather.hourly} />
            <Forecast title="Daily Forecast" data={weather.daily} />
            <DailyForecastChart data={weather.daily} />
          </>
        ) : (
          <div className="animate-pulse text-white mt-20">
            Loading weather data...
          </div>
        )}

        <Footer />

        {/* MUI Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: "100%" }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}

export default App;
