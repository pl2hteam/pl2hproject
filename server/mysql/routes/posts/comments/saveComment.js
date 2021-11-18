const express = require("express");
const router = express.Router();

const { Comment, User } = require("../../../models");


router.post("/", async (req, res) => {
  // console.log(req.body);
  // router.post("/:id/follow", isLoggedIn, async (req, res, next) => {
  //   try {
  //     const user = await User.findOne({ where: { id: req.user.id } });
  //     if (user) {
  //       await user.addFollowing(parseInt(req.params.id, 10));
  //       res.send("success");
  //     } else {
  //       res.status(404).send("no user");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     next(error);
  //   }
  // });
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
      // 유저 비번은 제외해서 보내기
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