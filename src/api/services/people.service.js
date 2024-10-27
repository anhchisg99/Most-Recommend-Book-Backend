import People from "../models/people.model.js";

export async function createPeople(people) {
  try {
    const { name, introduction, image } = people;
    return await People.create({ name, introduction, img: image });
  } catch (error) {
    console.error(error.message);
  }
}
export async function getPeoples() {
  try {
    return await People.find({}).limit(4);
  } catch (error) {
    console.error(error.message);
  }
}
export async function getPeoplesList() {
  try {
    return await People.find({}).lean().select("name img -_id slug");
  } catch (error) {
    console.error(error.message);
  }
}
export async function insertBooks(book) {
  try {
    const { name, sub, source, id, image, author } = book;
    const match = { _id: id };
    const updateField = {
      name: name,
      sub: sub,
      source: source,
      img: image,
      author: author,
    };

    return await People.findOneAndUpdate(match, {
      $push: { books: updateField },
    });
  } catch (error) {
    console.error(error.message);
  }
}
// export async function getBooks(slug) {
//   try {
//     return await People.findOne({ slug }).select("books -_id");
//   } catch (error) {}
// }
export async function getBooksFromPeople(id) {
  try {
    return await People.find({ _id: id });
  } catch (error) {
    console.error(error.message);
  }
}
export async function getPeopleSlug(slug) {
  try {
    return await People.findOne({ slug: slug });
  } catch (error) {
    console.error(error.message);
  }
}
export async function searchByPeople(keyword) {
  try {
    // const regex = new RegExp(keyword,'i')

    return await People.find({ name: { $regex: keyword, $options: "i" } });
  } catch (error) {
    console.error(error.message);
  }
}
