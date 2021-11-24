# 프로젝트팀명:Pl2h


## ♥️👬👨‍❤️‍💋‍👨Pl2h('PL2H World') - 커플 sns 및 shop
## 프로젝트 시작일 :2021-11-05 ~ 2021-11-22

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
    
   
    
    

서버(app.js) : [코드](https://github.com/3eteam/3eteamproject/blob/f2a2e1500f375490e0b2090779ab612237ae2039/3e/app.js)
-> 각 페이지별 라우터 설정, passport 6002번, express 모듈로 넌적스를 http로 연결

### 컴포넌트 및 페이지별 설명(React)   
## index.js :   
 
![KakaoTalk_Photo_2021-11-24-16-10-06](https://user-images.githubusercontent.com/88940298/143191842-e032063e-9b70-4eeb-8b9e-3138f84352d8.gif)

SNS 메인페이지 ->상세페이지 이동 랜덤코드 

메인인덱스  
 

<img width="500" alt="KakaoTalk_20211017_155218347" src="https://user-images.githubusercontent.com/89692626/137615345-4e4a92e5-1c7b-4268-b977-5571b5c23497.png">

넌적스의 extends 형식으로 블록형태로 잡아둔후 작업한 페이지입니다  
저희가 리엑트를 배우기전 마지막으로쓸거같은 템플릿엔진이기에 최대한 많은부분을 활용해보고싶었습니다 페이지이동식은  
extends로 블록을잡아서 작업하였고  

<img width="500" alt="KakaoTalk_20211017_155218347" src="https://user-images.githubusercontent.com/89692626/137615352-e36c765b-5200-4258-8306-83da5bf6c4c5.png">   

include 방식입니다 해당html파일의 소스의 요소를 영역에 집어넣어 작업하였습니다  

<img width="172" alt="KakaoTalk_20211017_155727405" src="https://user-images.githubusercontent.com/89692626/137615422-0ed93abb-4870-485c-9070-72e82848ea4d.png">   
Socket.io 를 사용하여 접속자끼리의 실시간 채팅을만들었습니다 마찬가지로 include 방식을 사용하였습니다 

<img width="361" alt="3" src="https://user-images.githubusercontent.com/89692626/137615827-c3b77f28-3216-4a4b-9163-93e9c337a1a6.png">
<img width="500" alt="" src="https://user-images.githubusercontent.com/89692626/137615821-08abdf2e-32d1-421a-b38e-1b0539e8535d.png">

관리자와의 채팅이가능한 라이브러리입니다 "깃플" 이며 상담요청시 해당 상담사가 1:1매칭되어 채팅기록,db에서 사용자를 불러서  
어떤사용자가 시간표시와함께 어떠한 문의를 남겼는지 따로 저장이가능하며 어떠한상담사가 상담했는지도 표시가됩니다  
해당 라이브러리에는 상담요청이왔을때 카톡으로 알림이오는것도있어서 매우 편리하다 판단되어 사용해봤습니다  
   
## join :    
<img width="1133" alt="KakaoTalk_20211017_155846026" src="https://user-images.githubusercontent.com/89692626/137615487-14824b09-a5c0-4588-aeb9-65cf9e11a997.png">   
회원가입 페이지입니다 scss와 gif방식을사용하여 쇼케이스형식으로 왼쪽에는 이미지(GIF)와 음악이 재생이됩니다  
음악같은경우 크롬정책상 autoplay방식이 불가능한데  
오픈소스인 howl 을 사용하여 사용자가 헤더에있는 "회원가입" 버튼을 클릭했을시 사용자가 음악을 재생하는걸 동의하는걸로 간주하도록 제작하여  
회원가입페이지에 들어왔을때 자동으로 음악이 재생되도록 설정하였고 왼쪽하단엔 음악을 끄고 키는 기능을 넣었습니다  
<img width="500" alt="KakaoTalk_20211017_160205029" src="https://user-images.githubusercontent.com/89692626/137615680-b3adccde-f3f7-4179-bb99-24159d6414b0.png">회원가입하는 과정에서 유저의 정보를 담는다. 가입시 입력하는 email값이 unique로 중복이 안되게 하였고 비밀번호는 12자리의 해쉬값으로 저장하고 이미지는 변환된 url값으로 저장한다.
<img width="500" alt="KakaoTalk_20211017_160215296" src="https://user-images.githubusercontent.com/89692626/137615638-d9c36e30-2816-46b4-b8e1-084fc5a800f6.png">
회원가입하는 유저들의 profile img들을 담아 저장할 폴더를 만든다. multer를 통해 img를 profile img에 저장할 수 있게 하고 img 파일은 url 값으로 변환한다.
<img width="500" alt="KakaoTalk_20211017_160202804" src="https://user-images.githubusercontent.com/89692626/137615615-6990152d-b8ae-4fe8-b5f2-2176442aa8e1.png">    
login에는 passport에 넣어준 로그인 권한을 유지할 수 있게 하는 방법을 local과 kakao로 저장한다.
    
## login :  
<img width="500" alt="KakaoTalk_20211017_160529161" src="https://user-images.githubusercontent.com/89692626/137615748-7cd43437-9eaf-4d75-9412-ac5f205757fe.png">   
<img width="393" alt="1" src="https://user-images.githubusercontent.com/89692626/137615766-aa64fd48-cf60-4750-91ab-ad5a16be19e9.png">   
serializeUser와 deserailizeUser를 통해 로그인할 수 있게 해준다.
<img width="602" alt="2" src="https://user-images.githubusercontent.com/89692626/137615784-ec660a00-550b-460c-8a6c-e60582821ad0.png">  
이메일과 비밀번호값을 이용해 user의 정보와 맞는지 비교한다. 비밀번호가 일치하는지 알아보는 과정에서는 bcrypt 모듈을 사용했다.
  
## catlist(관리자 모드) :    
<img width="500" alt="11" src="https://user-images.githubusercontent.com/89692626/137615880-456ebc39-d110-4f02-9205-49ff64616984.png">  
<img width="500" alt="22" src="https://user-images.githubusercontent.com/89692626/137615883-06bfd619-cab6-4ac8-9962-fed0ca6b7b5e.png">  
<img width="500" alt="4" src="https://user-images.githubusercontent.com/89692626/137615937-b948f740-7fa6-4984-854e-3ceecaeda524.png">   
<img width="500" alt="5" src="https://user-images.githubusercontent.com/89692626/137615991-ee481480-c48d-4688-b3ab-402393c8d307.png">  
<img width="500" alt="6" src="https://user-images.githubusercontent.com/89692626/137615998-5f48cb9a-28ea-4ce7-a7df-04bae5e03e36.png">  
<img width="500" alt="7" src="https://user-images.githubusercontent.com/89692626/137616060-072cef9a-be20-4cd1-9a7c-986eb67b0af3.png">  
<img width="500" alt="8" src="https://user-images.githubusercontent.com/89692626/137616064-b5da190d-3dc7-4094-983e-b37d0deb1b16.png">  

관리자 모드에 post.js에 multer 모듈을 사용하여 이미지업로드를 uploads폴더에 자동 저장하며 url만 데이터베이스에 삽입

get에서 불러온 데이터베이스 값을 twits에 저장하여 하단부분에 렌더링

특정 id값만 불러와 전체상품 데이터베이스(Post)의 해당 특정 id값만 삭제

관리자만 관리자모드에접근하여사용할수있게했습니다
관리자모드에서 저장하게 되면 모든 물품이 하단에 위치하여생성 삭제가능하며
삭제할시 전체 물품 데이터베이스에서 데이터삭제


## nike :   
<img width="400" alt="9" src="https://user-images.githubusercontent.com/89692626/137616135-b6a95861-90cc-4617-8ee6-9fff2eaa6648.png">   
<img width="400" alt="10" src="https://user-images.githubusercontent.com/89692626/137616142-e4a68889-f17b-45a3-bd52-292862b73263.png">  
  
  
 넌적스 
  if문 및 for문을 사용하여 전체상품중 nike에 해당하는 컬럼값을가져와 
for문 사용하여 물품정렬

form 태그 사용 물품의 가격 이름 브랜드 등 
장바구니데이터베이스로 정보전달
사용하여
  
  
  
  
## alllist :   
<img width="400" alt="12" src="https://user-images.githubusercontent.com/89692626/137616175-df939fbd-b875-4f22-9397-02e1a6c74f71.png">  
<img width="400" alt="13" src="https://user-images.githubusercontent.com/89692626/137616199-51fcfcb7-9c24-41d2-9bbb-c7aa68749d06.png">  
<img width="400" alt="14" src="https://user-images.githubusercontent.com/89692626/137616235-8f035ea5-9872-436d-979f-72e7dbe269a0.png">  
  
  
  전체상품 페이지 라우터이며 관리자페이지에서 업로드한 전체물품을 확인할 수 있으며,get으로 전체물품을 불러온 후 정렬을 하였으며  전체물품을 확인가능하며 장바구니도 옆에구현하여 전체물품을 보면서 삭제할수 있게 기능을 구현하였음
  
## search :   
<img width="400" alt="15" src="https://user-images.githubusercontent.com/89692626/137616275-b2377a89-77a0-4d6a-bcf4-9c39fcc8980d.png">  

전체상품에서 입력한 태그값을 입력시 검색이 되게해놧으며 검색 후 물품 장바구니에 추가 가능
  
## cart :   
<img width="400" alt="16" src="https://user-images.githubusercontent.com/89692626/137616301-2a3ad31a-9388-41ca-8c30-43441c59d250.png">  
<img width="400" alt="23" src="https://user-images.githubusercontent.com/89692626/137616473-132a255d-463f-4262-8b9c-4590b29c0a63.png">  
<img width="400" alt="24" src="https://user-images.githubusercontent.com/89692626/137616469-5729844f-ff74-4501-8e6a-99b3eefc70a0.png">  
<img width="400" alt="25" src="https://user-images.githubusercontent.com/89692626/137616470-5e0e98b7-b71c-469f-97ca-057cbe332b87.png">  
<img width="400" alt="26" src="https://user-images.githubusercontent.com/89692626/137616471-affad1db-6fb4-4826-9051-7a5a6dce756d.png">  
<img width="400" alt="27" src="https://user-images.githubusercontent.com/89692626/137616472-50152136-9c18-4a2d-b19c-2ce2e6ba0c70.png">  
  
  
  브랜드상품페이지에서 상품을 post방식으로 보내게 되면 cart데이터베이스 담겨 userid에 해당하는 물품을 반환하여 랜더링 됨
  또한 삭제시 데이터베이에서 개별삭제되며
  전체삭제시 userid값에 해당하는 장바구니 데이터 전부삭제
  결제시 payments 데이터베이스에 주문정보가 입력되며
  결제 시 해당 유저id 값에 해당하는 장바구니 데이터베이스 데이터 전부 
## profile :  

<img width="400" alt="29" src="https://user-images.githubusercontent.com/89692626/137616555-458eeff7-4a3b-4def-acdc-52df795f3bea.png">  
<img width="400" alt="30" src="https://user-images.githubusercontent.com/89692626/137616556-720fc3a8-46c8-45d8-99c0-f79b3b6c3c3a.png">  
<img width="400" alt="31" src="https://user-images.githubusercontent.com/89692626/137616581-65a3d05e-04f8-4fb0-abb6-8c27912ad5f4.png">  

## board : board, boarddetail, boardwrite, boardedit  
<img width="400" alt="61" src="https://user-images.githubusercontent.com/89692626/137718441-cb96579f-a46a-4201-90aa-ed579aa468f2.png">  
게시판의 첫 페이지로 게시글 번호는 AUTO INCREMENT되는 게시글의 id로 나타나고 작성자에는 해당 게시글을 작성한 유저의 닉네임이 표시된다.  
<img width="400" alt="62" src="https://user-images.githubusercontent.com/89692626/137718449-2d768a39-72bf-4168-912a-4912b46db76f.png">  
글 작성 버튼을 누르면 넘어가는 페이지로 제목과 내용과 사진을 업로드할 수 있고 제출버튼을 누르면 게시글이 DB에 저장되어 board게시판에 보여진다.  
<img width="400" alt="63" src="https://user-images.githubusercontent.com/89692626/137718456-fb72d3c2-3d5a-43f0-b5aa-508ba4a759d7.png">  
방금 작성한 게시글이 닉네임과 함께 등록된 모습이다.  
<img width="400" alt="64" src="https://user-images.githubusercontent.com/89692626/137718457-02edc0c9-5f7f-4db9-a3ad-d6562be1a375.png">  
게시글의 제목을 누르면 해당 글을 더 자세히 볼 수 있는데 조회수는 해당 페이지로 렌더링되기 전에 게시글의 viewcount가 1 올라간다.   
<img width="368" alt="55" src="https://user-images.githubusercontent.com/89692626/137724837-d882c490-206e-4b66-b4b6-3b303fa00707.png">  
자기가 쓴 글에는 유저Nick과 해당 게시글의 Nick이 같기 때문에 수정과 삭제 버튼이 생긴다. 삭제를 하게 되면 DB에서 해당글이 사라진다.  
<img width="400" alt="65" src="https://user-images.githubusercontent.com/89692626/137718460-66a12fda-10f2-46c0-81b3-5f248780e6d4.png">  
수정을 하면 제목과 내용은 value를 가져와서 그대로 뜬 상태에서 글을 수정할 수 있게 되어있고 위와 같이 수정이 된다.  
<img width="400" alt="66" src="https://user-images.githubusercontent.com/89692626/137718461-a7c693cf-884f-454a-a2a1-a1f795c38a25.png">  
수정을 하면 위와 같이 수정된 내용이 게시글에 다시 표시가 된다.   
  

  












 







### DB구조 (ERD)
<img width="954" alt="스크린샷 2021-11-22 오후 3 13 14" src="https://user-images.githubusercontent.com/88940298/142809696-37859260-ce74-4a09-be74-0a603676a464.png">



### 프로젝트 기획안 PPT
[구글 프레젠테이션 파일](https://docs.google.com/presentation/d/13yVkx7W7bpqiPpieAJCAUgyme5Hsj_4gum353ISTyi4/edit#slide=id.p)   
[구글 프리젠테이션 파일 기획안 2](https://drive.google.com/file/d/17_Bz_mce2lQwyWdOZ9gFvuxifBwlwVXD/view?usp=sharing)


