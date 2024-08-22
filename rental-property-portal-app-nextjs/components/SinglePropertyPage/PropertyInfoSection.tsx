import React from "react";
import ContactForm from "./ContactForm";
import Map from "./Map";
import PropertyInfo from "./PropertyInfo";
import SideBar from "./SideBar";
import { TypeProperty } from "@/types/types";

type Props = {
  currentProperty: TypeProperty;
};

const PropertyInfoSection: React.FC<Props> = ({ currentProperty }) => {
  return (
    // <!-- Property Info -->
    <>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <PropertyInfo currentProperty={currentProperty} />

            <SideBar />
          </div>
        </div>
      </section>
    </>
  );
};
export default PropertyInfoSection;
