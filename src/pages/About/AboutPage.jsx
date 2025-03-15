import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/images/hero.jpg";
import Testimonials from "../Home/Testimonial";

export default function AboutUs() {
  return (
    <div className="bg-[#ECFAFB] min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[450px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={hero}
          alt="About Hotel Now"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-overlay flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1
            className="text-3xl md:text-4xl jost-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-md mt-3 jost-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            "Your trusted companion in finding the perfect stay, anywhere in the
            world"
          </motion.p>
        </div>
      </motion.div>

      {/* Animated Section Wrapper */}
      {[
        {
          title: "Our Mission",
          content:
            "At Hotel Now, our mission is to make travel easy, affordable, and memorable for everyone. We strive to connect travelers with the best accommodations tailored to their needs, ensuring a seamless booking experience that prioritizes comfort, quality, and affordability.",
        },
        {
          title: "Our Story",
          content:
            "It all started with three friends who loved to travel but struggled to find the perfect place to stay. Frustrated with high prices and unreliable options, they set out to create a platform that would change the way people experience travel. In 2015, Hotel Now was born—a seamless way to book accommodations that suit every budget and style.",
        },
      ].map((section, index) => (
        <motion.div
          key={index}
          className="container mx-auto px-6 py-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl jost-bold text-gray-800">{section.title}</h2>
          <p className="mt-4 text-gray-600 leading-relaxed text-lg jost-regular">
            {section.content}
          </p>
        </motion.div>
      ))}

      {/* Founders Section */}
      <motion.div
        className="container mx-auto px-6 py-12 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 jost-bold">
          Meet Our Founders
        </h2>
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-10 mt-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
          viewport={{ once: true }}
        >
          {[
            { name: "Alice Johnson", role: "CEO & Visionary" },
            { name: "Michael Smith", role: "CTO & Architect" },
            { name: "Sophia Brown", role: "COO & Strategist" },
          ].map((founder, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100 },
                },
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-AJaVc2YjAgRublwzcqb3sRserionqprHbNRfWm_Ee1jM-VhdFsvuNbufcn3qzsNOsA&usqp=CAU"
                alt={founder.name}
                className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
              />
              <h3 className="mt-6 text-2xl font-semibold text-gray-800">
                {founder.name}
              </h3>
              <p className="text-gray-500">{founder.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="bg-[#3b61dd] text-white py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
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
      </motion.div>

      <Testimonials />
    </div>
  );
}
