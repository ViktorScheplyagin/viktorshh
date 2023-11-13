import mongoose from "mongoose";

export async function connectMongoDB() {
  if (!mongoose.connection.readyState) {
    await mongoose.connect("mongodb://localhost:27017/cv2");
  }
}

export async function closeMongoDB() {
  if (mongoose.connection.readyState) {
    await mongoose.connection.close();
  }
}
