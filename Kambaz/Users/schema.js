import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {type:String,required:true,unique:true},
  password: String,
  role: {type:String,default:"student"},
  email:String
},{collection:"users"});
export default userSchema;
