import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
  title:String,
  course:String,
  module:String,
  dueDate:Date,
  points:Number,
  description:String
},{collection:"assignments"});
export default assignmentSchema;
