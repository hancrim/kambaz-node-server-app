import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function findAllCourses() {
  console.log("Finding all courses");
  return model.find();
}

export function deleteCourse(courseId) {
  console.log("Deleting course with ID:", courseId);
  return model.deleteOne({ _id: courseId });
}

export function createCourse(course) {
  const newCourse = { ...course, _id: uuidv4() };
  return model.create(newCourse);
}

export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}
