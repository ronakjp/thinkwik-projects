import { Schema, model, models } from "mongoose";

const locationSchema = new Schema({
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zipcode: {
    type: String,
  },
});

const ratesSchema = new Schema({
  nightly: {
    type: Number,
    required: false,
  },
  weekly: {
    type: Number,
    required: false,
  },
  monthly: {
    type: Number,
    required: false,
  },
});

const sellerInfoSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const propertySchema = new Schema(
  {
    //Connecting to the specific owner
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },
    location: locationSchema,
    beds: {
      type: Number,
      required: true,
    },

    baths: {
      type: Number,
      required: true,
    },

    square_feet: {
      type: Number,
      required: true,
    },

    amenities: {
      type: [String],
    },
    rates: ratesSchema,
    seller_info: sellerInfoSchema,

    images: {
      type: [String],
    },
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Property = models.Property || model("Property", propertySchema);

export default Property;
