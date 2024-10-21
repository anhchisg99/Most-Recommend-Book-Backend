import User from "../models/user.model.js";

export async function createUser(user) {
  if (!user) {
    throw Error(error);
  }
  return await User.create({ username, password });
}
