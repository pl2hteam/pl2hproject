const express = require('express');
const router = express.Router();

const saveComment = require('./saveComment');

//라우터 추가시 반영
router.use('/saveComment', saveComment);

module.exports = router;