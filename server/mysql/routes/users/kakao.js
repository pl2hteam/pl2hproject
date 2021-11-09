//카카오로그인 : 로그인 인증 과정을 카카오에게 맡기는 것.
//첫번쨰 로그인 시 회원가입 처리, 두번째 로그인부터 로그인 처리.

const express = require('express');
const router = express.Router();
const passport = require('passport');


//카카로 로그인 라우터
//카카오로그인 과정 시작,전략 수행
//카카오로그인 창으로 리다이렉트
router.get('/',
  //passport.authenticate('kakao')
  console.log(1));

//로그인 후 성공 여부 결과를 받아, 카카오 로그인 전략을 다시 수행
router.get('/callback', passport.authenticate('kakao', {
  //카카오 로그인 성공시 내부적으로 req.login을 호출하므로, 실패시 어디로 이동할지 적는다.
  failureRedirect: '/',

}), (req, res) => {
  //성공시에 어디로 이동할지 적는다.
  console.log('kakao login ok');
  res.send('kakao login ok');
});

module.exports = router;