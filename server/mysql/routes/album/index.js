const express = require('express');
const router = express.Router();


const { Hashtag, Image } = require("../../models");

const write = require('./write');
const read = require('./read');
const uploadimage = require('./uploadimage');



/* 게시물 작성 */
router.use('/write', write);

/* 게시물 메인 */
router.use('/read', read);
router.use('/uploadimage', uploadimage);



module.exports = router;