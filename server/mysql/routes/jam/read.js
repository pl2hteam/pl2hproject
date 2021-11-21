const express = require("express");
const router = express.Router();
const { User, Image, Jam } = require("../../models");

router.post('/', async (req, res, next) => {
  try {
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
    return res.status(400).send(err);
  }
});

router.post('/mood', async (req, res, next) => {
  try {
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

    res.status(201).json({ success: true, jams });
  } catch (error) {
    return res.status(400).send(err);
  }
});

module.exports = router;