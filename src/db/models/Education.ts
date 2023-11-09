import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  universityName: String,
  degree: String,
  branch: String,
  location: String,
  enrollmentYear: Number,
  graduationYear: Number,
});

export const Education =
  mongoose.models.Education || mongoose.model("Education", educationSchema);
