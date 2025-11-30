import model from "./model.js";

export const findAllModules = () => model.find();
export const findModulesByCourse = (cid) => model.find({ course: cid });
export const createModule = (m) => model.create(m);
export const updateModule = (id, module) => 
  model.findByIdAndUpdate(id, module, { new:true });
export const deleteModule = (id) => model.findByIdAndDelete(id);
