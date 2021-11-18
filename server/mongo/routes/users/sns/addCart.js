const express = require('express');
const router = express.Router();
const { Cart } = require("../../../schemas/Cart");

/////////////////////////////////////////////////////
/*                                                 */
/*          /api/mongo/users/sns/addCart           */
/*                                                 */
/////////////////////////////////////////////////////

router.post("/", (req, res) => {
  const cart = new Cart(req.body);

  cart.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
        success: true
    });
  });
});

module.exports = router;