const express = require("express");
const router = express.Router();

router.post('/', async (req, res, next) => { // POST /post
  try {
    const fullPost = await Post.findOne({
      where: { id: post.id },
      // include: [{
      //   model: Image,
      // }, {
      //   model: Comment,
      //   include: [{
      //     model: User, // 댓글 작성자
      //     attributes: ['id', 'nickname'],
      //   }],
      // }, {
      //   model: User, // 게시글 작성자
      //   attributes: ['id', 'nickname'],
      // }, {
      //   model: User, // 좋아요 누른 사람
      //   as: 'Likers',
      //   attributes: ['id'],
      // }]
    })
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
