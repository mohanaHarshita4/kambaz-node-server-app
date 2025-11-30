import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  });

  app.get("/api/courses/:id", async (req, res) => {
    const course = await dao.findCourseById(req.params.id);
    res.send(course);
  });

  app.post("/api/courses", async (req, res) => {
    const newCourse = await dao.createCourse(req.body);
    res.send(newCourse);
  });

  app.put("/api/courses/:id", async (req, res) => {
    const updated = await dao.updateCourse(req.params.id, req.body);
    res.send(updated);
  });

  app.delete("/api/courses/:id", async (req, res) => {
    const status = await dao.deleteCourse(req.params.id);
    res.send(status);
  });
}
