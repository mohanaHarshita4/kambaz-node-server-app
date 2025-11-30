import * as dao from "./dao.js";

export default function EnrollmentRoutes(app){
    app.get("/api/enrollments", async (req,res)=>res.send(await dao.findAllEnrollments()));
    app.get("/api/students/:sid/enrollments", async (req,res)=>res.send(await dao.findEnrollmentsByStudent(req.params.sid)));
    app.get("/api/courses/:cid/enrollments", async (req,res)=>res.send(await dao.findEnrollmentsByCourse(req.params.cid)));
    app.post("/api/enrollments", async (req,res)=>res.send(await dao.enrollStudent(req.body)));
    app.delete("/api/enrollments/:id", async (req,res)=>res.send(await dao.unenrollStudent(req.params.id)));
}
