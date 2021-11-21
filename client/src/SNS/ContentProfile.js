import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
// import btnImg from "../SNS/images/EditAndHis.png";

const Container = styled.div`
  min-height: 330px;
`;

const ImgWrap = styled.div`
  max-width: 176px;
  min-height: 100px;
  max-height: 200px;
  overflow: hidden;
  margin: 10px 0;
`;

const ProfileP = styled.p`
  height: 50px;
  /* overflow: scroll; */
  font-size: 15px;
`;

const EHWrap = styled.div`
  margin-top: 5px;
  border-bottom: 1px solid #bfbfbf;
`;

// const Button = styled.button`
//   background: url(${btnImg}) no-repeat ${(props) => props.x || 0} -1px / 115px 20px;
//   width: ${(props) => props.width || "50px"};
//   height: 20px;
//   border: none;
//`;

function ProfileContents(props) {
  const userInfo = useSelector(state => state.user);

  let userImg;
  if (userInfo.userData) {
    userImg = userInfo.userData.image;
  }
  return (
    <Container>
      <ImgWrap>
        <img src={`http://localhost:5000/${userImg}`} alt="profile" />
      </ImgWrap>
      <ProfileP>
        {userInfo.userData.message}
      </ProfileP>

    </Container>
  );
}

export default ProfileContents;
