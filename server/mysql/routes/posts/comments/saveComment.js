const express = require("express");
const router = express.Router();

const { Comment } = require("../../../models");


router.post("/", async (req, res) => {
  console.log(req.body);
  
  try {
    const comments = await Comment.create({
      content: req.body.content,
      UserId: req.body.writer,
      PostId: req.body.postId,
    });

    return res.json({
      success: true,
      comments
    });
  } catch (err) {
    return res.json({ success: false, err });
  }
})

module.exports = router;