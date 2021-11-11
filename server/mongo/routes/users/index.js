const express = require("express");
const router = express.Router();
const register = require("./register");
const login = require("./login");
const logout = require("./logout");

const { auth } = require("../../middleware/auth");

router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

router.use("/register", register);
router.use("/login", login);
router.use("/logout", auth, logout);

router.post("/addToCart", auth, (req, res) => {
  // User.findOne({ _id: req.user._id }, (err, userInfo) => {
  //   let duplicate = false;
  //   console.log(userInfo);
  //   userInfo.cart.forEach((item) => {
  //     if (item.id == req.query.productId) {
  //       duplicate = true;
  //     }
  //   });
  //   if (duplicate) {
  //     User.findOneAndUpdate(
  //       { _id: req.user._id, "cart.id": req.query.productId },
  //       { $inc: { "cart.$.quantity": 1 } },
  //       { new: true },
  //       (err, userInfo) => {
  //         if (err) return res.json({ success: false, err });
  //         res.status(200).json(userInfo.cart);
  //       }
  //     );
  //   } else {
  //     User.findOneAndUpdate(
  //       { _id: req.user._id },
  //       {
  //         $push: {
  //           cart: {
  //             id: req.query.productId,
  //             quantity: 1,
  //             date: Date.now(),
  //           },
  //         },
  //       },
  //       { new: true },
  //       (err, userInfo) => {
  //         if (err) return res.json({ success: false, err });
  //         res.status(200).json(userInfo.cart);
  //       }
  //     );
  //   }
  // });
});

module.exports = router;
