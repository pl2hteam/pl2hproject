const express = require("express");
const router = express.Router();

const { Image } = require('../../models');


router.post('/', async (req, res, next) => { // POST /post
  try {
    const fullImage = await Image.create({
      id: req.body.id,
      src: req.body.src
    });

    res.status(201).json({ success: true, fullImage });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
