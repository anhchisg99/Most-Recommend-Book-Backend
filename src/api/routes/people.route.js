import express from "express";
const peopleRoute = express.Router();
import {
  createPeopleController,
  insertBooksController,
} from "../controllers/people.controller.js";

peopleRoute.post("/", createPeopleController);
peopleRoute.put("/insert-book", insertBooksController);
export default peopleRoute;
