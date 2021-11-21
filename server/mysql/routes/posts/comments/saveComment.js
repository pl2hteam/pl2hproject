const express = require("express");
const router = express.Router();

const { Comment, User } = require("../../../models");


router.post("/", async (req, res) => {
  try {
    const comments = await Comment.create({
      content: req.body.content,
      UserId: req.body.writer,
      PostId: req.body.postId,
    });

    const commentsInfo = await Comment.findAll({
      include: {
        model: User,
        attribute: ['id', 'name', 'image'],
      },
      where: {
        id: comments.id,
      },
      order: [['id', 'DESC']],
    });

    return res.json({
      success: true,
      commentsInfo
    });
  } catch (err) {
    return res.json({ success: false, err });
  }
})

module.exports = router;