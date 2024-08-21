import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists."],
      required: [true, "Email is required."],
    },

    username: {
      type: String,
      required: [true, "Username is required."],
    },

    image: {
      type: String,
      required: false, // Explicitly mark this as not required (optional)
    },

    bookmarks: {
      type: [Schema.Types.ObjectId], // This is now an array of ObjectIds
      ref: "Property",
      default: [], // Default to an empty array
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
