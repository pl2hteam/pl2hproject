const express = require("express");
const router = express.Router();
const { Profile } = require("../../models");

router.post('/', async (req, res, next) => {
  try {
    const fullProfile = await Profile.findAll({
    });
    res.status(201).json({ success: true, fullProfile });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
