import Image from "next/image";
import React from "react";
import { TypeProperty } from "@/types/types";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from "react-icons/fa";
const PropertyCard: React.FC<{ eachProperty: TypeProperty }> = ({
  eachProperty,
}) => {
  return (
    <div className="rounded-xl shadow-md relative">
      {eachProperty.images[0] && (
        <Image
          src={eachProperty.images[0]}
          width={0}
          height={0}
          priority
          sizes="100vh"
          alt="An Property Image"
          className="w-full h-auto rounded-t-xl"
        />
      )}

      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{eachProperty.type}</div>
          <h3 className="text-xl font-bold">{eachProperty.name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          {eachProperty.rates.monthly
            ? eachProperty.rates.monthly + "/mo"
            : eachProperty.rates.weekly
            ? eachProperty.rates.weekly + "/wk"
            : eachProperty.rates.nightly
            ? eachProperty.rates.nightly + "/nt"
            : undefined}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FaBed className="inline mr-2" /> {eachProperty.beds}
            <span className="  md:hidden lg:inline">
              {" "}
              {eachProperty.beds > 1 ? "Beds" : "Bed"}
            </span>
          </p>
          <p>
            <FaBath className="inline mr-2" /> {eachProperty.baths}
            <span className="md:hidden lg:inline">
              {" "}
              {eachProperty.baths > 1 ? "Baths" : "Bath"}
            </span>
          </p>
          <p>
            <FaRulerCombined className="inline mr-2" />
            {eachProperty.square_feet}{" "}
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          {eachProperty.rates.nightly && (
            <p>
              <FaMoneyBill className="inline mr-2" />{" "}
              {eachProperty.rates.nightly ? "Nightly" : undefined}
            </p>
          )}

          {eachProperty.rates.weekly && (
            <p>
              <FaMoneyBill className="inline mr-2" />{" "}
              {eachProperty.rates.weekly ? "Weekly" : undefined}
            </p>
          )}

          {eachProperty.rates.monthly && (
            <p>
              <FaMoneyBill className="inline mr-2" />{" "}
              {eachProperty.rates.monthly ? "Monthly" : undefined}
            </p>
          )}
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarker className="text-orange-700 mt-1" />
            <span className="text-orange-700">
              {" "}
              {eachProperty.location.city} {eachProperty.location.state}
            </span>
          </div>
          <Link
            href={`/properties/${eachProperty._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
