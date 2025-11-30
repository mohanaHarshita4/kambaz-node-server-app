import mongoose from "mongoose";
import enrollmentSchema from "./schema.js";
const enrollmentModel = mongoose.model("enrollments", enrollmentSchema);
export default enrollmentModel;
