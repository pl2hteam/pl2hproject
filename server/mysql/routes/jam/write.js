const express = require("express");
const router = express.Router();

const { Jam, Image } = require('../../models');

router.post('/', async (req, res, next) => { // POST /post
  try {
    const IMGARR = req.body.img;

    const jam = await Jam.create({
      title: req.body.title,
      mood: req.body.mood,
      review: req.body.review,
      UserId: req.body.updater,
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
