const express = require('express');
const router = express.Router();
const passport = require('passport');
const { User } = require("../../models");

router.post('/', async (req, res, next) => {
  console.log(req.body);
  const Login = await User.findOne({
    where: {
      email: req.body.email,
    }
  })
  
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      res.status(401).json({ loginSuccess: false });
    }
    if (info) {
      return res.status(401).json({ loginSuccess: false });
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return res.status(400).json({ loginSuccess: false });
      }
      return res.status(200).json({ loginSuccess: true, userId: Login.id });
    });
  })(req, res, next);
});

module.exports = router;