const express = require("express");
const router = express.Router();
const { Letter } = require('../../models');

router.post('/', async (req, res, next) => { // POST /post
  try {
    const fullLetter = await Letter.create({
      to: req.body.to,
      title: req.body.title,
      content: req.body.content,
      from: req.body.from,
      ps: req.body.ps,
      createAt: req.body.createAt,
    });

    res.status(201).json({ success: true, fullLetter });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
