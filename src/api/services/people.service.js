import People from "../models/people.model.js";

export async function createPeople(people) {
  try {
    const { name, introduction } = people;
    return await People.create({ name, introduction });
  } catch (error) {
    console.error(error.message);
  }
}

export async function insertBooks(book) {
  try {
    const { name, sub, source, id } = book;
    const match = { _id: id };
    const updateField = { name: name, sub: sub, source: source };

    return await People.findOneAndUpdate(match, {
      $push: { books: updateField },
    });
  } catch (error) {
    console.error(error.message);
  }
}