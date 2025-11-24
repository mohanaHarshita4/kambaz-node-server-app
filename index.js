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

const app = express();

const allowedOrigins = [
  process.env.CLIENT_URL,
  "https://kambaz-next-js-md72.vercel.app",
  "https://kambaz-next-js-md72-git-main-mohana-harshitas-projects.vercel.app/",
  "http://localhost:3000", 
].filter(Boolean);

app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn(`CORS blocked origin: ${origin}`);
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

// Session configuration
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kambaz",
  resave: false,
  saveUninitialized: false,
};

if (process.env.SERVER_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}

app.use(session(sessionOptions));
app.use(express.json());

// ROOT ROUTE - ADD THIS
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

