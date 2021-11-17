const express = require("express");
const { User } = require("../../schemas/User");
const { Product } = require("../../schemas/Product");
const router = express.Router();

/////////////////////////////////////////////////////
/*                                                 */
/*       /api/mongo/product/products_by_id         */
/*                                                 */
/////////////////////////////////////////////////////

router.get("/", (req, res) => {
  let type = req.query.type;
  let pdnumbers = req.query.id;

  console.log("상품 타입 ////////////////////////", req.query.type);
  console.log("상품 아이디 ////////////////////////", req.query.id);

  if (type === "array") {
    let ids = req.query.id.split(",");
    pdnumbers = [];
    pdnumbers = ids.map((item) => {
      return item;
    });
  }

  console.log("pdnumbers /////////////////////", pdnumbers);

  //we need to find the product information that belong to product Id
  Product.find({ _id: { $in: pdnumbers } })
    .populate("seller")
    .exec((err, product) => {
      if (err) return res.status(400).send(err);
      console.log("반환하고 자 하는 값 ///////////////////////////", product);
      return res.status(200).send(product);
    });
});

module.exports = router;
