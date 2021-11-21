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

  return (
    <Layout>
      <Sidebar>
        <Cards>
          <FlexWrapper>
            <ProfileSection>
              <img src={`http://localhost:5000/${userImg}`} alt="profile" />
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
