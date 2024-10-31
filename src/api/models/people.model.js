import mongoose from "mongoose";

const { Schema } = mongoose;

const opts = { toJSON: { virtuals: true } };
const peopleSchema = Schema(
  {
    name: String,
    introduction: String,
    books: Array,
    img: String,
    slug: { type: String, slug: "name" },
    num_of_books: Number,
  },
  opts
);

// books: {img, name,sub,author,source}

peopleSchema.pre("save", function (next) {
  this.slug = this.name.split(" ").join("-");
  next();
});

peopleSchema.virtual("totalBooks").get(function () {
  return this.books.length;
  // return sum;
});
const People = mongoose.model("People", peopleSchema);
export default People;
