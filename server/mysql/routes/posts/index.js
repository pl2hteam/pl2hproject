const express = require('express');
const router = express.Router();

const write = require('./write');
const read = require('./read');
const uploadimage = require('./uploadimage');


//라우터 추가시 반영
router.use('/write', write);
router.use('/read', read);
router.use('/uploadimage', uploadimage);


module.exports = router;