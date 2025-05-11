import React, { useState, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Topbutton({ setQuery }) {
  const cities = [
    { id: 1, title: "New Delhi" },
    { id: 2, title: "Mumbai" },
    { id: 3, title: "Pune" },
    { id: 4, title: "Kolkata" },
    { id: 5, title: "Bhopal" },
    { id: 6, title: "Bhubaneswar" },
  ];

  const [selectedCity, setSelectedCity] = useState("");
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setQuery({ q: city });
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -container.clientWidth * 0.8 : container.clientWidth * 0.8;
      
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });

      // Check scroll position after animation completes
      setTimeout(checkScrollPosition, 300);
    }
  };

  return (
    <div className="relative w-full group">
      {/* Left scroll button */}
      <button 
        onClick={() => scroll('left')}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all duration-300 ${
          showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } sm:hidden`}
        aria-label="Scroll left"
      >
        <FiChevronLeft className="text-white text-lg" />
      </button>

      {/* Cities container */}
      <div 
        ref={scrollContainerRef}
        onScroll={checkScrollPosition}
        className="flex overflow-x-auto scrollbar-hide space-x-3 sm:space-x-4 px-2 py-2 sm:justify-center sm:flex-wrap sm:overflow-visible scroll-smooth"
      >
        {cities.map((city) => (
          <button
            key={city.id}
            onClick={() => handleCityClick(city.title)}
            className={`flex-shrink-0 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-sm sm:text-base font-medium transition-all shadow-sm whitespace-nowrap
              ${
                selectedCity === city.title
                  ? "bg-green-500 text-white scale-105 shadow-md"
                  : "bg-white/20 hover:bg-white/30 text-white hover:shadow-md"
              }`}
          >
            {city.title}
          </button>
        ))}
      </div>

      {/* Right scroll button */}
      <button 
        onClick={() => scroll('right')}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all duration-300 ${
          showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } sm:hidden`}
        aria-label="Scroll right"
      >
        <FiChevronRight className="text-white text-lg" />
      </button>

      {/* Smooth scroll styling */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scroll-smooth {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

export default Topbutton;