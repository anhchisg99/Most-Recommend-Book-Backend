import {
  getAllBooks,
  getSpecificBook,
  insertBook,
  insertBulkBook,
} from "../services/book.service.js";

export async function insertBookController(req, res) {
  try {
    const { title, author, genre, description, summaries } = req.body;
    let img = req.file.path;

    // if (!title || !author || !genre || description || !summaries) {
    //   return res.status(401).json({ error: "not foudn insertBook parameters" });
    // }
    const book = await insertBook({
      title,
      img,
      author,
      genre,
      description,
      summaries,
    });
    res.status(200).json({ book });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function insertBulkBookController(req, res) {
  try {
    const { bookList } = req.body;
    await insertBulkBook(bookList);
    res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(400).json({ error });
  }
}
export async function getAllBooksController(req, res) {
  try {
    const books = await getAllBooks();
    res.status(200).json({ books });
  } catch (error) {
    res.status(400).json({ error });
  }
}
export async function getSpecificBookController(req, res) {
  try {
    const { slug } = req.params;
    const book = await getSpecificBook(slug);
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error });
  }
}
