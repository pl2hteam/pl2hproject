//카카오로그인 : 로그인 인증 과정을 카카오에게 맡기는 것.
//첫번쨰 로그인 시 회원가입 처리, 두번째 로그인부터 로그인 처리.

const passport = require('passport');
//passport-kakao 모듈로 부터 Strategy생성자를 불러와 전략을 구현.
const KakaoStrategy = require('passport-kakao').Strategy;

const { User } = require('../models');

module.exports = () => {
    passport.use(
        new KakaoStrategy({
            //카카오에서 발급해주는 아이디 : 보안 이유로 process.env.KAKAO_ID로 설정.
            //아이디를 발급받아 .env에 넣는다.
            clientID: process.env.KAKAO_ID,
            //카카오로 부터 인증결과를 받을 라우터 주소.
            callbackURL: '/kakao/callback',
            //카카오에서는 인증 후 callbackURL에 적힌 주소로 accessToken, refreshToken, profile 전송
            //profile : 사용자 정보가 들어 있음. 원하는 정보를 꺼내와 회원가입을 하면 된다.
        }, async (accessToken, refreshToken, profile, done) => {
            console.log('kakao profile', profile);
            try {
                //기존에 카카오를 통해 회원가입한 사용자가 있는 지 조회.
                const exUser = await User.findOne({
                    where: { snsId: profile.id, provider: 'kakao' },
                });
                //있다면 회원가입이 된 경우 이므로 사용자 정보화 함께 done함수 호출.
                if (exUser) {
                    done(null, exUser);
                } else {
                    //가입된 사용자가 아니라면 회원가입 진행.
                    const newUser = await User.create({
                        email: profile._json && profile._json.kakao_account_email,
                        nickname: profile.displayName,
                        snsId: profile.id,
                        provider: 'kakao',
                    });
                    done(null, newUser);
                }
            } catch (error) {
                console.error(err);
                done(error);
            }
        }
        ))
}