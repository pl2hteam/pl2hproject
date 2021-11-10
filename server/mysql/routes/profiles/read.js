const express = require("express");
const router = express.Router();

const { Profile } = require("../../models");

router.post('/', async (req, res, next) => {
  try {
    const fullPost = await Profile.findAll({
    });

    res.status(201).json({ success: true, fullPost });

  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
