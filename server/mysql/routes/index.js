const express = require('express');
const router = express.Router();
const user = require('./users');
const post = require('./posts')
const profile = require('./profiles');
const letter = require('./letters');
const album = require('./album');

// 라우터
router.use('/users', user);
router.use('/posts', post);
router.use('/profiles', profile);
router.use('/letters', letter);
router.use('/album', album);


module.exports = router;