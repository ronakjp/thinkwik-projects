"use client";
import { AddPropertyFormType } from "@/types/types";
import { fetchSingleProperty } from "@/utils/requests";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

const EditPropertyForm = () => {
  const router = useRouter();
  const { id }: { id: string } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      amenities: [], // Initialize as an empty array
    },
  });

  useEffect(() => {
    const fetchPropData = async () => {
      try {
        const propData = await fetchSingleProperty(id);
        console.log("propData", propData);

        // Populate the form fields
        // Set all other fields
        Object.keys(propData).forEach((key) => {
          if (key !== "amenities") {
            if (
              typeof propData[key] === "object" &&
              !Array.isArray(propData[key])
            ) {
              Object.keys(propData[key]).forEach((nestedKey) => {
                setValue(`${key}.${nestedKey}`, propData[key][nestedKey]);
              });
            } else {
              setValue(key, propData[key]);
            }
          }
        });

        // Set amenities (array)
        setValue("amenities", propData.amenities);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPropData();
  }, [setValue]);

  const onSubmit: SubmitHandler<AddPropertyFormType> = async (data) => {
    console.log("Form data is ", data);
    console.log("Passed Property ID", id);
    try {
      const response = await axios.put(`/api/properties/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("response stat ", response.status);

      if (response.status === 401) {
        console.log("inside 401");

        toast.error("Permission Denied");
      }
      if (response.status === 200) {
        // Redirecting to /properties/[objectID]
        toast.success("Record Updated Successfully");
        router.push(`/properties/${id}`);
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
     
      console.error("Error submitting the form:", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-3xl text-center font-semibold mb-6">
          Edit Property
        </h2>

        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
            Property Type
          </label>
          <select
            id="type"
            {...register("type")}
            className="border rounded w-full py-2 px-3"
            required
          >
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
            <option value="House">House</option>
            <option value="CabinOrCottage">Cabin or Cottage</option>
            <option value="Room">Room</option>
            <option value="Studio">Studio</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="propTitleName"
            className="block text-gray-700 font-bold mb-2"
          >
            Listing Name
          </label>
          <input
            type="text"
            id="propTitleName"
            {...register("name")}
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="eg. Beautiful Apartment In Miami"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description")}
            className="border rounded w-full py-2 px-3"
            rows={4}
            placeholder="Add an optional description of your property"
          ></textarea>
        </div>

        <div className="mb-4 bg-blue-50 p-4">
          <label className="block text-gray-700 font-bold mb-2">Location</label>
          <input
            type="text"
            {...register("location.street")}
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="Street"
          />
          <input
            type="text"
            {...register("location.city")}
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="City"
            required
          />
          <input
            type="text"
            {...register("location.state")}
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="State"
            required
          />
          <input
            type="text"
            {...register("location.zipcode")}
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="Zipcode"
          />
        </div>

        <div className="mb-4 flex flex-wrap">
          <div className="w-full sm:w-1/3 pr-2">
            <label
              htmlFor="beds"
              className="block text-gray-700 font-bold mb-2"
            >
              Beds
            </label>
            <input
              type="number"
              id="beds"
              {...register("beds")}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="w-full sm:w-1/3 px-2">
            <label
              htmlFor="baths"
              className="block text-gray-700 font-bold mb-2"
            >
              Baths
            </label>
            <input
              type="number"
              id="baths"
              {...register("baths")}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="w-full sm:w-1/3 pl-2">
            <label
              htmlFor="square_feet"
              className="block text-gray-700 font-bold mb-2"
            >
              Square Feet
            </label>
            <input
              type="number"
              id="square_feet"
              {...register("square_feet")}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Amenities
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <div>
              <input
                type="checkbox"
                id="amenity_wifi"
                {...register("amenities")}
                value="Wifi"
                className="mr-2"
              />
              <label htmlFor="amenity_wifi">Wifi</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_kitchen"
                {...register("amenities")}
                value="Full kitchen"
                className="mr-2"
              />
              <label htmlFor="amenity_kitchen">Full kitchen</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_washer_dryer"
                {...register("amenities")}
                value="Washer & Dryer"
                className="mr-2"
              />
              <label htmlFor="amenity_washer_dryer">Washer & Dryer</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_free_parking"
                {...register("amenities")}
                value="Free Parking"
                className="mr-2"
              />
              <label htmlFor="amenity_free_parking">Free Parking</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_pool"
                {...register("amenities")}
                value="Swimming Pool"
                className="mr-2"
              />
              <label htmlFor="amenity_pool">Swimming Pool</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_hot_tub"
                {...register("amenities")}
                value="Hot Tub"
                className="mr-2"
              />
              <label htmlFor="amenity_hot_tub">Hot Tub</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_24_7_security"
                {...register("amenities")}
                value="24/7 Security"
                className="mr-2"
              />
              <label htmlFor="amenity_24_7_security">24/7 Security</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_wheelchair_accessible"
                {...register("amenities")}
                value="Wheelchair Accessible"
                className="mr-2"
              />
              <label htmlFor="amenity_wheelchair_accessible">
                Wheelchair Accessible
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_elevator_access"
                {...register("amenities")}
                value="Elevator Access"
                className="mr-2"
              />
              <label htmlFor="amenity_elevator_access">Elevator Access</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_dishwasher"
                {...register("amenities")}
                value="Dishwasher"
                className="mr-2"
              />
              <label htmlFor="amenity_dishwasher">Dishwasher</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_gym_fitness_center"
                {...register("amenities")}
                value="Gym/Fitness Center"
                className="mr-2"
              />
              <label htmlFor="amenity_gym_fitness_center">
                Gym/Fitness Center
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_air_conditioning"
                {...register("amenities")}
                value="Air Conditioning"
                className="mr-2"
              />
              <label htmlFor="amenity_air_conditioning">Air Conditioning</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_balcony_patio"
                {...register("amenities")}
                value="Balcony/Patio"
                className="mr-2"
              />
              <label htmlFor="amenity_balcony_patio">Balcony/Patio</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_smart_tv"
                {...register("amenities")}
                value="Smart TV"
                className="mr-2"
              />
              <label htmlFor="amenity_smart_tv">Smart TV</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_coffee_maker"
                {...register("amenities")}
                value="Coffee Maker"
                className="mr-2"
              />
              <label htmlFor="amenity_coffee_maker">Coffee Maker</label>
            </div>
          </div>
        </div>

        <div className="mb-4 bg-blue-50 p-4">
          <label className="block text-gray-700 font-bold mb-2">
            Rates (Leave blank if not applicable)
          </label>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <div className="flex items-center">
              <label htmlFor="weekly_rate" className="mr-2">
                Weekly
              </label>
              <input
                type="number"
                id="weekly_rate"
                {...register("rates.weekly")}
                className="border rounded w-full py-2 px-3"
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="monthly_rate" className="mr-2">
                Monthly
              </label>
              <input
                type="number"
                id="monthly_rate"
                {...register("rates.monthly")}
                className="border rounded w-full py-2 px-3"
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="nightly_rate" className="mr-2">
                Nightly
              </label>
              <input
                type="number"
                id="nightly_rate"
                {...register("rates.nightly")}
                className="border rounded w-full py-2 px-3"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="seller_name"
            className="block text-gray-700 font-bold mb-2"
          >
            Seller Name
          </label>
          <input
            type="text"
            id="seller_name"
            {...register("seller_info.name")}
            className="border rounded w-full py-2 px-3"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="seller_email"
            className="block text-gray-700 font-bold mb-2"
          >
            Seller Email
          </label>
          <input
            type="email"
            id="seller_email"
            {...register("seller_info.email")}
            className="border rounded w-full py-2 px-3"
            placeholder="Email address"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="seller_phone"
            className="block text-gray-700 font-bold mb-2"
          >
            Seller Phone
          </label>
          <input
            type="tel"
            id="seller_phone"
            {...register("seller_info.phone")}
            className="border rounded w-full py-2 px-3"
            placeholder="Phone"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <button
            disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {isSubmitting && (
              <>
                <svg
                  aria-hidden="true"
                  className="inline w-4 h-4 ml-3 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </>
            )}
            Edit Property
          </button>
        </div>
      </form>
    </>
  );
};

export default EditPropertyForm;
