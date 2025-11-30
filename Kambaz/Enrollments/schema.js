import mongoose from "mongoose";
const enrollmentSchema = new mongoose.Schema({
  student:String,
  course:String,
  dateEnrolled:{type:Date,default:Date.now}
},{collection:"enrollments"});
export default enrollmentSchema;
