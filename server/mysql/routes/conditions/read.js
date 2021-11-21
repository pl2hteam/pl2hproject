const express = require("express");
const router = express.Router();
const { User } = require("../../models");

router.post('/', async (req, res, next) => {
  try {
    const fullUser = await User.findOne(
      {
        where: req.body.id
      }
    );

    res.status(201).json({ success: true, fullUser });
  } catch (error) {
    console.error(error);
    return res.status(400).send(err);
  }
});

module.exports = router;
