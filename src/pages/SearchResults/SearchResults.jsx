import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import hero from "../../assets/images/hero.jpg";
import { FaStar, FaFilter } from "react-icons/fa";

export default function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const city = queryParams.get("city");

  // Simulated search results (replace with API call)
  const hotels = [
    {
      name: "Grand Hotel",
      city: "new-york",
      price: 250,
      image: hero,
      description: "A luxury stay in the heart of New York City.",
      rating: 4.5,
    },
    {
      name: "New York Hotel",
      city: "new-york",
      price: 220,
      image: hero,
      description: "Affordable comfort with modern amenities.",
      rating: 4.2,
    },
    {
      name: "Luxury Stay",
      city: "los-angeles",
      price: 180,
      image: hero,
      description: "Experience comfort and style in LA.",
      rating: 4.8,
    },
    {
      name: "Paris Palace",
      city: "paris",
      price: 300,
      image: hero,
      description: "Stay like royalty in Paris.",
      rating: 4.7,
    },
    {
      name: "London Palace",
      city: "london",
      price: 280,
      image: hero,
      description: "Elegance and charm in London.",
      rating: 4.6,
    },
    {
      name: "Dubai Palace",
      city: "dubai",
      price: 320,
      image: hero,
      description: "Luxury and grandeur in Dubai.",
      rating: 4.9,
    },
  ];

  // Filter results based on city
  const filteredHotels = hotels.filter((hotel) => hotel.city === city);

  // Sorting state
  const [sortOption, setSortOption] = useState("");

  // Sorting function
  const sortHotels = (option) => {
    if (option === "price") {
      return [...filteredHotels].sort((a, b) => a.price - b.price);
    } else if (option === "rating") {
      return [...filteredHotels].sort((a, b) => b.rating - a.rating);
    }
    return filteredHotels;
  };

  const sortedHotels = sortHotels(sortOption);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <img
          src={hero}
          alt="Search Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Search Results</h1>
          <p className="text-xl md:text-5xl mt-3">
            {city ? `Hotels in ${city.replace("-", " ")}` : "No city selected."}
          </p>
        </div>
      </div>

      {/* Filter & Results Section */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        {filteredHotels.length > 0 ? (
          <>
            {/* Filter Button */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-sm md:text-xl jost-regular">
                Showing {filteredHotels.length} hotels -
              </h2>
              <button
                className="flex items-center gap-2 border border-gray-600 py-2 px-4 rounded-full transition duration-300 text-sm md:text-base"
                onClick={() =>
                  setSortOption(sortOption === "price" ? "rating" : "price")
                }
              >
                <FaFilter />
                {sortOption === "price" ? "Sort by Rating" : "Sort by Price"}
              </button>
            </div>

            {/* Hotel List */}
            <div className="flex flex-col gap-6">
              {sortedHotels.map((hotel, index) => (
                <div
                  key={index}
                  className="bg-white flex flex-col md:flex-row md:items-center rounded-xl shadow-lg p-4"
                >
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full md:w-40 h-40 object-cover rounded-lg"
                  />
                  <div className="md:ml-6 mt-2 md:mt-0 flex-1  md:text-left">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                      {hotel.name}
                    </h2>
                    <p className="flex  items-center text-gray-600 mt-1">
                      Rating: {hotel.rating}
                      <FaStar className="text-yellow-400 ml-1" />
                    </p>
                    <p className="text-gray-700 font-semibold mt-1">
                      ${hotel.price}/night
                    </p>
                    <p className="text-gray-600 mt-2 text-sm md:text-base">
                      {hotel.description}
                    </p>
                  </div>
                  <button className="bg-[#3b61dd] hover:bg-blue-600 text-white py-2 px-6 mt-3 md:mt-0 rounded-full transition duration-300">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-red-500 text-lg mt-6">
            No hotels found for this city.
          </p>
        )}
      </div>
    </div>
  );
}
