const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/callback', passport.authenticate('kakao', {
  failureRedirect: '/',
}), (req, res) => {
  console.log('kakao login ok');
  res.send('kakao login ok');
});

module.exports = router;