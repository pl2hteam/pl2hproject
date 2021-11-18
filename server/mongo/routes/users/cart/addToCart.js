const express = require("express");
const router = express.Router();
const { User } = require("../../../schemas/User");
const { Cart } = require("../../../schemas/Cart");

/////////////////////////////////////////////////////
/*                                                 */
/*          /api/mongo/users/addToCart             */
/*                                                 */
/////////////////////////////////////////////////////

router.get("/", (req, res) => {
  if (req.user.gender) {
    Cart.findOne({ email: req.user.email }, (err, userInfo) => {
      let duplicate = false;
  
      userInfo.cart.forEach((item) => {
        if (item.id == req.query.productId) {
          duplicate = true;
        }
      });
  
      if (duplicate) {
        Cart.findOneAndUpdate(
          { email: req.user.email, "cart.id": req.query.productId },
          { $inc: { "cart.$.quantity": 1 } },
          { new: true },
          (err, userInfo) => {
            if (err) return res.json({ success: false, err });
            res.status(200).json(userInfo.cart);
          }
        );
      } else {
        Cart.findOneAndUpdate(
          { email: req.user.email },
          {
            $push: {
              cart: {
                id: req.query.productId,
                quantity: 1,
                date: Date.now(),
              },
            },
          },
          { new: true },
          (err, userInfo) => {
            if (err) return res.json({ success: false, err });
            res.status(200).json(userInfo.cart);
          }
        );
      }
    });
  } else {
    User.findOne({ email: req.user.email }, (err, userInfo) => {
      let duplicate = false;
  
      userInfo.cart.forEach((item) => {
        if (item.id == req.query.productId) {
          duplicate = true;
        }
      });
  
      if (duplicate) {
        User.findOneAndUpdate(
          { email: req.user.email, "cart.id": req.query.productId },
          { $inc: { "cart.$.quantity": 1 } },
          { new: true },
          (err, userInfo) => {
            if (err) return res.json({ success: false, err });
            res.status(200).json(userInfo.cart);
          }
        );
      } else {
        User.findOneAndUpdate(
          { email: req.user.email },
          {
            $push: {
              cart: {
                id: req.query.productId,
                quantity: 1,
                date: Date.now(),
              },
            },
          },
          { new: true },
          (err, userInfo) => {
            if (err) return res.json({ success: false, err });
            res.status(200).json(userInfo.cart);
          }
        );
      }
    });
  }

});

module.exports = router;