import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = Schema(
  {
    title: String,
    img: String,
    author: String,
    genre: String,
    description: String,
    summaries: String,
    slug: { type: String, slug: "title" },
  },
  { timestamps: true }
);
bookSchema.pre("save", function (next) {
  this.slug = this.title.split(" ").join("-").toLowerCase();

  next();
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
