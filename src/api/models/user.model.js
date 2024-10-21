import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = Schema({
  username: String,
  password: String,
});

export default userSchema;
