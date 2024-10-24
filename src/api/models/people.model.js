import mongoose from "mongoose";
const { Schema } = mongoose;

const peopleSchema = Schema({
  name: String,
  introduction: String,
  books: Array,
  img: String,
});
const People = mongoose.model("People", peopleSchema);
export default People;
