import mongoose, { Schema, Document, models, model } from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const Space = models.Space || model("Space", userSchema);

export default Space;
