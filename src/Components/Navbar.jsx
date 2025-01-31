import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="relative flex justify-between items-center text-sm font-semibold py-6 px-4 md:px-12 shadow-xl ">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            <span className="text-[#ff4d30]">Swift</span>Rides
          </h1>
        </div>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8">
            <li>HOME</li>
            <li>OUR CARS</li>
            <li>GET APP</li>
            <li>CONTACT</li>
          </ul>
          <div className="flex gap-4">
            <button className="text-red-700">LOGIN</button>
            <button onClick={handleClose}>
              {open ? (
                <i class="ri-close-large-line"></i>
              ) : (
                <i className="ri-menu-line text-xl md:hidden"></i>
              )}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="absolute right-0 z-50 p-14 w-[200px] h-screen bg-white animate-fade">
          <div>
            <ul className="flex flex-col gap-8 text-sm font-semibold">
              <li>HOME</li>
              <li>OUR CARS</li>
              <li>GET APP</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
