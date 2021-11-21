import styled from "styled-components";
import Layout from "./Layout/Layout";
import Sidebar from "./Layout/Sidebar";
import Content from "./Layout/Content";
import Cards from "./Layout/Card";
import UpdateProfile from "./UpdateProfile";
import MiniRoom from "../Common/miniroom/miniRoom";
import { useSelector } from "react-redux";
import img from "../Common/img/minime/연인.png"
import VisitorWriting from "./visitor/VisitorWriting";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

import { Link } from "react-router-dom";
import {
  MdMailOutline,
  MdLocationOn,
  MdPhoneIphone,
} from "react-icons/md";
import { publicUrl } from "../Common/components/utils"
import ChangeCondition from "../SNS/MyPage/ChangeCondition";
import TodayIs from "./TodayIs";
const Mini = styled.div`
width: 100%;
`;
const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

`;
const FlexWrapperImage = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
    width: 250px;
    height: 250px;

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

const LinkTitle = styled.p`
  display: flex;
  align-items: center;
  margin: 10px 0;
  &:first-of-type {
    margin-top: 20px;
  }
  &:last-of-type {
    margin-bottom: 20px;
  }
  cursor: pointer;
  svg {
    margin-right: 5px;
    color: #666;
    font-size: 1.2rem;
  }
  &:hover {
    color: green;
  }
`;

const Home = (props) => {
  const userInfo = useSelector(state => state.user);
  const [User, setUser] = useState({});
  const [CoupleCode, setCoupleCode] = useState({});
  const [CC1, setCC1] = useState([]);
  const [CC2, setCC2] = useState([]);

  let userImg;
  if (props.user.userData) {
    userImg = props.user.userData.image;
  }

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

  const getCouple = () => {
    Axios.post("/api/mysql/couples/read")
      .then((response) => {
        const arr = response.data.allUser;

        for (let i = 0; i < arr.length; i++) {
          if (arr[i].couple_code === CoupleCode) {
            if (arr[i].name !== userInfo.userData.name && userInfo.userData.couple_code !== null) {
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
      return <div>(♀)</div>
    } else if (CoupleCode !== "9999" && CoupleCode !== "9999") {
      return <div className="couple">
        <img src={img} />
        <p>{CC1}♥️{CC2}</p>
      </div>
    }
  };

  const genderImoticon = () => {
    if (User.gender == 1) {
      return <div>(♀)</div>
    } else {
      return <div>(♂)</div>
    }
  }

  return (
    <Layout>
      <Sidebar>
        <Cards>
          <FlexWrapper>
            <ProfileSection >
              <FlexWrapperImage>
                {/* <TodayIs /> */}
                <img src={`http://localhost:5000/${userImg}`} alt="profile" />
              </FlexWrapperImage>
              <Link to={'/ChangeCondition'}>내 상태변경</Link>
              <hr />
              <h2>상태메세지</h2>
              <br />
              <br />
              <br />
              <div className="couple">
                {couplelove()}
              </div>
              <p>{User.message}</p>
            </ProfileSection>
            <ProfileSection>
              <p>
                <span className="my-name">{User.name}</span>

                <span className="my-sex">{genderImoticon()}</span>
                <span className="my-brthdy">{User.birth}</span>
              </p>
              <p>
                <MdMailOutline />
                {User.email}
              </p>
              <p>
                <MdPhoneIphone />
                {User.phone}
              </p>
              <p>
                <MdLocationOn />
                {User.address}
              </p>
            </ProfileSection>
          </FlexWrapper>
        </Cards>
      </Sidebar>
      <Content>
        <Cards>
          <Mini>
            <MiniRoom />
          </Mini>
          <ContentSection>
            <h2>한 줄 감성</h2>
            <p>{getCouple()}</p>
            <VisitorWriting />
            <UpdateProfile />
          </ContentSection>
        </Cards>
      </Content>
    </Layout>

  );
};
export default withRouter(Home);