const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = mongoose.Schema({
    name: {
      type: String,
      maxlength: 50,
    },
    email: {
      type: String,
      trim: true,
      unique: 1,
    },
    gender: { // 판매자 구분 용도
      type: Number,
      default: 0,
    },
    address: {
      type: String,
      maxlength: 50,
    },
    phone: {
      type: Number,
    },
    cart: {
      type: Array,
      default: [],
    },
    history: {
      type: Array,
      default: [],
    },
  }, { timestamps: true }
);

const Cart = mongoose.model('Cart', cartSchema);

module.exports = { Cart }