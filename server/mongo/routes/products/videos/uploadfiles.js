const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require("multer");

/////////////////////////////////////////////////////
/*                                                 */
/*      /api/mongo/product/video/uploadfiles       */
/*                                                 */
/////////////////////////////////////////////////////

/* 동영상 파일 이름 지정 */
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.mp4') {
      return cb(res.status(400).end('mp4 만 가능합니다.'), false);
    }
    cb(null, true)
  }
})

const upload = multer({ storage: storage }).single("file");

/* 동영상 미리보기 */
router.post('/', (req, res) => {
  upload(req, res, err => {
    if (err) {
      return res.json({ success: false, err })
    }
    console.log(res.req);
    return res.json({ 
      success: true, 
      url: res.req.file.path, 
      fileName: res.req.file.filename
    })
  })
})

module.exports = router;