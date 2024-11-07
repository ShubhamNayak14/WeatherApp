import React from "react";

function Topbutton({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "New Delhi",
    },
    {
      id: 2,
      title: "Mumbai",
    },
    {
      id: 3,
      title: "Pune",
    },
    {
      id: 4,
      title: "Kolkata",
    },
    {
      id: 5,
      title: "Bhopal",
    },
    {
      id: 6,
      title: "Bhubaneswar",
    },
  ];

  return (
    <>
      <div className=" w-full flex justify-center items-center">
        <div className="flex  justify-around my-2  items-center">
          {cities.map((city) => (
            <button
              key={city.id}
              className="text-white text-lg font-medium hover:bg-gray-700 px-3 py-1 rounded-full transition ease-out"
              onClick={() => setQuery({ q: city.title })}
            >
              {city.title}
            </button>
          ))}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Topbutton;
