import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:min-h-screen md:flex-row">
      <div className="left w-full p-6 flex flex-col justify-center items-center md:w-3/5 md:pl-14 lg:pl-20">
        <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center md:text-left">
          Get Moving with SwiftRides
        </h1>
        <h3 className="text-base md:text-base lg:text-lg mt-4 text-center md:text-left">
          Fast, reliable, and flexible car rentals at your fingertips. Find your
          ride in minutes and hit the road with ease.
        </h3>
        <div className="flex justify-center mt-4 md:mb-10">
          <button className="bg-[#ff4d30] hover:bg-[#f01a1a] shadow-lg text-white px-4 py-2 rounded-md">
            Book Ride
          </button>
        </div>
      </div>
      <div className="right relative w-full flex justify-center md:items-center">
        <img
          className="md:w-[400px] md:h-fit lg:w-[550px] lg:h-fit"
          src="/images/harrier.png"
          alt="Harrier"
        />
        <div className="bg-[#d2c924] absolute -z-10 h-2/3 w-full md:w-2/3 md:h-full right-0 top-0"></div>
      </div>
    </section>
  );
};

export default Hero;
