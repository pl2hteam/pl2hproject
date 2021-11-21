const express = require("express");
const router = express.Router();
const { User, Post, Image, Jam } = require("../../models");

router.post('/', async (req, res, next) => {
  try {
    console.log(res);
    const fulljam = await Jam.findAll({

      order: [['id', 'DESC']],
    });

    const Images = await Image.findAll({
      include: {
        model: Jam,
        attribute: ["id", "src", "PostId", "HashTagId", "JamId"],
      },
      order: [["id", "DESC"]],
    });

    let jams = [];
    for (let i = 0; i < fulljam.length; i++) {
      let imgData = [];
      for (let j = 0; j < Images.length; j++) {
        if (fulljam[i].dataValues.id === Images[j].dataValues.JamId) {
          imgData.push(Images[j].src);
        }
      }



      jams.push({
        id: fulljam[i].dataValues.id,
        title: fulljam[i].dataValues.title,
        mood: fulljam[i].dataValues.mood,
        review: fulljam[i].dataValues.review,
        images: imgData,
        // videos: null,
        // duration: null,
        createdAt: fulljam[i].dataValues.createdAt,
        updatedAt: fulljam[i].dataValues.updatedAt,
      })
    }

    res.status(201).json({ success: true, jams });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/mood', async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.body.mood);

    let keyWord = req.body.mood

    const fulljam = await Jam.findAll({
      include: {
        model: User,
        attribute: ["id", "name"],
      },
      where: {
        mood: keyWord,
      },
      order: [['id', 'DESC']],
    });

    console.log(fulljam, 34242342);
    console.log(fulljam.User, 1134242342);

    const Images = await Image.findAll({
      include: {
        model: Jam,
        attribute: ["id", "src", "PostId", "HashTagId", "JamId"],
      },
    });

    let jams = [];
    for (let i = 0; i < fulljam.length; i++) {
      let imgData = [];
      for (let j = 0; j < Images.length; j++) {
        if (fulljam[i].dataValues.id === Images[j].dataValues.JamId) {
          imgData.push(Images[j].src);
        }
      }

      jams.push({
        id: fulljam[i].dataValues.id,
        title: fulljam[i].dataValues.title,
        mood: fulljam[i].dataValues.mood,
        review: fulljam[i].dataValues.review,
        updater: fulljam[i].dataValues.UserId,
        images: imgData,
        // videos: null,
        // duration: null,
        createdAt: fulljam[i].dataValues.createdAt,
        updatedAt: fulljam[i].dataValues.updatedAt,
      })
    }


    console.log(jams);



    res.status(201).json({ success: true, jams });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;