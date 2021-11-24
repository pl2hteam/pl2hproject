# 프로젝트팀명:Pl2h


## ♥️👬👨‍❤️‍💋‍👨Pl2h('PL2H World') - 커플 sns 및 shop
## 프로젝트 기 :2021-11-05 ~ 2021-11-22

## 👜👢🧢[**서비스로 이동**](http://13.124.13.37:3000/)



p.s. 현재 서버를 닫은 관계로 실행이 되지 않습니다

![KakaoTalk_Image_2021-11-24-16-41-43](https://user-images.githubusercontent.com/88940298/143195627-412b8a3c-a61c-4842-b135-564b50293f44.gif)


---   

Member. 



한경현:[깃허브](https://github.com/kyunghyunHan)  
이민주:[깃허브](https://github.com/codecocos)  
이성민:[깃허브](https://github.com/LeessangMin)   
박준혁:[깃허브](https://github.com/berrypjh)  



  
  

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

커플간  SNS 사이트를 싸이월드의 느낌으로 재현하여 커플 SNS 및 커플 용품 SHOP 구현

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
   -
   

### 전체 소스 코드 [클라이언트](https://github.com/pl2hteam/pl2hproject/tree/main/client) [서버](https://github.com/pl2hteam/pl2hproject/tree/main/server)


### 사용한 기술

- 웹 화면 구성 : `REACT` 
- DB 액션 처리 : `Sequelize` `mongoose`
- DBMS : `MySQL` `Mongo` 
- 개발 Tool :`PostMan``Visual Studio Code``github`
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
-  
-    사용 모듈(Server) : `
    "async": "^3.2.2",
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
    "sequelize-cli": "^6.3.0"`

### 주요 기능

- 로그인 : 일반 로그인, `Sequelize``passport``mysql` `REDUX` 
- 회원가입 : `Sequelize` `passport``mysql` `mongo` `mongoose` `REDUX`
- 회원정보변경 :`Sequelize``mysql``mongo` `mongoose`
- 장바구니 : `Sequelize``mysql` `mongo` `mongoose`
- 결제 : `Sequelize` `passport``PAYTAL``mongo` `mongoose`
- 마이페이지 : `Sequelize``mysql` `RDS`
- SNS:`Sequelize``mysql``RDS`
- 놀거리 :`Sequelize``mysql``RDS`
- 편지:`Sequelize``mysql``RDS`
- 놀거리 :`Sequelize``mysql``RDS`
- MUSIC PLAYER :`styled-componets`
- 관리자모드(상품등록 및 삭제) :`mongo` `mongoose`
- 물품 필터 (검색): `mongo` `mongoose` 
- 모달:`Sequelize``mysql``RDS`




# 발생한 이슈 & 해결 방법

### "Nodejs 처리에서의 문제점 파악 ,db및 구조설계 "

- Nunjucks 템플릿 엔진 사용에 미숙으로 인한 에러발생

[상황] nunjucks 동적인 처리 미숙으로 인해 템플릿 에러발생

[문제] nunjucks 동적인 처리 미숙으로 인해 템플릿 에러발생

[해결] public파일 생성후 에러 해결

- nunjucks for문 구현 시 화면에 구현 장애

[상황] 장바구니 구현시 nunjucks 활용

[문제] for문 과 mysql 관계 설정 미숙으로 인해 화면에 렌더링이 안댐

[해결] nunjucks 와 관게쿼리 해결 완료 로 인해 문제해결

- 라우트 get,post,CRUD 메서드 연결 구현 이해부족

[상황] 게시물,장바구니,상품등록,회원가입 구현에 있어서 에러발생

[문제] 게시물,장바구니,상품등록등 등 관계쿼리 사용부분에 있어서 CRUD에 대한 이해부족으로 인해 장애발생

[해결] 추가적인 학습과 관계쿼리 추가로 이해하면서 보안하여 장애 해결

- Git 브랜치 활용 미숙

[상황] 코드 병합

[문제] 각자 코드 작성 한것에 대한 코드 병합시 에러발생 (코드 병합시 코드 삭제댐)

[해결] 분업화 및 소통활성화 후에 코드 병합시 순차적으로 병합 

- Nunjucks css,js코드먹통

[상황] 코드 가 스크립트,링크로 경로를지정해줘도 코드가먹지않는현상

[문제] 동적인파일이먹는곳은 메인,레이아웃등 헤더, 코드가 연결이되는데 그외에 인크루드방식으로 사용하는 html은 코드가 먹통이되는현상이생김

[해결] 인크루드방식코드는 html파일자체에 css,js를 작성했음

      - 코드먹통으로인한 SASS사용

      [상황] 링크,스크립트경로지정이안되어 SCSS 컴파일한 CSS 동적인요소언어들이 먹지않는현상

      [문제] 어떻게든 스크립트형식이나 링크를 해결할려고했으나 구글링을해도 넌적스에대한 관련대체방안들이 너무적어서 참고할요소가 없어서 SCSS를 포기해야되는지 고민

      [해결] SCSS파일을 CSS로 컴파일후 겹치는 CSS요소가있는지 각파일마다 확인후 자체적으로 따로 HTML파일안에 스타일을 지정해줌으로써 해결


- 두 테이블간의 관계 핸들링 미숙

[상황] 게시글을 작성한 유저의 nick 값을 작성자 란에 넣지 못함

[문제] 해당 페이지로 데이터를 보냄과 nunjucks 문으로 그 값을 불러오는데 있어 미숙

[해결] 라우터에서 정보를 get할 때 User model에서 nick을 attributes에 추가해주고 nunjucks 문에서는 board의 User 모델을 불러옴

- 조회수 ++ 선언과 할당에 대한 이슈

[상황] 특정 게시물을 눌렀을 때 조회수(viewcount column)값을 올리지 못함

[문제] 렌더링/선언과 할당에 대한 이해 부족

[해결] 해당 게시물이 렌더링 되기 전에 선택된 그 글의 viewcount에 1을 더한값을 할당해 보여줌  

### "NodeJs ,Socket.IO 를 통해 실시간 통신을 구현"

- 실시간 채팅 구현

[상황] 사용자들끼리 실시간 쇼핑관련 소통을하기위한 채팅

[문제] socket.io서버 를 코드에 추가할 떄 오류 발생

[해결] 서버의 순서도를 재배치 함으로써 문제 해결

- socket.id와 idx

[상황] 특정 사용자에게 메세지를 보내려면 해당 사용자의 socket.id를 알아야 함

[문제] socket.id는 브라우저를 킬 때마다 새롭게 생성됨, 고유한 key가 되지 못함

[해결] 해당 회원을 식별할 수 있는 idx 값을 활용:  idx값을 속성이름으로 추가, 그 속성의 값은 소켓의 ID값으로 할당함

- connected

[상황] 'ooo님이 채팅방에 입장/퇴장 하셨습니다' 기능을 추가해야함

[문제] 시간 부족으로 인해 미완성

[해결]  나중에 보안 할 예정

**NodeJs socket.io 깨달은 점 **

실시간 사용자들끼리의  채팅이기에 socket.id를 사용하는 1:1 채팅을 구현했음. socket.io 특성 상 사용자 지정에 대한 이해도 숙지 

# DB 활용(EC2, RDS,MONGGO) 


이미지
    

데이터베이스 AWS EC2방식 체택 인스턴스 생성후 키값생성 후
서버 연결
이미지#

데이터베이스 AWS EC2방식 체택 인스턴스 생성후 키값생성 후
서버 연결

AWS의 RDS로 데이터베이스를 공유하여 협업하여 프로젝트를 진행하였고
AWS의 EC2를 활용하여 배포를 하였습니다

서버 연결하기 전 SCREEN을 활용 cmd창을 닫거나 컴퓨터를 종료하여도 서버가 계속 돌아가게 유지했습니다






# 상세 설명
전체 코드 : [코드](전체코드)

    - 폴더 설명
    server : 서버
    client : view
    
   
    
    

서버(app.js) : [코드](https://github.com/pl2hteam/pl2hproject/blob/431cba07b5add6380c3c976e3593882c22ae3805/server/app.js)
-> 각 페이지별 라우터 설정, passport 5000번

### 페이지별 설명(React)   

## Login 

![KakaoTalk_Image_2021-11-24-17-16-49](https://user-images.githubusercontent.com/88940298/143200371-a2a213f6-67fc-4362-a8a9-adfcb674806e.gif)

```

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

## SNS Main
 
![KakaoTalk_Photo_2021-11-24-16-10-06](https://user-images.githubusercontent.com/88940298/143191842-e032063e-9b70-4eeb-8b9e-3138f84352d8.gif)

SNS 메인페이지 ->상세페이지 이동 랜덤코드 













 
<img width="1440" alt="스크린샷 2021-11-24 오후 3 06 14" src="https://user-images.githubusercontent.com/88940298/143198522-a0167210-516b-46b9-9b6d-d50e5d5c60d2.png">







### DB구조 (ERD)
<img width="954" alt="스크린샷 2021-11-22 오후 3 13 14" src="https://user-images.githubusercontent.com/88940298/142809696-37859260-ce74-4a09-be74-0a603676a464.png">



### 프로젝트 기획안 PPT
[구글 프레젠테이션 파일](https://docs.google.com/presentation/d/13yVkx7W7bpqiPpieAJCAUgyme5Hsj_4gum353ISTyi4/edit#slide=id.p)   
[구글 프리젠테이션 파일 기획안 2](https://drive.google.com/file/d/17_Bz_mce2lQwyWdOZ9gFvuxifBwlwVXD/view?usp=sharing)
![KakaoTalk_Photo_2021-11-24-17-07-22](https://user-images.githubusercontent.com/88940298/143199061-103753d0-a7bd-4d85-b124-e53334e8a4cf.png)


