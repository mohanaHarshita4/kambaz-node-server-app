import model from "./model.js";

export const findAllEnrollments = ()=>model.find();
export const enrollStudent = (e)=>model.create(e);
export const unenrollStudent = (id)=>model.findByIdAndDelete(id);
export const findEnrollmentsByStudent = (sid)=>model.find({student:sid});
export const findEnrollmentsByCourse = (cid)=>model.find({course:cid});
