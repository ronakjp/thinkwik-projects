import Property from "@/models/Property";
import { NextResponse } from "next/server";

export default async function editFormDataWithoutImage(
  propID: string,
  formData: FormData
) {
  const editPropertyFormData = {
    type: formData.get("type") as string,
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    location: {
      street: formData.get("location[street]") as string,
      city: formData.get("location[city]") as string,
      state: formData.get("location[state]") as string,
      zipcode: formData.get("location[zipcode]") as string,
    },
    beds: parseInt(formData.get("beds") as string, 10),
    baths: parseInt(formData.get("baths") as string, 10),
    square_feet: parseInt(formData.get("square_feet") as string, 10),
    amenities: formData.getAll("amenities[]") as string[],
    rates: {
      weekly: formData.get("rates[weekly]")
        ? parseInt(formData.get("rates[weekly]") as string, 10)
        : undefined,
      monthly: formData.get("rates[monthly]")
        ? parseInt(formData.get("rates[monthly]") as string, 10)
        : undefined,
      nightly: formData.get("rates[nightly]")
        ? parseInt(formData.get("rates[nightly]") as string, 10)
        : undefined,
    },
    seller_info: {
      name: formData.get("seller_info[name]") as string,
      email: formData.get("seller_info[email]") as string,
      phone: formData.get("seller_info[phone]") as string,
    },
  };

  try {
    // update property document
    const updatedProperty = await Property.findByIdAndUpdate(
      propID,
      editPropertyFormData
    );

    return new NextResponse(JSON.stringify(updatedProperty), { status: 200 });
  } catch (error) {
    throw new Error(
      "Exeption is updating record to db " + (error as Error).message
    );
  }
}
