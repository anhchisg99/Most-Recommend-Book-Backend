import express from "express";
const peopleRoute = express.Router();
import uploadImg from "../utils/uploadImg.js";

import {
  createPeopleController,
  insertBooksController,
  getBooksFromPeopleController,
  getPeoplesController,
  getPeopleSlugController,
  getPeoplesListController,
  searchByPeopleController,
} from "../controllers/people.controller.js";

peopleRoute.get("/", getPeoplesController);
peopleRoute.get("/search", searchByPeopleController);
peopleRoute.get("/lists", getPeoplesListController);
peopleRoute.post("/", uploadImg.single("image"), createPeopleController);
peopleRoute.put(
  "/insert-book",
  uploadImg.single("image"),
  insertBooksController
);
peopleRoute.get("/:slug", getPeopleSlugController);

// peopleRoute.get("/:id", getBooksFromPeopleController);

export default peopleRoute;
