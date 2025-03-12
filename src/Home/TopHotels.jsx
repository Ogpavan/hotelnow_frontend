import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

const hotels = [
  {
    name: "The Grand Hotel",
    location: "New York, USA",
    rating: 4.8,
    image:
      "https://r1imghtlak.mmtcdn.com/af3e4f1844b111eaba390242ac110004.jpg?&output-quality=75&downsize=243:162&output-format=jpg",
    description: "Luxury stay with world-class amenities and a rooftop pool.",
  },
  {
    name: "Seaside Resort",
    location: "Malibu, California",
    rating: 4.7,
    image:
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202009010926033242-6e4f63922a1511edb2a00a58a9feac02.jpg?&output-quality=75&downsize=243:162&output-format=jpg",
    description: "Relax by the beach with stunning ocean views.",
  },
  {
    name: "Mountain Retreat",
    location: "Aspen, Colorado",
    rating: 4.9,
    image:
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/20140420144648835-e78500ea698f11ee90a30a58a9feac02.jpg?&output-quality=75&downsize=243:162&output-format=jpg",
    description: "Experience tranquility in the heart of the mountains.",
  },
  {
    name: "City Lights Hotel",
    location: "Tokyo, Japan",
    rating: 4.6,
    image:
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201412311314381986-e9bad9f0669311e58aa3daf4768ad8d9.jpg?&output-quality=75&downsize=243:162&output-format=jpg",
    description: "Modern hotel in the city center with skyline views.",
  },
];

export default function TopHotels() {
  return (
    <div className="flex justify-center py-8 px-4 md:px-8">
      <div className="w-full max-w-6xl">
        <h1 className="text-2xl sm:text-3xl jost-bold text-gray-800 text-center mb-6">
          Top Hotels to Visit
          <p className="text-gray-600 jost-regular text-sm mt-1">
            Find the best place to stay!
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
          {hotels.map((hotel, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl shadow-lg overflow-hidden bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg jost-regular text-gray-900">
                    {hotel.name}
                  </h3>
                  <p className="text-sm text-gray-500 jost-light">
                    {hotel.location}
                  </p>
                  <div className="flex items-center mt-2">
                    <Star className="text-yellow-500 w-4 h-4" />
                    <span className="ml-1 text-sm font-medium text-gray-700">
                      {hotel.rating}
                    </span>
                  </div>
                  <p className="text-sm  mt-2 text-gray-600 jost-regular">
                    {hotel.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
