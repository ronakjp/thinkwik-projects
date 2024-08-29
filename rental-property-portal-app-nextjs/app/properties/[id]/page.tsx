"use client";
import Loading from "@/app/loading";
import PropertyHeaderImage from "@/components/SinglePropertyPage/PropertyHeaderImage";
import PropertyInfoSection from "@/components/SinglePropertyPage/PropertyInfoSection";
import { TypeProperty } from "@/types/types";
import { fetchSingleProperty } from "@/utils/requests";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const SinglePropertyPage = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<TypeProperty>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (!id) {
        return;
      }
      try {
        const property = await fetchSingleProperty(id);
        setProperty(property);
      } catch (error) {
        console.log("Error in fetching single property.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {!property && !loading && <h1>No properties found</h1>}

      {loading && !property && <Loading />}

      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />

          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/properties"
                className="text-blue-500 hover:text-blue-600 flex items-center"
              >
                <FaArrowLeft className="fas fa-arrow-left mr-2" />
                Back to Properties
              </Link>
            </div>
          </section>
          <PropertyInfoSection currentProperty={property} />
        </>
      )}
    </>
  );
};

export default SinglePropertyPage;
