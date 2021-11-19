const express = require("express");
const router = express.Router();

const { Comment, User } = require("../../../models");

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const comments = await Comment.findAll({ 
      include: {
        model: User,
        attribute: ['id', 'name', 'image'],
      },
      where: { 
        PostId: req.body.postId 
      },
      order: [['id', 'DESC']],
    });

    return res.json({
      success: true,
      comments
    });
  } catch (error) {
    return res.json({ success: false, err });
  }
});

module.exports = router;