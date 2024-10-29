import express from "express";
const categoriesRoute = express.Router();
import {
  createCategoriesController,
  insertPeopleController,
  getSpecificCategoryController,
  getCategoriesController,
  insertBulkCategoriesController,
} from "../controllers/categories.controller.js";

categoriesRoute.get("/", getCategoriesController);
categoriesRoute.post("/create", createCategoriesController);
categoriesRoute.post("/insert-bulk", insertBulkCategoriesController);
categoriesRoute.get("/search/:slug", getSpecificCategoryController);
categoriesRoute.put("/:categoriesId", insertPeopleController);

export default categoriesRoute;
