import React, { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import {
  FaHome,
  FaInfoCircle,
  FaConciergeBell,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute w-full z-50 md:p-10 p-5  ">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">HotelNow.</h1>
        <div>
          <SlMenu
            className="text-white text-2xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white z-50 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <IoClose
          className="absolute top-10 right-10 text-3xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
        <nav className="flex flex-col gap-6 text-2xl mukta_mahee_bold">
          <a href="#" className="hover:text-gray-400 flex items-center gap-3">
            <FaHome /> Home
          </a>
          <a href="#" className="hover:text-gray-400 flex items-center gap-3">
            <FaInfoCircle /> About
          </a>
          <a href="#" className="hover:text-gray-400 flex items-center gap-3">
            <FaConciergeBell /> Services
          </a>
          <a href="#" className="hover:text-gray-400 flex items-center gap-3">
            <FaEnvelope /> Contact
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
