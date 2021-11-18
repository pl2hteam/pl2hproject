// const express = require("express");
// const router = express.Router();
// const { User } = require("../../models");

// router.post('/', async (req, res, next) => {
//   try {
//     const fullUser = await User.findAll({
//       // include: {
//       //   model: User,
//       //   attributes: ['id', 'image', 'couple_code', 'message', 'UserIdOf2nd'],
//       // }

//     });

//     // const Images = await User.findAll({

//     // });


//     let userConditionData = [];

//     for (let i = 0; i < fullUser.length; i++) {
//       // let imgData = [];
//       // for (let j = 0; j < Images.length; j++) {
//       //   if (fullUser[i].dataValues.id) {
//       //     imgData.push(Images[j].src);
//       //   }
//       // }
//       userConditionData.push({
//         id: fullUser[i].dataValues.id,
//         email: fullUser[i].dataValues.email,
//         name: fullUser[i].dataValues.name,
//         // password: fullUser[i].dataValues.password,
//         image: fullUser[i].dataValues.image,
//         address: fullUser[i].dataValues.address,
//         gender: fullUser[i].dataValues.gender,
//         phone: fullUser[i].dataValues.phone,
//         birth: fullUser[i].dataValues.birth,
//         provider: fullUser[i].dataValues.provider,
//         snsId: fullUser[i].dataValues.snsId,
//         couple_code: fullUser[i].dataValues.couple_code,
//         message: fullUser[i].dataValues.message,
//       })
//     }
//     res.status(201).json({ success: true, userConditionData });
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const { User } = require("../../models");

router.post('/', async (req, res, next) => {
  try {
    console.log(321312, req.body);
    const fullUser = await User.findOne({

    });

    // const Images = await User.findAll({

    // });


    let userConditionData = [];

    for (let i = 0; i < fullUser.length; i++) {
      // let imgData = [];
      // for (let j = 0; j < Images.length; j++) {
      //   if (fullUser[i].dataValues.id) {
      //     imgData.push(Images[j].src);
      //   }
      // }
      userConditionData.push({
        id: fullUser[i].dataValues.id,
        email: fullUser[i].dataValues.email,
        name: fullUser[i].dataValues.name,
        // password: fullUser[i].dataValues.password,
        image: fullUser[i].dataValues.image,
        address: fullUser[i].dataValues.address,
        gender: fullUser[i].dataValues.gender,
        phone: fullUser[i].dataValues.phone,
        birth: fullUser[i].dataValues.birth,
        provider: fullUser[i].dataValues.provider,
        snsId: fullUser[i].dataValues.snsId,
        couple_code: fullUser[i].dataValues.couple_code,
        message: fullUser[i].dataValues.message,
      })
    }
    res.status(201).json({ success: true, userConditionData });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
