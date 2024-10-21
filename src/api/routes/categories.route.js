import express from "express";
const categoriesRoute = express.Router();
import {
  createCategoriesController,
  getCategoriesController,
} from "../controllers/categories.controller.js";

categoriesRoute.post("/create", createCategoriesController);
categoriesRoute.get("/", getCategoriesController);

export default categoriesRoute;
