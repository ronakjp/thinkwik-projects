import Property from "@/models/Property";

export default async function extractFormData(
  formData: FormData,
  userId: string,
  uploadedImageUrls: string[]
) {
  console.log("Passed URLS ", uploadedImageUrls);

  const addPropertyFormData = {
    type: formData.get("propType") as string,
    name: formData.get("propTitleName") as string,
    description: formData.get("propDescription") as string,
    location: {
      street: formData.get("propLocation[propStreet]") as string,
      city: formData.get("propLocation[propCity]") as string,
      state: formData.get("propLocation[propState]") as string,
      zipcode: formData.get("propLocation[propZipcode]") as string,
    },
    beds: parseInt(formData.get("propBeds") as string, 10),
    baths: parseInt(formData.get("propBaths") as string, 10),
    square_feet: parseInt(formData.get("propSquareFeet") as string, 10),
    amenities: formData.getAll("propAmenities[]") as string[],
    rates: {
      weekly: formData.get("propRates[Weekly]")
        ? parseInt(formData.get("propRates[Weekly]") as string, 10)
        : undefined,
      monthly: formData.get("propRates[Monthly]")
        ? parseInt(formData.get("propRates[Monthly]") as string, 10)
        : undefined,
      nightly: formData.get("propRates[Nightly]")
        ? parseInt(formData.get("propRates[Nightly]") as string, 10)
        : undefined,
    },
    seller_info: {
      name: formData.get("propSellerInfo[name]") as string,
      email: formData.get("propSellerInfo[email]") as string,
      phone: formData.get("propSellerInfo[phone]") as string,
    },
    owner: userId,
    images: uploadedImageUrls,
  };

  // Create and return the new property document

  console.log("addPropertyFormData Obj ", addPropertyFormData);

  const newPropertyObject = new Property(addPropertyFormData);

  try {
    // get and save the new property document
    await newPropertyObject.save();
  } catch (error) {
    throw new Error(
      "Exeption is saving the new record to db " + (error as Error).message
    );
  }

  return newPropertyObject;
}
