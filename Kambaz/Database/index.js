import mongoose from "mongoose";

const CONNECTION_STRING = "mongodb://127.0.0.1:27017/kambaz";

mongoose.connect(CONNECTION_STRING)
  .then(() => console.log(" MongoDB Connected Successfully"))
  .catch(err => console.log(" MongoDB Connection Error:", err));

export default mongoose;
