import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  app.get("/api/modules", async (req,res)=>res.send(await dao.findAllModules()));
  app.get("/api/courses/:cid/modules", async (req,res)=>res.send(await dao.findModulesByCourse(req.params.cid)));
  app.post("/api/modules", async (req,res)=>res.send(await dao.createModule(req.body)));
  app.put("/api/modules/:id", async (req,res)=>res.send(await dao.updateModule(req.params.id,req.body)));
  app.delete("/api/modules/:id", async (req,res)=>res.send(await dao.deleteModule(req.params.id)));
}
