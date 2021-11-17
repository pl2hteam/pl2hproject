const express = require("express");
const router = express.Router();
const { User, User2nd } = require("../../models");

router.post('/', async (req, res, next) => {
  try {
    const fullUser2nd = await User.findOne({

    });

    // const Images = await User2nd.findAll({
    //   include: {
    //     model: User,
    //     attribute: ["id"],
    //   },
    //   order: [["id", "DESC"]],
    // });

    let userCondionData = [];
    for (let i = 0; i < fullUser2nd.length; i++) {
      let imgData = [];
      for (let j = 0; j < Images.length; j++) {
        if (fullUser2nd[i].dataValues.id === Images[j].dataValues.id) {
          imgData.push(Images[j].src);
        }
      }

      userCondionData.push({
        couple_code: fullUser2nd[i].dataValues.couple_code,
        message: fullUser2nd[i].dataValues.message,
        images: imgData,
        views: fullUser2nd[i].dataValues.views,

      })
    }

    res.status(201).json({ success: true, userCondionData });
    console.log("노드노드");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
