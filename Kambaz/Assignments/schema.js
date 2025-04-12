import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    course: { type: String, ref: "CourseModel" },
    description: String,
    points: Number,
    due_date_text: String,
    avail_date_text: String,
    due_date: String,
    avail_date: String,
    available_until: String,
  },
  { collection: "assignments" }
);
export default schema;
