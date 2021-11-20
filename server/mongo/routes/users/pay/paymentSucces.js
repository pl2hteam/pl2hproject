const express = require("express");
const router = express.Router();
const { User } = require("../../../schemas/User");
const { Product } = require("../../../schemas/Product");
const { Payment } = require("../../../schemas/Payment");

const async = require("async");

router.post("/", (req, res) => {
  let history = [];
  let transactionData = {};

  req.body.cartDetail.forEach((item) => {
    history.push({
      dateOfPurchase: Date(),
      name: item.pdName,
      id: item._id,
      price: item.price,
      quantity: item.quantity,
      paymentId: req.body.paymentData.paymentID,
      images: item.images[0],
    });
  });

  if (req.user.gender) {
    transactionData.user = {
      name: req.user.name,
      email: req.user.email,
    };
  
  } else {
    transactionData.user = {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
    };
  
  }

  transactionData.data = req.body.paymentData;
  transactionData.product = history;

  User.findOneAndUpdate(
    { email: req.user.email },
    { $push: { history: history }, $set: { cart: [] } },
    { new: true },
    (err, user) => {
      if (err) return res.json({ success: false, err });

      const payment = new Payment(transactionData);
      payment.save((err, doc) => {
        if (err) return res.json({ success: false, err });

        let products = [];
        doc.product.forEach((item) => {
          products.push({ id: item.id, quantity: item.quantity });
        });

        async.eachSeries(
          products,
          (item, callback) => {
            Product.update(
              { _id: item.id },
              {
                $inc: {
                  sold: item.quantity,
                },
              },
              { new: false },
              callback
            );
          },
          (err) => {
            if (err) return res.json({ success: false, err });
            res.status(200).json({
              success: true,
              cart: user.cart,
              cartDetail: [],
            });
          }
        );
      });
    }
  );
});

module.exports = router;
