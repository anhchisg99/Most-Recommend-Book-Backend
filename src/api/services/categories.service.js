import Categories from "../models/categories.model.js";

export async function createCategories(name) {
  try {
    return await Categories.create({ name });
  } catch (error) {
    console.error(error.message);
  }
}

export async function getCategories() {
  try {
    return await Categories.find({}).select("name -_id");
  } catch (error) {
    console.error(error.message);
  }
}
