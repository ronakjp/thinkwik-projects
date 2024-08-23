import { ObjectId } from "mongodb";
import { Date } from "mongoose";
import { DefaultSession } from "next-auth";
type PropertyLocation = {
  street: string;
  city: string;
  state: string;
  zipcode: string;
};

type Rates = {
  nightly?: number; // Some properties have a nightly rate
  weekly: number;
  monthly?: number; // Some properties may not have a monthly rate
};

type SellerInfo = {
  name: string;
  email: string;
  phone: string;
};

export type TypeProperty = {
  _id: string;
  owner: string;
  name: string;
  type: string;
  description: string;
  location: PropertyLocation;
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: Rates;
  seller_info: SellerInfo;
  images: string[];
  is_featured: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Properties = TypeProperty[];

//schema of the each user fetched from the DB
export type DbEachUser = {
  _id: ObjectId;
  email: string;
  username: string;
  image: string;
  bookmarks: [ObjectId];
  createdAt: Date;
  updatedAt: Date;
};

//extending the existing session and adding the id property. it will be set to user id from db.

export interface CustomSession extends DefaultSession {
  user: DefaultSession["user"] & {
    id: string;
  };
}
