const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema(
  {
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    pdName: {
      type: String,
      trim: true,
      maxlength: 50,
    },
    brandName: {
      type: String,
      maxlength: 50,
      trim: true,
    },
    description: {
      type: String,
      minglength: 50,
    },
    price: {
      type: Number,
      maxlength: 50,
    },
    images: {
      type: Array,
      default: [],
    },
    quantity: {
      type: Number,
      default: 0,
    },
    itemNumber: {
      type: Number,
      default: 1,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// productSchema.index(
//   {
//     title: "text",
//     description: "text",
//   },
//   {
//     weights: {
//       name: 5,
//       description: 1,
//     },
//   }
// );

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };