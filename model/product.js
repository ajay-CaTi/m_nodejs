const mongoose = require("mongoose");
const { Schema } = require("mongoose");

// Schema
const productSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  ratings: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

exports.Product = mongoose.model("Product", productSchema);
