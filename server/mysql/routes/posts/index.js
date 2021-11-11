const express = require('express');
const router = express.Router();

const write = require('./write');
const uploadImage = require('./uploadImage');
const uploadProduct = require('./uploadProduct');


//라우터 추가시 반영
router.use('/write', write);
router.use('/uploadImage', uploadImage);
router.use('/uploadProduct', uploadProduct);


module.exports = router;