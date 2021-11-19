// const express = require("express");
// const router = express.Router();
// const { User } = require("../../models");

// router.post('/', async (req, res, next) => {
//   try {
//     const fullAllUser = await User.findAll({
//       // include: {
//       //   model: User,
//       //   attributes: ['id', 'image', 'couple_code', 'message', 'UserIdOf2nd'],
//       // }

//     });

//     // const Images = await User.findAll({

//     // });


//     let allUser = [];

//     for (let i = 0; i < fullAllUser.length; i++) {
//       // let imgData = [];
//       // for (let j = 0; j < Images.length; j++) {
//       //   if (fullAllUser[i].dataValues.id) {
//       //     imgData.push(Images[j].src);
//       //   }
//       // }
//       allUser.push({
//         id: fullAllUser[i].dataValues.id,
//         email: fullAllUser[i].dataValues.email,
//         name: fullAllUser[i].dataValues.name,
//         // password: fullAllUser[i].dataValues.password,
//         image: fullAllUser[i].dataValues.image,
//         address: fullAllUser[i].dataValues.address,
//         gender: fullAllUser[i].dataValues.gender,
//         phone: fullAllUser[i].dataValues.phone,
//         birth: fullAllUser[i].dataValues.birth,
//         provider: fullAllUser[i].dataValues.provider,
//         snsId: fullAllUser[i].dataValues.snsId,
//         couple_code: fullAllUser[i].dataValues.couple_code,
//         message: fullAllUser[i].dataValues.message,
//       })
//     }
//     res.status(201).json({ success: true, allUser });
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
    //console.log(321312, req);
    //console.log(res);
    console.log(3333, req.body.id);

    const fullAllUser = await User.findAll(
    );

    console.log(123123123123123, fullAllUser);

    console.log(43242343242343, fullAllUser);

    const Images = await User.findAll({

    });


    let allUser = [];

    for (let i = 0; i < fullAllUser.length; i++) {
      // let imgData = [];
      // for (let j = 0; j < Images.length; j++) {
      //   if (fullAllUser[i].dataValues.id) {
      //     imgData.push(Images[j].src);
      //   }
      // }
      allUser.push({
        id: fullAllUser[i].dataValues.id,
        email: fullAllUser[i].dataValues.email,
        name: fullAllUser[i].dataValues.name,
        image: fullAllUser[i].dataValues.image,
        address: fullAllUser[i].dataValues.address,
        gender: fullAllUser[i].dataValues.gender,
        phone: fullAllUser[i].dataValues.phone,
        birth: fullAllUser[i].dataValues.birth,
        provider: fullAllUser[i].dataValues.provider,
        snsId: fullAllUser[i].dataValues.snsId,
        couple_code: fullAllUser[i].dataValues.couple_code,
        message: fullAllUser[i].dataValues.message,
      })
      console.log("dsdsdsd", allUser);
    }
    res.status(201).json({ success: true, allUser });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
