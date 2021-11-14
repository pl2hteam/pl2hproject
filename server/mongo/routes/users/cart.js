const express = require("express");
const router = express.Router();
const { User } = require("../../schemas/User");

router.get("/addToCart", (req, res) => {
  console.log(req.cookies.w_auth);
  User.findOne({ token: req.cookies.w_auth }, (err, userInfo) => {
    let duplicate;
    userInfo.cart.forEach((cartInfo) => {
      duplicate = false;
      if (cartInfo.id == req.query.pd_id) {
        duplicate = true;
      }
    });
    if (duplicate) {
      User.findOneAndUpdate(
        { token: req.cookies.w_auth, "cart.id": req.cookies.w_auth },
        { $inc: { "cart.$.quantity": 1 } },
        { new: true },
        (err, userInfo) => {
          if (err) return res.json({ success: false, err });
          res.status(200).json(userInfo.cart);
        }
      );
    } else {
      User.findOneAndUpdate(
        { token: req.cookies.w_auth },
        {
          $push: {
            cart: {
              token: req.cookies.w_auth,
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
});

module.exports = router;
