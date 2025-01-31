import React from "react";

const Facilities = () => {
  return (
    <div>
      <div className="mt-28 mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
        <div className="card w-[25%] max-lg:w-[30%] max-md:py-10 max-md:w-[40%] max-md:mb-10 h-72  flex flex-col justify-center items-center shadow-2xl max-[500px]:w-[80%] bg-yellow-50 group hover:bg-[#DD3219] rounded-lg transition-all duration-100 ease-in-out max-md:h-auto">
          <div>
            <i className="ri-speed-up-line text-6xl"></i>
          </div>

          <div className="f-card-tagline mt-2">
            <p className="font-semibold text-xl max-lg:text-lg group-hover:text-white">
              Fast & Easy Booking
            </p>
          </div>

          <div className="f-card-text w-[90%] max-md:w-[80%] text-center mt-6">
            <p className="text-sm max-lg:text-xs max-lg:mt-2 group-hover:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab
              libero quasi
            </p>
          </div>
        </div>
        <div className="card w-[25%] max-lg:w-[30%]  max-md:py-10 max-md:w-[40%] max-md:mb-10 h-72  flex flex-col justify-center items-center shadow-2xl max-[500px]:w-[80%] bg-yellow-50 group hover:bg-[#DD3219] rounded-lg transition-all duration-100 ease-in-out max-md:h-auto">
          <div>
            <i className="ri-steering-2-fill text-6xl"></i>
          </div>

          <div className="f-card-tagline mt-2">
            <p className="font-semibold text-xl max-lg:text-lg group-hover:text-white">
              Many Pickup Locations
            </p>
          </div>

          <div className="f-card-text w-[90%] max-md:w-[80%] text-center mt-6">
            <p className="text-sm max-lg:text-xs max-lg:mt-2 group-hover:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab
              libero quasi
            </p>
          </div>
        </div>
        <div className="card w-[25%] max-lg:w-[30%]  max-md:py-10 max-md:w-[40%] max-md:mb-10 h-72  flex flex-col justify-center items-center shadow-2xl max-[500px]:w-[80%] bg-yellow-50 group hover:bg-[#DD3219] rounded-lg transition-all duration-100 ease-in-out max-md:h-auto">
          <div>
            <i className="ri-price-tag-3-fill text-6xl"></i>
          </div>

          <div className="f-card-tagline mt-2">
            <p className="font-semibold text-xl max-lg:text-lg group-hover:text-white">
              No Booking Charges
            </p>
          </div>

          <div className="f-card-text w-[90%] max-md:w-[80%] text-center mt-6">
            <p className="text-sm max-lg:text-xs max-lg:mt-2 group-hover:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab
              libero quasi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
