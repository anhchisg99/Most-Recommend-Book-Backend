import express from "express";
const peopleRoute = express.Router();
import {
  createPeopleController,
  insertBooksController,
  getBooksFromPeopleController,
} from "../controllers/people.controller.js";

peopleRoute.post("/", createPeopleController);
peopleRoute.put("/insert-book", insertBooksController);
peopleRoute.get("/:id", getBooksFromPeopleController);
export default peopleRoute;
