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
     <div className="flex flex-col">
  <label className="md:text-lg">Pick-up</label>
  <select className="bg-white border border-slate-300 py-2 px-1 md:py-3 md:px-4 rounded-lg">
    <option>Select your location</option>
    <option value="Yerevan">Yerevan (Armenia)</option>
    <option value="Gyumri">Abkhazia (Georgia)</option>
    <option value="Baku">Baku (Azerbaijan)</option>
    <option value="Ganja">Ganja (Azerbaijan)</option>
    <option value="Istanbul">Istanbul (Turkey)</option>
    <option value="Ankara">Ankara (Turkey)</option>
    <option value="Moscow">Moscow (Russia)</option>
    <option value="Sochi">Sochi (Georgia)</option>
  </select>
</div>
      <div className="flex flex-col">
  <label className="md:text-lg">Drop-off</label>
  <select className="bg-white border border-slate-300 py-2 px-1 md:py-3 md:px-4 rounded-lg">
    <option>Select your location</option>
    <option value="Tbilisi">Tbilisi</option>
    <option value="Kutaisi">Kutaisi</option>
    <option value="Batumi">Batumi</option>
    <option value="Rustavi">Rustavi</option>
    <option value="Zugdidi">Zugdidi</option>
    <option value="Gori">Gori</option>
    <option value="Poti">Poti</option>
    <option value="Telavi">Telavi</option>
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
        {days > 0 && (
          <div className="flex justify-center mt-4">
            <p className="font-semibold">Total Days: {days}</p>
          </div>
        )}
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

