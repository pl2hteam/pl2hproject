const express = require("express");
const router = express.Router();

const { Comment, User } = require("../../../models");


router.post("/", async (req, res) => {
  console.log(req.body);
  
})

module.exports = router;