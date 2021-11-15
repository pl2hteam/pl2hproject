const express = require("express");
const router = express.Router();
const { User, Post, Image, Hashtag } = require("../../models");

router.post('/', async (req, res, next) => {
  try {
    const fullPost = await Hashtag.findAll({

      order: [['id', 'DESC']],
    });

    const Images = await Image.findAll({
      include: {
        model: Hashtag,
        attribute: ["id"],
      },
      order: [["id", "DESC"]],
    });

    let postData = [];
    for (let i = 0; i < fullPost.length; i++) {
      let imgData = [];
      for (let j = 0; j < Images.length; j++) {
        if (fullPost[i].dataValues.id === Images[j].dataValues.HashtagId) {
          imgData.push(Images[j].src);
        }
      }

      postData.push({
        id: fullPost[i].dataValues.id,
        title: fullPost[i].dataValues.title,
        content: fullPost[i].dataValues.content,
        images: imgData,
        // videos: null,
        views: fullPost[i].dataValues.views,
        // duration: null,
        createdAt: fullPost[i].dataValues.createdAt,
        updatedAt: fullPost[i].dataValues.updatedAt,
        HashtagId: fullPost[i].dataValues.HashtagId
      })
    }

    res.status(201).json({ success: true, postData });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
