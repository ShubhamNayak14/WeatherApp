import React from "react";

const Forecast = ({ title, data }) => {
  return (
    <div className="w-full px-4 sm:px-6 mx-auto max-w-4xl mt-6 sm:mt-8">
      {/* Section Title */}
      <div className="flex items-center justify-start mb-2 px-2">
        <p className="font-medium uppercase text-white tracking-wide text-sm sm:text-base">
          {title}
        </p>
      </div>

      <hr className="border-white/20 mb-4 mx-2" />

      {/* Forecast Cards - Responsive grid */}
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-xl sm:rounded-full px-3 py-2 sm:px-4 sm:py-3 w-full hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <p className="text-xs sm:text-sm text-white/70 whitespace-nowrap">
              {d.title}
            </p>
            <img
              src={d.icon}
              alt="weather icon"
              className="w-8 h-8 sm:w-10 sm:h-10 my-1 drop-shadow"
              onError={(e) => {
                e.target.style.display = 'none'; // Hide if image fails to load
              }}
            />
            <p className="text-white font-semibold text-base sm:text-lg">
              {`${d.temp.toFixed()}°`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;