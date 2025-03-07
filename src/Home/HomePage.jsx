import React from "react";
import hero_2 from "../assets/images/hero_2.jpg";
import "../App.css";
import jaipur from "../assets/images/jaipur.jpg";
import srinagar from "../assets/images/srinagar.jpg";
import mumbai from "../assets/images/mumbai.jpg";
import varanasi from "../assets/images/varanashi.jpg";
import kochi from "../assets/images/kochi.jpg";
import agra from "../assets/images/agra.jpg";
import udaipur from "../assets/images/udaipur.jpg";
import bengaluru from "../assets/images/bengaluru.jpg";

import Testamonial from "./Testamonial.jsx";
import Qna from "./qna.jsx";
import TopHotels from "./TopHotels.jsx";

const cities = [
  {
    name: "Jaipur",
    details:
      "The city that never sleeps, full of skyscrapers and vibrant nightlife.",
    image: jaipur,
  },
  {
    name: "Srinagar",
    details:
      "The entertainment capital of the world, known for Hollywood and beaches.",
    image: srinagar,
  },
  {
    name: "Mumbai",
    details:
      "Famous for deep-dish pizza, jazz music, and stunning architecture.",
    image: mumbai,
  },
  {
    name: "Varanasi",
    details:
      "The city of love, home to the Eiffel Tower and world-class cuisine.",
    image: varanasi,
  },
  {
    name: "Kochi",
    details: "A bustling metropolis blending tradition and technology.",
    image: kochi,
  },
  {
    name: "Agra",
    details: "A bustling metropolis blending tradition and technology.",
    image: agra,
  },
  {
    name: "Udaipur",
    details: "A bustling metropolis blending tradition and technology.",
    image: udaipur,
  },
  {
    name: " Bengaluru",
    details: "A bustling metropolis blending tradition and technology.",
    image: bengaluru,
  },
];

function HomePage() {
  return (
    <div className="relative  ">
      {/* Fixed Background Image */}
      <div
        className="fixed top-0 left-0   w-full h-screen bg-cover bg-center z-[-1]"
        style={{ backgroundImage: `url(${hero_2})` }}
      ></div>

      {/* Content */}
      <div className="relative   z-10 w-full h-screen flex justify-center items-center bg-black/50 backdrop-blur-sm   ">
        <div className="flex justify-evenly items-center w-full md:flex-row flex-col">
          <div className=" flex flex-col text-center   ">
            <h1 className=" md:hidden md:text-5xl font-bold text-white playfair text-xl mt-10 md:mt-4">
              Where do you want to Stay!
            </h1>
            <h1 className="hidden md:block md:text-5xl font-bold text-white playfair">
              Where do
              <br /> you want
              <br /> to Stay!
            </h1>
            <span className="text-white mukta_mahee mt-2">
              Get the best deals for your next trip
            </span>
            <div className="md:flex gap-4 md:mt-4 hidden lg:block ">
              <button className="px-10 py-2 rounded-full bg-[#1ED760] mukta_mahee_bold text-white uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
                Call us : 91 67890-09876
              </button>
            </div>
          </div>
          <div className="  p-4 rounded-xl   md:mt-10 w-full max-w-sm  ">
            <div className="bg-[#ecf0f3] p-6 md:p-8 rounded-xl  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
              <form action="#" method="POST">
                {/* Name Input */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-700 font-semibold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    name="name"
                    className="mt-2 block w-full px-4 py-2 rounded-full bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,_-4px_-4px_8px_#ffffff] focus:outline-none"
                    required
                  />
                </div>

                {/* City Selection */}
                <div className="mb-4">
                  <label
                    htmlFor="city"
                    className="block text-sm text-gray-700 font-semibold"
                  >
                    City
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="citySearch"
                      placeholder="Search city..."
                      className="mt-2 block w-full px-4 py-2 rounded-full bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,_-4px_-4px_8px_#ffffff] focus:outline-none"
                    />
                    <select
                      id="city"
                      name="city"
                      className="absolute inset-0 w-full px-4 py-2 rounded-full bg-transparent opacity-0 focus:outline-none"
                    >
                      <option value="">Select a city</option>
                      <option value="New York">New York</option>
                      <option value="Los Angeles">Los Angeles</option>
                      <option value="Chicago">Chicago</option>
                    </select>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm text-gray-700 font-semibold"
                  >
                    Phone Number
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      id="countryCode"
                      name="countryCode"
                      placeholder="+1"
                      className="w-16 px-4 py-2 rounded-full bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,_-4px_-4px_8px_#ffffff] focus:outline-none"
                      required
                    />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="123-456-7890"
                      className="w-full px-4 py-2 rounded-full bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,_-4px_-4px_8px_#ffffff] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Date Picker */}
                <div className="mb-4">
                  <label
                    htmlFor="date"
                    className="block text-sm text-gray-700 font-semibold"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="mt-2 block w-full px-4 py-2 rounded-full bg-[#ecf0f3] shadow-[inset_4px_4px_8px_#d1d9e6,_-4px_-4px_8px_#ffffff] focus:outline-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-blue-500 shadow-[8px_8px_16px_#d1d9e6,_-8px_-8px_16px_#ffffff]  text-white font-semibold transition-transform transform hover:scale-105 hover:shadow-lg"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content - City Cards */}
      <section className="bg-white py-16 px-8 ">
        <div className="container mx-auto text-center mb-8 ">
          <h2 className="text-4xl font-bold  playfair_heading text-gray-800">
            Explore Cities
          </h2>
          <p className="mukta_mahee">
            Find the best hotel in your desired cities
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {cities.map((city, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-60 max-w-xs object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <p className="absolute bottom-0 left-0 px-2 py-1  text-white font-bold mukta_mahee_bold ">
                  {city.name}
                </p>
              </div>

              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4">
                <h3 className="text-2xl font-bold">{city.name}</h3>
                <p className="text-sm mt-2 text-center">{city.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <TopHotels />
        <Testamonial />
        <Qna />
      </section>
    </div>
  );
}

export default HomePage;
