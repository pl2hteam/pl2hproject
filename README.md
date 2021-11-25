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
-  
-    사용 모듈(Server) :`
-   "async": "^3.2.2",    
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




# 발생한 이슈 & 해결 방법

### "React 배포에서의 문제점 파악 ,db및 구조설계 "

- React nodejs간 서버사이드 랜더링 처리

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


### React Client build중 에러방생

- React nodejs 간 서버사이드 랜더링 처리

[상황] 빌드도중 에러 발생

[문제] 
```
FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
```



빌드시 자바스크립트  에러발생 

[해결] export 옵션 
-노드의 기본 메모리 사이즈는 512MB다.
과도한 메모리 점유로 인하여 js 엔진이 폭발해버린 것이다.
Java와 마찬가지로 VM에서 Heap메모리 최대한도가 정해져있기 때문이며. 물론 가장 좋은것은 메모리를 적게 쓰도록 로직을 수정하는 것이지만, 그것이 어려울 경우 ‘—max-old-space-size’ 옵션을 주면 힙메모리 영역 한도를 키울수가 있다

- 로컬에서 빌드 후 git pull후 실행


## NodeJs 와 REACT 빌드 및 배포시  깨달은 점 

빌드시 메모리 관련 에러 발생 및 알 수 없는 에러가 발생햇었다. 배포시 배포 관련 숙달이 부족하였고, 빌드하는데서 에러가 발생하여 애를 먹엇다 . 좀 더 숙달하여 이러한 에러가 발생하지 않도록 하며
NGINX 서버로 하는 법을 숙달하여 시도를 해보면 좋을 것 같다




# 배포 활용(EC2, RDS,MONGGO) 


 
<img width="1440" alt="스크린샷 2021-11-24 오후 3 06 14" src="https://user-images.githubusercontent.com/88940298/143198522-a0167210-516b-46b9-9b6d-d50e5d5c60d2.png">


    

데이터베이스 AWS EC2방식 체택 인스턴스 생성후 키값생성 후
서버 연결

sudo su 입력하여 관리모드로 변경

git clone 및 git pull 하여 깃의 전체 코드 및 새로운 버전 최신화

server 폴더에서   concurrently 를 사용한  npm run dev 실행하여 server client 동시실행

AWS의 RDS 및 Altars 데이터베이스를 공유하여 협업하여 프로젝트를 진행하였고
AWS의 EC2를 활용하여 배포를 진행 server client 동시 실행 







# 상세 설명
전체 코드 : [코드](https://github.com/pl2hteam/pl2hproject)

    - 폴더 설명
    server : 서버
    client : view
    
   
    
    

서버(app.js) : [코드](https://github.com/pl2hteam/pl2hproject/blob/431cba07b5add6380c3c976e3593882c22ae3805/server/app.js)
-> 각 페이지별 라우터 설정, passport 5000번

### 페이지별  설명(React)   

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


```
const onSubmitUserInfo = () => {
    const variables = {
      id: userInfo.userData.id,
      image: ChangeMyImage,
      couple_code: ChangeCoupleCode,
      message: ChangeMessage,
      // email: ChangeEmail,
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
```





```
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

SNS 메인페이지 ->상세페이지 이동 랜덤코드 


### 방명록
```
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

```
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


### 모달창 구현

![모달](https://user-images.githubusercontent.com/88940298/143366287-7566dfb7-de38-487c-9856-9bf42bf5c9cb.gif)


onsubmit 을 통해 클릭시 모달창 렌더링
modal 에 props를 전달 하여 데이터 및 이미지 렌더링
```
 onSubmit={onSubmit} onDoubleClick={() => {
        setIndex(index);
        setOpenModal(true);
```
``` 
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


```
```










### DB구조 (ERD)
<img width="954" alt="스크린샷 2021-11-22 오후 3 13 14" src="https://user-images.githubusercontent.com/88940298/142809696-37859260-ce74-4a09-be74-0a603676a464.png">



### 프로젝트 기획안 PPT
[구글 프레젠테이션 파일](https://docs.google.com/presentation/d/13yVkx7W7bpqiPpieAJCAUgyme5Hsj_4gum353ISTyi4/edit#slide=id.p)   
[구글 프리젠테이션 파일 기획안 2](https://drive.google.com/file/d/17_Bz_mce2lQwyWdOZ9gFvuxifBwlwVXD/view?usp=sharing)



