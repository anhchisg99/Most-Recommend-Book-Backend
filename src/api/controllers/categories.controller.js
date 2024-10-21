import {
  createCategories,
  getCategories,
} from "../services/categories.service.js";

export async function createCategoriesController(req, res) {
  try {
    const { name } = req.body;
    if (!name) {
      return res.stutus(401).json({ error: "not found" });
    }
    const categories = await createCategories(name);

    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ error });
  }
}

export async function getCategoriesController(req, res) {
  try {
    const categories = await getCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ error });
  }
}
