const express = require('express');
const router = express.Router();


router.post('/', (req, res, next) => {
  console.log(req.body);
  passport.authenticate('local', (err, user, info) => {
    console.log();
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      // const fullUserWithoutPassword = await User.findOne({
      //   where: { id: user.id },
      //   attributes: {
      //     exclude: ['password']
      //   },
      //   include: [{
      //     model: Post,
      //     attributes: ['id'],
      //   }, {
      //     model: User,
      //     as: 'Followings',
      //     attributes: ['id'],
      //   }, {
      //     model: User,
      //     as: 'Followers',
      //     attributes: ['id'],
      //   }]
      // })
      //return res.status(200).json(fullUserWithoutPassword);
      return res.status(201).send('ok');
    });
  })(req, res, next);
});

module.exports = router;