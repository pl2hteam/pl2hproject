const express = require("express");
const { Product } = require("../../models");
const { Image } = require("../../models");
const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  const Img = req.body.images;

  for(let i = 0; i < Img.length; i++) {
    console.log(Img[i]);
    await Image.create({
      src: Img[i],
    })
  }
});

module.exports = router;