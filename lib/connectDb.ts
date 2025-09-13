import mongoose from "mongoose";
import { NextResponse } from "next/server";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please add your Mongo URI in .env file");
}

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
    return NextResponse.json(
      { error: "Failed to connect to MongoDB" },
      { status: 500 }
    );
  }
};

export default connectToDB;
