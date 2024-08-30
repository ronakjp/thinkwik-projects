"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import profileDefault from "@/assets/images/profile.png";
import axios from "axios";
import Link from "next/link";
import { Properties } from "@/types/types";
const ProfilePage = () => {
  const { data: session } = useSession();

  const profileImage = session?.user?.image;
  const profileName = session?.user?.name;
  const profileEmail = session?.user?.email;

  const [properties, setProperties] = useState<Properties>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchedUserProperties = async (userId: string) => {
      if (!userId) {
        return;
      }

      try {
        setLoading(true);
        const res = await axios.get(`/api/properties/user/${userId}`);
        if (res.status === 200) {
          const data = res.data;
          setProperties(data);
          console.log("property state ", properties);
        }
      } catch (error) {
        console.log("Error in single property fetching, ", error);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user.id) {
      fetchedUserProperties(session.user.id);
    }
  }, [session]);

  async function handleDeleteProperty(propertyId: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this property ?"
    );

    if (!confirmed) {
      return;
    }

    try {
      
      const res = await axios.delete(`/api/properties/${propertyId}`);

      if (res.status === 200) {
        //update the local state
        const updatedProperties = properties.filter(
          (eachProp) => eachProp._id !== propertyId
        );

        setProperties(updatedProperties);
        alert("prop deleted");
      } else {
        alert("failed to delete property");
      }
    } catch (error) {
      console.log("Error in deleting property");
    }
  }

  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mx-20 mt-10">
              <div className="mb-4">
                <Image
                  className="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0"
                  src={profileImage || profileDefault}
                  alt="User"
                  width={2000}
                  height={2000}
                />
              </div>
              <h2 className="text-2xl mb-4">
                <span className="font-bold block">Name: </span>{" "}
                {profileName ? profileName : "User"}
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold block">Email: </span>{" "}
                {profileEmail ? profileEmail : "User Email"}
              </h2>
            </div>

            <div className="md:w-3/4 md:pl-4">
              <h2 className="text-xl font-semibold mb-4">Your Listings</h2>

              {!loading && properties.length === 0 && (
                <p>You have no property listings.</p>
              )}

              {loading ? (
                <p>Loading your properties</p>
              ) : (
                properties.map((eachProperty) => (
                  <div key={eachProperty._id} className="mb-10">
                    <Link href={`/properties/${eachProperty._id}`}>
                      <Image
                        className="h-32 w-full rounded-md object-cover"
                        src={eachProperty.images[0]}
                        alt="Property 1"
                        width={500}
                        height={100}
                        priority={true}
                      />
                    </Link>
                    <div className="mt-2">
                      <p className="text-lg font-semibold">
                        {eachProperty.name}
                      </p>
                      <p className="text-gray-600">
                        {`${eachProperty.location.street}, ${eachProperty.location.city} ${eachProperty.location.state}, ${eachProperty.location.zipcode}`}
                      </p>
                    </div>
                    <div className="mt-2">
                      <Link
                        href={`/properties/${eachProperty._id}/edit`}
                        className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDeleteProperty(eachProperty._id)}
                        className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                        type="button"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
