const express = require("express");
const router = express.Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body); // POST /user/
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      }
    });
    if (exUser) {
      return res.json({ success: false });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    console.log(req.body);
    await User.create({
      email: req.body.email,
      name: req.body.name,
      password: hashedPassword,
    });
    return res.status(200).json({
      success: true
    });
  } catch (error) {
    return res.json({ success: false, error });
  }
});

module.exports = router;