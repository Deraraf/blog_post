import mongoose from "mongoose";

let isConnected = false;

export const connectDb = async () => {
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(
      process.env.MONGODB_URI ||
        "mongodb+srv://derarageremu:RXlNlWyzyZSl8z0F@blogpost.6sg7m.mongodb.net/blogs?retryWrites=true&w=majority&appName=blogpost"
    );
    isConnected = true;
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

process.on("SIGINT", async () => {
  if (isConnected) {
    await mongoose.connection.close();
    console.log("MongoDB connection closed due to application termination");
    process.exit(0);
  }
});
