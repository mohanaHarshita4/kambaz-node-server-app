import model from "./model.js";

export const findAssignments = () => model.find();
export const findAssignmentById = (id) => model.findById(id);
export const findAssignmentsForCourse = (cid)=>model.find({course:cid});
export const createAssignment = (a) => model.create(a);
export const updateAssignment = (id,a) => model.findByIdAndUpdate(id,a,{new:true});
export const deleteAssignment = (id) => model.findByIdAndDelete(id);
