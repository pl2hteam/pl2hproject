const express = require("express");
const router = express.Router();

const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { Jam, Image } = require('../../models');


router.post('/', async (req, res, next) => { // POST /post
  try {
    const IMGARR = req.body.img;

    const jam = await Jam.create({
      title: req.body.title,
      UserId: req.body.seller,
    });

    for (let i = 0; i < IMGARR.length; i++) {
      console.log(IMGARR[i]);
      await Image.create({
        src: IMGARR[i],
        JamId: jam.id

      })
    };

    return res.status(200).json({ success: true, jam });
  } catch (err) {
    return res.json({ success: false, err });
  }
});

module.exports = router;
