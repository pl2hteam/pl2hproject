const express = require("express");
const { User } = require("../../schemas/User");
const { Product } = require("../../schemas/Product");
const router = express.Router();

/////////////////////////////////////////////////////
/*                                                 */
/*       /api/mongo/product/subscribeNumber        */
/*                                                 */
/////////////////////////////////////////////////////

router.get("/", (req, res) => {
  // 보류
});

module.exports = router;
