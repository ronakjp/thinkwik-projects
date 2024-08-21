import { Schema, model, models } from "mongoose";
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
    location: {
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
      rates: {
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
      },
      seller_info: {
        name: {
          type: String,
        },
        email: {
          type: String,
        },
        phone: {
          type: String,
        },
      },

      images: {
        type: [String],
      },
      is_featured: {
        type: Boolean,
        default: false,
      },
    },
  },
  { timestamps: true }
);

const Property = models.Property || model("Property", propertySchema);

export default Property;
