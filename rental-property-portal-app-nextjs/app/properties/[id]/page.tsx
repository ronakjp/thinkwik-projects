"use client";
import { TypeProperty } from "@/types/types";
import { fetchSingleProperty } from "@/utils/requests";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SinglePropertyPage = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<TypeProperty>();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        return;
      }
      try {
        const property = await fetchSingleProperty(id);
        setProperty(property);
        console.log("fetched prop is ", property);
      } catch (error) {
        console.log("Error in fetching single property.");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>ID {property?._id}</p>
      <p>Beds {property?.beds}</p>
    </div>
  );
};

export default SinglePropertyPage;
