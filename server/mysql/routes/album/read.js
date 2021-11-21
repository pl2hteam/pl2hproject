const express = require("express");
const router = express.Router();
const { Image, Hashtag } = require("../../models");

router.post('/', async (req, res, next) => {
  try {
    const fullPost = await Hashtag.findAll({
      include: {
        model: Image,
        attribute: ["id", "src", "PostId", "HashTagId"],
      },
      order: [['id', 'DESC']],
    });

    const Images = await Image.findAll({
      include: {
        model: Hashtag,
        attribute: ["id", "src", "PostId", "HashTagId"],
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
        HashtagID: imgData.HashtagId,
        // videos: null,
        // duration: null,
        createdAt: fullPost[i].dataValues.createdAt,
        updatedAt: fullPost[i].dataValues.updatedAt,
      })
    }

    res.status(201).json({ success: true, postData });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;