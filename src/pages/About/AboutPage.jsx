import React from "react";
import hero from "../../assets/images/hero.jpg";
import Testimonials from "../Home/Testimonial";

export default function AboutUs() {
  return (
    <div className="bg-[#ECFAFB] min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[450px] overflow-hidden">
        <img
          src={hero}
          alt="About Hotel Now"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl jost-bold">About Us</h1>
          <p className="text-xl md:text-2xl max-w-md mt-3   jost-light">
            "Your trusted companion in finding the perfect stay, anywhere in the
            world"
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="container mx-auto px-6 py-16 max-w-4xl text-center">
        <h2 className="text-4xl jost-bold text-gray-800">Our Mission</h2>
        <p className="mt-4 text-gray-600 leading-relaxed text-lg jost-regular">
          At <span className="font-semibold">Hotel Now</span>, our mission is to
          make travel easy, affordable, and memorable for everyone. We strive to
          connect travelers with the best accommodations tailored to their
          needs, ensuring a seamless booking experience that prioritizes
          comfort, quality, and affordability.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h2 className="text-4xl jost-bold text-gray-800 text-center">
          Our Story
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed text-lg jost-regular">
          It all started with three friends who loved to travel but struggled to
          find the perfect place to stay. Frustrated with high prices and
          unreliable options, they set out to create a platform that would
          change the way people experience travel. In 2015,{" "}
          <span className="font-semibold">Hotel Now</span> was born—a seamless
          way to book accommodations that suit every budget and style.
        </p>
      </div>

      {/* Founders Section */}
      <div className="container mx-auto px-6 py-12 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 jost-bold">
          Meet Our Founders
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-8">
          {[
            { name: "Alice Johnson", role: "CEO & Visionary" },
            { name: "Michael Smith", role: "CTO & Architect" },
            { name: "Sophia Brown", role: "COO & Strategist" },
          ].map((founder, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-AJaVc2YjAgRublwzcqb3sRserionqprHbNRfWm_Ee1jM-VhdFsvuNbufcn3qzsNOsA&usqp=CAU"
                alt={founder.name}
                className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
              />
              <h3 className="mt-6 text-2xl font-semibold text-gray-800">
                {founder.name}
              </h3>
              <p className="text-gray-500">{founder.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#3b61dd] text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl jost-bold mb-6">Get in Touch</h2>
          <p className="text-xl opacity-80 jost-regular">
            Have questions? Our support team is available 24/7.
          </p>
          <div className="mt-4 jost-regular">
            <p className="text-lg">
              Email:{" "}
              <a href="mailto:support@hotelnow.com" className="underline">
                support@hotelnow.com
              </a>
            </p>
            <p className="text-lg">
              Phone:{" "}
              <a href="tel:+1234567890" className="underline">
                +1 234 567 890
              </a>
            </p>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
}
