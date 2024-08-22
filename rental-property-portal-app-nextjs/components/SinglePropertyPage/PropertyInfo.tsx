import React from "react";
import Map from "./Map";
import { TypeProperty } from "@/types/types";
import { FaXmark } from "react-icons/fa6";

import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaCheck,
  FaMapMarker,
} from "react-icons/fa";
type Props = {
  currentProperty: TypeProperty;
};
const PropertyInfo: React.FC<Props> = ({ currentProperty }) => {
  return (
    <>
      <main>
        <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
          <div className="text-gray-500 mb-4">{currentProperty.type}</div>
          <h1 className="text-3xl font-bold mb-4">{currentProperty.name}</h1>
          <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
            <FaMapMarker className="text-lg text-orange-700 mr-2" />
            <p className="text-orange-700">
              {/* 120 Tremont Street Boston, MA 02111 */}
              {currentProperty.location.street +
                " " +
                currentProperty.location.city +
                ", " +
                currentProperty.location.state +
                " " +
                currentProperty.location.zipcode}
            </p>
          </div>

          <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
            Rates & Options
          </h3>
          <div className="flex flex-col md:flex-row justify-around">
            {currentProperty.rates.nightly ? (
              <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
                <div className="text-gray-500 mr-2 font-bold">Nightly</div>
                <div className="text-2xl font-bold text-blue-500">
                  {currentProperty.rates.nightly}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
                <div className="text-gray-500 mr-2 font-bold">Nightly</div>
                <div className="text-2xl font-bold">
                  <FaXmark className="text-red-700" />
                </div>
              </div>
            )}

            {currentProperty.rates.weekly ? (
              <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
                <div className="text-gray-500 mr-2 font-bold">Weekly</div>
                <div className="text-2xl font-bold text-blue-500">
                  {currentProperty.rates.weekly}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
                <div className="text-gray-500 mr-2 font-bold">Weekly</div>
                <div className="text-2xl font-bold">
                  <FaXmark className="text-red-700" />
                </div>
              </div>
            )}
            {currentProperty.rates.monthly ? (
              <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
                <div className="text-gray-500 mr-2 font-bold">Monthly</div>
                <div className="text-2xl font-bold text-blue-500">
                  {currentProperty.rates.monthly}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
                <div className="text-gray-500 mr-2 font-bold">Monthly</div>
                <div className="text-2xl font-bold">
                  <FaXmark className="text-red-700" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-lg font-bold mb-6">Description & Details</h3>
          <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
            <p>
              <FaBed className="inline text-gray-800" /> {currentProperty.beds}{" "}
              <span className="hidden sm:inline">
                {" "}
                {currentProperty.beds > 1 ? "Beds" : "Bed"}
              </span>
            </p>
            <p>
              <FaBath className="inline text-gray-800" />{" "}
              {currentProperty.baths}{" "}
              <span className="hidden sm:inline">
                {currentProperty.baths > 1 ? "Baths" : "Bath"}
              </span>
            </p>
            <p>
              <FaRulerCombined className="inline text-gray-800" />{" "}
              {currentProperty.square_feet}{" "}
              <span className="hidden sm:inline">sqft</span>
            </p>
          </div>
          <p className="text-gray-500 mb-4">{currentProperty.description}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6 ">
          <h3 className="text-lg font-bold mb-6 text-center md:text-left">
            Amenities
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none content-center justify-center">
            {currentProperty.amenities.map((eachAmenity) => (
              <li className="flex justify-center md:justify-start ">
                <FaCheck className=" inline text-green-600 mt-1   " />
                <span className="ml-2">{eachAmenity}</span>
              </li>
            ))}
          </ul>
        </div>
        <Map />
      </main>
    </>
  );
};

export default PropertyInfo;
