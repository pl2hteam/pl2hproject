const express = require('express');
const router = express.Router();
const user = require('./users');
const product = require("./products");

/////////////////////////////////////////////////////
/*                                                 */
/*                  /api/mongo                     */
/*                                                 */
/////////////////////////////////////////////////////

/* 판매자 정보 */
router.use("/users", user);

/* 메인 상품 정보 */
router.use("/product", product);

module.exports = router;