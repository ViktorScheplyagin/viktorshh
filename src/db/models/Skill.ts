import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: String,
  technologies: [String],
});

export const Skill =
  mongoose.models.Skill || mongoose.model("Skill", skillSchema);
