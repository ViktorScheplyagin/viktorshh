import mongoose from "mongoose";

const positionSchema = new mongoose.Schema({
  title: String,
  company: String,
  employmentPeriod: {
    from: Date,
    to: Date,
  },
  location: String,
  achievements: [String],
  responsibilities: [String],
});

export const Position =
  mongoose.models.Position || mongoose.model("Position", positionSchema);
