import {
  createPeople,
  insertBooks,
  getBooksFromPeople,
  getPeoples,
  getPeopleSlug,
  getPeoplesList,
  searchByPeople,
  // getBooks,
} from "../services/people.service.js";

export async function getPeoplesController(req, res) {
  try {
    const peoples = await getPeoples();
    res.send(peoples);

    // return res.status(200).json(peoples);
  } catch (error) {
    res.status(400).json({ error });
  }
}
export async function getPeoplesListController(req, res) {
  try {
    const peoples = await getPeoplesList();
    res.send(peoples);
    // return res.status(200).json(peoples);
  } catch (error) {
    res.status(400).json({ error });
  }
}
export async function createPeopleController(req, res) {
  try {
    let image = req.file.path;

    const { name, introduction } = req.body;

    if (!name || !introduction || !image) {
      return res.stutus(401).json({ error: "not found" });
    }
    const people = await createPeople({ name, introduction, image });
    res.status(200).json(people);
  } catch (error) {
    res.status(400).json({ error });
  }
}

export async function insertBooksController(req, res) {
  try {
    const { id, name, sub, source, author } = req.body;
    let image = req.file.path;
    if (!name || !sub || !source || !id || !image || !author) {
      return res.status(401).json({ error: "not found insertBok" });
    }
    const book = await insertBooks({ name, sub, source, id, image, author });

    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error });
  }
}
// export async function getBooksController(req, res) {
//   try {
//     const { slug } = req.params;
//     if (!slug) {
//       return res.status(401).json({ error: "not found slug" });
//     }
//     const books = await getBooks(slug);
//     res.status(200).json(books);
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// }
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
export async function getPeopleSlugController(req, res) {
  try {
    const { slug } = req.params;
    if (!slug) {
      return res.status(401).json({ error: "not found slug" });
    }
    const peopelBook = await getPeopleSlug(slug);
    res.status(200).json({ people: peopelBook });
  } catch (error) {
    res.status(400).json({ error });
  }
}

export async function searchByPeopleController(req, res) {
  try {
    const { q } = req.query;
    const people = await searchByPeople(q);
    res.status(200).json({ people });
  } catch (error) {
    res.status(400).json({ error });
  }
}
