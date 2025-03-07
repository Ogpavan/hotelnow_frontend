import React from "react";

function TopHotels() {
  const hotels = [
    {
      id: 1,
      name: "Cocoon Hotel",
      location: "Pune",
      ratings: 4.5,
      image:
        "https://rukmini-ct.flixcart.com/w_411,h_411,f_auto,q_auto,c_fill,e_sharpen:80,g_auto,fl_progressive,dpr_2/offermgmt-prod/offermgmt/images/banner/cocoon_h.jpg",
    },
    {
      id: 2,
      name: "Country Inn",
      location: "Agra",
      ratings: 4.8,
      image:
        "https://rukmini-ct.flixcart.com/w_411,h_411,f_auto,q_auto,c_fill,e_sharpen:80,g_auto,fl_progressive,dpr_2/offermgmt-prod/offermgmt/images/banner/Country_Inn_H.jpg",
    },
    {
      id: 3,
      name: "The Taj",
      location: "Jaipur",
      ratings: 4.7,
      image:
        "https://rukmini-ct.flixcart.com/w_411,h_411,f_auto,q_auto,c_fill,e_sharpen:80,g_auto,fl_progressive,dpr_2/offermgmt-prod/offermgmt/images/banner/Radisson_H.jpg",
    },
    {
      id: 4,
      name: "The Taj",
      location: "Jaipur",
      ratings: 4.7,
      image:
        "https://rukmini-ct.flixcart.com/w_411,h_411,f_auto,q_auto,c_fill,e_sharpen:80,g_auto,fl_progressive,dpr_2/offermgmt-prod/offermgmt/images/banner/Radisson_H.jpg",
    },
    {
      id: 5,
      name: "The Taj",
      location: "Jaipur",
      ratings: 4.7,
      image:
        "https://rukmini-ct.flixcart.com/w_411,h_411,f_auto,q_auto,c_fill,e_sharpen:80,g_auto,fl_progressive,dpr_2/offermgmt-prod/offermgmt/images/banner/Radisson_H.jpg",
    },
    {
      id: 6,
      name: "The Taj",
      location: "Jaipur",
      ratings: 4.7,
      image:
        "https://rukmini-ct.flixcart.com/w_411,h_411,f_auto,q_auto,c_fill,e_sharpen:80,g_auto,fl_progressive,dpr_2/offermgmt-prod/offermgmt/images/banner/Radisson_H.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 flex flex-col items-center  py-20 justify-center ">
      <h1 className="md:text-4xl text-xl font-bold  playfair_heading text-gray-800">
        Top hotels with great deals
      </h1>
      <p
        className="
       mukta_mahee pb-6 text-center"
      >
        Choose from a wide range of top-rated hotels
      </p>
      <div className="flex flex-wrap justify-center  max-w-[1200px]">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="flex flex-col md:flex-row  bg-white rounded-xl   m-4 shadow-md"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="rounded-xl md:w-[200px]  object-cover"
            />
            <div className="p-4">
              <h2 className="text-md font-semibold mukta_mahee_bold">
                {hotel.name}
              </h2>
              <p className="text-sm mukta_mahee"> {hotel.location}</p>
              <p className="text-sm mukta_mahee text-gray-600 mt-4 flex flex-col">
                Ratings: {hotel.ratings}
                <span className="text-yellow-500">⭐⭐⭐⭐</span>
              </p>
              <button className=" border border-gray-800 px-2 py-1 mt-4 text-sm  rounded-full mukta_mahee ">
                More details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopHotels;
