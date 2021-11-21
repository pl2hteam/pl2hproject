const express = require("express");
const router = express.Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  const imgData = req.body.image[0];

  try {
    const updateCondition = await User.update({
      id: req.body.id,
      image: imgData,
      couple_code: req.body.couple_code,
      message: req.body.message,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    }, {
      where: { id: req.body.id }
    });

    res.status(200).json({ success: true, updateCondition });
  } catch (error) {
    console.error(error);
  }
});






















module.exports = router;
