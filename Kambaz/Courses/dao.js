import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findAllCourses() {
  return Database.courses;
}
export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = Database;
  const enrolledCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === userId && enrollment.course === course._id
    )
  );
  return enrolledCourses;
}

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  console.log("Enrolling user in course");
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

export function unenrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  console.log("Un-enrolling user in course");
  Database.enrollments = enrollments.filter(
    (enrollment) =>
      !(enrollment.course === courseId && enrollment.user === userId)
  );
}

export function createCourse(course) {
  console.log(course);
  const newCourse = { ...course, _id: uuidv4() };
  Database.courses = [...Database.courses, newCourse];
  return newCourse;
}

export function deleteCourse(courseId) {
  const { courses, enrollments } = Database;
  Database.courses = courses.filter((course) => course._id !== courseId);
  Database.enrollments = enrollments.filter(
    (enrollment) => enrollment.course !== courseId
  );
}
export function updateCourse(courseId, courseUpdates) {
  const { courses } = Database;
  const course = courses.find((course) => course._id === courseId);
  Object.assign(course, courseUpdates);
  return course;
}
