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
    return res.status(400).send(err);
  }
});

module.exports = router;
