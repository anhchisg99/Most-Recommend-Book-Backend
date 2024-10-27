import express from "express";
const categoriesRoute = express.Router();
import {
  createCategoriesController,
  insertPeopleController,
  getSpecificCategoryController,
  getCategoriesController,
} from "../controllers/categories.controller.js";

categoriesRoute.get("/", getCategoriesController);
categoriesRoute.post("/create", createCategoriesController);
categoriesRoute.get("/:slug", getSpecificCategoryController);
categoriesRoute.put("/:categoriesId", insertPeopleController);

export default categoriesRoute;
