const express = require("express");
const router = express.Router();
const { User } = require("../../schemas/User");
const { Product } = require("../../schemas/Product");
const { auth } = require("../../middleware/auth");
const { Payment } = require("../../schemas/Payment");

const async = require("async");

router.post("/successBuy", auth, (req, res) => {
  let history = [];
  let transactionData = {};
  console.log("판매팜낸ㅁㅇㅁㄴㅇㅁㄴㅇ");
  console.log(req.body.cartDetail);
  console.log("판매팜낸ㅁㅇㅁㄴㅇㅁㄴㅇ");

  //1. 구매내역 DB저장
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

  //2. 결제정보 DB 저장
  transactionData.user = {
    id: req.user._id,
    name: req.user.name,
    lastname: req.user.lastname,
    email: req.user.email,
  };

  transactionData.data = req.body.paymentData;
  transactionData.product = history;

  User.findOneAndUpdate(
    { _id: req.user._id },
    { $push: { history: history }, $set: { cart: [] } },
    { new: true },
    (err, user) => {
      if (err) return res.json({ success: false, err });

      const payment = new Payment(transactionData);
      payment.save((err, doc) => {
        if (err) return res.json({ success: false, err });

        //3. Increase the amount of number for the sold information

        //first We need to know how many product were sold in this transaction for
        // each of products

        let products = [];
        doc.product.forEach((item) => {
          products.push({ id: item.id, quantity: item.quantity });
        });

        // first Item    quantity 2
        // second Item  quantity 3

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

router.get("/getHistory", auth, (req, res) => {
  User.findOne({ _id: req.user._id }, (err, doc) => {
    let history = doc.history;
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, history });
  });
});

module.exports = router;
