// dotenv
import "dotenv/config.js";

// server
import express from "express";
const app = express();
const PORT = 3000;

import mongoose from "mongoose";
import bodyParser from "body-parser";
import categoriesRoute from "./src/api/routes/categories.route.js";
import peopleRoute from "./src/api/routes/people.route.js";

// multer
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//mongoose
mongoose.connect("mongodb://localhost/most-book");

app.get("/", (req, res) => {
  const test = process.env.TEST;
  res.send(`test ${test}`);
});
app.use("/categories", categoriesRoute);
app.use("/people", peopleRoute);
app.listen(PORT, () => {
  console.log(`listen in ${PORT}`);
});
