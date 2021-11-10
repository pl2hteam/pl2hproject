const express = require('express');
const router = express.Router();
const user = require('./users');
const post = require('./posts')
const profile = require('./profiles');

// 라우터
router.use('/users', user);
router.use('/posts', post);
router.use('/profiles', profile);


module.exports = router;