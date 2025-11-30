import model from "./model.js";

// GET all courses
export const findAllCourses = () => model.find();

// GET one course by ID
export const findCourseById = (id) => model.findById(id);

// CREATE new course
export const createCourse = (course) => model.create(course);

// UPDATE course
export const updateCourse = (id, course) =>
    model.findByIdAndUpdate(id, course, { new: true });

// DELETE course
export const deleteCourse = (id) => model.findByIdAndDelete(id);
