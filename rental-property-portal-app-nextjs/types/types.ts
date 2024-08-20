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

export type Property = {
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

export type Properties = Property[];
