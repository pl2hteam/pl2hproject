<<<<<<< HEAD
const express = require("express");
const router = express.Router();

// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

const { User } = require('../../models');


router.post('/', async (req, res, next) => { // POST /post
  try {
    //const IMG = req.body.img;

    const fullAllUser = await User.create({
      //image: IMG,
      couple_code: req.body.couple_code,
    });

    console.log(11);
    return res.status(200).json({ success: true, fullAllUser });
  } catch (err) {
    return res.json({ success: false, err });
  }
});

module.exports = router;
=======
const express = require("express");
const router = express.Router();

// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

const { User } = require('../../models');


router.post('/', async (req, res, next) => { // POST /post
  try {
    //const IMG = req.body.img;

    const fullAllUser = await User.create({
      //image: IMG,
      couple_code: req.body.couple_code,
    });

    console.log(11);
    return res.status(200).json({ success: true, fullAllUser });
  } catch (err) {
    return res.json({ success: false, err });
  }
});

module.exports = router;
>>>>>>> origin/minjoo
