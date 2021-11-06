const express = require("express");
const { Product } = require("../../schemas/Product");
const router = express.Router();

router.post("/", (req, res) => {
  // let order = req.body.order ? req.body.order : "desc";
  // let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  // let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  // let skip = parseInt(req.body.skip);

  // let findArgs = {};
  // let term = req.body.searchTerm;

  // for (let key in req.body.filters) {
  //   if (req.body.filters[key].length > 0) {
  //     if (key === "price") {
  //       findArgs[key] = {
  //         $gte: req.body.filters[key][0],
  //         $lte: req.body.filters[key][1],
  //       };
  //     } else {
  //       findArgs[key] = req.body.filters[key];
  //     }
  //   }
  // }

  // if (term) { findArgs products, postSize: products.length
    Product.find()
      // .find({ $text: { $search: term } })
      .populate("seller")
      // .sort([[sortBy, order]])
      // .skip(skip)
      // .limit(limit)
      .exec((err, products) => {
        if (err) return res.status(400).json({ success: false, err });
        return res
          .status(200)
          .json({ success: true });
      });
  // } else {
  //   Product.find(findArgs)
  //     .populate("seller")
  //     .sort([[sortBy, order]])
  //     .skip(skip)
  //     .limit(limit)
  //     .exec((err, products) => {
  //       if (err) return res.status(400).json({ success: false, err });
  //       res
  //         .status(200)
  //         .json({ success: true, products, postSize: products.length });
  //     });
  // }
});

module.exports = router;