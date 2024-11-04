import Book from "../models/book.model.js";

export async function insertBook(book) {
  try {
    return await Book.create(book);
  } catch (error) {
    console.error(error.message);
  }
}
export async function insertBulkBook(books) {
  try {
    return await Book.insertMany(books);
  } catch (error) {
    console.error(error.message);
  }
}
export async function getAllBooks() {
  try {
    return await Book.find({}).select("title slug");
  } catch (error) {
    console.error(error.message);
  }
}
export async function getSpecificBook(slug) {
  try {
    return await Book.findOne({ slug });
  } catch (error) {
    console.error(error.message);
  }
}
