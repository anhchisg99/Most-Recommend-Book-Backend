import mongoose from "mongoose";
const { Schema } = mongoose;

const categoriesSchema = Schema({
  name: String,
  peoples: [
    {
      type: Schema.Types.ObjectId,
      ref: "People",
    },
  ],
});

export default mongoose.model("Categories", categoriesSchema);
