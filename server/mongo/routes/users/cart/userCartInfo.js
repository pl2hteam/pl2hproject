const express = require("express");
const router = express.Router();
const { User } = require("../../../schemas/User");
const { Cart } = require("../../../schemas/Cart");
const { Product } = require("../../../schemas/Product");

/////////////////////////////////////////////////////
/*                                                 */
/*        /api/mongo/users/userCartInfo            */
/*                                                 */
/////////////////////////////////////////////////////

router.get("/", (req, res) => {
  if (req.user.gender){
    console.log(3333333333333333);
    Cart.findOne({ email: req.user.email }, (err, userInfo) => {
      let cart = userInfo.cart;
      let array = cart.map((item) => {
        return item.id;
      });
  
      Product.find({ _id: { $in: array } })
        .populate("seller")
        .exec((err, cartDetail) => {
          if (err) return res.status(400).send(err);
          return res.status(200).json({ success: true, cartDetail, cart });
        });
    });
  } else {
    User.findOne({ _id: req.user._id }, (err, userInfo) => {
      let cart = userInfo.cart;
      let array = cart.map((item) => {
        return item.id;
      });
  
      Product.find({ _id: { $in: array } })
        .populate("seller")
        .exec((err, cartDetail) => {
          if (err) return res.status(400).send(err);
          return res.status(200).json({ success: true, cartDetail, cart });
        });
    });
  }

});

module.exports = router;
