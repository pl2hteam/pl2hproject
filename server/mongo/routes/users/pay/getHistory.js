const express = require("express");
const router = express.Router();
const { User } = require("../../../schemas/User");

router.get("/", (req, res) => {
  console.log(req.user.email);
  User.findOne({ email: req.user.email }, (err, doc) => {
    let history = doc.history;
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, history });
  });
});

module.exports = router;
