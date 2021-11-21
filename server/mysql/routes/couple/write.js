const express = require("express");
const router = express.Router();
const { User } = require('../../models');

router.post('/', async (req, res, next) => { // POST /post
  try {
    const fullAllUser = await User.create({
      couple_code: req.body.couple_code,
    });

    console.log(11);
    return res.status(200).json({ success: true, fullAllUser });
  } catch (err) {
    return res.json({ success: false, err });
  }
});

module.exports = router;
