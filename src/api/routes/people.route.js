import express from "express";
const peopleRoute = express.Router();
import uploadImg from "../utils/uploadImg.js";

import {
  createPeopleController,
  insertBooksController,
  getBooksFromPeopleController,
} from "../controllers/people.controller.js";

peopleRoute.post("/", uploadImg.single("image"), createPeopleController);
peopleRoute.put("/insert-book", insertBooksController);
peopleRoute.get("/:id", getBooksFromPeopleController);
export default peopleRoute;
