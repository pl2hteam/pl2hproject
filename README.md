![143427874-c9a2c28d-789d-4af2-ab4e-0aece9a16349-removebg-preview](https://user-images.githubusercontent.com/88923210/143464419-fc7cb9e8-bb30-40b1-ba0d-c5d776866ada.png)

# 👨‍❤️‍💋‍👨'Play & Love to Happy in PL2H World!' 
- 사랑하는 연인과의 행복을 PL2H World에서 마음껏 즐겨보세요!
- 싸이월드 감성이 여러분의 추억을 더욱 아름답게 해 줄 것입니다.
- 연인을 위한 선물을 구매하고 싶으신가요? 저희가 오픈한 상점으로 구경오세요!
- 앗! 솔로시라구요? 괜찮습니다~ 저희 상점은 누구에게나 열려있답니다~


##
## 3차 프로젝트 :2021-11-05 ~ 2021-11-22

## 👜👢🧢[**서비스로 이동**](http://13.124.13.37:3000/)



p.s. 현재 서버를 닫은 관계로 실행이 되지 않습니다

![KakaoTalk_Image_2021-11-24-16-41-43](https://user-images.githubusercontent.com/88940298/143195627-412b8a3c-a61c-4842-b135-564b50293f44.gif)


---   

👨‍👩‍👦‍👦Member.  Pl2h의 팀원들입니다

![화면 캡처 2021-11-25 194708](https://user-images.githubusercontent.com/88940298/143427874-c9a2c28d-789d-4af2-ab4e-0aece9a16349.png)

한경현(kyunghyun Han):[깃허브](https://github.com/kyunghyunHan)SNS Frontend     
이민주(Minjoo Lee):[깃허브](https://github.com/codecocos)SNS Backend      
이상민(ssangMin Lee):[깃허브](https://github.com/LeessangMin)Shop Frontend   
박준혁(jun hyuk Park):[깃허브](https://github.com/berrypjh)Shop Backend  

**기간** :  2021-11-05 ~ 2021-11-22

**전반적인 프로젝트 진행절차**
1. 프로젝트 파트별로 진행(커플상점 부분과 SNS부분)
2. 오프라인 위주의 팀 작업
3. 오프라인이 불가능할 경우 온라인으로 팀 작업을 진행하며 서로의 코드 상황 브리핑 및 회의
4. 각 파트별 진행 상황을 수시로 공유 - 개발 중 예상치 못한 이슈가 있는지, 다른 파트의 지원이 필요한 부분은 없는지

---------------------------------------------------------------------------------------------------------------------------------------

**1주차** 
>-1일차 : 서로의 프로젝트 아이디어 공유 및 정리
>
>-2일차 : 아이디어 세부사항 및 db관계쿼리 정리
>
>-3일차 부터 프로젝트 진행

**2주차** 
-프로젝트 파트별 진행, 중간 에러확인, 파트별 진행률을 확인하면서 앞으로의 진행일정 조율.

**3주차**
-프로젝트 파트별 마무리 및 배포진행

**배포 후**
>
3주간 진행하였던 프로젝트의 결과물에 대해 좋았던 점과  개선해야 할 점을 생각하고 공유합니다. 
각자 맡은 부분에 대해 설명하며, 그 외에도 서비스의 가치나 방향성에 대한 의견을 주고 받으며 서로의 생각을 나누었습니다.
지난 프로젝트의 진행과정을 기록으로 남기며 정리합니다.


![KakaoTalk_20211125_195813474](https://user-images.githubusercontent.com/88940298/143429808-f5a10b4d-f7c0-4945-953a-e2b069671d21.png)




# 목차
[1.개요](#개요)

[2.목적](#목적)

- 기존 서비스와의 차별점

[3.전체 소스 코드](#전체-소스-코드-click)

[4.사용한 기술](#사용한-기술)

[5.주요 기능](#주요-기능)

[6.발생한 이슈 & 해결 방법](#발생한-이슈--해결-방법)

[7.상세 설명](#상세-설명)

 - DB 구조 (ERD)

 - 전체 흐름도
 
 - 프로젝트 설명 PPT

***

### 개요

최근 싸이월드 출시소식관련 하여, 싸이월드 감성과 네이버 커플페이지를 접목시키고, 더불어 SNS를 이용하는 커플들을 대상으로 아이템들을 판매하는 상점를 통한 복합서비스를 구상해보았습니다.

커플상점과 SNS에서 사용하는 DB를 MongoDB와 MySql로 분류하여 더욱더 많은 공부가 될 수 있게 하였고,
  
  관련자료  

네이버 커플페이지 [관련자료](https://blog.naver.com/PostList.naver?blogId=sum-lab&categoryNo=51&parentCategoryNo=51&skinType=&skinId=&from=menu&userSelectMenu=true)  
싸이월드 [관련자료](https://newsis.com/view/?id=NISX20211123_0001661075&cID=13001&pID=13000)

위의 자료들을 바탕으로 감성과 기능이 함께하는 서비스를 제공하고자 노력했습니다.

### 목적

> 커플 전용 SNS 및 SHOP 활성화
> 1. 커플 기능 구현활용 SNS 활성화
> 2. RDS(Mysql),Atlas(MongoDB) 동시 활용 프로젝트 활용
> 3. 결제서비스 구현 숙달
> 4. sns 페이지 구성
> 5. 배포 서비스 구현 공부 (ec2,s3,nginx)

- **기존 서비스와의 차별점**

   - nosql mysql 의 각각의 장점을 부각시키고 단점을 보안
   - REDUX 활용 AUTH 진행
   - 커플 연결 서비스 진행 (관계쿼리)
   

### 👬 전체 소스 코드 [클라이언트](https://github.com/pl2hteam/pl2hproject/tree/main/client)  or [서버](https://github.com/pl2hteam/pl2hproject/tree/main/server)


### 🛠 사용한 기술

![KakaoTalk_20211125_174239334](https://user-images.githubusercontent.com/88940298/143418476-feff562d-e665-4d09-a100-0e0dccb38f3b.png)



- 웹 화면 구성 : `REACT` 
- DB 액션 처리 : `Sequelize` `mongoose`
- DBMS : `MySQL` `Mongo` 
- 개발 Tool :`PostMan` `Visual Studio Code``github`
- AWS 배포 : `EC2` `RDS` `Atlas`
- 로그인 구현 :  `REDUX`
- 프레임워크 : `NodeJs` `REACT`
- 결제: `PAY PAL`
- 프로젝트 관리 Tool : `Google Drive` `GitHub` `notion`
- 사용 모듈(Client) : `
- "@material-ui/core": "^4.12.3",  
    "@material-ui/icons": "^4.11.2",  
    "@material-ui/lab": "^4.0.0-alpha.60",  
    "@mui/icons-material": "^5.1.0",  
    "@mui/styles": "^5.1.0",  
    "antd": "^3.26.20",  
    "axios": "^0.19.2",  
    "axios-mock-adapter": "^1.20.0",  
    "bootstrap": "^5.1.3",  
    "components": "^0.1.0",  
    "core-js": "^3.6.4",    
    "d3": "^7.1.1",   
    "formik": "^1.5.8",    
    "html-react-parser": "^1.4.0",    
    "postcss-loader": "^6.2.0",    
    "react": "^16.8.6",    
    "react-app-polyfill": "^1.0.6",  
    "react-carousel-minimal": "^1.4.1",  
    "react-copy-to-clipboard": "^5.0.4",  
    "react-dom": "^16.8.6", 
    "react-dropzone": "^11.4.2",  
    "react-elastic-carousel": "^0.11.5",  
    "react-flip-move": "^3.0.4",  
    "react-hook-form": "^7.19.0",  
    "react-icons": "^3.7.0",  
    "react-image-gallery": "^1.2.7",  
    "react-image-shadow": "^1.1.3",  
    "react-infinite-scroll-component": "^6.1.0", 
    "react-instagram-zoom-slider": "^1.4.0",  
    "react-material-ui-carousel": "^3.0.4",  
    "react-moment": "^1.1.1",  
    "react-paypal-express-checkout": "^1.0.5",  
    "react-redux": "^7.1.0-rc.1",  
    "react-responsive-carousel": "^3.2.22",  
    "react-router-dom": "^5.0.1",  
    "react-scripts": "3.4.1",  
    "react-show-more-text": "^1.5.0",  
    "react-slick": "^0.28.1",  
    "react-spring": "^9.3.0",  
    "react-swift-slider": "^7.0.1",  
    "react-use-gesture": "^9.1.3",  
    "redux": "^4.0.0",  
    "redux-promise": "^0.6.0", 
    "redux-thunk": "^2.3.0",  
    "styled-reset": "^4.3.4",  
    "webpack": "^4.42.0",  
    "yarn": "^1.22.17",  
    "yup": "^0.27.0"  

-  사용 모듈(Server) :`  
  - "async": "^3.2.2",      
    "bcrypt": "^5.0.1",      
    "body-parser": "^1.18.3",      
    "cookie-parser": "^1.4.5",      
    "cors": "^2.8.5",      
    "debug": "^4.1.1",      
    "dotenv": "^10.0.0",      
    "express": "^4.17.1",      
    "express-session": "^1.17.2",      
    "fluent-ffmpeg": "^2.1.2",      
    "jsonwebtoken": "^8.5.1",      
    "mongoose": "^5.4.20",      
    "morgan": "^1.10.0",      
    "multer": "^1.4.3",      
    "mysql2": "^2.3.3",      
    "passport": "^0.5.0",      
    "passport-local": "^1.0.0",      
    "promise": "^8.1.0",      
    "sequelize": "^6.9.0",      
    "sequelize-cli": "^6.3.0"  
    ` 

### 🌱주요 기능

- 로그인 : 일반 로그인, `Sequelize` `passport` `mysql` `REDUX` 
- 회원가입 : `Sequelize` `passport` `mysql` `mongo` `mongoose` `REDUX`
- 회원정보변경 :`Sequelize` `mysql` `mongo` `mongoose`
- 장바구니 : `Sequelize` `mysql` `mongo` `mongoose`
- 결제 : `Sequelize` `passport` `PAYTAL` `mongo` `mongoose`
- 마이페이지 : `Sequelize` `mysql` `RDS`
- SNS:`Sequelize` `mysql` `RDS`
- 놀거리 :`Sequelize` `mysql` `RDS`
- 편지:`Sequelize` `mysql` `RDS`
- 놀거리 :`Sequelize` `mysql` `RDS`
- MUSIC PLAYER :`styled-componets`
- 관리자모드(상품등록 및 삭제) :`mongo` `mongoose`
- 물품 필터 (검색): `mongo` `mongoose` 
- 모달:`Sequelize` `mysql` `RDS`



### 🔎  깃 브런치 활용

코드 병합시 오류를 최소화 하기위해 깃브런치 

```
✔ main - 개발 완료하고 최종 코드 올리는 브랜치


✔ SNS  sns 파트 깃브런치


   - diaryhyun (sns 파트 프론트 브런치)
   
   - diarymin (sns 파트 깃 브런치)
   
✔ SHOP  shop 파트 깃브런치


   - ssangmin (shop 파트 프론트 브런치)
   
   - parkjh (shop 파트 깃 브런치)

  

```

# 🔥발생한 이슈 & 해결 방법

### "CORS 정책에 의한 에러"

[상황]  
![콜스 에러](https://user-images.githubusercontent.com/90792916/143545407-1d5a53ca-7a6b-442d-94d9-72ea41138cdf.png)  

[문제] 

서버는 포트가 5000 번이고,

클라이언트는 포트가 3000 번으로 다른데 서로 주고 받으려고 하면,

CORS 정책에 의해 막혀버린다.

[해결] 

npm i http-proxy-middleware 모듈을 설치하고
```
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',  //  노드 서버가 5000 번이므로 target 도 같게한다.
      changeOrigin: true,
    })
  );
};
```
프록시 서버를 이용하여 에러를 해결했다.

### "Auth로 2가지 DB(MongoDB와 MySqlDB) 모두 사용할 수 있는 방법을 고민"

[상황] 2 가지(MongoDB와 MySqlDB) DB를 동시에 사용하기 때문에,  2 가지 DB를 충돌없이 사용할 수 있는 방안

[문제] 

SNS(MySqlDB)로 로그인 하여도 커플상점(MongoDB)를 이용할 수 있도록 하여야 함.
일부 공통된 DB가 필요한 상황이 발생하여, 2 가지 DB의 충돌없이 사용할 수 있도록 고민.

[해결] 

Auth.js에서 if문을 사용하여 MySql와 Monggo 이용에 조건을 부여함.

![KakaoTalk_20211125_153528603](https://user-images.githubusercontent.com/88923210/143395201-9da11fc9-96a8-4dcc-a0ba-da667f3eaf1d.png)



### "env파일의 중요성 "


[상황] gitignore에 올라가 있는 env파일이 없어 DB접속 불가

[문제] 

GitHub사용할 때 Git branch 전환 시에 
gitignore에 올라가 있는 env파일이 없어 DB접속 불가

![KakaoTalk_20211125_153121946](https://user-images.githubusercontent.com/88923210/143392535-7d0b32c1-0d26-448c-8a4d-250c18c8e8b8.png)

[해결] 

env파일의 존재를 인지하고 env파일을 추가하여 DB접속 성공.  
  
    
      
      

### "Redux 관련 auth 충돌문제 "


[상황] MusicPlayer 및 auth에러발생 

[문제] 

auth 와 musicplyer간 충돌로 인한 음악 재생 및 로그인 에러발생



[해결] 

음악재생을 유튜브 url로 변경하여 충돌방지
  
    
      






### "property "


[상황] gitignore에 올라가 있는 env파일이 없어 DB접속 불가

[문제]   
<img width="693" alt="KakaoTalk_20211125_124522181" src="https://user-images.githubusercontent.com/88940298/143390995-430a4520-9e35-4f19-9698-ffc1ec7dce0c.png">  


[해결] 

```
{Products.length === 0 ? (
            <div className="no_item">
              <h2>등록된 아이템이 없읍니다</h2>
            </div>
          ) : (
            <div className="shop-main-content-item_list">{renderCards}</div>
          )}
```
상품이 없을 경우를 추가했다





### "React 렌더링중 에러발생 "

[상황] React 렌더링중 에러발생 

[문제] 

![KakaoTalk_20211125_124542194](https://user-images.githubusercontent.com/88940298/143390699-22493ae8-1850-44a4-88ed-9ecf51093222.png)

[해결] 
```
  const userInfo = useSelector(state => state.user);
  const [User, setUser] = useState({});
  
  useEffect(() => {
    if (userInfo) {
      if (userInfo.userData) {
        setUser(userInfo.userData);
        if (userInfo.userData.couple_code) {
          setCoupleCode(userInfo.userData.couple_code);
        }
      }
    }
  }, [userInfo.userData]);
```

useEffect 를 사용하여 유저정보를 state담아 문제를 




### "React 배포에서의 문제점 파악 ,db및 구조설계 "

[상황] 배포도중 에러발생 

[문제] 
```
Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:67:19)
    at Object.createHash (node:crypto:130:10)
    at module.exports (/Users/user/Programming Documents/WebServer/untitled/node_modules/webpack/lib/util/createHash.js:135:53)
    at NormalModule._initBuildHash (/Users/user/Programming Documents/WebServer/untitled/node_modules/webpack/lib/NormalModule.js:417:16)
    at handleParseError (/Users/user/Programming Documents/WebServer/untitled/node_modules/webpack/lib/NormalModule.js:471:10)
    at /Users/user/Programming Documents/WebServer/untitled/node_modules/webpack/lib/NormalModule.js:503:5
    at /Users/user/Programming Documents/WebServer/untitled/node_modules/webpack/lib/NormalModule.js:358:12
    at /Users/user/Programming Documents/WebServer/untitled/node_modules/loader-runner/lib/LoaderRunner.js:373:3
    at iterateNormalLoaders (/Users/user/Programming Documents/WebServer/untitled/node_modules/loader-runner/lib/LoaderRunner.js:214:10)
    at iterateNormalLoaders (/Users/user/Programming Documents/WebServer/untitled/node_modules/loader-runner/lib/LoaderRunner.js:221:10)
/Users/user/Programming Documents/WebServer/untitled/node_modules/react-scripts/scripts/start.js:19
  throw err;
  ^
```

react 배포 중 에러발생. 이는 nodejs 버전이 높아서 생기는 문제다.

[해결] export 옵션 
```
export NODE_OPTIONS=--openssl-legacy-provider 
```
사용하여 문제해결

또는 pakage json 에서 

```
// 변경 전
"start": "react-scripts start"

// 변경 후
"start": "react-scripts --openssl-legacy-provider start"
```




### React Client build중 에러발생

[상황] 빌드도중 에러 발생

[문제] 
```
FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
```

빌드시 자바스크립트  에러발생 

[해결] export 옵션 
-노드의 기본 메모리 사이즈는 512MB다.  
과도한 메모리 점유로 인하여 js 엔진이 폭발해버린 것이다.  
Java와 마찬가지로 VM에서 Heap메모리 최대한도가 정해져있기 때문이며. 물론 가장 좋은것은 메모리를 적게 쓰도록 로직을 수정하는 것이지만,  
그것이 어려울 경우 ‘—max-old-space-size’ 옵션을 주면 힙메모리 영역 한도를 키울수가 있다  

로컬에서 빌드 후 git pull후 실행






## NodeJs 와 REACT 빌드 및 배포시  깨달은 점 

빌드시 메모리 관련 에러 발생 및 알 수 없는 에러가 발생햇었다.  
배포시 배포 관련 숙달이 부족하였고, 빌드하는데서 에러가 발생하여 애를 먹엇다 .  
좀 더 숙달하여 이러한 에러가 발생하지 않도록 하며 , 또한 베포시 node js 버전 문제로 인하여 에러가 발생햇엇다  
NGINX 서버로 하는 법을 숙달하여 시도를 해보면 좋을 것 같다  







# 💯배포 활용(EC2, RDS,MONGGO) 


 
<img width="1440" alt="스크린샷 2021-11-24 오후 3 06 14" src="https://user-images.githubusercontent.com/88940298/143198522-a0167210-516b-46b9-9b6d-d50e5d5c60d2.png">


    



- 데이터베이스 AWS EC2방식 체택 인스턴스 생성후 키값생성 후
서버 연결

- sudo su 입력하여 관리모드로 변경

- sudo apt update 하여 업데이트

- sudo apt install git 하여 깃 다운로드

- curl -o-https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash 하여 nvm설치

- .~/.nvm/nvm.sh 하여 NVM활성화

- nvm install node nvm을 이용하여 Node.js를 설치 

- git clone 및 git pull 하여 깃의 전체 코드 및 새로운 버전 최신화

- server 폴더에서   concurrently 를 사용한  npm run dev 실행하여 server client 동시실행

- AWS의 RDS 및 Altars 데이터베이스를 공유하여 협업하여 프로젝트를 진행하였고, AWS의 EC2를 활용하여 배포를 진행 server client 동시 실행 

- $ sudo apt-get install screen 후 screen 실행 후 npm run dev 실행

- 스크린 종료 -

- screen -ls 서버 확인

- kill [screen 번호] 스크린 종료







# ✨상세 설명
전체 코드 : [코드](https://github.com/pl2hteam/pl2hproject)
    
    - 폴더 설명 (client 와 server 폴더 나누어서 폴더 진행)
        server : 서버 폴더 설정
      - config : config 파일 : rds연결 주소
      - mongo : mongo db 라우터 및 모델
          -configmongo : 몽고 연결 주소
          - middleware : 몽고 auth
          - routes : 몽고 라우터 
          - schmas : 몽고 스키마 
      - mysql : mysql db 라우터 및 모델
          - middleware : mysql auth
          - models : myslq model
          - passport : mysql 로그인 관련
          - routes : mysql 라우터
    client (view): 클라이언트 폴더 설정 
             - public : css 이미지 등
               - resources 
                 - img 
                 - result-image 
             - src : 소스모음
               - Common 
                  - Setting 
                  - _actions : auth redux 관련
                  - _reducers  :react reducer
                  - components : 컴포넌트 
                  - hoc : react -hook 
                  - img : 이미지 모음
                     - log  : 유저 댓글 관련 img
                     - minime : minime 관련 캐릭터
                     - room : 방설정 이미지 
                  - miniroom : home.js 에 미니룸 관련 js
               - SNS 
                  - Jam : 놀거리 관련 
                  - Latter: 편지기능 관련 폴더
                  - Layout : 전체 레이아웃 관룐
                  - Login : 로그인 관련
                  - Main : SNS 로그인 관련
                  - Menu : 메인 메뉴관련
                  - MyPage : 상태변경 관련 페이지
                  - Pic : 사진첩
                  - Profile : SNS 관련폴더
                  - RegisterPage : 회원가입 관련 폴더
                  - rightSideBox: 우측 사이드 뮤직플레이어 관련
                  
               - SHOP 
                  - CartPage : 장바구니 관련
                  - DatilProductPage  : 물품 디테일페이지 관련
                  - HistoryPage  : 
                  - LoginMainPage : 로그인페이지 관련
                  - MainForm : SHOP전체 레이아웃 및 뮤직플레이어 관련
                  - ShopMain : Shop 메인관련
                  - UploadProductPage : 이미지 및 동여상 업로드 관련
                  - images : 이미지 모음
    
   
서버(app.js) : [코드](https://github.com/pl2hteam/pl2hproject/blob/431cba07b5add6380c3c976e3593882c22ae3805/server/app.js)
-> 각 페이지별 라우터 설정   
passport 5000번사용  

### 📖페이지별  설명 (React)   


## Login & Logout 

mongo db mysql db 분류하여 따로 로그인 가능 -> auth 사용하여 로그인 및 회원가입후 유지기능 
mongo db: shop
mysql db: sns



![KakaoTalk_Image_2021-11-24-17-16-49](https://user-images.githubusercontent.com/88940298/143200371-a2a213f6-67fc-4362-a8a9-adfcb674806e.gif)

```js

export default function (ComposedClass, reload, homePage, adminRoute = null) {
  function AuthenticationCheck(props) {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      if (homePage) { // SNS PAGE
        dispatch(auth(true)).then((response) => {
          if (!response.payload.isAuth) {
            if (reload) {
              props.history.push("/sns");
            }
          } else {
            if (adminRoute && !response.payload.isAdmin) {
              props.history.push("/sns/admin");
            } else {
              if (reload === false) {
                props.history.push("/sns/main");
              }
            }
          }
        });
      } else {  // SHOP PAGE

```

```
{/* SNS */}
 <Route exact path="/sns/main" component={Auth(Home, true, true)} />
```

로그아웃 하기 버튼 누르게 되면 /API/mysql/users/logout으로 데이터 전송
destroy 사 유저 로그인 정보 삭제

```js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

module.exports = router;
```

## SNS Main

 
### 프로필 정보 변경
 
 
![KakaoTalk_Photo_2021-11-24-16-10-06](https://user-images.githubusercontent.com/88940298/143191842-e032063e-9b70-4eeb-8b9e-3138f84352d8.gif)

useSelector를 사용하여 redux의 store에 저장된 user정보를 끌고온 후, useState를 사용하여 끌고 온 유저 정보를 변경합니다.
```js
  //useSelector를 사용하여 리덕스의 유저정보를 활용
  const userInfo = useSelector((state) => state.user);

  //useState 를 사용하여 값 변경
  const [ChangeMyImage, setChangeMyImage] = useState("");
  const [ChangeCoupleCode, setChangeCoupleCode] = useState("");
  const [ChangeMessage, setChangeMessage] = useState("");
  const [ChangePhone, setChangePhone] = useState("");
  const [ChangeAddress, setChangeAddress] = useState("");

  const updateImages = (newImages) => {
    setChangeMyImage(newImages);
  };
  const onChangeCoupleCode = (event) => {
    setChangeCoupleCode(event.currentTarget.value);
  };
  const onChangeMessage = (event) => {
    setChangeMessage(event.currentTarget.value);
  };
  const onChangePhone = (event) => {
    setChangePhone(event.currentTarget.value);
  };
  const onChangeAddress = (event) => {
    setChangeAddress(event.currentTarget.value);
  };


  const onSubmitUserInfo = () => {
    const variables = {
      id: userInfo.userData.id,
      image: ChangeMyImage,
      couple_code: ChangeCoupleCode,
      message: ChangeMessage,
      phone: ChangePhone,
      address: ChangeAddress,
    };

    Axios.post("/api/mysql/conditions/update", variables).then((response) => {
      if (response.data.success) {
        alert("정보가 변경되었습니다.");
        props.history.push("/sns/Main");
      } else {
        alert("정보 변경에 실패하였습니다.");
      }
    });
  };

  let userImg;
  if (props.user.userData) {
    userImg = props.user.userData.image;
  }

  let postImage = {
    updateImages,
  };
```


### 랜덤코드 
Math.random() 와 fromCharCode() 를 이용해
랜덤한 숫자에 해당하는 아스키코드를 찾아
알파벳 소문자, 대문자, 숫자를 한자씩 for문으로 지정한 길이만큼 만들어낸다


```js
const [CodeCode, setCodeCode] = useState("");
  const [Length, setLength] = useState("8");
  const [LowerCheck, setLowerCheck] = useState(true);
  const [UpperCheck, setUpperCheck] = useState(true);
  const [NumberCheck, setNumberCheck] = useState(true);
  const [SymbolCheck, setSymbolCheck] = useState(false);

  // 랜덤 코드 만드는 옵션별 함수를 담아둠
  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };

  // crypto.getRandomValues() : 함수는 암호학적으로 강력한 수준의 임의의(random) 값을 생성.
  //                            매개 변수로 제공된 배열은 임의의 숫자로 채움 (암호화의 의미는 무작위)
  function secureMathRandom() {
    return (
      window.crypto.getRandomValues(new Uint32Array(1))[0] /
      (Math.pow(2, 32) - 1)
    );
  }
  // Math.random()  : 0에서 1 소수점 랜덤 반환
  // Math.floor()   : 소수점 버림
  // fromCharCode() : 메서드는 UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환
  // 소문자 랜덤생성
  function getRandomLower() {
    // 해석 : 랜덤 소수점을 알파벳(26자)만큼 곱하고 97을 더한 값을 소수점을 버린 정수에
    //        해당하는 알파벳을 반환
    //        아스키코드 97~122번, 대문자는 65~90번, 숫자는 48~57번이기 때문
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  // 대문자 랜덤생성
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  // 숫자 랜덤생성
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
  }
  // 특수문자 랜덤생성
  function getRandomSymbol() {
    const symbols = '~!@#$%^&*()_+{}":?><;.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  // 옵션대로 코드 만들어낼 함수
  function generateCode(length, lower, upper, number, symbol) {
    // 결과물의 초기값은 빈값 ""
    let generatedCode = "";
    // filter 거쳐서 typesArr 에 배열로 담기
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      // filter 로 각 옵션(객체)들의 배열 인덱스0 에서 false 거르기
      (item) => Object.values(item)[0]
    );

    // 입력한 코드 길이만큼 for문 돌리기
    for (let i = 0; i < length; i++) {
      // 옵션 수 만큼 forEach 돌리기
      typesArr.forEach((type) => {
        // forEach 해당회차의 옵션을 funcName에 담음
        const funcName = Object.keys(type)[0];
        // randomFunc 함수에서 해당회차 옵션명에 해당하는 함수 돌려서 나온 값을 결과에 추가                          //
        generatedCode += randomFunc[funcName]();
      });
    }
    // 결과물 배열 잘라서 반환
    return generatedCode.slice(0, length);
  } ////////////////////////////////////////////////함수 분석
  // 입력한 길이만큼 소문자, 대문자, 숫자, 특수문자 순으로 결과를 뱉어낸다
  // 그럼 (true인 옵션 수) * (입력한 길이) 의 결과물이 나오고
  // 결과물에서 입력했던 길이만큼만 잘라낸다 ((옵션수*길이)-길이) 만큼의 코드는 버리게 됨

  function CodeCodeCreator() {
    if (Length < 8) {
      alert("코드가 너무 적어요 8자 이상으로 해주세요");
    } else if (LowerCheck || UpperCheck || NumberCheck || SymbolCheck) {
      setCodeCode(
        generateCode(Length, LowerCheck, UpperCheck, NumberCheck, SymbolCheck)
      );
    } else {
      alert("선택된 옵션이 없어요");
    }
  }
```

### 방명록
 ![KakaoTalk_20211125_120706686](https://user-images.githubusercontent.com/88940298/143373040-255ef82d-11b5-463e-a2fb-5f0acfeb7442.gif)
 
 
 sns 홈 화면에는 방문자가 글을 남길 수 있는 방명록 기능을 두어 싸이월드의 감성을 높였습니다. useState를 사용하여 미니미를 선택할 수 있습니다.
 
 
```js
  const onSubmit = (event) => {
    // event.preventDefault();  // antd 자체 적용

    if (
      !ProfileContent
    ) {
      return alert("fill all the fields first!");
    }

    const variables = {
      content: ProfileContent,
    };

    console.log(variables);

    Axios.post("/api/mysql/profiles/write", variables)
      .then((response) => {
        console.log('props.userInfo 는 : ', response);
        if (response.data.success) {
          alert("Product Successfully Uploaded");
          window.location.replace("/sns/main");
        } else {
          console.log(response.data)
          alert("Failed to upload Product");
        }
      });
  };
```

```js
<Form onSubmit={onSubmit}>
      <Container>
        <Wrap className="VisitMsgBox">
          <ShowMiniMe className="VisitMsgBox-ImageBox">
            <img src={mArr[minime]} alt={"미니미"} />
            <SettingMinime onClick={() => setIsShow(!isShow)}>
              미니미
            </SettingMinime>
            <DropdownMinime
              isShow={isShow}
              setIsShow={setIsShow}
              setMinime={setMinime}
              mArr={mArr}
            />
          </ShowMiniMe>
          <VisitMsg onChange={onProfileContent} value={ProfileContent} />
          <Button onClick={onSubmit}>남기기</Button>
        </Wrap>
      </Container>
    </Form>
```

### 커플 코드
커플인 경우 커플코드를 입력받아서, 같은 커플코드를 가진 경우 커플로 매칭하고 sns 메인 화면에 커플을 상징하는 이미지와 커플들의 이름을 띄워줍니다.
```js
  const getCouple = () => {
    Axios.post("/api/mysql/couples/read")
      .then((response) => {
        const arr = response.data.allUser;

        for (let i = 0; i < arr.length; i++) {
          if (arr[i].couple_code === CoupleCode) {
            if (arr[i].name !== userInfo.userData.name && userInfo.userData.couple_code !== "9999") {
              setCC1(userInfo.userData.name)
              setCC2(arr[i].name)
              break;
            }
          } else {
          }
        }
      });
  }

  const couplelove = () => {
    if (CoupleCode === "9999" && CoupleCode === "9999") {
      return <LinkTitle><p>빛이나는 솔로</p></LinkTitle>
    } else if (CoupleCode !== "9999" && CoupleCode !== "9999") {
      return <div className="couple">
        <img src={img} />
        <p>{CC1}♥️{CC2}</p>
      </div>
    }
  }
```



 ### SNS글 

![KakaoTalk_20211125_143734592](https://user-images.githubusercontent.com/88940298/143385698-181dc013-a133-451f-a803-83a7a4145fec.gif)


useState를 이용하여 게시글을 DB에 저장하였습니다.


```js
  const [profilecontent, setPostTitle] = useState("");

  const onSubmit = (event) => {
    if (!profilecontent) {
      return alert("fill all the fields first!");
    }
    const variables = {
      content: profilecontent,
    };

    Axios.post("/api/mysql/posts/write", variables)
      .then((response) => {
        console.log('props.user 는 : ', response);
        if (response.data.success) {
          alert("Post Successfully Uploaded");
          props.history.push("/sns");
        } else {
          console.log(response.data)
          alert("Failed to upload Post");
        }
      });
  };
```




 ### SNS글 삭제
 
 모달 내부에서  DELETE사용  SERVER로 정보를 가게하여 삭제할수있게 기능 추가
 ![KakaoTalk_20211125_150810995](https://user-images.githubusercontent.com/88940298/143390883-4f0ef9ae-ddf2-43c6-a614-e5149427e8c3.gif)

```js
const Delete = (props) => {
  const [postData, setPostData] = useState([]);
  let index = (props.modal.index);

  useEffect(() => {
    setPostData(props.modal.modal);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    
    Axios.delete(`/api/mysql/posts/write/delete/${postData[index].id}`)
      .then(response => {
        if (response.data.success) {
          window.location.replace('./profile')
        } else {
          alert('댓글을 저장하지 못했습니다.');
        }
      })
  }
  return (
      <form style={{ display:'flex' }} onSubmit={onSubmit}>
        <button style={{ width: '20%', height: '37px' }} onClick={onSubmit}  >삭제</button>
      </form>
  )
};
```

### 모달창 구현
- SNS Modal  
![KakaoTalk_20211125_111701228](https://user-images.githubusercontent.com/88940298/143374992-5bdcd998-cf3c-4dab-9598-8f2b96dbbddd.gif)

-  사진첩 Modal-

![KakaoTalk_20211125_122815439](https://user-images.githubusercontent.com/88940298/143374909-e3bcc232-f911-4aa6-80ed-1c83671ed49f.gif)

onsubmit 을 통해 클릭시 모달창 렌더링
modal 에 props를 전달 하여 데이터 및 이미지 렌더링
```js
 onSubmit={onSubmit} onDoubleClick={() => {
        setIndex(index);
        setOpenModal(true);
```
``` js
<Modal
                index={Index}
                modal={PostArray}
                setOpenModal={setOpenModal}
                openModal={openModal}
              />
              
```
```
const Modal = (props) => {
  const { setOpenModal } = props;
  const data = props.modal
```

### MusicPlayer 구현
![KakaoTalk_Photo_2021-11-24-17-07-22](https://user-images.githubusercontent.com/88940298/143199061-103753d0-a7bd-4d85-b124-e53334e8a4cf.png)

disablekb 를 1로 설정하여 플레이어가 키보드 컨트롤에 응답하지 않게 했고,
autoplay 를 1로 설정하여 자동 재생되게 하였습니다

```js
<iframe
          width="240"
          height="100"
          src="https://www.youtube.com/embed/_3A-jr1xC9o?loop=1&controls=1&autoplay=1&mute=0&disablekb=1&fs=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
          gyroscope; picture-in-picture;"
        ></iframe>

```


### 커플 여행지 카테코리 구현

![KakaoTalk_20211125_114457353](https://user-images.githubusercontent.com/88940298/143371036-745d1095-2d6a-4307-99f4-37f0d54275c9.gif)

선택된 카데고리 값을 e.currentTarget.innerText를 이용하여 back으로 전달 합니다. back에서는 일치하는 값을 찾아서 front로 보내고, front는 전달 받은 data를 map함수를 이용하여 화면에 출력하였습니다.

```js
export default () => {
    const [posts, setPosts] = useState([]);
    const [mood, setMood] = useState('');
    const moods = ['영화', '공연', '축제', '여행', '맛집', '기타'];

    const onMoodChange = (e) => {

        setMood(e.currentTarget.innerText);
        setPosts([]);


        const variables = {
            mood: e.currentTarget.innerText,
        }

        //back으로 선택된 카데고리 값을 전달합니다.
        Axios.post("/api/mysql/jams/read/mood", variables)
            .then((response) => {
                if (response.data.success) {
                    setPosts(response.data.jams);

                } else {
                    alert("읽어드리는 데 실패하였습니다.");
                }
            });
    };


    return (
        <MarginContainer>
            <HeaderContainer>
                <Title>🎪🎉🎏</Title>
                <MoodList>
                    {moods.map((moodText) => (
                        <Mood
                            key={moodText}
                            onClick={onMoodChange}
                            // 선택된 카테고리가 활성화 됩니다.
                            active={moodText === mood ? true : false}
                        >
                            {moodText}
                        </Mood>
                    ))}
                </MoodList>
            </HeaderContainer>
            <Container>
                {posts.map((post) => (
                    <Picture
                        //컴포넌트로 props를 전달합니다.
                        id={post.id}
                        key={post.id}
                        imageUrl={post.images[0]}
                        mood={post.mood}
                        review={post.review}
                        title={post.title}
                    />
                ))}
            </Container>
        </MarginContainer>
    );
};

```
```js
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
```



### 연인에게 커플편지 남기기 구현
![KakaoTalk_20211125_123246471](https://user-images.githubusercontent.com/88940298/143375358-e937181e-7314-4c1e-98b1-b5e3604bcf93.gif)


![KakaoTalk_20211125_115238778](https://user-images.githubusercontent.com/88940298/143371849-fc4a8f48-f329-44b3-8f57-0b6e2317043d.gif)

useSelector와 useState를 사용하여 연인에게 편지를 보낼 수 있는 기능입니다.

```js
const LetterWrite = (props) => {
  const userInfo = useSelector(state => state.user);

  const [LetterTo, setLetterTo] = useState("");
  const [LetterTitle, setLetterTitle] = useState("");
  const [LetterContent, setLetterContent] = useState("");
  const [LetterFrom, setLetterFrom] = useState("");
  const [LetterPs, setLetterPs] = useState("");
  const [Code, setCode] = useState("");
  const [Name, setName] = useState("");

  useEffect(() => {
    if (userInfo) {
      if (userInfo.userData) {
        if (userInfo.userData.couple_code) {
          setCode(userInfo.userData.couple_code);
        }
        if (userInfo.userData.name) {
          setName(userInfo.userData.name);
        }
      }
    }
  }, [userInfo])
  
  const onLetterTo= (event) => {
    setLetterTo(event.currentTarget.value);
  
  };
  const onLetterTitle= (event) => {
    setLetterTitle(event.currentTarget.value);
  
  };
  const onLetterContent= (event) => {
    setLetterContent(event.currentTarget.value);
  
  };
  const onLetterFrom= (event) => {
    setLetterFrom(event.currentTarget.value);
  
  };
  const onLetterPs= (event) => {
    setLetterPs(event.currentTarget.value);
  
  };
  
  const user = useSelector(state => state.user);
  const onSubmit = (event) => {

    if (
      !LetterTo ||
      !LetterTitle ||
      !LetterContent ||
      !LetterFrom ||
      !LetterPs
      
    ) {
      return alert("fill all the fields first!");
    }

    const variables = {
      to: LetterTo,
      title:LetterTitle,
      content:LetterContent,
      from:LetterFrom,
      ps:LetterPs,
    };

    Axios.post("/api/mysql/letters/write", variables)
      .then((response) => {
        console.log('props.user 는 : ', response);
        if (response.data.success) {
   
          alert("Letter Successfully Uploaded");
          props.history.push("/sns/Latter");
        } else {
          console.log(response.data)
          alert("Failed to upload Letter");
        }
      });
  };

  if (Code !== null && Code !== undefined) {
    return   <div id="wrap"> 
      <div id='form_wrap'>
        <Form onSubmit={onSubmit}>
          {/* DropZone */}
      
          <label>to</label>
          <Input onChange={onLetterTo} value={LetterTo}  />
        
          <label>제목</label>
          <Input onChange={onLetterTitle} value={LetterTitle} />
        
          <label>내용</label>
          <Input onChange={onLetterContent} value={LetterContent} />
        
          <label>From</label>
          <Input onChange={onLetterFrom} value={LetterFrom} />
        
          <label>추신</label>
          <Input onChange={onLetterPs} value={LetterPs} />
          <br />

          <Button onClick={onSubmit}>편지보내기</Button>
        </Form>
      </div>
    </div>
  } else {
    return <div><p>편지를 못써요</p></div>
  }
};
```









## SHOP Main

 ### 물품등록
 ![KakaoTalk_20211125_143342490](https://user-images.githubusercontent.com/88940298/143385790-686b59a4-33ec-4ef0-807d-808743f4c24d.gif)



물품등록 페이지에서 기입한 내용과 사진,영상에 대한 정보가 DB에 들어간다


```js

물품등록

    Axios.post("/api/mongo/product/uploadProduct", variables).then(
      (response) => {
        if (response.data.success) {
          alert("아이템이 거래소에 등록되었습니다.");
          props.history.push("/shop/main");
        } else {
          alert("아이템 등록이 실패하였습니다");
        }
      }
    );



router.post("/", (req, res) => {
  console.log(req.body);
  const product = new Product(req.body);

  product.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({ success: true });
  });
});
```



 
  ###  카테고리 분류
  ![KakaoTalk_20211125_144533948](https://user-images.githubusercontent.com/88940298/143392173-e7d607e1-29a8-4ee1-ac15-017620719354.gif)
```js
  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);

    const newChecked = [...Checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  const renderCheckboxLists = () =>
    props.list &&
    props.list.map((value, index) => {
      return (
        <React.Fragment key={index}>
          <div>
            <Checkbox
              onChange={() => handleToggle(value._id)}
              checked={Checked.indexOf(value._id) === -1 ? false : true}
            />
            <span>{value.name}</span>
          </div>
        </React.Fragment>
      );
    });

```
```js
const itemNumber = [
  {
    _id: 1,
    name: "의류",
  },
  {
    _id: 2,
    name: "신발",
  },
// .......중략
  {
    _id: 12,
    name: "기타",
  },
];

export { itemNumber };



카테고리 분류 추가
```
체크박스와 라디오박스를 선택하면
물품목록과 가격대목록의 _id 값을 찾아서
해당되는 물품들 새로 출력  

### 장바구니 결제
![KakaoTalk_20211125_150642966](https://user-images.githubusercontent.com/88940298/143392134-38560967-d8a4-4abb-a1a1-6ddf5d614cf2.gif)
```js
  const addToCarthandler = () => {
    props.addToCart(props.detail._id);
  };


  const dispatch = useDispatch();
  const addToCartHandler = (pd_id) => {
    dispatch(addToCart(pd_id));
    alert("장바구니에 담겼습니다.");
  };

export function addToCart(_id) {
  const request = axios
    .get(`${MONGO_USER_SERVER}/addToCart?productId=${_id}`)
    .then((response) => response.data);

  return {
    type: ADD_TO_CART_USER,
    payload: request,
  };
}



장바구니에 담으면 물품정보를 디스패치 액션을 통해 User DB에 저장한다
```
```js
export function getHistory(data) {
  let request = axios
      .get(`${MONGO_USER_SERVER}/payment/getHistory`, data)
      .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

```
결제되면 물품에 대한 구매이력 DB에 저장


### 댓글,대댓글
 

![KakaoTalk_20211125_145627253](https://user-images.githubusercontent.com/88940298/143392026-8e22da2c-beb3-4233-9249-0a9984b27942.gif)  
댓글을 작성하면 작성자, 게시글, 댓글내용이 DB에 저장이되고 답글을 달면 댓글정보도 추가로 DB에 저장된다.  

댓글은 Comment.js 에서 State 에 저장되고 refreshFunction 로 지정된 props 로 최상위 부모인 DetailProductPage.js 에 Comment State 에 저장된다.   

또한 Comment.js 에서는 SingleComment.js 의 props 를 이용해서 첫번째 댓글이 정해지며, ReplyComment.js 의 props 를 이용해서 첫댓글의 댓글을 불러온다.  
위의 과정을 반복하여 무한한 대댓글을 달 수 있다.  

```js
  const user = useSelector((state) => state.user);
  const [Comment, setComment] = useState("");
  const [Writer, setWriter] = useState("");

  const handleChange = (event) => {
    setComment(event.currentTarget.value);
  };

  useEffect(() => {
    const userData = { userInfo : user.userData };
    if (user.userData) {
      if (user.userData.gender) {
        axios.get('/api/mongo/users/sns/getMongo', userData)
          .then(response => {
            if (response.data.success) {
              console.log(response);
              setWriter(response.data.user[0]._id);
            } else {
              alert('Failed')
            }
        })
      } else {
        if (user.userData) {
          setWriter(user.userData._id);
        }
      }
    } 
  }, [user.userData])

  const onSubmit = (event) => {
    event.preventDefault();
   
    const variables = {
      content: Comment,
      writer: Writer,
      postId: props.postId,
    };

    axios.post("/api/mongo/product/saveComment", variables).then((response) => {
      if (response.data.success) {
        setComment("");
        props.refreshFunction(response.data.result);
      } else {
        alert("Failed to save Comment");
      }
    });
  };

  return (
    <div className="postPage-comment">
      <p className="comment-text">댓글</p>
      <hr />
      {props.commentLists &&
        props.commentLists.map(
          (comment, index) =>
            !comment.responseTo && (
              <React.Fragment>
                <SingleComment
                  comment={comment}
                  postId={props.postId}
                  refreshFunction={props.refreshFunction}
                />
                <ReplyComment
                  CommentLists={props.commentLists}
                  postId={props.postId}
                  parentCommentId={comment._id}
                  refreshFunction={props.refreshFunction}
                />
              </React.Fragment>
            )
        )}
```
```js
    const user = useSelector(state => state.user);
    const [CommentValue, setCommentValue] = useState("")
    const [Writer, setWriter] = useState("");
// 생략
    const onSubmit = (event) => {
      event.preventDefault();

      const variables = {
        writer: Writer,
        postId: props.postId,
        responseTo: props.comment._id,
        content: CommentValue
      }

      Axios.post('/api/mongo/product/saveComment', variables)
        .then(response => {
            if (response.data.success) {
                setCommentValue("")
                setOpenReply(!OpenReply)
                props.refreshFunction(response.data.result)
            } else {
                alert('Failed to save Comment')
            }
        })
    }

    const actions = [
        <span onClick={openReply} key="comment-basic-reply-to">답글 달기</span>
    ]
    
    if (props.comment) {
      return (
          <div>
              <Comment
                  actions={actions}
                  author={props.comment.writer.name}
                  avatar={
                      <Avatar
                          src={props.comment.writer.image}
                          alt="image"
                      />
                  }
                  content={
                      <p>
                          {props.comment.content}
                      </p>
                  }
              />
```
```js
    const [ChildCommentNumber, setChildCommentNumber] = useState(0)
    const [OpenReplyComments, setOpenReplyComments] = useState(false)

    useEffect(() => {
        let commentNumber = 0;
        props.CommentLists.map((comment) => {
            if (comment.responseTo === props.parentCommentId) {
                commentNumber++
            }
        })
        setChildCommentNumber(commentNumber)
    }, [props.CommentLists, props.parentCommentId])


    let renderReplyComment = (parentCommentId) =>
        props.CommentLists.map((comment, index) => (
            <React.Fragment>
                {comment.responseTo === parentCommentId &&
                    <div style={{ width: '80%', marginLeft: '40px' }}>
                        <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} />
                        <ReplyComment CommentLists={props.CommentLists} parentCommentId={comment._id} postId={props.postId} refreshFunction={props.refreshFunction} />
                    </div>
                }
            </React.Fragment>
        ))
```
### 리덕스
![리덕스 플로우 전체도](https://user-images.githubusercontent.com/90792916/143544265-c31437e7-4c40-4c8f-bf2a-61e803142ff7.png)
React랑 React+Redux의 결정적 차이
 React는 React 컴포넌트 자신이 개별적으로 상태관리를 한다.
 React+Redux는 상태관리를 하는 전용 장소(store)에서 상태를 관리하고, React 컴포넌트는 그걸 보여주기만 하는 용도로 쓰인다.

Store
 상태는 기본적으로 전부 여기서 집중관리 됩니다. 커다란 JSON의 결정체정도의 이미지입니다.

Action 및 Action Creator
 Store 및 Store에 존재하는 State는 아주 신성한 것이라고 할 수 있습니다. React 컴포넌트같은 하등한 것이 직접 접근하려고 하면 안 되는 것이죠. 직접 접근하기 위해 Action이라는 의식을 거쳐야 합니다. 이벤트 드리븐과 같은 개념입니다.

Reducer
 앞에 ‘Store의 문지기’라고 쓴 적이 있습니다만, 그 개념과 비슷한 역할을 하는 것이 Reducer입니다.
 함수형 프로그래밍에서 Reducer라는 용어는 합성곱을 의미합니다만, Redux에 한해서는 아래와 같이 이전 상태와 Action을 합쳐, 새로운 state를 만드는 조작을 말합니다.

### DB구조 
![KakaoTalk_20211125_114838306](https://user-images.githubusercontent.com/88940298/143371203-28d2aa41-7894-442c-a505-594b6f10506c.png)


각 관계에 맞게 관계쿼리 생성 
image의 경우 sns 및 사진첩 에서 동시에 사용하기 때문에 관계를 엮어 사용



### 프로젝트 기획안 PPT
[구글 프레젠테이션 파일](https://docs.google.com/presentation/d/13yVkx7W7bpqiPpieAJCAUgyme5Hsj_4gum353ISTyi4/edit#slide=id.p)   
[구글 프리젠테이션 파일 기획안 2](https://drive.google.com/file/d/17_Bz_mce2lQwyWdOZ9gFvuxifBwlwVXD/view?usp=sharing)



