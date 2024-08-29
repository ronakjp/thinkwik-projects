import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_CLOUD_APIKEY,
  api_secret: process.env.CLOUDNARY_CLOUD_APISECRET,
});

export default cloudinary;
