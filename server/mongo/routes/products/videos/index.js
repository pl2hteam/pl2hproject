const express = require("express");
const router = express.Router();
const uploadFiles = require('./uploadfiles');
const thumbnail = require("./thumbnail");

/////////////////////////////////////////////////////
/*                                                 */
/*           /api/mongo/product/video              */
/*                                                 */
/////////////////////////////////////////////////////

/* 동영상 업로드 */
router.use('/uploadfiles', uploadFiles);

/* thumbnail 생성 */
router.use('/thumbnail', thumbnail);

module.exports = router;