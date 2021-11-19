const express = require("express");
const router = express.Router();

// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

const { User2nd } = require('../../models');


router.post('/', async (req, res, next) => { // POST /post
  try {
    //const IMG = req.body.img;

    const fullUser2nd = await User2nd.create({
      //image: IMG,
      couple_code: req.body.couple_code,
      message: req.body.message,
    });

    console.log(11);
    return res.status(200).json({ success: true, fullUser2nd });
  } catch (err) {
    return res.json({ success: false, err });
  }
});

module.exports = router;
