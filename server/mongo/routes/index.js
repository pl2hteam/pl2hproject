const express = require('express');
const router = express.Router();
const logs = require('./logs/logs');
const product = require("./products/product");

router.use("/users", logs);
router.use("/product", product);

module.exports = router;