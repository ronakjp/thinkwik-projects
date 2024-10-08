import React from "react";
import PropertyCard from "@/components/PropertyCard";

import { fetchProperties } from "@/utils/requests";

const PropertiesPage: React.FC = async () => {
  const properties = await fetchProperties();

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <div>No Properties Found ...</div>
        ) : (
          <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
            {properties.map((eachProperty) => (
              <PropertyCard
                key={eachProperty._id}
                eachProperty={eachProperty}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
