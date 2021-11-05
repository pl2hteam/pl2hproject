const express = require('express');
const router = express.Router();
const logs = require('./logs/logs');

router.use("/users", logs);

module.exports = router;