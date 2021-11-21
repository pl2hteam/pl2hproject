const express = require("express");
const { Image } = require("../../models");
const router = express.Router();

router.post("/", async (req, res) => {
  const Img = req.body.images;

  for(let i = 0; i < Img.length; i++) {
    await Image.create({
      src: Img[i],
    })
  }
});

module.exports = router;