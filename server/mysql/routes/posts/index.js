const express = require('express');
const router = express.Router();

const write = require('./write');


//라우터 추가시 반영
router.use('/write', write);


module.exports = router;