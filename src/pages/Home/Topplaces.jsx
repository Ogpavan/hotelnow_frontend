import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import agra from "../../assets/images/agra.jpg";
import jaipur from "../../assets/images/jaipur.jpg";
import mumbai from "../../assets/images/mumbai.jpg";
import varanashi from "../../assets/images/varanashi.jpg";

const cities = [
  {
    name: "Agra",
    image: agra,
    description: "Agra is a city in Uttar Pradesh.",
    hotels: 120,
  },
  {
    name: "Jaipur",
    image: jaipur,
    description: "Jaipur is a city in Rajasthan.",
    hotels: 200,
  },
  {
    name: "Mumbai",
    image: mumbai,
    description: "Mumbai is a city in Maharashtra.",
    hotels: 350,
  },
  {
    name: "Varanasi",
    image: varanashi,
    description: "Varanasi is a city in Uttar Pradesh.",
    hotels: 80,
  },
];

function Topplaces() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setTimeout(() => {
      navigate(`/hotels/${city.name}`, { state: city });
    }, 600); // Wait for animation to finish before navigating
  };

  return (
    <div className="flex justify-center py-8 px-4 md:px-8">
      <div className="w-full max-w-5xl">
        <h1 className="text-2xl sm:text-3xl jost-bold text-gray-800 text-center mb-6">
          Top Places to Visit
          <p className="text-gray-600 text-sm mt-1 jost-light">
            Find the best places to visit
          </p>
        </h1>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="px-2"
        >
          {cities.map((city, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="relative w-full h-80 sm:h-96 overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => handleCityClick(city)}
                initial={{ scale: 1, opacity: 1 }}
                animate={
                  selectedCity?.name === city.name
                    ? { scale: 1.3, rotateY: 15, opacity: 0, perspective: 1000 }
                    : {}
                }
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-black/40 text-white p-4">
                  <h3 className="text-lg sm:text-xl font-bold">{city.name}</h3>
                  <p className="text-xs sm:text-sm">{city.description}</p>
                  <p className="text-xs mt-1">
                    Hotels Available: {city.hotels}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Topplaces;
