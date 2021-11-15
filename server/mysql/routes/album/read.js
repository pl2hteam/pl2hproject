const express = require("express");
const router = express.Router();

const { Image } = require("../../models");

router.post('/', async (req, res, next) => {
  try {
    const fullImage = await Image.findAll({
    });

    res.status(201).json({ success: true, fullImage });

  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
