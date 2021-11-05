const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
  pdName: {
    type: String,
    trim: true,
    maxlength: 50,
  },
  pdNumber: {
    type: Schema.Types.ObjectId,
    trim: true,
    unique: 1,
  },
  description: {
    type: String,
    trim: true,
    minglength: 5,
  },
  price: {
    type: Number,
    trim: true,
    maxlength: 50,
  },
  image: String,
  tag: {
    type: String,
    trim: true,
  },
  brand: {
    type: String,
    maxlength: 50,
    trim: true,
  },
  quantity: {
    type: Number,
    trim: true,
  },
  seller: {
    type: String,
    maxlength: 50,
    trim: true,
    ref: "User",
  }, //                 판매자(?)
});

productSchema.index(
  {
    title: "text",
    description: "text",
  },
  {
    weights: {
      name: 5,
      description: 1,
    },
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
