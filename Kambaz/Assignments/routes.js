import * as dao from "./dao.js";

export default function AssignmentRoutes(app){
  app.get("/api/assignments", async (req,res)=>res.send(await dao.findAssignments()));
  app.get("/api/assignments/:id", async (req,res)=>res.send(await dao.findAssignmentById(req.params.id)));
  app.get("/api/courses/:cid/assignments", async (req,res)=>res.send(await dao.findAssignmentsForCourse(req.params.cid)));
  app.post("/api/assignments", async (req,res)=>res.send(await dao.createAssignment(req.body)));
  app.put("/api/assignments/:id", async (req,res)=>res.send(await dao.updateAssignment(req.params.id,req.body)));
  app.delete("/api/assignments/:id", async (req,res)=>res.send(await dao.deleteAssignment(req.params.id)));
}
