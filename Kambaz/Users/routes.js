import * as dao from "./dao.js";

export default function UserRoutes(app){

  app.post("/api/users", async (req,res)=>res.send(await dao.createUser(req.body)));
  app.get("/api/users", async (req,res)=>res.send(await dao.findAllUsers()));
  app.get("/api/users/:id", async (req,res)=>res.send(await dao.findUserById(req.params.id)));
  app.post("/api/login", async (req,res)=>{
      const u = await dao.findUserByCredentials(req.body.username,req.body.password);
      if(!u) res.status(403).send("Invalid login");
      else res.send(u);
  });
  app.put("/api/users/:id", async (req,res)=>res.send(await dao.updateUser(req.params.id,req.body)));
  app.delete("/api/users/:id", async (req,res)=>res.send(await dao.deleteUser(req.params.id)));
}
