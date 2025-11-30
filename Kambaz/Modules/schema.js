import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
  course: { type: String, required: true },  
  name: String,
  description: String,
  lessons: [{ title:String, content:String }]
},{ collection:"modules" });
export default moduleSchema;
