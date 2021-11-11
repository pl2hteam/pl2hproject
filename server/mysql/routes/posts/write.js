const express = require("express");
const router = express.Router();

const { Post, Img } = require('../../models');

router.post('/', async (req, res, next) => { // POST /post
  try {
    //const hashtags = req.body.content.match(/#[^\s#]+/g);
    const fullPost = await Post.create({
      id: req.body.id,
      title: req.body.title,
      content: req.body.content,
      img: req.body.img,
      views: req.body.views,
    });
    // if (hashtags) {
    //   const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
    //     where: { name: tag.slice(1).toLowerCase() },
    //   }))); // [[노드, true], [리액트, true]]
    //   await post.addHashtags(result.map((v) => v[0]));
    // }
    if (req.body.img) {
      if (Array.isArray(req.body.img)) { // 이미지를 여러 개 올리면 image: [제로초.png, 부기초.png]
        const images = await Promise.all(req.body.img.map((img) => Img.create({ src: img })));
        await post.addImgs(images);
      } else { // 이미지를 하나만 올리면 image: 제로초.png
        const image = await Img.create({ src: req.body.img });
        await post.addImgs(image);
      }
    }
    // const fullPost = await Post.findOne({
    //   where: { id: post.id },
    //   include: [{
    //     model: Img,
    //   }, {
    //     model: Comment,
    //     include: [{
    //       model: User, // 댓글 작성자
    //       attributes: ['id', 'nickname'],
    //     }],
    //   }, {
    //     model: User, // 게시글 작성자
    //     attributes: ['id', 'nickname'],
    //   }, {
    //     model: User, // 좋아요 누른 사람
    //     as: 'Likers',
    //     attributes: ['id'],
    //   }]
    // })
    //res.status(201).json(fullPost);
    res.status(201).json({ success: true, fullPost });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/images', upload.array('img'), (req, res, next) => { // POST /post/images
  console.log(req.files);
  res.json(req.files.map((v) => v.filename));
});



// /* 이미지 미리보기 */
// router.post("/", (req, res) => {
//   upload(req, res, err => {
//     if (err) return res.json({ success: true, err });
//     return res.json({
//       success: true,
//       img: res.req.file.path,
//       fileName: res.req.file.filename,
//     });
//   });
// });

module.exports = router;