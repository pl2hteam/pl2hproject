const express = require('express');
const router = express.Router();


const write = require('./write');
const read = require('./read');
const uploadimage = require('./uploadimage');



/* 내 상태 작성 */
router.use('/write', write);

/* 내 상태 메인 */
router.use('/read', read);
router.use('/uploadimage', uploadimage);



module.exports = router;