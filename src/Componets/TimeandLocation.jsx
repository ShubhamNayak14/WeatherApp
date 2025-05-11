import React from "react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

const TimeandLocation = ({
  weather: { formattedLocalTime, name, country },
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-6 sm:mt-10 mb-4 sm:mb-5 transition-all duration-500 animate-fade-in space-y-3 sm:space-y-4 px-4 sm:px-0">
      {/* Local Time - Responsive sizing */}
      <div className="flex items-center justify-center gap-2 text-gray-100 text-base sm:text-lg md:text-xl font-light">
        <FaClock className="text-yellow-300 text-lg sm:text-xl" />
        <span className="whitespace-nowrap">{formattedLocalTime}</span>
      </div>

      {/* Location - Responsive sizing */}
      <div className="flex items-center justify-center gap-2 text-white text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide flex-wrap text-center">
        <FaMapMarkerAlt className="text-red-600 text-xl sm:text-2xl" />
        <span className="whitespace-nowrap">{`${name}, ${country}`}</span>
      </div>
    </div>
  );
};

export default TimeandLocation;

// <>
//   <div className="flex justify-around my-6">
//     <div className="flex flex-col justify-center">
//       <p className="text-white font-extrabold text-7xl">21:27</p>
//       <p className="text-white font-extralight text-xl">
//         Sunday, 22 Aug 2024
//       </p>
//     </div>

//     {/* <div className="flex items-end justify-end mx-5"> */}
//     <div className="flex flex-col items-center">
//       <UilLocationPoint size={100} className="text-white" />
//       <p className="text-white text-3xl font-medium">Bhubanewar, India</p>
//     </div>
//   </div>
// </>
