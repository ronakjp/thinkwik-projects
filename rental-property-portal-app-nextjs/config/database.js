import mongoose from "mongoose";

let connected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  //if the db is already connect , don't connect it again.

  if (connected) {
    console.log("Mongodb is already connected ...");
    return;
  }

  //connect to db
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    connected = true;

    console.log("Connected Successfully to DB");
  } catch (err) {
    console.log(
      "[PROBLEM IN DB CONNECTION] Can not established the connection to the DB"
    );
  }
};
