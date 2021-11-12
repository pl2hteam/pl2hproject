const express = require("express");
const router = express.Router();
const { User } = require("../../schemas/User");
const { auth } = require("../../middleware/auth");

// router.get("/addToCart", (req, res) => {
//   console.log(req.cookies.w_auth);
//   User.find({ token: req.cookies.w_auth }, (err, userInfo) => {
//     let duplicate;
//     userInfo.cart.forEach((cartInfo) => {
//       duplicate = false;
//       if (cartInfo.id == req.query.pd_id) {
//         duplicate = true;
//       }
//     });
//     if (duplicate) {
//       User.findOneAndUpdate(
//         { token: req.cookies.w_auth, "cart.id": req.cookies.w_auth },
//         { $inc: { "cart.$.quantity": 1 } },
//         { new: true },
//         (err, userInfo) => {
//           if (err) return res.json({ success: false, err });
//           res.status(200).json(userInfo.cart);
//         }
//       );
//     } else {
//       User.findOneAndUpdate(
//         { token: req.cookies.w_auth },
//         {
//           $push: {
//             cart: {
//               token: req.cookies.w_auth,
//               quantity: 1,
//               date: Date.now(),
//             },
//           },
//         },
//         { new: true },
//         (err, userInfo) => {
//           if (err) return res.json({ success: false, err });
//           res.status(200).json(userInfo.cart);
//         }
//       );
//     }
//   });
// });
router.get("/addToCart", auth, (req, res) => {
  User.findOne({ _id: req.user._id }, (err, userInfo) => {
    let duplicate = false;

    console.log(userInfo);

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
        .populate("writer")
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
      .populate("writer")
      .exec((err, cartDetail) => {
        if (err) return res.status(400).send(err);
        return res.status(200).json({ success: true, cartDetail, cart });
      });
  });
});

module.exports = router;
