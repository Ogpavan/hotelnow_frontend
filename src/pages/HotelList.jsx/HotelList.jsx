import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function HotelList() {
  const location = useLocation();
  const city = location.state;

  // Dummy hotel data (replace with API call)
  const hotels = [
    { name: "Luxury Stay", rating: 4.5 },
    { name: "Comfort Inn", rating: 4.0 },
    { name: "Budget Hotel", rating: 3.8 },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="relative min-h-screen flex flex-col items-center p-6 text-white"
      style={{
        backgroundImage: `url(${city.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        className="relative z-10 max-w-4xl w-full mt-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl jost-bold text-center ">
          Hotels in {city.name}
        </h1>
        <p className="text-center text-lg mb-4 jost-light">
          {city.description}
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {hotels.map((hotel, index) => (
            <motion.div
              key={index}
              className="bg-white text-black p-4 rounded-xl shadow-lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <img
                src={city.image}
                alt={hotel.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl jost-bold">{hotel.name}</h2>
              <p className="text-gray-600 jost-regular">
                Rating: {hotel.rating} ⭐
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HotelList;
