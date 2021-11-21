const express = require("express");
const { Product } = require("../../../schemas/Product");
const router = express.Router();

/////////////////////////////////////////////////////
/*                                                 */
/*       /api/mongo/product/products_by_id         */
/*                                                 */
/////////////////////////////////////////////////////

router.get("/", (req, res) => {
  let type = req.query.type;
  let pdnumbers = req.query.id;

  if (type === "array") {
    let ids = req.query.id.split(",");
    pdnumbers = [];
    pdnumbers = ids.map((item) => {
      return item;
    });
  }

  Product.find({ _id: { $in: pdnumbers } })
    .populate("seller")
    .exec((err, product) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send(product);
    });
});

module.exports = router;
