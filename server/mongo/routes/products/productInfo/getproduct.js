const express = require("express");
const { Product } = require("../../../schemas/Product");
const router = express.Router();

/////////////////////////////////////////////////////
/*                                                 */
/*         /api/mongo/product/getProducts          */
/*                                                 */
/////////////////////////////////////////////////////

router.post("/", (req, res) => {
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;

  let findArgs = {};
  let term = req.body.searchTerm;

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === "price") {
        findArgs[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1],
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  if (term) {
    Product.find(findArgs)
      .find({ $text: { $search: term } })
      .populate("seller")
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