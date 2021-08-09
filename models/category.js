const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Category iin neriig oruulna uu"],
    unique: true,
    trim: true,
    maxlength: [50, "Category iin name 50 char aas hetrehgui"],
  },
  description: {
    type: String,
    required: [true, "Category iin tailbariig zaaval oruulah yostoi"],
    maxlength: [
      500,
      "Categoy iin tailbariiin urt in deed tal in 500 char baih yostoi",
    ],
  },
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  averageRatting: {
    type: Number,
    min: [1, "Ratting unelgee hamgiin baga 1 baih yostoi"],

    max: [10, "Ratting unelgee hamgiin ihdee 10 baih yostoi"],
  },
  averagePrice: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Category", CategorySchema);
