import React from "react";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";

export const metadata = {
  title: "HomePage of the protal",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBoxes />
     
    </>
  );
}
