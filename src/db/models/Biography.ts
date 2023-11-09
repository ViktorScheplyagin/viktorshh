import mongoose, { Schema, ObjectId } from "mongoose";

const biographySchema = new Schema({
  title: String,
  content: String,
});

export const Biography =
  mongoose.models.Biography || mongoose.model("Biography", biographySchema);
