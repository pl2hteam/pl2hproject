const express = require("express");
const router = express.Router();
const { User } = require("../../schemas/User");
const { Product } = require("../../schemas/Product");
const { auth } = require("../../middleware/auth");

// 장바구니에 추가
router.get("/addToCart", auth, (req, res) => {
  // User DB에서 사용자의 _id를 찾아서 그 DB 내용 전체를
  // userInfo에 때려넣음
  User.findOne({ _id: req.user._id }, (err, userInfo) => {
    let duplicate = false;

    // 사용자DB의 장바구니에 들어있는 상품종류만큼
    userInfo.cart.forEach((item) => {
      if (item.id == req.query.productId) {
        duplicate = true;
      }
    });

    if (duplicate) {
      User.findOneAndUpdate(
        { _id: req.user._id, "cart.id": req.query.productId },
        { $inc: { "cart.$.quantity": 1 } },
        { new: true },
        (err, userInfo) => {
          if (err) return res.json({ success: false, err });
          res.status(200).json(userInfo.cart);
        }
      );
    } else {
      User.findOneAndUpdate(
        { _id: req.user._id },
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
});

router.get("/removeFromCart", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    {
      $pull: { cart: { id: req.query._id } },
    },
    { new: true },
    (err, userInfo) => {
      let cart = userInfo.cart;
      let array = cart.map((item) => {
        return item.id;
      });

      Product.find({ _id: { $in: array } })
        .populate("seller")
        .exec((err, cartDetail) => {
          return res.status(200).json({
            cartDetail,
            cart,
          });
        });
    }
  );
});

router.get("/userCartInfo", auth, (req, res) => {
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
});

module.exports = router;
