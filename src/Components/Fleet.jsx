import React, { useState } from "react";
import { CarData } from "../Data/CarData";
import Facilities from "./Facilities";

const Fleet = ({ days, startDate, endDate }) => {
  const [tab, setTab] = useState(1);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const Hatchback = CarData.filter((car) => car.type === "Hatchback");
  const Sedan = CarData.filter((car) => car.type === "Sedan");
  const Muv = CarData.filter((car) => car.type === "Muv");
  const Suv = CarData.filter((car) => car.type === "Suv");

  const data =
    tab === 2
      ? Hatchback
      : tab === 3
      ? Sedan
      : tab === 4
      ? Muv
      : tab === 5
      ? Suv
      : CarData;

  const openModal = (car) => {
    setSelectedCar(car);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Facilities />
      <section className="mt-24">
        <h4 className="text-center font-semibold">
          Discover the SwiftRides Fleet
        </h4>
        <h1 className="text-center text-3xl md:text-4xl font-bold">
          Our Rental Fleets
        </h1>

        <div className="flex flex-wrap gap-3 md:gap-8 justify-center items-center mt-8">
          <div
            className="cursor-pointer font-semibold"
            style={{ borderBottom: tab === 1 ? "2px solid red" : "white" }}
            onClick={() => setTab(1)}
          >
            Show All
          </div>
          <div
            className="cursor-pointer font-semibold"
            style={{ borderBottom: tab === 2 ? "2px solid red" : "white" }}
            onClick={() => setTab(2)}
          >
            Hatchback
          </div>
          <div
            className="cursor-pointer font-semibold"
            style={{ borderBottom: tab === 3 ? "2px solid red" : "white" }}
            onClick={() => setTab(3)}
          >
            Sedan
          </div>
          <div
            className="cursor-pointer font-semibold"
            style={{ borderBottom: tab === 4 ? "2px solid red" : "white" }}
            onClick={() => setTab(4)}
          >
            MUV
          </div>
          <div
            className="cursor-pointer font-semibold"
            style={{ borderBottom: tab === 5 ? "2px solid red" : "white" }}
            onClick={() => setTab(5)}
          >
            SUV
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-20">
          {data &&
            data.map((car, index) => (
              <div
                key={index}
                className="hover:border border-black transition ease-in-out delay-150 w-full"
              >
                <img src={car.carImage} className="w-full object-cover" />
                <h1 className="text-2xl font-bold text-red-800 text-center">
                  {car.carTitle}
                </h1>
                <p className="text-blue-900 font-bold text-center">
                  ₹ {car.pricePerDay.toLocaleString()} /- per day
                </p>
                <div className="flex justify-around mt-4">
                  <button
                    className="bg-orange-600 hover:bg-red-600 rounded-md py-1 px-6 sm:px-8 font-semibold text-white"
                    onClick={() => openModal(car)}
                  >
                    Rent
                  </button>
                  <button className="bg-orange-400 hover:bg-orange-500 rounded-md py-1 px-6 sm:px-8 font-semibold text-white">
                    Details
                  </button>
                </div>
              </div>
            ))}
        </div>

        {isModalOpen && selectedCar && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-center mb-3 text-red-700">
                Booking Details
              </h2>
              <p className="mb-2">Car: {selectedCar.carTitle}</p>
              <p className="mb-2">Start Date: {startDate}</p>
              <p className="mb-2">End Date: {endDate}</p>
              <p className="mb-2">Number of Days: {days}</p>
              <p className="mb-2">
                Rate per Day: ₹ {selectedCar.pricePerDay.toLocaleString()}/-
              </p>
              <p className="mb-2 font-semibold">
                Total Amount: ₹{" "}
                {(selectedCar.pricePerDay * days).toLocaleString()}/-
              </p>
              <div className="flex justify-center">
                <button
                  className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Fleet;
