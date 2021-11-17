const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = mongoose.Schema({
    email: {
      type: String,
      trim: true,
      unique: 1,
    },
    cart: {
      type: Array,
      default: [],
    },
  }, { timestamps: true }
);

const Cart = mongoose.model('Cart', cartSchema);

module.exports = { Cart }