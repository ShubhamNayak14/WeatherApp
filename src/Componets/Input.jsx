import React, { useState, useEffect } from "react";
import { Search, LocateFixed, Trash2 } from "lucide-react";

function Input({ setQuery, setUnits, units }) {
  const [city, setCity] = useState("");
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recentCities")) || [];
    setRecent(stored);
  }, []);

  const handleSearchClick = () => {
    if (!city.trim()) return;
    setQuery({ q: city });
    updateRecentSearches(city);
  };

  // Add this new function for handling Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setQuery({ lat: coords.latitude, lon: coords.longitude });
      });
    }
  };

  const updateRecentSearches = (city) => {
    let searches = JSON.parse(localStorage.getItem("recentCities")) || [];
    if (!searches.includes(city)) {
      searches = [city, ...searches].slice(0, 5);
      localStorage.setItem("recentCities", JSON.stringify(searches));
      setRecent(searches);
    }
  };

  const handleClearRecent = () => {
    localStorage.removeItem("recentCities");
    setRecent([]);
  };

  return (
    <>
      <div className="w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-lg mt-4 mb-6 transition-all duration-500 flex items-center gap-3">
  {/* Input Field */}
  <div className="relative flex-grow">
    <input
      value={city}
      onChange={(e) => setCity(e.target.value)}
      onKeyDown={handleKeyPress}
      type="text"
      placeholder="Search city..."
      className="w-full p-2 pl-4 pr-14 text-white placeholder:text-white/70 bg-white/20 rounded-full outline-none focus:ring-2 focus:ring-white/50 transition border border-white/30"
    />
    <Search
      size={20}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-white cursor-pointer hover:scale-110 transition"
      onClick={handleSearchClick}
    />
  </div>

  {/* Location Button */}
  <button
    onClick={handleLocationClick}
    className="p-3 rounded-full bg-blue-500/90 hover:bg-blue-600 text-white shadow-md transition backdrop-blur-sm border border-white/30"
    aria-label="Get current location"
  >
    <LocateFixed size={18} />
  </button>

  {/* Unit Toggle */}
  <div className="flex items-center gap-2 text-white font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
    <button 
      onClick={() => setUnits("metric")}
      className={`${units === "metric" ? "font-bold" : "opacity-80"} px-2 py-1 rounded-full hover:bg-white/10 transition`}
    >
      &deg;C
    </button>
    <span className="opacity-70">|</span>
    <button 
      onClick={() => setUnits("imperial")}
      className={`${units === "imperial" ? "font-bold" : "opacity-80"} px-2 py-1 rounded-full hover:bg-white/10 transition`}
    >
      &deg;F
    </button>
  </div>
</div>

      {/* Recent Searches */}
      {recent.length > 0 && (
        <div className="w-full max-w-4xl mx-auto mt-4 mb-5 px-4 text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
            <p className="text-sm text-white/60">Recent Searches:</p>
            <button
              onClick={handleClearRecent}
              className="flex items-center gap-1 text-sm text-gray-200 hover:text-red-500 bg-white/10 px-3 py-1 rounded-full transition"
            >
              <Trash2 size={14} />
              Clear
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {recent.map((city, idx) => (
              <button
                key={idx}
                onClick={() => setQuery({ q: city })}
                className="px-4 py-1 bg-white/20 hover:bg-white/30 rounded-full text-sm transition"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Input;