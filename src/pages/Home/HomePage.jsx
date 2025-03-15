import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

import lowQualityHero from "../../assets/images/hero.jpg"; // 576px version
import highQualityHero from "../../assets/images/hero2.jpg";

import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../App.css";
import { IoSearchOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import about_t1 from "../../assets/images/about_t1.jpg";
import about_t2 from "../../assets/images/about_t2.jpg";
import Topplaces from "./Topplaces";
import BusinessModel from "./BusinessModel";
import TopHotels from "./TopHotels";
import Testimonial from "./Testimonial";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [city, setCity] = useState("");
  const [startCount, setStartCount] = useState(false);
  const [imageSrc, setImageSrc] = useState(lowQualityHero);
  const [loaded, setLoaded] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload

    // Ensure city and dates are selected before searching
    if (!city || !checkInDate || !checkOutDate) {
      alert("Please select a city and dates.");
      return;
    }

    // Navigate to search page with query parameters
    navigate(
      `/search?city=${city}&checkIn=${checkInDate.toISOString()}&checkOut=${checkOutDate.toISOString()}&adults=${adults}&children=${children}`
    );
  };

  useEffect(() => {
    const img = new Image();
    img.src = highQualityHero;
    img.onload = () => {
      setImageSrc(highQualityHero);
      setLoaded(true);
    };
  }, []);

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
      <motion.section
        className="relative w-full h-[115vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Image with Zoom Animation */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
        >
          <motion.img
            src={imageSrc}
            alt="Banner"
            className="w-full h-full object-cover"
            initial={{ filter: "blur(10px)" }}
            animate={{
              filter: loaded ? "blur(0px)" : "blur(10px)",
              transition: { duration: 1, ease: "easeOut" },
            }}
          />{" "}
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90"></div>

        {/* Centered Content */}
        <div className="absolute inset-0 md:flex flex-col items-center md:mt-[25vh]">
          <motion.div
            className="items-center gap-y-5 -space-y-3 flex flex-col mb-10 mt-[10vh] md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Star Ratings */}
            <motion.ul
              className="flex space-x-1 text-yellow-500"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {Array(5).fill(<FaStar />)}
            </motion.ul>

            {/* Main Heading */}
            <h1 className="text-5xl text-center md:text-6xl jost-bold text-white mb-4">
              Welcome to HotelNow.
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-lg jost-regular text-white">
              Find the perfect hotel for your stay.
            </p>
          </motion.div>

          {/* Search Form Animation */}
          <motion.div
            className="bg-white/10 p-2 md:rounded-full rounded-lg mt-5 w-full md:w-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <form
              onSubmit={handleSearch}
              className="bg-white px-7 py-4 shadow-lg rounded-lg md:rounded-full flex flex-col md:flex-row flex-wrap items-center justify-between gap-4 md:gap-6 w-full"
            >
              {/* City Selection */}
              <div className="flex flex-col w-full md:w-auto">
                <label className="text-gray-700 ml-1 jost-light">City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full md:w-40 px-3 py-2 border border-gray-200 rounded-xl text-gray-500 bg-[#ECFAFB] outline-none jost-light"
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
                <label className="text-gray-700 jost-light">Check-in</label>
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  placeholderText="Select date"
                  className="w-full md:w-36 px-3 py-2 jost-light border border-gray-200 rounded-xl text-gray-500 bg-[#ECFAFB] outline-none"
                  dateFormat="dd/MM/yyyy"
                />
              </div>

              {/* Check-out Date */}
              <div className="flex flex-col w-full md:w-auto">
                <label className="text-gray-700 jost-light">Check-out</label>
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  placeholderText="Select date"
                  className="w-full md:w-36 px-3 py-2 jost-light border border-gray-200 rounded-xl text-gray-500 bg-[#ECFAFB] outline-none"
                  dateFormat="dd/MM/yyyy"
                />
              </div>

              {/* Adults & Children */}
              <div className="flex w-full md:w-auto gap-4">
                <div className="flex flex-col w-1/2 md:w-auto">
                  <label className="text-gray-700 jost-light">Adults</label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-full md:w-16 px-3 py-2 border border-gray-200 rounded-xl text-gray-500 bg-[#ECFAFB] outline-none jost-light"
                  >
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col w-1/2 md:w-auto">
                  <label className="text-gray-700 jost-light">Children</label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    className="w-full md:w-16 px-3 py-2  jost-light border border-gray-200 rounded-xl text-gray-500 bg-[#ECFAFB] outline-none"
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
              <button
                type="submit"
                className="bg-[#3b61dd] flex items-center hover:bg-blue-600 text-white md:py-5 py-3 px-5 rounded-full transition duration-300"
              >
                <IoSearchOutline size={24} />
                <span className="ml-2 md:hidden">Search</span>
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>

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
        <div className="max-w-[1150px] w-full">
          <motion.div
            className="bg-white p-5 md:mt-36 mt-52 mb-20 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* First Row */}
            <div className="flex flex-col md:flex-row items-center">
              <motion.img
                src={about_t1}
                alt="Luxury Stay"
                className="w-full md:w-1/2 md:rounded-tl-xl object-cover"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <motion.div
                className="md:p-7 mb-7 md:mb-0 p-3 space-y-3 md:text-left"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h1 className="text-2xl jost-bold text-gray-800">
                  Experience Luxury & Comfort
                </h1>
                <p className="text-gray-700 jost-regular">
                  Enjoy world-class stays at top-rated hotels. Whether for
                  business or leisure, we provide the finest accommodations with
                  top-tier services.
                </p>
                <motion.button
                  className="bg-[#3b61dd] hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300 jost-light"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Hotels
                </motion.button>
              </motion.div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col-reverse md:flex-row items-center">
              <motion.div
                className="md:p-7 p-3 space-y-3 md:text-left"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h1 className="text-2xl jost-bold text-gray-800">
                  Hassle-Free Hotel Booking
                </h1>
                <p className="text-gray-700 jost-regular">
                  Book your stay with ease and confidence. Choose from a wide
                  range of hotels, compare prices, and secure the best deals—all
                  in one place.
                </p>
                <motion.button
                  className="bg-[#3b61dd] hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300 jost-light"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your Stay
                </motion.button>
              </motion.div>
              <motion.img
                src={about_t2}
                alt="Easy Booking"
                className="w-full md:w-1/2 rounded-br-xl object-cover"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
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
