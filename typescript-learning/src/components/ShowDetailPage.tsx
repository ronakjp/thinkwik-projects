import React from "react";
import ShowDetailCard from "./ShowDetailCard";

export type Property = {
  title: string;
  description: string;
  price: string;
};

type ShowDetailProps = {
  propertiesList: Property[];
};

const ShowDetailPage: React.FC<ShowDetailProps> = ({ propertiesList }) => {
  return (
    <div className="grid  md:grid-cols-3 sm:grid-cols-2 gap-2 ">
      {propertiesList.map(({ title, description, price }, index) => (
        <div key={index} className="">
          <ShowDetailCard
            title={title}
            description={description}
            price={price}
            className="p-3"
          />
        </div>
      ))}
    </div>
  );
};

export default ShowDetailPage;

export const properties: Property[] = [
  {
    title: "Luxury Villa in Beverly Hills",
    description:
      "A stunning villa with a private pool, landscaped gardens, and breathtaking views of the city.",
    price: "$2,500,000",
  },
  {
    title: "Modern Apartment in Downtown NYC",
    description:
      "A chic, modern apartment with 2 bedrooms, 2 bathrooms, and easy access to all city amenities.",
    price: "$1,200,000",
  },
  {
    title: "Cozy Cottage in the Countryside",
    description:
      "A quaint 3-bedroom cottage surrounded by nature, perfect for a peaceful retreat.",
    price: "$350,000",
  },
  {
    title: "Spacious Family Home in Suburbia",
    description:
      "A 4-bedroom, 3-bathroom home with a large backyard, perfect for a growing family.",
    price: "$550,000",
  },
  {
    title: "Penthouse Suite with Ocean Views",
    description:
      "A luxurious penthouse with panoramic ocean views, top-of-the-line finishes, and private elevator access.",
    price: "$3,750,000",
  },
  {
    title: "Rustic Farmhouse with Acreage",
    description:
      "A charming farmhouse with 20 acres of land, ideal for farming or equestrian activities.",
    price: "$600,000",
  },
  {
    title: "Beachfront Condo in Miami",
    description:
      "A bright and airy condo with direct beach access and stunning ocean views.",
    price: "$900,000",
  },
];
