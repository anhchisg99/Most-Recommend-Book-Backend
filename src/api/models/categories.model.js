import mongoose from "mongoose";
const { Schema } = mongoose;

const categoriesSchema = Schema({
  name: String,
  slug: { type: String, slug: "name" },

  peoples: [
    {
      type: Schema.Types.ObjectId,
      ref: "People",
    },
  ],
});
categoriesSchema.pre("save", function (next) {
  this.slug = this.name.split(" ").join("-");
  next();
});

export default mongoose.model("Categories", categoriesSchema);
