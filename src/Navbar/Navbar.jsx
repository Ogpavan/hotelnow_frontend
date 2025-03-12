import { useState } from "react";
import { Bookmark, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-gray-800">
            HotelNow.
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Book Now Button */}
          <button className="hidden md:flex items-center gap-2 bg-[#3b61dd] hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300">
            <Bookmark size={20} />
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } flex flex-col space-y-6 items-center justify-center shadow-lg`}
        >
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-700 text-lg hover:text-blue-500 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="flex items-center gap-2 bg-[#3b61dd] hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300">
            <Bookmark size={20} />
            Book Now
          </button>
          <button
            className="absolute top-6 right-6 text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
}
