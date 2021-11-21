const express = require("express");
const router = express.Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  const imgData = req.body.image[0];

  try {
    //MySql DB로 전달할 데이터
    const updateCondition = await User.update({
      id: req.body.id,
      image: imgData,
      couple_code: req.body.couple_code,
      message: req.body.message,
    }, {
      where: { id: req.body.id }
    });

    res.status(200).json({ success: true, updateCondition });
  } catch (error) {
    console.error(error);
  }
});






















module.exports = router;
