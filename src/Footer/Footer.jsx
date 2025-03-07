import React from "react";

import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-950 text-white   ">
      <div className="flex flex-col md:flex-row gap-y-7 pt-20 pb-10 justify-between  max-w-[1200px] mx-auto px-5">
        <div className="  md:w-1/2    ">
          <h1 className="text-2xl font-bold text-white playfair_heading">
            HotelNow.
          </h1>
          <p className="text-sm pt-4   outfit-light mukta_mahee">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quibusdam architecto voluptate ducimus corrupti? Omnis quis
            voluptatibus animi ipsam commodi sequi repudiandae quas. Illum
            officiis consequatur tempore consectetur pariatur nostrum.
          </p>
        </div>

        <div className="flex flex-col gap-y-2 outfit-light mukta_mahee">
          <h1 className="outfit-bold   uppercase mukta_mahee_bold">company</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/collection">Collection</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </div>

        <div className="outfit-light mukta_mahee">
          <h1 className="outfit-bold   uppercase mb-3 ">GET in touch</h1>
          <p>+91 7302667115</p>
          <p>connect.pawan69@gmail.com</p>
        </div>
      </div>
      <h1 className="text-center text-sm">Copyright © 2023 Insider Stats</h1>
    </div>
  );
}

export default Footer;
