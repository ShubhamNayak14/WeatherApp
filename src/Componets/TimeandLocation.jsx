import React from "react";

const TimeandLocation = ({
  weather: { formattedLocalTime, name, country },
}) => {
  return (
    <>
      <div className="flex items-center justify-around my-6">
        <p className="text-white font-extralight text-xl">
          {/* Sunday, 22 Aug 2024 | Local Time: 14:24 */}
          {formattedLocalTime}
        </p>
      </div>
      <div className="flex items-center justify-around my-3">
        <p className="text-white font-medium text-3xl">
          {` ${name}, ${country}`}
        </p>
      </div>
    </>
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
