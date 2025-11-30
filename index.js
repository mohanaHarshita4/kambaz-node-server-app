import "dotenv/config";
import express from "express";
import cors from "cors";
import session from "express-session";
import Lab5 from "./Lab5/index.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";
import mongoose from "mongoose";
import "./Kambaz/Database/index.js";

const CONNECTION_STRING =
  process.env.DATABASE_CONNECTION_STRING ||
  "mongodb+srv://mohanaharshita04_db_user:21B81A05c5@cluster0.cyendtl.mongodb.net/kambaz?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_STRING)
  .then(() => console.log(" MongoDB Atlas Connected"))
  .catch(err => console.log(" MongoDB Connection Error:", err));


const app = express();

// CORS MUST COME FIRST
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL || "http://localhost:3000",
  })
);

// SESSION CONFIGURATION
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kambaz",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,        // ← CHANGE THIS for local development
    httpOnly: true,
    sameSite: 'lax',      // ← ADD THIS
    maxAge: 24 * 60 * 60 * 1000  // 24 hours
  }
};

// Only use secure cookies in production
if (process.env.SERVER_ENV === "production") {
  sessionOptions.proxy = true;
  sessionOptions.cookie.secure = true;
  sessionOptions.cookie.sameSite = "none";
}

app.use(session(sessionOptions));
app.use(express.json());

// ROOT ROUTE
app.get("/", (req, res) => {
  res.send("Welcome to Full Stack Development!");
});

// ROUTES
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);
Lab5(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});