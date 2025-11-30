import model from "./model.js";

export const findAllUsers = ()=>model.find();
export const findUserById = (id)=>model.findById(id);
export const findUserByCredentials = (u,p)=>model.findOne({username:u,password:p});
export const createUser = (user)=>model.create(user);
export const updateUser = (id,data)=>model.findByIdAndUpdate(id,data,{new:true});
export const deleteUser = (id)=>model.findByIdAndDelete(id);
