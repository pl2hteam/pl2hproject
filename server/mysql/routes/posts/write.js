const express = require("express");
const router = express.Router();

const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { Post, Image } = require('../../models');


//플젝 인덱스에 넣어줌
try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads 폴더가 없으므로 생성합니다.');
  fs.mkdirSync('uploads');
}

//플젝 인덱스에 넣어줌
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) { // 제로초.png
      const ext = path.extname(file.originalname); // 확장자 추출(.png)
      const basename = path.basename(file.originalname, ext); // 제로초
      done(null, basename + '_' + new Date().getTime() + ext); // 제로초15184712891.png
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});


router.post('/', upload.none(), async (req, res, next) => { // POST /post
  try {
    const fullPost = await Post.create({
      //id: req.body.id,
      title: req.body.title,
      content: req.body.content,
      //img: req.body.img,
      views: req.body.views,
    });

    if (req.body.image) {
      if (Array.isArray(req.body.image)) { // 이미지를 여러 개 올리면 image: [제로초.png, 부기초.png]
        const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image })));
        await fullPost.addImages(images);
      } else { // 이미지를 하나만 올리면 image: 제로초.png
        const image = await Image.create({ src: req.body.image });
        await fullPost.addImages(image);
      }
    }

    res.status(201).json({ success: true, fullPost });
    console.log(res);

  } catch (error) {
    console.error(error);
    res.json({ success: false })
    next(error);
  }
});


router.post('/images', upload.array('img'), (req, res, next) => { // POST /post/images
  console.log(req.files);
  res.json(req.files.map((v) => v.filename));
});

// // upload.array('img'),




module.exports = router;