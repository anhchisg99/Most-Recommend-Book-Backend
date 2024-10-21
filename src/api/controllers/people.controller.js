import {
  createPeople,
  insertBooks,
  getBooksFromPeople,
} from "../services/people.service.js";

export async function createPeopleController(req, res) {
  try {
    const { name, introduction } = req.body;

    if (!name || !introduction) {
      return res.stutus(401).json({ error: "not found" });
    }
    const people = await createPeople({ name, introduction });
    res.status(200).json(people);
  } catch (error) {
    res.status(400).json({ error });
  }
}

export async function insertBooksController(req, res) {
  try {
    const { id, name, sub, source } = req.body;
    if (!name || !sub || !source || !id) {
      return res.status(401).json({ error: "not found" });
    }
    const book = await insertBooks({ name, sub, source, id });

    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error });
  }
}
export async function getBooksFromPeopleController(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(401).json({ error: "not found id" });
    }
    const books = await getBooksFromPeople(id);
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ error });
  }
}
