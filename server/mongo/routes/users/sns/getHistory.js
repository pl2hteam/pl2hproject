const express = require('express');
const router = express.Router();
const { Cart } = require("../../../schemas/Cart");

/////////////////////////////////////////////////////
/*                                                 */
/*        /api/mongo/users/sns/getHistory          */
/*                                                 */
/////////////////////////////////////////////////////

router.get("/", (req, res) => {
  Cart.findOne({ email: req.user.email }, (err, cart) => {
    res.status(200).json({ cart });
  });
});

module.exports = router;