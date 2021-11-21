const express = require("express");
const router = express.Router();
const { User } = require('../../models');

router.post('/', async (req, res, next) => { // POST /post
  try {
    const fullUser = await User.create({
      couple_code: req.body.couple_code,
      message: req.body.message,
    });

    return res.status(200).json({ success: true, fullUser });
  } catch (err) {
    return res.json({ success: false, err });
  }
});

module.exports = router;
