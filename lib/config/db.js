import mongoose from "mongoose";

const mongoUri =
  "mongodb+srv://derara:amelewerk@cluster0.4sizw.mongodb.net/data";

let isConnected = false;

export const connectDb = async () => {
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(mongoUri, {
      // other options can be added here
    });
    isConnected = true;
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

// Optionally handle connection closure on application termination
process.on("SIGINT", async () => {
  if (isConnected) {
    await mongoose.connection.close();
    console.log("MongoDB connection closed due to application termination");
    process.exit(0);
  }
});
