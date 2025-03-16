import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },

    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 text-white ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl jost-bold text-white">
          HotelNow.
        </NavLink>

        {/* Menu Button */}
        <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sliding Menu for all screens */}
      <div
        className={`fixed inset-0 bg-white transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col items-center justify-center space-y-6 shadow-lg  md:left-0 md:top-0 md:h-full md:fixed`}
      >
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `text-gray-700 text-lg hover:text-blue-500 transition duration-300 ${
                isActive ? "font-semibold text-blue-600" : ""
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </NavLink>
        ))}
        <button
          className="absolute top-6 right-6 text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>
      </div>
    </nav>
  );
}

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Bookmark, Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <NavLink to="/" className="text-2xl font-bold text-gray-800">
//             HotelNow.
//           </NavLink>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             {navItems.map((item, index) => (
//               <NavLink
//                 key={index}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `text-gray-600 hover:text-blue-500 transition duration-300 ${
//                     isActive ? "font-semibold text-blue-600" : ""
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             ))}
//           </div>

//           {/* Book Now Button */}
//           <NavLink
//             to="/book"
//             className="hidden md:flex items-center gap-2 bg-[#3b61dd] hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300"
//           >
//             <Bookmark size={20} />
//             Book Now
//           </NavLink>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-gray-600"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden fixed inset-0 bg-white transition-transform duration-300 ${
//             isOpen ? "translate-x-0" : "-translate-x-full"
//           } flex flex-col space-y-6 items-center justify-center shadow-lg`}
//         >
//           {navItems.map((item, index) => (
//             <NavLink
//               key={index}
//               to={item.path}
//               className={({ isActive }) =>
//                 `text-gray-700 text-lg hover:text-blue-500 transition duration-300 ${
//                   isActive ? "font-semibold text-blue-600" : ""
//                 }`
//               }
//               onClick={() => setIsOpen(false)}
//             >
//               {item.name}
//             </NavLink>
//           ))}
//           <NavLink
//             to="/book"
//             className="flex items-center gap-2 bg-[#3b61dd] hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             <Bookmark size={20} />
//             Book Now
//           </NavLink>
//           <button
//             className="absolute top-6 right-6 text-gray-600"
//             onClick={() => setIsOpen(false)}
//           >
//             <X size={28} />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }
