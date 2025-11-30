import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true, unique: true },
  section: String,
  credits: Number,
  description: String,
  startDate: Date,
  endDate: Date
}, { collection: "courses" });
export default courseSchema;
