const express = require('express');
const router = express.Router();

const saveComment = require('./saveComment');
const getComment = require('./getComments');

//라우터 추가시 반영
router.use('/saveComment', saveComment);
// router.use('/getComment', getComment);

module.exports = router;