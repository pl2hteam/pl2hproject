const express = require("express");
const router = express.Router();

const { Profile } = require('../../models');


router.post('/', async (req, res, next) => { // POST /post
  try {
    const fullProfile = await Profile.create({
      id: req.body.id,
      content: req.body.content
    });

    res.status(201).json({ success: true, fullProfile });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
