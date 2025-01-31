import React, { useState } from "react";
import Fleet from "./Fleet";

const Book = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState(0);

  const calculateDays = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDays(diffDays);
    } else {
      setDays(0);
    }
  };

  return (
    <>
      <div className="bg-orange-200 px-10 py-6 h-auto lg:w-11/12 lg:mx-auto lg:rounded-lg">
        <div className="grid grid-cols-1 gap-3 md:grid md:grid-cols-2 lg:grid lg:grid-cols-5">
          <div className="flex flex-col">
            <label className="md:text-lg">Pick-up</label>
            <select className="bg-white border border-slate-300 py-2 px-1 md:py-3 md:px-4 rounded-lg">
              <option>Select your location</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="md:text-lg">Drop-off</label>
            <select className="bg-white border border-slate-300 py-2 px-1 md:py-3 md:px-4 rounded-lg">
              <option>Select your location</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="md:text-lg">Start Date</label>
            <input
              className="bg-white border border-slate-300 py-1 px-1 md:py-2 md:px-4 rounded-lg"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="md:text-lg">End Date</label>
            <input
              className="bg-white border border-slate-300 py-1 px-1 md:py-2 md:px-4 rounded-lg"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="md:grid md:col-span-2 lg:grid lg:col-span-1">
            <div className="flex justify-center">
              <button
                className="bg-[#ff4d30] hover:bg-[#f01a1a] text-white mt-6 px-12 py-2 border-none rounded-lg"
                onClick={calculateDays}
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
        {days > 0 && (
          <div className="flex justify-center mt-4">
            <p className="font-semibold">Total Days: {days}</p>
          </div>
        )}
      </div>
      {/* Passing the days, startDate, and endDate to Fleet */}
      <Fleet
        className="hidden"
        days={days}
        startDate={startDate}
        endDate={endDate}
      />
    </>
  );
};

export default Book;
