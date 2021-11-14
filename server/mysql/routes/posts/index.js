const express = require('express');
const router = express.Router();

const write = require('./write');
const read = require('./read');
const uploadimage = require('./uploadimage');
const comment = require('./comments');


//라우터 추가시 반영
router.use('/write', write);
router.use('/read', read);
router.use('/uploadimage', uploadimage);
router.use('/comment', comment);


module.exports = router;