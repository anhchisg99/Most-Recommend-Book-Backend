import express from "express";
const bookRoute = express.Router();
import uploadImg from "../utils/uploadImg.js";
import {
  getAllBooksController,
  getSpecificBookController,
  insertBookController,
  insertBulkBookController,
} from "../controllers/book.controller.js";

bookRoute.get("/", getAllBooksController);
bookRoute.get("/:slug", getSpecificBookController);
bookRoute.post("/insert", uploadImg.single("image"), insertBookController);
bookRoute.post("/insert-bulk", insertBulkBookController);

export default bookRoute;
