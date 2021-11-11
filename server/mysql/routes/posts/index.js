const express = require('express');
const router = express.Router();

const multer = require("multer");
const path = require("path");
const fs = require('fs');

const { Post } = require("../../models");

const write = require('./write');
const read = require('./read');

try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads 폴더가 없으므로 생성합니다.');
  fs.mkdirSync('uploads');
}

/* 이미지 파일 이름 지정 */
const box = multer.diskStorage({
  destination(req, file, done) {
    done(null, "uploads/img/");
  },
  filename(req, file, done) { // 제로초.png
    const ext = path.extname(file.originalname); // 확장자 추출(.png)
    const basename = path.basename(file.originalname, ext); // 제로초
    done(null, basename + '_' + new Date().getTime() + ext); // 제로초15184712891.png
  },
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});

const upload = multer({ storage: box }).single("file");


/* 이미지 미리보기 */
router.post("/uploadImage", (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.json({ success: false, err });

    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});



//라우터 추가시 반영

/* 게시물 작성 */
router.use('/write', write);

/* 게시물 메인 */
router.use('/read', read);


module.exports = router;