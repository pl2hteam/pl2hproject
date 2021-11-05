const express = require("express");
const router = express.Router();
const user = require("./users");
const product = require("./product");

router.use("/users", user);
router.use("/product", product);

module.exports = router;
