const express = require('express');
const router = express.Router();
const user = require('./users');
const post = require('./posts')
const profile = require('./profiles');
const letter = require('./letters');
const album = require('./album');
const condition = require('./conditions')
<<<<<<< HEAD
const couple = require('./couple');
=======
const couple = require('./couple')
>>>>>>> origin/minjoo

// 라우터
router.use('/users', user);
router.use('/posts', post);
router.use('/profiles', profile);
router.use('/letters', letter);
router.use('/album', album);
router.use('/conditions', condition);
<<<<<<< HEAD
router.use('/couples', couple);
=======
router.use('/couples',couple);
>>>>>>> origin/minjoo


module.exports = router;