const express = require("express");
const { Product } = require("../../schemas/Product");
const router = express.Router();

router.post("/", (req, res) => {
  const product = new Product(req.body);

  product.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({ success: true });
  });
});

module.exports = router;