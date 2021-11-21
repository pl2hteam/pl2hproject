const express = require('express');
const router = express.Router();
const write = require('./write');
const read = require('./read');
const update = require('./update');
const uploadimage = require('./uploadimage');

router.use('/write', write);
router.use('/read', read);
router.use('/update', update);
router.use('/uploadimage', uploadimage);

module.exports = router;