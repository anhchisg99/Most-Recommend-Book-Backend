import Categories from "../models/categories.model.js";

export async function createCategories(name) {
  try {
    return await Categories.create({ name });
  } catch (error) {
    console.error(error.message);
  }
}

export async function getSpecificCategory(slug) {
  try {
    return await Categories.findOne({ slug: slug })
      .lean()
      .populate("peoples", "name img slug -_id");
  } catch (error) {
    console.error(erorr.message);
  }
}
export async function getCategories() {
  try {
    return await Categories.find({});
  } catch (error) {
    console.error(erorr.message);
  }
}

export async function insertPeople(_peopleId, _categoriesId) {
  try {
    const match = { _id: _categoriesId };
    return await Categories.findOneAndUpdate(match, {
      $push: { peoples: _peopleId },
    });
  } catch (error) {
    console.error(error.message);
  }
}
