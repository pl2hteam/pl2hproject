import styled from "styled-components";
import Layout from "../Layout/Layout";
import Sidebar from "../Layout/Sidebar";
import Content from "../Layout/Content";
import Cards from "../Layout/Card";
import { useSelector } from "react-redux";
import { Button, Form, Input } from "antd";
import MovieFileUpload from "./MovieFileUpload";
import React, { useEffect, useState } from "react";
import Axios from "axios";

import { withRouter } from "react-router-dom";

import { MdMailOutline, MdLocationOn, MdPhoneIphone } from "react-icons/md";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ContentSection = styled.section`
  height: fit-content !important;
  h2 {
    padding: 5px;
    margin-bottom: 10px;
    font-weight: bold;
    color: green;
  }
  &:first-of-type {
    h2 {
      margin-bottom: 5px;
    }
    div {
      width: 100%;
      min-height: 200px;
      img {
        width: 100%;
      }
    }
  }
  &:last-of-type {
    margin-top: 20px;
    h2 {
      margin-bottom: 15px;
      border-bottom: 2px solid #eee;
    }
  }
  ul {
    line-height: 1.8;
    li {
      height: 30px;
      border-bottom: 1px dashed #a5a5a5;
    }
  }
`;

const ProfileSection = styled.section`
  height: fit-content !important;
  &:last-of-type {
    padding: 10px 0;
    border-top: 1px dashed #a5a5a5;
    p {
      display: flex;
      align-items: center;
      margin: 10px 0;
    }
    svg {
      margin-right: 3px;
      color: #666;
    }
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .my-name {
    margin-right: 5px;
    color: green;
    font-size: 1rem;
    font-weight: bold;
  }
  .my-sex,
  .my-brthdy {
    color: #9e9e9e;
    font-size: 0.85rem;
  }
  .my-sex {
    margin-right: 2px;
    font-size: 0.8rem;
  }
`;

const ChangeCondition = (props) => {
  const userInfo = useSelector((state) => state.user);

  const [ChangeMyImage, setChangeMyImage] = useState("");
  const [ChangeCoupleCode, setChangeCoupleCode] = useState("");
  const [ChangeMessage, setChangeMessage] = useState("");
  const [ChangeEmail, setChangeEmail] = useState("");
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
  const onChangeEmail = (event) => {
    setChangeEmail(event.currentTarget.value);
  };
  const onChangePhone = (event) => {
    setChangePhone(event.currentTarget.value);
  };
  const onChangeAddress = (event) => {
    setChangeAddress(event.currentTarget.value);
  };

  const onSubmit = () => {
    const variables = {
      id: userInfo.userData.id,
      image: ChangeMyImage,
      couple_code: ChangeCoupleCode,
      message: ChangeMessage,
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
  };

  let userImg;
  if (props.user.userData) {
    userImg = props.user.userData.image;
    console.log(props.user.userData.image);
  }

  let postvideo = {
    updateImages,
  };

  const [CodeCode, setCodeCode] = useState("");
  const [Length, setLength] = useState("8");
  const [LowerCheck, setLowerCheck] = useState(true);
  const [UpperCheck, setUpperCheck] = useState(true);
  const [NumberCheck, setNumberCheck] = useState(true);
  const [SymbolCheck, setSymbolCheck] = useState(false);

  const inputLength = (e) => {
    setLength(e.target.value);
  };
  const LowerCheckSwitch = (e) => {
    setLowerCheck(!LowerCheck);
  };
  const UpperCheckSwitch = (e) => {
    setUpperCheck(!UpperCheck);
  };
  const NumberCheckSwitch = (e) => {
    setNumberCheck(!NumberCheck);
  };
  const SymbolCheckSwitch = (e) => {
    setSymbolCheck(!SymbolCheck);
  };

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
 
  return (
    <Layout>
      <Sidebar>
        <Cards>
          <FlexWrapper>
            <ProfileSection>
              <img src={`http://13.124.13.37:5000/${userImg}`} alt="profile" />
              <hr />
              <h2>상태메세지</h2>
              <p>{userInfo.userData.message}</p>
            </ProfileSection>
          </FlexWrapper>
        </Cards>
      </Sidebar>
      <Content>
        <Cards>
          <ContentSection>
            <Form onSubmit={onSubmit}>
              <MovieFileUpload refresh={postvideo} />
              <p>
                <label>커플코드</label>
                <Input
                  onChange={onChangeCoupleCode}
                  value={ChangeCoupleCode}
                  placeholder={userInfo.userData.couple_code}
                />
                <div onClick={CodeCodeCreator}>커플코드생성버튼</div>
                <div>
                  <br />
                  출력 코드
                  <br />
                  {CodeCode}
                </div>
              </p>
              <p>
                <label>상태메세지</label>
                <Input
                  onChange={onChangeMessage}
                  value={ChangeMessage}
                  placeholder={userInfo.userData.message}
                />
              </p>
              <Button onClick={onSubmit}>수정</Button>
            </Form>
            <Form onSubmit={onSubmitUserInfo}>
              <div style={{ width: "75%", margin: "3rem auto" }}>
                <h2>MY CONDITION</h2>
                {/* <p>
                  <label>이메일</label>
                  <MdMailOutline />
                  <Input
                    onChange={onChangeEmail}
                    value={ChangeEmail}
                    placeholder={userInfo.userData.email}
                  />
                  <Input
                    onChange={onChangeEmail}
                    value={userInfo.userData.email}
                    hidden
                  />
                </p> */}

                <p>
                  <label>연락처</label>
                  <MdPhoneIphone />
                  <Input
                    onChange={onChangePhone}
                    value={ChangePhone}
                    placeholder={userInfo.userData.phone}
                  />
                  <Input
                    onChange={onChangePhone}
                    value={userInfo.userData.phone}
                    hidden
                  />
                </p>
                <p>
                  <label>주소</label>
                  <MdLocationOn />
                  <Input
                    onChange={onChangeAddress}
                    value={ChangeAddress}
                    placeholder={userInfo.userData.address}
                  />
                  <Input
                    onChange={onChangeAddress}
                    value={userInfo.userData.address}
                    hidden
                  />
                </p>
                <p>
                  <label>이름</label>
                  {userInfo.userData.name}
                </p>
                <p>
                  <label>성별</label>
                  {userInfo.userData.gender}
                </p>
                <p>
                  <label>생년월일</label>
                  {userInfo.userData.birth}
                </p>
              </div>
              <Button onClick={onSubmitUserInfo}>회원정보 변경</Button>
            </Form>
          </ContentSection>
        </Cards>
      </Content>
    </Layout>
  );
};

export default withRouter(ChangeCondition);