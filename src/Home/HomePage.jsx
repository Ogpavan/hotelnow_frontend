import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";
import { IoSearchOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import about_t1 from "../assets/images/about_t1.jpg";
import about_t2 from "../assets/images/about_t2.jpg";
import Topplaces from "./Topplaces";
import BusinessModel from "./BusinessModel";
import TopHotels from "./TopHotels";
import Testimonial from "./Testimonial";

export default function HomePage() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [city, setCity] = useState("");
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("stats-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setStartCount(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="relative w-full md:h-[900px] h-[1200px] overflow-hidden   ">
        {/* Image with Zoom Animation */}
        <div className="absolute inset-0 w-full h-full  ">
          <img
            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/img-banner-2-scaled-1-1920x1315.jpg"
            alt="Banner"
            className="w-full h-full object-cover animate-zoomInOut"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-overlay"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 md:flex flex-col items-center justify-center">
          <div className="  items-center gap-y-5 mb-10 -space-y-3 flex flex-col mt-40 md:mt-0">
            <ul className="flex space-x-1 text-yellow-500">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li></li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </ul>

            <h1 className="text-5xl text-center md:text-6xl font-bold text-white mb-4 md:jost-bold">
              Welcome to HotelNow.
            </h1>
            <p className="text-sm md:text-lg text-white jost-regular">
              Find the perfect hotel for your stay.
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white/10 p-2 md:rounded-full rounded-lg mt-5 w-full md:w-auto">
            <form
              method="GET"
              className="bg-white px-7 py-4 shadow-lg rounded-lg md:rounded-full flex flex-col md:flex-row flex-wrap items-center justify-between gap-4 md:gap-6 w-full"
            >
              {/* City Selection */}
              <div className="flex flex-col w-full md:w-auto">
                <label className="text-gray-700 ml-1">City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full md:w-40 px-3 py-2 border border-gray-200 rounded-xl text-gray-500 bg-[#ECFAFB] outline-none"
                >
                  <option value="">Select City</option>
                  <option value="new-york">New York</option>
                  <option value="los-angeles">Los Angeles</option>
                  <option value="london">London</option>
                  <option value="paris">Paris</option>
                  <option value="dubai">Dubai</option>
                </select>
              </div>

              {/* Check-in Date */}
              <div className="flex flex-col w-full md:w-auto">
                <label className="text-gray-700">Check-in</label>
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  placeholderText="Select date"
                  className="w-full md:w-36 px-3 py-2 border border-gray-200 rounded-xl text-gray-500 bg-[#ECFAFB] outline-none"
                  dateFormat="dd/MM/yyyy"
                />
              </div>

              {/* Check-out Date */}
              <div className="flex flex-col w-full md:w-auto">
                <label className="text-gray-700">Check-out</label>
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  placeholderText="Select date"
                  className="w-full md:w-36 px-3 py-2 border border-gray-200 rounded-xl text-gray-500 bg-[#ECFAFB] outline-none"
                  dateFormat="dd/MM/yyyy"
                />
              </div>

              {/* Adults & Children Selection */}
              <div className="flex w-full md:w-auto gap-4">
                {/* Adults */}
                <div className="flex flex-col w-1/2 md:w-auto">
                  <label className="text-gray-700">Adults</label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-full md:w-16 px-3 py-2 border border-gray-200 rounded-xl text-gray-500 bg-[#ECFAFB] outline-none"
                  >
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Children */}
                <div className="flex flex-col w-1/2 md:w-auto">
                  <label className="text-gray-700">Children</label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    className="w-full md:w-16 px-3 py-2 border border-gray-200 rounded-xl text-gray-500 bg-[#ECFAFB] outline-none"
                  >
                    {Array.from({ length: 6 }, (_, i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <div className="w-full md:w-auto flex justify-center">
                <button
                  type="submit"
                  className="bg-[#3b61dd] flex items-center hover:bg-blue-600 text-white md:py-5 py-3 px-5 rounded-full transition duration-300"
                >
                  <IoSearchOutline size={24} />{" "}
                  <span className="ml-2 md:hidden jost-regular">Search</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="absolute w-full flex justify-center ">
        <div
          id="stats-section"
          className="mt-[-80px] bg-white p-5 rounded-xl jost-regular text-gray-700 min-w-[75%] "
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Hotels", end: 150 },
              { title: "Total Guests", end: 5000 },
              { title: "Cities", end: 30 },
              { title: "Bookings", end: 1200 },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-[#ECFAFB] p-5 rounded-xl"
              >
                <h2
                  className="text-3xl font-bold text-gray-800"
                  style={{
                    width: "6rem",
                    textAlign: "center",
                    fontFamily: "monospace",
                  }}
                >
                  <CountUp
                    start={startCount ? 0 : null}
                    end={stat.end}
                    duration={3}
                  />
                  +
                </h2>
                <h5 className="text-lg">{stat.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ECFAFB] flex justify-center items-center px-4">
        <div className="max-w-[1100px] w-full">
          <div className="bg-white p-5 md:mt-36 mt-52 mb-20 rounded-xl">
            {/* First Row */}
            <div className="flex flex-col  md:flex-row items-center">
              <img
                src={about_t1}
                alt="Luxury Stay"
                className="w-full md:w-1/2 md:rounded-tl-xl object-cover"
              />
              <div className="md:p-7 mb-7 md:mb-0 p-3 space-y-3  md:text-left">
                <h1 className="text-2xl jost-bold text-gray-800">
                  Experience Luxury & Comfort
                </h1>
                <p className="text-gray-700 jost-regular">
                  Enjoy world-class stays at top-rated hotels. Whether for
                  business or leisure, we provide the finest accommodations with
                  top-tier services.
                </p>
                <button className="bg-[#3b61dd] hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300 jost-light">
                  Explore Hotels
                </button>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col-reverse md:flex-row items-center">
              <div className="md:p-7 p-3 space-y-3  md:text-left">
                <h1 className="text-2xl jost-bold text-gray-800">
                  Hassle-Free Hotel Booking
                </h1>
                <p className="text-gray-700 jost-regular">
                  Book your stay with ease and confidence. Choose from a wide
                  range of hotels, compare prices, and secure the best deals—all
                  in one place.
                </p>
                <button className="bg-[#3b61dd] hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300 jost-light">
                  Book Your Stay
                </button>
              </div>
              <img
                src={about_t2}
                alt="Easy Booking"
                className="w-full md:w-1/2 rounded-br-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <Topplaces />
      </section>
      <section>
        <TopHotels />
      </section>
      <section>
        <BusinessModel />
      </section>
      <section>
        <Testimonial />
      </section>
    </>
  );
}
