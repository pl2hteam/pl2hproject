const express = require("express");
const { Product } = require("../../schemas/Product");
const router = express.Router();

router.post("/", (req, res) => {
  // let order = req.body.order ? req.body.order : "desc";
  // let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;

  let findArgs = {};
  let term = req.body.searchTerm;

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === "price") {
        findArgs[key] = {
          $gte: req.body.filters[key][0], // $gte : 몽고디비 용어로 해당 값보다 크거나 같음
          $lte: req.body.filters[key][1], // $lte : 몽고디비 용어로 해당 값보다 작거나 같음
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  console.log('findArgs : ', findArgs);
  if (term) {
    Product.find(findArgs)
      .find({ $text: { $search: term } })
      .populate("seller")
      // .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .exec((err, productInfo) => {
        if (err) return res.status(400).json({ success: false, err });
        return res
          .status(200)
          .json({ success: true, productInfo, postSize: productInfo.length });
      });
  } else {
    Product.find(findArgs)
      .populate("seller")
      .skip(skip)
      .limit(limit)
      .exec((err, products) => {
        if (err) return res.status(400).json({ success: false, err });
        res
          .status(200)
          .json({ success: true, products, postSize: products.length });
      });
  }
});

module.exports = router;