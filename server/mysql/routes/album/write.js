const express = require("express");
const router = express.Router();

const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { Hashtag, Image } = require('../../models');


router.post('/', async (req, res, next) => { // POST /post
  try {
    const IMGARR = req.body.img;

    const hashtag = await Hashtag.create({
      title: req.body.title,
      UserId: req.body.seller,
    });

    for (let i = 0; i < IMGARR.length; i++) {
      console.log(IMGARR[i]);
      await Image.create({
        src: IMGARR[i],
        HashtagId: hashtag.id

      })
    };

    return res.status(200).json({ success: true, hashtag });
  } catch (err) {
    return res.json({ success: false, err });
  }
});

module.exports = router;
