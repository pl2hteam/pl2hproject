const express = require("express");
const router = express.Router();
const { User, Post, Image } = require("../../models");

router.post('/', async (req, res, next) => {
  try {
    //Post모델에서 User모델의 id, name 값을 가져온다.
    const fullPost = await Post.findAll({
      include: {
        model: User,
        attribute: ["id", "name"],
      },
      order: [['id', 'DESC']],
    });

    const Images = await Image.findAll({
      include: {
        model: Post,
        attribute: ["id"],
      },
      order: [["id", "DESC"]],
    });

    let postData = [];

    for (let i = 0; i < fullPost.length; i++) {

      let imgData = [];

      for (let j = 0; j < Images.length; j++) {

        if (fullPost[i].dataValues.id === Images[j].dataValues.PostId) {
          // console.log("fullPost[i] : ", fullPost[i]);
          imgData.push(Images[j].src);
        }
      }

      postData.push({
        id: fullPost[i].dataValues.id,
        title: fullPost[i].dataValues.title,
        content: fullPost[i].dataValues.content,
        // videos: null,
        views: fullPost[i].dataValues.views,
        // duration: null,
        createdAt: fullPost[i].dataValues.createdAt,
        updatedAt: fullPost[i].dataValues.updatedAt,
        UserId: fullPost[i].dataValues.UserId,
        UserName: fullPost[i].User.name,
        images: imgData,
      })

    }

    res.status(201).json({ success: true, postData });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
