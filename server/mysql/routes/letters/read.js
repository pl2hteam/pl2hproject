const express = require("express");
const router = express.Router();

const { Letter } = require("../../models");

router.post('/', async (req, res, next) => {
  try {
    const fullLetter = await Letter.findAll({
    });

    res.status(201).json({ success: true, fullLetter });

  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
